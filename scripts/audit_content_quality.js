const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('data/pages_4000.json', 'utf8'));
console.log('--- Content Quality & Intent Verification Script ---');
console.log('Total pages loaded:', pages.length);

// 1. Meta Description & Title checks
let missingMetaDesc = 0;
let shortMetaDesc = 0;
let metaDescSet = new Set();
let titleSet = new Set();
let h1Set = new Set();
let wordCounts = [];

pages.forEach((p, idx) => {
  if (!p.metaDescription) missingMetaDesc++;
  else {
    if (p.metaDescription.length < 50) shortMetaDesc++;
    metaDescSet.add(p.metaDescription);
  }
  titleSet.add(p.title);
  h1Set.add(p.h1);

  // calculate words
  let text = p.title + ' ' + p.h1 + ' ' + (p.metaDescription || '') + ' ';
  if (p.sections) {
    p.sections.forEach(s => {
      text += (s.title || '') + ' ' + (s.content || '') + ' ';
    });
  }
  if (p.faqs) {
    p.faqs.forEach(f => {
      text += (f.question || '') + ' ' + (f.answer || '') + ' ';
    });
  }
  const words = text.trim().split(/\s+/).length;
  wordCounts.push(words);
});

console.log('Missing meta descriptions:', missingMetaDesc);
console.log('Short meta descriptions (<50 chars):', shortMetaDesc);
console.log('Unique meta descriptions:', metaDescSet.size);
console.log('Unique titles:', titleSet.size);
console.log('Unique H1s:', h1Set.size);

wordCounts.sort((a,b) => a - b);
const avgWords = Math.round(wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length);
console.log(`Word count stats: Min=${wordCounts[0]}, Median=${wordCounts[Math.floor(wordCounts.length/2)]}, Max=${wordCounts[wordCounts.length - 1]}, Avg=${avgWords}`);

// 2. Intent & Factual Audit of Edge Cases
console.log('\n--- SAMPLING INTENT & CONTENT MISMATCHES ---');

// Case A: Retail store search (e.g. Walmart TV)
const retailSample = pages.find(p => p.primaryKeyword.toLowerCase().includes('walmart tv'));
if (retailSample) {
  console.log('\n[Case A: Retail Store TV Keyword]');
  console.log('Keyword:', retailSample.primaryKeyword);
  console.log('Title:', retailSample.title);
  console.log('Cluster:', retailSample.cluster);
  console.log('Section 1 Title:', retailSample.sections[0].title);
  console.log('Section 1 Content Snippet:', retailSample.sections[0].content.slice(0, 300));
  console.log('FAQ 1:', retailSample.faqs[0]);
}

// Case B: Antenna keyword
const antennaSample = pages.find(p => p.primaryKeyword.toLowerCase().includes('indoor tv antenna'));
if (antennaSample) {
  console.log('\n[Case B: Physical Antenna Hardware]');
  console.log('Keyword:', antennaSample.primaryKeyword);
  console.log('Title:', antennaSample.title);
  console.log('Cluster:', antennaSample.cluster);
  console.log('Section 1 Title:', antennaSample.sections[0].title);
  console.log('Section 1 Content Snippet:', antennaSample.sections[0].content.slice(0, 300));
  console.log('FAQ 1:', antennaSample.faqs[0]);
}

// Case C: Downloader / GitHub utility
const utilitySample = pages.find(p => p.primaryKeyword.toLowerCase().includes('youtube-dl'));
if (utilitySample) {
  console.log('\n[Case C: Developer Utility / GitHub Tool]');
  console.log('Keyword:', utilitySample.primaryKeyword);
  console.log('Title:', utilitySample.title);
  console.log('Cluster:', utilitySample.cluster);
  console.log('Section 1 Title:', utilitySample.sections[0].title);
  console.log('Section 1 Content Snippet:', utilitySample.sections[0].content.slice(0, 300));
}

// Case D: Competitor Brand
const competitorSample = pages.find(p => p.primaryKeyword.toLowerCase().includes('vocotv'));
if (competitorSample) {
  console.log('\n[Case D: Third-Party Competitor Brand]');
  console.log('Keyword:', competitorSample.primaryKeyword);
  console.log('Title:', competitorSample.title);
  console.log('Cluster:', competitorSample.cluster);
  console.log('Section 1 Title:', competitorSample.sections[0].title);
  console.log('Section 1 Content Snippet:', competitorSample.sections[0].content.slice(0, 300));
}

// Case E: Core Relevant IPTV Keyword
const coreSample = pages.find(p => p.primaryKeyword.toLowerCase() === 'best iptv service for firestick');
if (coreSample) {
  console.log('\n[Case E: Core High-Intent IPTV Keyword]');
  console.log('Keyword:', coreSample.primaryKeyword);
  console.log('Title:', coreSample.title);
  console.log('Cluster:', coreSample.cluster);
  console.log('Section 1 Title:', coreSample.sections[0].title);
  console.log('Section 1 Content Snippet:', coreSample.sections[0].content.slice(0, 300));
}

