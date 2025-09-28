// components/Header.js
import Link from 'next/link';

export default function Header() {
  const wrap = {
    position: 'sticky',
    top: 0,
    zIndex: 40,
    background: '#3e4b36',
    borderBottom: '1px solid rgba(0,0,0,0.25)',
  };
  const inner = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '10px 16px',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    gap: '12px',
  };
  const logo = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
  const nav = {
    display: 'flex',
    gap: '18px',
    alignItems: 'center',
  };
  const link = { color: '#f5f3ea', textDecoration: 'none', fontWeight: 600, opacity: 0.95 };

  return (
    <header style={wrap}>
      <div style={inner}>
        <div /> {/* left spacer */}
        <div style={logo}>
          <Link href="/" style={{ ...link, display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/logo.png" alt="Wild & Well" style={{ width: 28, height: 28 }} onError={(e)=>{e.currentTarget.style.display='none';}} />
            <span>Wild &amp; Well</span>
          </Link>
        </div>
        <nav style={{ ...nav, justifyContent: 'flex-end' }}>
          <Link href="/guides" style={link}>Guides</Link>
          <Link href="/deals" style={link}>Deals</Link>
          <Link href="/blog" style={link}>Blog</Link>
          <Link href="/contact" style={link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
