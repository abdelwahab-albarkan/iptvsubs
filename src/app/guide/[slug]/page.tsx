import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ShareAndCite } from '@/components/ui/ShareAndCite';
import { ArticleJsonLd, FaqJsonLd, ProductPricingJsonLd, BreadcrumbJsonLd, HowToJsonLd } from '@/components/seo/JsonLd';
import { getGuideBySlug, getAllGuideSlugs, getRedirectForSlug } from '@/lib/guidesData';
import {
  CheckCircle2,
  Clock,
  Calendar,
  Layers,
  ArrowRight,
  Shield,
  HelpCircle,
  Tv,
  Zap,
  Info,
  ExternalLink,
  Award,
  Cpu
} from 'lucide-react';

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllGuideSlugs();
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    const redirectSlug = getRedirectForSlug(params.slug);
    if (redirectSlug) {
      return {
        title: 'Redirecting to Guide | IPTVSubs8K',
        alternates: {
          canonical: `https://iptvsubs8k.com/guide/${redirectSlug}`
        }
      };
    }
    return {
      title: 'Guide Not Found | IPTVSubs8K',
      robots: { index: false, follow: false }
    };
  }

  const cleanTitle = guide.title.replace(/\s*\|\s*IPTVSubs8K\s*$/i, '');

  return {
    title: cleanTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: guide.url
    },
    openGraph: {
      title: cleanTitle,
      description: guide.metaDescription,
      url: guide.url,
      siteName: 'IPTVSubs8K',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: guide.image,
          width: 800,
          height: 450,
          alt: guide.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.metaDescription,
      images: [guide.image]
    }
  };
}

function getClusterPillar(clusterId: string): { name: string; url: string } {
  switch (clusterId) {
    case 'firestick-guides':
      return { name: 'Firestick & Fire TV Optimization Hub', url: '/setup/firestick' };
    case 'android-devices':
      return { name: 'Android TV & Nvidia Shield Hub', url: '/setup/android-tv' };
    case 'smart-tv-setups':
      return { name: 'Samsung & LG Smart TV Setup Hub', url: '/setup/smart-tv' };
    case 'streaming-apps':
      return { name: 'IPTV Player Apps & Software Hub', url: '/apps/tivimate' };
    case 'sports-streaming':
      return { name: 'Live Sports & PPV Streaming Hub', url: '/sports' };
    case 'comparisons-reviews':
      return { name: 'Cable TV vs IPTV Cord-Cutting Hub', url: '/compare/cable-vs-iptv' };
    case 'troubleshooting':
      return { name: 'Anti-Buffering & VPN Troubleshooting Hub', url: '/troubleshooting/iptv-buffering' };
    case 'roku-streaming':
      return { name: 'Roku Screen Mirroring & Casting Hub', url: '/setup/roku' };
    case 'devices-hardware':
      return { name: 'Apple TV 4K & Dedicated Hardware Hub', url: '/setup/apple-tv' };
    case 'subscription-pricing':
      return { name: 'Multi-Connection Pricing & Plans', url: '/pricing' };
    case 'trials-and-tests':
      return { name: '24-Hour Free Trial Test Hub', url: '/free-trial' };
    case 'legal-safety':
      return { name: 'US Legal & Consumer Rights Hub', url: '/guides/is-iptv-legal-usa' };
    case 'hardware-encoders-antennas':
      return { name: 'Digital Antenna & OTA Hybrid Guide', url: '/guide/antennas-antenna' };
    default:
      return { name: 'IPTV Knowledge Base Directory', url: '/guide' };
  }
}

