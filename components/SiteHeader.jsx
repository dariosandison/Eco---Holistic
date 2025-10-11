// components/SiteHeader.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Wild & Well"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold text-zinc-900">Wild &amp; Well</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          <Link href="/guides" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Guides
          </Link>
          <Link href="/blog" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Blog
          </Link>
          <Link href="/how-we-test" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            How We Test
          </Link>
          <Link
            href="/product-disclosure"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            Disclosure
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
          <Link href="/guides" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Guides
          </Link>
          <Link href="/blog" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            Blog
          </Link>
          <Link href="/how-we-test" className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
            How We Test
          </Link>
          <Link
            href="/product-disclosure"
            className="rounded-md px-2 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Disclosure
          </Link>
        </nav>
      </div>
    </header>
  );
}
