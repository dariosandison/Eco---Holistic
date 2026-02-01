export default function SiteFooter() {
  const socials = [
    { href: 'https://www.instagram.com/', label: 'Instagram' },
    { href: 'https://www.pinterest.com/', label: 'Pinterest' },
    { href: 'https://www.tiktok.com/', label: 'TikTok' },
    { href: 'https://www.youtube.com/', label: 'YouTube' },
    { href: 'https://twitter.com/', label: 'X' },
  ]

  const learn = [
    { href: '/blog', label: 'Wellness Insights' },
    { href: '/topics', label: 'Topics' },
    { href: '/nutrition', label: 'Nutrition' },
    { href: '/movement', label: 'Movement' },
    { href: '/how-we-test', label: 'How We Test' },
  ]

  const shop = [
    { href: '/shopping-list', label: 'Free Shopping List' },
    { href: '/favourites', label: 'Favourites' },
    { href: '/deals', label: 'Deals' },
  ]

  const about = [
    { href: '/about', label: 'About' },
    { href: '/authors', label: 'Authors' },
    { href: '/contact', label: 'Contact' },
  ]

const legal = [
    { href: '/editorial-policy', label: 'Editorial Policy' },
    { href: '/how-we-test', label: 'How We Test' },
    { href: '/product-disclosure', label: 'Product Disclosure' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
    { href: '/cookies', label: 'Cookies' },
    { href: '/corrections', label: 'Corrections' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ]

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold text-[var(--brand)]">Wild &amp; Well</div>
          <p className="text-sm text-neutral-600 mt-2">
            Natural wellness, practical guides, and product shortlists.
          </p>

          <div className="mt-4 rounded-2xl border bg-zinc-50 p-4">
            <div className="font-semibold">Get the free shopping list</div>
            <p className="mt-1 text-xs text-neutral-600">
              One email. Beginner swaps for air, water, cleaning, and sleep.
            </p>
            <form action="/api/subscribe" method="post" className="mt-3 flex gap-2">
              <input type="hidden" name="source" value="footer" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Get it
              </button>
            </form>
            <p className="mt-2 text-[11px] text-neutral-500">
              By subscribing you agree to our <a className="underline" href="/privacy">privacy policy</a>. Unsubscribe anytime.
            </p>
          </div>
          <p className="text-xs text-neutral-500 mt-3">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>

        <div>
          <div className="font-semibold mb-2">Learn</div>
          <ul className="space-y-1 text-sm">
            {learn.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <div className="font-semibold mb-2">Shop</div>
            <ul className="space-y-1 text-sm">
              {shop.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <div className="font-semibold mb-2">About</div>
            <ul className="space-y-1 text-sm">
              {about.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">Policies</div>
          <ul className="space-y-1 text-sm">
            {legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <div className="font-semibold mb-2">Follow</div>
            <ul className="space-y-1 text-sm">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-neutral-500 px-4 pb-2">
        Some links may earn us a small commission at no extra cost to you.
      </div>

      <div className="text-center text-xs text-neutral-500 pb-4">
        © {new Date().getFullYear()} Wild &amp; Well. All rights reserved.
      </div>
    </footer>
  )
}
