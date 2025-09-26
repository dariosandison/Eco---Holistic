// components/Header.js
'use client';

import Link from 'next/link';
import { useCallback } from 'react';

export default function Header() {
  const handleSearch = useCallback(() => {
    try {
      // Dispatch a global event that your SearchModal listens for.
      const ev = new CustomEvent('open-search');
      window.dispatchEvent(ev);
    } catch {
      // no-op on server / hydration edge cases
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight">Wild &amp; Well</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/guides" className="hover:opacity-80">Guides</Link>
          <Link href="/deals" className="hover:opacity-80">Deals</Link>
          <Link href="/blog" className="hover:opacity-80">Blog</Link>
          <Link href="/recommended" className="hover:opacity-80">Recommended</Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Fallback link for small screens or if modal isn't mounted */}
          <Link
            href="/search"
            className="inline-flex md:hidden items-center rounded-md border px-3 py-2 text-sm"
          >
            Search
          </Link>

          {/* Modal trigger for md+ screens */}
          <button
            type="button"
            onClick={handleSearch}
            className="hidden md:inline-flex items-center rounded-md border px-3 py-2 text-sm"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
