import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Best Natural Sleep Support (UK) | Wild & Well',
  description: 'A calm shortlist of natural sleep support options — what tends to help most, what to skip, and buyer-friendly picks.',
}

const PICKS = [
  {
    title: 'Magnesium glycinate (capsules)',
    badge: 'Gentle form',
    desc: 'Often used as part of an evening wind-down routine. Start low and assess tolerance.',
    query: 'magnesium glycinate capsules UK',
    bullets: ['Look for glycinate/bisglycinate (not oxide)', 'Start low', 'Check with a clinician if pregnant/medicated'],
  },
  {
    title: 'Glycine powder',
    badge: 'Simple amino acid',
    desc: 'Some people use glycine as an evening supplement. Choose a reputable brand and keep it simple.',
    query: 'glycine powder supplement',
    bullets: ['Start with small amounts', 'Avoid complex stacks at first'],
  },
  {
    title: 'L‑theanine (capsules)',
    badge: 'Calm focus',
    desc: 'Commonly used for calmer evenings. Choose conservative dosing.',
    query: 'L-theanine capsules',
    bullets: ['Keep dosing conservative', 'Avoid mixing too many supplements at once'],
  },
  {
    title: 'Chamomile or herbal tea (caffeine-free)',
    badge: 'No-pill option',
    desc: 'A low-risk wind-down cue that supports routine and consistency.',
    query: 'chamomile tea caffeine free',
    bullets: ['Use it as a cue: same time nightly', 'Avoid sugar late at night'],
  },
  {
    title: 'Blackout eye mask',
    badge: 'Light control',
    desc: 'Light control often beats supplements. Cheap and effective.',
    query: 'blackout sleep mask contoured',
    bullets: ['Comfort matters', 'Washable is a plus'],
  },
  {
    title: 'White noise machine',
    badge: 'Noise buffer',
    desc: 'If you’re noise-sensitive, this can prevent frequent wake-ups.',
    query: 'white noise machine bedside',
    bullets: ['Timer + continuous modes help', 'Simple interface beats “smart” features'],
  },
]

export default function Page() {
  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Natural Sleep Support (UK)',
    dateModified: '2026-01-25',
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best natural sleep support (compared)</h1>
        <p className="mt-3 text-zinc-700">
          The best “sleep support” is usually a few simple environment and timing fixes. Supplements are optional — and should stay simple.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/picks/sleep">Sleep hub</Link>
          <Link className="btn-secondary" href="/guides/sleep-naturally-without-overwhelm">Cornerstone sleep guide</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">Start here</h2>
          <ol className="mt-3 list-decimal pl-6 text-sm text-zinc-700 space-y-2">
            <li>Morning light + consistent wake time</li>
            <li>Cool, dark bedroom</li>
            <li>Caffeine cut-off ~8 hours before bed</li>
          </ol>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">If you try a supplement</h2>
          <p className="mt-3 text-sm text-zinc-700">Try one at a time, start low, and keep notes for a week.</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Avoid</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>“Knockout” claims</li>
            <li>Overcomplicated stacks</li>
            <li>Anything that conflicts with medication advice</li>
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer picks)</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Curated searches to compare brands and prices. Keep it simple: routine first, products second.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PICKS.map((p) => (
            <ProductPick
              key={p.title}
              title={p.title}
              badge={p.badge}
              description={p.desc}
              href={amazonSearchUrl(p.query)}
              bullets={p.bullets}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/picks/sleep">Go to Sleep hub →</Link>
          <Link className="btn-secondary" href="/guides/magnesium-for-sleep-basics">Magnesium basics</Link>
          <Link className="btn-secondary" href="/guides/sleep-wind-down-routine">Wind-down routine</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">
        This content is for general education and isn’t medical advice. If you’re pregnant, on medication, or managing a health condition, check with a qualified clinician first.
      </p>
    </main>
  )
}
