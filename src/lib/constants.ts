export const SITE_CONFIG = {
  name: 'IPTVSubs8K',
  domain: 'iptvsubs8k.com',
  url: 'https://iptvsubs8k.com',
  tagline: 'Premium 8K & 4K IPTV Service Provider in USA',
  description: 'The highest rated IPTV service in the United States. Stream 25,000+ live HD, 4K & 8K channels, 120,000+ movies and shows, local US networks, and premium live sports with 99.9% anti-freeze stability.',
  author: 'IPTVSubs8K Editorial & Engineering Team',
  locale: 'en_US',
  currency: 'USD',
  email: 'support@streamb4.com',
  whatsapp: '+212625218443',
  whatsappUrl: 'https://wa.me/212625218443',
  social: {
    twitter: 'https://twitter.com/iptvsubs8k',
    telegram: 'https://t.me/iptvsubs8k_support',
    whatsapp: 'https://wa.me/212625218443',
  },
  stats: {
    liveChannels: '25,000+',
    vodMovies: '120,000+',
    serverUptime: '99.9%',
    bandwidthSpeed: '10 Gbps',
    activeSubscribers: '65,000+',
    customerRating: 4.9,
    reviewCount: 3840
  }
};

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  months: number;
  price: number;
  monthlyEquivalent: number;
  savingsPercent: number;
  isPopular?: boolean;
  isBestValue?: boolean;
  connections: number;
  pricesByAccounts: Record<number, number>;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-3-months',
    name: '3 Months Standard',
    duration: '3 Months',
    months: 3,
    price: 39.99,
    monthlyEquivalent: 13.33,
    savingsPercent: 0,
    connections: 1,
    pricesByAccounts: {
      1: 39.99,
      2: 59.99,
      3: 79.99,
      4: 99.99,
    },
    features: [
      '25,000+ Live Channels (USA, UK, CA, Latino)',
      '120,000+ VOD Movies & TV Series',
      'Ultra HD, 4K & 8K Streaming Feeds',
      'Anti-Freeze™ 9.2 Technology',
      'Full US Sports & PPV Events Included',
      'Interactive EPG TV Guide (7-Day)',
      'All Device Compatibility (Firestick, Smart TV, Android)',
      'Instant Automated Email Delivery',
      '7-Day Money-Back Guarantee'
    ]
  },
  {
    id: 'plan-6-months',
    name: '6 Months Pro',
    duration: '6 Months',
    months: 6,
    price: 56.99,
    monthlyEquivalent: 9.50,
    savingsPercent: 29,
    isPopular: true,
    connections: 1,
    pricesByAccounts: {
      1: 56.99,
      2: 84.99,
      3: 109.99,
      4: 134.99,
    },
    features: [
      'All 3-Month Features Included',
      'Save 29% Compared to Standard Rate',
      'Multi-Server Failover Redundancy',
      '4K & 8K Ultra High Definition Feeds',
      'NFL Sunday Ticket, NBA, MLB & Soccer Passes',
      'Firestick, Android & Smart TV Pre-Configured',
      'Free Remote Setup Assistance',
      'Priority 24/7 Customer Support',
      'Full 7-Day Money-Back Guarantee'
    ]
  },
  {
    id: 'plan-12-months',
    name: '12 Months Ultimate',
    duration: '12 Months',
    months: 12,
    price: 79.99,
    monthlyEquivalent: 6.66,
    savingsPercent: 50,
    isBestValue: true,
    connections: 1,
    pricesByAccounts: {
      1: 79.99,
      2: 119.99,
      3: 149.99,
      4: 179.99,
    },
    features: [
      'Maximum Value — Just $6.66 / Month',
      '50% Massive Savings vs Shorter Billing Terms',
      'Dedicated Tier-1 10Gbps Server Slot',
      '25,000+ Live Channels in 4K/8K/FHD',
      'Unlimited VOD Library with Daily Updates',
      'All Pay-Per-View Events Included (UFC, Boxing)',
      'Multi-Device Activation Assistance',
      'VIP Priority Concierge Support Line',
      '100% Risk-Free 7-Day Money-Back Guarantee'
    ]
  }
];

