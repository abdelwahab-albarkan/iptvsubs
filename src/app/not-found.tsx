import React from 'react';
import Link from 'next/link';
import { Tv, ArrowLeft, Home, Search, HelpCircle, ShieldCheck } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-orange-sm">
          <Tv className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <span className="text-sm font-bold tracking-widest text-[#FF6B00] uppercase">
            Error 404 — Channel Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Looking for a Stream or Guide?
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            The page you requested may have moved, expired, or been updated as part of our 
            high-speed server restructuring. Explore our top popular destinations below:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
          <Link
            href="/pricing"
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-accent-cyan/50 transition-all group"
          >
            <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
              Subscription Plans →
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Explore 1 to 24 month IPTV plans with 8K/4K streams.
            </p>
          </Link>

          <Link
            href="/free-trial"
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-accent-cyan/50 transition-all group"
          >
            <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
              24h Free Trial →
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Test 25,000+ live channels with zero commitment.
            </p>
          </Link>

          <Link
            href="/setup"
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-accent-cyan/50 transition-all group"
          >
            <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
              Device Setup Guides →
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Tutorials for Firestick, Android TV, Samsung & LG.
            </p>
          </Link>

          <Link
            href="/troubleshooting"
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-accent-cyan/50 transition-all group"
          >
            <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
              Fix Buffering & Errors →
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Diagnostic checklist for connection and playback issues.
            </p>
          </Link>
        </div>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 font-bold text-sm shadow-orange-sm hover:brightness-110 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-600 font-semibold text-sm hover:text-slate-900 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Contact 24/7 Support
          </Link>
        </div>
      </div>
    </div>
  );
}

