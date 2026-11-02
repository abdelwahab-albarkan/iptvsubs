const fs = require('fs');

console.log('Loading keywords_master.json...');
let raw = fs.readFileSync('data/keywords_master.json', 'utf8').replace(/^\uFEFF/, '');
const keywords = JSON.parse(raw);
console.log(`Total unique keywords: ${keywords.length}`);

// Define cluster rules based on search intent and user queries
const clusters = {
  'brand_and_core_service': {
    name: 'Brand & Core IPTV Service (8K/4K)',
    patterns: [/\b8k\b/i, /\b4k iptv\b/i, /\biptv service\b/i, /\biptv services\b/i, /\bultra iptv\b/i, /\bstrong iptv\b/i, /\bbest iptv\b/i],
    keywords: [],
    totalVolume: 0
  },
  'usa_providers_and_pricing': {
    name: 'IPTV USA Providers, Pricing & Subscriptions',
    patterns: [/\busa\b/i, /\bprice\b/i, /\bpricing\b/i, /\bcost\b/i, /\bpackage\b/i, /\bpackages\b/i, /\bplans\b/i, /\bsubscription\b/i, /\bsubscribe\b/i, /\bbuy iptv\b/i],
    keywords: [],
    totalVolume: 0
  },
  'free_trial_and_testing': {
    name: 'Free Trial & Test Account',
    patterns: [/\btrial\b/i, /\btest\b/i, /\bdemo\b/i, /\bfree trial\b/i, /\b24 hour\b/i],
    keywords: [],
    totalVolume: 0
  },
  'device_firestick_and_firetv': {
    name: 'Amazon Firestick & Fire TV Setup',
    patterns: [/\bfirestick\b/i, /\bfire tv\b/i, /\bfire cube\b/i, /\bamazon fire\b/i, /\bdownloader\b/i],
    keywords: [],
    totalVolume: 0
  },
  'device_android_tv': {
    name: 'Android TV & Android Box Setup',
    patterns: [/\bandroid tv\b/i, /\bandroid box\b/i, /\bnvidia shield\b/i, /\bgoogle tv\b/i, /\bmi box\b/i],
    keywords: [],
    totalVolume: 0
  },
  'device_smart_tv_samsung_lg': {
    name: 'Smart TVs (Samsung Tizen, LG webOS)',
    patterns: [/\bsamsung\b/i, /\blg tv\b/i, /\bwebos\b/i, /\btizen\b/i, /\bsmart tv\b/i, /\bsiptv\b/i],
    keywords: [],
    totalVolume: 0
  },
  'device_apple_and_pc': {
    name: 'Apple TV, iOS & Windows/Mac',
    patterns: [/\bapple tv\b/i, /\bmac\b/i, /\bwindows\b/i, /\bpc\b/i, /\biphone\b/i, /\bipad\b/i, /\bvlc\b/i],
    keywords: [],
    totalVolume: 0
  },
  'device_mag_and_formuler': {
    name: 'MAG, Formuler & Stalker Middleware Boxes',
    patterns: [/\bmag box\b/i, /\bmag 254\b/i, /\bmag 322\b/i, /\bmag 524\b/i, /\bformuler\b/i, /\bmol2\b/i, /\bstalker\b/i, /\bmac address\b/i],
    keywords: [],
    totalVolume: 0
  },
  'device_roku': {
    name: 'Roku Player & TV Compatibility',
    patterns: [/\broku\b/i],
    keywords: [],
    totalVolume: 0
  },
  'apps_smarters_pro': {
    name: 'IPTV Smarters Pro & Smarters Player',
    patterns: [/\bsmarters\b/i, /\biptv smarters\b/i],
    keywords: [],
    totalVolume: 0
  },
  'apps_tivimate': {
    name: 'TiviMate IPTV Player & Premium',
    patterns: [/\btivimate\b/i],
    keywords: [],
    totalVolume: 0
  },
  'apps_ibo_and_xciptv': {
    name: 'IBO Player, XCIPTV & Other Players',
    patterns: [/\bibo player\b/i, /\bxciptv\b/i, /\bextreme\b/i, /\bxtream\b/i, /\bplayer\b/i, /\bm3u\b/i, /\bkodi\b/i],
    keywords: [],
    totalVolume: 0
  },
  'sports_and_local_channels': {
    name: 'USA Local Channels & Live Sports Streaming',
    patterns: [/\blocal channels\b/i, /\bsports\b/i, /\bsoccer\b/i, /\bfootball\b/i, /\bnfl\b/i, /\bnba\b/i, /\bppv\b/i, /\bstreams\b/i, /\bchannel\b/i, /\bchannels\b/i],
    keywords: [],
    totalVolume: 0
  },
  'troubleshooting_and_buffering': {
    name: 'Troubleshooting, Buffering & Fixes',
    patterns: [/\bbuffering\b/i, /\bfreeze\b/i, /\bfreezing\b/i, /\bnot working\b/i, /\bdown\b/i, /\berror\b/i, /\bfix\b/i, /\blag\b/i, /\bvpn\b/i, /\bisp\b/i],
    keywords: [],
    totalVolume: 0
  },
  'installation_and_guides': {
    name: 'How to Install & Setup IPTV',
    patterns: [/\bhow to install\b/i, /\bhow to setup\b/i, /\binstallation\b/i, /\bsetup\b/i, /\bguide\b/i, /\btutorial\b/i],
    keywords: [],
    totalVolume: 0
  },
  'legal_safety_and_reviews': {
    name: 'IPTV Legality in USA, Reviews & Avoiding Scams',
    patterns: [/\blegal\b/i, /\blaw\b/i, /\blegitimate\b/i, /\bscam\b/i, /\bscams\b/i, /\breview\b/i, /\breviews\b/i, /\bsafe\b/i, /\bvs cable\b/i],
    keywords: [],
    totalVolume: 0
  },
  'reseller_panel': {
    name: 'IPTV Reseller Panel & Business',
    patterns: [/\breseller\b/i, /\bcredits\b/i, /\bwholesale\b/i],
    keywords: [],
    totalVolume: 0
  }
};

