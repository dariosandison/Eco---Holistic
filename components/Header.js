// components/Header.js
import Link from 'next/link';
import site from '@/site.config';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold text-lg">
          {site.name}
        </Link>

        <nav className="flex gap-4">
          {Array.isArray(site.nav) &&
            site.nav.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:underline">
                {label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
