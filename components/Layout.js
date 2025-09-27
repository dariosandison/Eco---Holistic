// components/Layout.js
import Link from 'next/link';
import SearchBox from './SearchBox';

const SocialIcon = ({ type, href, label }) => (
  <a className="icon" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
    {type === 'ig' ? (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.04c0 4.43 2.87 8.2 6.86 9.53-.09-.81-.17-2.06.03-2.95.18-.8 1.17-5.13 1.17-5.13s-.3-.61-.3-1.51c0-1.42.82-2.48 1.84-2.48.87 0 1.29.65 1.29 1.43 0 .87-.55 2.16-.83 3.36-.24 1.02.51 1.85 1.52 1.85 1.83 0 3.24-1.93 3.24-4.71 0-2.46-1.77-4.18-4.29-4.18-2.92 0-4.64 2.19-4.64 4.45 0 .88.34 1.82.77 2.33.08.09.09.16.07.25-.08.27-.25.86-.28.98-.04.13-.14.17-.32.1-1.19-.49-1.94-2.03-1.94-3.27 0 -2.66 1.94 -5.1 5.6 -5.1 2.94 0 5.23 2.1 5.23 4.91 0 2.92 -1.84 5.27 -4.4 5.27 -0.86 0 -1.66 -0.45 -1.93 -0.98l-.53 2.01c-.19.72-.7 1.63-1.04 2.18.79.24 1.62.37 2.49.37 5.5 0 10-4.49 10-10S17.5 2.04 12 2.04z"/>
      </svg>
    )}
  </a>
);

export default function Layout({ children }) {
  const year = new Date().getFullYear();
  return (
    <>
      <header className="site-header">
        <div className="container navbar">
          <Link className="logo" href="/">
            <img src="/logo.svg" alt="Wild & Well" onError={(e)=>{ e.currentTarget.style.display='none'; }} />
            <span>Wild & Well</span>
          </Link>

          <nav className="nav-links">
            <Link href="/guides">Guides</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/contact">Contact</Link>
            <SearchBox />
            <div className="social">
              <SocialIcon type="ig" href="https://instagram.com/wildandwell_uk" label="Instagram" />
              <SocialIcon type="pin" href="https://pinterest.com/wildandwell_uk/" label="Pinterest" />
            </div>
          </nav>
        </div>
      </header>

      <main className="container">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div className="footer-links">
            {/* point to ROOT legal pages (not /legal/...) */}
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/product-disclosure">Product Disclosure</Link>
          </div>
          <div className="footer-note">© {year} Wild & Well. All rights reserved.</div>
          <div className="footer-note">Affiliate links may earn us a commission at no extra cost to you.</div>
          <div className="footer-social">
            <a href="https://instagram.com/wildandwell_uk" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://pinterest.com/wildandwell_uk/" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
      </footer>
    </>
  );
}
