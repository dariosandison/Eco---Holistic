// components/SiteHeader.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = document.getElementById('site-header');
    if (!el) return;
    const setH = () =>
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`);
    setH();
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header id="site-header" className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:border focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-2">
          <Image src="/logo.png" alt="Wild & Well" width={32} height={32} priority />
          <span className="font-semibold text-zinc-900">Wild &amp; Well</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          <Link
            href="/search"
            onClick={(e) => {
              // Prefer command palette while keeping /search as a real URL (open in new tab works).
              e.preventDefault();
              try {
                window.dispatchEvent(new Event('ww_open_palette'));
              } catch {}
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            Search
            <span className="hidden rounded-md border border-zinc-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-zinc-600 md:inline">
              Ctrl/⌘ K
            </span>
          </Link>
          <Link href="/blog" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Wellness Insights
          </Link>
          <Link href="/topics" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Topics
          </Link>
          <Link href="/start-here" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Start here
          </Link>
          <Link href="/shortlists" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Shortlists
          </Link>
          <Link href="/nutrition" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Nutrition
          </Link>
          <Link href="/movement" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Movement
          </Link>
          <Link href="/deals" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Deals
          </Link>
          <Link
            href="/shopping-list"
            onClick={() => trackEvent('click_shopping_list')}
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            Free List
          </Link>
          <Link href="/how-we-test" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            How We Test
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-zinc-900" />
            <span className="block h-0.5 w-5 bg-zinc-900" />
            <span className="block h-0.5 w-5 bg-zinc-900" />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`${open ? 'block' : 'hidden'} border-t border-zinc-200/60 md:hidden`}>
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          <Link
            href="/search"
            onClick={(e) => {
              e.preventDefault();
              try {
                window.dispatchEvent(new Event('ww_open_palette'));
              } catch {}
              setOpen(false);
            }}
            className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Search
          </Link>
          <Link href="/blog" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Wellness Insights
          </Link>
          <Link href="/topics" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Topics
          </Link>
          <Link href="/start-here" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Start here
          </Link>
          <Link href="/shortlists" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Shortlists
          </Link>
          <Link href="/nutrition" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Nutrition
          </Link>
          <Link href="/movement" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Movement
          </Link>
          <Link href="/deals" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Deals
          </Link>
          <Link
            href="/shopping-list"
            onClick={() => trackEvent('click_shopping_list')}
            className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Free List
          </Link>
          <Link href="/how-we-test" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            How We Test
          </Link>
          <Link href="/affiliate-disclosure" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Affiliate disclosure
          </Link>
          <Link href="/about" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            About
          </Link>
          <Link href="/contact" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
