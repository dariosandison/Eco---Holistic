// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        background: 'var(--leaf-800, #3f4f38)',
        borderColor: 'rgba(0,0,0,0.15)'
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt="Wild & Well"
            width={28}
            height={28}
            priority
          />
          <span
            className="text-base font-semibold"
            style={{ color: '#fff' }}
          >
            Wild & Well
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/guides" active={pathname.startsWith('/guides')}>Guides</NavLink>
          <NavLink href="/deals" active={pathname.startsWith('/deals')}>Deals</NavLink>
          <NavLink href="/blog" active={pathname.startsWith('/blog')}>Blog</NavLink>
          <NavLink href="/contact" active={pathname.startsWith('/contact')}>Contact</NavLink>
        </nav>

        <form action="/search" className="hidden md:block">
          <input
            type="search"
            name="q"
            placeholder="Search (/)"
            className="h-8 w-48 rounded-full border px-3 text-sm"
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(255,255,255,0.25)',
              color: '#fff'
            }}
          />
        </form>
      </div>
    </header>
  );
}

function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium"
      style={{
        color: active ? '#fff' : 'rgba(255,255,255,0.85)',
        textDecoration: 'none'
      }}
    >
      {children}
    </Link>
  );
}
