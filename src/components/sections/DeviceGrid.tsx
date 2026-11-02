import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DEVICE_GUIDES } from '@/lib/constants';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

export function DeviceGrid({ title = "Stream on Any Device in Under 5 Minutes" }: { title?: string }) {
  return (
    <section className="py-16 lg:py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            Universal Compatibility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            No complicated hardware required. IPTVSubs8K connects instantly to your existing 
            television, streaming stick, computer, or mobile phone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DEVICE_GUIDES.map((dev) => (
            <Link
              key={dev.slug}
              href={`/setup/${dev.slug}`}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="p-5 sm:p-6 flex flex-col items-center text-center">
                <div className="relative w-full h-40 mb-4 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-4 border border-slate-100">
                  <Image
                    src={dev.image}
                    alt={`${dev.name} IPTV Setup Guide`}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {dev.popular && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                      #1 in US
                    </span>
                  )}
                </div>

                <div className="w-full text-left">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1.5 text-[#FF6B00] font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      {dev.difficulty}
                    </span>
                    <span className="text-emerald-700 flex items-center gap-1 font-bold">
                      <CheckCircle className="w-3 h-3 text-emerald-600" /> Compatible
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                    {dev.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                    {dev.description}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF6B00] group-hover:text-[#EA580C] transition-colors">
                <span>View Step-by-Step Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-10 text-center text-xs text-slate-500 font-medium">
          Have an unlisted device or brand new Smart TV? Our 24/7 technical team can assist you with remote configuration over live chat or WhatsApp.
        </div>
      </div>
    </section>
  );
}
