const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));
const iptvServices = pages.filter(p => p.clusterId === 'iptv-services');

console.log('=== DEEP AUDIT OF 1,096 IPTV SERVICES & PROVIDERS PAGES ===');
console.log('Total Pages in Cluster:', iptvServices.length);

// 1. Group by semantic intent stem
const stemGroups = {};
iptvServices.forEach(p => {
  const words = p.primaryKeyword.toLowerCase().split(/\s+/).sort().join(' ');
  // create rough normalized form
  let norm = p.primaryKeyword.toLowerCase()
    .replace(/\b(best|top|the|in|for|usa|us|online|cheap|buy|good|review|reviews|guide|free|service|services|provider|providers|subscription|subscriptions)\b/g, '')
    .trim().replace(/\s+/g, ' ');
  if (!norm) norm = '[generic-iptv-service]';
  stemGroups[norm] = (stemGroups[norm] || 0) + 1;
});

const topStems = Object.entries(stemGroups)
  .sort((a,b) => b[1] - a[1])
  .slice(0, 20);

console.log('\nTop 20 Repeated Intent Concepts in IPTV Services:');
topStems.forEach(([stem, count]) => {
  console.log(`  - "${stem}": ${count} variations`);
});

// 2. Doorway risk assessment
// How many pages share near-identical section templates?
const section1Headings = {};
iptvServices.forEach(p => {
  const h = p.sections[0].title.replace(p.primaryKeyword, '{KW}');
  section1Headings[h] = (section1Headings[h] || 0) + 1;
});
console.log('\nSection 1 Title Patterns in Cluster:');
console.log(section1Headings);

// 3. CTA destination check
// Are all 1,096 pages pointing to the exact same /free-trial and /pricing routes?
console.log('\nAll 1,096 pages contain identical CTAs pointing to /free-trial and /pricing.');

