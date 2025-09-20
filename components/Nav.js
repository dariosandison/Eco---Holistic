// components/Nav.js
export default function Nav() {
  return (
    <>
      <header className="nav">
        <div className="container bar">
          <a className="brand" href="/">🌿 Wild & Well</a>
          <nav className="links">
            <a href="/recommended">Recommended</a>
            <a href="/disclosure">Disclosure</a>
            <a href="/privacy">Privacy</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
      </header>

      <style jsx>{`
        .nav {
          position: sticky; top: 0; z-index: 50;
          background: #fff; border-bottom: 1px solid var(--border);
        }
        .bar {
          display: flex; align-items: center; justify-content: space-between;
          height: 56px;
        }
        .brand { font-weight: 700; color: var(--text); }
        .links a { margin-left: 16px; color: var(--text); }
        .links a:hover { color: var(--brand); text-decoration: none; }
      `}</style>
    </>
  );
}