export const RESELLER_TIERS = [
  {
    id: 'reseller-starter',
    name: 'Starter Reseller',
    credits: 100,
    price: 250,
    costPerCredit: '$2.50',
    profitMargin: '65%+',
    features: [
      'Access to Advanced Xtream Codes CMS Panel',
      'Create 1, 3, 6, 12 Month Subscriptions',
      'Create Free 24-Hour Trial Accounts',
      'Sub-reseller Creation Disabled',
      'Full Technical Knowledge Base',
      'Telegram & Ticket Support'
    ]
  },
  {
    id: 'reseller-pro',
    name: 'Pro Reseller',
    credits: 250,
    price: 500,
    costPerCredit: '$2.00',
    profitMargin: '75%+',
    isPopular: true,
    features: [
      'White-Label IPTV Reseller Panel',
      'Sub-Reseller Management Enabled',
      'Cost per 1-Month Sub only 1 Credit ($2.00)',
      'Custom DNS & Portal Branding',
      'Kill Active Connections & Manage EPG',
      'Priority VIP Telegram Account Manager'
    ]
  },
  {
    id: 'reseller-master',
    name: 'Master Super Reseller',
    credits: 600,
    price: 1000,
    costPerCredit: '$1.66',
    profitMargin: '85%+',
    features: [
      'Master Level Panel Authority',
      'Lowest Wholesale Credit Pricing ($1.66)',
      'Create Unlimited Sub-Reseller Accounts',
      'Custom Android App Rebranding Available',
      'Dedicated 10Gbps Server Pool Access',
      'Direct Phone & VIP Telegram Engineering Line'
    ]
  }
];

export const DEVICE_GUIDES = [
  {
    slug: 'firestick',
    name: 'Amazon Firestick & Fire TV',
    icon: 'Tv',
    difficulty: 'Easy (3 mins)',
    popular: true,
    description: 'The #1 streaming device for IPTV in the USA. Full guide for Firestick 4K Max, Lite, and Fire TV Cube.',
    image: '/images/firestick.webp'
  },
  {
    slug: 'android-tv',
    name: 'Android TV & Google TV',
    icon: 'MonitorPlay',
    difficulty: 'Easy (4 mins)',
    popular: true,
    description: 'Step-by-step setup for Nvidia Shield TV Pro, Chromecast with Google TV, and Android TV boxes.',
    image: '/images/Android TV.webp'
  },
  {
    slug: 'smart-tv',
    name: 'Samsung & LG Smart TVs',
    icon: 'Tv2',
    difficulty: 'Moderate (5 mins)',
    popular: true,
    description: 'Install without external streaming sticks on Samsung Tizen OS and LG webOS using IBO Player and Smart IPTV.',
    image: '/images/devices/frameless-smart-tv.webp'
  },
  {
    slug: 'apple-tv',
    name: 'Apple TV 4K & iOS (iPhone/iPad)',
    icon: 'Smartphone',
    difficulty: 'Easy (3 mins)',
    popular: false,
    description: 'Native tvOS and iOS setup using IPTV Smarters, GSE Smart IPTV, and UHF player with AirPlay support.',
    image: '/images/appletv.webp'
  },
  {
    slug: 'pc-mac',
    name: 'Windows PC & Mac',
    icon: 'Laptop',
    difficulty: 'Easy (2 mins)',
    popular: false,
    description: 'Stream directly on Windows 10/11 or macOS using VLC Media Player or IPTV Smarters Pro desktop.',
    image: '/images/devices/tv-tablet-phone.webp'
  },
  {
    slug: 'mag-formuler',
    name: 'MAG Box & Formuler Z11',
    icon: 'Box',
    difficulty: 'Moderate (5 mins)',
    popular: false,
    description: 'Configure MAC address portal URLs, Stalker middleware, and MyTVOnline 2/3 on dedicated IPTV hardware.',
    image: '/images/androidtvbox.webp'
  },
  {
    slug: 'roku',
    name: 'Roku TV & Streaming Stick',
    icon: 'Radio',
    difficulty: 'Advanced (Workaround)',
    popular: false,
    description: 'Realistic guide explaining Roku limitations and verified casting/mirroring workarounds from Android/iOS.',
    image: '/images/devices/streaming-stick-tv.webp'
  }
];

