import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { getAllGuides } from '@/lib/guidesData';
import {
  Layers,
  Tv,
  Zap,
  ShieldCheck,
  Flame,
  MonitorPlay,
  Smartphone,
  Radio,
  Box,
  DollarSign,
  HelpCircle,
  Award,
  Globe,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete HTML Sitemap & Topic Directory',
  description: 'Browse the complete architectural directory of IPTVSubs8K. Access over 3,200 technical setup guides, device configurations, live sports lineups, and app tutorials.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/html-sitemap`,
  },
};

export default function HtmlSitemapPage() {
  const allGuides = getAllGuides();

  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'HTML Sitemap', item: '/html-sitemap' }
  ];

  // Group guides by cluster
  const clusterMap: Record<string, { name: string; clusterId: string; guides: typeof allGuides }> = {};
  allGuides.forEach((g) => {
    if (!clusterMap[g.cluster]) {
      clusterMap[g.cluster] = { name: g.cluster, clusterId: g.clusterId, guides: [] };
    }
    clusterMap[g.cluster].guides.push(g);
  });

  const clusters = Object.values(clusterMap).sort((a, b) => b.guides.length - a.guides.length);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-10 pb-20">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Header */}
        <div className="mt-8 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Architectural Site Index
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Complete Website <span className="text-[#FF6B00]">Sitemap & Directory</span>
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            A comprehensive, hierarchically organized index of all core service pages, hardware setup tutorials, 
            streaming player guides, and over {allGuides.length.toLocaleString()} verified technical cord-cutting articles.
          </p>
        </div>

        {/* Section 1: Core Navigation & Service Pages */}
        <section className="mb-14 p-8 rounded-3xl bg-white/70 border border-slate-200 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <Tv className="w-6 h-6 text-[#FF6B00]" />
            <span>Core Commercial & Customer Portals</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            <Link href="/" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Homepage</strong>
              <div className="text-xs text-slate-500 mt-0.5">8K/4K IPTV Service USA</div>
            </Link>
            <Link href="/pricing" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Subscription Pricing</strong>
              <div className="text-xs text-slate-500 mt-0.5">1-4 Account Plans</div>
            </Link>
            <Link href="/free-trial" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>24-Hour Free Trial</strong>
              <div className="text-xs text-slate-500 mt-0.5">Instant Test Line</div>
            </Link>
            <Link href="/channels" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Live Channels Lineup</strong>
              <div className="text-xs text-slate-500 mt-0.5">25,000+ Channels & EPG</div>
            </Link>
            <Link href="/sports" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Live Sports Hub</strong>
              <div className="text-xs text-slate-500 mt-0.5">NFL, NBA, UFC, Premier League</div>
            </Link>
            <Link href="/reseller" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>IPTV Reseller Panel</strong>
              <div className="text-xs text-slate-500 mt-0.5">Wholesale Credits & CMS</div>
            </Link>
            <Link href="/contact" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Customer Support Desk</strong>
              <div className="text-xs text-slate-500 mt-0.5">24/7 WhatsApp & Email</div>
            </Link>
            <Link href="/guide" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Streaming Knowledge Base</strong>
              <div className="text-xs text-slate-500 mt-0.5">Full Guides Directory</div>
            </Link>
          </div>
        </section>

        {/* Section 2: Hardware Setup Hubs & Tutorials */}
        <section className="mb-14 p-8 rounded-3xl bg-white/70 border border-slate-200 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <MonitorPlay className="w-6 h-6 text-[#FF6B00]" />
            <span>Hardware Setup & Installation Portals</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            <Link href="/setup/firestick" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Amazon Firestick Guide</strong>
              <div className="text-xs text-slate-500 mt-0.5">4K Max, Lite, Cube</div>
            </Link>
            <Link href="/setup/android-tv" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Android TV & Google TV</strong>
              <div className="text-xs text-slate-500 mt-0.5">Nvidia Shield, Chromecast</div>
            </Link>
            <Link href="/setup/smart-tv" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Samsung & LG Smart TV</strong>
              <div className="text-xs text-slate-500 mt-0.5">Tizen OS, webOS</div>
            </Link>
            <Link href="/setup/apple-tv" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Apple TV & iOS</strong>
              <div className="text-xs text-slate-500 mt-0.5">tvOS, iPhone, iPad</div>
            </Link>
            <Link href="/setup/pc-mac" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Windows PC & Mac</strong>
              <div className="text-xs text-slate-500 mt-0.5">VLC, Smarters Desktop</div>
            </Link>
            <Link href="/setup/mag-formuler" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>MAG & Formuler Boxes</strong>
              <div className="text-xs text-slate-500 mt-0.5">Stalker Portal & MyTVOnline</div>
            </Link>
            <Link href="/setup/roku" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Roku TV Workarounds</strong>
              <div className="text-xs text-slate-500 mt-0.5">AirPlay & Screen Mirroring</div>
            </Link>
            <Link href="/compare/cable-vs-iptv" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Cable TV vs. IPTV</strong>
              <div className="text-xs text-slate-500 mt-0.5">Cord-Cutting Savings Audit</div>
            </Link>
          </div>
        </section>

        {/* Section 3: IPTV Player Applications & Troubleshooting */}
        <section className="mb-14 p-8 rounded-3xl bg-white/70 border border-slate-200 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <Smartphone className="w-6 h-6 text-[#FF6B00]" />
            <span>Player Applications & Diagnostic Support</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            <Link href="/apps/tivimate" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>TiviMate IPTV Player</strong>
              <div className="text-xs text-slate-500 mt-0.5">Gold Standard Android TV App</div>
            </Link>
            <Link href="/apps/iptv-smarters-pro" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>IPTV Smarters Pro</strong>
              <div className="text-xs text-slate-500 mt-0.5">Cross-Platform Xtream Codes</div>
            </Link>
            <Link href="/apps/ibo-player" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>IBO Player</strong>
              <div className="text-xs text-slate-500 mt-0.5">Samsung & LG Smart TV</div>
            </Link>
            <Link href="/apps/xciptv" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>XCIPTV Player</strong>
              <div className="text-xs text-slate-500 mt-0.5">Dual ExoPlayer Engine</div>
            </Link>
            <Link href="/apps/kodi" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Kodi PVR Client</strong>
              <div className="text-xs text-slate-500 mt-0.5">M3U & XMLTV Integration</div>
            </Link>
            <Link href="/troubleshooting/iptv-buffering" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Fix IPTV Buffering</strong>
              <div className="text-xs text-slate-500 mt-0.5">Buffer Size & DNS Tuning</div>
            </Link>
            <Link href="/troubleshooting/iptv-not-working" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>IPTV Not Working Solutions</strong>
              <div className="text-xs text-slate-500 mt-0.5">Error 401 & Black Screen Fixes</div>
            </Link>
            <Link href="/troubleshooting/vpn-isp-throttling" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] transition-all">
              <strong>Bypass ISP Throttling</strong>
              <div className="text-xs text-slate-500 mt-0.5">WireGuard VPN Speed Guide</div>
            </Link>
          </div>
        </section>

        {/* Section 4: All 15 Content Clusters (Categorized Tree Hierarchy) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-black text-slate-900">
              The 15 Content Clusters ({allGuides.length.toLocaleString()} Unique Guides)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Browse top guides in each category, or click any title for complete technical instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusters.map((cluster, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-2xl bg-white/60 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold">
                      {cluster.guides.length} Guides
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">Cluster #{cIdx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {cluster.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {cluster.guides.slice(0, 5).map((guide, gIdx) => (
                      <Link
                        key={gIdx}
                        href={guide.path}
                        className="block text-xs text-slate-600 hover:text-[#FF6B00] truncate transition-colors"
                      >
                        • {guide.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <Link
                    href={`/guide?cluster=${cluster.clusterId}`}
                    className="text-xs text-[#FF6B00] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View all {cluster.guides.length} guides</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

