import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Zap, AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Wifi, Lock, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Stop IPTV Buffering & Freezing: 7 Proven Fixes (2026)',
  description: 'Eliminate stutter and freezing in your IPTV stream. Learn how to optimize buffer cache, bypass ISP bandwidth throttling with VPN, and improve Wi-Fi connectivity.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/troubleshooting/iptv-buffering`,
  },
};

const BUFFERING_FAQS = [
  {
    question: 'Why does my IPTV only buffer during NFL or UFC live events?',
    answer: 'If buffering only occurs during major live sporting events while working fine during standard weekday shows, the cause is almost never your device—it is Internet Service Provider (ISP) traffic shaping. US ISPs identify sudden spikes in streaming traffic and artificially throttle your connection. Using a VPN disguises your traffic and eliminates this targeted throttling.'
  },
  {
    question: 'What is the optimal buffer size setting in TiviMate or IPTV Smarters?',
    answer: 'We recommend setting your buffer size to "Large" or "Very Large" in high-speed connections (50+ Mbps). This allows your device to preload 5 to 10 seconds of video chunks in memory, absorbing any momentary network packet jitter without freezing playback.'
  }
];

export default function IptvBufferingPage() {
  return (
    <>
      <ArticleJsonLd
        title="How to Stop IPTV Buffering & Freezing: 7 Proven Fixes"
        description="Comprehensive troubleshooting guide to eliminate IPTV stutter, optimize player buffer cache, and bypass ISP bandwidth throttling."
        url={`${SITE_CONFIG.url}/troubleshooting/iptv-buffering`}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Troubleshooting Hub', item: '/troubleshooting' },
              { name: 'Fix IPTV Buffering', item: '/troubleshooting/iptv-buffering' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              Engineering Guide • Zero Buffering Optimization
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Stop IPTV Buffering & Freezing: 7 Proven Fixes
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Nothing ruins game night like a spinning wheel or frozen screen right as the winning play unfolds. 
              Follow our engineering checklist to identify the exact cause and eliminate IPTV lag permanently.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* Fix 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-sm">
                  1
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Increase Buffer Size in Player Settings
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                By default, most player apps use a 1-second buffer. Any momentary internet dip causes playback to pause.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
                <div>• In <strong>TiviMate:</strong> Settings &gt; Playback &gt; Buffer size &gt; Select <strong>Large</strong>.</div>
                <div>• In <strong>IPTV Smarters Pro:</strong> Settings &gt; Player Selection &gt; Set Live TV to <strong>Hardware Decoder</strong>.</div>
                <div>• In <strong>XCIPTV:</strong> Settings &gt; Player &gt; Select <strong>ExoPlayer with Extra Buffer</strong>.</div>
              </div>
            </div>

            {/* Fix 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-sm">
                  2
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Bypass US ISP Bandwidth Throttling with a Fast VPN
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                US providers like Comcast, AT&T, Charter Spectrum, and Cox actively inspect data packets. 
                When they detect steady video consumption, they throttle transfer rates down to 5–10 Mbps.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
                <div>• Install a reputable VPN app (such as ExpressVPN, NordVPN, or Surfshark) directly on your Firestick or Android TV.</div>
                <div>• Select the <strong>WireGuard</strong> or <strong>Lightway</strong> protocol for minimum latency.</div>
                <div>• Connect to a server in a nearby US city (e.g., Dallas, Chicago, or Atlanta).</div>
              </div>
            </div>

            {/* Fix 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-sm">
                  3
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Switch from 2.4GHz Wi-Fi to 5GHz or Hardwire Ethernet
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                2.4GHz Wi-Fi suffers heavy interference from baby monitors, microwaves, and neighbor routers. 
                5GHz Wi-Fi offers up to 5x higher bandwidth and lower jitter.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
                <div>• Open your streaming device Wi-Fi settings and choose your network&apos;s &ldquo;5G&rdquo; SSID.</div>
                <div>• If possible, use an Ethernet cable or Amazon Ethernet Adapter for zero packet loss.</div>
              </div>
            </div>

            {/* Fix 4 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-sm">
                  4
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Clear Firestick / TV App Cache
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Accumulated cached thumbnails and channel data can fill your device RAM, causing micro-stutters:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
                <div>• Go to Firestick <strong>Settings &gt; Applications &gt; Manage Installed Applications</strong>.</div>
                <div>• Click your IPTV app and choose <strong>Clear Cache</strong>.</div>
                <div>• Restart your Firestick by holding <strong>Select + Play/Pause</strong> for 5 seconds.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/anti-freeze-tech.webp"
                  alt="IPTV Anti-Freeze Server Routing"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Experience Zero Freezing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Test our 99.9% uptime 10Gbps Anti-Freeze servers on your own television for 24 hours.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free Anti-Freeze Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={BUFFERING_FAQS} />
    </>
  );
}

