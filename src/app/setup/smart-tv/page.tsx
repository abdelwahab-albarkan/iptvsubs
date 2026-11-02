import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Tv, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Install IPTV on Samsung & LG Smart TVs (Tizen & webOS)',
  description: 'Easily set up IPTV on Samsung Tizen and LG webOS Smart TVs using IBO Player, Smart IPTV, and Nanomid without needing an external streaming stick.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/setup/smart-tv`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Open App Store on Samsung or LG TV',
    text: 'On Samsung TV, open Smart Hub > Samsung Apps. On LG TV, open the LG Content Store or Apps tab.'
  },
  {
    name: 'Download IBO Player or IPTV Smarters',
    text: 'Search for "IBO Player" or "IPTV Smarters Pro" and install the application to your TV.'
  },
  {
    name: 'Find Your Device ID and Device Key',
    text: 'Launch IBO Player on your television. Your Device ID (MAC address) and Device Key will appear directly on screen.'
  },
  {
    name: 'Upload IPTV Playlist Online',
    text: 'From your smartphone or laptop, open iboplayer.com/upload, enter your Device ID & Key, then paste your IPTVSubs8K M3U playlist link.'
  },
  {
    name: 'Reload Channels on Smart TV',
    text: 'Return to your TV, press Reload, and your entire 25,000+ live channel guide and VOD library will appear.'
  }
];

const SMART_TV_FAQS = [
  {
    question: 'Do I need an external Firestick for a Samsung or LG TV?',
    answer: 'No! If your Samsung TV was manufactured after 2017 (Tizen OS 3.0+) or your LG TV runs webOS 3.0+, you can stream directly through built-in smart TV apps like IBO Player, Smart IPTV, or Nanomid with zero extra hardware.'
  },
  {
    question: 'Why did Smart IPTV (SIPTV) disappear from the Samsung App Store in the US?',
    answer: 'Samsung occasionally removes certain apps from US app stores due to regional catalog policies. For this reason, IBO Player and Nanomid Player are the recommended, actively supported solutions on American Samsung and LG televisions.'
  }
];

export default function SmartTvSetupPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IPTV on Samsung and LG Smart TVs"
        description="Comprehensive guide to configure IPTV on Samsung Tizen and LG webOS Smart TVs using IBO Player and MAC playlist upload."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Device Setup', item: '/setup' },
              { name: 'Samsung & LG Smart TV', item: '/setup/smart-tv' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              Samsung Tizen • LG webOS • No External Box Needed
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Install IPTV on Samsung & LG Smart TVs (2026)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Stream live television directly through your Samsung or LG TV remote control. 
              Follow our verified walkthrough using IBO Player and Smart IPTV for clean, fast, 
              and native 4K/8K streaming.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 1: Install IBO Player from Your TV Store
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                IBO Player is currently the highest-performing IPTV client available on native smart TV operating systems:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Turn on your Samsung or LG television and ensure it is connected to the internet.</div>
                <div>• Open the <strong>Samsung Apps</strong> or <strong>LG Content Store</strong>.</div>
                <div>• Type <strong>IBO Player</strong> into the search bar.</div>
                <div>• Click <strong>Install</strong>. Once installed, launch the application.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 2: Note Your Device MAC & Key
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Upon launching IBO Player, the application will display two important credentials:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• <strong>Device ID (MAC Address):</strong> e.g. 00:1a:79:xx:xx:xx</div>
                <div>• <strong>Device Key:</strong> e.g. 123456</div>
                <div>• Leave this screen open on your TV while you proceed to step 3.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 3: Connect Your IPTVSubs8K Playlist
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Use any mobile browser or computer to upload your subscription URL:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Open <strong>https://iboplayer.com/upload</strong> on your smartphone or PC.</div>
                <div>• Type in your <strong>Device ID</strong> and <strong>Device Key</strong> and click Login.</div>
                <div>• Click <strong>+ Add Playlist</strong>.</div>
                <div>• Enter Playlist Name: <strong>IPTVSubs8K</strong>.</div>
                <div>• Paste your <strong>M3U Playlist URL</strong> (sent to your email upon order/trial).</div>
                <div>• Click <strong>Save</strong>.</div>
                <div>• On your TV remote, press <strong>Reload</strong>. Your channels and EPG are now live!</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/devices/frameless-smart-tv.webp"
                  alt="Samsung and LG Smart TV IPTV Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Test on Your Smart TV</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Test 25,000+ live channels on your Samsung or LG TV with our free 24h trial.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h Smart TV Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={SMART_TV_FAQS} />
    </>
  );
}

