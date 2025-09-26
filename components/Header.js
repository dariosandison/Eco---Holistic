// components/Header.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV = [
  { href: '/guides', label: 'Guides' },
  { href: '/blog', label: 'Blog' },
  { href: '/deals', label: 'Deals' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto max-w-6xl px-4">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Image src="/logo.svg" alt="Wild & Well" width={140} height={28} priority />
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className="hover:opacity-80">
              {i.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="md:hidden grid gap-2 pb-4 text-sm">
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-md px-3 py-2 hover:bg-olive-100"
              onClick={() => setOpen(false)}
            >
              {i.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
