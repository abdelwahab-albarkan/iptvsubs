import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Radio, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Use IPTV on Roku TV & Roku Streaming Stick (2026 Guide)',
  description: 'Realistic, honest guide on Roku TV limitations and verified workarounds for streaming IPTV via screen mirroring, Cast Web Video, and external media players.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/setup/roku`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Understand Roku Ecosystem Limitations',
    text: 'Roku OS is a closed proprietary platform that bans sideloading and does not support APK files or native Xtream Codes players like TiviMate.'
  },
  {
    name: 'Enable Screen Mirroring on Roku TV',
    text: 'On your Roku remote, go to Settings > System > Screen Mirroring, and set Screen Mirroring Mode to "Prompt" or "Always Allow". For Apple users, enable Apple AirPlay and HomeKit.'
  },
  {
    name: 'Cast from Phone via Cast Web Video or AirPlay',
    text: 'Install IPTV Smarters or Cast Web Video on your smartphone, open your IPTV stream, tap the Cast / AirPlay icon, and select your Roku TV.'
  },
  {
    name: 'Recommended Long-Term Fix: Add a $25 Firestick',
    text: 'For the smoothest daily experience with remote control EPG navigation and zero lag, plug a Firestick 4K or Chromecast with Google TV into an open HDMI port on your Roku TV.'
  }
];

const ROKU_FAQS = [
  {
    question: 'Can you download IPTV Smarters Pro directly onto Roku?',
    answer: 'No. While older developer mode tricks existed in previous years, Roku actively removes IPTV apps from their Channel Store. Any website claiming you can install native APKs on Roku is misinformed. Sideloading is fundamentally unsupported on Roku OS.'
  },
  {
    question: 'What is the easiest way to watch IPTV on a Roku TV?',
    answer: 'The simplest workaround is casting from your smartphone via AirPlay (iPhone/iPad) or Smart View/Chromecast (Android). However, over 90% of our US subscribers who own a Roku TV simply plug an Amazon Firestick 4K into an HDMI port to enjoy native remote control navigation and TiviMate.'
  }
];

export default function RokuSetupPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Stream IPTV on Roku TV"
        description="Honest guide explaining Roku OS sideloading restrictions and verified casting and HDMI workarounds for IPTV playback."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Device Setup', item: '/setup' },
              { name: 'Roku TV Guide', item: '/setup/roku' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-accent-amber text-xs font-bold uppercase tracking-wider mb-3">
              <Radio className="w-3.5 h-3.5" />
              Roku TV • Streaming Stick • Honest Buyer Guide
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Use IPTV on Roku TV (The Truth & Workarounds)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              If you own a TCL Roku TV, Hisense Roku TV, or Roku Streaming Stick, you may have found 
              that standard IPTV players cannot be installed directly. Here is the verified truth 
              and the two tested ways to stream our 25,000+ channels on your Roku screen.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            {/* Critical honesty callout */}
            <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-600/30 space-y-3">
              <div className="flex items-center gap-2 text-accent-amber font-bold text-base">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Why Most &ldquo;Roku IPTV Tutorials&rdquo; Online Don&apos;t Work</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Many low-quality websites claim you can download Android APKs or sideload IPTV Smarters 
                onto Roku. <strong>This is technically impossible.</strong> Roku does not run Android; 
                it runs proprietary Roku OS with custom BrightScript code. Roku actively purges IPTV channels 
                from its store. Do not get scammed by services that promise a &ldquo;native Roku app&rdquo;.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Workaround 1: Cast via Apple AirPlay or Android Screen Mirroring
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you have an iPhone, iPad, or Android smartphone, you can cast your stream wirelessly to Roku:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• On your Roku TV, go to <strong>Settings &gt; Apple AirPlay and HomeKit</strong> and turn AirPlay <strong>ON</strong>.</div>
                <div>• If using Android, go to <strong>Settings &gt; System &gt; Screen Mirroring</strong> and set mode to <strong>Always Allow</strong>.</div>
                <div>• Install <strong>IPTV Smarters Pro</strong> on your smartphone.</div>
                <div>• Start any live channel, tap the <strong>AirPlay / Cast</strong> icon, and choose your Roku TV.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Workaround 2: Plug a $25 Firestick into Your Roku TV (Best Solution)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                This is the solution recommended by 99% of US cord-cutters:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Plug an <strong>Amazon Fire TV Stick</strong> into HDMI 1 or HDMI 2 on the back of your Roku TV.</div>
                <div>• Switch your Roku input to HDMI.</div>
                <div>• Follow our <Link href="/setup/firestick" className="text-[#FF6B00] underline">Firestick Setup Guide</Link> to install TiviMate or IPTV Smarters Pro.</div>
                <div>• You now have a complete, native television experience with full remote control navigation, fast EPG, and 4K 60FPS playback.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/devices/streaming-stick-tv.webp"
                  alt="Roku TV IPTV Casting Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Test Our 24h Free Trial</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Test casting to your Roku TV or prepare your Firestick setup with our free test account.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h Trial Account →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={ROKU_FAQS} />
    </>
  );
}

