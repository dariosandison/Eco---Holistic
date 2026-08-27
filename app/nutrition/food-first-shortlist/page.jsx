import Link from 'next/link'

export const metadata = {
  title: 'Food-First Nutrition Shortlist UK',
  description: 'A practical UK nutrition buying hub focused on real food, convenient high-protein meals and useful staples before supplements.',
}

const ROUTES = [
  {
    title: 'Higher-welfare meat delivery',
    desc: 'For food-first protein, batch cooking and freezer planning.',
    href: '/ethical-meat-delivery-uk-real-food-hub-mangalitza-prime-rib',
    label: 'Real Food Hub guide',
  },
  {
    title: 'High-protein meal prep',
    desc: 'For busy weeks when convenience helps you stay consistent.',
    href: '/high-protein-meal-prep-uk-the-good-prep-wild-berry-collagen-yoghurt',
    label: 'The Good Prep guide',
  },
  {
    title: 'Simple pantry staples',
    desc: 'Olive oil, oats, chia and flax: low-complexity foods that are easy to use repeatedly.',
    href: '/shortlists',
    label: 'Browse nutrition staples',
  },
  {
    title: '72-hour food resilience',
    desc: 'Build a normal-food cupboard reserve without buying specialist survival products.',
    href: '/blog/72-hour-food-plan-uk',
    label: 'Read the food plan',
  },
]

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Food first</p>
        <h1 className="mt-2 text-4xl font-bold">Nutrition buying guide: start with real food</h1>
        <p className="mt-3 text-zinc-700">
          Wild & Well treats supplements as optional. The stronger foundation is repeatable food: enough protein, fibre-rich plants, useful fats and convenient options that help you stay consistent.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/nutrition">Nutrition hub</Link>
          <Link className="btn-secondary" href="/topics/nutrition">Nutrition topic</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
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
        <h2 className="text-2xl font-semibold">How we will expand this section</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          We are adding approved partners only where they fit a genuine food-first use case. That means real-food retailers, meal services, minimally processed staples and hydration products can earn a place here; products do not get included simply because an affiliate programme exists.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-4"><strong>1. Solve a food problem</strong><p className="mt-1 text-sm text-zinc-600">Protein, convenience, hydration or pantry consistency.</p></div>
          <div className="rounded-2xl bg-white p-4"><strong>2. Check ingredients</strong><p className="mt-1 text-sm text-zinc-600">Prefer straightforward products and useful serving sizes.</p></div>
          <div className="rounded-2xl bg-white p-4"><strong>3. Compare cost per use</strong><p className="mt-1 text-sm text-zinc-600">Convenience is valuable only when it helps the routine stick.</p></div>
        </div>
      </section>

      <p className="mt-10 text-xs text-zinc-500">Some linked buying guides contain affiliate links. If you buy through them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
