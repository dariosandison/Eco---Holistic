export default function SiteFooter() {
  const socials = [
    { href: 'https://www.instagram.com/', label: 'Instagram' },
    { href: 'https://www.pinterest.com/', label: 'Pinterest' },
    { href: 'https://www.tiktok.com/', label: 'TikTok' },
    { href: 'https://www.youtube.com/', label: 'YouTube' },
    { href: 'https://twitter.com/', label: 'X' },
  ]
  const legal = [
    { href: '/editorial-policy', label: 'Editorial Policy' },
    { href: '/how-we-test', label: 'How We Test' },
    { href: '/product-disclosure', label: 'Product Disclosure' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold text-[var(--brand)]">Wild & Well</div>
          <p className="text-sm text-neutral-600 mt-2">
            Practical, low-tox living — guides, reviews, and tips that save time and money.
          </p>
          <p className="text-xs text-neutral-500 mt-3">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow</div>
          <ul className="space-y-1 text-sm">
            {socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener nofollow" className="hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Site</div>
          <ul className="space-y-1 text-sm">
            {legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 pb-4">
        © {new Date().getFullYear()} Wild & Well. All rights reserved.
      </div>
    </footer>
  )
}
