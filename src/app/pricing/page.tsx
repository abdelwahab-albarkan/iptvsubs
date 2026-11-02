import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PricingSection } from '@/components/sections/PricingSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ProductPricingJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG, PRICING_PLANS } from '@/lib/constants';
import { Check, ShieldCheck, Zap, HelpCircle, Lock, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Subscription Plans & Pricing (USA 2026)',
  description: 'Compare transparent IPTV subscription plans: 1, 3, 6, 12, and 24 months. Fast setup, multi-connection options, 8K/4K UHD streams, and 7-day money-back guarantee.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/pricing`,
  },
};

const PRICING_FAQS = [
  {
    question: 'Are there any hidden fees or automatic recurring charges?',
    answer: 'No. At IPTVSubs8K, all pricing is 100% transparent and prepaid. We do not automatically bill or lock your credit card into recurring subscriptions without your explicit consent. When your term nears expiration, you will receive a courteous reminder to renew manually.'
  },
  {
    question: 'Can I use one subscription on multiple TVs simultaneously?',
    answer: 'Our standard subscription includes 1 active simultaneous device connection. If you have a multi-television home, you can easily select our 2-connection option during checkout at a discounted rate, or contact our support team to add additional simultaneous streams.'
  },
  {
    question: 'How quickly is my IPTV subscription activated after payment?',
    answer: 'Activation is fully automated. Within 2 to 3 minutes of completing your transaction, your login credentials (M3U URL, Xtream Codes API server address, username, and password) will arrive in your email inbox with setup guides for your device.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major US payment methods including Apple Pay, Visa, MasterCard, American Express, and popular cryptocurrencies (Bitcoin, USDT, Ethereum) for enhanced privacy.'
  },
  {
    question: 'How does the 7-day money-back guarantee work?',
    answer: 'If you experience unresolved technical issues or find that our service does not fulfill our 99.9% uptime commitment, contact our support team within 7 days of purchase for a prompt, courteous full refund.'
  }
];

