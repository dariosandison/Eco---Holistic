import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Water Topics — Wild & Well',
  description: 'Water filters for UK homes: under-sink vs jug vs countertop, plus the next steps.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Water (Filters + Hydration)</h1>
        <p className="mt-3 text-zinc-700">
          Most people don’t need the most expensive system — they need the right type for their kitchen and a reasonable filter replacement plan.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/water-filter-buying-guide-uk">Read the buying guide</Link>
          <Link className="btn-secondary" href="/best-water-filters-uk">Water filters (UK): favourites</Link>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">Start here</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Decide your type: jug, under-sink, or countertop gravity.</li>
            <li>Check filter replacement cost (the hidden expense).</li>
            <li>Look for credible testing/certification claims.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Which type is best?</h2>
          <p className="mt-3 text-sm text-zinc-700">
            Jugs are easiest. Under-sink is “set and forget”. Gravity filters are great if you want big capacity without plumbing.
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <Link className="btn-secondary" href="/best-water-filters-uk">See comparisons</Link>
          </div>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Avoid</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Buying a system with expensive replacements you won’t keep up with.</li>
            <li>Vague “removes 99%” claims without specifics.</li>
            <li>Overcomplicating it if your goal is simply better-tasting water.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Quick topics (search links)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Water filter jug (everyday starter)"
            badge="Easy"
            description="Great for most people: easy to use, easy to maintain."
            href={amazonSearchUrl('BRITA Style water filter jug')}
            bullets={['Pick a size that fits your fridge', 'Budget for filters', 'Replace on schedule']}
          />
          <ProductPick
            title="Under-sink filter system"
            badge="Set & forget"
            description="For people who want filtered water straight from a tap."
            href={amazonSearchUrl('Doulton under sink water filter UK')}
            bullets={['Check installation needs', 'Look at yearly filter cost', 'Choose a reputable brand']}
          />
          <ProductPick
            title="Countertop gravity filter"
            badge="No plumbing"
            description="Large capacity option without installing anything."
            href={amazonSearchUrl('British Berkefeld gravity water filter')}
            bullets={['Great for renters', 'Check filter certification claims']}
          />
          <ProductPick
            title="Reusable bottle (for out and about)"
            badge="Habit"
            description="Hydration works best when the habit is frictionless."
            href={amazonSearchUrl('stainless steel water bottle wide mouth')}
            bullets={['Dishwasher safe is a plus', 'Choose a size you’ll actually carry']}
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-water-filters-uk">See full buyer’s guide →</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links may earn us a commission at no extra cost to you.</p>
    </main>
  )
}
