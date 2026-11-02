const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));

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
    .filter((w, idx, arr) => arr.indexOf(w) === idx)
    .sort()
    .join(' ');
}

// Check across ALL clusters regardless of clusterId
const globalIntentMap = new Map();
pages.forEach(p => {
  const norm = normalizeStemIntent(p.primaryKeyword);
  if (!globalIntentMap.has(norm)) globalIntentMap.set(norm, []);
  globalIntentMap.get(norm).push(p);
});

let crossClusterDups = 0;
let totalGlobalDups = 0;
const globalDupGroups = [];

globalIntentMap.forEach((group, norm) => {
  if (group.length > 1) {
    totalGlobalDups += (group.length - 1);
    const clusters = new Set(group.map(p => p.clusterId));
    if (clusters.size > 1) {
      crossClusterDups++;
    }
    globalDupGroups.push({ norm, group, clusters: Array.from(clusters) });
  }
});

console.log('Total Global Duplicate Groups:', globalDupGroups.length);
console.log('Total Duplicate Pages (Across whole site):', totalGlobalDups);
console.log('Groups spanning multiple clusters:', crossClusterDups);

// Show some cross-cluster duplicates
console.log('\nSample Cross-Cluster Duplicates:');
const crossClusterSamples = globalDupGroups.filter(g => g.clusters.length > 1).slice(0, 10);
crossClusterSamples.forEach((g, i) => {
  console.log(`\nCross Group ${i+1}: "${g.norm}" (Clusters: ${g.clusters.join(', ')})`);
  g.group.forEach(p => console.log(`  - [${p.clusterId}] ${p.slug} ("${p.primaryKeyword}") vol: ${p.volume}`));
});

