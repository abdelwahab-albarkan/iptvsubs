import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service & Usage Policies',
  description: 'Read the IPTVSubs8K terms of service, subscription policies, fair usage guidelines, and service level commitments.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Terms of Service', item: '/terms' }]} />
          
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Subscriber Agreement & Service Terms
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              These terms govern customer access to the {SITE_CONFIG.name} technical transmission 
              network, M3U streams, and software player integrations across the United States.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-600 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Provisioning & Line Activation</h2>
          <p>
            Upon successful merchant verification of your order or test request, our provisioning automation 
            allocates dedicated upstream server slots on our 10Gbps load balancers. Login credentials, 
            including Xtream Codes API addresses and M3U playlists, are dispatched to your registered email 
            address within minutes. Customers are responsible for safeguarding login keys and preventing 
            unauthorized sharing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Concurrency Limits & Multi-Room Streaming</h2>
          <p>
            Each individual line subscription permits active concurrent streaming strictly up to the numerical 
            limit specified at checkout (default is 1 active stream, or 2 active streams for multi-room plans). 
            Our automated session monitor detects simultaneous connections from distinct IP addresses. 
            Exceeding your concurrent line allocation will cause secondary playback attempts to return 
            a temporary &ldquo;Too Many Connections&rdquo; server status until the active session closes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Network Reliability & Scheduled Upgrades</h2>
          <p>
            We deploy dynamic Anycast routing and automated CDN failover to uphold our 99.9% uptime 
            commitment. To maintain high bitrates and replace satellite transponder keys, brief scheduled 
            network updates may occur during low-traffic windows (typically between 3:00 AM and 5:00 AM EST). 
            Such standard operational maintenance does not constitute service outages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Hardware Compatibility & Technical Boundaries</h2>
          <p>
            While our network supports all major hardware devices (Amazon Fire TV, Android TV, Samsung Tizen, 
            LG webOS, Apple tvOS, and MAG set-top hardware), end-user streaming quality remains contingent on 
            local ISP bandwidth and internal home Wi-Fi stability. End-users are responsible for ensuring 
            their broadband router delivers at least 30 Mbps down for 4K UHD and 8K video streams.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Prohibition of Unauthorized Restreaming</h2>
          <p>
            Retail subscriber accounts are intended exclusively for private household consumption. Capturing, 
            rebroadcasting, redistributing, or commercial restreaming of our feeds to third-party networks 
            without an active, authorized Wholesale Reseller Panel license will result in immediate termination 
            without notice or refund.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">6. DMCA & Copyright Inquiry Procedure</h2>
          <p>
            {SITE_CONFIG.name} respects digital intellectual property rights. If a copyright holder believes 
            that specific indexed playlist metadata infringes upon protected work, formal notifications 
            containing statutory proof of ownership can be transmitted to our designated compliance desk at{' '}
            <strong className="text-[#FF6B00]">{SITE_CONFIG.email}</strong> for rapid administrative investigation.
          </p>
        </section>
      </div>
    </>
  );
}
