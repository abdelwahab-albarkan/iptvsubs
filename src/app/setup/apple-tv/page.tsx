import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Tv, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Setup IPTV on Apple TV 4K, iPhone & iPad (iOS/tvOS 2026)',
  description: 'Step-by-step tutorial to configure IPTV on Apple TV 4K, iPhone, and iPad using top App Store players like IPTV Smarters, GSE Smart IPTV, and UHF.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/setup/apple-tv`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Open App Store on Apple TV or iOS',
    text: 'Launch the official Apple App Store on your Apple TV 4K, iPhone, or iPad.'
  },
  {
    name: 'Download IPTV Smarters or GSE Smart IPTV',
    text: 'Search for "Smarters Player Lite" or "UHF IPTV Player" and install the app.'
  },
  {
    name: 'Login via Xtream Codes API',
    text: 'Open the app, select Xtream Codes API login, and input your IPTVSubs8K server URL, username, and password.'
  },
  {
    name: 'Enable iCloud Sync & 4K HDR Output',
    text: 'In Apple TV video settings, set Match Dynamic Range & Match Frame Rate to ON for flawless 60FPS sports playback.'
  }
];

const APPLE_FAQS = [
  {
    question: 'Is Apple TV 4K good for IPTV streaming?',
    answer: 'The Apple TV 4K is one of the most fluid, powerful streaming boxes on the market. With the A15 Bionic chip and Gigabit Ethernet, it handles high-bitrate 4K 60FPS feeds and instant channel switching with zero hesitation.'
  },
  {
    question: 'Can I AirPlay IPTV from my iPhone to my television?',
    answer: 'Yes! If you are streaming via IPTV Smarters or GSE Smart IPTV on your iPhone or iPad, you can tap the AirPlay icon to cast the stream directly to any Apple TV or AirPlay 2 compatible Smart TV.'
  }
];

export default function AppleTvSetupPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IPTV on Apple TV and iOS"
        description="Walkthrough to stream IPTV on Apple TV 4K, iPhone, and iPad using official App Store players with 4K HDR output."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Device Setup', item: '/setup' },
              { name: 'Apple TV & iOS Guide', item: '/setup/apple-tv' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              Apple TV 4K • iPhone • iPad • tvOS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Setup IPTV on Apple TV 4K & iOS (2026 Guide)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Experience the ultra-smooth performance of Apple TV 4K and iOS. 
              Learn how to configure top-rated App Store players like Smarters Player Lite and UHF 
              for seamless 8K & 4K live sports and movie streaming.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 1: Install Smarters Player Lite or UHF from the App Store
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Apple requires IPTV apps to comply with App Store review guidelines:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Open the <strong>App Store</strong> on your Apple TV, iPhone, or iPad.</div>
                <div>• Search for <strong>Smarters Player Lite</strong> or <strong>UHF</strong>.</div>
                <div>• Download the app using your Apple ID.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 2: Connect Your IPTVSubs8K Account
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Launch the application and select login with Xtream Codes API:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Enter Account Name: <strong>IPTVSubs8K</strong></div>
                <div>• Enter Username & Password from your subscription or trial email.</div>
                <div>• Enter the Server Portal URL.</div>
                <div>• Click <strong>Add User</strong>. The app will sync your live TV channels and EPG.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/appletv.webp"
                  alt="Apple TV 4K IPTV Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Get Apple TV Credentials</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stream 4K sports on your Apple TV with our instant 24-hour test account.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h Apple Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={APPLE_FAQS} />
    </>
  );
}

