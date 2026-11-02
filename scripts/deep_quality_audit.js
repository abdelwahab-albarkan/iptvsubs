const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'pages_4000.json');
const pages = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

console.log('================================================================');
console.log(`ANALYZING CONTENT QUALITY ACROSS ALL ${pages.length} ACTIVE PAGES`);
console.log('================================================================\n');

// 1. REPEATED CONTENT DETECTION
// Hash paragraphs and sentences (normalized without the keyword) to detect template reuse
const paragraphMap = new Map(); // normalized paragraph text -> array of slugs
const sentenceMap = new Map();  // normalized sentence text -> count
const section6Map = new Map();  // sec 6 text normalized -> array of slugs

// Keyword-specific intent definitions
const HARDWARE_REMOTE_KEYWORDS = ['remote', 'replacement remote', 'control remoto', 'magic remote', 'voice remote', 'remote control'];
const ANTENNA_PHYSICAL_KEYWORDS = ['antenna', 'antena', 'coaxial', 'aerial', 'hdtv antenna', 'digital antenna', 'rabbit ears'];
const PHYSICAL_TV_HARDWARE = ['32 inch', '43 inch', '50 inch', '55 inch', '65 inch', '75 inch', '85 inch', 'oled', 'qled', 'soundbar', 'wall mount', 'stand'];

const findings = {
  totalReviewed: pages.length,
  repeatedParagraphsCount: 0,
  uniqueParagraphsCount: 0,
  paragraphDuplicationRate: 0,
  repeatedSection6Count: 0,
  uniqueSection6Count: 0,
  intentMismatches: [],
  technicalAccuracyIssues: [],
  thinSemanticValuePages: [],
  clusterAudit: {}
};

// Initialize cluster audit containers
const clusters = {};
pages.forEach(p => {
  if (!clusters[p.clusterId]) {
    clusters[p.clusterId] = {
      name: p.cluster,
      count: 0,
      samples: [],
      issues: []
    };
  }
  clusters[p.clusterId].count++;
});

// Helper: normalize text by lowercasing, stripping punctuation, and removing the primary keyword
function normalizeText(text, keyword) {
  if (!text) return '';
  let cleaned = text.toLowerCase();
  if (keyword) {
    const kwClean = keyword.toLowerCase();
    cleaned = cleaned.split(kwClean).join('__KW__');
  }
  return cleaned.replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Helper: split text into sentences
function getSentences(text) {
  if (!text) return [];
  return text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 25);
}

