import Link from 'next/link';
import Image from 'next/image';
import site from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src={site.logo} alt="Wild & Well logo" width={28} height={28} />
            <span className="font-semibold tracking-tight">Wild &amp; Well</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {site.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Wild &amp; Well. Informational only; not medical advice. We may earn a commission on
          qualifying purchases.
        </p>
      </div>
    </footer>
  );
}
