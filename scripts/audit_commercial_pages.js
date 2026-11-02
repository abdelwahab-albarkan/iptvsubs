const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('COMMERCIAL LANDING PAGES & HOMEPAGE CONVERSION QUALITY AUDIT');
console.log('================================================================\n');

const commercialPages = [
  { name: 'Homepage', file: 'src/app/page.tsx', route: '/' },
  { name: 'Pricing & Plans', file: 'src/app/pricing/page.tsx', route: '/pricing' },
  { name: '24h Free Trial', file: 'src/app/free-trial/page.tsx', route: '/free-trial' },
  { name: 'Channels Directory', file: 'src/app/channels/page.tsx', route: '/channels' },
  { name: 'Device Setup Hub', file: 'src/app/setup/page.tsx', route: '/setup' },
  { name: 'Firestick Setup', file: 'src/app/setup/firestick/page.tsx', route: '/setup/firestick' },
  { name: 'Roku Setup', file: 'src/app/setup/roku/page.tsx', route: '/setup/roku' },
  { name: 'Smart TV Setup', file: 'src/app/setup/smart-tv/page.tsx', route: '/setup/smart-tv' },
  { name: 'Android TV Setup', file: 'src/app/setup/android-tv/page.tsx', route: '/setup/android-tv' },
  { name: 'Apple TV Setup', file: 'src/app/setup/apple-tv/page.tsx', route: '/setup/apple-tv' },
  { name: 'PC / Mac Setup', file: 'src/app/setup/pc-mac/page.tsx', route: '/setup/pc-mac' },
  { name: 'MAG / Formuler Setup', file: 'src/app/setup/mag-formuler/page.tsx', route: '/setup/mag-formuler' },
  { name: 'IPTV Apps Hub', file: 'src/app/apps/page.tsx', route: '/apps' },
  { name: 'TiviMate Player', file: 'src/app/apps/tivimate/page.tsx', route: '/apps/tivimate' },
  { name: 'IPTV Smarters Pro', file: 'src/app/apps/iptv-smarters-pro/page.tsx', route: '/apps/iptv-smarters-pro' },
  { name: 'IBO Player', file: 'src/app/apps/ibo-player/page.tsx', route: '/apps/ibo-player' },
  { name: 'Troubleshooting Hub', file: 'src/app/troubleshooting/page.tsx', route: '/troubleshooting' },
  { name: 'Buffering Diagnostic', file: 'src/app/troubleshooting/iptv-buffering/page.tsx', route: '/troubleshooting/iptv-buffering' },
  { name: 'Reseller Business', file: 'src/app/reseller/page.tsx', route: '/reseller' },
  { name: 'Contact & Support', file: 'src/app/contact/page.tsx', route: '/contact' }
];

const results = [];

commercialPages.forEach(cp => {
  const fullPath = path.join(__dirname, '..', cp.file);
  if (!fs.existsSync(fullPath)) {
    console.error(`File missing: ${fullPath}`);
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');

  // Audit checks
  const hasWhatsApp = content.includes('212625218443') || content.includes('wa.me');
  const hasEmail = content.includes('support@streamb4.com');
  const hasPricing = content.includes('39.99') || content.includes('PRICING_PLANS');
  const hasTrialCta = content.includes('free-trial') || content.includes('Free Trial');
  const hasMoneyBack = content.includes('Money-Back') || content.includes('money-back') || content.includes('guarantee');
  const hasBogusRatings = content.includes('3,840') || content.includes('3840') || content.includes('4.9/5');

  results.push({
    name: cp.name,
    route: cp.route,
    file: cp.file,
    hasWhatsApp,
    hasEmail,
    hasPricing,
    hasTrialCta,
    hasMoneyBack,
    hasBogusRatings
  });

  console.log(`[${cp.name}] (${cp.route})`);
  console.log(`  WhatsApp: ${hasWhatsApp ? 'YES' : 'Header/Footer Global'} | Email: ${hasEmail ? 'YES' : 'Header/Footer Global'}`);
  console.log(`  Trial CTA: ${hasTrialCta ? 'YES' : 'NO'} | Pricing: ${hasPricing ? 'YES' : 'NO'} | Guarantee: ${hasMoneyBack ? 'YES' : 'NO'}`);
  console.log(`  Unverified Ratings: ${hasBogusRatings ? 'FOUND' : 'CLEAN'}\n`);
});

// Save commercial pages audit JSON
fs.writeFileSync(
  path.join(__dirname, '..', 'data', 'commercial_pages_audit.json'),
  JSON.stringify(results, null, 2),
  'utf8'
);

