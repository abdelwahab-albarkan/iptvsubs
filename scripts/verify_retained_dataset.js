const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));

// Run test_duplicate_detection logic
function stemWord(w) {
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && !w.endsWith('ches') && !w.endsWith('shes') && !w.endsWith('xes')) return w.slice(0, -1);
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && !w.endsWith('is')) return w.slice(0, -1);
  return w;
}

function getCanonicalIntentKey(page) {
  const raw = page.primaryKeyword.toLowerCase();
  const clean = raw.replace(/["'’]/g, '').replace(/[^\w\s]/g, ' ').trim();
  const tokens = clean.split(/\s+/).filter(Boolean);
  const normTokens = tokens.map(tok => {
    if (tok === 'in' || tok === 'inch' || tok === 'inches') return 'inch';
    if (tok === 'tv' || tok === 'tvs' || tok === 'television' || tok === 'televisions' || tok === 'tele') return 'tv';
    if (tok === 'app' || tok === 'apps' || tok === 'application' || tok === 'applications') return 'app';
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
  const uniqueTokens = normTokens.filter((w, idx, arr) => arr.indexOf(w) === idx);
  uniqueTokens.sort();
  return uniqueTokens.join(' ');
}

const intentGroups = new Map();
pages.forEach(p => {
  const key = getCanonicalIntentKey(p);
  if (!intentGroups.has(key)) intentGroups.set(key, []);
  intentGroups.get(key).push(p);
});

const retainedPages = [];
const removedPages = [];
const redirectMap = {}; // removedSlug -> retainedSlug

intentGroups.forEach((group, key) => {
  group.sort((a, b) => {
    const aRep = /(.)\b.*\b\1/i.test(a.primaryKeyword) ? 1 : 0;
    const bRep = /(.)\b.*\b\1/i.test(b.primaryKeyword) ? 1 : 0;
    if (aRep !== bRep) return aRep - bRep;
    if ((b.volume || 0) !== (a.volume || 0)) return (b.volume || 0) - (a.volume || 0);
    if (a.primaryKeyword.length !== b.primaryKeyword.length) return a.primaryKeyword.length - b.primaryKeyword.length;
    return a.slug.length - b.slug.length;
  });

  const retained = group[0];
  retainedPages.push(retained);

  const removed = group.slice(1);
  removed.forEach(r => {
    removedPages.push({
      id: r.id,
      slug: r.slug,
      url: r.url,
      primaryKeyword: r.primaryKeyword,
      volume: r.volume,
      retainedSlug: retained.slug,
      retainedUrl: retained.url,
      retainedKeyword: retained.primaryKeyword
    });
    redirectMap[r.slug] = retained.slug;
  });
});

console.log('Retained Count:', retainedPages.length);
console.log('Removed Count:', removedPages.length);
console.log('Total:', retainedPages.length + removedPages.length);

// Verify that retained pages have 0 duplicate keys
const retainedKeys = new Set();
let retainedKeyCollisions = 0;
retainedPages.forEach(p => {
  const k = getCanonicalIntentKey(p);
  if (retainedKeys.has(k)) retainedKeyCollisions++;
  else retainedKeys.add(k);
});
console.log('Retained key collisions:', retainedKeyCollisions);

// Check redirect loop possibility (e.g. A -> B and B -> A, or A -> A)
let selfRedirects = 0;
let chainedRedirects = 0;
Object.entries(redirectMap).forEach(([from, to]) => {
  if (from === to) selfRedirects++;
  if (redirectMap[to]) chainedRedirects++;
});
console.log('Self redirects (from === to):', selfRedirects);
console.log('Chained redirects (to is also redirected):', chainedRedirects);

