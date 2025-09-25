// components/Header.js
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/wild-and-well-wordmark.svg"
            alt="Wild & Well"
            width={140}
            height={28}
            priority
            onError={(e)=>{ e.currentTarget.style.display='none'; }}
          />
          <span className="font-semibold tracking-wide">Wild & Well</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/guides" className="hover:underline">Guides</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/deals" className="hover:underline">Deals</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
