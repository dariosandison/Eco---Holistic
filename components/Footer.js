// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer site-footer--fixed" role="contentinfo">
      <div className="container footer-bar">
        <span className="footer-copy">© {year} Wild &amp; Well</span>
        <ul className="legal-list" aria-label="Legal links">
          <li><Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link></li>
          <li><Link href="/legal/product-disclosure">Product Disclosure</Link></li>
          <li><Link href="/legal/cookies">Cookies</Link></li>
          <li><Link href="/legal/disclaimer">Disclaimer</Link></li>
        </ul>
      </div>
    </footer>
  );
}
