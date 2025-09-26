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
// inside your Header component's JSX nav area
<button
  className="rounded-lg border px-3 py-1 text-sm"
  onClick={() => {
    const ev = new CustomEvent('open-search');
    window.dispatchEvent(ev);
  }}
>
  Search
</button>
