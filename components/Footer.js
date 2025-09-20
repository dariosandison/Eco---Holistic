import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap">
        <div className="brand">
          <div className="logo">🌿 Wild &amp; Well</div>
          <p>Your guide to eco-living, holistic health, and mindful wellness.</p>
        </div>

        <nav className="links" aria-label="Site">
          <h4>Site</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/recommended">Recommended</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/disclosure">Affiliate Disclosure</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/cookies">Cookies Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/contact">Contact</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </nav>

        <nav className="social" aria-label="Social">
          <h4>Follow</h4>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://pinterest.com/yourhandle" target="_blank" rel="noopener noreferrer">Pinterest</a>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
        </nav>
      </div>

      <div className="legal">
        <small>As an Amazon Associate, we earn from qualifying purchases.</small>
        <small>© {year} Wild &amp; Well. All rights reserved.</small>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid #e5e7eb;
          margin-top: 48px;
          background: #fafafa;
        }
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px 16px;
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 24px;
        }
        .logo { font-weight: 700; font-size: 1.05rem; margin-bottom: 8px; }
        h4 { margin: 0 0 10px; font-size: 0.95rem; color: #111827; }
        a { display: block; color: #374151; padding: 4px 0; text-decoration: none; }
        a:hover { text-decoration: underline; }
        p { color: #4b5563; margin: 0; }
        .legal {
          border-top: 1px solid #e5e7eb;
          padding: 14px 16px 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: center;
          color: #6b7280;
          font-size: 0.9rem;
        }
        @media (max-width: 800px) {
          .wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
