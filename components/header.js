import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          Wild & Well
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/deals">Deals</Link>
        </nav>
      </div>
    </header>
  );
}
