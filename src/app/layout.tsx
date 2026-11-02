import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { THEME_INIT_SCRIPT } from '@/lib/theme';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/constants';

// Self-hosted variable fonts (latin subset): no request to Google at build or run time.
const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter',
});
const jakarta = localFont({
  src: './fonts/plus-jakarta-sans-latin-wght-normal.woff2',
  weight: '200 800',
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Premium 8K & 4K IPTV Service Provider in USA`,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: [
    'iptv service',
    'best iptv service',
    'iptv usa',
    '8k iptv',
    '4k iptv',
    'iptv subscription',
    'iptv firestick',
    'iptv local channels',
    'iptv smarters pro',
    'tivimate iptv'
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Premium 8K & 4K IPTV Service Provider in USA`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/og/iptvsubs8k-social-share-banner-1200x630.webp',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Premium IPTV Streaming in 8K & 4K UHD`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — Premium 8K & 4K IPTV Service Provider in USA`,
    description: SITE_CONFIG.description,
    images: ['/images/og/iptvsubs8k-social-share-banner-1200x630.webp'],
    creator: '@iptvsubs8k',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="bg-white text-slate-900 flex flex-col min-h-screen antialiased selection:bg-[#FF6B00] selection:text-white font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
