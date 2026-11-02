import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbJsonLd, BreadcrumbItem } from '@/components/seo/JsonLd';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [
    { name: 'Home', item: '/' },
    ...items
  ];

  return (
    <>
      <BreadcrumbJsonLd items={allItems} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200/90 mb-6 text-sm shadow-2xs">
        <ol className="flex items-center flex-wrap gap-2 text-slate-500">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#FF6B00] transition-colors"
              title="Return to IPTVSubs8K Home"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((crumb, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={crumb.item} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {isLast ? (
                  <span className="text-slate-900 font-bold truncate max-w-xs md:max-w-md" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.item}
                    className="hover:text-[#FF6B00] text-slate-600 transition-colors truncate max-w-[150px] md:max-w-none font-medium"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
