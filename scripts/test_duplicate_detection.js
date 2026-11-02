const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));
console.log('Total input pages:', pages.length);

function stemWord(w) {
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && !w.endsWith('ches') && !w.endsWith('shes') && !w.endsWith('xes')) return w.slice(0, -1);
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && !w.endsWith('is')) return w.slice(0, -1);
  return w;
}

// Canonical normalization for search intent
function getCanonicalIntentKey(page) {
  const raw = page.primaryKeyword.toLowerCase();
  
  // Clean punctuation
  const clean = raw.replace(/["'’]/g, '').replace(/[^\w\s]/g, ' ').trim();
  const tokens = clean.split(/\s+/).filter(Boolean);
  
  // Normalize tokens
  const normTokens = tokens.map(tok => {
    // standardize measurements
    if (tok === 'in' || tok === 'inch' || tok === 'inches') return 'inch';
    // standardize tv terms
    if (tok === 'tv' || tok === 'tvs' || tok === 'television' || tok === 'televisions' || tok === 'tele') return 'tv';
    // standardize app terms
    if (tok === 'app' || tok === 'apps' || tok === 'application' || tok === 'applications') return 'app';
    // standardize streaming terms
    if (tok === 'stream' || tok === 'streams' || tok === 'streaming') return 'stream';
    if (tok === 'service' || tok === 'services') return 'service';
    if (tok === 'provider' || tok === 'providers') return 'provider';
    if (tok === 'subscription' || tok === 'subscriptions') return 'subscription';
    if (tok === 'player' || tok === 'players') return 'player';
    if (tok === 'guide' || tok === 'guides') return 'guide';
    if (tok === 'channel' || tok === 'channels') return 'channel';
    if (tok === 'device' || tok === 'devices') return 'device';
    if (tok === 'box' || tok === 'boxes') return 'box';
    if (tok === 'aerial' || tok === 'aerials' || tok === 'antenna' || tok === 'antennas' || tok === 'antennae') return 'antenna';
    return stemWord(tok);
  });
  
  // Deduplicate repeated tokens (e.g. 'smart tv smart tv' -> 'smart tv')
  const uniqueTokens = normTokens.filter((w, idx, arr) => arr.indexOf(w) === idx);
  
  // Sort tokens to catch word-order permutations (e.g. 'tv for sale' vs 'for sale tv')
  uniqueTokens.sort();
  
  return uniqueTokens.join(' ');
}

// Group pages by canonical search intent
const intentGroups = new Map();
pages.forEach(p => {
  const key = getCanonicalIntentKey(p);
  if (!intentGroups.has(key)) intentGroups.set(key, []);
  intentGroups.get(key).push(p);
});

// Classify exact vs near duplicates
let exactDuplicatesCount = 0;
let nearDuplicatesCount = 0;
const duplicateGroups = [];

intentGroups.forEach((group, key) => {
  if (group.length > 1) {
    // Sort group to pick the single STRONGEST page to retain:
    // Criteria:
    // 1. Higher search volume
    // 2. Shorter / cleaner primaryKeyword (penalize keyword repetition)
    // 3. Shorter slug
    group.sort((a, b) => {
      // Check if one has obvious repetitive words
      const aRep = /(.)\b.*\b\1/i.test(a.primaryKeyword) ? 1 : 0;
      const bRep = /(.)\b.*\b\1/i.test(b.primaryKeyword) ? 1 : 0;
      if (aRep !== bRep) return aRep - bRep;
      
      // Volume
      if ((b.volume || 0) !== (a.volume || 0)) {
        return (b.volume || 0) - (a.volume || 0);
      }
      
      // Length of primary keyword
      if (a.primaryKeyword.length !== b.primaryKeyword.length) {
        return a.primaryKeyword.length - b.primaryKeyword.length;
      }
      
      return a.slug.length - b.slug.length;
    });

    const retained = group[0];
    const removed = group.slice(1);

    removed.forEach(rem => {
      // Check if it was an exact duplicate (identical clean keyword or identical slug)
      const cleanA = retained.primaryKeyword.toLowerCase().replace(/[^\w]/g, '');
      const cleanB = rem.primaryKeyword.toLowerCase().replace(/[^\w]/g, '');
      if (cleanA === cleanB || retained.slug === rem.slug) {
        exactDuplicatesCount++;
      } else {
        nearDuplicatesCount++;
      }
    });

    duplicateGroups.push({
      canonicalKey: key,
      retained,
      removed
    });
  }
});

console.log('--- Duplicate Detection Dry-Run Results ---');
console.log('Total Duplicate Groups Found:', duplicateGroups.length);
console.log('Exact Duplicates Found (same alphanumeric string/slug):', exactDuplicatesCount);
console.log('Near-Duplicates Found (same search intent / stemmed synonyms):', nearDuplicatesCount);
console.log('Total Pages to Remove:', exactDuplicatesCount + nearDuplicatesCount);
console.log('Total Pages Retained:', pages.length - (exactDuplicatesCount + nearDuplicatesCount));

// Print sample duplicate groups with selected retained page and removed pages
console.log('\nSample 10 Duplicate Decisions:');
duplicateGroups.slice(0, 10).forEach((dg, i) => {
  console.log(`\n[Decision ${i+1}] Canonical Intent: "${dg.canonicalKey}"`);
  console.log(`  RETAIN: ID=${dg.retained.id} | Slug=${dg.retained.slug} | KW="${dg.retained.primaryKeyword}" | Vol=${dg.retained.volume}`);
  dg.removed.forEach(r => {
    console.log(`  REMOVE -> REDIRECT: ID=${r.id} | Slug=${r.slug} | KW="${r.primaryKeyword}" | Vol=${r.volume} -> /guide/${dg.retained.slug}`);
  });
});

