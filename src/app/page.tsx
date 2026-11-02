import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { HomeSeoSection } from '@/components/sections/HomeSeoSection';
import { ChannelsPreview } from '@/components/sections/ChannelsPreview';
import { DeviceGrid } from '@/components/sections/DeviceGrid';
import { HomeTopicDirectory } from '@/components/sections/HomeTopicDirectory';
import { PricingSection } from '@/components/sections/PricingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ProductPricingJsonLd, WebSiteJsonLd, OrganizationJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';
import { Zap, ShieldCheck, ArrowRight, Tv, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best IPTV Service Provider in USA (2026) — 8K & 4K Streaming',
  description: 'Experience IPTVSubs8K: The leading US IPTV provider. Over 25,000 live channels, 120,000+ VODs, local US channels, sports in 4K/8K UHD with 99.9% anti-freeze server uptime.',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <ProductPricingJsonLd
        name="IPTVSubs8K Premium IPTV Subscription"
        description="High-performance 8K & 4K IPTV subscription service for USA viewers with 25,000+ live channels, sports passes, and 99.9% anti-freeze uptime."
        minPrice={39.99}
        maxPrice={179.99}
      />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. PRICING SECTION DIRECTLY BELOW THE HERO */}
      <div className="bg-white">
        <PricingSection showTitle={true} />
      </div>

      {/* 3. CORE FEATURE HIGHLIGHTS */}
      <FeatureGrid />

      {/* 4. EXPANDED MASSIVE SEO EDITORIAL PILLARS (11 PILLARS + CONTACTS) */}
      <HomeSeoSection />

      {/* 5. INTERACTIVE CHANNELS PREVIEW & SEARCH */}
      <ChannelsPreview />

      {/* 6. SUPPORTED DEVICE GRID */}
      <DeviceGrid />

      {/* 7. COMPLETE TOPICAL GUIDES & KNOWLEDGE DIRECTORY HUB (3,200+ GUIDES) */}
      <HomeTopicDirectory />

      {/* 8. CUSTOMER TESTIMONIALS & REVIEWS */}
      <TestimonialsSection />

      {/* 9. EXPANDED LARGE FAQ SECTION WITH COMPLETE FAQ SCHEMA (33 QUESTIONS) */}
      <FaqSection />

      {/* High-Converting Pre-Footer Banner */}
      <section className="py-20 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-500/10 text-[#FF6B00] text-xs font-black uppercase tracking-widest border border-orange-500/30">
                <Zap className="w-4 h-4 fill-[#FF6B00]" />
                Zero Risk • Instant Automated Delivery
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Upgrade Your Streaming to <span className="text-[#FF6B00]">8K Ultra HD</span>?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Join over 65,000 satisfied US households. Get access to 25,000+ live channels, 
                all live sports season passes, and on-demand movies with a 7-day money-back guarantee.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/free-trial"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-white bg-gradient-to-r from-[#FF6B00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-md shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Claim 24-Hour Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-sm sm:text-base"
                >
                  <span>Browse Subscription Plans</span>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-400 flex-wrap">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> No Contracts
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Cancel Anytime
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> 7-Day Refund Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
