import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection',
  description: 'Learn how IPTVSubs8K protects your personal information, enforces strict zero-logging policies, and secures all checkout communications with SSL encryption.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Privacy Policy', item: '/privacy' }]} />
          
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Privacy Policy & Data Security
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Effective Date: January 1, 2026. Last Updated: October 31, 2026. 
              Your privacy and security are paramount at {SITE_CONFIG.name}.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-600 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Strict Zero-Logging Policy</h2>
          <p>
            {SITE_CONFIG.name} enforces a strict zero-logging policy. We do not inspect, log, store, 
            or monitor your streaming activities, channel viewing history, IP address sessions, or 
            media consumption habits. Once a stream session terminates, the temporary network buffer 
            is completely flushed from volatile RAM.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
          <p>
            We collect only the bare minimum information necessary to provision your subscription 
            and deliver customer assistance:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-slate-500">
            <li><strong>Email Address:</strong> Used solely to dispatch your login credentials, configuration guides, and renewal reminders.</li>
            <li><strong>Device Model / App Preference:</strong> Gathered voluntarily during trial requests to ensure accurate tutorials.</li>
            <li><strong>Billing Information:</strong> Processed securely by tier-1 payment gateways using 256-bit TLS/SSL encryption. We never store credit card numbers on our servers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Information Sharing & Third Parties</h2>
          <p>
            We do not sell, rent, lease, or trade your personal information to third parties, 
            advertisers, or data brokers. All communications remain strictly between you and {SITE_CONFIG.name}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Your US Privacy Rights (CCPA / CPRA)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), 
            US residents have the right to request the disclosure, portability, or complete deletion 
            of any stored account data. To request data deletion, email our data officer at{' '}
            <strong className="text-[#FF6B00]">{SITE_CONFIG.email}</strong>.
          </p>
        </section>
      </div>
    </>
  );
}

