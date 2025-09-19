// components/Footer.js
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="wrap">
      <div className="inner">
        <div className="brand">
          <strong>Wild & Well</strong>
          <span>Eco living • Holistic health</span>
        </div>

        <nav className="links">
          <Link href="/">Home</Link>
          <Link href="/disclosure">Affiliate Disclosure</Link>
          <a href="mailto:hello@wild-and-well.store">Contact</a>
        </nav>

        <p className="copy">© {year} Wild & Well · All rights reserved.</p>
      </div>

      <style jsx>{`
        .wrap {
          border-top: 1px solid #e5e7eb;
          margin-top: 3rem;
          padding: 2rem 1rem;
          background: #fafafa;
        }
        .inner {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          gap: 0.75rem;
        }
        .brand {
          display: flex;
          gap: 0.5rem;
          align-items: baseline;
          font-size: 0.95rem;
        }
        .brand span {
          color: #6b7280;
          font-size: 0.9rem;
        }
        .links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .links :global(a) {
          color: #374151;
          text-decoration: none;
        }
        .links :global(a:hover) {
          text-decoration: underline;
        }
        .copy {
          color: #6b7280;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </footer>
  );
}
// components/Footer.js
export default function Footer() {
  return (
    <footer style={{marginTop: 40, padding: "20px 0", borderTop: "1px solid #eee"}}>
      <div style={{maxWidth: 860, margin: "0 auto", padding: "0 20px", display: "flex", gap: 16, flexWrap: "wrap"}}>
        <a href="/disclosure">Affiliate Disclosure</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/cookies">Cookie Policy</a>
        <span style={{marginLeft: "auto"}}>© {new Date().getFullYear()} Wild &amp; Well</span>
      </div>
    </footer>
  );
}