export default function GuideDetailPage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    const redirectSlug = getRedirectForSlug(params.slug);
    if (redirectSlug) {
      redirect(`/guide/${redirectSlug}`);
    }
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Guides', item: '/guide' },
    { name: guide.cluster, item: `/guide?cluster=${guide.clusterId}` },
    { name: guide.primaryKeyword, item: guide.path }
  ];

  const pillar = getClusterPillar(guide.clusterId);

  // Extract HowTo steps if sections represent sequential setup instructions
  const howToSteps = guide.sections
    .filter((sec) => sec.title.toLowerCase().includes('step') || sec.title.toLowerCase().includes('how to'))
    .map((sec) => ({
      name: sec.title,
      text: sec.content.slice(0, 280)
    }));

  return (
    <article className="min-h-screen bg-white text-slate-900 pt-10 pb-20">
      {/* 1. Complete Schema.org Structured Data */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ArticleJsonLd
        title={guide.h1}
        description={guide.metaDescription}
        url={guide.url}
        datePublished="2026-01-15T08:00:00Z"
        dateModified="2026-10-31T12:00:00Z"
      />
      {howToSteps.length >= 2 && (
        <HowToJsonLd
          name={guide.h1}
          description={guide.metaDescription}
          steps={howToSteps}
        />
      )}
      {guide.faqs && guide.faqs.length > 0 && <FaqJsonLd items={guide.faqs} />}
      {(guide.clusterId === 'subscription-pricing' || guide.clusterId === 'iptv-services') && (
        <ProductPricingJsonLd
          name={`IPTVSubs8K Subscription - ${guide.primaryKeyword}`}
          description={guide.metaDescription}
          minPrice={39.99}
          maxPrice={179.99}
        />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Visual Breadcrumbs (Internal Linking & Hierarchy) */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* 3. Upward Pillar Hub Link Banner (Internal Linking Architecture) */}
        <div className="mt-6 mb-4 p-3.5 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-between gap-3 text-xs sm:text-sm rounded-2xl p-4 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-700">
            <Layers className="w-4 h-4 text-[#FF6B00] shrink-0" />
            <span>
              Part of our comprehensive series: <strong className="text-slate-900">{guide.cluster}</strong>
            </span>
          </div>
          <Link
            href={pillar.url}
            className="text-[#FF6B00] hover:underline font-bold inline-flex items-center gap-1 shrink-0"
          >
            <span>{pillar.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4. Article Header & Meta */}
        <header className="mt-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF6B00] border border-orange-200">
              <Layers className="w-3.5 h-3.5" />
              {guide.cluster}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 font-semibold">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {guide.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              Updated Oct 31, 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {guide.h1}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {guide.metaDescription}
          </p>

          {/* Editorial Context & Transparency Card */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-900 font-bold">IPTVSubs8K Editorial Team</div>
                <div className="text-[11px] text-slate-500">Streaming Guide & Configuration Tutorial</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#FF6B00] font-semibold">
              <Info className="w-4 h-4" />
              <span>Independent Educational Resource for Cord-Cutters</span>
            </div>
          </div>
        </header>

        {/* 5. Executive Summary & Key Takeaways */}
        <section className="mb-10 p-6 rounded-3xl bg-orange-50/60 border border-orange-200/90 shadow-2xs">
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-[#FF6B00] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-black text-slate-900 mb-2">Executive Summary & Key Takeaways</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Primary Focus:</strong> Complete technical coverage for {guide.primaryKeyword} with tested configurations for US viewers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Freeze™ 9.2:</strong> High-bandwidth server routing with 99.9% uptime and zero throttling during peak hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Multi-Device Freedom:</strong> Compatible with Amazon Firestick, Smart TVs, Android Box, Apple TV, PC, and mobile.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Quick Table of Contents (Website Structure & Jump Links) */}
        <nav aria-label="Table of Contents" className="mb-10 p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-3 flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>Guide Table of Contents:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a href="#technical-specs" className="text-slate-600 hover:text-[#FF6B00] transition-colors flex items-center gap-1.5 font-medium">
              <span>•</span> Technical Specifications & Benchmarks
            </a>
            {guide.sections.map((sec, idx) => (
              <a
                key={idx}
                href={`#section-${idx + 1}`}
                className="text-slate-600 hover:text-[#FF6B00] transition-colors truncate flex items-center gap-1.5 font-medium"
              >
                <span>•</span> {sec.title}
              </a>
            ))}
            {guide.faqs && guide.faqs.length > 0 && (
              <a href="#faqs" className="text-slate-600 hover:text-[#FF6B00] transition-colors flex items-center gap-1.5 font-medium">
                <span>•</span> Frequently Asked Questions
              </a>
            )}
            <a href="#related-guides" className="text-slate-600 hover:text-[#FF6B00] transition-colors flex items-center gap-1.5 font-medium">
              <span>•</span> Related {guide.cluster} Guides
            </a>
          </div>
        </nav>

        {/* 7. Featured Image */}
        <div className="relative mb-12 rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 aspect-video max-w-3xl mx-auto shadow-xl">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        {/* 8. Technical Specifications Matrix */}
        <section id="technical-specs" className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Tv className="w-6 h-6 text-[#FF6B00]" />
            Technical Specifications & Benchmark Criteria
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guide.specs.map((spec, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{spec.label}</div>
                <div className="text-sm font-bold text-slate-900">{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Structured Content Sections */}
        <div className="space-y-10">
          {guide.sections.map((sec, idx) => (
            <section
              key={idx}
              id={`section-${idx + 1}`}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all scroll-mt-28"
            >
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-orange-50 text-[#FF6B00] text-sm font-extrabold border border-orange-200">
                  {idx + 1}
                </span>
                {sec.title}
              </h2>
              <div className="text-slate-700 leading-relaxed text-base space-y-4 whitespace-pre-line font-normal">
                {sec.content}
              </div>
            </section>
          ))}
        </div>

        {/* 10. External Authority Citations & Standards (Signals Research Depth & Outbound Quality) */}
        <div className="my-10 p-6 rounded-3xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
            <Award className="w-4 h-4 text-[#FF6B00]" />
            <span>Technical Standards & Telecommunication Citations</span>
          </div>
          <p className="leading-relaxed mb-3">
            Our streaming recommendations adhere strictly to industry benchmarks established by the International Telecommunication Union (ITU-T Recommendation H.265 / HEVC), Federal Communications Commission (FCC) high-speed broadband definitions (100/20 Mbps), and Wi-Fi Alliance 802.11ac/ax latency metrics.
          </p>
          <div className="flex flex-wrap gap-4 text-slate-500 font-medium">
            <span className="text-[#FF6B00] font-mono">ITU-T H.265 Standard Compliant</span>
            <span>•</span>
            <span className="text-[#FF6B00] font-mono">10Gbps Tier-1 Edge CDNs</span>
            <span>•</span>
            <span className="text-[#FF6B00] font-mono">60 FPS Native Sports Feeds</span>
          </div>
        </div>

        {/* 11. Social Share, Citation & Backlink Magnet Component */}
        <ShareAndCite
          title={guide.title}
          url={guide.url}
          primaryKeyword={guide.primaryKeyword}
        />

        {/* 12. FAQ Accordion Section */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section id="faqs" className="mt-14 mb-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 scroll-mt-28">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-6 h-6 text-[#FF6B00]" />
              <h2 className="text-2xl font-black text-slate-900">
                Frequently Asked Questions about {guide.primaryKeyword}
              </h2>
            </div>
            <div className="space-y-4">
              {guide.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-[#FF6B00] font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 13. Secondary Keywords Coverage */}
        {guide.secondaryKeywords && guide.secondaryKeywords.length > 0 && (
          <section className="mb-12 p-5 rounded-xl bg-slate-50 border border-slate-200 rounded-2xl">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Info className="w-4 h-4 text-slate-500" />
              Related Search Queries Covered in This Guide
            </div>
            <div className="flex flex-wrap gap-2">
              {guide.secondaryKeywords.map((sk, i) => (
                <span key={i} className="px-3 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 font-medium">
                  {sk}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 14. Contextual Internal Links Grid (Lateral Internal Linking) */}
        {guide.relatedLinks && guide.relatedLinks.length > 0 && (
          <section id="related-guides" className="mb-14 scroll-mt-28">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-6 h-6 text-[#FF6B00]" />
                <span>Related {guide.cluster} Guides</span>
              </h2>
              <Link
                href={pillar.url}
                className="text-xs sm:text-sm text-[#FF6B00] hover:underline font-bold flex items-center gap-1"
              >
                <span>View Full Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guide.relatedLinks.map((rel, i) => (
                <Link
                  key={i}
                  href={rel.path}
                  className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-300 shadow-2xs hover:shadow-md transition-all duration-200"
                >
                  <div className="text-xs text-[#FF6B00] font-bold mb-1 group-hover:underline">
                    {rel.primaryKeyword}
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                    {rel.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 15. Cross-Pillar Authority Navigation (Internal Linking Web) */}
        <div className="my-12 p-6 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Explore Essential IPTV Resources & Setup Hubs:
          </div>
          <div className="flex flex-wrap gap-2.5 text-xs">
            <Link href="/setup/firestick" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              Firestick Setup
            </Link>
            <Link href="/setup/android-tv" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              Android TV & Shield
            </Link>
            <Link href="/setup/smart-tv" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              Samsung & LG Smart TV
            </Link>
            <Link href="/apps/tivimate" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              TiviMate Player
            </Link>
            <Link href="/apps/iptv-smarters-pro" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              IPTV Smarters Pro
            </Link>
            <Link href="/troubleshooting/iptv-buffering" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              Fix Buffering & Freezing
            </Link>
            <Link href="/troubleshooting/vpn-isp-throttling" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              Bypass ISP Throttling
            </Link>
            <Link href="/channels" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              Live Sports & PPV
            </Link>
            <Link href="/channels" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              25,000+ Channels
            </Link>
            <Link href="/pricing" className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:text-[#FF6B00] text-slate-700 font-semibold shadow-2xs transition-colors">
              Subscription Pricing
            </Link>
          </div>
        </div>

        {/* 16. High-Converting CTA Banner */}
        <section className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-center relative overflow-hidden shadow-2xl text-white">
          <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 to-transparent pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Experience Anti-Freeze™ 9.2 Streaming?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-base">
            Test 25,000+ live 4K channels and 120,000+ VOD movies on your favorite device. Zero risk, no credit card required for trial, and instant activation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free-trial"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-black text-base shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
            >
              Start 24-Hour Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 text-white font-semibold text-base hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              View All Pricing Plans
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              7-Day Money-Back Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Instant Automated Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              Anti-Freeze™ 9.2 Architecture
            </span>
          </div>
        </section>
      </div>
    </article>
  );
}
