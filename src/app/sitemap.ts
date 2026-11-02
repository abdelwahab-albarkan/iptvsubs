import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { getAllGuides } from '@/lib/guidesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const coreRoutes: { path: string; priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }[] = [
    // Core Commercial & Lead Pages
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/pricing', priority: 0.95, changeFrequency: 'daily' },
    { path: '/free-trial', priority: 0.95, changeFrequency: 'daily' },
    { path: '/channels', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/sports', priority: 0.9, changeFrequency: 'daily' },
    { path: '/reseller', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/guide', priority: 0.85, changeFrequency: 'daily' },

    // Device Setup Tutorials Hub & Pages
    { path: '/setup', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/setup/firestick', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/setup/android-tv', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/setup/smart-tv', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/setup/apple-tv', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/setup/pc-mac', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/setup/mag-formuler', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/setup/roku', priority: 0.8, changeFrequency: 'weekly' },

    // Streaming Players Hub & Guides
    { path: '/apps', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/apps/iptv-smarters-pro', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/apps/tivimate', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/apps/ibo-player', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/apps/xciptv', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/apps/kodi', priority: 0.8, changeFrequency: 'weekly' },

    // Troubleshooting Guides
    { path: '/troubleshooting', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/troubleshooting/iptv-buffering', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/troubleshooting/iptv-not-working', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/troubleshooting/vpn-isp-throttling', priority: 0.8, changeFrequency: 'weekly' },

    // Authority, Comparison & Buyer Guides
    { path: '/compare/cable-vs-iptv', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/guides/is-iptv-legal-usa', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/guides/iptv-scams-guide', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/guides/best-iptv-providers-usa', priority: 0.8, changeFrequency: 'weekly' },

    // Trust & Support Pages
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/html-sitemap', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/refund-policy', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/terms', priority: 0.4, changeFrequency: 'monthly' }
  ];

  const coreSitemapEntries = coreRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Append all 4,000 unique content guides
  const guides = getAllGuides();
  const guideSitemapEntries = guides.map((guide) => ({
    url: `${baseUrl}${guide.path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  return [...coreSitemapEntries, ...guideSitemapEntries];
}
