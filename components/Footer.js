// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-12 py-8 text-sm">
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Wild & Well" className="h-6 w-6" />
          <span className="font-medium">Wild &amp; Well</span>
          <span>© {year}</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/about">About</Link>
          <Link href="/disclosure">Disclosure</Link>
          <Link href="/affiliate-disclosure">Affiliate</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
