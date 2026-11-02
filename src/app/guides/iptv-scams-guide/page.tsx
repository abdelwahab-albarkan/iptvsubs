import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { ShieldCheck, AlertOctagon, CheckCircle2, ArrowRight, Lock, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Scams: How to Spot Fake Providers & Protect Your Payment (2026)',
  description: 'Protect your money and privacy from rogue IPTV sellers. Identify common scam tactics like untraceable crypto-only payments, fake reviews, and disappearing servers.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/guides/iptv-scams-guide`,
  },
};

const SCAM_FAQS = [
  {
    question: 'Why should I never buy a "Lifetime" IPTV subscription?',
    answer: 'A "Lifetime IPTV" plan is the #1 scam in the cord-cutting community. Operating 10Gbps streaming servers, acquiring satellite downlinks, and maintaining load balancers requires substantial recurring monthly costs. Providers selling $50 lifetime plans collect upfront cash and intentionally shut down their servers 2 to 4 months later once operating costs exceed new revenue.'
  },
  {
    question: 'How can I safely pay for an IPTV subscription online?',
    answer: 'Always look for providers that accept traceable, secure payment methods like Apple Pay, Visa, MasterCard, or trusted processors with fraud monitoring and chargeback protection. If a seller insists solely on non-refundable Bitcoin, Cash App, or gift cards with zero buyer protection, proceed with extreme caution.'
  }
];

export default function IptvScamsGuidePage() {
  return (
    <>
      <ArticleJsonLd
        title="IPTV Scams: How to Spot Fake Providers & Protect Your Payment"
        description="Essential consumer protection guide exposing common IPTV scam tactics, fake subscription offers, and payment fraud prevention."
        url={`${SITE_CONFIG.url}/guides/iptv-scams-guide`}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Buyer Protection', item: '/guides/iptv-scams-guide' },
              { name: 'IPTV Scams Guide', item: '/guides/iptv-scams-guide' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <AlertOctagon className="w-3.5 h-3.5" />
              Consumer Protection Alert
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              IPTV Scams: How to Spot Fake Providers & Protect Your Money
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              As millions of Americans cut the cord, dishonest operators have flooded the web with 
              fake websites, bogus promises, and non-existent customer support. 
              Here is how to spot the red flags and safeguard your payment.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                The Top 4 IPTV Scams Operating in the USA
              </h2>

              <div className="space-y-6 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-base font-bold text-red-400">1. The &ldquo;Lifetime Subscription&rdquo; Trap</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sellers promise &ldquo;Lifetime Access to 50,000 Channels for $49&rdquo;. Within 6 to 10 weeks, 
                    their server goes offline permanently, the website disappears, and support emails bounce. 
                    Legitimate providers with dedicated 10Gbps infrastructure always charge on monthly, semi-annual, 
                    or annual terms to fund ongoing bandwidth.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-base font-bold text-red-400">2. The &ldquo;100,000 Channels&rdquo; Lie (Dead Stream Padding)</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unscrupulous sellers artificially inflate their channel counts by scraping free, broken web streams 
                    or duplicating the same channel 15 times with different names. When you try to watch, 90% of the links 
                    produce &ldquo;Error 404&rdquo; or buffer endlessly. Look for quality over inflated quantity.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-base font-bold text-red-400">3. Non-Refundable Crypto/Gift Card Coercion</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Rogue websites often display Visa and Mastercard logos on their homepage, but at checkout, they 
                    suddenly disable card payments and demand Amazon Gift Cards, Cash App, or untraceable cryptocurrency. 
                    Once you send the money, they provide non-working credentials or block your email address.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-base font-bold text-red-400">4. SuperBox & &ldquo;Fully Loaded&rdquo; Hardware Scams</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Third-party sellers charge $350+ on eBay or Amazon for cheap $25 Chinese Android boxes preloaded 
                    with pirated apps, promising &ldquo;Free TV Forever&rdquo;. Within a few months, the backend servers 
                    get shuttered by authorities, turning the $350 box into an expensive paperweight.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                The Safe Buyer Checklist
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Always request and test a <strong>24-hour free trial</strong> during peak evening hours or a live game before paying for any service.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Verify that the provider offers an explicit <strong>money-back guarantee policy</strong>.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Check that the provider operates an accessible, responsive 24/7 technical support desk.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">100% Risk-Free Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                At IPTVSubs8K, all orders are protected by a 7-day money-back guarantee with zero recurring contract traps.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Start Free 24h Test Account →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={SCAM_FAQS} />
    </>
  );
}

