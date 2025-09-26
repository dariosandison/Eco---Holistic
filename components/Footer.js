// components/Footer.js
import Link from 'next/link';
import site from '@/site.config';

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/terms', label: 'Terms' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/disclosure', label: 'Product Disclosure' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="opacity-80">
            © {year} {site.name}. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-4">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:underline">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {typeof site.footer?.disclaimer === 'string' && site.footer.disclaimer && (
          <p className="mt-4 opacity-70">{site.footer.disclaimer}</p>
        )}
      </div>
    </footer>
  );
}
