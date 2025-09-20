// components/Nav.js
import Link from "next/link";

export default function Nav() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">🌿 Wild & Well</Link>
        <nav className="menu">
          <Link href="/guides/wellness-starter">Start Here</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/recommended">Recommended</Link>
        </nav>
      </div>

      <style jsx>{`
        .site-header {
          position: sticky; top: 0; z-index: 40;
          background: #ffffffcc; backdrop-filter: saturate(180%) blur(10px);
          border-bottom: 1px solid #eef0f2;
        }
        .wrap {
          max-width: 1100px; margin: 0 auto; padding: 12px 16px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .brand {
          font-weight: 700; color: #0f172a; text-decoration: none;
        }
        .menu :global(a) {
          margin-left: 16px; text-decoration: none; color: #334155;
        }
        .menu :global(a:hover) { text-decoration: underline; }
        @media (max-width: 720px) {
          .menu { display: none; }
        }
      `}</style>
    </header>
  );
}
