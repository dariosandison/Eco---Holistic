import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-olive-300 bg-olive-50/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/guides" className="hover:text-olive-800">Guides</Link>
          <Link href="/blog" className="hover:text-olive-800">Blog</Link>
          <Link href="/deals" className="hover:text-olive-800">Deals</Link>
          <Link href="/contact" className="rounded-md border border-olive-300 px-3 py-1 hover:bg-olive-100">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
