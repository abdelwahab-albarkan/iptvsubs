'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-amber-300 hover:text-[#FF6B00] ring-1 ring-slate-200 dark:ring-white/10 transition-colors ${className}`}
    >
      <Sun className={`absolute w-[18px] h-[18px] transition-all duration-300 ${dark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
      <Moon className={`absolute w-[18px] h-[18px] transition-all duration-300 ${dark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
    </button>
  );
}
