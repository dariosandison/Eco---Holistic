// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-tagline">
            Your guide to holistic health and eco friendly living
          </p>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
              <li><Link href="/product-disclosure">Product Disclosure</Link></li>
              <li><Link href="/cookies">Cookies</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        © {year} Wild &amp; Well
      </div>
    </footer>
  );
}
