import Link from 'next/link';
import Image from 'next/image';
import site from '@/lib/site';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={site.logo}
              alt="Wild & Well logo"
              width={28}
              height={28}
              priority
            />
            <span className="font-semibold tracking-tight">Wild &amp; Well</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-slate-900 text-slate-600">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
