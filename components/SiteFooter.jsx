import Link from "next/link";

const legal = [
  { href:"/about", label:"About" },
  { href:"/editorial-policy", label:"Editorial Policy" },
  { href:"/how-we-test", label:"How We Test" },
  { href:"/privacy", label:"Privacy" },
  { href:"/cookies", label:"Cookies" },
  { href:"/terms", label:"Terms" },
  { href:"/disclaimer", label:"Disclaimer" },
  { href:"/affiliate-disclosure", label:"Affiliate Disclosure" },
  { href:"/product-disclosure", label:"Product Disclosure" },
];

export default function SiteFooter(){
  return (
    <footer style={{marginTop:"2rem", borderTop:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.02)"}}>
      <div className="container" style={{padding:"1.25rem 1rem"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"1rem"}}>
          <div>
            <h4 style={{margin:".5rem 0", color:"#FFF8EE"}}>Wild & Well</h4>
            <p style={{color:"#C9C4B8"}}>Independent • Reader-supported</p>
            <p style={{color:"#C9C4B8", marginTop:8}}>
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
          <div>
            <h4 style={{margin:".5rem 0", color:"#FFF8EE"}}>Explore</h4>
            <ul style={{listStyle:"none", padding:0, margin:".25rem 0"}}>
              <li style={{margin:".35rem 0"}}><Link href="/guides">Guides</Link></li>
              <li style={{margin:".35rem 0"}}><Link href="/deals">Deals</Link></li>
              <li style={{margin:".35rem 0"}}><Link href="/blog">Blog</Link></li>
              <li style={{margin:".35rem 0"}}><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{margin:".5rem 0", color:"#FFF8EE"}}>Legal</h4>
            <ul style={{listStyle:"none", padding:0, margin:".25rem 0"}}>
              {legal.map((l) => (
                <li key={l.href} style={{margin:".35rem 0"}}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{margin:".5rem 0", color:"#FFF8EE"}}>Follow</h4>
            <ul style={{listStyle:"none", padding:0, margin:".25rem 0"}}>
              <li style={{margin:".35rem 0"}}><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li style={{margin:".35rem 0"}}><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <hr style={{border:0, borderTop:"1px solid rgba(255,255,255,0.08)", margin:"1rem 0"}} />
        <small style={{color:"#C9C4B8"}}>© {new Date().getFullYear()} Wild and Well</small>
      </div>
    </footer>
  );
}