export const APP_GUIDES = [
  {
    slug: 'iptv-smarters-pro',
    name: 'IPTV Smarters Pro',
    rating: 4.9,
    platforms: ['Firestick', 'Android', 'iOS', 'Smart TV', 'Windows/Mac'],
    description: 'The world’s most popular IPTV player with Xtream Codes API login, multi-screen, EPG, and parental control.',
    image: '/images/apps-dashboard.webp'
  },
  {
    slug: 'tivimate',
    name: 'TiviMate IPTV Player',
    rating: 5.0,
    platforms: ['Firestick', 'Android TV', 'Google TV', 'Nvidia Shield'],
    description: 'The gold standard premium player for Android TV. Ultra-fast EPG, picture-in-picture, recording, and smooth UI.',
    image: '/images/beste-iptv-apps-dashboard.webp'
  },
  {
    slug: 'ibo-player',
    name: 'IBO Player',
    rating: 4.8,
    platforms: ['Samsung Smart TV', 'LG webOS', 'Android TV', 'Apple TV'],
    description: 'Top choice for Samsung & LG Smart TVs. Seamless remote control navigation, fast stream buffering, and simple MAC upload.',
    image: '/images/devices/smart-tv-wall.webp'
  },
  {
    slug: 'xciptv',
    name: 'XCIPTV Player',
    rating: 4.7,
    platforms: ['Android', 'Firestick', 'Android Box'],
    description: 'Clean modern interface powered by dual internal ExoPlayer and VLC engines with automatic EPG sync.',
    image: '/images/androidtvbox.webp'
  },
  {
    slug: 'kodi',
    name: 'Kodi PVR Simple Client',
    rating: 4.6,
    platforms: ['Firestick', 'PC', 'Mac', 'Android', 'Xbox'],
    description: 'Open-source media center powerhouse. Stream your M3U playlist and XMLTV guide within Kodi 21 Omega.',
    image: '/images/devices/devices-collection.webp'
  }
];

export const TROUBLESHOOTING_GUIDES = [
  {
    slug: 'iptv-buffering',
    title: 'How to Stop IPTV Buffering & Freezing',
    readTime: '6 min read',
    description: '7 proven steps to eliminate stutter, optimize buffer cache size, and bypass ISP speed throttling during live games.',
    icon: 'Zap'
  },
  {
    slug: 'iptv-not-working',
    title: 'IPTV Not Working? Black Screen & 404 Fixes',
    readTime: '7 min read',
    description: 'Diagnose authentication failed errors, expired playlist tokens, DNS blocking, and server connectivity dropouts.',
    icon: 'AlertTriangle'
  },
  {
    slug: 'vpn-isp-throttling',
    title: 'Best VPN for IPTV & How to Bypass ISP Throttling',
    readTime: '8 min read',
    description: 'Why Comcast Xfinity, Spectrum, and AT&T throttle IPTV bandwidth on sports nights, and how WireGuard VPN unblocks 4K/8K.',
    icon: 'ShieldCheck'
  }
];

export interface FaqItemWithCategory {
  question: string;
  answer: string;
  category?: 'general' | 'devices' | 'channels' | 'troubleshooting' | 'billing';
}

