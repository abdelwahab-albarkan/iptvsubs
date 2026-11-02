const fs = require('fs');
const path = require('path');

console.log('=== STARTING DUPLICATE CONTENT CLEANUP ===\n');

// 1. Load original 4,000 pages
const originalPath = path.join(__dirname, '..', 'data', 'pages_4000.json');
const pages = JSON.parse(fs.readFileSync(originalPath, 'utf8'));
console.log(`Total pages scanned: ${pages.length}`);

// Make backup
const backupPath = path.join(__dirname, '..', 'data', 'pages_4000.backup_pre_cleanup.json');
fs.writeFileSync(backupPath, JSON.stringify(pages, null, 2), 'utf8');
console.log(`Backup saved to: ${backupPath}`);

// Stem helper
function stemWord(w) {
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && !w.endsWith('ches') && !w.endsWith('shes') && !w.endsWith('xes')) return w.slice(0, -1);
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && !w.endsWith('is')) return w.slice(0, -1);
  return w;
}

// Canonical Intent Normalizer
function getCanonicalIntentKey(p) {
  const raw = p.primaryKeyword.toLowerCase();
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

// Group pages by canonical intent
const intentGroups = new Map();
pages.forEach(p => {
  const key = getCanonicalIntentKey(p);
  if (!intentGroups.has(key)) intentGroups.set(key, []);
  intentGroups.get(key).push(p);
});

console.log(`Distinct canonical intent groups identified: ${intentGroups.size}`);

const retainedPages = [];
const removedPages = [];
const redirectMap = {}; // fromSlug -> toSlug
const redirectsList = [];

let exactDuplicatesCount = 0;
let nearDuplicatesCount = 0;

intentGroups.forEach((group, key) => {
  // Sort group to select strongest page
  // 1. Penalize obvious repeated stutter words in primary keyword
  // 2. Higher search volume
  // 3. Shorter, cleaner keyword
  // 4. Shorter slug
  group.sort((a, b) => {
    const aRep = /(.)\b.*\b\1/i.test(a.primaryKeyword) ? 1 : 0;
    const bRep = /(.)\b.*\b\1/i.test(b.primaryKeyword) ? 1 : 0;
    if (aRep !== bRep) return aRep - bRep;
    if ((b.volume || 0) !== (a.volume || 0)) return (b.volume || 0) - (a.volume || 0);
    if (a.primaryKeyword.length !== b.primaryKeyword.length) return a.primaryKeyword.length - b.primaryKeyword.length;
    return a.slug.length - b.slug.length;
  });

  const retained = group[0];
  const secondarySet = new Set(retained.secondaryKeywords || []);

  const duplicates = group.slice(1);
  duplicates.forEach(dup => {
    // Add removed primary keyword to retained secondary keywords
    secondarySet.add(dup.primaryKeyword);
    if (dup.secondaryKeywords) {
      dup.secondaryKeywords.forEach(sk => secondarySet.add(sk));
    }

    // Determine if exact or near duplicate
    const cleanRetained = retained.primaryKeyword.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanDup = dup.primaryKeyword.toLowerCase().replace(/[^a-z0-9]/g, '');
    let type = 'Near-Duplicate';
    if (cleanRetained === cleanDup || retained.slug === dup.slug) {
      type = 'Exact Duplicate';
      exactDuplicatesCount++;
    } else {
      nearDuplicatesCount++;
    }

    redirectMap[dup.slug] = retained.slug;

    const redirectItem = {
      fromId: dup.id,
      fromSlug: dup.slug,
      fromUrl: `/guide/${dup.slug}`,
      fromKeyword: dup.primaryKeyword,
      volume: dup.volume || 0,
      cluster: dup.cluster,
      toSlug: retained.slug,
      toUrl: `/guide/${retained.slug}`,
      toKeyword: retained.primaryKeyword,
      type
    };

    redirectsList.push(redirectItem);
    removedPages.push(dup);
  });

  retained.secondaryKeywords = Array.from(secondarySet).slice(0, 8); // Top 8 relevant secondary keywords
  retainedPages.push(retained);
});

console.log(`\nDuplicate classification:`);
console.log(`  Exact duplicates found: ${exactDuplicatesCount}`);
console.log(`  Near-duplicates found: ${nearDuplicatesCount}`);
console.log(`  Total pages removed: ${removedPages.length}`);
console.log(`  Total pages retained: ${retainedPages.length}`);

// 2. Update Internal Links within Retained Pages
console.log('\n--- Updating Internal Links in Retained Pages ---');
const retainedBySlug = new Map(retainedPages.map(p => [p.slug, p]));
const retainedByCluster = new Map();
retainedPages.forEach(p => {
  if (!retainedByCluster.has(p.clusterId)) retainedByCluster.set(p.clusterId, []);
  retainedByCluster.get(p.clusterId).push(p);
});

let internalLinksRemapped = 0;
let internalLinksReplaced = 0;

retainedPages.forEach(page => {
  if (!page.relatedLinks || page.relatedLinks.length === 0) return;

  const updatedLinks = [];
  const seenLinkSlugs = new Set([page.slug]); // Don't link to self

  page.relatedLinks.forEach(rel => {
    let targetSlug = rel.slug;
    // Check if target was removed
    if (redirectMap[targetSlug]) {
      targetSlug = redirectMap[targetSlug];
      internalLinksRemapped++;
    }

    if (!seenLinkSlugs.has(targetSlug) && retainedBySlug.has(targetSlug)) {
      seenLinkSlugs.add(targetSlug);
      const targetPage = retainedBySlug.get(targetSlug);
      updatedLinks.push({
        slug: targetPage.slug,
        title: targetPage.title,
        path: targetPage.path,
        primaryKeyword: targetPage.primaryKeyword
      });
    }
  });

  // If link count is less than 4, fill from same cluster
  const clusterPool = retainedByCluster.get(page.clusterId) || retainedPages;
  let poolIdx = 0;
  while (updatedLinks.length < 4 && poolIdx < clusterPool.length) {
    const candidate = clusterPool[poolIdx++];
    if (!seenLinkSlugs.has(candidate.slug)) {
      seenLinkSlugs.add(candidate.slug);
      updatedLinks.push({
        slug: candidate.slug,
        title: candidate.title,
        path: candidate.path,
        primaryKeyword: candidate.primaryKeyword
      });
      internalLinksReplaced++;
    }
  }

  page.relatedLinks = updatedLinks;
});

console.log(`Internal links remapped from removed slugs to retained slugs: ${internalLinksRemapped}`);
console.log(`Internal links refreshed with unique cluster candidates: ${internalLinksReplaced}`);

// 3. Write Updated pages_4000.json
fs.writeFileSync(originalPath, JSON.stringify(retainedPages, null, 2), 'utf8');
console.log(`\nUpdated ${originalPath} with ${retainedPages.length} unique pages.`);

// 4. Write Redirects JSON
const redirectsPath = path.join(__dirname, '..', 'data', 'redirects_duplicates.json');
fs.writeFileSync(redirectsPath, JSON.stringify(redirectsList, null, 2), 'utf8');
console.log(`Saved ${redirectsList.length} 301 redirects to: ${redirectsPath}`);

// 5. Write CSV for Master Retained Pages & Removed Pages
const masterCsvPath = path.join(__dirname, '..', 'data', 'iptvsubs8k_pages_master.csv');
const masterHeaders = ['ID', 'Slug', 'URL', 'Cluster', 'Primary Keyword', 'Search Volume', 'Keyword Difficulty', 'Search Intent', 'Title', 'Meta Description', 'Canonical URL'];
const masterRows = retainedPages.map(p => [
  p.id,
  `"${p.slug}"`,
  `"${p.url}"`,
  `"${p.cluster}"`,
  `"${p.primaryKeyword.replace(/"/g, '""')}"`,
  p.volume || 0,
  p.difficulty || 0,
  `"${p.searchIntent || ''}"`,
  `"${p.title.replace(/"/g, '""')}"`,
  `"${p.metaDescription.replace(/"/g, '""')}"`,
  `"${p.url}"`
]);
fs.writeFileSync(masterCsvPath, [masterHeaders.join(','), ...masterRows.map(r => r.join(','))].join('\n'), 'utf8');
console.log(`Updated Master CSV: ${masterCsvPath} (${retainedPages.length} rows)`);

const removedCsvPath = path.join(__dirname, '..', 'data', 'iptvsubs8k_removed_duplicates.csv');
const removedHeaders = ['From ID', 'From Slug', 'From URL', 'From Keyword', 'Search Volume', 'Cluster', 'Redirect To Slug', 'Redirect To URL', 'Retained Keyword', 'Duplicate Type'];
const removedRows = redirectsList.map(r => [
  r.fromId,
  `"${r.fromSlug}"`,
  `"${r.fromUrl}"`,
  `"${r.fromKeyword.replace(/"/g, '""')}"`,
  r.volume,
  `"${r.cluster}"`,
  `"${r.toSlug}"`,
  `"${r.toUrl}"`,
  `"${r.toKeyword.replace(/"/g, '""')}"`,
  `"${r.type}"`
]);
fs.writeFileSync(removedCsvPath, [removedHeaders.join(','), ...removedRows.map(r => r.join(','))].join('\n'), 'utf8');
console.log(`Created Removed Duplicates CSV: ${removedCsvPath} (${redirectsList.length} rows)`);

console.log('\n=== DUPLICATE CONTENT CLEANUP COMPLETED SUCCESSFULLY ===');

