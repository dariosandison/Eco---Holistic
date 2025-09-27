// components/Layout.js
import Link from 'next/link';
import { useMemo } from 'react';

export default function Layout({ children }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: '#222' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e9ecef', background: '#f6fbf6' }}>
        <nav style={{ maxWidth: 1000, margin: '0 auto', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 700, textDecoration: 'none', color: '#1f4f2a' }}>Wild & Well</Link>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/guides" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Guides</Link>
            <Link href="/blog" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Blog</Link>
            <Link href="/deals" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Deals</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Contact</Link>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main style={{ maxWidth: 1000, margin: '24px auto', padding: '0 16px' }}>{children}</main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e9ecef', background: '#f6fbf6', marginTop: 32 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '18px 16px', fontSize: 14 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'flex-end', marginBottom: 8 }}>
            <Link href="/legal/privacy" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Privacy</Link>
            <Link href="/legal/cookies" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Cookies</Link>
            <Link href="/legal/terms" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Terms</Link>
            <Link href="/legal/affiliate-disclosure" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Affiliate Disclosure</Link>
            <Link href="/legal/disclaimer" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Disclaimer</Link>
            <Link href="/legal/product-disclosure" style={{ textDecoration: 'none', color: '#1f4f2a' }}>Product Disclosure</Link>
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
