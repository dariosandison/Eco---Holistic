// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Wild & Well" className="h-6 w-auto" />
            <span>© {new Date().getFullYear()} Wild &amp; Well</span>
          </div>
          <nav className="flex items-center gap-5">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
