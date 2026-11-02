const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'guide', '[slug]', 'page.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// Root article container
code = code.replace(
  'className="min-h-screen bg-obsidian-950 text-slate-100 pt-28 pb-20"',
  'className="min-h-screen bg-white text-slate-900 pt-24 pb-20"'
);

// Pillar banner
code = code.replace(
  'bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between gap-3 text-xs sm:text-sm',
  'bg-orange-50 border border-orange-200/80 flex items-center justify-between gap-3 text-xs sm:text-sm rounded-2xl p-4 shadow-2xs'
);
code = code.replace('text-slate-200', 'text-slate-700');
code = code.replace('text-white', 'text-slate-900');
code = code.replace(/text-accent-cyan/g, 'text-[#FF6B00]');
code = code.replace(/text-neon-cyan/g, 'text-[#FF6B00]');

// Badges
code = code.replace(/bg-neon-cyan\/10 text-neon-cyan border border-neon-cyan\/20/g, 'bg-orange-100 text-[#FF6B00] border border-orange-200 font-bold');
code = code.replace(/bg-slate-800 text-slate-300/g, 'bg-slate-100 text-slate-700 font-semibold');
code = code.replace(/text-slate-400/g, 'text-slate-500');

// Headings & paragraphs
code = code.replace('font-extrabold text-white tracking-tight leading-tight', 'font-black text-slate-900 tracking-tight leading-tight');
code = code.replace('text-lg sm:text-xl text-slate-300 leading-relaxed font-normal', 'text-lg sm:text-xl text-slate-600 leading-relaxed font-normal');

// Editorial card
code = code.replace(
  'bg-surface/60 border border-card-border flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400',
  'bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600'
);
code = code.replace('bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-accent-cyan font-bold', 'bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] font-bold');

// Executive summary
code = code.replace(
  'bg-gradient-to-r from-neon-cyan/5 via-slate-900 to-neon-purple/5 border border-neon-cyan/20',
  'bg-orange-50/50 border border-orange-200/80 rounded-3xl shadow-2xs'
);

// Table of contents
code = code.replace(
  'bg-surface/80 border border-card-border',
  'bg-slate-50 border border-slate-200 rounded-3xl shadow-2xs'
);

// Featured image container
code = code.replace(
  'border border-slate-800 bg-slate-900 aspect-video max-w-3xl mx-auto shadow-2xl',
  'border border-slate-200 bg-slate-50 aspect-video max-w-3xl mx-auto shadow-xl rounded-3xl'
);

// Specs
code = code.replace(
  'p-4 rounded-xl bg-slate-900/80 border border-slate-800',
  'p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs'
);

// Content sections
code = code.replace(
  'p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 scroll-mt-28',
  'p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all scroll-mt-28'
);
code = code.replace(
  'bg-neon-cyan/10 text-neon-cyan text-sm font-extrabold border border-neon-cyan/30',
  'bg-orange-50 text-[#FF6B00] text-sm font-black border border-orange-200'
);
code = code.replace('text-slate-300 leading-relaxed text-base space-y-4 whitespace-pre-line font-normal', 'text-slate-700 leading-relaxed text-base space-y-4 whitespace-pre-line font-normal');

// External citations
code = code.replace(
  'bg-surface/50 border border-card-border/70 text-xs text-slate-400',
  'bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-600 shadow-2xs'
);

// FAQs
code = code.replace(
  'bg-slate-900/60 border border-slate-800 scroll-mt-28',
  'bg-slate-50 border border-slate-200 rounded-3xl scroll-mt-28'
);
code = code.replace(
  'p-5 rounded-xl bg-slate-950/70 border border-slate-800',
  'p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs'
);

// Secondary keywords
code = code.replace(
  'bg-slate-950/40 border border-slate-800/60',
  'bg-slate-50 border border-slate-200 rounded-2xl'
);
code = code.replace(/bg-slate-900 text-slate-300 border border-slate-800/g, 'bg-white text-slate-700 border border-slate-200 font-medium');

// Related links
code = code.replace(
  'bg-slate-900/60 border border-slate-800 hover:border-neon-cyan/50',
  'bg-white border border-slate-200/90 hover:border-orange-200 shadow-xs hover:shadow-md'
);

// Cross-pillar nav
code = code.replace(
  'bg-surface/80 border border-card-border',
  'bg-slate-50 border border-slate-200 rounded-3xl'
);
code = code.replace(
  /bg-card border border-card-border hover:border-cyan-500\/50 hover:text-accent-cyan text-slate-300/g,
  'bg-white border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold'
);

// High-converting CTA banner
code = code.replace(
  'bg-gradient-to-r from-neon-cyan/20 via-slate-900 to-neon-purple/20 border border-neon-cyan/30 text-center relative overflow-hidden',
  'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-center relative overflow-hidden shadow-2xl text-white'
);
code = code.replace(
  'bg-neon-cyan text-obsidian-950 font-bold text-base hover:bg-cyan-300 transition-all shadow-lg shadow-neon-cyan/20',
  'bg-gradient-to-r from-[#FF6B00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-black text-base shadow-md shadow-orange-500/25 transition-all'
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Restyled guide [slug] template successfully.');