let unassigned = [];

keywords.forEach(kw => {
  let assigned = false;
  for (const [key, cluster] of Object.entries(clusters)) {
    for (const pattern of cluster.patterns) {
      if (pattern.test(kw.Keyword)) {
        cluster.keywords.push(kw);
        cluster.totalVolume += (kw.Volume || 0);
        assigned = true;
        break;
      }
    }
    if (assigned) break;
  }
  if (!assigned) {
    unassigned.push(kw);
  }
});

console.log('\n--- TOPIC CLUSTER BREAKDOWN ---');
const clusterSummary = [];
for (const [key, cluster] of Object.entries(clusters)) {
  console.log(`\nCluster: ${cluster.name} (${key})`);
  console.log(`  Keywords: ${cluster.keywords.length}`);
  console.log(`  Total Monthly Search Volume: ${cluster.totalVolume.toLocaleString()}`);
  
  // Top 5 keywords
  const top5 = cluster.keywords.sort((a,b) => (b.Volume||0) - (a.Volume||0)).slice(0, 5);
  console.log('  Top 5:');
  top5.forEach(k => console.log(`    - "${k.Keyword}" (Vol: ${k.Volume}, KD: ${k.Difficulty}, Intent: ${k.Intent})`));
  
  clusterSummary.push({
    clusterId: key,
    name: cluster.name,
    keywordCount: cluster.keywords.length,
    totalVolume: cluster.totalVolume,
    topKeywords: top5
  });
}

console.log(`\nUnassigned Keywords: ${unassigned.length}`);
fs.writeFileSync('data/topic_clusters_summary.json', JSON.stringify(clusterSummary, null, 2), 'utf8');
console.log('Saved data/topic_clusters_summary.json');
