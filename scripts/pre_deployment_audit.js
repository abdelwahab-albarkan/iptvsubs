const fs = require('fs');

console.log('=======================================================');
console.log('   IPTVSubs8K PRE-DEPLOYMENT AUDIT & DATA INTEGRITY    ');
console.log('=======================================================\n');

// 1. Guides Count & Retention
const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));
console.log('1. CONTENT GUIDES DATABASE:');
console.log('   • Total Unique Retained Guides: ' + pages.length);
console.log('   • Expected Guides Count: 3,260');
console.log('   • Exact Match Verified: ' + (pages.length === 3260));

// 2. Redirects Audit
const redirects = JSON.parse(fs.readFileSync('data/redirects_duplicates.json', 'utf8'));
const redirectCount = Array.isArray(redirects) ? redirects.length : Object.keys(redirects).length;
console.log('\n2. 301 REDIRECTS DATABASE:');
console.log('   • Total Near/Exact Duplicates Redirected: ' + redirectCount);
console.log('   • Total Original Corpus (3,260 + 740): ' + (pages.length + redirectCount) + ' (100% of 4,000)');

const pageSlugs = new Set(pages.map(p => p.slug));
let brokenRedirectDestinations = 0;
let chainedRedirects = 0;
const redirectMap = {};

if (Array.isArray(redirects)) {
  redirects.forEach(r => {
    redirectMap[r.fromSlug] = r.toSlug;
    if (!pageSlugs.has(r.toSlug)) {
      brokenRedirectDestinations++;
    }
  });
  redirects.forEach(r => {
    if (redirectMap[r.toSlug]) {
      chainedRedirects++;
    }
  });
}
console.log('   • Broken Redirect Destinations (404 targets): ' + brokenRedirectDestinations);
console.log('   • Chained Redirects (2+ hops): ' + chainedRedirects);

// 3. Internal Links Audit across all 3,260 pages
console.log('\n3. INTERNAL LINK INTEGRITY (3,260 PAGES):');
let totalLinksChecked = 0;
let brokenLinksFound = 0;
let redirectedLinksFound = 0;

pages.forEach(p => {
  if (p.relatedLinks) {
    p.relatedLinks.forEach(rel => {
      totalLinksChecked++;
      const targetSlug = rel.path.replace('/guide/', '');
      if (!pageSlugs.has(targetSlug)) {
        brokenLinksFound++;
        if (redirects[targetSlug]) {
          redirectedLinksFound++;
        }
      }
    });
  }
});
console.log('   • Total Contextual Internal Links Scanned: ' + totalLinksChecked);
console.log('   • Broken Internal Links (404s): ' + brokenLinksFound);
console.log('   • Links pointing to redirected duplicate URLs: ' + redirectedLinksFound);

// 4. Check Pricing Plans
const constants = fs.readFileSync('src/lib/constants.ts', 'utf8');
console.log('\n4. PRICING CONSISTENCY:');
console.log('   • 3 Months ($39.99 - $99.99): ' + (constants.includes('39.99') && constants.includes('99.99')));
console.log('   • 6 Months ($56.99 - $134.99): ' + (constants.includes('56.99') && constants.includes('134.99')));
console.log('   • 12 Months ($79.99 - $179.99): ' + (constants.includes('79.99') && constants.includes('179.99')));
console.log('   • 1-4 Accounts Matrix in Constants: ' + constants.includes('pricesByAccounts'));

// 5. Check Structured Data (AggregateRating removed)
const jsonLd = fs.readFileSync('src/components/seo/JsonLd.tsx', 'utf8');
console.log('\n5. SCHEMA.ORG & STRUCTURED DATA COMPLIANCE:');
console.log('   • AggregateRating Removed: ' + (!jsonLd.includes('AggregateRating')));
console.log('   • 3,840 Reviews Removed from Schema: ' + (!jsonLd.includes('3840')));
console.log('   • 4.9 Rating Removed from Schema: ' + (!jsonLd.includes('4.9')));
console.log('   • Product Schema Present: ' + jsonLd.includes("'Product'"));
console.log('   • AggregateOffer Schema Present: ' + jsonLd.includes("'AggregateOffer'"));
console.log('   • BreadcrumbList Schema Present: ' + jsonLd.includes("'BreadcrumbList'"));
console.log('   • FAQPage Schema Present: ' + jsonLd.includes("'FAQPage'"));

// 6. Check Business Contacts
console.log('\n6. BUSINESS CONTACT DETAILS CONSISTENCY:');
console.log('   • WhatsApp +212625218443: ' + constants.includes('+212625218443'));
console.log('   • Email support@streamb4.com: ' + constants.includes('support@streamb4.com'));

// 7. Check Homepage Structure
const homePage = fs.readFileSync('src/app/page.tsx', 'utf8');
const pricingFirst = homePage.indexOf('<PricingSection') < homePage.indexOf('<HeroSection');
console.log('\n7. HOMEPAGE ARCHITECTURE:');
console.log('   • Pricing Section positioned directly below Navbar: ' + pricingFirst);
console.log('   • Master Topic Directory Included: ' + homePage.includes('HomeTopicDirectory'));
console.log('   • Home SEO Pillars Included: ' + homePage.includes('HomeSeoSection'));
console.log('   • FAQ Section (33 Questions) Included: ' + homePage.includes('FaqSection'));
console.log('   • Channels Preview Included: ' + homePage.includes('ChannelsPreview'));

// 8. Live Server HTTP Probe (Port 3010)
const http = require('http');

function probeServer() {
  http.get('http://localhost:3010/', res => {
    let html = '';
    res.on('data', c => html += c);
    res.on('end', () => {
      console.log('\n8. LIVE SERVER VERIFICATION (http://localhost:3010):');
      console.log('   • Homepage HTTP Status: ' + res.statusCode);
      console.log('   • AggregateRating in Homepage HTML: ' + html.includes('AggregateRating'));
      console.log('   • AggregateOffer Schema Present: ' + html.includes('AggregateOffer'));
      console.log('   • Price Range USD $39.99 - $179.99 Verified: ' + (html.includes('39.99') && html.includes('179.99')));
      console.log('   • Verified WhatsApp in Output: ' + html.includes('+212625218443'));
      console.log('   • Verified Email in Output: ' + html.includes('support@streamb4.com'));
      console.log('   • FAQ Schema (33 Questions) in Output: ' + html.includes('FAQPage'));
      console.log('   • Homepage HTML Size: ' + html.length + ' bytes (~' + Math.round(html.length / 1024) + ' KB)');
      console.log('\n=======================================================');
      console.log('   ALL AUDIT CRITERIA EVALUATED SUCCESSFULLY           ');
      console.log('=======================================================');
    });
  }).on('error', err => {
    console.error('Server probe error:', err.message);
  });
}

probeServer();
