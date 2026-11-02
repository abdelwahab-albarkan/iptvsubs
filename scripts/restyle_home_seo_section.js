const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'HomeSeoSection.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// Root container
code = code.replace(
  'className="space-y-24 py-12 text-slate-200"',
  'className="space-y-24 py-16 text-slate-700 bg-white"'
);

// Badges
code = code.replace(/bg-cyan-500\/10 border border-cyan-500\/30 text-accent-cyan/g, 'bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs');
code = code.replace(/bg-cyan-500\/20 text-accent-cyan/g, 'bg-orange-100 text-[#FF6B00]');
code = code.replace(/text-gradient-cyan/g, 'text-[#FF6B00]');
code = code.replace(/text-accent-cyan/g, 'text-[#FF6B00]');

// Headings
code = code.replace(/font-extrabold text-white/g, 'font-black text-slate-900');
code = code.replace(/font-bold text-white/g, 'font-black text-slate-900');
code = code.replace(/font-semibold text-white/g, 'font-bold text-slate-900');
code = code.replace(/text-white/g, 'text-slate-900');

// Body texts
code = code.replace(/text-slate-300/g, 'text-slate-600');
code = code.replace(/text-slate-400/g, 'text-slate-500');

// Containers & Cards
code = code.replace(/bg-surface\/80 border border-card-border/g, 'bg-white border border-slate-200/90 shadow-sm');
code = code.replace(/bg-surface border border-card-border/g, 'bg-white border border-slate-200/90 shadow-sm');
code = code.replace(/bg-surface/g, 'bg-white');
code = code.replace(/bg-card/g, 'bg-white');
code = code.replace(/bg-slate-950\/60/g, 'bg-slate-50');
code = code.replace(/bg-slate-950\/80/g, 'bg-slate-50');
code = code.replace(/bg-slate-950/g, 'bg-slate-50');
code = code.replace(/border-card-border\/60/g, 'border-slate-200/80');
code = code.replace(/border-card-border\/70/g, 'border-slate-200/80');
code = code.replace(/border-card-border\/80/g, 'border-slate-200/80');
code = code.replace(/border-card-border/g, 'border-slate-200');
code = code.replace(/border-cyan-500\/30/g, 'border-orange-200');
code = code.replace(/border-cyan-500\/40/g, 'border-orange-300');
code = code.replace(/shadow-neon-cyan/g, 'shadow-sm');

// Hover states
code = code.replace(/hover:border-cyan-500\/40/g, 'hover:border-orange-300');
code = code.replace(/hover:border-slate-600/g, 'hover:border-slate-300');

fs.writeFileSync(filePath, code, 'utf8');
console.log('Restyled HomeSeoSection.tsx successfully.');

