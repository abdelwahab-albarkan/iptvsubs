const fs = require('fs');
const path = require('path');
const { generateComparisonContent } = require('./modules/comparisons');

const dataFilePath = path.join(__dirname, '..', 'data', 'pages_4000.json');
const pages = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

console.log(`Loaded ${pages.length} active guide pages from pages_4000.json`);

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(w => w.length > 0).length;
}

let updatedCount = 0;
const affectedPages = [];

pages.forEach((p, index) => {
  const kw = (p.primaryKeyword || '').toLowerCase();
  const slug = p.slug.toLowerCase();

  // Exact 38 comparison pages matching Phase 2 criteria
  const isComparison = (slug.includes('-vs-') || kw.includes(' vs ')) &&
    !['remote', 'control remoto'].some(k => kw.includes(k) || slug.includes('remote')) &&
    !['antenna', 'antena', 'coaxial', 'aerial'].some(k => kw.includes(k) || slug.includes('antenna')) &&
    !['32 inch', '43 inch', '50 inch', '55 inch', '60 inch', '65 inch', '75 inch', '85 inch', 'inch tv', 'tvs on sale', 'tv for sale', 'best buy tv', 'cheap tv', 'tv deal', 'oled tv', 'qled tv', 'smart tv sale', 'walmart tv'].some(k => kw.includes(k) || slug.includes('inch-tv') || slug.includes('tvs-on-sale') || slug.includes('tv-for-sale'));

  if (isComparison) {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
    }
    const comp = generateComparisonContent(p, hash);
    p.sections = comp.sections;
    p.faqs = comp.faqs;

    const words = p.sections.reduce((acc, s) => acc + countWords(s.content), 0);
    affectedPages.push({
      index,
      slug: p.slug,
      words
    });
    updatedCount++;
  }
});

console.log(`Updated competitor pricing on ${updatedCount} comparison pages.`);

// Write back to pages_4000.json
fs.writeFileSync(dataFilePath, JSON.stringify(pages, null, 2), 'utf8');
console.log('Saved data/pages_4000.json successfully.');

// Verification
const reloaded = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
const counts = { '72.99': 0, '76.99': 0, '40/mo': 0, '55/mo': 0, '82.99': 0, '99.99': 0, '45.99': 0, '60.99': 0 };
reloaded.forEach(p => {
  const s = JSON.stringify(p);
  for (let k in counts) {
    if (s.includes(k)) counts[k]++;
  }
});

console.log('\n--- VERIFICATION OF PRICING STRINGS ACROSS 3,260 PAGES ---');
console.log('Old YouTube TV price ($72.99):', counts['72.99'], '(must be 0)');
console.log('Old Hulu Live price ($76.99):', counts['76.99'], '(must be 0)');
console.log('Old Sling price ($40/mo):', counts['40/mo'], '(must be 0)');
console.log('Old Sling combo price ($55/mo):', counts['55/mo'], '(must be 0)');
console.log('New YouTube TV price ($82.99):', counts['82.99'], '(must be 38)');
console.log('New Hulu Live / Our own price ($99.99):', counts['99.99'], '(expected 341 our own + 38 comparison = 379)');
console.log('New Sling price ($45.99):', counts['45.99'], '(must be 2)');
console.log('New Sling combo price ($60.99):', counts['60.99'], '(must be 2)');

const below500 = reloaded.filter(p => p.sections.reduce((acc, s) => acc + countWords(s.content), 0) < 500);
console.log(`Pages below 500 words: ${below500.length} (must be 0)`);
console.log(`Total active pages: ${reloaded.length} (must be 3260)`);

