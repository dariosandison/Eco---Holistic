import Link from "next/link";
import site from "../data/site.config.json";

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0"}}>
        <Link href="/" className="logo">
          <img src="/logo.svg" alt={site.siteName} onError={(e)=>{ e.currentTarget.src = "/logo.png"; }} />
          <span>{site.siteName}</span>
        </Link>

        <nav className="nav">
          <Link href="/guides">Guides</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
