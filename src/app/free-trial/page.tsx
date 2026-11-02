'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';
import { Zap, ShieldCheck, CheckCircle2, Clock, Tv, Send, ArrowRight, Star } from 'lucide-react';

const TRIAL_FAQS = [
  {
    question: 'Is the 24-hour IPTV trial really 100% free?',
    answer: 'Yes! Our 24-hour trial is completely free. We do not require credit card details or payment info. It is designed to let American cord-cutters evaluate our stream quality, sports channels, and server response times on their own TV before committing.'
  },
  {
    question: 'What channels and features are included in the free trial?',
    answer: 'The trial includes full access to our entire catalog: 25,000+ live HD, 4K, and 8K channels, US local network stations, premium sports feeds (NFL, NBA, MLB, PPV), and on-demand movies. You test the exact same Tier-1 servers as paid subscribers.'
  },
  {
    question: 'How quickly will I receive my trial login credentials?',
    answer: 'Delivery is automated. As soon as you submit your trial request with a valid email address, our provisioning system emails your Xtream Codes API server address, username, password, and M3U URL within 2 to 5 minutes.'
  },
  {
    question: 'Can I test the trial on my Amazon Firestick or Smart TV?',
    answer: 'Yes! Our trial works seamlessly with all popular apps including IPTV Smarters Pro, TiviMate, IBO Player, and XCIPTV across Amazon Firestick, Android TV, Samsung Tizen, LG webOS, Apple TV, and Windows/Mac.'
  }
];

export default function FreeTrialPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: 'firestick',
    app: 'iptv-smarters',
    whatsapp: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    trackEvent('lead_trial_requested', {
      device: formData.device,
      app: formData.app,
      hasWhatsapp: Boolean(formData.whatsapp)
    });

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: '24-Hour Free Trial', item: '/free-trial' }]} />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              Instant 24-Hour Test Account • No Credit Card Required
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Test 8K & 4K IPTV Streaming Risk-Free
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Experience why over 65,000 US households chose IPTVSubs8K. Test 25,000+ live channels, 
              local US stations, and zero-buffering live sports on your own television for 24 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm shadow-2xl">
              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Trial Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your automated 24-hour test credentials have been queued for provisioning. 
                    Please check your inbox at <span className="text-[#FF6B00] font-semibold">{formData.email}</span> (and your spam folder) within the next 2 to 5 minutes.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto text-xs text-slate-500 space-y-2">
                    <div className="font-bold text-slate-900">What happens next:</div>
                    <div>1. Open your email for your Xtream Codes API & M3U login credentials.</div>
                    <div>2. Follow our device setup guide for {formData.device.toUpperCase()}.</div>
                    <div>3. Stream 25,000+ live channels and 4K sports with zero buffering.</div>
                  </div>
                  <div className="pt-4">
                    <Link
                      href={`/setup/${formData.device}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 font-bold text-sm shadow-orange-sm"
                    >
                      <span>Read Setup Guide for Your Device</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Request Your 24-Hour Free Trial
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below to receive your instant activation credentials.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Email Address (Credentials sent here) *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="device" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Primary Device *
                      </label>
                      <select
                        id="device"
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-accent-cyan transition-colors"
                      >
                        <option value="firestick">Amazon Firestick / Fire TV</option>
                        <option value="android-tv">Android TV / Google TV / Shield</option>
                        <option value="smart-tv">Samsung Smart TV (Tizen)</option>
                        <option value="smart-tv">LG Smart TV (webOS)</option>
                        <option value="apple-tv">Apple TV 4K / iOS (iPhone/iPad)</option>
                        <option value="pc-mac">Windows PC / Mac OS</option>
                        <option value="mag-formuler">MAG Box / Formuler Z</option>
                        <option value="roku">Roku TV (Casting Setup)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="app" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Preferred Streaming App *
                      </label>
                      <select
                        id="app"
                        value={formData.app}
                        onChange={(e) => setFormData({ ...formData, app: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-accent-cyan transition-colors"
                      >
                        <option value="iptv-smarters">IPTV Smarters Pro</option>
                        <option value="tivimate">TiviMate IPTV Player</option>
                        <option value="ibo-player">IBO Player</option>
                        <option value="xciptv">XCIPTV Player</option>
                        <option value="kodi">Kodi PVR Simple Client</option>
                        <option value="vlc">VLC Media Player</option>
                        <option value="other">Other / Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      WhatsApp / Mobile Number (Optional for instant WhatsApp backup)
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] hover:brightness-105 shadow-orange transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <span>Provisioning Trial Credentials...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send My Free 24h Trial Now</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" /> No Credit Card Required
                    </span>
                    <span className="flex items-center gap-1 text-[#FF6B00] font-medium">
                      <Clock className="w-3.5 h-3.5" /> 2-5 Min Automated Setup
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Benefits Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white/60 border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Tv className="w-5 h-5 text-[#FF6B00]" />
                What’s Included in Your Free Trial:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>Full 25,000+ Live Channels:</strong> Test US locals (ABC, CBS, FOX, NBC), sports networks, and international streams.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>4K & 8K Ultra High Definition:</strong> Verify genuine 60FPS high-bitrate video streams on your big screen.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>Anti-Freeze™ Stability Test:</strong> Stream live sporting events without freezing, stuttering, or buffering.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>Interactive EPG Guide:</strong> Test 7-day TV program guide data on your preferred player.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>Zero Commitment:</strong> Your trial expires automatically after 24 hours. No cancellation needed.</span>
                </li>
              </ul>
            </div>

            {/* Testimonial highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-white border border-orange-200">
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &ldquo;I tested the 24-hour trial during NFL Sunday. Not a single buffer or disconnect on my Firestick. Bought the 12-month plan right after.&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-bold text-slate-900">Brad T. — Tampa, FL</span>
                <span className="text-[#FF6B00] font-mono">Verified Trial User</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={TRIAL_FAQS} />
    </>
  );
}

