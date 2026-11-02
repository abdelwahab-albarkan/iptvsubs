const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));

const categories = {
  physicalRetail: [],
  physicalTVSizes: [],
  hardwareAntennas: [],
  hardwareEncoders: [],
  developerUtilitiesGithub: [],
  piracyModApkReddit: [],
  adultInappropriate: [],
  foreignLanguage: [],
  competitorBrands: [],
  coreIptvTopics: []
};

pages.forEach(p => {
  const kw = p.primaryKeyword.toLowerCase();
  
  if (/walmart|costco|best buy|target|sams club|home depot/i.test(kw)) {
    categories.physicalRetail.push(p);
  } else if (/xxx|adult|porn|sex/i.test(kw)) {
    categories.adultInappropriate.push(p);
  } else if (/satın|televisão|televisores|fernseher|televisie|descargar/i.test(kw)) {
    categories.foreignLanguage.push(p);
  } else if (/github|yt-dlp|youtube-dl|mp3 downloader/i.test(kw)) {
    categories.developerUtilitiesGithub.push(p);
  } else if (/apk|mod|cracked|free download|reddit/i.test(kw)) {
    categories.piracyModApkReddit.push(p);
  } else if (/\b(\d{2}\s*inch|\d{2}"|flatscreen|oled|qled|hdtv)\b/i.test(kw) && !/iptv|stream|m3u|player|app/i.test(kw)) {
    categories.physicalTVSizes.push(p);
  } else if (/antenna/i.test(kw)) {
    categories.hardwareAntennas.push(p);
  } else if (/encoder|modulator|atsc|ota tuner/i.test(kw)) {
    categories.hardwareEncoders.push(p);
  } else if (/vocotv|beast tv|beasttv|apollo group|xtreme hd|gemini iptv|eternal tv/i.test(kw)) {
    categories.competitorBrands.push(p);
  } else {
    categories.coreIptvTopics.push(p);
  }
});

console.log('=== QUANTITATIVE BREAKDOWN OF 4,000 PAGES ===');
console.log('Core IPTV Topics (Streaming, Apps, Setup, Providers, Channels, Sports):', categories.coreIptvTopics.length, `(${(categories.coreIptvTopics.length/40).toFixed(1)}%)`);
console.log('Antennas (Hardware Cord-Cutting):', categories.hardwareAntennas.length, `(${(categories.hardwareAntennas.length/40).toFixed(1)}%)`);
console.log('Encoders & ATSC Tuners:', categories.hardwareEncoders.length, `(${(categories.hardwareEncoders.length/40).toFixed(1)}%)`);
console.log('Physical TV Screen Sizes (Buying Hardware):', categories.physicalTVSizes.length, `(${(categories.physicalTVSizes.length/40).toFixed(1)}%)`);
console.log('Physical Retail Stores (Walmart, Costco, Best Buy):', categories.physicalRetail.length, `(${(categories.physicalRetail.length/40).toFixed(1)}%)`);
console.log('Piracy / Mod APKs / Reddit Streams:', categories.piracyModApkReddit.length, `(${(categories.piracyModApkReddit.length/40).toFixed(1)}%)`);
console.log('Developer Utilities / GitHub Scripts:', categories.developerUtilitiesGithub.length, `(${(categories.developerUtilitiesGithub.length/40).toFixed(1)}%)`);
console.log('Foreign Language / Non-US queries:', categories.foreignLanguage.length, `(${(categories.foreignLanguage.length/40).toFixed(1)}%)`);
console.log('Adult / Inappropriate queries:', categories.adultInappropriate.length, `(${(categories.adultInappropriate.length/40).toFixed(1)}%)`);
console.log('Direct Competitor Brand Names:', categories.competitorBrands.length, `(${(categories.competitorBrands.length/40).toFixed(1)}%)`);

const problematicCount = categories.physicalRetail.length + categories.physicalTVSizes.length + categories.piracyModApkReddit.length + categories.developerUtilitiesGithub.length + categories.foreignLanguage.length + categories.adultInappropriate.length;
console.log('\nTotal High-Risk/Irrelevant Pages:', problematicCount, `(${(problematicCount/40).toFixed(1)}%)`);
console.log('Total Antenna/Encoder Hardware Pages:', categories.hardwareAntennas.length + categories.hardwareEncoders.length, `(${((categories.hardwareAntennas.length + categories.hardwareEncoders.length)/40).toFixed(1)}%)`);

