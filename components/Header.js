import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold">
          Wild &amp; Well
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/guides">Guides</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
