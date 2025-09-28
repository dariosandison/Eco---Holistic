// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.svg" alt="Wild & Well" className="footer-logo" />
          <p className="footer-tagline">Your guide to holistic health and eco friendly living</p>
        </div>

        <nav className="footer-nav">
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link></li>
              <li><Link href="/legal/product-disclosure">Product Disclosure</Link></li>
              <li><Link href="/legal/cookies">Cookies</Link></li>
              <li><Link href="/legal/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Wild &amp; Well</span>
        </div>
      </div>
    </footer>
  );
}
