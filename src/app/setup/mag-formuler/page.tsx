import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { HowToJsonLd } from '@/components/seo/JsonLd';
import { FaqSection } from '@/components/sections/FaqSection';
import { SITE_CONFIG } from '@/lib/constants';
import { Box, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Setup IPTV on MAG & Formuler Boxes (Portal URL / Stalker)',
  description: 'Learn how to configure MAG 254/322/524 and Formuler Z11 boxes using MAC address portal URLs, Stalker middleware, and MyTVOnline 2/3.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/setup/mag-formuler`,
  },
};

const HOW_TO_STEPS = [
  {
    name: 'Locate Your Device MAC Address',
    text: 'Look at the barcode sticker on the bottom of your MAG or Formuler box. It begins with 00:1A:79:XX:XX:XX.'
  },
  {
    name: 'Submit MAC Address to IPTVSubs8K',
    text: 'Provide your MAC address during checkout or to our 24/7 support team to register your box on our Stalker middleware.'
  },
  {
    name: 'Configure Stalker Portal URL',
    text: 'Go to MAG System Settings > Servers > Portals, enter Portal Name "IPTVSubs8K" and Portal URL (e.g. http://mag.iptvsubs8k.com/c/).'
  },
  {
    name: 'Reboot Device and Load Portal',
    text: 'Save settings and click Reboot. The device will boot directly into the IPTVSubs8K native television interface.'
  }
];

const MAG_FAQS = [
  {
    question: 'Why are MAG and Formuler devices preferred by traditional TV viewers?',
    answer: 'MAG and Formuler boxes are dedicated IPTV set-top boxes. They boot directly into live TV with number buttons on the remote control, instant channel changing, and dedicated EPG buttons, replicating the traditional cable TV box feel.'
  },
  {
    question: 'How do I setup MyTVOnline 2 or 3 on Formuler Z11 Pro Max?',
    answer: 'Open MyTVOnline, click Edit Portal, select Stalker Portal, input your Portal Nickname and Portal URL, and save. Because Formuler features advanced hardware, it delivers the fastest channel change speeds in the industry.'
  }
];

export default function MagFormulerSetupPage() {
  return (
    <>
      <HowToJsonLd
        name="How to Setup IPTV on MAG and Formuler Boxes"
        description="Configure MAG 254/322/524 and Formuler Z boxes using MAC address registration and Stalker middleware portal URLs."
        steps={HOW_TO_STEPS}
      />

      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Device Setup', item: '/setup' },
              { name: 'MAG & Formuler Boxes', item: '/setup/mag-formuler' }
            ]}
          />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Box className="w-3.5 h-3.5" />
              MAG 254/322/524 • Formuler Z11 • Stalker Portal
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How to Setup IPTV on MAG & Formuler Boxes
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Step-by-step tutorial to configure your MAC address and Stalker Portal URL on dedicated 
              Infomir MAG and Formuler streaming hardware for instant channel switching and native EPG.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 1: Locate and Register Your MAC Address
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Stalker middleware authenticates hardware by MAC address rather than username/password:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Look under your device or go to <strong>Settings &gt; System Info</strong>.</div>
                <div>• Note your 12-character MAC address starting with <strong>00:1A:79</strong>.</div>
                <div>• Provide this MAC address in your order notes or send it to our 24/7 activation desk.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Step 2: Enter Portal Settings on MAG Box
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect your device to our dedicated Stalker cluster:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                <div>• Navigate to <strong>Settings &gt; System Settings &gt; Servers &gt; Portals</strong>.</div>
                <div>• <strong>Portal 1 Name:</strong> IPTVSubs8K</div>
                <div>• <strong>Portal 1 URL:</strong> (Enter the portal link sent in your activation email)</div>
                <div>• Press the <strong>OK</strong> button on your remote to save.</div>
                <div>• Reboot the device. Your channel guide will boot automatically.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                <Image
                  src="/images/androidtvbox.webp"
                  alt="MAG and Formuler IPTV Box Setup"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900">Register Your MAG MAC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Get your MAC address activated in 2 minutes for our 24-hour test portal.
              </p>
              <Link
                href="/free-trial"
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 shadow-orange-sm"
              >
                Request Free 24h MAG Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={MAG_FAQS} />
    </>
  );
}

