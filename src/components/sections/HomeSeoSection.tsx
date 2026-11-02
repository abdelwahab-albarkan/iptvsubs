import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Mail,
  MessageSquare,
  Headphones,
  Shield,
  Check,
  Film
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function HomeSeoSection() {
  return (
    <div className="space-y-24 py-16 text-slate-700 bg-white">
      {/* 1. Deep Editorial Pillar: What is IPTV & The Cord-Cutting Revolution in the USA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider">
              <Tv className="w-3.5 h-3.5" />
              The Future of Television in the United States
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              The Definitive 2026 Guide to <span className="text-[#FF6B00]">IPTV in the USA</span>: Why Over 65,000 Americans Cut the Cable Cord
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <strong>Internet Protocol Television (IPTV)</strong> represents the single most significant technological leap in home entertainment since digital high-definition broadcasting replaced analog signals. Instead of relying on archaic copper coaxial cables, vulnerable rooftop antenna arrays, or bulky satellite dishes susceptible to rain fade, IPTV securely transmits uncompressed and high-bitrate television streams directly over modern broadband internet to your streaming hardware.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At <strong>IPTVSubs8K</strong>, our infrastructure harnesses high-efficiency <strong>H.265 (HEVC)</strong> video encoding alongside ultra-low-latency unicast routing across our proprietary Tier-1 server clusters. By bypassing the layers of monopolistic regional fees, equipment rental charges, and broadcast surcharges imposed by legacy cable conglomerates like Comcast Xfinity and Spectrum, American viewers gain instant access to crystal-clear <strong>8K, 4K UHD, and 1080p Full HD television</strong> at a fraction of traditional costs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Instant Automated Activation
                </div>
                <p className="text-xs text-slate-500">
                  Zero technician visits or drilling walls. Receive your Xtream Codes API credentials and M3U playlist within 2 minutes of ordering.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Universal Screen Compatibility
                </div>
                <p className="text-xs text-slate-500">
                  Stream seamlessly on Amazon Firestick, Samsung Smart TVs, LG webOS, Android TV, Nvidia Shield, Apple TV, PC, and mobile.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-orange-200 bg-white shadow-2xl shadow-slate-900/10 aspect-video">
              <Image
                src="/images/cable-vs-iptv-w800.webp"
                alt="Cable TV vs IPTVSubs8K Streaming Comparison in USA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-xs text-slate-200 font-medium">
                  <span className="text-[#FF6B00] font-bold">Smart Streaming Economics:</span> Save over $1,500 every year without sacrificing live sports or local news.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Live Sports & PPV Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            Unrivaled Live Sports & Pay-Per-View
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Stream Every Major <span className="text-[#FF6B00]">US & Global Sports League</span> in 4K & Native 60 FPS
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Say goodbye to regional blackouts, expensive league add-on packages, and $85 Pay-Per-View fees. 
            All premier sports leagues, out-of-market games, and championship main cards are included with zero extra charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: NFL & College Football */}
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">NFL Sunday Ticket & College Football</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Never miss a single touchdown. Enjoy full access to NFL Sunday Ticket out-of-market feeds, NFL RedZone in silky-smooth 60 FPS, Thursday Night Football, Sunday Night Football on NBC, and Monday Night Football on ESPN. Plus, full coverage of NCAA College Football (SEC, Big Ten, Big 12, ACC).
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#FF6B00]">
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">NFL Sunday Ticket</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">NFL RedZone 60FPS</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">NCAA Football</span>
            </div>
          </div>

          {/* Card 2: NBA, MLB & NHL */}
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-4">
              <MonitorPlay className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">NBA League Pass, MLB & NHL</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Follow your favorite franchise with complete home and away regional sports networks (RSNs). Watch NBA League Pass, MLB Extra Innings, and NHL Center Ice with local hometown commentators and zero regional blackout restrictions on your Smart TV or Firestick.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#FF6B00]">
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">NBA League Pass</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">MLB Extra Innings</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">NHL Center Ice</span>
            </div>
          </div>

          {/* Card 3: Combat Sports & PPV */}
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">UFC, Championship Boxing & WWE</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Stop paying $85 every month for combat sports. Watch every numbered UFC Pay-Per-View main card, world championship boxing clashes (Top Rank, PBC, Matchroom, DAZN), WWE WrestleMania, and AEW events live in 4K UHD with zero buffering.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#FF6B00]">
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">UFC Main Cards 4K</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">Championship Boxing</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">WWE Network</span>
            </div>
          </div>

          {/* Card 4: Global Soccer */}
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Premier League & Champions League</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Unrivaled international soccer: English Premier League, UEFA Champions League, UEFA Europa League, Spanish La Liga, Italian Serie A, German Bundesliga, MLS Season Pass, and FIFA World Cup qualifiers in native 60fps high frame rates.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#FF6B00]">
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">English Premier League</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">UEFA Champions League</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">MLS Season Pass</span>
            </div>
          </div>

          {/* Card 5: Motorsports & Racing */}
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Formula 1 4K & NASCAR Cup Series</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Follow every turn of the Formula 1 World Championship with dedicated 4K UHD feeds (Practice, Qualifying, and Race day with team radio feeds), NASCAR Cup Series, Xfinity Series, IndyCar, MotoGP, and Supercross in pristine resolution.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#FF6B00]">
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">Formula 1 4K UHD</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">NASCAR Cup Series</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">IndyCar Racing</span>
            </div>
          </div>

          {/* Card 6: US Local Network Stations */}
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-4">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">US Local ABC, CBS, NBC & FOX</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Stream live local affiliate stations across all 50 states: New York, Los Angeles, Chicago, Dallas, Miami, Atlanta, Philadelphia, Boston, and more. Stay connected to your local morning news, weather updates, and primetime network television.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#FF6B00]">
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">ABC, CBS, NBC, FOX</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">All 50 US States</span>
              <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200">Local News Feeds</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Complete Channel Lineup Breakdown by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/60 border border-slate-200 shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Over <span className="text-[#FF6B00]">25,000 Live Channels</span>: Categorized for Effortless Browsing
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every category is meticulously indexed with electronic program guides (EPG) for intuitive navigation across your streaming apps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200">
              <h3 className="text-base font-black text-slate-900 mb-2 flex items-center gap-2">
                <Tv className="w-4 h-4 text-[#FF6B00]" />
                Premium Entertainment
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Full east/west feeds of HBO, Cinemax, Showtime, Starz, MGM+, Paramount Network, FX, AMC, TBS, TNT, and USA Network.
              </p>
              <div className="text-[11px] text-[#FF6B00] font-semibold">1,200+ Entertainment Feeds</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200">
              <h3 className="text-base font-black text-slate-900 mb-2 flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#FF6B00]" />
                24/7 Cable News
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Stay informed with live continuous broadcasts from CNN, Fox News, MSNBC, CNBC, Bloomberg, BBC World News, and Weather Channel.
              </p>
              <div className="text-[11px] text-[#FF6B00] font-semibold">450+ Continuous News Feeds</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200">
              <h3 className="text-base font-black text-slate-900 mb-2 flex items-center gap-2">
                <Film className="w-4 h-4 text-[#FF6B00]" />
                Kids & Family Education
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Family-safe programming with Disney Channel, Disney XD, Nickelodeon, Cartoon Network, Discovery Channel, History, and Nat Geo.
              </p>
              <div className="text-[11px] text-[#FF6B00] font-semibold">350+ Kids & Family Channels</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200">
              <h3 className="text-base font-black text-slate-900 mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FF6B00]" />
                International Packages
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Comprehensive international television: United Kingdom (Sky/BBC), Canada (TSN/Sportsnet), Latino, Arabic, French, and European feeds.
              </p>
              <div className="text-[11px] text-[#FF6B00] font-semibold">8,500+ International Feeds</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/channels"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:underline"
            >
              Explore Full Interactive Channel Lineup & Category Directory &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Massive On-Demand Library (120,000+ Movies & TV Shows) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl aspect-video">
              <Image
                src="/images/apps-dashboard-w800.webp"
                alt="IPTVSubs8K Video on Demand Movies and TV Shows Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider">
              <Film className="w-3.5 h-3.5" />
              Endless Entertainment
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              120,000+ Movies & Complete TV Series: Your Ultimate 4K Cinema at Home
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Why pay separate $15.99 monthly subscription fees for Netflix, HBO Max, Disney+, Apple TV+, and Amazon Prime Video? <strong>IPTVSubs8K consolidates the entire world of entertainment</strong> into one unified on-demand interface.
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Daily Library Updates:</strong> New Hollywood cinematic releases, box office hits, and trending streaming series added daily in 4K UHD with HDR10 metadata.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Multi-Language Subtitles:</strong> Full closed-captioning and subtitle synchronization across 25+ languages directly in your favorite player app.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Dolby Digital 5.1 & Atmos Sound:</strong> Immersive cinema sound audio pass-through for high-end soundbars and home theater receivers.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Financial Breakdown: Cable TV vs Streaming vs IPTVSubs8K */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <DollarSign className="w-3.5 h-3.5" />
              Transparent Financial Comparison
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Cable TV vs. YouTube TV vs. <span className="text-[#FF6B00]">IPTVSubs8K</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              See the exact side-by-side cost and channel breakdown. Stop overpaying $180+ monthly for bloated cable bundles.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 uppercase text-xs font-bold border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-4">Features & Inclusions</th>
                  <th scope="col" className="px-5 py-4 text-center text-slate-500">Comcast / Xfinity / Spectrum</th>
                  <th scope="col" className="px-5 py-4 text-center text-slate-500">YouTube TV / Hulu + Live</th>
                  <th scope="col" className="px-6 py-4 text-center text-[#FF6B00] bg-orange-50">IPTVSubs8K (Winner)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border/60">
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900">Starting Monthly Equivalent</td>
                  <td className="px-5 py-4 text-center text-rose-400 font-bold">$165.00 – $220.00 / mo</td>
                  <td className="px-5 py-4 text-center text-amber-400 font-bold">$79.99 – $105.00 / mo</td>
                  <td className="px-6 py-4 text-center font-black text-[#FF6B00] bg-orange-50/60 text-base">$6.66 – $13.33 / mo</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900">Annual Total Spent (1 Year)</td>
                  <td className="px-5 py-4 text-center text-rose-400 font-bold">$1,980.00 – $2,640.00</td>
                  <td className="px-5 py-4 text-center text-amber-400 font-bold">$959.88 – $1,260.00</td>
                  <td className="px-6 py-4 text-center font-black text-emerald-600 bg-orange-50/60 text-base">$79.99 (Save $1,900+)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900">Hardware & Box Rental Fees</td>
                  <td className="px-5 py-4 text-center text-rose-400 font-semibold">$12.00 – $15.00 per TV / mo</td>
                  <td className="px-5 py-4 text-center text-slate-500">None (Use own device)</td>
                  <td className="px-6 py-4 text-center font-bold text-emerald-600 bg-orange-50/60">Zero Fees (Use Any TV)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Total Live Channels</td>
                  <td className="px-5 py-4 text-center">180 – 260 Channels</td>
                  <td className="px-5 py-4 text-center">100+ Channels</td>
                  <td className="px-6 py-4 text-center font-black text-slate-900 bg-orange-50/60">25,000+ Channels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">VOD Movies & Series Library</td>
                  <td className="px-5 py-4 text-center">Limited ($5.99 per movie)</td>
                  <td className="px-5 py-4 text-center">Standard VOD (Ad-supported)</td>
                  <td className="px-6 py-4 text-center font-black text-slate-900 bg-orange-50/60">120,000+ Movies & Shows</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">4K & 8K Ultra HD Availability</td>
                  <td className="px-5 py-4 text-center text-rose-400">Extra $15.00 / mo fee</td>
                  <td className="px-5 py-4 text-center text-rose-400">Extra $9.99 / mo 4K Plus add-on</td>
                  <td className="px-6 py-4 text-center font-bold text-emerald-600 bg-orange-50/60">✓ 100% Included Free</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">All Sports Season Passes & PPV</td>
                  <td className="px-5 py-4 text-center text-rose-400">$300+ extra / $85 per PPV</td>
                  <td className="px-5 py-4 text-center text-rose-400">$449 NFL Ticket / No UFC PPV</td>
                  <td className="px-6 py-4 text-center font-bold text-emerald-600 bg-orange-50/60">✓ All Included Free</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Contracts & Hidden Cancellation Fees</td>
                  <td className="px-5 py-4 text-center text-rose-400 font-bold">12-24 Month Lock-in</td>
                  <td className="px-5 py-4 text-center text-emerald-400">No contract</td>
                  <td className="px-6 py-4 text-center font-bold text-emerald-600 bg-orange-50/60">Zero Contracts • Cancel Anytime</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-accent-cyan to-primary-600 text-slate-950 hover:brightness-110 shadow-sm transition-all"
            >
              <span>View Verified Subscription Pricing (From $6.66/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Universal Device Compatibility & Setup Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
            <Tv className="w-3.5 h-3.5" />
            Tested Hardware Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Universal Streaming Device Compatibility: Step-by-Step Setup Guides
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Whether you stream on an Amazon Firestick, an Apple TV 4K, or directly through your Samsung Smart TV, 
            our technical engineers have prepared comprehensive setup guides for every platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-lg mb-3">
                🔥
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1">Amazon Firestick & Fire TV</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                The most popular streaming device in the USA. Full walkthrough for Firestick 4K Max, Lite, and Fire TV Cube using Downloader.
              </p>
            </div>
            <Link
              href="/setup/firestick"
              className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
            >
              Firestick Setup Guide &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg mb-3">
                📺
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1">Samsung & LG Smart TVs</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Stream without external sticks on Samsung Tizen OS and LG webOS using IBO Player Pro and Smart IPTV directly from your TV app store.
              </p>
            </div>
            <Link
              href="/setup/smart-tv"
              className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
            >
              Smart TV Setup Guide &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center font-bold text-lg mb-3">
                ⚡
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1">Android TV & Nvidia Shield</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Native Google Play Store support for Nvidia Shield TV Pro, Chromecast with Google TV, and Onn 4K streaming boxes.
              </p>
            </div>
            <Link
              href="/setup/android-tv"
              className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
            >
              Android TV Setup Guide &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-accent-purple flex items-center justify-center font-bold text-lg mb-3">
                🍏
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1">Apple TV 4K & iOS</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Native tvOS and iOS streaming setup using IPTV Smarters, GSE Smart IPTV, and UHF player with AirPlay 2 mirroring support.
              </p>
            </div>
            <Link
              href="/setup/apple-tv"
              className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
            >
              Apple TV Setup Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Anti-Freeze 9.2 Technical Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl aspect-video">
              <Image
                src="/images/anti-freeze-tech-w800.webp"
                alt="Anti-Freeze 9.2 Server Infrastructure Diagram"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Proprietary Zero-Lag Technology
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Anti-Freeze™ 9.2 Technology: How We Eliminate Buffering During Peak Sports Hours
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              If you have tested budget IPTV services in the past, you know the frustration: the picture looks great during commercial breaks, but as soon as the NFL fourth quarter kicks off or the UFC main event walks out, the stream freezes, loops, or crashes entirely.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              This occurs because cheap IPTV providers oversell unmanaged virtual private servers (VPS) without adequate bandwidth overhead. <strong>IPTVSubs8K operates on a completely different architectural level</strong>:
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Tier-1 10Gbps Multi-CDN Mesh:</strong> Over 15 redundant edge server nodes distributed across North America route your video packets over the shortest physical internet path.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Dynamic Unicast Buffer Caching:</strong> Intelligent stream pacing buffers 1.5 seconds of forward video locally in hardware memory, smoothing out temporary home Wi-Fi jitter.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Automated Load Failover:</strong> If any server node experiences congestion above 70% capacity, traffic is seamlessly re-routed in under 40 milliseconds without stream interruption.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. 3-Minute Quick Setup Walkthrough */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            Quick Start Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How to Get Started in <span className="text-[#FF6B00]">4 Simple Steps</span> (3 Minutes)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            No technical skills required. If you can download an app on your TV, you can set up IPTVSubs8K.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-primary-600 text-slate-950 font-black text-lg flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Select Your Plan</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Choose your preferred duration (3, 6, or 12 months) and number of accounts (1 to 4 devices), or request a 24-hour free test.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-primary-600 text-slate-950 font-black text-lg flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Instant Credentials</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Within 2 minutes of checkout, receive your automated activation email with your Xtream Codes API URL, username, password, and M3U playlist.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-primary-600 text-slate-950 font-black text-lg flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Install Your App</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Install TiviMate, IPTV Smarters Pro, or IBO Player on your Firestick, Smart TV, or Android device following our visual tutorials.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-primary-600 text-slate-950 font-black text-lg flex items-center justify-center mb-4">
              4
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Stream in 8K & 4K</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Enter your credentials, click Login, and immediately enjoy over 25,000 live channels and 120,000+ movies in breathtaking ultra-high definition.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Knowledge Base & Featured Guides Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/50 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                Authoritative Knowledge Base
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Featured Technical Tutorials & High-Volume Guides
              </h2>
              <p className="mt-1 text-slate-500 text-sm">
                Explore in-depth technical documentation from our comprehensive 3,200+ guide library.
              </p>
            </div>
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:underline shrink-0"
            >
              Browse Complete Guides Directory ({SITE_CONFIG.domain}/guide) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/setup/firestick"
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-orange-300 transition-all group"
            >
              <div className="text-xs text-[#FF6B00] font-bold uppercase mb-1">Device Setup</div>
              <div className="text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-2">
                How to Setup IPTV on Amazon Firestick (4K Max & Cube)
              </div>
              <p className="text-xs text-slate-500">
                Complete walkthrough: Sideloading players via Downloader, enabling developer options, and optimizing buffer cache.
              </p>
            </Link>

            <Link
              href="/apps/tivimate"
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-orange-300 transition-all group"
            >
              <div className="text-xs text-[#FF6B00] font-bold uppercase mb-1">Player App Guide</div>
              <div className="text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-2">
                TiviMate IPTV Player: Best Settings for 4K Zero Lag
              </div>
              <p className="text-xs text-slate-500">
                Configure Xtream Codes login, custom EPG sources, audio passthrough, and multi-view quad screen streaming.
              </p>
            </Link>

            <Link
              href="/setup/smart-tv"
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-orange-300 transition-all group"
            >
              <div className="text-xs text-[#FF6B00] font-bold uppercase mb-1">Smart TV Setup</div>
              <div className="text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-2">
                Samsung Tizen & LG webOS Native Smart TV Installation
              </div>
              <p className="text-xs text-slate-500">
                Install without external streaming sticks using IBO Player and Smart IPTV directly from the official TV app store.
              </p>
            </Link>

            <Link
              href="/troubleshooting/iptv-buffering"
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-orange-300 transition-all group"
            >
              <div className="text-xs text-[#FF6B00] font-bold uppercase mb-1">Troubleshooting</div>
              <div className="text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-2">
                How to Fix IPTV Buffering & Freezing (7 Proven Fixes)
              </div>
              <p className="text-xs text-slate-500">
                Diagnostic walkthrough covering DNS optimization, ISP bandwidth throttling, hardware acceleration, and Wi-Fi latency.
              </p>
            </Link>

            <Link
              href="/guides/is-iptv-legal-usa"
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-orange-300 transition-all group"
            >
              <div className="text-xs text-[#FF6B00] font-bold uppercase mb-1">Legal & Privacy</div>
              <div className="text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-2">
                Is IPTV Legal in the USA? US Law & Regulations (2026)
              </div>
              <p className="text-xs text-slate-500">
                Unbiased legal analysis of internet protocol television in the United States, DMCA safe harbor, and consumer protection.
              </p>
            </Link>

            <Link
              href="/compare/cable-vs-iptv"
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-orange-300 transition-all group"
            >
              <div className="text-xs text-[#FF6B00] font-bold uppercase mb-1">Buyer Analysis</div>
              <div className="text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-2">
                Cable TV vs. IPTV: Complete 2026 Cost & Channel Breakdown
              </div>
              <p className="text-xs text-slate-500">
                Financial comparison showing how cord-cutting saves American families over $1,500 every year while gaining 25,000+ channels.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Direct Customer Support Desk & Business Contacts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-slate-50 border border-orange-200 shadow-card">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Headphones className="w-3.5 h-3.5" />
              Direct Customer Support
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Need Instant Help? Speak to Our Dedicated Engineering Desk
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Our 24/7 technical team is ready to assist you with channel setup, app configuration, or trial activation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp Contact Card */}
            <a
              href="https://wa.me/212625218443"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-50 border border-emerald-500/30 hover:border-emerald-400 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">
                  Instant WhatsApp Live Chat
                </div>
                <div className="text-lg font-black text-slate-900 group-hover:text-emerald-400 transition-colors">
                  +212 625 218 443
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Direct message our support engineers for setup help, credentials, or instant inquiries.
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>

            {/* Email Contact Card */}
            <a
              href="mailto:support@streamb4.com"
              className="p-6 rounded-2xl bg-slate-50 border border-orange-200 hover:border-orange-400 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#FF6B00] font-bold uppercase tracking-wider mb-1">
                  Official Email Helpdesk
                </div>
                <div className="text-lg font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                  support@streamb4.com
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Monitored 24/7/365 with guaranteed response times under 2 hours for all technical requests.
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00]">
                  <span>Send Support Email</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 11. Safety, Security & US Payment Protection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 mb-1">7-Day Money-Back Guarantee</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Test our Tier-1 server stability with complete peace of mind. If you experience unresolved buffering issues, receive a 100% full refund within 7 days.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 mb-1">Secure & Encrypted Checkout</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We accept major US cards, Apple Pay, PayPal, and privacy-first Cryptocurrencies (Bitcoin, USDT). Zero recurring automatic billing without your explicit consent.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-accent-purple shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 mb-1">ISP Throttling Protection</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our servers are compatible with all top VPN protocols (WireGuard, OpenVPN). Bypass Comcast, Spectrum, and AT&T sports throttling with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
