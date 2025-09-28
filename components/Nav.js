// components/Nav.js
import Link from 'next/link';

export default function Nav() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label="Wild & Well Home">
          <img src="/logo.svg" alt="" className="site-logo" />
          <span>Wild &amp; Well</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href="/guides">Guides</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <form action="/search" role="search" className="search">
          <input type="search" name="q" placeholder="Search ( / )" aria-label="Search" />
        </form>
      </div>
    </header>
  );
}
