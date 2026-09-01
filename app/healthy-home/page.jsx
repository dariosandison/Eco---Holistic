import Link from 'next/link'

export const metadata = {
  title: 'Healthy Home UK — Air, Water & Lower-Tox Living',
  description: 'A practical Wild & Well hub for cleaner air, better water, lower-tox household swaps and everyday home resilience.',
}

const ROUTES = [
  {
    title: 'Efficient home energy',
    desc: 'Take a measured route through efficiency, monitoring, solar, batteries, heat pumps, EV charging and backup power.',
    href: '/healthy-home/home-energy',
    cta: 'Open the home-energy route',
  },
  {
    title: 'Lower-tox home swaps',
    desc: 'Start with high-use products: laundry, cookware, bathroom basics and simple fragrance reduction.',
    href: '/healthy-home/low-tox-shortlist',
    cta: 'See the low-tox route',
  },
  {
    title: 'Indoor air quality',
    desc: 'Work out whether the problem is particles, allergies, damp, humidity or ventilation before buying equipment.',
    href: '/air-quality-shortlist-uk',
    cta: 'Compare air-quality options',
  },
  {
    title: 'Water filtration',
    desc: 'Choose between portable, countertop, under-sink and gravity filtration based on the job you need it to do.',
    href: '/water-filtration-shortlist-uk',
    cta: 'Compare filtration routes',
  },
  {
    title: 'Practical resilience',
    desc: 'Build sensible household backup for short water, power, food and communication disruption.',
    href: '/topics/resilience',
    cta: 'Open resilience guides',
  },
]

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Healthy home</p>
        <h1 className="mt-2 text-4xl font-bold">Improve the home you live in every day</h1>
        <p className="mt-3 text-zinc-700">
          Focus on the biggest repeated exposures and practical problems first: the air you breathe, the water you use, the products you handle often and basic household resilience.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/shortlists">Browse all shortlists</Link>
          <Link className="btn-secondary" href="/topics">Learn first</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {ROUTES.map((route) => (
          <article key={route.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">{route.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{route.desc}</p>
            <Link href={route.href} className="mt-5 inline-flex font-semibold text-zinc-900 underline underline-offset-4">
              {route.cta} →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Where to start</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-700">
          <li>Fix obvious damp, ventilation, water or maintenance problems before shopping.</li>
          <li>Prioritise products and exposures you encounter every day.</li>
          <li>Make one change at a time so you can tell whether it was useful.</li>
          <li>Use the shortlists only when a product genuinely solves the problem.</li>
        </ol>
      </section>

      <p className="mt-10 text-xs text-zinc-500">Some linked pages contain affiliate links. If you buy through them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
