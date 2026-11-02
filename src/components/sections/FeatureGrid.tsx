import React from 'react';
import Image from 'next/image';
import { Zap, Tv, ShieldCheck, Film, Globe, Clock, Headphones, Smartphone } from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Anti-Freeze™ 9.2 Technology',
    description: 'Equipped with dynamic multi-server load balancing and 10Gbps Tier-1 routing to prevent buffering, packet drops, and lag during high-demand live sporting broadcasts.',
  },
  {
    icon: Tv,
    title: 'Native 8K & 4K Ultra HD',
    description: 'Experience sports and blockbuster movies with ultra-high bitrate 60FPS streams. Crystal-clear detail optimized for large screen 4K/8K living room displays.',
  },
  {
    icon: Film,
    title: '120,000+ VOD Movies & Shows',
    description: 'Binge the latest theatrical cinema releases, Netflix, HBO Max, Disney+, and Amazon Prime series with multi-language subtitles and English audio feeds.',
  },
  {
    icon: Globe,
    title: 'All USA Local Networks',
    description: 'Watch ABC, CBS, NBC, FOX, and The CW from your home city without blackout restrictions or expensive cable TV bundle lock-ins.',
  },
  {
    icon: Clock,
    title: '7-Day EPG & Catch-Up TV',
    description: 'Never miss an episode or touchdown. Our interactive Electronic Program Guide (EPG) lets you plan viewing and catch up on missed broadcasts.',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'Round-the-clock technical assistance for device configuration, app setup, M3U playlist integration, and direct connection troubleshooting.',
  }
];

export function FeatureGrid() {
  return (
    <section className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            Why Choose IPTVSubs8K
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Engineered for <span className="text-[#FF6B00]">Uninterrupted</span> Entertainment
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            We built our streaming architecture from the ground up to overcome the freezing, 
            audio lag, and server drops common with inferior budget providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-[1.75rem] overflow-hidden bg-slate-200/80 ring-1 ring-slate-200/80 shadow-card">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="relative p-8 bg-white hover:bg-gradient-to-b hover:from-orange-50/60 hover:to-white transition-colors duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl icon-tile flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span aria-hidden="true" className="font-display text-sm font-bold text-slate-500 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Technology Showcase Banner */}
        <div className="mt-16 rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-50 ring-1 ring-slate-200/90 p-8 lg:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-white text-[#FF6B00] text-xs font-bold border border-orange-200 uppercase tracking-wider shadow-xs">
                Zero Buffering Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                How Anti-Freeze™ 9.2 Keeps Your Streams Smooth
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Traditional IPTV providers run on overloaded single servers that choke during high-traffic 
                sporting events. IPTVSubs8K routes your connection through a distributed network of 
                high-speed edge nodes with automated failover. If one upstream server experiences latency, 
                your stream switches instantly without dropping frames.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-slate-800">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  <span>10 Gbps Edge Nodes</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  <span>Sub-30ms US Latency</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Smart H.265 / HEVC Encoding</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <Image
                  src="/images/anti-freeze-tech.webp"
                  alt="IPTV Anti-Freeze technology network architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
