const fs = require('fs');
const path = require('path');

console.log('--- Starting Independent Pre-Deployment Audit ---\n');

const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));
console.log('Total Pages in pages_4000.json:', pages.length);

// 1. Audit IPTV Services & Providers (1,099 pages)
const iptvServices = pages.filter(p => p.clusterId === 'iptv-services');
console.log('\n=== CHECK 1 & 2: AUDIT OF IPTV SERVICES CLUSTER (1,099 pages) ===');
console.log('Total in cluster:', iptvServices.length);

const retailStoreTerms = [];
const competitorTerms = [];
const piracyTerms = [];
const adultTerms = [];
const foreignTerms = [];
const oddGenericTerms = [];

iptvServices.forEach(p => {
  const kw = p.primaryKeyword.toLowerCase();
  if (/walmart|best buy|costco|target|sams club|home depot/i.test(kw)) retailStoreTerms.push(p);
  else if (/reddit|github|apk|mod|cracked|free download/i.test(kw)) piracyTerms.push(p);
  else if (/xxx|adult|porn|sex/i.test(kw)) adultTerms.push(p);
  else if (/satın|televisão|televisores|tele|fernseher/i.test(kw)) foreignTerms.push(p);
  else if (/apollo|xtreme hd|gemini|beast|eternal|tivimate|smarters|superbox|voco|nord/i.test(kw)) competitorTerms.push(p);
  else if (!/iptv|tv|stream|channel|player|service|provider|cable|live/i.test(kw)) oddGenericTerms.push(p);
});

console.log('Retail Store Terms in IPTV Services:', retailStoreTerms.length);
if (retailStoreTerms.length > 0) console.log('  Samples:', retailStoreTerms.slice(0, 5).map(p => p.primaryKeyword));

console.log('Piracy/Mod/GitHub/Reddit Terms in IPTV Services:', piracyTerms.length);
if (piracyTerms.length > 0) console.log('  Samples:', piracyTerms.slice(0, 5).map(p => p.primaryKeyword));

console.log('Competitor/Specific App Brands in IPTV Services:', competitorTerms.length);
if (competitorTerms.length > 0) console.log('  Samples:', competitorTerms.slice(0, 5).map(p => p.primaryKeyword));

console.log('Adult / Inappropriate Terms:', adultTerms.length);
if (adultTerms.length > 0) console.log('  Samples:', adultTerms.slice(0, 5).map(p => p.primaryKeyword));

console.log('Foreign / Non-US Language Terms:', foreignTerms.length);
if (foreignTerms.length > 0) console.log('  Samples:', foreignTerms.slice(0, 5).map(p => p.primaryKeyword));

console.log('Generic / Tangential Terms in IPTV Services:', oddGenericTerms.length);
if (oddGenericTerms.length > 0) console.log('  Samples:', oddGenericTerms.slice(0, 5).map(p => p.primaryKeyword));

// 2. Audit Antennas, Tuners & Encoders (489 pages)
console.log('\n=== CHECK 3: AUDIT OF ANTENNAS, TUNERS & ENCODERS (489 pages) ===');
const antennas = pages.filter(p => p.clusterId === 'hardware-encoders-antennas');
console.log('Total in cluster:', antennas.length);

const antennaTypes = {
  antenna_indoor: 0,
  antenna_outdoor: 0,
  antenna_general: 0,
  encoder: 0,
  tuner_ota: 0,
  hardware_sales: 0,
  other: 0
};

antennas.forEach(p => {
  const kw = p.primaryKeyword.toLowerCase();
  if (/indoor antenna/i.test(kw)) antennaTypes.antenna_indoor++;
  else if (/outdoor antenna/i.test(kw)) antennaTypes.antenna_outdoor++;
  else if (/antenna/i.test(kw)) antennaTypes.antenna_general++;
  else if (/encoder/i.test(kw)) antennaTypes.encoder++;
  else if (/tuner|atsc|ota/i.test(kw)) antennaTypes.tuner_ota++;
  else if (/walmart|best buy|buy|sale/i.test(kw)) antennaTypes.hardware_sales++;
  else antennaTypes.other++;
});

console.log('Antenna Breakdown:', antennaTypes);
console.log('Sample Antenna Keywords:', antennas.slice(0, 10).map(p => p.primaryKeyword));

// 3. Relevance Audit across ALL 4,000 pages
console.log('\n=== RELEVANCE AUDIT ACROSS ALL 4,000 PAGES ===');
const allClusters = {};
pages.forEach(p => {
  allClusters[p.cluster] = (allClusters[p.cluster] || 0) + 1;
});
console.log('Cluster Counts:', allClusters);

// Check TV screen size keywords (e.g. "32 inch tv", "65 inch tv best buy")
const tvHardwarePhysical = pages.filter(p => /\b(inch tv|inch television|flatscreen|hdtv|oled|qled)\b/i.test(p.primaryKeyword));
console.log('Physical TV Hardware/Display Size Pages:', tvHardwarePhysical.length);
console.log('Sample Physical TV Keywords:', tvHardwarePhysical.slice(0, 10).map(p => p.primaryKeyword));

// Check YouTube downloader / MP3 downloader terms from competitor research
const ytDownloaders = pages.filter(p => /yt-dlp|youtube-dl|mp3|downloader/i.test(p.primaryKeyword));
console.log('YouTube/MP3 Downloader / Utility terms:', ytDownloaders.length);
console.log('Sample Downloader Keywords:', ytDownloaders.slice(0, 10).map(p => p.primaryKeyword));

