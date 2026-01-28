import Link from 'next/link'

export const metadata = {
  title: 'Topics — Wild & Well',
  description: 'Practical topic hubs: simple context first, with product options when you want them.',
}

function Card({ title, desc, href, tag }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">
          {tag}
        </span>
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open hub →</p>
    </Link>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Topics</h1>
        <p className="mt-3 text-zinc-700">
          These hubs are built to be practical: learn the basics first, then jump to product shortlists when you want options.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics">Topics hub</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/movement">Movement</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Card title="Sleep & recovery" desc="The simplest path to better sleep: light, timing, temperature, and the few products that actually help." href="/topics/sleep" tag="Sleep" />
        <Card title="Air quality (allergies + damp)" desc="What matters in HEPA, where to place it, and our short list for small flats and allergy seasons." href="/topics/air-quality" tag="Home" />
        <Card title="Water (filters + hydration)" desc="Under-sink vs jugs, what certifications mean, and the starter options that work in UK homes." href="/topics/water" tag="Kitchen" />
        <Card title="Fragrance-free cleaning & laundry" desc="Sensitive-skin friendly cleaning, laundry, and the quick swaps that reduce irritation fast." href="/topics/fragrance-free" tag="Cleaning" />
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">How to use these hubs</h2>
        <ol className="mt-3 list-decimal pl-6 text-zinc-700 space-y-2">
          <li>Pick one goal (sleep, air, water, cleaning).</li>
          <li>Read the “Start here” section and do one easy step today.</li>
          <li>When you want product options, jump to the Favourites shortlist and compare a few solid choices.</li>
        </ol>
      </section>

      <p className="mt-12 text-xs text-zinc-500">
        Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
      </p>
    </main>
  )
}
