import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <img src="/logo.png" alt="" width="24" height="24"/>
            <strong>Wild &amp; Well</strong>
          </div>
          <small>Practical, bite-size guides for eco-living, holistic health, and mindful wellness.</small>
          <div style={{marginTop:10}}>
            <small>© {new Date().getFullYear()} Wild &amp; Well</small>
          </div>
        </div>
        <div>
          <strong>Site</strong>
          <div><Link href="/guides">Guides</Link></div>
          <div><Link href="/recommended">Recommended</Link></div>
          <div><Link href="/about">About</Link></div>
          <div><Link href="/contact">Contact</Link></div>
        </div>
        <div>
          <strong>Policies</strong>
          <div><Link href="/disclosure">Disclosure</Link></div>
          <div><Link href="/privacy">Privacy</Link></div>
          <div><Link href="/terms">Terms</Link></div>
          <div><Link href="/cookies">Cookies</Link></div>
        </div>
      </div>
      <div className="container" style={{borderTop:'1px solid var(--border)',paddingTop:12,paddingBottom:20}}>
        <small>
          This site contains affiliate links. If you buy through them, we may earn a small commission at no extra cost to you. 
          <Link href="/disclosure"> Learn more</Link>.
        </small>
      </div>
    </footer>
  );
}
