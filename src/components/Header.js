import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();
  return (
    <header className="header">
      <div className="nav container">
        <Link href="/" className="brand" aria-label="Wild & Well home">
          <img src="/logo.png" alt="" />
          <span>Wild &amp; Well</span>
        </Link>
        <nav style={{display:'flex',gap:16}}>
          <Link className={pathname.startsWith('/guides') ? 'active' : ''} href="/guides">Guides</Link>
          <Link className={pathname==='/recommended' ? 'active' : ''} href="/recommended">Recommended</Link>
          <Link className={pathname==='/about' ? 'active' : ''} href="/about">About</Link>
          <Link className={pathname==='/contact' ? 'active' : ''} href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
