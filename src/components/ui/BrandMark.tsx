import React from 'react';

/**
 * IPTVSubs8K logo mark: a screen with a play glyph on the brand orange gradient.
 * Decorative only (aria-hidden); the brand name is always rendered as text next to it.
 */
export function BrandMark({ className = 'w-10 h-10' }: { className?: string }) {
  const id = React.useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`bm-bg-${id}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF8A3D" />
          <stop offset="0.55" stopColor="#FF6B00" />
          <stop offset="1" stopColor="#E2550A" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#bm-bg-${id})`} />
      <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" fill="none" stroke="#fff" strokeOpacity="0.25" />
      <rect x="8" y="10" width="24" height="16.5" rx="3.5" fill="none" stroke="#fff" strokeWidth="2.2" />
      <path d="M17.6 14.6v7.3a.6.6 0 0 0 .9.5l6-3.65a.6.6 0 0 0 0-1.02l-6-3.65a.6.6 0 0 0-.9.52z" fill="#fff" />
      <path d="M15 30.5h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
