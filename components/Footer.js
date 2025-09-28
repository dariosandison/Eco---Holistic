// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t"
      style={{ background: '#3f4f38', borderColor: 'rgba(0,0,0,0.15)' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 text-[15px]">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/editorial-policy">Editorial Policy</FooterLink>
            <FooterLink href="/how-we-test">How We Test</FooterLink>
            <FooterLink href="/legal/privacy">Privacy</FooterLink>
            <FooterLink href="/legal/cookies">Cookies</FooterLink>
            <FooterLink href="/legal/terms">Terms</FooterLink>
            <FooterLink href="/legal/affiliate-disclosure">Affiliate Disclosure</FooterLink>
            <FooterLink href="/legal/disclaimer">Disclaimer</FooterLink>
            <FooterLink href="/legal/product-disclosure">Product Disclosure</FooterLink>
          </nav>

          <div className="flex items-center gap-3">
            <a aria-label="Instagram" href="https://instagram.com/" target="_blank" rel="noreferrer"
               className="inline-flex h-8 w-8 items-center justify-center rounded-full"
               style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>
              {/* IG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 7a5 5 0 105 5 5 5 0 00-5-5zm0 8.2A3.2 3.2 0 1115.2 12 3.2 3.2 0 0112 15.2z"></path>
                <circle cx="17.5" cy="6.5" r="1.2"></circle>
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2A3 3 0 004 7v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3z"></path>
              </svg>
            </a>
            <a aria-label="Pinterest" href="https://pinterest.com/" target="_blank" rel="noreferrer"
               className="inline-flex h-8 w-8 items-center justify-center rounded-full"
               style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>
              {/* P */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a9.8 9.8 0 00-3.2 19.1c-.05-.81-.09-2.06.02-2.95l1.26-5.35s-.32-.64-.32-1.58c0-1.48.86-2.59 1.93-2.59.91 0 1.35.68 1.35 1.49 0 .91-.58 2.27-.88 3.52-.25 1.05.53 1.9 1.57 1.9 1.89 0 3.34-1.99 3.34-4.86 0-2.54-1.83-4.32-4.44-4.32a4.66 4.66 0 00-4.87 4.74c0 .93.36 1.93.82 2.47a.33.33 0 01.08.31l-.31 1.21c-.05.19-.16.23-.38.14-1.41-.65-2.29-2.7-2.29-4.34 0-3.53 2.56-6.78 7.38-6.78 3.87 0 6.88 2.76 6.88 6.44 0 3.85-2.43 6.96-5.8 6.96-1.13 0-2.19-.59-2.55-1.29l-.69 2.64c-.25.96-.93 2.16-1.39 2.89A9.8 9.8 0 1012 2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-sm opacity-80" style={{ color: '#fff' }}>
          © {new Date().getFullYear()} Wild & Well · Independent · Reader-supported
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="text-sm"
          style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
      {children}
    </Link>
  );
}