// Analyze each page
pages.forEach((page, pageIdx) => {
  const kw = page.primaryKeyword ? page.primaryKeyword.toLowerCase() : '';
  const slug = page.slug;
  const clusterId = page.clusterId;

  // Sample representative pages per cluster (up to 3 per cluster)
  if (clusters[clusterId].samples.length < 3) {
    clusters[clusterId].samples.push({
      slug: page.slug,
      url: page.url,
      keyword: page.primaryKeyword,
      sections: (page.sections || []).map(s => ({
        title: s.title,
        wordCount: s.content.trim().split(/\s+/).length,
        excerpt: s.content.substring(0, 140) + '...'
      }))
    });
  }

  // 1. Paragraph Analysis
  (page.sections || []).forEach((sec, sIdx) => {
    const normSec = normalizeText(sec.content, kw);
    if (!paragraphMap.has(normSec)) {
      paragraphMap.set(normSec, []);
    }
    paragraphMap.get(normSec).push({ slug, sectionIdx: sIdx + 1 });

    // Sentences
    const sentences = getSentences(sec.content);
    sentences.forEach(sent => {
      const normSent = normalizeText(sent, kw);
      sentenceMap.set(normSent, (sentenceMap.get(normSent) || 0) + 1);
    });

    // Section 6 tracking
    if (sIdx === 5) {
      if (!section6Map.has(normSec)) {
        section6Map.set(normSec, []);
      }
      section6Map.get(normSec).push(slug);
    }
  });

  // 2. Search Intent & Technical Relevance Checking
  // A. Remote control keywords having generic IPTV stream configuration instructions
  const isRemoteKw = HARDWARE_REMOTE_KEYWORDS.some(k => kw.includes(k));
  if (isRemoteKw) {
    const hasIrrelevantApiText = page.sections.some(s => 
      s.content.includes('Xtream Codes API') || 
      s.content.includes('M3U Plus') || 
      s.content.includes('ExoPlayer')
    );
    if (hasIrrelevantApiText) {
      findings.intentMismatches.push({
        type: 'REMOTE_CONTROL_MISMATCH',
        slug,
        keyword: page.primaryKeyword,
        cluster: clusterId,
        url: page.url,
        issue: 'Keyword targets physical remote hardware or pairing, but content prescribes entering Xtream Codes API credentials and M3U playlists.'
      });
    }
  }

  // B. Physical Antenna keywords having IPTV server config
  const isAntennaKw = ANTENNA_PHYSICAL_KEYWORDS.some(k => kw.includes(k));
  if (isAntennaKw && clusterId === 'hardware-encoders-antennas') {
    const hasGenericApi = page.sections.some(s => s.content.includes('Enter API Details: Input the portal URL, username, and password'));
    if (hasGenericApi) {
      findings.intentMismatches.push({
        type: 'ANTENNA_HARDWARE_MISMATCH',
        slug,
        keyword: page.primaryKeyword,
        cluster: clusterId,
        url: page.url,
        issue: 'Keyword targets over-the-air antenna / coaxial hardware, but installation step instructs entering IPTV portal URL and password into an app.'
      });
    }
  }

  // C. Physical TV Dimensions / Wall mounts / Hardware having IPTV server instructions
  const isPhysicalTv = PHYSICAL_TV_HARDWARE.some(k => kw.includes(k));
  if (isPhysicalTv) {
    const hasIncongruentSetup = page.sections.some(s => s.content.includes('Step 3: Load Subscription Playlist'));
    if (hasIncongruentSetup) {
      findings.intentMismatches.push({
        type: 'TV_DIMENSION_HARDWARE_MISMATCH',
        slug,
        keyword: page.primaryKeyword,
        cluster: clusterId,
        url: page.url,
        issue: 'Keyword targets TV screen size or physical mount, but guide describes configuring streaming credentials rather than display specs.'
      });
    }
  }

  // D. Technical Accuracy: Roku sideloading / APK claims
  const isRoku = clusterId === 'roku-streaming' || kw.includes('roku');
  if (isRoku) {
    const mentionsApkOnRoku = page.sections.some(s => 
      (s.content.includes('sideload') || s.content.includes('APK') || s.content.includes('Downloader utility shortcode')) && 
      !s.content.includes('proprietary microkernel architecture that does not permit direct sideloading') &&
      !s.content.includes('does not permit direct sideloading')
    );
    if (mentionsApkOnRoku) {
      findings.technicalAccuracyIssues.push({
        type: 'ROKU_APK_MISCONCEPTION',
        slug,
        keyword: page.primaryKeyword,
        url: page.url,
        issue: 'Guide implies or mentions installing APKs / Downloader utility on Roku devices, which is technically impossible on Roku OS.'
      });
    }
  }

  // E. Semantic Thickness / Density check
  // Ratio of primary keyword count vs total words. If keyword occurs fewer than 2 times in 700 words, or if content is 95% identical template text.
  const allContent = page.sections.map(s => s.content).join(' ').toLowerCase();
  const kwMatches = (allContent.match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
  if (kwMatches < 3) {
    findings.thinSemanticValuePages.push({
      slug,
      keyword: page.primaryKeyword,
      url: page.url,
      cluster: clusterId,
      kwMatches,
      wordCount: allContent.split(/\s+/).length,
      issue: `Primary keyword appears only ${kwMatches} times across a ~720-word article, indicating low topical concentration.`
    });
  }
});

// Calculate paragraph repetition metrics
let totalParagraphs = 0;
let repeatedParagraphCount = 0;
let singleUseParagraphCount = 0;

for (const [text, occurrences] of paragraphMap.entries()) {
  totalParagraphs += occurrences.length;
  if (occurrences.length > 1) {
    repeatedParagraphCount += occurrences.length;
  } else {
    singleUseParagraphCount++;
  }
}

findings.totalParagraphs = totalParagraphs;
findings.uniqueParagraphTemplates = paragraphMap.size;
findings.repeatedParagraphsCount = repeatedParagraphCount;
findings.repetitionRate = ((repeatedParagraphCount / totalParagraphs) * 100).toFixed(1);

// Section 6 repetition
findings.uniqueSection6Templates = section6Map.size;
findings.totalSection6Blocks = pages.length;

// Highly repeated sentences (shared across 50+ pages)
const highFrequencySentences = [];
for (const [normSent, count] of sentenceMap.entries()) {
  if (count >= 100) {
    highFrequencySentences.push({ count, excerpt: normSent.substring(0, 90) + '...' });
  }
}
highFrequencySentences.sort((a, b) => b.count - a.count);

console.log('--- AUDIT METRICS ---');
console.log(`Total Pages Reviewed: ${findings.totalReviewed}`);
console.log(`Total Paragraphs Across Dataset: ${findings.totalParagraphs}`);
console.log(`Unique Paragraph Templates: ${findings.uniqueParagraphTemplates}`);
console.log(`Paragraph Duplication Rate: ${findings.repetitionRate}%`);
console.log(`Unique Section 6 Archetypes: ${findings.uniqueSection6Templates} across ${findings.totalSection6Blocks} pages`);
console.log(`Intent Mismatches Detected: ${findings.intentMismatches.length}`);
console.log(`Technical Accuracy Issues: ${findings.technicalAccuracyIssues.length}`);
console.log(`Low Keyword Density / Thin Semantic Value: ${findings.thinSemanticValuePages.length}`);
console.log(`Sentences Repeated on 100+ pages: ${highFrequencySentences.length}`);

// Save findings to JSON for the report
const outputPath = path.join(__dirname, '..', 'data', 'quality_audit_findings.json');
fs.writeFileSync(outputPath, JSON.stringify({
  summary: {
    totalReviewed: findings.totalReviewed,
    totalParagraphs: findings.totalParagraphs,
    uniqueParagraphTemplates: findings.uniqueParagraphTemplates,
    repetitionRate: findings.repetitionRate,
    uniqueSection6Templates: findings.uniqueSection6Templates,
    intentMismatchesCount: findings.intentMismatches.length,
    technicalAccuracyCount: findings.technicalAccuracyIssues.length,
    thinSemanticCount: findings.thinSemanticValuePages.length
  },
  intentMismatchesSample: findings.intentMismatches.slice(0, 30),
  technicalAccuracySample: findings.technicalAccuracyIssues.slice(0, 30),
  thinSemanticSample: findings.thinSemanticValuePages.slice(0, 30),
  topRepeatedSentences: highFrequencySentences.slice(0, 15),
  clusters: clusters
}, null, 2));

console.log(`\nSaved findings JSON to: ${outputPath}`);

