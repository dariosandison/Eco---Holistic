import Link from 'next/link'
import Card from '@/components/Card'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import { listContent } from '@/lib/content'

export const metadata = {
  title: 'Guides | Wild & Well',
  description:
    'Practical guides across sleep, movement, nutrition, and a healthier home — written for quick scanning and real-life use.',
}

function fmtDate(d) {
  if (!d) return null
  try {
    const dt = new Date(d)
    if (Number.isNaN(dt.getTime())) return null
    return dt.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return null
  }
}

export default function Page() {
  const explainers = listContent('explainers')
  const top = [
    {
      slug: 'sleep-naturally-simple-guide',
      title: 'How to sleep better naturally',
      description: 'Timing, light, temperature, and a simple routine you can repeat.',
      tag: 'Sleep',
    },
    {
      slug: 'healthy-air-at-home',
      title: 'Healthy air at home',
      description: 'Ventilation, damp basics, filtration, and common pitfalls.',
      tag: 'Home',
    },
    {
      slug: 'non-toxic-cleaning-starter',
      title: 'Non-toxic cleaning starter',
      description: 'A sensible starter approach for laundry and cleaning swaps.',
      tag: 'Cleaning',
    },
    {
      slug: 'home-strength-basics-busy-people',
      title: 'Home strength basics',
      description: 'Simple principles and a plan that scales from beginner to intermediate.',
      tag: 'Movement',
    },
    {
      slug: 'label-reading-101',
      title: 'Label reading 101',
      description: 'Practical cues for ingredients, fragrance, and marketing claims.',
      tag: 'Basics',
    },
    {
      slug: 'fibre-gut-health-practical-guide',
      title: 'Fibre & gut health (practical)',
      description: 'Food-first steps and what tends to matter most.',
      tag: 'Nutrition',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Guides</h1>
        <p className="mt-3 text-zinc-700">
          Practical guides across sleep, movement, nutrition, and a healthier home. Use the cards for cornerstone reading, then browse topics and shortlists when you want product options.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog">Wellness Insights</Link>
          <Link className="btn-secondary" href="/topics">Topics</Link>
          <Link className="btn-secondary" href="/favourites">Favourites</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#cornerstones">Cornerstones</a>
          <a className="chip" href="#browse">Browse</a>
          <a className="chip" href="#latest">Latest explainers</a>
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'How to use this page',
            bullets: [
              'Pick one cornerstone guide and apply one change for 2–4 weeks.',
              'Track one outcome (sleep onset, energy, steps, digestion).',
              'Use shortlists when you want product options.',
            ],
          },
          {
            title: 'Best first reads',
            bullets: [
              'Sleep: light, timing, and temperature basics.',
              'Home: air quality and low-tox cleaning swaps.',
              'Movement: walking and basic strength patterns.',
            ],
          },
          {
            title: 'Keep it simple',
            bullets: [
              'Make one change at a time.',
              'Prefer routines you can repeat weekly.',
              'Avoid buying a “stack” of products before habits are stable.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="cornerstones">
        <h2 className="section-title">Cornerstone guides</h2>
        <p className="section-subtitle">The best place to start for most readers.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {top.map((t) => (
            <Card
              key={t.slug}
              href={`/blog/${t.slug}`}
              title={t.title}
              excerpt={t.description}
              image={'/og-default.jpg'}
              tag={t.tag}
            />
          ))}
        </div>
      </section>

      <section className="mt-14" id="browse">
        <h2 className="section-title">Browse by area</h2>
        <p className="section-subtitle">Topic pages and practical sections that group related guides.</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics">Home topics (air, water, cleaning, sleep)</Link>
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/movement">Movement</Link>
          <Link className="btn-secondary" href="/natural-remedies">Natural remedies</Link>
        </div>
      </section>

      <section className="mt-14" id="latest">
        <h2 className="section-title">Latest explainers</h2>
        <p className="section-subtitle">Recent guides and step-by-step context.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {explainers.slice(0, 9).map((g) => (
            <Card
              key={g.slug}
              href={`/blog/${g.slug}`}
              title={g.title}
              excerpt={g.description}
              image={g.image || '/og-default.jpg'}
              tag="Explainer"
              date={fmtDate(g.updated || g.date)}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link className="btn-secondary" href="/blog#explainers">View all explainers</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links.</p>
    </main>
  )
}
