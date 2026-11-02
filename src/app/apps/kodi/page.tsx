import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { PlayCircle, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Setup IPTV on Kodi using PVR IPTV Simple Client (2026)',
  description: 'Configure PVR IPTV Simple Client on Kodi 21 Omega. Input your M3U playlist URL, XMLTV EPG guide, and stream high-definition live channels effortlessly.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/apps/kodi`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Open Kodi and Navigate to Add-ons',
    text: 'Launch Kodi 21 Omega or Nexus on your device and select Add-ons from the main menu.'
  },
  {
    name: 'Install PVR IPTV Simple Client',
    text: 'Select Install from repository > PVR clients > PVR IPTV Simple Client, and click Install.'
  },
  {
    name: 'Configure M3U Playlist Location',
    text: 'Click Configure > General, set Location to Remote Path (Internet address), and paste your IPTVSubs8K M3U URL.'
  },
  {
    name: 'Add XMLTV EPG Link and Enable Add-on',
    text: 'Under EPG Settings, paste your XMLTV URL, click OK, and click Enable to populate live TV channels.'
  }
];

const KODI_FAQS = [
  {
    question: 'Is Kodi free and legal to use?',
    answer: 'Yes! Kodi is a free, open-source media player developed by the XBMC Foundation. Using Kodi with an authorized IPTV subscription like IPTVSubs8K via the official PVR IPTV Simple Client is completely legitimate.'
  },
  {
    question: 'Why won’t my channels load in Kodi after configuring PVR Simple Client?',
    answer: 'Ensure you completely restart Kodi after adding the M3U URL so the internal database can cache the playlist. Also, check that your device has an active internet connection.'
  }
];

export default function KodiPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IPTV on Kodi"
        description="Step-by-step tutorial to configure PVR IPTV Simple Client on Kodi for live television and EPG guide streaming."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'IPTV Apps', item: '/apps' },
              { name: 'Kodi PVR Guide', item: '/apps/kodi' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <PlayCircle className="w-3.5 h-3.5" />
              Open Source Media Center
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Setup IPTV on Kodi (PVR IPTV Simple Client)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Kodi is the world’s most versatile open-source home theater platform. 
              Learn how to integrate your IPTVSubs8K M3U playlist and XMLTV guide using 
              the official PVR IPTV Simple Client on Kodi 21 Omega.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step-by-Step Kodi PVR Configuration
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <p>1. Open Kodi and click <strong>Add-ons</strong> from the left sidebar.</p>
                <p>2. Click the open box icon (Add-on Package Installer) in the top left.</p>
                <p>3. Select <strong>Install from repository &gt; PVR clients</strong>.</p>
                <p>4. Scroll down and click <strong>PVR IPTV Simple Client</strong>, then click <strong>Install</strong>.</p>
                <p>5. Open the add-on settings, select <strong>General</strong>, and paste your <strong>M3U Playlist URL</strong>.</p>
                <p>6. Under <strong>EPG Settings</strong>, paste your <strong>XMLTV URL</strong>.</p>
                <p>7. Click <strong>OK</strong>, then restart Kodi. Open the <strong>TV</strong> tab from Kodi&apos;s home screen to start streaming.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/devices/devices-collection.webp"
                  alt="Kodi IPTV PVR Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Get Kodi M3U Credentials</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Test your M3U and XMLTV link in Kodi with our instant 24-hour test account.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h Kodi Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={KODI_FAQS} />
    </>
  );
}

