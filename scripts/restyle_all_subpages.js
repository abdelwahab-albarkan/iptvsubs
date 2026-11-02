const fs = require('fs');
const path = require('path');

const subpages = [
  'src/app/pricing/page.tsx',
  'src/app/free-trial/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/channels/page.tsx',
  'src/app/reseller/page.tsx',
  'src/app/setup/page.tsx',
  'src/app/setup/firestick/page.tsx',
  'src/app/setup/android-tv/page.tsx',
  'src/app/setup/smart-tv/page.tsx',
  'src/app/setup/apple-tv/page.tsx',
  'src/app/setup/roku/page.tsx',
  'src/app/setup/pc-mac/page.tsx',
  'src/app/setup/mag-formuler/page.tsx',
  'src/app/apps/page.tsx',
  'src/app/apps/tivimate/page.tsx',
  'src/app/apps/iptv-smarters-pro/page.tsx',
  'src/app/apps/ibo-player/page.tsx',
  'src/app/apps/xciptv/page.tsx',
  'src/app/apps/kodi/page.tsx',
  'src/app/troubleshooting/page.tsx',
  'src/app/troubleshooting/iptv-buffering/page.tsx',
  'src/app/troubleshooting/iptv-not-working/page.tsx',
  'src/app/troubleshooting/vpn-isp-throttling/page.tsx',
  'src/app/guide/page.tsx',
  'src/app/compare/cable-vs-iptv/page.tsx',
  'src/app/guides/best-iptv-providers-usa/page.tsx',
  'src/app/guides/iptv-scams-guide/page.tsx',
  'src/app/guides/is-iptv-legal-usa/page.tsx',
  'src/app/html-sitemap/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/refund-policy/page.tsx',
  'src/app/not-found.tsx'
];

subpages.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) return;

  let code = fs.readFileSync(fullPath, 'utf8');

  // Page header wrapper
  code = code.replace(/py-8 bg-surface\/30 border-b border-card-border\/80/g, 'py-10 bg-slate-50/70 border-b border-slate-200/80');
  code = code.replace(/py-8 bg-surface\/20 border-b border-card-border\/70/g, 'py-10 bg-slate-50/70 border-b border-slate-200/80');
  code = code.replace(/bg-surface\/30 border-b border-card-border\/80/g, 'bg-slate-50/70 border-b border-slate-200/80');
  code = code.replace(/bg-surface\/20 border-b border-card-border/g, 'bg-slate-50/70 border-b border-slate-200');

  // Badges
  code = code.replace(/bg-cyan-500\/10 border border-cyan-500\/30 text-accent-cyan/g, 'bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs');
  code = code.replace(/bg-cyan-500\/20 text-accent-cyan/g, 'bg-orange-100 text-[#FF6B00]');
  code = code.replace(/text-accent-cyan/g, 'text-[#FF6B00]');
  code = code.replace(/text-neon-cyan/g, 'text-[#FF6B00]');
  code = code.replace(/text-gradient-cyan/g, 'text-[#FF6B00]');

  // Headings & Text
  code = code.replace(/font-black text-white/g, 'font-black text-slate-900');
  code = code.replace(/font-extrabold text-white/g, 'font-black text-slate-900');
  code = code.replace(/font-bold text-white/g, 'font-bold text-slate-900');
  code = code.replace(/text-white/g, 'text-slate-900');
  code = code.replace(/text-slate-300/g, 'text-slate-600');
  code = code.replace(/text-slate-400/g, 'text-slate-500');

  // Cards and containers
  code = code.replace(/bg-surface\/80 border border-card-border/g, 'bg-white border border-slate-200 shadow-sm');
  code = code.replace(/bg-surface\/90 border border-card-border/g, 'bg-white border border-slate-200 shadow-sm');
  code = code.replace(/bg-surface border border-card-border/g, 'bg-white border border-slate-200 shadow-sm');
  code = code.replace(/bg-surface/g, 'bg-white');
  code = code.replace(/bg-card/g, 'bg-white');
  code = code.replace(/bg-slate-950\/80/g, 'bg-slate-50');
  code = code.replace(/bg-slate-950\/60/g, 'bg-slate-50');
  code = code.replace(/bg-slate-950\/40/g, 'bg-slate-50');
  code = code.replace(/bg-slate-950/g, 'bg-slate-50');
  code = code.replace(/bg-slate-900\/80/g, 'bg-white');
  code = code.replace(/bg-slate-900\/60/g, 'bg-white');
  code = code.replace(/bg-slate-900\/50/g, 'bg-white');
  code = code.replace(/bg-slate-900/g, 'bg-slate-50');
  code = code.replace(/border-card-border\/80/g, 'border-slate-200/80');
  code = code.replace(/border-card-border\/70/g, 'border-slate-200/80');
  code = code.replace(/border-card-border\/60/g, 'border-slate-200/80');
  code = code.replace(/border-card-border/g, 'border-slate-200');
  code = code.replace(/border-slate-800\/80/g, 'border-slate-200');
  code = code.replace(/border-slate-800\/60/g, 'border-slate-200');
  code = code.replace(/border-slate-800/g, 'border-slate-200');

  // Input elements
  code = code.replace(/bg-surface border border-card-border rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:border-accent-cyan/g, 'bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]');

  // Buttons
  code = code.replace(/bg-gradient-to-r from-accent-cyan to-primary-500 text-slate-950/g, 'bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25');
  code = code.replace(/bg-gradient-to-r from-accent-cyan to-primary-600 text-slate-950/g, 'bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25');
  code = code.replace(/bg-accent-cyan text-slate-950/g, 'bg-[#FF6B00] text-white');

  // Fix button text contrast when bg-slate-900 or bg-[#FF6B00] is used
  code = code.replace(/bg-\[#FF6B00\] text-slate-900/g, 'bg-[#FF6B00] text-white');
  code = code.replace(/bg-gradient-to-r from-\[#FF6B00\] to-\[#EA580C\] text-slate-900/g, 'bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white');
  code = code.replace(/bg-slate-900 text-slate-900/g, 'bg-slate-900 text-white');

  // Fix form and card labels
  code = code.replace(/text-slate-900 font-bold text-xs uppercase tracking-wider block mb-1\.5/g, 'text-slate-700 font-bold text-xs uppercase tracking-wider block mb-1.5');

  fs.writeFileSync(fullPath, code, 'utf8');
  console.log(`Restyled ${relPath}`);
});

console.log('Finished restyling all subpages.');

