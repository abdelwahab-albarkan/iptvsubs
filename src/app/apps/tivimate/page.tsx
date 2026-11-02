import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Star, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TiviMate IPTV Player Review & Premium Setup Walkthrough (2026)',
  description: 'Why TiviMate is the ultimate Android TV & Firestick IPTV player. Full guide on unlocking TiviMate Premium, adding EPG TV guides, and managing multi-playlists.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/apps/tivimate`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Install TiviMate IPTV Player',
    text: 'Install TiviMate from the Google Play Store on Android TV or via Downloader code 272483 on Firestick.'
  },
  {
    name: 'Add IPTVSubs8K Xtream Codes Playlist',
    text: 'Click Add Playlist > Xtream Codes, and input your server URL, username, and password.'
  },
  {
    name: 'Unlock TiviMate Premium via Companion App',
    text: 'Use the TiviMate Companion app on Android (or an Android emulator) to purchase and manage up to 5 device licenses.'
  },
  {
    name: 'Optimize EPG Time Offset & Buffer',
    text: 'Inside Settings > EPG, set update frequency to 12 hours. Inside Playback, set buffer size to Large for zero live sports stutter.'
  }
];

const TIVIMATE_FAQS = [
  {
    question: 'Is TiviMate available for Apple TV or iOS?',
    answer: 'No. TiviMate is exclusively built for Android TV, Google TV, and Amazon Fire OS. For Apple TV, we recommend Smarters Player Lite or UHF Player.'
  },
  {
    question: 'Is TiviMate Premium worth the cost?',
    answer: 'Absolutely. TiviMate Premium unlocks scheduled cloud/local recording, Picture-in-Picture (PiP), multi-view (watch 4 channels simultaneously), custom channel ordering, and multiple playlist support. It provides the closest experience to a high-end $100/mo cable DVR box.'
  }
];

export default function TiviMatePage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup TiviMate IPTV Player"
        description="Comprehensive review and configuration guide for TiviMate IPTV Player on Android TV and Firestick with Premium unlock instructions."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'IPTV Apps', item: '/apps' },
              { name: 'TiviMate Review & Setup', item: '/apps/tivimate' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              Rated 5.0/5.0 • The Gold Standard IPTV Player
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              TiviMate IPTV Player: Review & Setup Walkthrough
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              If you stream on Firestick, Nvidia Shield, or Android TV, TiviMate is the single 
              best player in existence. Discover how its modern TV guide, instant channel changing, 
              and recording features elevate your IPTVSubs8K subscription.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Why TiviMate Outperforms Every Competitor
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                TiviMate was engineered specifically for large-screen television navigation with a remote control:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Sub-Second Channel Switching</div>
                  <div className="text-slate-500">Streams buffer and initiate in less than 500 milliseconds.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Cable-Grade EPG Guide</div>
                  <div className="text-slate-500">Smooth 60FPS TV guide timeline with search and channel favorites.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Multi-View (Up to 9 Screens)</div>
                  <div className="text-slate-500">Watch multiple live games on Shield TV with zero framerate loss.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Scheduled Recording & DVR</div>
                  <div className="text-slate-500">Record live sporting events to internal storage or USB flash drive.</div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step-by-Step TiviMate Setup
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <p>1. Open TiviMate and click <strong>Add Playlist</strong>.</p>
                <p>2. Select <strong>Xtream Codes</strong>.</p>
                <p>3. Input your IPTVSubs8K <strong>Server Address</strong>, <strong>Username</strong>, and <strong>Password</strong>.</p>
                <p>4. Check <strong>Include VOD</strong> and click <strong>Done</strong>.</p>
                <p>5. Navigate to <strong>Settings &gt; Playback</strong> and set <strong>Buffer size to Large</strong> to eliminate any live sports stutter.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/beste-iptv-apps-dashboard.webp"
                  alt="TiviMate IPTV Player Interface"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Experience TiviMate in 4K</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect our 25,000+ channel catalog to TiviMate on your Firestick or Android TV.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h TiviMate Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={TIVIMATE_FAQS} />
    </>
  );
}

