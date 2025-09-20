import Link from 'next/link';

export default function Nav() {
  return (
    <header style={{borderBottom:'1px solid #e2e8f0'}}>
      <div className="container" style={{display:'flex',alignItems:'center',gap:'16px',paddingTop:'14px',paddingBottom:'14px'}}>
        <Link href="/" className="logo" style={{fontWeight:700,textDecoration:'none',color:'#0f172a'}}>🌿 Wild & Well</Link>
        <nav style={{marginLeft:'auto',display:'flex',gap:'14px',fontWeight:600}}>
          <Link href="/guides">Guides</Link>
          <Link href="/recommended">Recommended</Link>
          <Link href="/deals">Deals</Link>
        </nav>
      </div>
    </header>
  );
}
