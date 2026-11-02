import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { CheckCircle2, Tv, ArrowRight, ShieldCheck, Download, Settings, PlayCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Install & Setup IPTV on Amazon Firestick / Fire TV (2026)',
  description: 'Comprehensive 2026 guide to installing IPTV on Amazon Firestick 4K Max and Fire TV Cube. Learn how to sideload IPTV Smarters Pro and TiviMate in under 5 minutes.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/setup/firestick`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Enable Unknown Apps on Firestick',
    text: 'Go to Firestick Settings > My Fire TV > Developer Options, and turn ON "Install unknown apps" or "Apps from Unknown Sources". If Developer Options is hidden, click Firestick About 7 times.'
  },
  {
    name: 'Install the Downloader App',
    text: 'From the Firestick home screen, click Find > Search, type "Downloader", select the orange Downloader app icon, and click Download.'
  },
  {
    name: 'Download IPTV Smarters Pro or TiviMate',
    text: 'Open Downloader, enter the quick code for IPTV Smarters Pro (or your preferred player APK URL), and click Go to download and install the app.'
  },
  {
    name: 'Enter IPTVSubs8K Xtream Codes Credentials',
    text: 'Launch the IPTV app, select "Login with Xtream Codes API", and type in Any Name, your Username, Password, and Server Portal URL sent to your email.'
  },
  {
    name: 'Load Channels & EPG TV Guide',
    text: 'Click Add User. The app will sync all 25,000+ live channels, 120,000+ VOD movies, and the 7-day EPG program guide in seconds.'
  }
];

const FIRESTICK_FAQS = [
  {
    question: 'Which Firestick model is best for 4K and 8K IPTV streaming?',
    answer: 'The Amazon Fire TV Stick 4K Max (2nd Gen) and the Fire TV Cube (3rd Gen) are the best choices. Both feature powerful quad-core/octa-core processors, Wi-Fi 6E support, and hardware AV1/HEVC decoding for smooth 60FPS playback.'
  },
  {
    question: 'Why is Developer Options missing on my new Firestick?',
    answer: 'Amazon hid Developer Options in recent Fire OS updates. To reveal it, navigate to Settings > My Fire TV > About, highlight your Fire TV Stick name, and click the center select button on your remote 7 times until you see the notification "No need, you are already a developer".'
  },
  {
    question: 'Can I use TiviMate on Firestick?',
    answer: 'Yes! TiviMate can be sideloaded directly onto Firestick via Downloader. It offers the fastest EPG electronic program guide and smooth navigation.'
  }
];

export default function FirestickSetupPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IPTV on Amazon Firestick"
        description="Step-by-step tutorial to install and configure IPTV on Firestick 4K Max and Fire TV Cube using Downloader and IPTV Smarters Pro."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Device Setup', item: '/setup' },
              { name: 'Amazon Firestick Guide', item: '/setup/firestick' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              Amazon Fire TV • 2026 Updated Tutorial
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Install & Setup IPTV on Amazon Firestick (2026 Guide)
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              The Amazon Fire TV Stick is the #1 streaming device in the United States. Follow our 
              step-by-step walkthrough to install IPTV Smarters Pro or TiviMate and unlock 
              over 25,000 live channels and 4K sports in less than 5 minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Tutorial Steps */}
          <div className="lg:col-span-8 space-y-10">
            {/* Step 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-lg">
                  1
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Enable &ldquo;Install Unknown Apps&rdquo; on Firestick
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Because third-party IPTV players like IPTV Smarters Pro and TiviMate are sideloaded, 
                you must give Fire OS permission to install applications outside the Amazon Appstore.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Go to your Firestick <strong>Settings (Gear icon)</strong> on the far right.</div>
                <div>• Select <strong>My Fire TV</strong> (or Device & Software).</div>
                <div>• Click <strong>Developer Options</strong>.</div>
                <div className="text-slate-500 italic">
                  * Note: If Developer Options is missing, click <strong>About</strong>, highlight your Fire TV name, and press the Select button <strong>7 times</strong>.
                </div>
                <div>• Select <strong>Install Unknown Apps</strong> and toggle Downloader to <strong>ON</strong>.</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-lg">
                  2
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Install the Downloader App
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Downloader by AFTVnews is the official and safest browser utility to download APK installer files directly onto Fire TV.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• On your home screen, click <strong>Find</strong>, then <strong>Search</strong>.</div>
                <div>• Type <strong>Downloader</strong> in the search field.</div>
                <div>• Select the orange Downloader icon and click <strong>Get / Download</strong>.</div>
                <div>• Launch Downloader and click <strong>Allow</strong> when prompted for file access permissions.</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-lg">
                  3
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Download & Install IPTV Smarters Pro
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Now use Downloader to pull down the official IPTV Smarters Pro APK file.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• In Downloader&apos;s URL bar, type in the direct code: <span className="text-[#FF6B00] font-mono font-bold">250931</span> (or visit iptvsmarters.com).</div>
                <div>• Click <strong>Go</strong>. The APK will begin downloading automatically.</div>
                <div>• When download finishes, click <strong>Install</strong>, then click <strong>Done</strong>.</div>
                <div>• Click <strong>Delete</strong> on the temporary APK file to save Firestick internal storage space.</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-lg">
                  4
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Login with Xtream Codes API
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Open IPTV Smarters Pro from your Your Apps & Games row. Accept the terms of service and select <strong>Login with Xtream Codes API</strong>.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• <strong>Any Name:</strong> IPTVSubs8K</div>
                <div>• <strong>Username:</strong> (Found in your activation email)</div>
                <div>• <strong>Password:</strong> (Found in your activation email)</div>
                <div>• <strong>Server URL:</strong> http://line.iptvsubs8k.com:8080 (or your specific server portal)</div>
                <div>• Click <strong>ADD USER</strong> and wait 15 seconds for channels and movies to sync.</div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-lg">
                  5
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Optimize Buffer & Stream Settings for Zero Lag
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To guarantee smooth 4K/8K sports streaming during peak evening hours:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Inside IPTV Smarters Pro, click <strong>Settings (Gear icon)</strong>.</div>
                <div>• Select <strong>Player Selection</strong>: Set Live TV to <strong>Hardware Decoder</strong>.</div>
                <div>• Select <strong>Stream Format</strong>: Choose <strong>MPEGTS</strong> or <strong>HLS</strong>.</div>
                <div>• Go to <strong>EPG Timeline</strong> and click <strong>Install EPG</strong> to populate 7 days of channel programming.</div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/firestick.webp"
                  alt="Amazon Firestick 4K IPTV Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Need Credentials for Firestick?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Test 25,000+ live channels and 4K sports on your Firestick right now with zero commitment.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Claim Free 24h Firestick Trial →
              </Link>
            </div>

            {/* Related guides */}
            <div className="p-6 rounded-2xl bg-white/50 border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-slate-900">Related Setup Guides</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <Link href="/apps/tivimate" className="hover:text-[#FF6B00]">
                    → How to Setup TiviMate on Firestick
                  </Link>
                </li>
                <li>
                  <Link href="/troubleshooting/iptv-buffering" className="hover:text-[#FF6B00]">
                    → Stop Firestick IPTV Buffering & Freezing
                  </Link>
                </li>
                <li>
                  <Link href="/troubleshooting/vpn-isp-throttling" className="hover:text-[#FF6B00]">
                    → Best VPN for Firestick IPTV in USA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={FIRESTICK_FAQS} />
    </>
  );
}

