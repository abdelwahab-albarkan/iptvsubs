import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getAllGuides } from '@/lib/guidesData';
import {
  Layers,
  ArrowRight,
  Tv,
  Zap,
  HelpCircle,
  Smartphone,
  Flame
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Streaming Knowledge Base & Device Guides',
  description: 'Explore the complete IPTVSubs8K guide directory. Master setup on Firestick, Smart TVs, Android Box, TiviMate, Smarters Pro, live sports, and troubleshooting in 2026.',
  alternates: {
    canonical: 'https://iptvsubs8k.com/guide'
  }
};

export default function GuidesHubPage() {
  const allGuides = getAllGuides();
  const totalCount = allGuides.length;

  const breadcrumbItems = [
    { name: 'Guides', item: '/guide' }
  ];

  // Group top guides by cluster
  const clusters = [
    { id: 'iptv-services', name: 'IPTV Services & Providers', icon: Tv, desc: 'Find the best 4K IPTV providers, service reviews, and server benchmarks.' },
    { id: 'subscription-pricing', name: 'Subscriptions, Pricing & Deals', icon: Zap, desc: 'Compare pricing plans, annual discounts, and multi-connection packages.' },
    { id: 'firestick-guides', name: 'Firestick & Amazon Fire TV', icon: Flame, desc: 'Downloader codes, sideloading, cache clearing, and 4K Max setup tutorials.' },
    { id: 'smart-tv-setups', name: 'Samsung & LG Smart TVs', icon: Tv, desc: 'Native app store setup for Samsung Tizen, LG webOS, Sony, and TCL Smart TVs.' },
    { id: 'streaming-apps', name: 'Streaming Apps & Players', icon: Smartphone, desc: 'Step-by-step guides for TiviMate, IPTV Smarters Pro, IBO Player, and XCIPTV.' },
    { id: 'live-sports', name: 'Live Sports, Channels & PPV', icon: Zap, desc: 'NFL Sunday Ticket, Premier League, UFC PPV, and US local ABC/CBS/NBC/FOX streams.' },
    { id: 'roku-streaming', name: 'Roku Compatibility & Tips', icon: Layers, desc: 'Screen casting, AirPlay workarounds, and private channel streaming.' },
    { id: 'troubleshooting', name: 'Troubleshooting & Support', icon: HelpCircle, desc: 'Eliminate buffering, fix black screens, solve error 401, and bypass ISP throttling.' }
  ];

  const featuredGuides = allGuides.slice(0, 18);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-10 pb-20">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Header */}
          <div className="mt-8 mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF6B00] border border-orange-200 mb-4">
              <Layers className="w-4 h-4" />
              Over {totalCount.toLocaleString()} Verified Streaming Guides
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              IPTV Knowledge Base & Setup Tutorials
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive technical guides, player configurations, device walkthroughs, and buffer-free streaming optimizations for US viewers in 2026.
            </p>
          </div>

          {/* Cluster Category Cards */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#FF6B00]" />
              Browse by Streaming Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {clusters.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center mb-4 border border-orange-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{c.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">{c.desc}</p>
                    </div>
                    <span className="text-xs text-[#FF6B00] font-semibold flex items-center gap-1">
                      Browse Category <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Featured Guides Grid */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Flame className="w-6 h-6 text-[#FF6B00]" />
                  Popular Streaming Guides
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Selected tutorials covering the most searched streaming hardware and apps.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={guide.path}
                  className="group flex flex-col rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-orange-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="relative aspect-video w-full bg-slate-50 overflow-hidden">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-[#EA580C] border border-orange-200">
                        {guide.cluster}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-slate-500 mb-2 font-medium">
                        Target Query: <span className="text-slate-700">{guide.primaryKeyword}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors leading-snug mb-3">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                        {guide.metaDescription}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500">{guide.readTime}</span>
                      <span className="text-[#FF6B00] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Guide <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* High-Converting CTA Banner */}
          <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-slate-50 border border-orange-200 shadow-card text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Stream Smarter with IPTVSubs8K
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-base">
              Over 35,000 4K live channels, 120,000+ on-demand movies, and 99.9% uptime powered by Anti-Freeze 9.2 technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-trial"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] text-white font-bold text-base hover:brightness-105 transition-all shadow-orange flex items-center justify-center gap-2"
              >
                Start 24-Hour Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 text-slate-900 font-semibold text-base hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                View Pricing Plans
              </Link>
            </div>
          </section>
        </div>
      </div>
  );
}
