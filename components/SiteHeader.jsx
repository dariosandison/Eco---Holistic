import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://www.instagram.com/wildandwell.store" aria-label="Instagram" rel="noopener noreferrer" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@wildandwell.store" aria-label="TikTok" rel="noopener noreferrer" target="_blank">TikTok</a>
          <a href="https://www.pinterest.com/wildandwellstore" aria-label="Pinterest" rel="noopener noreferrer" target="_blank">Pinterest</a>
        </div>
      </div>
    </header>
  );
}
