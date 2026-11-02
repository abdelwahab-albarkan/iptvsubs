'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Zap,
  Tag,
  Gift,
  Tv,
  BookOpen,
  MonitorSmartphone,
  LayoutGrid,
  Wrench,
  Handshake,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';
import { BrandMark } from '@/components/ui/BrandMark';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Pricing & Plans', href: '/pricing', icon: Tag },
    { name: '24h Free Trial', href: '/free-trial', highlight: true, icon: Gift },
    { name: 'Live Channels', href: '/channels', icon: Tv },
    { name: 'Guides', href: '/guide', icon: BookOpen },
    { name: 'Device Setup', href: '/setup', icon: MonitorSmartphone },
    { name: 'IPTV Apps', href: '/apps', icon: LayoutGrid },
    { name: 'Troubleshooting', href: '/troubleshooting', icon: Wrench },
    { name: 'Reseller', href: '/reseller', icon: Handshake }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(15,23,42,0.06),0_10px_30px_-14px_rgba(15,23,42,0.18)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06),0_10px_30px_-14px_rgba(0,0,0,0.6)]'
          : 'bg-white dark:bg-[#0B1120]'
      }`}
    >
      {/* Top micro-announcement banner */}
      <div className="bg-gradient-to-r from-[#FF6B00] via-[#FF7A1A] to-[#EA580C] text-white text-[11px] sm:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex items-center gap-1.5 font-semibold whitespace-nowrap">
              <Zap className="w-3.5 h-3.5 fill-white text-white" />
              Anti-Freeze™ 9.2 Active
            </span>
            <span className="hidden md:inline w-px h-3 bg-white/40" />
            <span className="hidden md:inline text-white/90 truncate">25,000+ Live Channels in 4K/8K UHD</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/212625218443"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold flex items-center gap-1.5 whitespace-nowrap px-2.5 py-0.5 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-white" />
              </span>
              <span>WhatsApp: +212 625 218 443</span>
            </a>
            <a
              href="mailto:support@streamb4.com"
              className="hidden sm:inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              support@streamb4.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            onClick={() => trackEvent('cta_click', { target: 'logo_home' })}
          >
            <BrandMark className="w-10 h-10 drop-shadow-[0_6px_14px_rgba(255,107,0,0.35)] group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[19px] sm:text-[22px] font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                IPTVSubs<span className="text-[#FF6B00]">8K</span>
                <span className="hidden sm:inline text-[9px] font-bold px-1.5 py-[3px] rounded-md bg-orange-100 text-[#EA580C] dark:bg-[#FF6B00]/15 dark:text-[#FF8A3D] uppercase tracking-widest">
                  USA
                </span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide mt-1 hidden sm:block xl:hidden 2xl:block">
                Ultra HD & 8K IPTV Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5 p-1 rounded-full bg-slate-100/80 dark:bg-white/[0.05] ring-1 ring-slate-200/70 dark:ring-white/[0.08]" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href + '/'));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white dark:bg-white/10 text-[#EA580C] dark:text-[#FF8A3D] shadow-[0_1px_3px_rgba(15,23,42,0.12)]'
                      : link.highlight
                      ? 'text-[#EA580C] dark:text-[#FF8A3D] hover:bg-white dark:hover:bg-white/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10'
                  }`}
                  onClick={() => trackEvent('cta_click', { target: `nav_${link.name}` })}
                >
                  {link.highlight && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6B00] mr-1.5 align-middle -mt-0.5" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <ThemeToggle />
            <Link
              href="/pricing"
              className="hidden 2xl:inline-flex px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => trackEvent('view_pricing', { source: 'header' })}
            >
              View Plans
            </Link>
            <Link
              href="/free-trial"
              className="group relative inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_20px_-6px_rgba(255,107,0,0.55)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_28px_-6px_rgba(255,107,0,0.65)] transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              onClick={() => trackEvent('cta_click', { target: 'header_free_trial_button' })}
            >
              Get Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/free-trial"
              className="sm:hidden whitespace-nowrap px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] rounded-full shadow-[0_6px_14px_-4px_rgba(255,107,0,0.5)]"
              onClick={() => trackEvent('cta_click', { target: 'mobile_top_trial_btn' })}
            >
              Free Trial
            </Link>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-800 dark:text-white bg-slate-100 dark:bg-white/10 ring-1 ring-slate-200 dark:ring-white/10 hover:bg-slate-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-[#0B1120] border-t border-slate-100 dark:border-white/10 px-4 pt-4 pb-6 shadow-2xl max-h-[calc(100vh-110px)] overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      link.highlight
                        ? 'bg-orange-50 text-[#C2410C] ring-1 ring-orange-200'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackEvent('cta_click', { target: `mobile_nav_${link.name}` });
                    }}
                  >
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        link.highlight ? 'icon-tile' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </span>
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="sm:hidden flex items-center justify-between px-3 py-2 mb-3 rounded-xl bg-slate-50 dark:bg-white/5">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Dark mode</span>
              <ThemeToggle />
            </div>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link
                href="/pricing"
                className="w-full text-center py-3 rounded-xl font-bold text-sm bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Pricing Plans
              </Link>
              <Link
                href="/free-trial"
                className="w-full text-center py-3 rounded-xl font-bold text-sm bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] text-white shadow-[0_8px_20px_-6px_rgba(255,107,0,0.55)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Claim 24-Hour Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
