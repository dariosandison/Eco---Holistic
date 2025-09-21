// components/Nav.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Wild & Well home">
          <div className="brand-inner">
            <div className="brand-logo">
              {/* If /public/logo.png exists this will render. If it doesn't, the text shows. */}
              <Image
                src="/logo.png"
                alt="Wild & Well"
                width={36}
                height={36}
                className="logo-img"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                priority
              />
            </div>
            <span className="brand-text">Wild & Well</span>
          </div>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <Link href="/guides">Guides</Link>
          <Link href="/recommended">Recommended</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
