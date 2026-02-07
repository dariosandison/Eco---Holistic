import Link from 'next/link'
import Card from '@/components/Card'
import { listContent } from '@/lib/content'

export const metadata = {
  title: 'Wellness Insights',
  description:
    'Informative articles and practical explainers on nutrition, sleep, movement, and a healthier home — with clear, practical writing.',
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
  const insights = listContent('insights')
  const explainers = listContent('explainers')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Wellness Insights</h1>
          <p className="mt-1 text-sm text-zinc-700">
            Informative articles and practical explainers on nutrition, sleep, movement, and a healthier home — with clear, practical writing.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a href="#insights" className="font-medium text-zinc-800 hover:underline">Insights</a>
            <a href="#explainers" className="font-medium text-zinc-800 hover:underline">Explainers</a>
          </div>
        </div>
        <Link
          href="/picks"
          className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 w-full sm:w-auto text-center"
        >
          Browse Picks
        </Link>
      </div>

      <section id="insights" className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900">Latest insights</h2>
        <p className="mt-1 text-sm text-zinc-700">
          What the issue is, where it shows up in modern life, and what to do about it.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {insights.map((i) => (
            <Card
              key={i.slug}
              slug={i.slug}
              href={`/blog/${i.slug}`}
              title={i.title}
              excerpt={i.description}
              image={i.image}
              topics={i.tags || []}
              category={i.category}
              tag="Insight"
              date={fmtDate(i.date)}
            />
          ))}
        </div>
      </section>

      <section id="explainers" className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900">Practical explainers</h2>
        <p className="mt-1 text-sm text-zinc-700">
          Clear, step-by-step context that helps you choose well: what matters, what to ignore, and what to avoid.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {explainers.map((g) => (
            <Card
              key={g.slug}
              slug={g.slug}
              href={`/blog/${g.slug}`}
              title={g.title}
              excerpt={g.description}
              image={g.image}
              topics={g.tags || []}
              category={g.category}
              tag="Explainer"
              date={fmtDate(g.date)}
            />
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Shortlists — when you’re ready</h2>
        <p className="mt-2 text-sm text-zinc-700">
          When you’re ready to compare options, our Picks pages keep things simple with small shortlists and clear trade-offs.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="/picks" className="btn-primary text-center">Browse Picks</a>
          <a href="/topics" className="btn-secondary text-center">Browse Topics</a>
        </div>
      </div>
    </div>
  )
}
