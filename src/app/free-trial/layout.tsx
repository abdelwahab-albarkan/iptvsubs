import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: '24-Hour Free IPTV Trial — Test 8K & 4K Streaming Risk-Free',
  description: 'Request a 24-hour IPTV free trial. Stream over 25,000 live channels, sports passes, and 120,000+ movies on Firestick, Smart TV, or Android. Instant automated activation.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/free-trial`,
  },
};

export default function FreeTrialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

