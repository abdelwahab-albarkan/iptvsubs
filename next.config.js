/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const nextConfig = {
  cleanDistDir: false,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  distDir: process.env.VERCEL ? undefined : (process.env.NEXT_DIST_DIR || 'build'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    const redirectsPath = path.join(__dirname, 'data', 'redirects_duplicates.json');
    const redirectsList = [];
    if (fs.existsSync(redirectsPath)) {
      try {
        const raw = fs.readFileSync(redirectsPath, 'utf8');
        const legacyRedirects = JSON.parse(raw);
        legacyRedirects.forEach((r) => {
          redirectsList.push({
            source: `/guide/${r.fromSlug}`,
            destination: `/guide/${r.toSlug}`,
            permanent: true, // HTTP 301 Permanent Redirect
          });
        });
      } catch (err) {
        console.error('Error loading redirects_duplicates.json:', err);
      }
    }
    return redirectsList;
  },
};

module.exports = nextConfig;
