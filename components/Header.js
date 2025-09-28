// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label="Wild & Well Home">
          <img src="/logo.svg" alt="Wild & Well" className="site-logo" />
        </Link>
      </div>
    </header>
  );
}
