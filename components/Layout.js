// components/Layout.js
import Link from 'next/link';
import SearchBox from './SearchBox';

const Icon = ({ type, href, label }) => (
  <a className="icon" href={href} aria-label={label} title={label} target="_blank" rel="noopener noreferrer">
    {type === 'ig' ? (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <circle cx="17.5" cy="6.5" r="0.9"></circle>
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C7.03 2 3 5.94 3 10.78c0 3.67 2.14 6.83 5.23 7.95-.07-.67-.13-1.7.03-2.43.14-.66.93-4 .93-4s-.24-.49-.24-1.22c0-1.14.66-1.99 1.48-1.99.7 0 1.04.52 1.04 1.15 0 .7-.44 1.77-.66 2.75-.19.84.42 1.51 1.24 1.51 1.49 0 2.64-1.57 2.64-3.83 0-2-1.44-3.39-3.49-3.39-2.38 0-3.78 1.78-3.78 3.62 0 .72.28 1.48.63 1.89.06.07.07.13.06.2-.07.22-.21.7-.23.8-.03.11-.12.14-.26.08-.97-.4-1.58-1.69-1.58-2.72 0-2.22 1.62-4.25 4.69-4.25 2.46 0 4.37 1.76 4.37 4.12 0 2.45-1.54 4.42-3.69 4.42-.72 0-1.39-.38-1.62-.83l-.44 1.69c-.16.6-.59 1.37-.87 1.83.66.2 1.36.31 2.09.31 4.97 0 9-3.94 9-8.78C21 5.94 16.97 2 12 2z"/>
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
          <nav className="nav">
            <Link href="/guides">Guides</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <SearchBox />
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="site-footer">
        <div className="container footer">
          <div className="footer-top">
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/product-disclosure">Product Disclosure</Link>
          </div>
          <div className="footer-bottom">
            <div className="meta">© {year} Wild & Well</div>
            <div className="icons">
              <Icon type="ig" href="https://instagram.com/wildandwell_uk" label="Instagram" />
              <Icon type="pin" href="https://pinterest.com/wildandwell_uk/" label="Pinterest" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
