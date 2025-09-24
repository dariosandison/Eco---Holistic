// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Wild & Well" className="h-7 w-auto" />
          <span className="sr-only">Wild & Well</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/guides" className="hover:underline">Guides</Link>
          <Link href="/deals" className="hover:underline">Deals</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
}
