// components/Footer.js
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container grid">
        <div className="brand">
          <div className="logo">🌿 Wild & Well</div>
          <p>Your guide to eco-living, holistic health, and mindful wellness.</p>
        </div>

        <nav className="links">
          <h4>Site</h4>
          <a href="/">Home</a>
          <a href="/recommended">Recommended</a>
          <a href="/disclosure">Affiliate Disclosure</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookies">Cookies Policy</a>
          <a href="mailto:hello@wild-and-well.store">Contact</a>
        </nav>

        <nav className="social">
          <h4>Follow</h4>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://pinterest.com/yourhandle" target="_blank" rel="noreferrer">Pinterest</a>
          <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">Facebook</a>
        </nav>
      </div>

      <div className="legal">
        <small>As an Amazon Associate, we earn from qualifying purchases.</small>
        <small>© {year} Wild & Well. All rights reserved.</small>
      </div>

      <style jsx>{`
        .footer { border-top: 1px solid var(--border); margin-top: 48px; background: #fafafa; }
        .grid {
          display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 24px;
          padding: 28px 16px;
        }
        .logo { font-weight: 700; font-size: 1.05rem; margin-bottom: 8px; }
        h4 { margin: 0 0 10px; font-size: 0.95rem; color: #111827; }
        a { display: block; color: #374151; padding: 4px 0; text-decoration: none; }
        a:hover { text-decoration: underline; }
        p { color: #4b5563; margin: 0; }
        .legal {
          border-top: 1px solid var(--border);
          padding: 14px 16px 22px;
          display: flex; flex-direction: column; gap: 6px; align-items: center;
          color: #6b7280; font-size: 0.9rem;
        }
        @media (max-width: 800px) { .grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}
