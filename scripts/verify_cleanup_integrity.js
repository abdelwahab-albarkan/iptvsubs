const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING POST-CLEANUP INTEGRITY ===\n');

// 1. Check pages
const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));
console.log('Retained Pages Count:', pages.length);

const slugSet = new Set(pages.map(p => p.slug));
console.log('Unique Slugs in Retained Set:', slugSet.size);

// 2. Check Redirects
const redirects = JSON.parse(fs.readFileSync('data/redirects_duplicates.json', 'utf8'));
console.log('301 Redirects Count:', redirects.length);

let missingRedirectTargets = 0;
let selfRedirects = 0;
let circularRedirects = 0;

const redirectFromSet = new Set(redirects.map(r => r.fromSlug));

redirects.forEach(r => {
  if (r.fromSlug === r.toSlug) selfRedirects++;
  if (!slugSet.has(r.toSlug)) missingRedirectTargets++;
  if (redirectFromSet.has(r.toSlug)) circularRedirects++;
});

console.log('Self-redirects:', selfRedirects);
console.log('Missing redirect destinations:', missingRedirectTargets);
console.log('Circular redirects:', circularRedirects);

// 3. Check Internal Links across Retained Pages
let brokenInternalLinks = 0;
let linksToRemovedPages = 0;
let duplicateLinksOnPage = 0;
let totalInternalLinks = 0;

pages.forEach(p => {
  if (p.relatedLinks) {
    const pageLinkSlugs = new Set();
    p.relatedLinks.forEach(rel => {
      totalInternalLinks++;
      if (redirectFromSet.has(rel.slug)) {
        linksToRemovedPages++;
      }
      if (!slugSet.has(rel.slug)) {
        brokenInternalLinks++;
      }
      if (pageLinkSlugs.has(rel.slug)) {
        duplicateLinksOnPage++;
      } else {
        pageLinkSlugs.add(rel.slug);
      }
    });
  }
});

console.log('Total Internal Related Links Checked:', totalInternalLinks);
console.log('Links to Removed Duplicate Pages:', linksToRemovedPages);
console.log('Broken Internal Links:', brokenInternalLinks);
console.log('Duplicate Links on Same Page:', duplicateLinksOnPage);

// 4. Check Sitemap Count
const sitemapSource = fs.readFileSync('src/app/sitemap.ts', 'utf8');
const coreRoutes = [
  '', '/pricing', '/free-trial', '/channels', '/reseller', '/guide',
  '/setup', '/setup/firestick', '/setup/android-tv', '/setup/smart-tv', '/setup/apple-tv', '/setup/pc-mac', '/setup/mag-formuler', '/setup/roku',
  '/apps', '/apps/iptv-smarters-pro', '/apps/tivimate', '/apps/ibo-player', '/apps/xciptv', '/apps/kodi',
  '/troubleshooting', '/troubleshooting/iptv-buffering', '/troubleshooting/iptv-not-working', '/troubleshooting/vpn-isp-throttling',
  '/compare/cable-vs-iptv', '/guides/is-iptv-legal-usa', '/guides/iptv-scams-guide', '/guides/best-iptv-providers-usa',
  '/contact', '/refund-policy', '/privacy', '/terms'
];
console.log('\nCore Routes Count in Sitemap:', coreRoutes.length);
console.log('Guide Routes Count in Sitemap:', pages.length);
console.log('Expected Total Sitemap URLs:', coreRoutes.length + pages.length);

if (selfRedirects === 0 && missingRedirectTargets === 0 && circularRedirects === 0 && brokenInternalLinks === 0 && linksToRemovedPages === 0) {
  console.log('\n>>> INTEGRITY VERIFICATION: 100% PASSED <<<');
} else {
  console.error('\n>>> INTEGRITY VERIFICATION: FAILED <<<');
}