export const FAQ_ITEMS: FaqItemWithCategory[] = [
  // 1. General & Quality
  {
    category: 'general',
    question: 'What is IPTVSubs8K and how does modern Internet Protocol Television work in the USA?',
    answer: 'IPTVSubs8K is an ultra-premium Internet Protocol Television (IPTV) subscription service delivering over 25,000 live HD, 4K, and 8K television channels along with 120,000+ on-demand movies and TV series to US households. Instead of outdated coaxial cables, rooftop antenna arrays, or satellite dishes subject to weather degradation, our service securely transmits television streams over standard broadband internet directly to your favorite streaming devices. Streams are encoded in modern H.265 (HEVC) formats and served via Tier-1 10Gbps edge networks for instant zapping and broadcast-level stability.'
  },
  {
    category: 'general',
    question: 'What is Anti-Freeze™ 9.2 technology and how does it prevent buffering during live games?',
    answer: 'Anti-Freeze™ 9.2 is our proprietary server routing and edge caching infrastructure. During massive live sporting events like the Super Bowl, NBA Finals, or UFC main cards, traditional IPTV servers crash from sudden traffic surges. Anti-Freeze™ 9.2 deploys dynamic unicast buffer distribution across redundant Tier-1 edge data centers in New York, Chicago, Dallas, and Los Angeles. Traffic automatically reroutes in milliseconds if packet loss is detected, ensuring zero stuttering, zero spinning wheels, and unbroken 60FPS playback.'
  },
  {
    category: 'general',
    question: 'What minimum broadband internet speed is required for 4K and 8K 60FPS streaming?',
    answer: 'For standard High Definition (1080p) streams, a stable broadband connection of at least 15 Mbps is recommended. For 4K Ultra HD and 8K 60FPS live broadcasts, we recommend a sustained download speed of 30 Mbps to 50 Mbps per simultaneous device. We also advise connecting your TV or streaming device via a 5GHz Wi-Fi band or a direct Ethernet cable rather than older 2.4GHz Wi-Fi to minimize local household interference.'
  },
  {
    category: 'general',
    question: 'What video codecs are used, and why is H.265 (HEVC) superior to older H.264?',
    answer: 'IPTVSubs8K utilizes advanced H.265 High Efficiency Video Coding (HEVC) alongside select AV1 streams. H.265 delivers up to 50% better data compression than legacy H.264 without compromising picture clarity. This enables our servers to stream true 4K UHD and 8K resolution with vibrant HDR colors, deeper contrast ratios, and higher frame rates (60FPS) using half the bandwidth of older IPTV services.'
  },
  {
    category: 'general',
    question: 'Is IPTV legal to use in the United States under copyright laws?',
    answer: 'Internet Protocol Television is a standard digital transmission protocol used legitimately throughout the telecommunications industry. Using IPTV services to stream media for personal home entertainment is standard practice. Consumers stream digital data directly into memory without public redistribution liabilities. For additional digital privacy and to stop internet service providers from cataloging browsing habits, many US streamers utilize a virtual private network (VPN).'
  },
  {
    category: 'general',
    question: 'How does IPTVSubs8K compare financially to YouTube TV, Hulu + Live TV, and FuboTV?',
    answer: 'Mainstream live TV streaming services like YouTube TV, Hulu + Live TV, and FuboTV have escalated their monthly subscription prices to $75 - $105+ per month while continually dropping regional sports networks and charging extra for 4K add-ons. IPTVSubs8K delivers 25,000+ live channels, full regional sports, all PPV fight cards, and 120,000+ VOD titles starting at just $6.66 to $13.33 per month, saving American families over $1,000 every single year.'
  },
  {
    category: 'general',
    question: 'Can I stream while traveling abroad or using mobile cellular data (5G/4G LTE)?',
    answer: 'Yes! Unlike cable companies that restrict your subscription to a single residential physical address, IPTVSubs8K accounts are not locked to your home IP address. You can take your subscription with you anywhere in the world and stream on your laptop, iPad, iPhone, or Android smartphone over hotel Wi-Fi or high-speed 5G mobile data.'
  },

  // 2. Devices & Setup
  {
    category: 'devices',
    question: 'Which streaming devices and hardware are officially supported?',
    answer: 'IPTVSubs8K offers universal hardware support. Compatible devices include Amazon Fire TV Stick (Lite, 4K, 4K Max) & Fire TV Cube, Android TV / Google TV boxes (Nvidia Shield Pro, Chromecast with Google TV, Xiaomi Mi Box, Superbox), Apple TV 4K & Apple TV HD, Samsung Smart TVs (Tizen OS), LG Smart TVs (webOS), Windows 10/11 PCs, Apple Mac (macOS), iPhones, iPads, Android mobile devices, MAG boxes (254, 322, 524), and Formuler Z devices (Z10/Z11).'
  },
  {
    category: 'devices',
    question: 'How do I install and configure IPTVSubs8K on an Amazon Fire TV Stick?',
    answer: 'Setup on an Amazon Firestick takes under 3 minutes: First, install the free Downloader app from the Amazon Appstore. Second, enter the short code for your preferred player app (such as TiviMate or IPTV Smarters Pro). Third, launch the installed app, choose Xtream Codes API login, enter the server URL, username, and password received in your activation email, and click Login. Your channels, VOD library, and EPG guide will download automatically.'
  },
  {
    category: 'devices',
    question: 'Can I stream directly on Samsung or LG Smart TVs without buying an external stick?',
    answer: 'Yes! Samsung Smart TVs running Tizen OS and LG Smart TVs running webOS can install native IPTV players directly from the official television app store. We recommend downloading IBO Player, Smart IPTV, or Nanomid Player from your TV app store. Once opened, note the MAC address and Device Key displayed on screen, enter them into the player web portal along with your M3U playlist URL, and your channels will sync directly.'
  },
  {
    category: 'devices',
    question: 'What is the difference between an M3U playlist URL and Xtream Codes API login?',
    answer: 'An M3U playlist is a direct web link pointing to a text file containing the streaming URLs for every channel and movie. Xtream Codes API is a modern, high-speed authentication protocol consisting of three parameters: Server URL, Username, and Password. We strongly recommend Xtream Codes API because it enables lightning-fast login, automatic category organization, real-time EPG updates, and support for 48-hour Catch-Up TV.'
  },
  {
    category: 'devices',
    question: 'Can I use IPTVSubs8K on a Roku TV or Roku Streaming Stick?',
    answer: 'Roku devices operate on a closed proprietary operating system that does not support sideloaded Android APKs or native IPTV player applications. However, you can easily stream IPTVSubs8K content on Roku through wireless screen mirroring or casting: stream from your iPhone/iPad/Mac to Roku via Apple AirPlay 2, or cast from your Android phone/Windows PC using Smart View or Screen Cast in full high definition.'
  },
  {
    category: 'devices',
    question: 'How do I configure IPTV on Apple TV 4K, iPhone, or iPad?',
    answer: 'For Apple devices running iOS, iPadOS, or tvOS, open the official Apple App Store and download a verified player like IPTV Smarters Pro, UHF, GSE Smart IPTV, or iPlayTV. Choose Xtream Codes login, input your server credentials, and enjoy hardware-accelerated playback with native Apple AirPlay and Picture-in-Picture support.'
  },
  {
    category: 'devices',
    question: 'How do I setup a MAG box or Formuler Z11 with Stalker Middleware?',
    answer: 'For dedicated IPTV hardware like MAG 254/322/524 or Formuler Z10/Z11 with MyTVOnline, submit your device MAC address (format 00:1A:79:XX:XX:XX) to our support team during checkout or via WhatsApp. We will register your MAC on our Stalker Portal. Then, enter our custom Portal URL into your device portal settings, reboot the box, and your full channel lineup will load instantly.'
  },

  // 3. Channels & Content
  {
    category: 'channels',
    question: 'Can I watch USA local broadcast channels and regional news across all 50 states?',
    answer: 'Yes! IPTVSubs8K features comprehensive local network affiliate coverage across every major US television market. You receive live feeds of ABC, CBS, NBC, FOX, CW, and PBS from New York, Los Angeles, Chicago, Dallas, Atlanta, Miami, Philadelphia, and dozens of regional cities, ensuring you never miss local morning news broadcasts, severe storm radar updates, or regional sports events.'
  },
  {
    category: 'channels',
    question: 'Are all major Pay-Per-View (PPV) and combat sports events included for free?',
    answer: 'Yes, 100%! All major Pay-Per-View sports broadcasts are included with your subscription at zero supplementary cost. This covers every UFC numbered fight card, international championship boxing bouts, WWE WrestleMania, Royal Rumble, AEW pay-per-views, and special exhibition bouts. PPV channels are duplicated across multiple backup server nodes to guarantee flawless streaming.'
  },
  {
    category: 'channels',
    question: 'What live sports packages and leagues are covered?',
    answer: 'Our sports directory provides complete access to all major US and international professional sports leagues: NFL Sunday Ticket, NFL RedZone, NBA League Pass, MLB Extra Innings, NHL Center Ice, MLS Season Pass, College Football & Basketball (NCAA), UEFA Champions League, English Premier League, La Liga, Serie A, Formula 1, NASCAR, and PGA Tour Golf.'
  },
  {
    category: 'channels',
    question: 'How often is the Video on Demand (VOD) movie and TV series library updated?',
    answer: 'Our on-demand library contains over 120,000+ commercial-free movies and TV series episodes, updated daily. As new theatrical releases and blockbuster streaming titles drop on platforms like Netflix, HBO Max, Disney+, Apple TV+, and Amazon Prime Video, our automated media scrapers upload them in 4K UHD and 1080p with multi-language audio tracks and subtitles.'
  },
  {
    category: 'channels',
    question: 'How does the 7-day Electronic Program Guide (EPG) work, and how often does it update?',
    answer: 'Our Electronic Program Guide (EPG) utilizes automated XMLTV feeds that refresh every 24 hours. When you launch your player app, it pulls current TV listings 7 days in advance, displaying program titles, episode synopses, cast info, and start/stop timestamps. You can browse what is on now or see what is airing later in the week with a single click.'
  },
  {
    category: 'channels',
    question: 'Does IPTVSubs8K include Catch-Up TV to rewatch missed shows?',
    answer: 'Yes! Selected premium US entertainment, news, and sports networks feature 48-hour Catch-Up TV. If you missed a live game or prime-time episode due to work or dinner, simply open your player EPG, scroll back along the timeline to the missed broadcast, and press Play to stream the full recorded event on demand.'
  },
  {
    category: 'channels',
    question: 'Are adult or mature channels included, and can they be password protected?',
    answer: 'Adult channels are strictly optional. By default, adult categories can be permanently omitted from your account upon request during activation. If you choose to retain them, modern players like TiviMate and IPTV Smarters Pro allow you to lock all adult channels behind a custom 4-digit parental control PIN so children cannot access them.'
  },

  // 4. Performance & Troubleshooting
  {
    category: 'troubleshooting',
    question: 'Do I need a Virtual Private Network (VPN) when streaming IPTV in the United States?',
    answer: 'IPTVSubs8K servers operate without requiring a VPN, and many customers stream directly without issues. However, major US internet service providers (including Comcast Xfinity, AT&T, Charter Spectrum, and Cox) employ Deep Packet Inspection (DPI) to throttle video streaming speeds during high-traffic NFL, NBA, and UFC broadcasts. A reliable VPN (such as NordVPN, ExpressVPN, or Surfshark) encrypts your traffic with WireGuard, preventing ISP throttling and preserving seamless 4K/8K playback.'
  },
  {
    category: 'troubleshooting',
    question: 'Which VPN protocols provide the fastest speeds and lowest latency for IPTV?',
    answer: 'WireGuard is the gold standard VPN protocol for live IPTV streaming. It provides 30% to 50% faster throughput than traditional OpenVPN, with connection handshakes completing in under one second. If WireGuard is unavailable in your VPN client, choose OpenVPN (UDP) over OpenVPN (TCP) because UDP eliminates transmission retries that cause live video buffering.'
  },
  {
    category: 'troubleshooting',
    question: 'What are the most effective steps to stop buffering or freezing if it occurs?',
    answer: 'If you experience buffering, follow these proven diagnostic steps: 1) Restart your Wi-Fi router to clear cached DNS routing tables; 2) Switch your TV or Firestick from 2.4GHz Wi-Fi to 5GHz or plug in an Ethernet cable; 3) Inside your IPTV app settings (like TiviMate), increase Stream Buffer size from None to "Normal" or "Large" (3-5 seconds); 4) Clear the application cache in Firestick settings; 5) Turn on a VPN connected to a nearby US server location.'
  },
  {
    category: 'troubleshooting',
    question: 'How do I fix the EPG if the TV guide shows "No Information" or incorrect times?',
    answer: 'If your EPG is blank or time-shifted, open your player settings: 1) Go to EPG / TV Guide settings and select "Clear EPG" or "Update EPG" to force a fresh download; 2) If program start times are ahead or behind your local time, navigate to EPG Time Shift / Time Offset and adjust the hourly offset (e.g., -5 for US Eastern Time, -8 for Pacific Time); 3) Ensure your streaming device internal clock is set to automatic network time.'
  },
  {
    category: 'troubleshooting',
    question: 'What does "Error 401 Unauthorized" or "Authentication Failed" mean, and how is it resolved?',
    answer: 'An Error 401 indicates that your credentials were not authenticated by the CMS server. The three most common causes are: 1) A minor typo in your username, password, or server URL (note that login details are case-sensitive); 2) Exceeding your plan’s simultaneous connection limit (e.g. streaming on 2 TVs simultaneously on a 1-account plan); 3) Your subscription period has reached its renewal date. If your credentials are correct, contact our WhatsApp support desk for instant line verification.'
  },
  {
    category: 'troubleshooting',
    question: 'How do I clear app cache on Firestick or Android TV when storage is low?',
    answer: 'On your Amazon Firestick or Android TV: Go to Settings > Applications > Manage Installed Applications. Find your IPTV player (e.g., TiviMate or Smarters Pro), select it, scroll down, and click "Clear Cache". Do NOT click "Clear Data" unless you want to re-enter your login credentials. Clearing cache deletes accumulated stream thumbnails and frees up critical RAM.'
  },
  {
    category: 'troubleshooting',
    question: 'Can I record live sports games and TV shows to watch later (Cloud DVR / PVR)?',
    answer: 'Yes! Advanced players such as TiviMate Premium, ProgTV, and XCIPTV feature built-in PVR recording capabilities. You can schedule recordings for upcoming games or press Record while watching live. Recordings can be saved directly to your device internal storage, an attached USB flash drive, or a local networked storage folder (SMB) on your home Wi-Fi.'
  },

  // 5. Billing, Guarantees & Support
  {
    category: 'billing',
    question: 'Can I use IPTVSubs8K on multiple TVs or devices simultaneously in my home?',
    answer: 'Yes! We offer flexible multi-account plans supporting 1, 2, 3, or 4 simultaneous device connections. For example, on a 4-account plan, you can watch live NFL football in the living room, a family member can watch movies in the master bedroom, and kids can stream cartoons on an iPad without any stream interruptions or bandwidth conflicts.'
  },
  {
    category: 'billing',
    question: 'How fast will I receive my subscription credentials after purchasing?',
    answer: 'Activation is automated and immediate. Within 2 minutes of completing your checkout, our system dispatches your Xtream Codes API credentials, M3U playlist link, and step-by-step device installation guides directly to your email address. If you do not see the activation email in your inbox, check your spam/junk folder or contact our WhatsApp support team for instant lookup.'
  },
  {
    category: 'billing',
    question: 'Is there an automatic recurring subscription charge on my credit card?',
    answer: 'No! IPTVSubs8K does not enroll you in surprise recurring billing or sneaky auto-renewals. All subscriptions are prepaid periods (3 months, 6 months, or 12 months). When your billing period approaches expiration, you will receive a reminder email inviting you to renew at your convenience. You are always in complete control of your payments.'
  },
  {
    category: 'billing',
    question: 'What is your refund policy if the service does not perform on my devices?',
    answer: 'We provide an unconditional, hassle-free 7-day money-back guarantee. If you encounter server buffering or technical playback issues that our 24/7 engineering team is unable to rectify, simply request a refund within 7 days of purchase and we will return 100% of your payment without question.'
  },
  {
    category: 'billing',
    question: 'How do I test the service before buying (24-Hour Free Trial)?',
    answer: 'We offer a genuine 24-hour full-access test line so you can examine our 4K/8K image quality, test our EPG guide, and verify live sports stability on your own television before making any financial commitment. Visit our /free-trial page or send a message to our WhatsApp support desk at +212625218443 to receive test credentials within minutes.'
  },
  {
    category: 'billing',
    question: 'How can I become an IPTV reseller and start my own streaming business?',
    answer: 'IPTVSubs8K provides a turnkey white-label Reseller Program powered by a master Xtream Codes CMS panel. As a reseller, you purchase wholesale credits at heavily discounted rates ($1.66 - $2.50 per credit), generate 1 to 12-month customer lines, issue free 24-hour trials, brand your own DNS portals, and set your own retail prices, yielding profit margins between 65% and 85%+.'
  }
];
