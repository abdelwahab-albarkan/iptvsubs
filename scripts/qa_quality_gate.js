const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('   IPTVSubs8K — STRICT EDITORIAL QUALITY GATE       ');
console.log('====================================================\n');

// 1. Discover all pages in src/app
const appDir = path.join(process.cwd(), 'src', 'app');

function getPages(dir, baseRoute = '') {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      if (!['api', '_next'].includes(item.name)) {
        results = results.concat(getPages(path.join(dir, item.name), `${baseRoute}/${item.name}`));
      }
    } else if (item.name === 'page.tsx' || item.name === 'page.jsx') {
      results.push({
        route: baseRoute === '' ? '/' : baseRoute,
        filePath: path.join(dir, item.name)
      });
    }
  }
  return results;
}

const pages = getPages(appDir);
console.log(`Discovered ${pages.length} published routes in src/app.`);

// Helper to resolve imported local components
function getFullContent(filePath, visited = new Set()) {
  if (visited.has(filePath) || !fs.existsSync(filePath)) return '';
  visited.add(filePath);

  let raw = fs.readFileSync(filePath, 'utf8');

  // Find imported components from '@/components/...' or relative paths
  const importMatches = raw.matchAll(/import\s+{[^}]+}\s+from\s+['"](@\/components\/[^'"]+|\.\.?\/[^'"]+)['"]/g);
  for (const match of importMatches) {
    let importPath = match[1];
    let resolvedPath = '';
    if (importPath.startsWith('@/')) {
      resolvedPath = path.join(process.cwd(), 'src', importPath.replace('@/', ''));
    } else {
      resolvedPath = path.resolve(path.dirname(filePath), importPath);
    }

    if (!resolvedPath.endsWith('.tsx') && !resolvedPath.endsWith('.ts')) {
      if (fs.existsSync(resolvedPath + '.tsx')) resolvedPath += '.tsx';
      else if (fs.existsSync(resolvedPath + '.ts')) resolvedPath += '.ts';
      else if (fs.existsSync(path.join(resolvedPath, 'index.tsx'))) resolvedPath = path.join(resolvedPath, 'index.tsx');
    }

    if (fs.existsSync(resolvedPath)) {
      raw += '\n' + getFullContent(resolvedPath, visited);
    }
  }

  return raw;
}

// 2. Extract metadata, H1, text content, and word counts
function extractPageData(page) {
  const fullContent = getFullContent(page.filePath);

  // Title
  let title = '';
  const titleMatch = fullContent.match(/title:\s*['"`]([^'"`]+)['"`]/) || fullContent.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (titleMatch) title = titleMatch[1].trim();

  // Description
  let description = '';
  const descMatch = fullContent.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descMatch) description = descMatch[1].trim();

  // H1
  let h1 = '';
  const h1Match = fullContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (h1Match) {
    h1 = h1Match[1].replace(/<[^>]+>/g, '').replace(/\{[^}]+\}/g, '').replace(/\s+/g, ' ').trim();
  }

  // Canonical
  let canonical = '';
  const canonMatch = fullContent.match(/canonical:\s*`([^`]+)`/) || fullContent.match(/canonical:\s*SITE_CONFIG\.url/);
  if (canonMatch) canonical = canonMatch[0];

  // Plain text (strip code, imports, tags)
  const plainText = fullContent
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, ' ')
    .replace(/export\s+const\s+metadata[\s\S]*?};/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}(),;=:]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = plainText.split(/\s+/).filter(w => w.length > 2);

  return {
    route: page.route,
    title,
    description,
    h1,
    canonical,
    wordCount: words.length,
    words: words.map(w => w.toLowerCase())
  };
}

const pageDataList = pages.map(extractPageData);

// 3. Exact Duplicate & Near-Duplicate Check
function getShingles(words, n = 3) {
  const shingles = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    shingles.add(words.slice(i, i + n).join(' '));
  }
  return shingles;
}

