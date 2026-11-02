import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { DollarSign, Check, X, ArrowRight, ShieldCheck, TrendingDown, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cable TV vs IPTV: Complete Cost, Channel & Quality Comparison (2026)',
  description: 'Detailed financial and feature breakdown comparing traditional US cable TV packages ($120-$200/mo) against modern high-performance IPTV streaming ($10-$15/mo).',
  alternates: {
    canonical: `${SITE_CONFIG.url}/compare/cable-vs-iptv`,
  },
};

const COMPARE_FAQS = [
  {
    question: 'How much money does switching from cable to IPTV save on average?',
    answer: 'According to US consumer spending data, the average American cable TV bill with sports packages, broadcast fees, and DVR hardware rentals ranges between $140 and $210 per month ($1,680 to $2,520 annually). Switching to an IPTVSubs8K annual plan ($79.99/year) saves over $1,600 to $2,400 every single year while providing 50x more live channels and VOD titles.'
  },
  {
    question: 'Will I lose my local channels (ABC, CBS, NBC, FOX) if I cancel cable?',
    answer: 'No! IPTVSubs8K includes all primary US local broadcast affiliates across every major US media market. You get high-definition local news, daytime programming, and primetime sports without an external broadcast antenna.'
  }
];

export default function CableVsIptvPage() {
  return (
    <>
      <ArticleJsonLd
        title="Cable TV vs IPTV: Complete Cost, Channel & Quality Comparison"
        description="Side-by-side cost and feature analysis between traditional US cable contracts and modern IPTV streaming services."
        url={`${SITE_CONFIG.url}/compare/cable-vs-iptv`}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Comparisons', item: '/compare/cable-vs-iptv' },
              { name: 'Cable TV vs IPTV', item: '/compare/cable-vs-iptv' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <TrendingDown className="w-3.5 h-3.5" />
              Cord-Cutting Financial Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Cable TV vs IPTV: 2026 Cost & Channel Comparison
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Tired of paying $180+ every month for bloated cable bundles packed with hidden fees? 
              Compare the costs, channel selection, sports coverage, and hardware requirements 
              between legacy US cable providers and high-performance IPTV streaming.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Direct Side-by-Side Comparison Matrix */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white/80 mb-16 shadow-2xl">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-900 uppercase text-xs font-bold border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-5">Feature / Metric</th>
                <th scope="col" className="px-6 py-5 text-red-400 bg-red-950/20">Traditional US Cable TV</th>
                <th scope="col" className="px-6 py-5 text-[#FF6B00] bg-orange-50 font-black">IPTVSubs8K Streaming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border/60">
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-900">Average Monthly Cost</td>
                <td className="px-6 py-4 text-red-400 font-bold bg-red-950/10">$140 – $210 / month</td>
                <td className="px-6 py-4 text-emerald-600 font-black bg-orange-50/60 text-base">$6.66 – $14.99 / month</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-900">Annual Cost to Household</td>
                <td className="px-6 py-4 text-red-400 font-bold bg-red-950/10">$1,680 – $2,520 / year</td>
                <td className="px-6 py-4 text-emerald-600 font-black bg-orange-50/60 text-base">$79.99 / year (Save $1,600+)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Total Live Channels</td>
                <td className="px-6 py-4 bg-red-950/10">150 – 250 Channels</td>
                <td className="px-6 py-4 font-bold text-slate-900 bg-orange-50/60">25,000+ Channels (USA & Global)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Hardware Rental Fees</td>
                <td className="px-6 py-4 text-red-400 bg-red-950/10">$10 – $15/mo per TV set-top box</td>
                <td className="px-6 py-4 text-emerald-600 font-bold bg-orange-50/60">$0 (Use your Firestick, TV, or phone)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Hidden Broadcast & RSN Fees</td>
                <td className="px-6 py-4 text-red-400 bg-red-950/10">$30 – $45/mo in mandatory surcharges</td>
                <td className="px-6 py-4 text-emerald-600 font-bold bg-orange-50/60">$0 (Zero hidden surcharges)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Sports Season Passes (NFL, NBA, MLB)</td>
                <td className="px-6 py-4 text-red-400 bg-red-950/10">$250 – $400 extra per sport</td>
                <td className="px-6 py-4 text-emerald-600 font-bold bg-orange-50/60">✓ 100% Included at no extra fee</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Pay-Per-View Events (UFC / Boxing)</td>
                <td className="px-6 py-4 text-red-400 bg-red-950/10">$79.99 per single fight card</td>
                <td className="px-6 py-4 text-emerald-600 font-bold bg-orange-50/60">✓ Included in subscription</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Contract Lock-In Period</td>
                <td className="px-6 py-4 text-red-400 bg-red-950/10">1 to 2 Year Binding Contracts</td>
                <td className="px-6 py-4 text-emerald-600 font-bold bg-orange-50/60">Zero Contracts • Cancel Anytime</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Feature showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Why Millions of Americans Are Cutting the Cord in 2026
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Traditional cable television is broken. Cable conglomerates disguise rate hikes behind 
              arbitrary &ldquo;Broadcast TV Surcharges&rdquo; and &ldquo;Regional Sports Network Surcharges&rdquo; 
              that increase your bill by $40 or more over the advertised promotional price.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              IPTVSubs8K replaces legacy coax cables with high-speed 10Gbps fiber internet distribution. 
              You receive the exact same high-definition broadcast signals directly on your Amazon Firestick, 
              Samsung Smart TV, or Apple TV for less than the cost of a single movie ticket.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <Image
                src="/images/cable-vs-iptv.webp"
                alt="Cable TV vs IPTV Cost Comparison"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pre-footer Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-slate-50 border border-orange-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900">Ready to save over $1,500 this year?</h3>
            <p className="text-sm text-slate-500">Test our 25,000+ channels on your television right now with a free 24h trial.</p>
          </div>
          <Link
            href="/free-trial"
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 hover:brightness-110 shadow-orange-sm whitespace-nowrap"
          >
            Start Free 24h Test Account →
          </Link>
        </div>
      </div>

      <FaqSection items={COMPARE_FAQS} />
    </>
  );
}

