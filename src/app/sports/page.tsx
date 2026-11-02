import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PricingSection } from '@/components/sections/PricingSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Zap, ShieldCheck, Trophy, Play, CheckCircle2, ArrowRight, Tv, Flame, Radio } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Live Sports IPTV Streaming — NFL, NBA, Premier League & PPV in 4K',
  description: 'Stream live sports in 4K & 8K UHD: NFL Sunday Ticket, NBA League Pass, MLB, NHL, Premier League, UEFA, and UFC PPV events with 99.9% anti-freeze stability.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/sports`,
  },
};

const SPORTS_LEAGUES = [
  { name: 'NFL Sunday Ticket', desc: 'All out-of-market Sunday afternoon games, RedZone, and playoffs in 4K 60FPS.', badge: 'Live 4K' },
  { name: 'NBA League Pass', desc: 'Every regular season game, playoffs, and NBA Finals with home/away team commentary feeds.', badge: '60 FPS' },
  { name: 'Premier League & UEFA', desc: 'Every English Premier League, UEFA Champions League, and Europa match live without blackout.', badge: 'Ultra HD' },
  { name: 'UFC & Boxing PPV', desc: 'All numbered UFC Pay-Per-View main cards, prelims, and championship boxing bouts included.', badge: 'PPV Included' },
  { name: 'MLB Extra Innings', desc: 'Complete Major League Baseball schedule from Opening Day through the World Series.', badge: 'HD & 4K' },
  { name: 'NHL Center Ice', desc: 'Full NHL hockey broadcast coverage including regional sports networks and Stanley Cup.', badge: 'Zero Lag' }
];

export default function SportsPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Live Sports & PPV', item: '/sports' }]} />

          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF6B00] mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Dedicated High-Bandwidth Sports CDNs</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Live Sports IPTV Streaming in <span className="text-[#FF6B00]">4K & 8K UHD</span>
            </h1>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Experience zero-lag, 60 frames-per-second sports streaming. From NFL Sunday Ticket and NBA League Pass 
              to international soccer and all live UFC Pay-Per-View fights — never miss a game or pay extra for PPV again.
            </p>
          </div>
        </div>
      </div>

      {/* Sports Grid */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Universal Sports Coverage Across All Major Leagues
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every major US and international sporting event streamed natively in high-frame-rate 60 FPS feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPORTS_LEAGUES.map((league, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-[#FF6B00]">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#FF6B00] border border-orange-200 shadow-2xs">
                    {league.badge}
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900">{league.name}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{league.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Flame className="w-4 h-4 fill-[#FF6B00]" />
                Zero Buffering Guarantee
              </div>
              <h3 className="text-xl sm:text-2xl font-black">Powered by Anti-Freeze™ 9.2 Architecture</h3>
              <p className="text-sm text-slate-300 max-w-xl mt-1">
                Our dynamic multi-CDN routing automatically switches to the nearest high-speed edge node during peak sports events, eliminating lag and buffering.
              </p>
            </div>
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-xl font-black text-sm bg-gradient-to-r from-[#FF6B00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white shadow-md shadow-orange-500/25 whitespace-nowrap transition-all"
            >
              Start 24h Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <h2 className="sr-only">Sports Subscription Packages</h2>
      <PricingSection showTitle={false} />

      {/* FAQs */}
      <FaqSection />
    </>
  );
}

