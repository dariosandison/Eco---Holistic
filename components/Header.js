// components/Header.js
import Link from 'next/link';
import SearchBox from './SearchBox';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <div className="logo">
          {/* If /public/logo.svg exists it will show; else falls back to text */}
          <img src="/logo.svg" alt="Wild & Well" onError={(e)=>{ e.currentTarget.style.display='none'; }} />
          <Link href="/">Wild &amp; Well</Link>
        </div>

        <nav className="nav">
          <Link href="/guides">Guides</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-right">
          <SearchBox />
        </div>
      </div>
    </header>
  );
}
