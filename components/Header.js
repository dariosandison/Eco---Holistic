import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Wild & Well" width={140} height={28} priority />
      </Link>

      <nav className="flex gap-6 text-sm">
        <Link href="/guides">Guides</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/deals">Deals</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
