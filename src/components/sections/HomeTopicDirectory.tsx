'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Tv,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Award,
  Lock,
  Globe,
  MonitorPlay,
  HelpCircle,
  Radio,
  Clock,
  Layers,
  Cpu,
  DollarSign,
  Film,
  Smartphone,
  Laptop,
  Box,
  Wifi
} from 'lucide-react';

interface GuideLink {
  keyword: string;
  title: string;
  path: string;
  volume: number;
  readTime: string;
}

interface ClusterHub {
  id: string;
  name: string;
  category: 'devices' | 'apps' | 'sports' | 'comparisons' | 'technical';
  icon: React.ElementType;
  badge: string;
  guideCount: number;
  pillarUrl: string;
  pillarTitle: string;
  description: string;
  keyTakeaway: string;
  featuredGuides: GuideLink[];
}

const CLUSTERS: ClusterHub[] = [
  {
    id: 'firestick-guides',
    name: 'Amazon Firestick & Fire TV Optimization Hub',
    category: 'devices',
    icon: Tv,
    badge: '84 Guides • #1 in USA',
    guideCount: 84,
    pillarUrl: '/setup/firestick',
    pillarTitle: 'Firestick 4K Setup Master Tutorial',
    description:
      'The Amazon Fire TV Stick family—including the Firestick 4K Max, standard 4K, Lite, and Fire TV Cube—is the preferred hardware choice for over 70% of American IPTV cord-cutters. Running Amazon Fire OS (built on Android), Firesticks support hardware-accelerated H.265 HEVC decoding, native Dolby Atmos audio passthrough, and custom APK sideloading via the Downloader utility.',
    keyTakeaway:
      'Optimizing your Firestick involves disabling automatic app updates, clearing low-memory cache, and pairing with premium IPTV players like TiviMate or IPTV Smarters Pro for instantaneous channel switching.',
    featuredGuides: [
      {
        keyword: 'firestick remote',
        title: 'Firestick Remote: Complete Setup & Channel Navigation Guide',
        path: '/guide/firestick-remote',
        volume: 33100,
        readTime: '6 min read'
      },
      {
        keyword: 'fire tv remote',
        title: 'Fire TV Remote: Performance Optimization & Troubleshooting',
        path: '/guide/fire-tv-remote',
        volume: 18100,
        readTime: '5 min read'
      },
      {
        keyword: 'amazon fire tv remote',
        title: 'Amazon Fire TV Remote: Sideloading & Player Controls Tutorial',
        path: '/guide/amazon-fire-tv-remote',
        volume: 6600,
        readTime: '5 min read'
      },
      {
        keyword: 'roku vs firestick',
        title: 'Roku vs. Firestick: Complete Technical Comparison for IPTV',
        path: '/guide/roku-vs-firestick',
        volume: 5400,
        readTime: '8 min read'
      },
      {
        keyword: 'free vpn for firestick',
        title: 'Best Free & Fast VPNs for Firestick 4K Max Streaming',
        path: '/guide/free-vpn-for-firestick',
        volume: 5400,
        readTime: '7 min read'
      }
    ]
  },
  {
    id: 'android-devices',
    name: 'Android TV, Google TV & High-End Streaming Boxes',
    category: 'devices',
    icon: MonitorPlay,
    badge: '75 Guides • 4K/8K Media',
    guideCount: 75,
    pillarUrl: '/setup/android-tv',
    pillarTitle: 'Android TV & Google TV Setup Guide',
    description:
      'Android TV and Google TV platforms (including Nvidia Shield TV Pro, Chromecast with Google TV, Xiaomi Mi Box, and Superbox) represent the most versatile IPTV hardware available today. Powered by uncompromised Google Play Store ecosystems, they enable direct one-click installation of verified media engines, multi-screen quad-viewing, and gigabit wired Ethernet connectivity.',
    keyTakeaway:
      'Flagship boxes like the Nvidia Shield utilize AI-powered 4K upscaling to enhance 1080p sports streams into razor-sharp near-4K resolution with zero frame drops.',
    featuredGuides: [
      {
        keyword: 'superbox',
        title: 'Superbox: Best Plans, Channel Lineups & Buyer Analysis',
        path: '/guide/superbox',
        volume: 90500,
        readTime: '7 min read'
      },
      {
        keyword: 'super box',
        title: 'Super Box: Complete Setup & High-Bitrate Streaming Guide',
        path: '/guide/super-box',
        volume: 27100,
        readTime: '6 min read'
      },
      {
        keyword: 'abox android tv',
        title: 'Abox Android TV: Optimization, Firmware & Player Setup',
        path: '/guide/abox-android-tv',
        volume: 9900,
        readTime: '5 min read'
      },
      {
        keyword: 'android box for television',
        title: 'Android Box for Television: Complete Buyer & Specs Guide',
        path: '/guide/android-box-for-television',
        volume: 6600,
        readTime: '7 min read'
      },
      {
        keyword: 'superbox s6',
        title: 'Superbox S6 Ultra: Anti-Freeze Setup & Diagnostic Guide',
        path: '/guide/superbox-s6',
        volume: 4400,
        readTime: '6 min read'
      }
    ]
  },
  {
    id: 'smart-tv-setups',
    name: 'Samsung Tizen & LG webOS Smart TV Hub',
    category: 'devices',
    icon: Tv,
    badge: '284 Guides • No Extra Box',
    guideCount: 284,
    pillarUrl: '/setup/smart-tv',
    pillarTitle: 'Samsung & LG Smart TV Setup Guide',
    description:
      'Modern Samsung Smart TVs powered by Tizen OS and LG Smart TVs powered by webOS allow American families to stream 25,000+ live television channels directly through native television applications without purchasing external HDMI dongles. By downloading certified players like IBO Player, Smart IPTV, or Nanomid from the TV official app store, you eliminate secondary remote controls and wires.',
    keyTakeaway:
      'Using your Smart TV MAC address and device key, playlist synchronization completes remotely via web portals in less than 5 minutes.',
    featuredGuides: [
      {
        keyword: 'smart tv',
        title: 'Smart TV: Performance Optimization & App Installation Guide',
        path: '/guide/smart-tv',
        volume: 74000,
        readTime: '6 min read'
      },
      {
        keyword: '4k tv smart tv',
        title: '4K Smart TV: Technical Review & Calibration Settings for IPTV',
        path: '/guide/4k-tv-smart-tv',
        volume: 14800,
        readTime: '7 min read'
      },
      {
        keyword: 'small smart tv',
        title: 'Small Smart TV: Setup for Kitchens, Bedrooms & Compact Spaces',
        path: '/guide/small-smart-tv',
        volume: 8100,
        readTime: '5 min read'
      },
      {
        keyword: 'roku smart tv',
        title: 'Roku Smart TV: Mirroring Workarounds & Screen Casting Tutorial',
        path: '/guide/roku-smart-tv',
        volume: 8100,
        readTime: '6 min read'
      },
      {
        keyword: '60 inch smart tv',
        title: '60-Inch Smart TV: In-Depth Picture Settings & HDR Guide',
        path: '/guide/60-inch-smart-tv',
        volume: 6600,
        readTime: '6 min read'
      }
    ]
  },
  {
    id: 'streaming-apps',
    name: 'Top IPTV Player Apps & Software Engines',
    category: 'apps',
    icon: Layers,
    badge: '197 Guides • Software Mastery',
    guideCount: 197,
    pillarUrl: '/apps/tivimate',
    pillarTitle: 'Best IPTV Players Comparison (2026)',
    description:
      'The software application you choose to interface with your IPTV subscription dictates 90% of your everyday viewing experience. Professional IPTV engines like TiviMate, IPTV Smarters Pro, XCIPTV, and IBO Player transform raw M3U streams into seamless cable-like interfaces complete with interactive 7-day electronic program guides, multi-view screens, and instant search.',
    keyTakeaway:
      'TiviMate stands as the undisputed champion on Android-based hardware, featuring automated EPG sync, catch-up TV navigation, and custom group sorting.',
    featuredGuides: [
      {
        keyword: 'the tv appto',
        title: 'The TV App: How to Stream 4K Live Channels with Zero Freezing',
        path: '/guide/the-tv-appto',
        volume: 33100,
        readTime: '6 min read'
      },
      {
        keyword: 'free tv apps',
        title: 'Top Free Live TV Apps for Firestick & Android in 2026',
        path: '/guide/free-tv-apps',
        volume: 18100,
        readTime: '7 min read'
      },
      {
        keyword: 'cinemahd',
        title: 'Cinema HD: Alternatives & 120,000+ VOD Integration Guide',
        path: '/guide/cinemahd',
        volume: 12100,
        readTime: '6 min read'
      },
      {
        keyword: 'free streaming apps',
        title: 'Free Streaming Apps vs. Premium IPTV: Side-by-Side Test',
        path: '/guide/free-streaming-apps',
        volume: 6600,
        readTime: '7 min read'
      },
      {
        keyword: 'samsung tv plus app',
        title: 'Samsung TV Plus App: Complete Integration with Custom EPG',
        path: '/guide/samsung-tv-plus-app',
        volume: 5400,
        readTime: '5 min read'
      }
    ]
  },
  {
    id: 'sports-streaming',
    name: 'Live Sports, Major Leagues & PPV Combat Sports',
    category: 'sports',
    icon: Flame,
    badge: '333 Guides • All Passes Included',
    guideCount: 333,
    pillarUrl: '/sports',
    pillarTitle: 'Complete Live Sports Directory',
    description:
      'Live sporting events represent the ultimate stress test for any streaming provider. High-velocity action like NFL Sunday Ticket, NBA basketball, Premier League soccer, and UFC main events demands genuine 60 frames per second (FPS) feeds, uncompressed audio, and instantaneous server failover redundancy to prevent buffering during game-winning plays.',
    keyTakeaway:
      'IPTVSubs8K provides multi-server load balancing that automatically diverts live game streams to dedicated Tier-1 10Gbps transit nodes across North America.',
    featuredGuides: [
      {
        keyword: 'streaming tv services',
        title: 'Best Live Sports Streaming Services in USA (2026 Ranking)',
        path: '/guide/streaming-tv-services',
        volume: 18100,
        readTime: '8 min read'
      },
      {
        keyword: 'soccer streams reddit',
        title: 'Soccer Streams Reddit Alternatives: Why IPTV is 10x More Reliable',
        path: '/guide/soccer-streams-reddit',
        volume: 12100,
        readTime: '7 min read'
      },
      {
        keyword: 'sports streaming sites',
        title: 'Sports Streaming Sites vs. Dedicated 10Gbps Tier-1 Servers',
        path: '/guide/sports-streaming-sites',
        volume: 9900,
        readTime: '6 min read'
      },
      {
        keyword: 'boxes for tv streaming',
        title: 'Best Streaming Boxes for Live NFL, NBA & UFC PPV Cards',
        path: '/guide/boxes-for-tv-streaming',
        volume: 9900,
        readTime: '7 min read'
      },
      {
        keyword: 'cheapest live tv streaming',
        title: 'Cheapest Live TV Streaming Services: Complete Price Breakdown',
        path: '/guide/cheapest-live-tv-streaming',
        volume: 8100,
        readTime: '8 min read'
      }
    ]
  },
  {
    id: 'comparisons-reviews',
    name: 'Cable TV vs. IPTV & Cord-Cutting Economics',
    category: 'comparisons',
    icon: DollarSign,
    badge: '96 Guides • Save $1,500/Year',
    guideCount: 96,
    pillarUrl: '/compare/cable-vs-iptv',
    pillarTitle: 'Cable TV vs IPTV Financial Breakdown',
    description:
      'The average American household now spends $148 to $210 per month on legacy cable TV bundles when factoring in broadcast TV surcharges, regional sports fees, set-top box rental taxes, and franchise fees. Cutting the cord with IPTVSubs8K drops that expenditure down to as low as $6.66 per month while expanding your channel selection from 200 channels to over 25,000 global live networks.',
    keyTakeaway:
      'By switching from Comcast or Spectrum to IPTVSubs8K, American streamers save between $1,400 and $1,800 every single year without losing local news or sports.',
    featuredGuides: [
      {
        keyword: 'tv cable',
        title: 'Traditional TV Cable vs. IPTV: The Complete 2026 Technology Guide',
        path: '/guide/tv-cable',
        volume: 4400,
        readTime: '7 min read'
      },
      {
        keyword: 'hulu vs youtube tv',
        title: 'Hulu + Live TV vs. YouTube TV vs. IPTVSubs8K: Side-by-Side Review',
        path: '/guide/hulu-vs-youtube-tv',
        volume: 4400,
        readTime: '8 min read'
      },
      {
        keyword: 'tv reviews',
        title: 'Cord-Cutting TV Reviews: Best Hardware & Displays for Streamers',
        path: '/guide/tv-reviews',
        volume: 2900,
        readTime: '6 min read'
      },
      {
        keyword: 'cable alternatives',
        title: 'Best Cable Alternatives to Slash Your Entertainment Bills',
        path: '/guide/cable-alternatives',
        volume: 2900,
        readTime: '8 min read'
      },
      {
        keyword: 'xfinity cable box',
        title: 'Xfinity Cable Box Replacement: How to Cut Comcast Equipment Fees',
        path: '/guide/xfinity-cable-box',
        volume: 2900,
        readTime: '6 min read'
      }
    ]
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting, Anti-Buffering & VPN Privacy',
    category: 'technical',
    icon: ShieldCheck,
    badge: '16 Guides • Zero Stutter',
    guideCount: 16,
    pillarUrl: '/troubleshooting/iptv-buffering',
    pillarTitle: 'Ultimate IPTV Buffering Diagnostic Guide',
    description:
      'Nothing ruins Sunday football faster than a freezing video feed. The majority of stream stuttering is not caused by server limitations, but rather by local router buffer cache exhaustion, 2.4GHz Wi-Fi packet drops, or intentional ISP bandwidth throttling by providers like Comcast, AT&T, and Spectrum during major broadcasts.',
    keyTakeaway:
      'Pairing a WireGuard-enabled VPN with your streaming stick bypasses ISP Deep Packet Inspection (DPI) and restores full unthrottled 4K/8K throughput.',
    featuredGuides: [
      {
        keyword: 'vpn for tv',
        title: 'Best VPN for TV: Stop ISP Speed Throttling & Live Sports Blocks',
        path: '/guide/vpn-for-tv',
        volume: 1900,
        readTime: '7 min read'
      },
      {
        keyword: 'best vpn for iptv',
        title: 'Best VPN for IPTV in USA: WireGuard vs. OpenVPN Speed Tests',
        path: '/guide/best-vpn-for-iptv',
        volume: 1000,
        readTime: '8 min read'
      },
      {
        keyword: 'vpn for iptv',
        title: 'Complete VPN Setup Tutorial for Firestick, Android & Smart TVs',
        path: '/guide/vpn-for-iptv',
        volume: 480,
        readTime: '6 min read'
      },
      {
        keyword: 'legal iptv providers',
        title: 'Legal IPTV Providers & Copyright Safe Harbor in the USA (2026)',
        path: '/guide/legal-iptv-providers',
        volume: 390,
        readTime: '7 min read'
      },
      {
        keyword: 'legal iptv providers in usa',
        title: 'US Federal Regulations on IPTV Streaming & Consumer Rights',
        path: '/guide/legal-iptv-providers-in-usa',
        volume: 320,
        readTime: '6 min read'
      }
    ]
  },
  {
    id: 'roku-streaming',
    name: 'Roku TV & Mirroring Workaround Guides',
    category: 'devices',
    icon: Radio,
    badge: '301 Guides • Casting Mastery',
    guideCount: 301,
    pillarUrl: '/setup/roku',
    pillarTitle: 'Roku IPTV Mirroring & Casting Tutorial',
    description:
      'Roku devices (such as Roku Ultra, Roku Express, and Roku Streaming Stick 4K) utilize a closed proprietary Linux distribution that strictly blocks sideloaded Android APKs and native IPTV player applications. While direct M3U playlist loading is not natively supported on Roku OS, hundreds of thousands of Americans use wireless casting to enjoy IPTV on Roku.',
    keyTakeaway:
      'By streaming from an iPhone or Mac via Apple AirPlay 2, or from an Android phone or PC via Smart View / Miracast, you can enjoy your IPTVSubs8K channels on Roku in full 1080p and 4K.',
    featuredGuides: [
      {
        keyword: 'roku tv',
        title: 'Roku TV: In-Depth Technical Review & IPTV Mirroring Tutorial',
        path: '/guide/roku-tv',
        volume: 246000,
        readTime: '8 min read'
      },
      {
        keyword: 'roku channel',
        title: 'Roku Channel: 4K Zero Buffering Optimization & Setup Guide',
        path: '/guide/roku-channel',
        volume: 165000,
        readTime: '7 min read'
      },
      {
        keyword: 'roku stick',
        title: 'Roku Stick: Sideloading Workarounds & Screen Casting Tutorial',
        path: '/guide/roku-stick',
        volume: 110000,
        readTime: '6 min read'
      },
      {
        keyword: 'roku tv remote',
        title: 'Roku TV Remote: Step-by-Step Diagnostic & Control Settings',
        path: '/guide/roku-tv-remote',
        volume: 27100,
        readTime: '5 min read'
      },
      {
        keyword: 'roku streaming stick 4k',
        title: 'Roku Streaming Stick 4K: Complete Setup & High-Bitrate Guide',
        path: '/guide/roku-streaming-stick-4k',
        volume: 18100,
        readTime: '6 min read'
      }
    ]
  },
  {
    id: 'devices-hardware',
    name: 'Dedicated Hardware: Apple TV 4K, MAG & Formuler',
    category: 'devices',
    icon: Box,
    badge: '64 Guides • Pro Set-Top Boxes',
    guideCount: 64,
    pillarUrl: '/setup/apple-tv',
    pillarTitle: 'Apple TV 4K & Dedicated Hardware Hub',
    description:
      'For enthusiasts seeking broadcast-grade responsiveness, dedicated IPTV set-top boxes like Formuler Z11 Pro Max, MAG 524, and the Apple TV 4K offer purpose-built hardware acceleration. With dedicated Gigabit Ethernet ports, custom remote controls with numeric keypads, and Stalker middleware integration, these devices deliver true set-top box luxury.',
    keyTakeaway:
      'Apple TV 4K leverages its Apple A15 Bionic processor to power apps like UHF and IPTV Smarters with the smoothest 60FPS UI transitions in the industry.',
    featuredGuides: [
      {
        keyword: 'tv box and',
        title: 'TV Box Hardware Guide: Processors, RAM & Codec Decoding',
        path: '/guide/tv-box-and',
        volume: 14800,
        readTime: '7 min read'
      },
      {
        keyword: 'streamcast box',
        title: 'Streamcast Box: Best Plans, Channel Lineups & Buyer Review',
        path: '/guide/streamcast-box',
        volume: 4400,
        readTime: '6 min read'
      },
      {
        keyword: 'iptv box',
        title: 'Dedicated IPTV Box vs. Amazon Firestick: Hardware Comparison',
        path: '/guide/iptv-box',
        volume: 3600,
        readTime: '7 min read'
      },
      {
        keyword: 'big box tv',
        title: 'Big Box TV: Complete Setup & Streaming Optimization Guide',
        path: '/guide/big-box-tv',
        volume: 1600,
        readTime: '5 min read'
      },
      {
        keyword: 't v box',
        title: 'High-Performance T V Box Configuration for 8K Streams',
        path: '/guide/t-v-box',
        volume: 1600,
        readTime: '5 min read'
      }
    ]
  },
  {
    id: 'quality-4k-8k',
    name: '4K/8K TV Displays, HDR10+ & Hardware Optimization',
    category: 'technical',
    icon: Cpu,
    badge: '244 Guides • Display Engineering',
    guideCount: 244,
    pillarUrl: '/channels',
    pillarTitle: 'Explore 4K & 8K Channel Lineups',
    description:
      'Maximizing the visual fidelity of 4K and 8K IPTV streams requires matching your display panel technology (OLED, QLED, Mini-LED) with proper motion interpolation and video output modes. Modern 8K streams require advanced hardware decoding capable of handling 60fps refresh rates without micro-stuttering.',
    keyTakeaway:
      'Setting your streaming device display output to match native frame rate (24p, 30p, 60p) prevents judder and delivers true cinematic motion.',
    featuredGuides: [
      {
        keyword: 'best budget 4k tvs',
        title: 'Best Budget 4K TVs for High-Bitrate IPTV Streaming (2026)',
        path: '/guide/best-budget-4k-tvs',
        volume: 40500,
        readTime: '8 min read'
      },
      {
        keyword: '32 inch tv',
        title: '32-Inch TV: Complete Setup Guide for Bedrooms & Campers',
        path: '/guide/32-inch-tv',
        volume: 33100,
        readTime: '6 min read'
      },
      {
        keyword: '60 inch tv',
        title: '60-Inch TV: In-Depth Picture Settings & HDR Calibration Guide',
        path: '/guide/60-inch-tv',
        volume: 33100,
        readTime: '7 min read'
      },
      {
        keyword: 'flat screen tv',
        title: 'Flat Screen TV Display Settings for 60FPS Live Sports Feeds',
        path: '/guide/flat-screen-tv',
        volume: 18100,
        readTime: '6 min read'
      },
      {
        keyword: 'television application',
        title: 'Television Application Ecosystems & Sideloading Techniques',
        path: '/guide/television-application',
        volume: 18100,
        readTime: '6 min read'
      }
    ]
  },
  {
    id: 'subscription-pricing',
    name: 'Subscriptions, Black Friday Deals & Buyer Guides',
    category: 'comparisons',
    icon: Award,
    badge: '298 Guides • Value Strategies',
    guideCount: 298,
    pillarUrl: '/pricing',
    pillarTitle: 'Browse Multi-Connection Pricing Plans',
    description:
      'Navigating television subscription options in 2026 requires understanding true price-to-performance value. Traditional television bundles lure consumers in with low 12-month introductory rates before doubling prices on month 13, adding arbitrary HD technology fees, and mandating expensive contract termination penalties.',
    keyTakeaway:
      'IPTVSubs8K provides transparent flat pricing across 3, 6, and 12-month plans with zero recurring auto-rebills, zero hardware rental surcharges, and a full 7-day money-back guarantee.',
    featuredGuides: [
      {
        keyword: 'shop 4k tvs on sale',
        title: 'Shop 4K TVs On Sale: Best Smart Displays for IPTV Streaming',
        path: '/guide/shop-4k-tvs-on-sale',
        volume: 60500,
        readTime: '7 min read'
      },
      {
        keyword: 'tv for sale',
        title: 'TV for Sale Buyer Guide: OLED vs QLED vs Mini-LED Analysis',
        path: '/guide/tv-for-sale',
        volume: 33100,
        readTime: '7 min read'
      },
      {
        keyword: 'best best buy tvs',
        title: 'Best Buy TVs: Price-to-Performance Breakdown for Streamers',
        path: '/guide/best-best-buy-tvs',
        volume: 27100,
        readTime: '6 min read'
      },
      {
        keyword: 'tvs on sale',
        title: 'TVs On Sale: Smart Platform Compatibility & Speed Tests',
        path: '/guide/tvs-on-sale',
        volume: 27100,
        readTime: '6 min read'
      },
      {
        keyword: 'satellite television packages',
        title: 'Satellite Television Packages vs. IPTV: Complete Cost Audit',
        path: '/guide/satellite-television-packages',
        volume: 22200,
        readTime: '8 min read'
      }
    ]
  },
  {
    id: 'hardware-encoders-antennas',
    name: 'Digital Antennas, OTA Tuners & Hybrid Setups',
    category: 'technical',
    icon: Wifi,
    badge: '388 Guides • Hybrid Broadcasts',
    guideCount: 388,
    pillarUrl: '/guide/antennas-antenna',
    pillarTitle: 'Digital Antenna & OTA Hybrid Guide',
    description:
      'Many US cord-cutters combine Over-The-Air (OTA) digital broadcast antennas with their IPTVSubs8K subscription. While IPTVSubs8K includes every major local ABC, CBS, NBC, FOX, and PBS affiliate station over the internet, possessing an OTA antenna provides an extra layer of zero-bandwidth backup for local weather emergencies during heavy thunderstorms.',
    keyTakeaway:
      'Modern hybrid setups combine OTA digital tuners (like HDHomeRun) with IPTV m3u playlists inside unified media interfaces like Kodi or Plex.',
    featuredGuides: [
      {
        keyword: 'antennas antenna',
        title: 'Antennas Antenna: Combining OTA Local HD with IPTV Cloud Feeds',
        path: '/guide/antennas-antenna',
        volume: 22200,
        readTime: '7 min read'
      },
      {
        keyword: 'indoor tv antenna indoor',
        title: 'Indoor TV Antenna vs. IPTV Cloud Feeds: Signal & Range Analysis',
        path: '/guide/indoor-tv-antenna-indoor',
        volume: 18100,
        readTime: '6 min read'
      },
      {
        keyword: 'digital tv antenna',
        title: 'Digital TV Antenna Range, Coaxial Cabling & Tuner Setup',
        path: '/guide/digital-tv-antenna',
        volume: 14800,
        readTime: '7 min read'
      },
      {
        keyword: 'best indoor tv antenna',
        title: 'Best Indoor TV Antenna Review: VHF/UHF Amplifiers for Streamers',
        path: '/guide/best-indoor-tv-antenna',
        volume: 9900,
        readTime: '6 min read'
      },
      {
        keyword: 'digital antenna',
        title: 'Digital Antenna Frequency Bands & Signal Splitter Diagnostics',
        path: '/guide/digital-antenna',
        volume: 9900,
        readTime: '6 min read'
      }
    ]
  }
];

