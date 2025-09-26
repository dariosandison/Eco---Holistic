// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-olive-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-olive-900/80">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-medium text-olive-900">Wild &amp; Well</p>
            <p className="mt-1">
              Affiliate links may earn us a commission at no extra cost to you. We only
              recommend products we’d give to friends.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-2 sm:justify-self-end">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/disclosure">Product Disclosure</Link>
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Wild &amp; Well</p>
          <p className="opacity-80">Live wild. Live well.</p>
        </div>
      </div>
    </footer>
  );
}
