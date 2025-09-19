import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" aria-label="Wild & Well – Home" style={{display:"inline-flex", alignItems:"center", gap:8}}>
          {/* Try to load /logo.jpg; if missing, show text fallback */}
          <div style={{display:"inline-flex", alignItems:"center", gap:8}}>
            {/* Using plain img here for graceful failure without warnings */}
            <img
              src="/logo.jpg"
              alt="Wild & Well logo"
              width="160"
              height="44"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
              style={{objectFit:"contain"}}
            />
            <span className="logo-fallback">Wild &amp; Well</span>
          </div>
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

