const fs = require('fs');
const path = require('path');
const http = require('http');

const DOMAIN = 'iptvsubs8k.com';
const BASE_URL = `https://${DOMAIN}`;
const LOCAL_SERVER = 'http://127.0.0.1:3010';

function fetchUrl(targetUrl) {
  return new Promise((resolve) => {
    http.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 5000
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(null));
  });
}

async function check() {
  console.log('='.repeat(64));
  console.log('IPTVSubs8K SEO & HTML INTEGRITY AUDIT (2026)');
  console.log(`Target Domain: ${BASE_URL}`);
  console.log('='.repeat(64));

  const pagesToAudit = [];

  const coreRoutes = [
    '/', '/pricing', '/free-trial', '/contact', '/channels', '/sports', '/reseller',
    '/guide', '/setup', '/setup/firestick', '/setup/android-tv', '/setup/smart-tv',
    '/setup/apple-tv', '/setup/pc-mac', '/setup/mag-formuler', '/setup/roku',
    '/apps', '/apps/tivimate', '/apps/iptv-smarters-pro', '/apps/ibo-player',
    '/apps/xciptv', '/apps/kodi', '/troubleshooting',
    '/troubleshooting/iptv-buffering', '/troubleshooting/iptv-not-working',
    '/troubleshooting/vpn-isp-throttling', '/compare/cable-vs-iptv',
    '/guides/best-iptv-providers-usa', '/guides/iptv-scams-guide',
    '/guides/is-iptv-legal-usa', '/html-sitemap', '/privacy', '/terms', '/refund-policy'
  ];

  const sampleGuideSlugs = [
    'roku-tv', 'superbox', 'smart-tv', 'shop-4k-tvs-on-sale',
    'best-budget-4k-tvs', 'the-tv-appto', 'firestick-remote',
    'attacker-tv', 'antennas-antenna', 'streaming-tv-services',
    'tv-box-and', 'tv-cable', 'vpn-for-tv', 'best-piracy-sites',
    'televisie-test'
  ];

  const routesToFetch = [...coreRoutes, ...sampleGuideSlugs.map(s => `/guide/${s}`)];

  console.log(`🌐 Auditing ${routesToFetch.length} representative pages on local server (${LOCAL_SERVER})...`);

  for (const route of routesToFetch) {
    const html = await fetchUrl(`${LOCAL_SERVER}${route}`);
    if (html) {
      pagesToAudit.push({ route, html });
    }
  }

  console.log(`Total live pages analyzed: ${pagesToAudit.length}`);

  const titleIssues = [];
  const descIssues = [];
  const canonicalIssues = [];
  const h1Issues = [];
  const headingSkips = [];
  const altIssues = [];
  const schemaIssues = [];
  const brokenLinks = [];
  const brokenAnchors = [];

  const allRoutes = new Set(pagesToAudit.map(p => p.route));
  const idsPerRoute = {};

  for (const page of pagesToAudit) {
    const { route, html } = page;

    // Title check
    const mTitle = html.match(/<title>(.*?)<\/title>/i);
    if (!mTitle) {
      titleIssues.push({ route, issue: 'No title' });
    } else {
      const rawTitle = mTitle[1];
      const tLen = rawTitle.length;
      if (rawTitle.includes('| IPTVSubs8K | IPTVSubs8K')) {
        titleIssues.push({ route, issue: `Double brand: "${rawTitle}" (${tLen} chars)` });
      } else if (tLen < 30 || tLen > 70) {
        titleIssues.push({ route, issue: `Length ${tLen} (expected 40-65): "${rawTitle}"` });
      }
    }

    // Description check
    const mDesc = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
    if (!mDesc) {
      descIssues.push({ route, issue: 'No description' });
    } else {
      const rawDesc = mDesc[1];
      const dLen = rawDesc.length;
      if (dLen < 100 || dLen > 180) {
        descIssues.push({ route, issue: `Length ${dLen} (target 120-165): "${rawDesc.slice(0, 50)}..."` });
      }
    }

    // Canonical check
    const mCanon = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
    if (!mCanon) {
      canonicalIssues.push({ route, issue: 'Missing canonical tag' });
    } else {
      const canon = mCanon[1];
      if (!canon.startsWith(BASE_URL)) {
        canonicalIssues.push({ route, issue: `Non-absolute/non-https canonical: ${canon}` });
      }
    }

    // H1 check
    const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)];
    if (h1s.length === 0) {
      h1Issues.push({ route, issue: 'Zero <h1> tags' });
    } else if (h1s.length > 1) {
      h1Issues.push({ route, issue: `${h1s.length} <h1> tags found` });
    }

    // Heading hierarchy check
    const headings = [...html.matchAll(/<(h[1-6])[^>]*>/gi)];
    let prevLevel = 0;
    for (const h of headings) {
      const lvl = parseInt(h[1][1], 10);
      if (prevLevel > 0 && lvl > prevLevel + 1) {
        headingSkips.push({ route, issue: `Skipped heading level: h${prevLevel} -> h${lvl}` });
        break;
      }
      prevLevel = lvl;
    }

    // Image alt checks
    const imgs = [...html.matchAll(/<img([^>]*)\/?>/gi)];
    for (const img of imgs) {
      const mAlt = img[1].match(/alt=["'](.*?)["']/i);
      if (!mAlt) {
        altIssues.push({ route, issue: `Missing alt attribute in img: ${img[1].slice(0, 60)}` });
      } else if (mAlt[1].trim() === '') {
        altIssues.push({ route, issue: `Empty alt attribute in img: ${img[1].slice(0, 60)}` });
      }
    }

    // Schema JSON-LD checks
    const schemas = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis)];
    for (const s of schemas) {
      try {
        JSON.parse(s[1]);
      } catch (e) {
        schemaIssues.push({ route, issue: `Invalid JSON-LD: ${e.message}` });
      }
    }

    // Collect IDs
    const idMatches = [...html.matchAll(/id=["']([a-zA-Z0-9_-]+)["']/gi)];
    idsPerRoute[route] = new Set(idMatches.map(m => m[1]));
  }

  // Broken links & anchors check
  for (const page of pagesToAudit) {
    const { route, html } = page;
    const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)];
    for (const h of hrefs) {
      let href = h[1].replace(/&amp;/g, '&');
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
        if (href.startsWith(BASE_URL)) {
          href = href.replace(BASE_URL, '') || '/';
        } else {
          continue;
        }
      }

      const [urlWithoutHash, fragment] = href.split('#');
      const pathOnly = urlWithoutHash.split('?')[0];
      const targetRoute = pathOnly || route;
      const isPublic = targetRoute.startsWith('/_next/') || targetRoute.startsWith('/guide/') || [
        '/favicon.ico', '/icon.svg', '/sitemap.xml', '/robots.txt',
        '/iptvsubs8k-indexnow-2026-key.txt', '/streamvexa-indexnow-2026-key.txt'
      ].includes(targetRoute);

      if (targetRoute && !allRoutes.has(targetRoute) && !isPublic) {
        brokenLinks.push({ currentRoute: route, href });
      }

      if (fragment) {
        const checkRoute = pathOnly || route;
        if (idsPerRoute[checkRoute] && !idsPerRoute[checkRoute].has(fragment)) {
          brokenAnchors.push({ currentRoute: route, href, reason: `id #${fragment} not in ${checkRoute}` });
        }
      }
    }
  }

  // 100% Dataset audit
  const pagesFile = path.join(process.cwd(), 'data', 'pages_4000.json');
  if (fs.existsSync(pagesFile)) {
    const allGuides = JSON.parse(fs.readFileSync(pagesFile, 'utf8'));
    console.log(`\n📊 Auditing 100% of guide dataset (${allGuides.length} guides):`);
    let canonValid = 0;
    let h1Valid = 0;
    let descValid = 0;
    let titleValid = 0;

    for (const g of allGuides) {
      if (g.url && g.url.startsWith(BASE_URL)) canonValid++;
      if (g.h1 && g.h1.trim().length > 0) h1Valid++;
      const dl = g.metaDescription ? g.metaDescription.length : 0;
      if (dl >= 100 && dl <= 180) descValid++;
      const tl = g.title ? g.title.length : 0;
      if (tl >= 30 && tl <= 75) titleValid++;
    }

    console.log(`   • Dataset Canonical URLs: ${canonValid}/${allGuides.length} valid`);
    console.log(`   • Dataset H1 Headings: ${h1Valid}/${allGuides.length} present`);
    console.log(`   • Dataset Meta Descriptions: ${descValid}/${allGuides.length} optimal length`);
    console.log(`   • Dataset Titles: ${titleValid}/${allGuides.length} optimal length`);
  }

  // Output categorized results
  console.log('\n--- TITLE ISSUES ---');
  console.log(`Total: ${titleIssues.length}`);
  titleIssues.slice(0, 15).forEach(i => console.log(`  ${i.route}: ${i.issue}`));

  console.log('\n--- DESCRIPTION ISSUES ---');
  console.log(`Total: ${descIssues.length}`);
  descIssues.slice(0, 15).forEach(i => console.log(`  ${i.route}: ${i.issue}`));

  console.log('\n--- CANONICAL ISSUES ---');
  console.log(`Total: ${canonicalIssues.length}`);
  canonicalIssues.slice(0, 10).forEach(i => console.log(`  ${i.route}: ${i.issue}`));

  console.log('\n--- H1 ISSUES ---');
  console.log(`Total: ${h1Issues.length}`);
  h1Issues.slice(0, 10).forEach(i => console.log(`  ${i.route}: ${i.issue}`));

  console.log('\n--- HEADING HIERARCHY SKIPS ---');
  console.log(`Total: ${headingSkips.length}`);
  headingSkips.slice(0, 10).forEach(i => console.log(`  ${i.route}: ${i.issue}`));

  console.log('\n--- IMAGE ALT ISSUES ---');
  console.log(`Total: ${altIssues.length}`);
  altIssues.slice(0, 15).forEach(i => console.log(`  ${i.route}: ${i.issue}`));

  console.log('\n--- SCHEMA ISSUES ---');
  console.log(`Total: ${schemaIssues.length}`);
  schemaIssues.forEach(i => console.log(`  ${i.route}: ${i.issue}`));

  console.log('\n--- BROKEN LINKS ---');
  console.log(`Total: ${brokenLinks.length}`);
  brokenLinks.slice(0, 10).forEach(i => console.log(`  ${i.currentRoute} -> ${i.href}`));

  console.log('\n--- BROKEN ANCHORS ---');
  console.log(`Total: ${brokenAnchors.length}`);
  brokenAnchors.slice(0, 10).forEach(i => console.log(`  ${i.currentRoute} -> ${i.href}: ${i.reason}`));

  console.log('\n' + '='.repeat(64));
  console.log('AUDIT SUMMARY:');
  console.log(`Canonical Issues: ${canonicalIssues.length}`);
  console.log(`H1 Issues: ${h1Issues.length}`);
  console.log(`Schema Issues: ${schemaIssues.length}`);
  console.log(`Broken Links: ${brokenLinks.length}`);
  console.log(`Broken Anchors: ${brokenAnchors.length}`);
  console.log('='.repeat(64));
}

check();

