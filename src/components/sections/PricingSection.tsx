'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Zap, ShieldCheck, Flame, ArrowRight, Gift } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';

export function PricingSection({ showTitle = true }: { showTitle?: boolean }) {
  const [selectedPlan, setSelectedPlan] = useState<string>('plan-12-months');
  const [connections, setConnections] = useState<number>(1);

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan.id);
    trackEvent('initiate_checkout', {
      planId: plan.id,
      planName: plan.name,
      price: plan.price,
      connections: connections
    });
  };

  return (
    <section id="pricing" className="pt-12 pb-20 lg:pt-16 lg:pb-24 relative bg-gradient-to-b from-orange-50/40 via-white to-slate-50/80 border-b border-slate-200/70 scroll-mt-28 overflow-hidden">
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white ring-1 ring-orange-200 text-[#EA580C] text-[11px] font-bold uppercase tracking-[0.14em] mb-5 shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-[#FF6B00] text-[#FF6B00]" />
              Transparent US Pricing • Zero Hidden Fees
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Choose Your <span className="text-gradient-orange">8K & 4K IPTV</span> Plan
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Unlock over 25,000 live channels, 120,000+ movies, NFL Sunday Ticket, NBA, PPV events,
              and 99.9% anti-freeze stability. Instant automated activation with a 7-day money-back guarantee.
            </p>

            {/* Connection / Account Switcher Segmented Control */}
            <div className="mt-9 flex flex-col items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Select Number of Accounts / Simultaneous Devices:
              </span>
              <div className="inline-flex items-center p-1 bg-slate-100/90 rounded-2xl ring-1 ring-slate-200/80" role="group" aria-label="Number of accounts">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setConnections(num)}
                    aria-pressed={connections === num}
                    className={`whitespace-nowrap px-3 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      connections === num
                        ? 'bg-white text-slate-900 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.18)] ring-1 ring-slate-200'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {num} {num === 1 ? 'Account' : 'Accounts'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const currentPrice = plan.pricesByAccounts ? plan.pricesByAccounts[connections] : plan.price;
            const calculatedPrice = currentPrice.toFixed(2);
            const calculatedMonthly = (currentPrice / plan.months).toFixed(2);
            const dark = plan.isBestValue;

            return (
              <div
                key={plan.id}
                className={`relative rounded-[1.75rem] flex flex-col justify-between transition-all duration-300 p-7 sm:p-8 ${
                  dark
                    ? 'bg-stage text-white ring-1 ring-[#FF6B00]/40 shadow-[0_30px_60px_-20px_rgba(255,107,0,0.45)] md:-translate-y-3'
                    : 'bg-white ring-1 ring-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1'
                }`}
              >
                {/* Badges */}
                {plan.isBestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] text-white text-[11px] font-bold rounded-full uppercase tracking-[0.14em] shadow-[0_8px_20px_-6px_rgba(255,107,0,0.7)] flex items-center gap-1.5 whitespace-nowrap">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    Best Value
                  </div>
                )}
                {plan.isPopular && !plan.isBestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-full uppercase tracking-[0.14em] shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className={`pb-6 border-b ${dark ? 'border-white/10' : 'border-slate-100'}`}>
                    <h3 className={`text-base font-bold ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.duration}
                    </h3>
                    <div className="mt-3 flex items-start gap-1">
                      <span className={`text-xl font-bold mt-1.5 ${dark ? 'text-slate-400' : 'text-slate-400'}`}>$</span>
                      <span className={`font-display text-5xl sm:text-[56px] leading-none font-extrabold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                        {calculatedPrice}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      <span className={`text-sm font-semibold ${dark ? 'text-[#FF8A3D]' : 'text-[#EA580C]'}`}>
                        ${calculatedMonthly} / month
                      </span>
                      {plan.savingsPercent > 0 && (
                        <span className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-bold ${dark ? 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30' : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'}`}>
                          Save {plan.savingsPercent}%
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature list */}
                  <ul className={`mt-6 space-y-3.5 text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {[
                      `${connections} Active Connection${connections > 1 ? 's' : ''}`,
                      '25,000+ Live HD/4K/8K Channels',
                      '120,000+ VOD Movies & Series',
                      'US Sports, NFL, NBA & PPV Events',
                      'Anti-Freeze™ 9.2 Stability',
                      '7-Day Electronic TV Guide (EPG)',
                      'Firestick, Smart TV, Android & iOS',
                    ].map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 ${i === 0 ? (dark ? 'font-semibold text-white' : 'font-semibold text-slate-900') : ''}`}>
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-px ${dark ? 'bg-[#FF6B00] text-white' : 'bg-orange-100 text-[#EA580C]'}`}>
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA button */}
                <div className="mt-8">
                  <Link
                    href={`/free-trial?plan=${plan.id}&connections=${connections}`}
                    onClick={() => handlePlanSelect(plan)}
                    className={`group w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      dark
                        ? 'bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_28px_-8px_rgba(255,107,0,0.7)] hover:-translate-y-0.5'
                        : isSelected
                        ? 'bg-[#FF6B00] text-white hover:bg-[#EA580C]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Subscribe Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <p className={`text-xs text-center font-medium mt-3 flex items-center justify-center gap-1.5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <ShieldCheck className={`w-3.5 h-3.5 ${dark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    7-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free trial lead callout below pricing */}
        <div className="mt-14 max-w-6xl mx-auto p-6 sm:p-8 rounded-[1.75rem] border-gradient shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl icon-tile flex items-center justify-center shrink-0">
              <Gift className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#EA580C] uppercase tracking-[0.14em]">
                Want to test before purchasing?
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Claim Your 24-Hour Free Trial Today
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Experience the 8K picture quality and anti-freeze server speeds on your own TV.
                No credit card required. Instant automated setup code.
              </p>
            </div>
          </div>
          <Link
            href="/free-trial"
            onClick={() => trackEvent('cta_click', { target: 'pricing_banner_trial' })}
            className="group px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>Start Free 24h Test</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A3D] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
