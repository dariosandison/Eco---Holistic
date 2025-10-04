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

export default function Footer(){
  return (
    <footer className="site-footer" style={{marginTop:"2rem"}}>
      <div className="container" style={{padding:"1.25rem 1rem"}}>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Wild & Well</h4>
            <p className="muted">Independent • Reader-supported</p>
            <p className="muted" style={{marginTop:8}}>
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/deals">Deals</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              {legal.map(l => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow</h4>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <hr style={{margin:"1rem 0"}} />
        <small className="muted">© {new Date().getFullYear()} Wild and Well</small>
      </div>
    </footer>
  );
}
