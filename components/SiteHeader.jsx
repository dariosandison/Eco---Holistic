import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [q, setQ] = useState("");

  function onSearch(e) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    const url = `https://duckduckgo.com/?q=${encodeURIComponent(`site:wild-and-well.store ${query}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <header style={{borderBottom:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.02)", backdropFilter:"blur(6px)"}}>
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"0.9rem 1rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"}}>
          <Link href="/"><strong style={{color:"#F2EDE3"}}>Wild and Well</strong></Link>
          <nav style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <Link href="/guides">Guides</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <form onSubmit={onSearch} role="search" aria-label="Search site">
            <input
              placeholder="Search guides…"
              aria-label="Search query"
              value={q}
              onChange={(e)=>setQ(e.target.value)}
              style={{
                appearance:"none",
                border:"1px solid rgba(255,255,255,0.12)",
                background:"rgba(255,255,255,0.03)",
                color:"#F2EDE3",
                padding:".5rem .75rem",
                borderRadius:10
              }}
            />
          </form>
          <a
            href="#newsletter"
            onClick={(e)=>{e.preventDefault(); document.getElementById("newsletter-bar")?.scrollIntoView({behavior:"smooth"});}}
            style={{
              display:"inline-flex",alignItems:"center",justifyContent:"center",
              border:"1px solid rgba(255,255,255,0.12)", background:"rgba(255,255,255,0.04)",
              color:"#F2EDE3", padding:".5rem .9rem", borderRadius:10, textDecoration:"none"
            }}
          >
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}
