import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { PlayCircle, CheckCircle2, ArrowRight, ShieldCheck, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Smarters Pro Setup & Download Guide for Firestick & Android',
  description: 'Download, install, and configure IPTV Smarters Pro with Xtream Codes API or M3U playlist. Discover multi-screen, EPG, parental controls, and catch-up TV features.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/apps/iptv-smarters-pro`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Download IPTV Smarters Pro APK',
    text: 'Use Downloader code 250931 on Firestick or install Smarters Player Lite from Google Play / Apple App Store.'
  },
  {
    name: 'Choose Xtream Codes API Login',
    text: 'Select "Login with Xtream Codes API" for the fastest configuration and automated EPG guide sync.'
  },
  {
    name: 'Enter IPTVSubs8K Account Credentials',
    text: 'Type Any Name "IPTVSubs8K", your Username, Password, and Server Portal URL.'
  },
  {
    name: 'Enable Multi-Screen & Hardware Acceleration',
    text: 'Inside Settings > Player Selection, select Hardware Decoder to unlock 4K 60FPS sports playback.'
  }
];

const SMARTERS_FAQS = [
  {
    question: 'Is IPTV Smarters Pro safe to use?',
    answer: 'Yes! IPTV Smarters Pro is a legitimate media player app that contains no copyrighted media itself. It acts purely as a player interface for your authorized IPTV subscription playlist.'
  },
  {
    question: 'How do I use Multi-Screen mode in IPTV Smarters Pro?',
    answer: 'From the main dashboard, click the Multi-Screen icon. Choose between 2-screen, 3-screen, or 4-screen grid layouts. Click the "+" symbol in each window to assign different live channels (e.g., watch multiple NFL or soccer games at the exact same time).'
  }
];

export default function IptvSmartersProPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IPTV Smarters Pro"
        description="Comprehensive guide to download, install, and configure IPTV Smarters Pro on Firestick, Android, and iOS."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'IPTV Apps', item: '/apps' },
              { name: 'IPTV Smarters Pro Guide', item: '/apps/iptv-smarters-pro' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <PlayCircle className="w-3.5 h-3.5" />
              World&apos;s #1 IPTV Application
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              IPTV Smarters Pro: Complete Download & Setup Guide
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              IPTV Smarters Pro is the global standard for streaming live channels, VOD series, 
              and Catch-up TV. Learn how to install and configure it on Amazon Firestick, Android TV, 
              Apple iOS, and Windows in 3 easy steps.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Key Features of IPTV Smarters Pro
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Xtream Codes API & M3U</div>
                  <div className="text-slate-500">Supports direct API login with automated category updates.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Multi-Screen Viewing</div>
                  <div className="text-slate-500">Stream up to 4 live sports games simultaneously in a split grid.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Electronic Program Guide (EPG)</div>
                  <div className="text-slate-500">Integrated TV timeline with program descriptions and catch-up.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Parental Controls</div>
                  <div className="text-slate-500">Lock adult or sensitive channel categories behind a custom PIN.</div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How to Download & Configure IPTV Smarters
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <p>
                  <strong>On Amazon Firestick:</strong> Open Downloader, enter quick code <strong>250931</strong>, 
                  and install the official APK.
                </p>
                <p>
                  <strong>On Android TV / Google TV:</strong> Open Google Play, search for <strong>IPTV Smarters Pro</strong>, 
                  and click Install.
                </p>
                <p>
                  <strong>On Apple TV / iPhone:</strong> Search the App Store for <strong>Smarters Player Lite</strong>.
                </p>
                <p>
                  Once installed, click <strong>Login with Xtream Codes API</strong> and enter your IPTVSubs8K login credentials.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/apps-dashboard.webp"
                  alt="IPTV Smarters Pro Dashboard"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Test IPTV Smarters Today</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect our 25,000+ channel catalog to IPTV Smarters Pro with a free 24-hour trial.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h Smarters Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={SMARTERS_FAQS} />
    </>
  );
}

