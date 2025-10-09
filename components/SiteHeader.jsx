import Link from "next/link";
import SearchBar from "./SearchBar";

export default function SiteHeader() {
  return (
    <header className="w-full sticky top-0 z-40 bg-hunter/95 backdrop-blur border-b border-cream/15">
      <div className="container flex items-center justify-between py-4 gap-4">
        <Link href="/" className="text-cream text-xl font-semibold tracking-wide">
          Wild & Well
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-cream/90">
          <Link href="/guides">Guides</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/legal/cookies">Cookies</Link>
        </nav>
        <div className="min-w-[220px] max-w-[340px] w-full">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
