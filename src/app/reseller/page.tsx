import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG, RESELLER_TIERS } from '@/lib/constants';
import { ShieldCheck, Zap, DollarSign, Users, Award, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Reseller Panel & Program — Start Your IPTV Business',
  description: 'Join the IPTVSubs8K reseller program. Get access to an advanced IPTV reseller panel, wholesale credit rates, sub-reseller creation, 99.9% uptime, and 24/7 dedicated support.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/reseller`,
  },
};

const RESELLER_FAQS = [
  {
    question: 'How does the IPTV reseller credits system work?',
    answer: 'Our reseller model operates on a flexible credit system where 1 credit equals 1 month of premium IPTV service for 1 user. For example, creating a 1-month subscription deducts 1 credit, a 3-month subscription deducts 3 credits, and a 12-month subscription deducts 10 to 12 credits. You purchase credits at wholesale rates ($1.66 to $2.50) and sell subscriptions at retail rates ($14.99 to $79.99).'
  },
  {
    question: 'Do my reseller credits ever expire?',
    answer: 'No! Reseller credits on the IPTVSubs8K panel never expire. You can consume credits at your own pace as you onboard new customers.'
  },
  {
    question: 'Can I create sub-reseller accounts?',
    answer: 'Yes! Pro and Master Reseller accounts have full sub-reseller creation rights. You can set up your own dealers, transfer credits to them, and manage their permissions directly from your central dashboard.'
  },
  {
    question: 'Can I generate free trial accounts for prospective clients?',
    answer: 'Yes. All reseller tiers receive the capability to generate free 24-hour trial accounts without consuming credits, allowing you to convert leads into paying customers easily.'
  }
];

export default function ResellerPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Reseller Program', item: '/reseller' }]} />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              High Margins • White-Label IPTV Business
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Start Your IPTV Business with Our Reseller Panel
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Launch your branded streaming brand with the industry’s most stable 8K & 4K infrastructure. 
              Earn up to 85% profit margins with our powerful Xtream Codes CMS reseller panel.
            </p>
          </div>
        </div>
      </div>

      {/* Reseller Tiers Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Wholesale Reseller Packages
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            Select a credit package that matches your business scale. No recurring monthly panel fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESELLER_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-orange-50 via-white to-white border-2 border-[#FF6B00] shadow-orange'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  {tier.isPopular && (
                    <span className="px-3 py-1 rounded-full bg-[#FF6B00] text-white text-xs font-black uppercase">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black text-slate-900">${tier.price}</span>
                  <span className="text-xs text-slate-500 font-medium">USD one-time</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs mb-6 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Credits:</span>
                    <span className="font-bold text-slate-900">{tier.credits} Credits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Cost Per Credit:</span>
                    <span className="font-bold text-[#FF6B00]">{tier.costPerCredit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Estimated Profit:</span>
                    <span className="font-bold text-emerald-400">{tier.profitMargin}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200">
                <Link
                  href={`/contact?subject=Reseller%20Order%20${tier.name}`}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 shadow-orange-sm hover:brightness-110'
                      : 'bg-white hover:bg-slate-800 text-slate-900 border border-slate-200'
                  }`}
                >
                  <span>Activate Reseller Panel</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reseller Panel Features Showcase */}
      <section className="py-16 bg-white/30 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-[#FF6B00] text-xs font-bold border border-orange-200 uppercase tracking-widest">
                Professional Control Panel
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Complete Command Over Your Subscribers
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our reseller portal gives you complete autonomy. Add or renew customer accounts, 
                generate M3U and Xtream Codes API credentials, monitor connection health, reset passwords, 
                and inspect active stream channels from a modern responsive web dashboard.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-1">Instant Account Creation</div>
                  <div className="text-xs text-slate-500">Generate credentials in 10 seconds for any device.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-1">Unlimited Free Trials</div>
                  <div className="text-xs text-slate-500">Hand out 24-hour demos to convert leads into buyers.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-1">Sub-Reseller Management</div>
                  <div className="text-xs text-slate-500">Build your own network of resellers under you.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 text-sm mb-1">24/7 VIP Engineering</div>
                  <div className="text-xs text-slate-500">Direct Telegram hotline for all server questions.</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 flex items-center justify-between">
                <span>Reseller Profit Estimator</span>
                <span className="text-xs font-mono text-emerald-400">Real Calculations</span>
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center text-slate-600">
                  <span>If you sell 50 subscriptions at $15/month:</span>
                  <span className="font-bold text-slate-900">$750 / mo</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 text-xs">
                  <span>Your wholesale cost (50 credits @ $2.00):</span>
                  <span className="font-mono text-red-400">-$100</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                  <span>Monthly Net Profit:</span>
                  <span className="text-lg">+$650.00 / mo</span>
                </div>
                <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                  With 200 active subscribers, your net recurring profit reaches over <strong>$2,600+ per month</strong>. 
                  All backed by our 99.9% uptime and zero-freeze server infrastructure.
                </p>
              </div>

              <Link
                href="/contact?subject=Reseller%20Consultation"
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 shadow-orange-sm flex items-center justify-center gap-2 hover:brightness-110"
              >
                <span>Speak with a Reseller Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={RESELLER_FAQS} />
    </>
  );
}

