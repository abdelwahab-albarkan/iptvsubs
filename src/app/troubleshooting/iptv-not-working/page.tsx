import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw, Key, Globe, Wifi } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Not Working? Step-by-Step Fixes for Black Screens & Errors',
  description: 'Troubleshoot non-responsive IPTV feeds, authorization errors, DNS resolution failures, and expired playlist tokens with our actionable diagnostic checklist.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/troubleshooting/iptv-not-working`,
  },
};

const NOT_WORKING_FAQS = [
  {
    question: 'Why am I seeing a black screen with audio playing in the background?',
    answer: 'A black screen with functioning audio is almost always caused by a video codec mismatch (e.g., trying to decode an HEVC/H.265 4K stream with an older software renderer). Go to your app settings, open Player Selection, and change the Live TV decoder from "Software" to "Hardware" or switch to the VLC video engine.'
  },
  {
    question: 'What does "Error 404" or "Stream Failed" mean on a specific channel?',
    answer: 'A 404 error on a specific channel means that particular upstream broadcast source is temporarily restarting or renegotiating satellite keys. If other channels work fine, the server is healthy. Simply refresh your playlist or notify our 24/7 support desk to swap the source.'
  }
];

export default function IptvNotWorkingPage() {
  return (
    <>
      <ArticleJsonLd
        title="IPTV Not Working? Step-by-Step Fixes for Black Screens & Errors"
        description="Actionable diagnostic guide to resolve IPTV authorization failures, connection timeouts, and playback errors."
        url={`${SITE_CONFIG.url}/troubleshooting/iptv-not-working`}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Troubleshooting Hub', item: '/troubleshooting' },
              { name: 'IPTV Not Working Fixes', item: '/troubleshooting/iptv-not-working' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              Diagnostic Checklist • Error Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              IPTV Not Working? Step-by-Step Troubleshooting Guide
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              If your IPTV stream suddenly stops loading, shows an authorization failed alert, 
              or displays a persistent black screen, work through these 5 verified technical fixes.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-sm">
                  1
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Verify Credentials & Server URL Formatting
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 70% of login failures stem from subtle typographical errors when typing on a remote control:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
                <div>• Check for accidental spaces at the start or end of your username/password.</div>
                <div>• Verify whether your portal URL requires <strong>http://</strong> or <strong>https://</strong> and the port (e.g. <strong>:8080</strong>).</div>
                <div>• Password characters are strictly case-sensitive.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-sm">
                  2
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Bypass ISP DNS Blocking (Switch to Cloudflare 1.1.1.1)
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Some US ISPs employ DNS-level tampering to block streaming endpoints:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
                <div>• In your router or device network settings, switch DNS from Automatic to Static.</div>
                <div>• Primary DNS: <strong>1.1.1.1</strong> (Cloudflare) or <strong>8.8.8.8</strong> (Google).</div>
                <div>• Secondary DNS: <strong>1.0.0.1</strong> or <strong>8.8.4.4</strong>.</div>
                <div>• This restores instant domain name resolution and prevents ISP redirect loops.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-sm">
                  3
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Check Simultaneous Device Connection Limits
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                If your account includes 1 active connection, opening the stream on a second television 
                or smartphone will automatically disconnect the first device:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
                <div>• Close the IPTV app on all secondary devices before testing.</div>
                <div>• If you need multi-room streaming, upgrade to our 2-connection plan via our support portal.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Need Live Engineer Assistance?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our technical support team is online 24 hours a day, 7 days a week to test your line credentials.
              </p>
              <Link
                href="/contact"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Open Support Ticket →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={NOT_WORKING_FAQS} />
    </>
  );
}

