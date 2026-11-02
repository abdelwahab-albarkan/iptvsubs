import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { PlayCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'XCIPTV Player Setup Guide — Modern Dual-Player IPTV Interface',
  description: 'Complete tutorial on setting up XCIPTV Player on Android and Firestick with built-in ExoPlayer, VLC engine, backup/restore, and interactive TV guide.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/apps/xciptv`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Download XCIPTV APK or Install from Google Play',
    text: 'Install XCIPTV Player directly from the Google Play Store or use Downloader code on Firestick.'
  },
  {
    name: 'Enter Server Portal URL & Credentials',
    text: 'Input your IPTVSubs8K Xtream Codes Server URL, Username, and Password.'
  },
  {
    name: 'Choose Media Player Engine (ExoPlayer or VLC)',
    text: 'In XCIPTV settings, select built-in ExoPlayer for low latency sports or VLC Player engine for maximum video codec compatibility.'
  },
  {
    name: 'Sync Live Channels and EPG Guide',
    text: 'Click Sign In and allow XCIPTV to parse your channel lineup and electronic program guide.'
  }
];

const XCIPTV_FAQS = [
  {
    question: 'What is the main advantage of XCIPTV Player?',
    answer: 'XCIPTV features two integrated media playback engines: ExoPlayer and VLC Player. If an audio track (such as AC3 or EAC3) or unusual video stream fails in standard mode, you can instantly switch to VLC engine inside the app with one click.'
  },
  {
    question: 'Is XCIPTV Player completely free?',
    answer: 'Yes! The standard version of XCIPTV Player is 100% free with no subscription required from the player developers.'
  }
];

export default function XciptvPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup XCIPTV Player"
        description="Comprehensive tutorial to install and configure XCIPTV Player with dual ExoPlayer and VLC playback engines on Android and Firestick."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'IPTV Apps', item: '/apps' },
              { name: 'XCIPTV Player Guide', item: '/apps/xciptv' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              Dual-Engine IPTV Player
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              XCIPTV Player: Setup & Feature Walkthrough
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              XCIPTV Player combines a clean, modern interface with dual internal playback engines 
              (ExoPlayer + VLC). Discover how to configure it on Android TV and Amazon Firestick 
              for seamless 4K live streaming.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                XCIPTV Player Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Dual Internal Players</div>
                  <div className="text-slate-500">Toggle between ExoPlayer and VLC engines for 100% video/audio playback.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Modern Grid Dashboard</div>
                  <div className="text-slate-500">Card-based home screen displaying Live TV, Movies, Series, and Catch-up.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Automated EPG Sync</div>
                  <div className="text-slate-500">Regular background TV guide updates with search and reminder alerts.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Customizable Themes</div>
                  <div className="text-slate-500">Multiple skin and layout options designed for TV remotes.</div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Configuration Instructions
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <p>1. Open XCIPTV on your device.</p>
                <p>2. Enter your <strong>Server URL</strong> (found in your IPTVSubs8K activation email).</p>
                <p>3. Enter your <strong>Username</strong> and <strong>Password</strong>.</p>
                <p>4. Click <strong>Sign In</strong>. Channels, VOD, and EPG will load automatically.</p>
                <p>5. Navigate to <strong>Settings &gt; Player Settings</strong> to choose your preferred video engine.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/androidtvbox.webp"
                  alt="XCIPTV Player Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Test XCIPTV Today</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect our 25,000+ live channel lineup to XCIPTV with an instant 24h trial.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h XCIPTV Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={XCIPTV_FAQS} />
    </>
  );
}