export default function PricingPage() {
  return (
    <>
      <ProductPricingJsonLd
        name="IPTVSubs8K Subscription Plans"
        description="Official transparent 8K & 4K IPTV subscription packages for US viewers starting at $39.99 with flexible 1-4 account options and a 7-day money-back guarantee."
        minPrice={39.99}
        maxPrice={179.99}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Pricing & Plans', item: '/pricing' }]} />
          
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              IPTV Subscription Plans & Pricing (USA 2026)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Experience the highest quality 8K & 4K streaming at a fraction of traditional cable costs. 
              All plans include 25,000+ live channels, 120,000+ VOD movies, zero contracts, and instant delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards Component */}
      <h2 className="sr-only">Available Subscription Plans & Duration Options</h2>
      <PricingSection showTitle={false} />

      {/* Official Multi-Account Pricing Matrix */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
            Multi-Device Households & Simultaneous Streaming
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Official Multi-Account Pricing Matrix
          </h2>
          <p className="mt-2 text-slate-500 text-sm">
            Save more when subscribing for multiple TVs or family devices under one simple billing period.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 shadow-2xl">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-900 uppercase text-xs font-bold border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4">Number of Accounts</th>
                <th scope="col" className="px-6 py-4 text-center">3 Months</th>
                <th scope="col" className="px-6 py-4 text-center">6 Months</th>
                <th scope="col" className="px-6 py-4 text-center text-[#FF6B00] bg-orange-50">12 Months (Best Value)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border/60">
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan"></span>
                  1 Account (Single Device)
                </td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">$39.99</td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">$56.99</td>
                <td className="px-6 py-4 text-center font-black text-[#FF6B00] bg-orange-50/60 text-lg">$79.99</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan"></span>
                  2 Accounts (Two Devices)
                </td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">$59.99</td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">$84.99</td>
                <td className="px-6 py-4 text-center font-black text-[#FF6B00] bg-orange-50/60 text-lg">$119.99</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan"></span>
                  3 Accounts (Three Devices)
                </td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">$79.99</td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">$109.99</td>
                <td className="px-6 py-4 text-center font-black text-[#FF6B00] bg-orange-50/60 text-lg">$149.99</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan"></span>
                  4 Accounts (Four Devices)
                </td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">$99.99</td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">$134.99</td>
                <td className="px-6 py-4 text-center font-black text-[#FF6B00] bg-orange-50/60 text-lg">$179.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Inclusions Comparison Table */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Plan Inclusions & Technical Capabilities
          </h2>
          <p className="mt-2 text-slate-500 text-sm">
            Every billing term includes full access to our Tier-1 server infrastructure.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white/60">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-900 uppercase text-xs font-bold border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4">Features & Inclusions</th>
                <th scope="col" className="px-6 py-4 text-center">3 Months</th>
                <th scope="col" className="px-6 py-4 text-center">6 Months</th>
                <th scope="col" className="px-6 py-4 text-center text-[#FF6B00] bg-orange-50">12 Months (Best)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border/60">
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-900">Starting Monthly Equivalent (1 Account)</td>
                <td className="px-6 py-4 text-center text-slate-500">$13.33 / mo</td>
                <td className="px-6 py-4 text-center text-slate-500">$9.50 / mo</td>
                <td className="px-6 py-4 text-center font-bold text-[#FF6B00] bg-orange-50/60">$6.66 / mo</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Live Channels (US, UK, CA, Latino)</td>
                <td className="px-6 py-4 text-center">25,000+</td>
                <td className="px-6 py-4 text-center">25,000+</td>
                <td className="px-6 py-4 text-center bg-orange-50/60 font-bold text-slate-900">25,000+</td>
              </tr>
              <tr>
                <td className="px-6 py-4">VOD Movies & TV Shows</td>
                <td className="px-6 py-4 text-center">120,000+</td>
                <td className="px-6 py-4 text-center">120,000+</td>
                <td className="px-6 py-4 text-center bg-orange-50/60 font-bold text-slate-900">120,000+</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Ultra HD 4K & 8K Bitrates</td>
                <td className="px-6 py-4 text-center text-emerald-400 font-bold">✓ Included</td>
                <td className="px-6 py-4 text-center text-emerald-400 font-bold">✓ Included</td>
                <td className="px-6 py-4 text-center text-emerald-600 font-bold bg-orange-50/60">✓ Included</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Anti-Freeze™ 9.2 Server Routing</td>
                <td className="px-6 py-4 text-center text-emerald-400 font-bold">✓ Included</td>
                <td className="px-6 py-4 text-center text-emerald-400 font-bold">✓ Included</td>
                <td className="px-6 py-4 text-center text-emerald-600 font-bold bg-orange-50/60">✓ Priority Routing</td>
              </tr>
              <tr>
                <td className="px-6 py-4">7-Day Electronic Program Guide (EPG)</td>
                <td className="px-6 py-4 text-center text-emerald-400 font-bold">✓ Included</td>
                <td className="px-6 py-4 text-center text-emerald-400 font-bold">✓ Included</td>
                <td className="px-6 py-4 text-center text-emerald-600 font-bold bg-orange-50/60">✓ Included</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Support & Setup Assistance</td>
                <td className="px-6 py-4 text-center">Standard 24/7</td>
                <td className="px-6 py-4 text-center">Priority 24/7</td>
                <td className="px-6 py-4 text-center font-bold text-slate-900 bg-orange-50/60">VIP Concierge Line</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Money-Back Guarantee</td>
                <td className="px-6 py-4 text-center font-bold text-emerald-400">7 Days Full Refund</td>
                <td className="px-6 py-4 text-center font-bold text-emerald-400">7 Days Full Refund</td>
                <td className="px-6 py-4 text-center font-bold text-emerald-600 bg-orange-50/60">7 Days Full Refund</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust & Guarantee Box */}
      <section className="py-12 bg-white/30 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF6B00] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">7-Day Risk-Free Guarantee</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  We guarantee 99.9% uptime and stream stability. If you are not satisfied for any technical reason, we will refund your purchase promptly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-accent-purple shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Instant Automated Setup</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  No waiting around. Credentials and setup instructions are generated automatically and sent via email within minutes of checkout.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Encrypted & Private</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  All checkout requests are protected with 256-bit SSL encryption. We adhere to a strict zero-logging privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <FaqSection items={PRICING_FAQS} />
    </>
  );
}

