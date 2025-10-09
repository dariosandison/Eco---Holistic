import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-cream/15 bg-hunter">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="text-cream font-semibold mb-2">Wild & Well</div>
          <p className="text-cream/80">
            Practical wellness & eco choices. Curated guides, honest picks.
          </p>
        </div>
        <div>
          <div className="text-cream font-semibold mb-2">Explore</div>
          <ul className="space-y-1 text-cream/80">
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/deals">Deals</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-cream font-semibold mb-2">Legal</div>
          <ul className="space-y-1 text-cream/80">
            <li><Link href="/legal/cookies">Cookies</Link></li>
            <li><Link href="/legal/privacy">Privacy</Link></li>
            <li><Link href="/legal/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4">
        <div className="container text-cream/60 text-xs">
          © {new Date().getFullYear()} Wild & Well. Some links are affiliate; we may earn a small commission.
        </div>
      </div>
    </footer>
  );
}
