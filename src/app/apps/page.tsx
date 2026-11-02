import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG, APP_GUIDES } from '@/lib/constants';
import { PlayCircle, Star, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best IPTV Players & Streaming Apps for 2026 — Comprehensive Guide',
  description: 'In-depth comparison of the best IPTV players in 2026: TiviMate, IPTV Smarters Pro, IBO Player, XCIPTV, and Kodi with speed, EPG, and recording benchmarks.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/apps`,
  },
};

const APPS_FAQS = [
  {
    question: 'What is an IPTV player app and why do I need one?',
    answer: 'An IPTV player is the software application (media player) installed on your streaming hardware that decodes and plays live television streams, organizes channels into categories, displays the EPG program guide, and provides playback controls. IPTVSubs8K provides the high-speed stream feeds and credentials, while the player app renders the interface on your screen.'
  },
  {
    question: 'Which IPTV player is best for Firestick and Android TV?',
    answer: 'TiviMate is widely considered the #1 premium IPTV player for Firestick and Android TV due to its fluid cable-box style guide, fast channel switching, and multi-playlist support. IPTV Smarters Pro is the most popular free alternative.'
  },
  {
    question: 'Are these IPTV player apps free?',
    answer: 'Most top IPTV players (like IPTV Smarters Pro and XCIPTV) are 100% free. TiviMate offers a capable free version, with an optional one-time Premium license for advanced features like multi-view and scheduled recording.'
  }
];

export default function AppsHubPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Streaming Apps Hub', item: '/apps' }]} />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <PlayCircle className="w-3.5 h-3.5" />
              2026 Media Player Evaluations
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Best IPTV Players & Streaming Apps (Ranked & Tested)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Choosing the right media player is just as important as choosing a high-speed service provider. 
              We bench-tested the top IPTV applications in the United States across speed, EPG reliability, 
              4K rendering, and multi-screen capabilities.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APP_GUIDES.map((app) => (
            <div
              key={app.slug}
              className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-accent-cyan/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover group"
            >
              <div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-50 mb-5 p-2 flex items-center justify-center">
                  <Image
                    src={app.image}
                    alt={`${app.name} IPTV Player Interface`}
                    fill
                    sizes="400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-50 backdrop-blur-md border border-slate-200 text-amber-400 text-xs font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{app.rating} / 5.0</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                  {app.name}
                </h2>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {app.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                    Supported Platforms:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {app.platforms.map((p, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white text-[11px] text-slate-600 border border-slate-200 font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href={`/apps/${app.slug}`}
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-white group-hover:bg-accent-cyan group-hover:text-slate-950 text-slate-900 border border-slate-200 group-hover:border-transparent flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Read Complete Setup Tutorial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FaqSection items={APPS_FAQS} />
    </>
  );
}

