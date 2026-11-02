import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  device: string;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Marcus Vance',
    location: 'Austin, Texas',
    avatar: '/images/revriw/avatars/avatar-1.webp',
    rating: 5,
    device: 'Firestick 4K Max + TiviMate',
    date: 'October 24, 2026',
    title: 'Cut my $185 Comcast bill immediately',
    comment: 'I was paying $185 every single month to Comcast Xfinity just to watch NFL games and local news. Switched to IPTVSubs8K on my Firestick with TiviMate and the quality is crystal clear 4K with zero lag. Literally saves me over $1,500 every year.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Sarah Jenkins',
    location: 'Tampa, Florida',
    avatar: '/images/revriw/avatars/avatar-2.webp',
    rating: 5,
    device: 'Samsung Smart TV (IBO Player)',
    date: 'October 19, 2026',
    title: 'Setup took 3 minutes on my Samsung TV',
    comment: 'I was nervous about having to buy extra streaming sticks, but their tutorial for IBO Player on Samsung Tizen was so simple. Uploaded my playlist via MAC address and immediately had 25,000 channels. The EPG guide works great.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'David Kowalski',
    location: 'Chicago, Illinois',
    avatar: '/images/revriw/avatars/avatar-3.webp',
    rating: 5,
    device: 'Nvidia Shield TV Pro',
    date: 'October 12, 2026',
    title: 'The Anti-Freeze tech actually works for UFC PPV',
    comment: 'Every IPTV service I tried in the past would buffer and crash right as the UFC main event started. Watched the entire fight card last Saturday on IPTVSubs8K in 4K UHD without a single freeze or audio desync. Server stability is legit.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Elena Rodriguez',
    location: 'Denver, Colorado',
    avatar: '/images/revriw/avatars/avatar-4.webp',
    rating: 5,
    device: 'Apple TV 4K',
    date: 'October 08, 2026',
    title: 'Customer support resolved my portal URL in 2 minutes',
    comment: 'Their 24/7 support answered my live chat ticket immediately when I made a typo configuring my credentials on Apple TV. Within 2 minutes everything was streaming smoothly. Excellent customer care and transparent service.',
    verified: true
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Cord-Cutters <span className="text-[#FF6B00]">Nationwide</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-900 font-black text-base">
              5.0 / 5.0
            </span>
            <span className="text-slate-500 text-xs font-medium">
              • Verified Real US Subscriber Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 flex flex-col justify-between hover:border-orange-200 transition-all shadow-sm hover:shadow-card-hover"
            >
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-orange-200 shrink-0">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                      {rev.name}
                      {rev.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" title="Verified Customer" />
                      )}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {rev.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-2.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="text-sm font-black text-slate-900 mb-2">
                  &ldquo;{rev.title}&rdquo;
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="truncate max-w-[140px] text-[#FF6B00] font-bold">
                  {rev.device}
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
