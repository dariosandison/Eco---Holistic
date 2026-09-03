import Link from 'next/link'

export default function SiteFooter() {
  const socials = [
    { href: process.env.NEXT_PUBLIC_INSTAGRAM_URL, label: 'Instagram' },
    { href: process.env.NEXT_PUBLIC_PINTEREST_URL, label: 'Pinterest' },
    { href: process.env.NEXT_PUBLIC_TIKTOK_URL, label: 'TikTok' },
    { href: process.env.NEXT_PUBLIC_YOUTUBE_URL, label: 'YouTube' },
    { href: process.env.NEXT_PUBLIC_X_URL, label: 'X' },
  ].filter((s) => s.href)

  const journeys = [
    ['/topics/water', 'Water'], ['/topics/air-quality', 'Air'], ['/topics/sleep', 'Sleep'],
    ['/topics/nutrition', 'Nutrition'], ['/topics/movement', 'Movement'], ['/healthy-home', 'Healthy Home'],
    ['/topics/resilience', 'Practical Resilience'],
  ]

  const editorial = [
    ['/start-here', 'Start here'], ['/blog', 'Guides'], ['/shortlists', 'Compare'], ['/tools', 'Free tools'],
    ['/about', 'Why trust us'], ['/authors', 'Authors'], ['/contact', 'Contact'],
  ]

  const policies = [
    ['/editorial-policy', 'Editorial policy'], ['/how-we-test', 'How we evaluate products'],
    ['/product-disclosure', 'Product disclosure'], ['/affiliate-disclosure', 'Affiliate disclosure'],
    ['/corrections', 'Corrections'], ['/privacy', 'Privacy'], ['/cookies', 'Cookies'], ['/terms', 'Terms'],
  ]

  return (
    <footer className="bg-[var(--brand-dark)] text-[#f8f5ed]">
      <div className="content-shell border-b border-white/15 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <div>
            <p className="eyebrow !text-[#a9c9b9]">Wild &amp; Well</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.8rem,5vw,5.4rem)] font-normal leading-[.96] tracking-[-.045em]">A clearer way to make healthier everyday decisions.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c7d3cd]">Independent UK-focused guidance for the water you drink, the air you breathe, the home you live in and the habits that shape how you feel.</p>
            <p className="mt-8 font-serif text-2xl italic text-[#e4e8d8]">Learn first. Buy second.</p>
          </div>

          <div className="self-end border-t border-white/20 pt-6">
            <p className="text-sm font-semibold">Useful updates, without the wellness noise.</p>
            <p className="mt-2 text-xs leading-6 text-[#c7d3cd]">Get practical guides, decision tools and carefully chosen comparisons from Wild &amp; Well.</p>
            <form action="/api/subscribe" method="post" className="mt-5 grid grid-cols-[1fr_auto] border-b border-white/35 pb-2">
              <input type="hidden" name="source" value="footer" />
              <input type="email" name="email" required placeholder="Email address" aria-label="Email address" autoComplete="email" inputMode="email" className="min-w-0 bg-transparent px-0 py-2 text-sm text-white outline-none placeholder:text-[#9eb0a6]" />
              <button type="submit" className="px-3 text-xs font-bold uppercase tracking-[.08em] text-white">Subscribe →</button>
            </form>
            <p className="mt-3 text-[11px] leading-5 text-[#9eb0a6]">By subscribing you agree to our <Link className="underline underline-offset-2" href="/privacy">privacy policy</Link>. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>

      <div className="content-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.05fr_.85fr_.9fr_.7fr]">
        <div><p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-[#9eb0a6]">Seven journeys</p><ul className="space-y-2.5 text-sm">{journeys.map(([href,label]) => <li key={href}><Link href={href} className="text-[#e8ede9] hover:text-white">{label}</Link></li>)}</ul></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-[#9eb0a6]">Explore</p><ul className="space-y-2.5 text-sm">{editorial.map(([href,label]) => <li key={href}><Link href={href} className="text-[#e8ede9] hover:text-white">{label}</Link></li>)}</ul></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-[#9eb0a6]">Standards</p><ul className="space-y-2.5 text-sm">{policies.map(([href,label]) => <li key={href}><Link href={href} className="text-[#e8ede9] hover:text-white">{label}</Link></li>)}</ul></div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-[#9eb0a6]">Wider library</p>
          <ul className="space-y-2.5 text-sm"><li><Link href="/dogs" className="text-[#e8ede9] hover:text-white">Dog wellness</Link></li><li><Link href="/outdoors" className="text-[#e8ede9] hover:text-white">Outdoors &amp; nature</Link></li><li><Link href="/healthy-home/home-energy" className="text-[#e8ede9] hover:text-white">Home energy</Link></li><li><Link href="/deals" className="text-[#e8ede9] hover:text-white">Verified offers</Link></li></ul>
          {socials.length ? <div className="mt-7"><p className="mb-3 text-xs font-bold uppercase tracking-[.14em] text-[#9eb0a6]">Follow</p><div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">{socials.map((s) => <a href={s.href} key={s.href} target="_blank" rel="noopener nofollow" className="text-[#e8ede9] hover:text-white">{s.label}</a>)}</div></div> : null}
        </div>
      </div>

      <div className="content-shell border-t border-white/15 py-6 text-[11px] leading-5 text-[#9eb0a6] md:flex md:items-center md:justify-between md:gap-8">
        <p>Some links are affiliate links. Wild &amp; Well may earn a commission at no extra cost to you. Affiliate relationships do not determine inclusion.</p>
        <p className="mt-3 shrink-0 md:mt-0">© {new Date().getFullYear()} Wild &amp; Well</p>
      </div>
    </footer>
  )
}