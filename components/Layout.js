// components/Layout.js
import Link from 'next/link';
import SearchBox from './SearchBox';

export default function Layout({ children }) {
  const year = new Date().getFullYear();

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: '#222' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e9ecef', background: '#f6fbf6' }}>
        <nav style={{ maxWidth: 1100, margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            {/* Logo image (place /public/logo.svg) with text fallback */}
            <img src="/logo.svg" alt="Wild & Well" height="28" style={{ display: 'block' }} onError={(e)=>{ e.currentTarget.style.display='none'; }} />
            <span style={{ fontWeight: 700, color: '#1f4f2a' }}>Wild & Well</span>
          </Link>

          <div style={{ display: 'flex', gap: 16, marginLeft: 'auto', alignItems: 'center' }}>
            <Link href="/guides" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Guides</Link>
            <Link href="/blog" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Blog</Link>
            <Link href="/deals" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Deals</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Contact</Link>
            <SearchBox />
          </div>
        </nav>
      </header>

      {/* Main */}
      <main style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e9ecef', background: '#f6fbf6', marginTop: 32 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '18px 16px', fontSize: 14 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'flex-end', marginBottom: 8 }}>
            <Link href="/privacy" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Privacy</Link>
            <Link href="/cookies" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Cookies</Link>
            <Link href="/terms" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Terms</Link>
            <Link href="/affiliate-disclosure" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Affiliate Disclosure</Link>
            <Link href="/disclaimer" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Disclaimer</Link>
            <Link href="/product-disclosure" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Product Disclosure</Link>
          </div>
          <div style={{ color: '#6b7280' }}>© {year} Wild & Well. All rights reserved.</div>
          <div style={{ color: '#6b7280', marginTop: 6 }}>
            Affiliate links may earn us a commission at no extra cost to you.
          </div>
        </div>
      </footer>
    </div>
  );
}
