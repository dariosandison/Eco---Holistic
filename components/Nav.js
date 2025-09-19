// components/Nav.js
import Link from "next/link";

export default function Nav() {
  return (
    <header className="wrap">
      <div className="inner">
        <Link href="/" className="brand">Wild &amp; Well</Link>
        <nav className="links">
          <Link href="/">Home</Link>
          <Link href="/recommended">Recommended</Link>
        </nav>
      </div>

      <style jsx>{`
        .wrap {
          border-bottom: 1px solid #e5e7eb;
          background: #ffffffcc;
          backdrop-filter: blur(6px);
        }
        .inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .brand {
          font-weight: 800;
          letter-spacing: 0.2px;
          text-decoration: none;
          color: #111827;
        }
        .links :global(a) {
          text-decoration: none;
          color: #374151;
          margin-left: 14px;
        }
        .links :global(a:hover) {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
}
