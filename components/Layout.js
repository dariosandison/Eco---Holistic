// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="site-header">
        <div className="container navbar">
          <Link href="/" className="logo" aria-label="Wild & Well home">
            <img src="/logo-mark.svg" alt="" onError={(e)=>{ e.currentTarget.src='/logo.svg'; }} />
            <span>Wild & Well</span>
          </Link>

          <nav className="nav">
            <Link href="/guides">Guides</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ paddingTop: 12, paddingBottom: 24 }}>
        {children}
      </main>

      <footer className="site-footer">
        <div className="container footer">
          <div className="footer-bottom">
            <div className="meta">© {new Date().getFullYear()} Wild & Well</div>
            <div className="icons">
              <a className="icon" href="https://www.instagram.com/wildandwell_uk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a className="icon" href="https://www.pinterest.com/wildandwell_uk" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">PT</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
