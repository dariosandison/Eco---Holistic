import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [q, setQ] = useState("");

  // DuckDuckGo site search (works without infra)
  function onSubmit(e) {
    e.preventDefault();
    const query = q?.trim();
    if (!query) return;
    const url = `https://duckduckgo.com/?q=${encodeURIComponent(`site:wild-and-well.store ${query}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <header className="site-header">
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"0.9rem 1rem"}}>
        <div className="nav" style={{gap:14}}>
          <Link href="/"><strong>Wild and Well</strong></Link>
          <nav className="nav">
            <Link href="/guides">Guides</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <form onSubmit={onSubmit} role="search" aria-label="Search site">
            <input
              className="search-input"
              placeholder="Search guides…"
              value={q}
              onChange={(e)=>setQ(e.target.value)}
              aria-label="Search query"
            />
          </form>
          <a className="btn" href="#newsletter" onClick={(e)=>{e.preventDefault(); document.getElementById("newsletter-modal")?.showModal();}}>
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}
