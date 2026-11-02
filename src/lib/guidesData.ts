import fs from 'fs';
import path from 'path';

export interface GuidePage {
  id: number;
  slug: string;
  url: string;
  path: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  clusterId: string;
  cluster: string;
  title: string;
  h1: string;
  metaDescription: string;
  searchIntent: string;
  volume: number;
  difficulty: number;
  readTime: string;
  image: string;
  specs: { label: string; value: string }[];
  sections: { title: string; content: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: {
    slug: string;
    title: string;
    path: string;
    primaryKeyword: string;
  }[];
  isIndexable: boolean;
  lastModified: string;
}

let cachedPages: GuidePage[] | null = null;
let pagesBySlugMap: Map<string, GuidePage> | null = null;

export function getAllGuides(): GuidePage[] {
  if (!cachedPages) {
    const filePath = path.join(process.cwd(), 'data', 'pages_4000.json');
    const raw = fs.readFileSync(filePath, 'utf8');
    cachedPages = JSON.parse(raw);
  }
  return cachedPages!;
}

export function getGuideBySlug(slug: string): GuidePage | null {
  if (!pagesBySlugMap) {
    const pages = getAllGuides();
    pagesBySlugMap = new Map(pages.map(p => [p.slug, p]));
  }
  return pagesBySlugMap.get(slug) || null;
}

export function getAllGuideSlugs(): { slug: string }[] {
  const pages = getAllGuides();
  return pages.map(p => ({ slug: p.slug }));
}

export function getGuidesByCluster(clusterId: string, limit: number = 12): GuidePage[] {
  const pages = getAllGuides();
  return pages.filter(p => p.clusterId === clusterId).slice(0, limit);
}

let redirectMap: Map<string, string> | null = null;

export function getRedirectForSlug(slug: string): string | null {
  if (!redirectMap) {
    const filePath = path.join(process.cwd(), 'data', 'redirects_duplicates.json');
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, 'utf8');
        const list: { fromSlug: string; toSlug: string }[] = JSON.parse(raw);
        redirectMap = new Map(list.map(r => [r.fromSlug, r.toSlug]));
      } catch {
        redirectMap = new Map();
      }
    } else {
      redirectMap = new Map();
    }
  }
  return redirectMap.get(slug) || null;
}

