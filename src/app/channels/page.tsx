import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ChannelsPreview } from '@/components/sections/ChannelsPreview';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Tv, Flame, Shield, ArrowRight, CheckCircle2, Film, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'USA IPTV Channel List — Live Sports, Local News & 4K Entertainment',
  description: 'Explore the complete IPTVSubs8K channel lineup: all USA local channels (ABC, CBS, FOX, NBC), premium sports networks (ESPN, NFL, NBA, PPV), and 120,000+ VOD movies.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/channels`,
  },
};

const CHANNEL_FAQS = [
  {
    question: 'Are USA local channels included for my specific city?',
    answer: 'Yes! IPTVSubs8K carries local ABC, CBS, NBC, FOX, and The CW network affiliates across all major US designated market areas (DMAs) including New York, Los Angeles, Chicago, Dallas, Houston, Atlanta, Miami, Philadelphia, Washington DC, Phoenix, Denver, and dozens more.'
  },
  {
    question: 'Are Pay-Per-View (PPV) fights and sports events included in the price?',
    answer: 'All major UFC Fight Night and Main Card PPVs, championship boxing, and WWE events are included in your subscription at no additional cost. There are no paywalls or secondary event charges.'
  },
  {
    question: 'How often is the Video-on-Demand (VOD) library updated?',
    answer: 'Our on-demand library contains over 120,000 movies and series and is refreshed daily with new theatrical releases, streaming originals, and complete multi-season television shows in 4K and 1080p.'
  },
  {
    question: 'Can I request channels or international packages that are not listed?',
    answer: 'Yes. Paid subscribers and trial users can submit channel and VOD title requests directly through our 24/7 customer support portal. Our broadcast engineers frequently add regional feeds upon request.'
  }
];

export default function ChannelsPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Live Channels & VOD', item: '/channels' }]} />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              25,000+ Channels • Zero Blackout Restrictions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Complete USA & Worldwide IPTV Channel Lineup
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore our massive live television and on-demand entertainment directory. 
              Enjoy 8K, 4K UHD, and 1080p 60FPS feeds with an automated 7-day electronic TV guide.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Channels Preview Component */}
      <ChannelsPreview />

      {/* Highlights Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF6B00]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Full Live Sports Passes</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Never miss a single game. Stream NFL Sunday Ticket, NBA League Pass, MLB Extra Innings, 
              NHL Center Ice, English Premier League, UEFA Champions League, and UFC PPV cards in 4K UHD.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-accent-purple">
              <Film className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">120,000+ Movies & Series</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Instant on-demand streaming for latest cinema releases and full multi-season series from 
              HBO Max, Netflix, Disney+, and Amazon Prime with multi-language audio and subtitle tracks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">50+ Country Lineups</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Beyond the USA, access comprehensive international channel bouquets from the UK, Canada, 
              Latin America, France, Germany, Italy, Spain, the Middle East, and beyond.
            </p>
          </div>
        </div>

        {/* Channels CTA Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-slate-50 border border-orange-200 shadow-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Want to test this channel lineup on your screen?</h3>
            <p className="text-sm text-slate-500 mt-1">Get an instant 24-hour trial and explore every channel with zero commitment.</p>
          </div>
          <Link
            href="/free-trial"
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 hover:brightness-110 shadow-orange-sm whitespace-nowrap"
          >
            Claim Free 24h Test Account →
          </Link>
        </div>
      </section>

      <FaqSection items={CHANNEL_FAQS} />
    </>
  );
}

