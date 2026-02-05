export default function SiteFooter() {
  const socials = [
    { href: process.env.NEXT_PUBLIC_INSTAGRAM_URL, label: 'Instagram' },
    { href: process.env.NEXT_PUBLIC_PINTEREST_URL, label: 'Pinterest' },
    { href: process.env.NEXT_PUBLIC_TIKTOK_URL, label: 'TikTok' },
    { href: process.env.NEXT_PUBLIC_YOUTUBE_URL, label: 'YouTube' },
    { href: process.env.NEXT_PUBLIC_X_URL, label: 'X' },
  ].filter((s) => s.href)

  const learn = [
    { href: '/blog', label: 'Wellness Insights' },
    { href: '/topics', label: 'Topics' },
    { href: '/nutrition', label: 'Nutrition' },
    { href: '/movement', label: 'Movement' },
    { href: '/how-we-test', label: 'How We Test' },
  ]

  const shop = [
    { href: '/shopping-list', label: 'Free Shopping List' },
    { href: '/picks', label: 'Picks (Shortlists)' },
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
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="font-semibold text-[var(--brand)]">Wild &amp; Well</div>
          <p className="mt-2 text-sm text-neutral-600">
            Natural wellness made simple — calm insights and product shortlists.
          </p>

          <div className="mt-4 rounded-2xl border bg-zinc-50 p-4">
            <div className="font-semibold">Get the free shopping list</div>
            <p className="mt-1 text-xs text-neutral-600">One email. Beginner swaps for air, water, cleaning, and sleep.</p>
            <form action="/api/subscribe" method="post" className="mt-3 flex gap-2">
              <input type="hidden" name="source" value="footer" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                autoComplete="email"
                inputMode="email"
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Get it
              </button>
            </form>
            <p className="mt-2 text-[11px] text-neutral-500">
              By subscribing you agree to our{' '}
              <a className="underline" href="/privacy">
                privacy policy
              </a>
              . Unsubscribe anytime.
            </p>
          </div>

          <p className="mt-3 text-xs text-neutral-500">Some links may earn us a small commission at no extra cost to you. As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>

        <div>
          <div className="mb-2 font-semibold">Learn</div>
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
            <div className="mb-2 font-semibold">Shop</div>
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
            <div className="mb-2 font-semibold">About</div>
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
          <div className="mb-2 font-semibold">Policies</div>
          <ul className="space-y-1 text-sm">
            {legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {socials.length ? (
            <div className="mt-4">
              <div className="mb-2 font-semibold">Follow</div>
              <ul className="space-y-1 text-sm">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener nofollow" className="hover:underline">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-4 text-xs text-neutral-500">
            Wild &amp; Well is run independently. We don’t accept paid placements disguised as advice — we recommend products we genuinely trust.
          </p>
        </div>
      </div>

      <div className="pb-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Wild &amp; Well. All rights reserved.</div>
    </footer>
  )
}
