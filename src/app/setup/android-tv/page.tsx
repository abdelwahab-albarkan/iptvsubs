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
  title: 'How to Setup IPTV on Android TV, Google TV & Android Boxes (2026)',
  description: 'Master Android TV and Google TV IPTV configuration. Full walkthrough for Nvidia Shield Pro, Chromecast with Google TV, and Android boxes with EPG guide setup.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/setup/android-tv`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Open Google Play Store on Android TV',
    text: 'Navigate to the Apps tab on your Android TV, Google TV, or Nvidia Shield, and open the Google Play Store.'
  },
  {
    name: 'Search for TiviMate or IPTV Smarters Pro',
    text: 'Type "TiviMate IPTV Player" or "IPTV Smarters Pro" in the Play Store search bar and click Install.'
  },
  {
    name: 'Add Playlist via Xtream Codes API',
    text: 'Open the app, click "Add Playlist", select "Xtream Codes login", and input your IPTVSubs8K server URL, username, and password.'
  },
  {
    name: 'Configure EPG Guide & AI Upscaling',
    text: 'Enable automated daily EPG updates. On Nvidia Shield, enable AI-Enhanced Upscaling to transform 1080p sports into razor-sharp 4K/8K.'
  }
];

const ANDROID_FAQS = [
  {
    question: 'Why is Android TV considered the best platform for IPTV?',
    answer: 'Android TV and Google TV devices (especially the Nvidia Shield TV Pro) feature native Google Play Store access, unthrottled gigabit Ethernet, powerful hardware decoders, and compatibility with TiviMate—the highest-rated IPTV interface in the world.'
  },
  {
    question: 'Does IPTV work on Chromecast with Google TV (HD & 4K)?',
    answer: 'Yes! Both the HD and 4K Chromecast with Google TV models run Android TV OS natively. You can install TiviMate or IPTV Smarters Pro directly from the Google Play Store in under 2 minutes.'
  }
];

export default function AndroidTvSetupPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IPTV on Android TV and Google TV"
        description="Complete walkthrough to install and configure IPTV on Android TV, Google TV, and Nvidia Shield using TiviMate and IPTV Smarters."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Device Setup', item: '/setup' },
              { name: 'Android TV & Google TV', item: '/setup/android-tv' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              Android TV • Google TV • Nvidia Shield
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Setup IPTV on Android TV & Google TV (2026 Guide)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Unlock the full potential of your Android TV, Sony Bravia, TCL Google TV, Chromecast, 
              or Nvidia Shield. Follow our expert guide to stream 25,000+ live channels with TiviMate 
              and zero buffering.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 1: Install TiviMate IPTV Player from Google Play
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                TiviMate is the gold standard for Android TV. Unlike Firestick where sideloading is required, 
                Android TV allows direct installation from Google Play:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Open the <strong>Google Play Store</strong> on your Android TV or Google TV.</div>
                <div>• Search for <strong>TiviMate IPTV Player</strong>.</div>
                <div>• Click <strong>Install</strong>. Once complete, launch the application.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 2: Add IPTVSubs8K Xtream Codes Playlist
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect your subscription credentials to access all live channels, sports, and movies:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• On the welcome screen, click <strong>Add Playlist</strong>.</div>
                <div>• Choose <strong>Xtream Codes</strong>.</div>
                <div>• Enter the <strong>Server address</strong> (provided in your activation email).</div>
                <div>• Enter your <strong>Username</strong> and <strong>Password</strong>.</div>
                <div>• Check the box for <strong>Include VOD</strong> (Video-on-Demand).</div>
                <div>• Click <strong>Next</strong> and let TiviMate sync channels and TV Guide.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 3: Enable Nvidia Shield AI-Upscaling & Buffer Settings
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you are running an Nvidia Shield TV Pro, configure advanced video processing:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• In Shield settings, set <strong>AI-Enhanced Upscaling</strong> to <strong>Medium</strong> or <strong>High</strong>.</div>
                <div>• Inside TiviMate Settings &gt; Playback, set <strong>Buffer size</strong> to <strong>Medium</strong> or <strong>Large</strong> to eliminate live sports stutter.</div>
                <div>• Set <strong>Audio output</strong> to <strong>Pass-through</strong> for Dolby Digital 5.1 surround sound.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/Android TV.webp"
                  alt="Android TV IPTV Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Get Android TV Credentials</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Test 25,000+ channels in 4K/8K on your Android TV with our instant 24-hour trial.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h Android Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={ANDROID_FAQS} />
    </>
  );
}

