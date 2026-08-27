import Link from 'next/link'

export const metadata = {
  title: 'Low-Tox Healthy Home Buying Guide UK',
  description: 'A practical UK low-tox home buying hub covering fragrance-free laundry, cookware, shower filtration and simple household swaps.',
}

const ROUTES = [
  {
    title: 'Fragrance-free laundry',
    desc: 'A high-contact swap for clothes, bedding and towels if you want to reduce added fragrance at home.',
    href: '/best-fragrance-free-laundry-detergents-uk',
    label: 'Compare laundry options',
  },
  {
    title: 'Low-tox starter swaps',
    desc: 'A beginner-friendly route for replacing a few high-use household products without trying to change everything at once.',
    href: '/best-low-tox-products-for-beginners',
    label: 'Start with the basics',
  },
  {
    title: 'Cookware',
    desc: 'A practical guide to choosing durable cookware materials and replacing worn pieces gradually.',
    href: '/best-non-toxic-cookware-starter',
    label: 'Read the cookware guide',
  },
  {
    title: 'Shower filtration',
    desc: 'For households comparing hard-water comfort, cartridge costs and simple shower-side filtration.',
    href: '/best-shower-filters-uk-hard-water',
    label: 'Compare shower filters',
  },
  {
    title: 'Natural bathroom basics',
    desc: 'Simple reusable or lower-waste bathroom items where the swap is easy to maintain.',
    href: '/best-natural-loofah-sponge-uk-jungleculture',
    label: 'See bathroom options',
  },
]

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Healthy home</p>
        <h1 className="mt-2 text-4xl font-bold">Low-tox home: make the high-use swaps first</h1>
        <p className="mt-3 text-zinc-700">
          You do not need to replace your whole home. Start with products you use frequently or that stay in close contact with skin, food, water or indoor air, then stop when the change becomes more hassle than benefit.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics">Browse all topics</Link>
          <Link className="btn-secondary" href="/shortlists">All buying shortlists</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ROUTES.map((route) => (
          <article key={route.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">{route.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{route.desc}</p>
            <Link href={route.href} className="mt-5 inline-flex font-semibold text-zinc-900 underline underline-offset-4">
              {route.label} →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">A sensible order for changing your home</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-zinc-700">
          <li><strong>Use up what you already own</strong> unless there is a genuine reason to replace it now.</li>
          <li><strong>Prioritise repeat exposure</strong> such as laundry, cookware, drinking/shower water and heavily fragranced products.</li>
          <li><strong>Choose simple replacements</strong> with transparent materials or ingredient lists and realistic running costs.</li>
          <li><strong>Change one category at a time</strong> so the healthier-home project stays affordable and manageable.</li>
        </ol>
      </section>

      <p className="mt-10 text-xs text-zinc-500">Some linked buying guides contain affiliate links. If you buy through them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
