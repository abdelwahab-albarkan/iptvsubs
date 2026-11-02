const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));

// Helper: stem simple English plurals
function stemWord(w) {
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && !w.endsWith('ches') && !w.endsWith('shes') && !w.endsWith('xes')) return w.slice(0, -1);
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && !w.endsWith('is')) return w.slice(0, -1);
  return w;
}

function normalizeStemIntent(str) {
  return str.toLowerCase()
    .replace(/["'’]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    // normalize common abbreviations: in -> inch, tvs -> tv
    .map(w => {
      if (w === 'in' || w === 'inch' || w === 'inches') return 'inch';
      if (w === 'tv' || w === 'tvs' || w === 'television' || w === 'televisions') return 'tv';
      if (w === 'app' || w === 'apps' || w === 'application' || w === 'applications') return 'app';
      if (w === 'stream' || w === 'streams' || w === 'streaming') return 'stream';
      if (w === 'service' || w === 'services') return 'service';
      if (w === 'provider' || w === 'providers') return 'provider';
      if (w === 'subscription' || w === 'subscriptions') return 'subscription';
      if (w === 'player' || w === 'players') return 'player';
      if (w === 'guide' || w === 'guides') return 'guide';
      if (w === 'channel' || w === 'channels') return 'channel';
      if (w === 'device' || w === 'devices') return 'device';
      if (w === 'box' || w === 'boxes') return 'box';
      if (w === 'aerial' || w === 'aerials' || w === 'antenna' || w === 'antennas' || w === 'antennae') return 'antenna';
      return stemWord(w);
    })
    // deduplicate words in same query
    .filter((w, idx, arr) => arr.indexOf(w) === idx)
    .sort()
    .join(' ');
}

// 1. Group by Cluster + Stemmed Normalized Intent
const clusterIntentGroups = new Map();

pages.forEach(p => {
  const norm = normalizeStemIntent(p.primaryKeyword);
  const key = `${p.clusterId}::${norm}`;
  if (!clusterIntentGroups.has(key)) clusterIntentGroups.set(key, []);
  clusterIntentGroups.get(key).push(p);
});

const duplicatesList = [];
clusterIntentGroups.forEach((group, key) => {
  if (group.length > 1) {
    duplicatesList.push({
      key,
      cluster: group[0].cluster,
      pages: group
    });
  }
});

console.log('=== STEMMED NORMALIZED INTENT DUPLICATES (SAME CLUSTER) ===');
console.log('Duplicate Groups:', duplicatesList.length);
let totalDupPages = 0;
duplicatesList.forEach(d => {
  totalDupPages += (d.pages.length - 1);
});
console.log('Total Near-Duplicate Pages to remove in these groups:', totalDupPages);

console.log('\nTop 25 Duplicate Groups:');
duplicatesList.slice(0, 25).forEach((d, idx) => {
  console.log(`\nGroup ${idx + 1} [${d.cluster}] (key: ${d.key.split('::')[1]}):`);
  d.pages.forEach(p => {
    console.log(`  - ID: ${p.id} | Slug: ${p.slug} | KW: "${p.primaryKeyword}" | Vol: ${p.volume} | WordCount: ${p.wordCount}`);
  });
});