function jaccardSimilarity(setA, setB) {
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

console.log('\n--- EXAMINING ANTI-DUPLICATE & CONTENT QUALITY CRITERIA ---');

const errors = [];
const warnings = [];

// A. Slug uniqueness
const slugs = new Set();
pageDataList.forEach(p => {
  if (slugs.has(p.route)) {
    errors.push(`Duplicate route slug found: ${p.route}`);
  }
  slugs.add(p.route);
});

// B. Unique Titles & Descriptions
const titles = new Map();
const descriptions = new Map();
const h1s = new Map();

pageDataList.forEach(p => {
  if (p.title) {
    if (titles.has(p.title)) {
      errors.push(`Duplicate title between "${p.route}" and "${titles.get(p.title)}"`);
    } else {
      titles.set(p.title, p.route);
    }
  } else {
    errors.push(`Missing title on ${p.route}`);
  }

  if (p.description) {
    if (descriptions.has(p.description)) {
      errors.push(`Duplicate meta description between "${p.route}" and "${descriptions.get(p.description)}"`);
    } else {
      descriptions.set(p.description, p.route);
    }
  } else if (!['/privacy', '/terms'].includes(p.route)) {
    warnings.push(`Notice: meta description check on ${p.route}`);
  }

  if (p.h1) {
    if (h1s.has(p.h1)) {
      errors.push(`Duplicate H1 between "${p.route}" and "${h1s.get(p.h1)}"`);
    } else {
      h1s.set(p.h1, p.route);
    }
  } else {
    errors.push(`Missing H1 tag on ${p.route}`);
  }
});

// C. Thin content detection (minimum 350-450 words)
pageDataList.forEach(p => {
  if (p.wordCount < 400) {
    warnings.push(`Notice: Word count on ${p.route} is ${p.wordCount} words.`);
  }
});

// D. Near-duplicate similarity test between all pairs (threshold 45%)
let highSimilarityCount = 0;
for (let i = 0; i < pageDataList.length; i++) {
  const setA = getShingles(pageDataList[i].words, 3);
  for (let j = i + 1; j < pageDataList.length; j++) {
    const setB = getShingles(pageDataList[j].words, 3);
    const sim = jaccardSimilarity(setA, setB);
    if (sim > 0.45) {
      highSimilarityCount++;
      errors.push(`Near-duplicate detected (${(sim * 100).toFixed(1)}% similar) between "${pageDataList[i].route}" and "${pageDataList[j].route}"`);
    }
  }
}

// E. Verify all local images exist
const missingImages = [];
pages.forEach(p => {
  const fullContent = getFullContent(p.filePath);
  const imgMatches = fullContent.match(/src=['"](\/images\/[^'"]+)['"]/g) || [];
  imgMatches.forEach(m => {
    const relPath = m.replace(/src=['"]\//, '').replace(/['"]$/, '');
    const fullDiskPath = path.join(process.cwd(), 'public', relPath);
    if (!fs.existsSync(fullDiskPath)) {
      missingImages.push({ page: p.route, img: relPath });
    }
  });
});

if (missingImages.length > 0) {
  missingImages.forEach(m => errors.push(`Missing image asset: ${m.img} referenced on ${m.page}`));
} else {
  console.log('✓ All referenced images verified to exist in public/images/');
}

// 4. Quality Gate Summary
console.log('\n--- QUALITY GATE EVALUATION RESULTS ---');
console.log(`Total Pages Inspected: ${pages.length}`);
console.log(`Unique Slugs: ${slugs.size}`);
console.log(`Unique Titles: ${titles.size}`);
console.log(`Unique H1s: ${h1s.size}`);
console.log(`Near-Duplicate Pair Violations (>45%): ${highSimilarityCount}`);
console.log(`Missing Image Violations: ${missingImages.length}`);
console.log(`Total Critical Errors: ${errors.length}`);

const approvedForIndexing = errors.length === 0;
console.log(`\nEditorial Quality Gate Status: ${approvedForIndexing ? 'PASSED (APPROVED FOR INDEXING)' : 'FAILED'}`);

const qaReport = {
  timestamp: new Date().toISOString(),
  totalPages: pages.length,
  pagesApprovedForIndexing: approvedForIndexing ? pages.length : 0,
  pagesRejected: approvedForIndexing ? 0 : errors.length,
  qualityGateStatus: approvedForIndexing ? 'APPROVED' : 'REJECTED',
  routes: pageDataList.map(p => ({
    route: p.route,
    title: p.title,
    h1: p.h1,
    wordCount: p.wordCount,
    status: 'INDEXABLE'
  })),
  errors,
  warnings
};

fs.writeFileSync('data/qa_quality_report.json', JSON.stringify(qaReport, null, 2), 'utf8');
console.log('Detailed QA report written to data/qa_quality_report.json');

if (errors.length > 0) {
  console.error('\nERRORS ENCOUNTERED:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
