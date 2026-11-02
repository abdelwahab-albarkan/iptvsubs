import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DeviceGrid } from '@/components/sections/DeviceGrid';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Tv, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Setup & Installation Hub — Complete Device Tutorials (2026)',
  description: 'Step-by-step installation guides for every streaming device. Configure IPTV on Firestick, Android TV, Smart TV (Samsung/LG), Apple TV, PC, and MAG boxes.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/setup`,
  },
};

const SETUP_FAQS = [
  {
    question: 'How long does IPTV installation take on average?',
    answer: 'For most modern streaming devices like Amazon Firestick or Android TV, setup takes between 3 to 5 minutes using popular apps like IPTV Smarters Pro or TiviMate.'
  },
  {
    question: 'Do I need special hardware to watch IPTV?',
    answer: 'No! If you own an Amazon Firestick, Smart TV (Samsung or LG), Android TV, Apple TV, computer, or smartphone, you already have all the hardware needed.'
  },
  {
    question: 'What is the difference between an M3U URL and Xtream Codes API?',
    answer: 'An M3U URL is a direct web link to your channel playlist file. Xtream Codes API uses a server URL, username, and password. Xtream Codes is generally faster to enter, loads faster, and automatically syncs EPG TV guides and VOD categories.'
  }
];

export default function SetupHubPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Device Setup Hub', item: '/setup' }]} />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              Easy Step-by-Step Device Tutorials
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Install & Setup IPTV on Any Device
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Select your streaming device below for a complete, tested walkthrough. 
              Our tutorials guide you through downloading recommended players, configuring login credentials, 
              and optimizing buffer settings for 4K and 8K playback.
            </p>
          </div>
        </div>
      </div>

      <DeviceGrid title="Select Your Device for Step-by-Step Instructions" />

      {/* Pre-installation checklist */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />
            Before You Begin Setup: Checklist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-base">1. Stable Internet Connection</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ensure your streaming device has at least 15 Mbps download speed for 1080p, or 30+ Mbps for 4K/8K. 
                5GHz Wi-Fi or Ethernet cable is strongly recommended.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-base">2. Active IPTV Credentials</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                You will need your server URL, username, and password (or M3U playlist link). 
                If you don&apos;t have credentials yet, grab our <Link href="/free-trial" className="text-[#FF6B00] underline">instant 24h free trial</Link>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-base">3. Compatible IPTV Player App</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Download a proven media player for your OS: IPTV Smarters Pro, TiviMate, IBO Player, or XCIPTV. 
                Our guides include direct download links.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={SETUP_FAQS} />
    </>
  );
}

