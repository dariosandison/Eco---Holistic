import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0"}}>
        <Link href="/" className="logo">
          <img src="/logo.svg" alt="Wild & Well" onError={(e)=>{(e.target as HTMLImageElement).src="/logo.png"}} />
          <span>Wild & Well</span>
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
