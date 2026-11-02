import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Laptop, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Watch IPTV on Windows PC & Mac (VLC & Desktop Apps)',
  description: 'Complete guide for streaming IPTV on Windows 10/11 PCs and Apple macOS computers via VLC Media Player, M3U streams, and native desktop clients.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/setup/pc-mac`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Download VLC Media Player',
    text: 'Download and install the official VLC Media Player from videolan.org on your Windows PC or Mac.'
  },
  {
    name: 'Open Network Stream in VLC',
    text: 'Click Media in the top menu (or File on Mac) and select "Open Network Stream" (Ctrl+N or Cmd+N).'
  },
  {
    name: 'Paste Your M3U Playlist Link',
    text: 'Paste your complete IPTVSubs8K M3U playlist link in the URL box and click Play.'
  },
  {
    name: 'Browse Channels via Playlist Window',
    text: 'Press Ctrl+L (Cmd+Option+P on Mac) to view the complete categorized channel playlist and start streaming.'
  }
];

const PC_FAQS = [
  {
    question: 'Can I use IPTV Smarters Pro natively on Windows 10/11?',
    answer: 'Yes! IPTV Smarters offers an official Windows desktop application (.exe) that provides the same beautiful TV interface, category sorting, and EPG guide as television apps.'
  },
  {
    question: 'How do I stop VLC from skipping through channels rapidly?',
    answer: 'In VLC settings, click Tools > Preferences > All (at the bottom) > Playlist, and uncheck "Play and stop" or toggle the loop button on the main player bar.'
  }
];

export default function PcMacSetupPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IPTV on Windows PC and Mac"
        description="Learn how to stream IPTV on Windows and macOS computers using VLC Media Player and dedicated desktop clients."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Device Setup', item: '/setup' },
              { name: 'Windows PC & Mac', item: '/setup/pc-mac' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Laptop className="w-3.5 h-3.5" />
              Windows 10/11 • macOS • VLC Player
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Watch IPTV on Windows PC & Mac (2026 Guide)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Watch your favorite live sports, channels, and movies on your desktop or laptop. 
              Step-by-step tutorial using open-source VLC Media Player and native desktop applications.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Method 1: Streaming via VLC Media Player (Fastest)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                VLC is free, open-source, and supports all major H.264/H.265 video codecs:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Install VLC from the official website: <strong>https://www.videolan.org</strong>.</div>
                <div>• Open VLC and press <strong>Ctrl + N</strong> (Windows) or <strong>Cmd + N</strong> (Mac) to open the Network tab.</div>
                <div>• Paste your <strong>M3U playlist link</strong> from your IPTVSubs8K activation email.</div>
                <div>• Click <strong>Play</strong>.</div>
                <div>• Open the playlist window (<strong>Ctrl + L</strong>) to view all channel folders.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Method 2: IPTV Smarters Pro Desktop Client
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For a true TV-style dashboard with EPG guides and VOD search on your computer:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Download the official <strong>IPTV Smarters Pro Windows .exe</strong> or <strong>Mac .dmg</strong>.</div>
                <div>• Install and launch the application.</div>
                <div>• Login with <strong>Xtream Codes API</strong> using your Server URL, Username, and Password.</div>
                <div>• Enjoy a dedicated fullscreen interface with multi-screen grid viewing.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/devices/tv-tablet-phone.webp"
                  alt="PC and Mac IPTV Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Test on PC or Mac</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Claim our free 24-hour trial and start streaming on your laptop in 2 minutes.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h Desktop Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={PC_FAQS} />
    </>
  );
}

