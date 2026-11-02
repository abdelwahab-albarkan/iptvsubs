'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Tv, CheckCircle, Flame, ArrowRight, Shield } from 'lucide-react';
import { CHANNEL_CATEGORIES } from '@/data/channelsData';
import { trackEvent } from '@/lib/analytics';

export function ChannelsPreview() {
  const [activeTab, setActiveTab] = useState<string>('usa-sports');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = CHANNEL_CATEGORIES.find((c) => c.id === activeTab) || CHANNEL_CATEGORIES[0];

  const filteredChannels = activeCategory.channels.filter((ch) =>
    ch.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 lg:py-20 bg-slate-50/60 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Tv className="w-3.5 h-3.5" />
              25,000+ Live Channels
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Watch Every <span className="text-[#FF6B00]">US Sports Event</span> & Local Channel
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              From NFL Sunday Ticket, NBA, and UFC Pay-Per-Views to your local CBS, NBC, and FOX broadcasts. 
              Zero blackout restrictions.
            </p>
          </div>

          <Link
            href="/channels"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF6B00] hover:text-[#EA580C] transition-colors whitespace-nowrap"
          >
            <span>Explore Full 25,000+ Channel Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {CHANNEL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveTab(cat.id);
                  trackEvent('channel_filter_changed', { category: cat.name });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#FF6B00] text-white shadow-md shadow-orange-500/20'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredChannels.length > 0 ? (
            filteredChannels.map((ch, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-[#FF6B00]/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-sm font-bold text-slate-800 group-hover:text-slate-900 truncate">
                    {ch.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {ch.isPopular && (
                    <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-600 text-[10px] font-black border border-red-200 uppercase">
                      LIVE
                    </span>
                  )}
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-black ${
                      ch.resolution === '8K'
                        ? 'bg-orange-50 text-[#FF6B00] border border-orange-200'
                        : ch.resolution === '4K UHD'
                        ? 'bg-slate-100 text-slate-800 border border-slate-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {ch.resolution}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 text-sm bg-white rounded-2xl border border-slate-200">
              No channels match &quot;{searchQuery}&quot; in this category. Search our complete directory or request via trial.
            </div>
          )}
        </div>

        {/* CTA banner below channel grid */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Looking for a specific regional sports network or international language pack?{' '}
            <Link href="/free-trial" className="text-[#FF6B00] font-bold hover:underline">
              Request a 24-hour test account
            </Link>{' '}
            to browse our entire 25,000+ channel catalog on your television.
          </p>
        </div>
      </div>
    </section>
  );
}
