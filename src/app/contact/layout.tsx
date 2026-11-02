import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Customer Support & Technical Help (24/7)',
  description: 'Get 24/7 customer support for IPTVSubs8K. Fast assistance via WhatsApp (+212625218443) or email (support@streamb4.com) for setup, activation, and inquiries.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

