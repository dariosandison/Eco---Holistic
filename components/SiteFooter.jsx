import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-50 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <h3 className="font-semibold">Wild & Well</h3>
          <p className="text-sm text-neutral-600">
            Guides, ideas, and vetted picks for sustainable, low-tox living.
          </p>
          <p className="text-xs text-neutral-500">
            As an Amazon Associate we earn from qualifying purchases. Content is for information only.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Explore</h4>
          <ul className="space-y-1">
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
            <li><Link href="/disclosure">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Wild & Well. All rights reserved.
      </div>
    </footer>
  );
}
