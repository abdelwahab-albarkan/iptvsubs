'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQ_ITEMS, FaqItemWithCategory } from '@/lib/constants';
import { FaqJsonLd } from '@/components/seo/JsonLd';
import { trackEvent } from '@/lib/analytics';

type FaqCategory = 'all' | 'general' | 'devices' | 'channels' | 'troubleshooting' | 'billing';

const CATEGORIES: { id: FaqCategory; label: string; count?: number }[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & 8K Quality' },
  { id: 'devices', label: 'Devices & Setup' },
  { id: 'channels', label: 'Channels, Sports & PPV' },
  { id: 'troubleshooting', label: 'Anti-Freeze & Troubleshooting' },
  { id: 'billing', label: 'Billing, Trials & Guarantee' },
];

export function FaqSection({ items = FAQ_ITEMS }: { items?: FaqItemWithCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, activeCategory, searchQuery]);

  const toggle = (idx: number) => {
    const isOpening = openIndex !== idx;
    setOpenIndex(isOpening ? idx : null);
    if (isOpening && filteredItems[idx]) {
      trackEvent('faq_expanded', { question: filteredItems[idx].question });
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-24 relative bg-slate-50/70 border-t border-slate-200/80 scroll-mt-20">
      {/* Complete JSON-LD Schema for all questions */}
      <FaqJsonLd items={items} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            Comprehensive Knowledge Base & FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#FF6B00]">Questions</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about IPTVSubs8K: hardware compatibility, anti-freeze streaming, 
            channel lineups, VPN guidance, and risk-free trial activations.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(0);
              }}
              placeholder="Search 33+ questions (e.g. Firestick, EPG, Buffer, VPN, Trial)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] focus:outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-all shadow-sm"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? items.length
                  : items.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(0);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#FF6B00] text-white shadow-md shadow-orange-500/20 scale-[1.02]'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? 'bg-white/20 text-white font-black' : 'bg-slate-100 text-slate-600 font-bold'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 rounded-2xl bg-white border border-slate-200 text-slate-500 text-sm">
              <p>No questions matched your search query. Try another keyword or browse by category.</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#FF6B00]/40 shadow-md shadow-orange-500/5'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? 'rotate-180 text-white bg-[#FF6B00]'
                          : 'bg-slate-50 text-slate-400 border border-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                      <p className="font-normal">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
