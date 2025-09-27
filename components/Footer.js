// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer">
        <div className="footer-top">
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          </div>
          <div className="icons">
            <a className="icon" aria-label="Instagram" href="https://instagram.com/wildandwell_uk" target="_blank" rel="noopener noreferrer">IG</a>
            <a className="icon" aria-label="Pinterest" href="https://www.pinterest.com/wildandwell_uk" target="_blank" rel="noopener noreferrer">P</a>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Wild &amp; Well. All rights reserved.</small>
          <small>Made with care — affiliate links may earn us a small commission.</small>
        </div>
      </div>
    </footer>
  );
}
