'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Zap, Star, ArrowRight, Gauge, Tv } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-light pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100 dark:border-white/5">
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_30%_20%,black_10%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full bg-white dark:bg-white/5 ring-1 ring-orange-200 dark:ring-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs sm:backdrop-blur">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
              <span>Next-Gen 8K & 4K Ultra HD Streaming in USA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-900 dark:text-white leading-[1.05]">
              The #1 Rated <span className="text-gradient-orange">IPTV Service</span> in the United States
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stream over <span className="text-slate-900 dark:text-white font-semibold">25,000+ live HD, 4K & 8K channels</span>,
              120,000+ movies, NFL Sunday Ticket, NBA, MLB, and local US stations with zero buffering.
              Powered by Anti-Freeze™ 9.2 technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <Link
                href="/free-trial"
                onClick={() => trackEvent('cta_click', { target: 'hero_start_trial' })}
                className="group w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_14px_34px_-10px_rgba(255,107,0,0.7)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_18px_40px_-10px_rgba(255,107,0,0.85)] transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>Start 24-Hour Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/pricing"
                onClick={() => trackEvent('cta_click', { target: 'hero_view_pricing' })}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-white bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 ring-1 ring-slate-200 dark:ring-white/15 hover:ring-slate-300 dark:hover:ring-white/25 shadow-xs backdrop-blur transition-all flex items-center justify-center gap-2"
              >
                <span>View Plans (From $6.67/mo)</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="pt-7 grid grid-cols-3 max-w-lg mx-auto lg:mx-0 border-t border-slate-200 dark:border-white/10 text-left divide-x divide-slate-200 dark:divide-white/10">
              <div className="pr-4">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">99.9%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Server Uptime</div>
              </div>
              <div className="px-4">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF6B00] dark:text-[#FF8A3D] tracking-tight">25,000+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Live Channels</div>
              </div>
              <div className="pl-4">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">7 Days</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Refund Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Glow behind the frame */}
            <div className="hidden lg:block absolute -inset-6 rounded-[2.5rem] bg-[#FF6B00]/15 dark:bg-[#FF6B00]/20 blur-3xl pointer-events-none" />

            <div className="relative rounded-[1.75rem] p-1.5 bg-white dark:bg-gradient-to-b dark:from-white/20 dark:to-white/5 ring-1 ring-slate-200 dark:ring-white/10 shadow-[0_30px_60px_-20px_rgba(255,107,0,0.35)] dark:shadow-2xl">
              <div className="relative rounded-[1.4rem] overflow-hidden bg-slate-900">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/packimages2/lucid-origin_Photorealistic_American_living_room_in_the_evening_a_group_of_friends_cheering_i-0.webp"
                    alt="American living room streaming live sports in 4K on IPTVSubs8K"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/10 to-transparent" />
                </div>

                {/* Floating badges on image */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/55 sm:backdrop-blur-md ring-1 ring-white/15 text-xs font-semibold text-white flex items-center gap-2">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-red-500" />
                  </span>
                  <span className="text-red-400 font-bold uppercase tracking-wider">LIVE</span>
                  <span>NFL & Premier League 8K Feed</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/55 sm:bg-white/10 sm:backdrop-blur-xl ring-1 ring-white/15 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl icon-tile flex items-center justify-center">
                      <Zap className="w-4 h-4 fill-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-[13px]">Anti-Freeze™ Active</div>
                      <div className="text-slate-300 text-[11px] font-medium">Dynamic Multi-Server CDN</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-400/15 text-emerald-300 font-bold font-mono ring-1 ring-emerald-400/30">
                    <Gauge className="w-3.5 h-3.5" />
                    10 Gbps
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary floating review card */}
            <div className="hidden sm:flex absolute -bottom-7 -left-6 p-3.5 pr-5 rounded-2xl bg-white ring-1 ring-slate-200 dark:ring-white/10 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.25)] items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden relative ring-2 ring-orange-100 shrink-0">
                <Image
                  src="/images/revriw/avatars/avatar-1.webp"
                  alt="Verified US Subscriber"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-[13px] font-bold text-slate-900 mt-0.5">
                  &ldquo;Crystal clear 4K on Firestick&rdquo;
                </div>
                <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Marcus V. — Verified US Buyer
                </div>
              </div>
            </div>

            {/* Quality chip */}
            <div className="hidden lg:flex absolute -top-4 -right-3 items-center gap-2 px-3 py-2 rounded-xl bg-white ring-1 ring-slate-200 dark:ring-white/10 shadow-xl text-xs font-bold text-slate-900">
              <Tv className="w-4 h-4 text-[#FF6B00]" />
              8K · 60 FPS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
