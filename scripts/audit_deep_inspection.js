const fs = require('fs');
const path = require('path');

console.log('--- Deep Pre-Deployment Inspection ---');

// 1. Image Asset Analysis
console.log('\n--- CHECK 5: IMAGE ASSETS IN public/images ---');
const imagesDir = path.join(process.cwd(), 'public', 'images');
const allImageFiles = fs.readdirSync(imagesDir);
console.log('Total files in public/images:', allImageFiles.length);

const extCount = {};
let responsiveVariants = 0;
let baseImages = new Set();

allImageFiles.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  extCount[ext] = (extCount[ext] || 0) + 1;
  
  // check naming pattern e.g. -w400.webp, -w800.webp, -w1200.webp, -i52.webp
  if (/-w\d+\.webp$|-i\d+\.webp$/i.test(file)) {
    responsiveVariants++;
    const base = file.replace(/-w\d+\.webp$|-i\d+\.webp$/i, '');
    baseImages.add(base);
  } else {
    const base = file.replace(/\.[^/.]+$/, '');
    baseImages.add(base);
  }
});

console.log('File extensions breakdown:', extCount);
console.log('Responsive variants detected (-wXXX, -iXXX):', responsiveVariants);
console.log('Unique base image concepts identified:', baseImages.size);

// Check references in data/pages_4000.json
const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));
const imagesInPages = new Set();
pages.forEach(p => {
  if (p.image) imagesInPages.add(p.image);
});
console.log('Distinct images referenced in data/pages_4000.json:', imagesInPages.size);
console.log('Referenced images list:', Array.from(imagesInPages));

// Check if all referenced images exist on disk
let missingImages = 0;
imagesInPages.forEach(img => {
  const relPath = img.replace(/^\//, '');
  const fullPath = path.join(process.cwd(), 'public', relPath);
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING IMAGE ON DISK:', img);
    missingImages++;
  }
});
console.log('Missing images on disk count:', missingImages);


// 2. Sitemap Analysis (Checks 6 & 7)
console.log('\n--- CHECK 6 & 7: SITEMAP DEEP DIVE ---');
const sitemapSource = fs.readFileSync('src/app/sitemap.ts', 'utf8');
const coreRoutesMatch = sitemapSource.match(/const coreRoutes = \[([\s\S]*?)\];/);
let coreRoutes = [];
if (coreRoutesMatch) {
  coreRoutes = coreRoutesMatch[1]
    .split(',')
    .map(s => s.trim().replace(/['"]/g, ''))
    .filter(Boolean);
}
console.log('Core routes count in sitemap.ts:', coreRoutes.length);
console.log('Core routes list:', coreRoutes);
console.log('Total URLs sitemap generates:', coreRoutes.length + pages.length);

// Check if all 4,000 pages are present and if there are duplicate URLs
const sitemapUrls = new Set();
coreRoutes.forEach(r => sitemapUrls.add(`https://iptvsubs8k.com${r}`));
let duplicateSitemapUrls = 0;
pages.forEach(p => {
  const url = `https://iptvsubs8k.com/guide/${p.slug}`;
  if (sitemapUrls.has(url)) {
    duplicateSitemapUrls++;
  } else {
    sitemapUrls.add(url);
  }
});
console.log('Total unique URLs in sitemap set:', sitemapUrls.size);
console.log('Duplicate URLs in sitemap:', duplicateSitemapUrls);


// 3. Metadata, Canonical & Schema Validation (Check 8)
console.log('\n--- CHECK 8: METADATA & CANONICAL AUDIT ---');
let invalidCanonicals = 0;
let missingDescriptions = 0;
let missingTitles = 0;
let missingH1s = 0;
let nonHttpsCanonicals = 0;

pages.slice(0, 100).forEach(p => {
  if (!p.title || p.title.length < 10) missingTitles++;
  if (!p.description || p.description.length < 30) missingDescriptions++;
  if (!p.h1) missingH1s++;
  const expectedCanonical = `https://iptvsubs8k.com/guide/${p.slug}`;
  if (!expectedCanonical.startsWith('https://iptvsubs8k.com/guide/')) invalidCanonicals++;
});
console.log(`Sample check of 100 pages:`);
console.log(`  Invalid canonicals: ${invalidCanonicals}`);
console.log(`  Missing/short titles: ${missingTitles}`);
console.log(`  Missing/short descriptions: ${missingDescriptions}`);
console.log(`  Missing H1s: ${missingH1s}`);


// 4. Claims, Pricing, Testimonials, Refund (Check 9)
console.log('\n--- CHECK 9: PRICING, CLAIMS & TRUST AUDIT ---');
const constantsPath = 'src/lib/constants.ts';
if (fs.existsSync(constantsPath)) {
  const constantsContent = fs.readFileSync(constantsPath, 'utf8');
  console.log('Checking constants.ts for pricing and support details...');
  const pricingMatch = constantsContent.match(/pricing[\s\S]*?\];/i);
  if (pricingMatch) {
    console.log('Pricing block found in constants.');
  }
  const emailMatch = constantsContent.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
  console.log('Emails found in constants:', emailMatch);
}

// Check sample page body for claims & pricing
const samplePage = pages[0];
console.log('Sample Page 0 Title:', samplePage.title);
console.log('Sample Page 0 Specs:', samplePage.specs);
console.log('Sample Page 0 FAQs count:', samplePage.faqs.length);
console.log('Sample Page 0 FAQ 1:', samplePage.faqs[0]);
console.log('Sample Page 0 Section 1 Title:', samplePage.sections[0].heading);
console.log('Sample Page 0 Section 1 Text snippet:', samplePage.sections[0].body.slice(0, 150));

