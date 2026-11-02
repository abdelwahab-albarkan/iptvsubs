import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { ShieldCheck, CheckCircle2, Clock, Mail, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy & 7-Day Money-Back Guarantee',
  description: 'Our transparent 7-day money-back guarantee policy. Review eligibility guidelines and fast processing steps for full purchase confidence.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/refund-policy`,
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Refund Policy', item: '/refund-policy' }]} />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Risk-Free Guarantee
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              7-Day Money-Back Refund Policy
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              At IPTVSubs8K, we take pride in our 99.9% server stability and customer satisfaction. 
              Here is our clear, straightforward refund policy so you can subscribe with absolute confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-600 text-sm leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            1. Our 7-Day Guarantee Commitment
          </h2>
          <p>
            Every new retail subscription purchased on IPTVSubs8K (including 1-month, 3-month, 6-month, 
            12-month, and 24-month plans) is protected by our full 7-day money-back guarantee. If you 
            encounter technical difficulties that our engineering staff cannot resolve, you are entitled 
            to a prompt, courteous full refund within 7 calendar days of your initial purchase date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            2. Refund Eligibility & Resolution Steps
          </h2>
          <p>
            To ensure the smoothest streaming experience, we ask that you follow these standard troubleshooting steps before submitting a refund request:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-slate-500">
            <li>Verify that your internet connection meets our recommended bandwidth of at least 30 Mbps for 4K/8K.</li>
            <li>Test our recommended media player app (e.g. IPTV Smarters Pro, TiviMate, or IBO Player).</li>
            <li>Contact our 24/7 technical desk via email or ticket to verify server routing or DNS settings.</li>
          </ul>
          <p>
            If our support team is unable to establish a functioning, stable stream for your authorized hardware, we will process your full refund immediately.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            3. How to Request a Refund
          </h2>
          <p>
            Requesting a refund is simple and requires zero phone calls:
          </p>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div>1. Send an email to <strong className="text-[#FF6B00]">{SITE_CONFIG.email}</strong> or submit a ticket through our <Link href="/contact" className="text-[#FF6B00] underline">Contact Support Portal</Link>.</div>
            <div>2. Use the subject line: <strong>&ldquo;Refund Request - [Your Order Number / Email]&rdquo;</strong>.</div>
            <div>3. Briefly state the device model and reason for cancellation so we can continuously improve our server network.</div>
            <div>4. Our billing department will verify your transaction and issue your refund within 24 to 48 business hours.</div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            4. Refund Processing Timeframes
          </h2>
          <p>
            Once issued by our billing department:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-slate-500">
            <li><strong>Credit Card / Apple Pay:</strong> Funds typically appear back in your bank or card account within 3 to 7 business days, depending on your financial institution&apos;s settlement cycle.</li>
            <li><strong>Cryptocurrency:</strong> Refunds processed in cryptocurrency (USDT / BTC) are sent back to your verified sender wallet within 12 hours.</li>
          </ul>
        </section>
      </div>
    </>
  );
}

