// components/Nav.js
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header>
      <div className="container" style={{display:"flex",alignItems:"center",gap:14,justifyContent:"space-between"}}>
        <Link href="/" className="brand" aria-label="Wild & Well home">
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <Image src="/logo.png" alt="" width={28} height={28} priority />
            <strong>Wild & Well</strong>
          </div>
        </Link>

        <nav aria-label="Primary">
          <ul style={{display:"flex",gap:14,margin:0,padding:0,listStyle:"none"}}>
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/recommended">Recommended</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