type CategoryFilter = 'all' | 'devices' | 'apps' | 'sports' | 'comparisons' | 'technical';

const FILTER_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All 12 Topic Hubs' },
  { id: 'devices', label: 'Streaming Hardware' },
  { id: 'apps', label: 'IPTV Players & Apps' },
  { id: 'sports', label: 'Live Sports & PPV' },
  { id: 'comparisons', label: 'Cord-Cutting & Pricing' },
  { id: 'technical', label: 'Anti-Freeze & Technical' }
];

export function HomeTopicDirectory() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('all');

  const filteredClusters = CLUSTERS.filter(
    (cluster) => selectedFilter === 'all' || cluster.category === selectedFilter
  );

  return (
    <section className="py-20 py-20 lg:py-24 bg-slate-50/60 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Complete IPTV Knowledge Base & Guides Directory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Explore Over <span className="text-[#FF6B00]">3,200 Technical Guides</span> & Setup Tutorials
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            From Amazon Firestick 4K Max optimization and Smart TV app sideloading to anti-buffering VPN configurations and cord-cutting financial audits—browse our complete directory of in-depth guides crafted for American streamers.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {FILTER_TABS.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#FF6B00] text-white shadow-md shadow-orange-500/20 font-bold scale-[1.02]'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.id}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-orange-200 transition-all p-7 flex flex-col justify-between group shadow-sm hover:shadow-card-hover hover:-translate-y-1"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[11px] font-bold text-[#EA580C]">
                      {cluster.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-3 leading-snug">
                    {cluster.name}
                  </h3>

                  {/* Editorial Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {cluster.description}
                  </p>

                  <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-100 text-xs text-slate-700 mb-6 font-medium">
                    <span className="font-bold text-[#FF6B00]">Key Tip: </span>
                    {cluster.keyTakeaway}
                  </div>

                  {/* Featured Guides List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-accent-cyan" />
                      Featured Pillar Guides:
                    </div>
                    {cluster.featuredGuides.map((guide, gIdx) => (
                      <Link
                        key={gIdx}
                        href={guide.path}
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50/70 border border-slate-200/80 hover:border-orange-200 transition-all flex items-center justify-between gap-2 group/item"
                      >
                        <div className="truncate">
                          <div className="text-xs font-semibold text-slate-800 group-hover/item:text-[#EA580C] truncate transition-colors">
                            {guide.title}
                          </div>
                          <div className="text-[10px] text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>Keyword: {guide.keyword}</span>
                            <span>•</span>
                            <span className="text-orange-600">Vol: {guide.volume.toLocaleString()}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-accent-cyan group-hover/item:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-card-border/60">
                  <Link
                    href={cluster.pillarUrl}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:border-orange-500 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{cluster.pillarTitle}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Topics Quick Navigation Cloud */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h4 className="text-lg font-black text-slate-900">Popular Topic Search Clusters</h4>
            <p className="text-xs text-slate-400 mt-1">
              Direct access to our most frequently consulted cord-cutting and hardware optimization topics.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <Link href="/setup/firestick" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              Firestick 4K Max Setup
            </Link>
            <Link href="/apps/tivimate" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              TiviMate IPTV Player
            </Link>
            <Link href="/setup/smart-tv" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              Samsung Tizen TV App
            </Link>
            <Link href="/apps/ibo-player" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              LG webOS IBO Player
            </Link>
            <Link href="/channels" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              NFL Sunday Ticket 4K
            </Link>
            <Link href="/channels" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              UFC Pay-Per-View Streams
            </Link>
            <Link href="/troubleshooting/iptv-buffering" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              Stop IPTV Buffering
            </Link>
            <Link href="/troubleshooting/vpn-isp-throttling" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              WireGuard VPN Configuration
            </Link>
            <Link href="/compare/cable-vs-iptv" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              Cable vs IPTV Economics
            </Link>
            <Link href="/setup/roku" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              Roku Screen Mirroring
            </Link>
            <Link href="/setup/apple-tv" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              Apple TV 4K tvOS Setup
            </Link>
            <Link href="/setup/android-tv" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              Nvidia Shield Pro 4K
            </Link>
            <Link href="/reseller" className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 hover:text-[#FF6B00] text-slate-700 font-bold transition-colors">
              IPTV Reseller Business Panel
            </Link>
            <Link href="/free-trial" className="px-3.5 py-1.5 rounded-lg bg-orange-50 border border-orange-200 text-[#FF6B00] font-bold hover:bg-[#FF6B00] hover:text-white transition-colors">
              24-Hour Free Trial Test Line
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
