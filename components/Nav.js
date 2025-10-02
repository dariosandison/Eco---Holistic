// components/Nav.js
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label="Wild & Well Home">
          <Image
            src="/logo.svg"
            alt="Wild & Well"
            width={26}
            height={26}
            priority
            fetchPriority="high"
            aria-hidden="true"
          />
          <span>Wild &amp; Well</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href="/guides">Guides</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <form action="/search" role="search" className="search">
          <input type="search" name="q" placeholder="Search ( / )" aria-label="Search" />
        </form>
      </div>
    </header>
  );
}
