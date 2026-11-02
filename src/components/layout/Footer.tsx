import React from 'react';
import Link from 'next/link';
import { Tv, ShieldCheck, Zap, Mail, MessageSquare, CheckCircle, ExternalLink, Clock, Headphones } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { BrandMark } from '@/components/ui/BrandMark';

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#0B1120] text-slate-600 dark:text-slate-400 text-sm">
      <div className="h-1 w-full bg-gradient-to-r from-[#FF8A3D] via-[#FF6B00] to-[#EA580C]" />
      {/* High-trust proof bar */}
      <div className="border-b border-orange-100 dark:border-white/[0.07] bg-orange-50/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-card hover:-translate-y-0.5 hover:ring-orange-200 dark:bg-white/[0.03] dark:ring-white/[0.08] dark:hover:ring-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl icon-tile flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 fill-white" />
              </div>
              <span className="font-display font-bold text-slate-900 dark:text-white text-base">99.9% Server Uptime</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Anti-Freeze™ 10Gbps cluster</span>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-card hover:-translate-y-0.5 hover:ring-orange-200 dark:bg-white/[0.03] dark:ring-white/[0.08] dark:hover:ring-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_8px_20px_-6px_rgba(16,185,129,0.5)] flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-slate-900 dark:text-white text-base">7-Day Guarantee</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">100% Risk-free money back</span>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-card hover:-translate-y-0.5 hover:ring-orange-200 dark:bg-white/[0.03] dark:ring-white/[0.08] dark:hover:ring-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl icon-tile flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-slate-900 dark:text-white text-base">Instant Activation</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Automated setup in 2 minutes</span>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-card hover:-translate-y-0.5 hover:ring-orange-200 dark:bg-white/[0.03] dark:ring-white/[0.08] dark:hover:ring-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_8px_20px_-6px_rgba(59,130,246,0.5)] flex items-center justify-center mb-3">
                <Headphones className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-slate-900 dark:text-white text-base">24/7 Priority Support</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Direct WhatsApp & email chat</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <BrandMark className="w-10 h-10" />
              <span className="font-display text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                IPTVSubs<span className="text-[#FF6B00] dark:text-[#FF8A3D]">8K</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              The premier high-performance IPTV streaming provider engineered for United States viewers. 
              Delivering over 25,000 live channels, 120,000+ on-demand movies, local US sports, and zero-buffering 
              Ultra HD streams across all your screens.
            </p>
            <div className="flex items-center gap-2 pt-2 flex-wrap">
              <div className="px-3 py-1.5 rounded-lg bg-slate-50 ring-1 ring-slate-200 text-xs text-slate-700 dark:bg-white/5 dark:ring-white/10 dark:text-slate-300 font-semibold">
                🔒 SSL 256-Bit Encrypted
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-50 ring-1 ring-emerald-200 text-xs text-emerald-800 dark:bg-emerald-400/10 dark:ring-emerald-400/25 dark:text-emerald-300 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Server Status: Operational
              </div>
            </div>
            {/* Accepted payment logos */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-500 uppercase tracking-[0.14em] block mb-2.5 font-semibold">
                Supported Secure Checkout
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="h-8 px-3 bg-white ring-1 ring-slate-200 shadow-2xs dark:bg-white/5 dark:ring-white/10 rounded-lg flex items-center justify-center text-xs text-slate-700 dark:text-slate-200 font-semibold">
                  Apple Pay
                </div>
                <div className="h-8 px-3 bg-white ring-1 ring-slate-200 shadow-2xs dark:bg-white/5 dark:ring-white/10 rounded-lg flex items-center justify-center text-xs text-slate-700 dark:text-slate-200 font-semibold">
                  Google Pay
                </div>
                <div className="h-8 px-3 bg-white ring-1 ring-slate-200 shadow-2xs dark:bg-white/5 dark:ring-white/10 rounded-lg flex items-center justify-center text-xs text-slate-700 dark:text-slate-200 font-semibold">
                  Visa / Mastercard
                </div>
                <div className="h-8 px-3 bg-white ring-1 ring-slate-200 shadow-2xs dark:bg-white/5 dark:ring-white/10 rounded-lg flex items-center justify-center text-xs text-slate-700 dark:text-slate-200 font-semibold">
                  Crypto / USDT
                </div>
              </div>
            </div>
          </div>

          {/* Device Setup Hubs */}
          <div>
            <h3 className="inline-block pb-2 mb-5 border-b-2 border-[#FF6B00] text-slate-900 dark:text-white font-bold text-xs tracking-[0.14em] uppercase">
              Device Setup Hubs
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/setup/firestick" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Amazon Firestick & Fire TV
                </Link>
              </li>
              <li>
                <Link href="/setup/android-tv" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Android TV & Google TV
                </Link>
              </li>
              <li>
                <Link href="/setup/smart-tv" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Samsung & LG Smart TVs
                </Link>
              </li>
              <li>
                <Link href="/setup/apple-tv" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Apple TV 4K & tvOS
                </Link>
              </li>
              <li>
                <Link href="/setup/roku" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Roku Screen Mirroring
                </Link>
              </li>
              <li>
                <Link href="/setup/pc-mac" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Windows PC & macOS Setup
                </Link>
              </li>
              <li>
                <Link href="/setup/mag-formuler" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  MAG & Formuler IPTV Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Apps & Diagnostics */}
          <div>
            <h3 className="inline-block pb-2 mb-5 border-b-2 border-[#FF6B00] text-slate-900 dark:text-white font-bold text-xs tracking-[0.14em] uppercase">
              Players & Diagnostics
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/apps/tivimate" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  TiviMate Premium Setup
                </Link>
              </li>
              <li>
                <Link href="/apps/iptv-smarters-pro" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  IPTV Smarters Pro App
                </Link>
              </li>
              <li>
                <Link href="/apps/ibo-player" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  IBO Player Pro Activation
                </Link>
              </li>
              <li>
                <Link href="/apps/xciptv" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  XCIPTV Player Player
                </Link>
              </li>
              <li>
                <Link href="/apps/kodi" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Kodi PVR IPTV Client
                </Link>
              </li>
              <li>
                <Link href="/troubleshooting/iptv-buffering" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors text-amber-700 dark:text-amber-400 font-medium">
                  Fix IPTV Buffering & Lag
                </Link>
              </li>
              <li>
                <Link href="/troubleshooting/iptv-not-working" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  IPTV Not Working Solutions
                </Link>
              </li>
              <li>
                <Link href="/troubleshooting/vpn-isp-throttling" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Bypass USA ISP Throttling
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Legal Hub */}
          <div>
            <h3 className="inline-block pb-2 mb-5 border-b-2 border-[#FF6B00] text-slate-900 dark:text-white font-bold text-xs tracking-[0.14em] uppercase">
              Guides & Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/guide" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors text-[#EA580C] dark:text-[#FF8A3D] font-semibold">
                  Streaming Guides (3,260+)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Subscription Plans & Prices
                </Link>
              </li>
              <li>
                <Link href="/free-trial" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors font-semibold text-[#EA580C] dark:text-[#FF8A3D]">
                  24-Hour Instant Free Trial
                </Link>
              </li>
              <li>
                <Link href="/channels" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  USA Local Channel Lineup
                </Link>
              </li>
              <li>
                <Link href="/compare/cable-vs-iptv" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Cable TV vs IPTV Cost
                </Link>
              </li>
              <li>
                <Link href="/guides/is-iptv-legal-usa" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Is IPTV Legal in the USA?
                </Link>
              </li>
              <li>
                <Link href="/guides/iptv-scams-guide" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  How to Avoid IPTV Scams
                </Link>
              </li>
              <li>
                <Link href="/guides/best-iptv-providers-usa" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  Best IPTV Providers (2026)
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
                  IPTV Reseller Panel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name} ({SITE_CONFIG.domain}). All rights reserved. 
            Engineered for high-reliability US streaming.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a
              href="https://wa.me/212625218443"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200 font-semibold transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              WhatsApp: +212 625 218 443
            </a>
            <a
              href="mailto:support@streamb4.com"
              className="text-[#EA580C] dark:text-[#FF8A3D] hover:underline font-semibold transition-colors"
            >
              support@streamb4.com
            </a>
            <Link href="/privacy" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
              7-Day Refund Policy
            </Link>
            <Link href="/contact" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors">
              Contact Support
            </Link>
            <Link href="/html-sitemap" className="hover:text-[#FF6B00] dark:hover:text-white transition-colors font-medium">
              HTML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
