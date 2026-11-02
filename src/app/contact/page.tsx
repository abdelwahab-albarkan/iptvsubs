'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';
import { Mail, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'support',
    device: 'firestick',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    trackEvent('contact_form_submitted', {
      department: formData.department,
      device: formData.device
    });

    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <>
      <div className="py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact Support', item: '/contact' }]} />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B00] shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              24/7 Technical Assistance & Customer Care
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Contact IPTVSubs8K Support
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Have questions regarding channel activation, app setup, reseller credits, or billing? 
              Our dedicated engineering and support specialists are standing by 24/7 to assist you.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm shadow-2xl">
              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. 
                    Your ticket has been assigned to our on-duty support engineers. We will respond to 
                    <span className="text-[#FF6B00] font-semibold"> {formData.email}</span> within 15 to 30 minutes.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', department: 'support', device: 'firestick', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Open a Support Ticket
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Average response time is under 20 minutes across all US time zones.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:border-accent-cyan"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:border-accent-cyan"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-dept" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Department *
                      </label>
                      <select
                        id="contact-dept"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-accent-cyan"
                      >
                        <option value="support">Technical & Setup Support</option>
                        <option value="sales">Pre-Sales & Free Trial Inquiry</option>
                        <option value="billing">Billing & Refund Request</option>
                        <option value="reseller">Reseller Program & Wholesale</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-device" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Device Type
                      </label>
                      <select
                        id="contact-device"
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-accent-cyan"
                      >
                        <option value="firestick">Amazon Firestick / Fire TV</option>
                        <option value="android-tv">Android TV / Shield / Google TV</option>
                        <option value="smart-tv">Samsung / LG Smart TV</option>
                        <option value="apple-tv">Apple TV / iOS</option>
                        <option value="pc-mac">Windows PC / Mac</option>
                        <option value="mag">MAG / Formuler Box</option>
                        <option value="other">Other / Not Listed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Your Message / Details *
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={5}
                      required
                      placeholder="Please describe your question or issue in detail (e.g. device model, app used, error message)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:border-accent-cyan"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-b from-[#FF7A1A] to-[#EA580C] hover:brightness-105 shadow-orange transition-all flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <span>Submitting Support Ticket...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Ticket to Support Team</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Direct Contact Channels
              </h3>

              <a
                href="https://wa.me/212625218443"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Instant WhatsApp Chat</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5 group-hover:text-emerald-400 transition-colors">+212 625 218 443</div>
                  <div className="text-[11px] text-slate-500">Direct response from engineering team</div>
                </div>
              </a>

              <a
                href="mailto:support@streamb4.com"
                className="flex items-start gap-3.5 p-3 rounded-xl bg-orange-50 border border-orange-200 hover:border-orange-400 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#FF6B00] font-bold uppercase tracking-wider">Official Email Helpdesk</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5 group-hover:text-[#FF6B00] transition-colors">support@streamb4.com</div>
                  <div className="text-[11px] text-slate-500">Guaranteed response under 2 hours</div>
                </div>
              </a>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Service Level Guarantee</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">99.9% Uptime Commitment</div>
                  <div className="text-[11px] text-slate-500">7-Day full money-back policy</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-2xl bg-white/50 border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                Need Immediate Help?
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Most setup and buffering issues can be resolved instantly by checking our technical guides:
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>
                  <Link href="/troubleshooting/iptv-buffering" className="text-[#FF6B00] hover:underline">
                    → How to Stop IPTV Buffering & Freezing
                  </Link>
                </li>
                <li>
                  <Link href="/setup/firestick" className="text-[#FF6B00] hover:underline">
                    → Amazon Firestick Installation Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-[#FF6B00] hover:underline">
                    → Review our 7-Day Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

