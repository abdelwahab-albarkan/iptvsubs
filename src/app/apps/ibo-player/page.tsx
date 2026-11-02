import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { PlayCircle, CheckCircle2, ArrowRight, ShieldCheck, Tv } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IBO Player Setup Guide — Best IPTV App for Samsung & LG Smart TVs',
  description: 'How to install and activate IBO Player on Samsung Tizen and LG webOS. Step-by-step instructions to upload your M3U playlist and EPG via MAC address and Device Key.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/apps/ibo-player`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Download IBO Player on Smart TV',
    text: 'Search for "IBO Player" in the Samsung Smart Hub or LG Content Store and install the app.'
  },
  {
    name: 'Copy Your MAC Address and Device Key',
    text: 'Open the app on your television. Note down the Device ID (MAC) and Device Key.'
  },
  {
    name: 'Visit the IBO Player Upload Portal',
    text: 'Go to iboplayer.com/upload on your phone or PC, enter your credentials, and click Add Playlist.'
  },
  {
    name: 'Paste IPTVSubs8K M3U Link and Save',
    text: 'Paste your M3U playlist URL, save changes, and press Reload on your TV remote.'
  }
];

const IBO_FAQS = [
  {
    question: 'Is IBO Player free on Samsung & LG TVs?',
    answer: 'IBO Player provides a 7-day free trial upon initial download. After 7 days, a one-time lifetime activation fee of approximately €8 ($8.50 USD) is required directly by the IBO developer team.'
  },
  {
    question: 'Does IBO Player support 4K and 8K streams?',
    answer: 'Yes! IBO Player uses the hardware video decoder built directly into Samsung and LG processors, allowing it to render 4K UHD 60FPS streams with negligible CPU overhead.'
  }
];

export default function IboPlayerPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IBO Player"
        description="Complete guide to install, configure, and activate IBO Player on Samsung Tizen and LG webOS Smart TVs."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'IPTV Apps', item: '/apps' },
              { name: 'IBO Player Guide', item: '/apps/ibo-player' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              Top Player for Samsung & LG Smart TVs
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              IBO Player Setup & Activation Guide
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              IBO Player is the premier IPTV app for Samsung Tizen OS and LG webOS. 
              Learn how to connect your IPTVSubs8K playlist via MAC address and Device Key in under 3 minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Why IBO Player is Ideal for Smart TVs
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Smart TV processors have less RAM than dedicated streaming devices. IBO Player is lightweight, 
                loads playlists remotely via cloud portal, and eliminates storage crashes.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Instant remote control response with number keypad support.</div>
                <div>• Automatic channel logo and EPG guide synchronization.</div>
                <div>• Direct hardware decoding for HDR10 and Dolby Vision feeds.</div>
                <div>• Subtitles, audio stream switching, and parental lock features.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step-by-Step Playlist Upload
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <p>1. Open IBO Player on your Samsung or LG TV and write down your <strong>Device ID</strong> and <strong>Device Key</strong>.</p>
                <p>2. On your mobile browser, visit <strong>https://iboplayer.com/upload</strong>.</p>
                <p>3. Enter your Device ID and Key, and click Login.</p>
                <p>4. Click <strong>+ Add Playlist</strong>, name it <strong>IPTVSubs8K</strong>, and paste your M3U link.</p>
                <p>5. Click Save. Press <strong>Reload</strong> on your TV remote to enjoy live TV.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/devices/smart-tv-wall.webp"
                  alt="IBO Player Smart TV Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Test on IBO Player</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Get an M3U playlist link to test on IBO Player right now with zero commitment.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h IBO Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={IBO_FAQS} />
    </>
  );
}

