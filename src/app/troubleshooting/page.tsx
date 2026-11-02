import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG, TROUBLESHOOTING_GUIDES } from '@/lib/constants';
import { AlertTriangle, Zap, ShieldCheck, ArrowRight, CheckCircle2, Wrench, RefreshCw, Wifi, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Troubleshooting Hub — Fix Buffering, Freezing & Connection Issues',
  description: 'Expert diagnostics and proven solutions for IPTV streaming issues: stop buffering, resolve ISP throttling, fix EPG errors, and optimize cache settings.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/troubleshooting`,
  },
};

const TROUBLE_FAQS = [
  {
    question: 'Why does my IPTV freeze during live sports on weekend evenings?',
    answer: 'Weekend evening freezing is almost always caused by ISP bandwidth throttling. Major US internet providers (Comcast Xfinity, Spectrum, Cox, AT&T) detect continuous UDP video traffic and intentionally throttle your connection speed. Connecting through a fast WireGuard VPN bypasses ISP deep-packet inspection and restores full bandwidth.'
  },
  {
    question: 'How do I clear the cache on Firestick to fix IPTV buffering?',
    answer: 'On your Firestick, navigate to Settings > Applications > Manage Installed Applications. Select your IPTV app (e.g., TiviMate or IPTV Smarters Pro), and click "Clear Cache" (do not click "Clear Data" unless you want to re-enter your login credentials).'
  },
  {
    question: 'What should I do if I get an "Authorization Failed" error?',
    answer: 'An authorization failed error usually indicates a typographical error in your username, password, or server URL, or that your active term has expired. Double-check for extra spaces before or after characters, or contact our 24/7 support team to verify account status.'
  }
];

export default function TroubleshootingHubPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Troubleshooting Hub', item: '/troubleshooting' }]} />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-accent-amber text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              Technical Diagnostic & Repair Center
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Fix IPTV Buffering, Freezing & Connection Errors
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Encountering stream stutter, black screens, or authorization issues? 
              Use our verified engineering diagnostic checklist to restore crystal-clear 
              4K and 8K playback in under 3 minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rapid 4-Step Diagnostic Matrix */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm mb-16 shadow-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2.5">
            <Zap className="w-6 h-6 text-[#FF6B00]" />
            Instant 60-Second Diagnostic Checklist
          </h2>
          <p className="text-sm text-slate-500 mb-8">
            Perform these 4 rapid checks first. They resolve over 92% of common streaming playback issues:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF6B00] font-bold">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">1. Check 5GHz Wi-Fi</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect your streaming device to 5GHz Wi-Fi rather than congested 2.4GHz. 
                Run a speed test inside the device to verify 30+ Mbps.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-accent-purple font-bold">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">2. Clear App Cache</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear temporary playback cache in your device application settings. 
                Do not clear data unless re-entering credentials.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">3. Test with a VPN</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                If streams buffer exclusively during live prime-time games, your US ISP is throttling. 
                Activate a VPN to unblock speed.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-accent-amber font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">4. Switch Player Engine</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                In app settings, switch your video decoder from Software to Hardware (or toggle ExoPlayer / VLC).
              </p>
            </div>
          </div>
        </div>

        {/* Deep Troubleshooting Guides Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            In-Depth Diagnostic Tutorials
          </h2>
          <p className="text-sm text-slate-500">
            Read comprehensive step-by-step resolution guides tailored to specific error codes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TROUBLESHOOTING_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/troubleshooting/${guide.slug}`}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-accent-cyan/50 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="px-2.5 py-0.5 rounded bg-white text-[#FF6B00] font-mono border border-slate-200">
                    {guide.readTime}
                  </span>
                  <span className="text-emerald-400 font-semibold">Verified Solution</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
                  {guide.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#FF6B00] group-hover:text-slate-900 transition-colors">
                <span>Read Troubleshooting Steps</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* 24/7 Live Support Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-slate-50 border border-orange-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900">Still experiencing an issue?</h3>
            <p className="text-sm text-slate-500">
              Our 24/7 network engineers can test your line credentials and verify upstream CDN health in real time.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 hover:brightness-110 shadow-orange-sm whitespace-nowrap"
          >
            Contact Live Support Desk →
          </Link>
        </div>
      </div>

      <FaqSection items={TROUBLE_FAQS} />
    </>
  );
}

