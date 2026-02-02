import Link from 'next/link'

export const metadata = {
  title: 'Topics',
  description: 'Education-first topic insights for sleep, air quality, water, and fragrance-free home in the UK.',
}

function Card({ title, desc, href, tag, image }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
            <img
              src={image || '/images/cards/neutral.svg'}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-zinc-600">{desc}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">
          {tag}
        </span>
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Topics</h1>
        <p className="mt-3 text-zinc-700">
          Education-first topic pages for UK homes: what the issue is, why it matters, common causes, and no-spend first steps — then optional shortlists.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/movement">Movement</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Card image="/images/cards/sleep.svg" title="Sleep & recovery" desc="Light, timing, temperature, and practical options." href="/topics/sleep" tag="Sleep" />
        <Card image="/images/cards/air-purifier.svg" title="Air quality (allergies + damp)" desc="HEPA basics, placement, and shortlists for common rooms." href="/topics/air-quality" tag="Home" />
        <Card image="/images/cards/water-filter.svg" title="Water (filters + hydration)" desc="Under-sink vs jugs, replacement filters, and buying basics." href="/topics/water" tag="Kitchen" />
        <Card image="/images/cards/laundry.svg" title="Fragrance-free cleaning & laundry" desc="Ingredient checks and the quickest swaps for sensitive households." href="/topics/fragrance-free" tag="Cleaning" />
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="section-title">Suggested order</h2>
        <ol className="mt-3 list-decimal pl-6 text-zinc-700 space-y-2">
          <li>Pick one topic (sleep, air, water, cleaning).</li>
          <li>Skim the “At a glance” section and choose one practical next step.</li>
          <li>When you want options, use the shortlist links to compare a few solid choices.</li>
        </ol>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
