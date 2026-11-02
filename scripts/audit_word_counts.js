const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'pages_4000.json');
const pages = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

console.log(`Total active guide pages: ${pages.length}`);

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(w => w.length > 0).length;
}

let below500Strict = 0;
let below500WithFaqs = 0;
let minWordsStrict = Infinity;
let maxWordsStrict = -Infinity;
let totalWordsStrict = 0;

let minWordsWithFaqs = Infinity;
let maxWordsWithFaqs = -Infinity;
let totalWordsWithFaqs = 0;

const distribution = {
  '<300': 0,
  '300-399': 0,
  '400-499': 0,
  '500-699': 0,
  '700-999': 0,
  '1000+': 0
};

pages.forEach(p => {
  // Strict: only section titles and section content (core article body)
  const sectionText = (p.sections || []).map(s => `${s.title} ${s.content}`).join(' ');
  const strictWords = countWords(sectionText);
  
  // With FAQs: section text + faqs text
  const faqText = (p.faqs || []).map(f => `${f.question} ${f.answer}`).join(' ');
  const withFaqsWords = countWords(`${sectionText} ${faqText}`);

  if (strictWords < 500) below500Strict++;
  if (withFaqsWords < 500) below500WithFaqs++;

  if (strictWords < minWordsStrict) minWordsStrict = strictWords;
  if (strictWords > maxWordsStrict) maxWordsStrict = strictWords;
  totalWordsStrict += strictWords;

  if (withFaqsWords < minWordsWithFaqs) minWordsWithFaqs = withFaqsWords;
  if (withFaqsWords > maxWordsWithFaqs) maxWordsWithFaqs = withFaqsWords;
  totalWordsWithFaqs += withFaqsWords;

  if (strictWords < 300) distribution['<300']++;
  else if (strictWords < 400) distribution['300-399']++;
  else if (strictWords < 500) distribution['400-499']++;
  else if (strictWords < 700) distribution['500-699']++;
  else if (strictWords < 1000) distribution['700-999']++;
  else distribution['1000+']++;
});

console.log('\n--- WORD COUNT AUDIT RESULTS ---');
console.log('STRICT (Section Titles + Section Body Content):');
console.log(`  Minimum Words: ${minWordsStrict}`);
console.log(`  Maximum Words: ${maxWordsStrict}`);
console.log(`  Average Words: ${(totalWordsStrict / pages.length).toFixed(1)}`);
console.log(`  Pages < 500 words: ${below500Strict} / ${pages.length} (${((below500Strict / pages.length) * 100).toFixed(1)}%)`);

console.log('\nWITH FAQS (Section Content + Unique FAQs):');
console.log(`  Minimum Words: ${minWordsWithFaqs}`);
console.log(`  Maximum Words: ${maxWordsWithFaqs}`);
console.log(`  Average Words: ${(totalWordsWithFaqs / pages.length).toFixed(1)}`);
console.log(`  Pages < 500 words: ${below500WithFaqs} / ${pages.length} (${((below500WithFaqs / pages.length) * 100).toFixed(1)}%)`);

console.log('\nStrict Distribution:');
console.log(JSON.stringify(distribution, null, 2));

