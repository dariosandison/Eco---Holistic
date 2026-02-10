import Link from 'next/link'
import { listContent } from '@/lib/content'
import { flattenShortlists } from '@/lib/shortlistsData'

export const metadata = {
  title: 'Search',
  description: 'Search Wild & Well: shortlists, topics, and wellness insights.',
}

const TOPICS = [
  {
    title: 'Sleep & recovery',
    href: '/topics/sleep',
    tag: 'Topic',
    description: 'Light, timing, temperature, and practical options.',
  },
  {
    title: 'Air quality (allergies + damp)',
    href: '/topics/air-quality',
    tag: 'Topic',
    description: 'Ventilation, HEPA basics, placement, and room guidance.',
  },
  {
    title: 'Water (filters + hydration)',
    href: '/topics/water',
    tag: 'Topic',
    description: 'Under‑sink vs jugs, replacement costs, and buying basics.',
  },
  {
    title: 'Fragrance‑free home',
    href: '/topics/fragrance-free',
    tag: 'Topic',
    description: 'Quick swaps for sensitive households and ingredient checks.',
  },
]

const CORE_PAGES = [
  { title: 'Start here', href: '/start-here', tag: 'Page', description: 'A simple order of operations for low‑tox living.' },
  { title: 'Shortlists', href: '/shortlists', tag: 'Page', description: 'Buyer-friendly shortlists built to be quick.' },
  { title: 'Deals', href: '/deals', tag: 'Page', description: 'Deal searches for products we already cover.' },
  { title: 'Free shopping list', href: '/shopping-list', tag: 'Free', description: 'Beginner-friendly swaps for air, water, cleaning and sleep.' },
  { title: 'How we test', href: '/how-we-test', tag: 'Policy', description: 'How we choose what to recommend (and what we avoid).' },
]

function normalise(str) {
  return String(str || '').toLowerCase().trim()
}

function scoreItem(q, item) {
  if (!q) return 0
  const hay = normalise([
    item.title,
    item.description,
    item.tag,
    item.section,
    (item.tags || []).join(' '),
  ].join(' '))

  // Basic scoring: title matches > tag/section matches > body matches
  const qn = normalise(q)
  if (!qn) return 0
  let s = 0
  if (normalise(item.title).includes(qn)) s += 6
  if (normalise(item.tag).includes(qn)) s += 3
  if (normalise(item.section).includes(qn)) s += 2
  if (hay.includes(qn)) s += 1
  return s
}

function Card({ item }) {
  return (
    <Link href={item.href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-zinc-900 truncate">{item.title}</h3>
          <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{item.description}</p>
        </div>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{item.tag}</span>
      </div>
      {item.section ? (
        <p className="mt-3 text-xs text-zinc-500">In: {item.section}</p>
      ) : null}
    </Link>
  )
}

export default function SearchPage({ searchParams }) {
  const q = String(searchParams?.q || '')
  const type = String(searchParams?.type || 'all')

  const shortlists = flattenShortlists().map((s) => ({
    type: 'shortlist',
    title: s.label,
    href: s.href,
    tag: s.tag || 'Shortlist',
    section: s._sectionTitle,
    description: s.desc || '',
    updated: s.updated,
  }))

  const posts = listContent('blog').map((p) => ({
    type: 'article',
    title: p.title || p.slug,
    href: `/blog/${p.slug}`,
    tag: (p.type || 'Insight'),
    description: p.description || '',
    tags: p.tags || [],
    updated: p.updated || p.date,
  }))

  const topics = TOPICS.map((t) => ({ type: 'topic', ...t }))
  const core = CORE_PAGES.map((p) => ({ type: 'page', ...p }))

  const index = [...core, ...topics, ...shortlists, ...posts]
  const qn = normalise(q)

  let results = index
  if (qn) {
    results = results
      .map((it) => ({ ...it, _score: scoreItem(qn, it) }))
      .filter((it) => it._score > 0)
      .sort((a, b) => (b._score - a._score) || (String(b.updated || '').localeCompare(String(a.updated || ''))))
  }

  if (type !== 'all') {
    results = results.filter((r) => r.type === type)
  }

  const counts = {
    all: qn ? results.length : index.length,
    shortlists: index.filter((r) => r.type === 'shortlist').length,
    topics: index.filter((r) => r.type === 'topic').length,
    insights: index.filter((r) => r.type === 'article').length,
    pages: index.filter((r) => r.type === 'page').length,
  }

  const typeLinks = [
    { key: 'all', label: 'All' },
    { key: 'shortlist', label: 'Shortlists' },
    { key: 'topic', label: 'Topics' },
    { key: 'article', label: 'Insights' },
    { key: 'page', label: 'Pages' },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Search</h1>
        <p className="mt-3 text-zinc-700">Search across shortlists, topics, and Wellness Insights.</p>

        <form className="mt-6 flex flex-col gap-3 sm:flex-row" action="/search" method="get">
          <input
            name="q"
            defaultValue={q}
            placeholder="Try: air purifier, water filter, fragrance-free, magnesium…"
            className="w-full rounded-2xl border px-4 py-3 text-sm"
          />
          <select name="type" defaultValue={type} className="rounded-2xl border px-3 py-3 text-sm">
            <option value="all">All</option>
            <option value="shortlist">Shortlists</option>
            <option value="topic">Topics</option>
            <option value="article">Insights</option>
            <option value="page">Pages</option>
          </select>
          <button type="submit" className="btn-primary">Search</button>
        </form>

        {!qn ? (
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="text-sm text-zinc-600">Popular:</span>
            {['air purifier', 'water filter', 'dehumidifier', 'fragrance-free', 'sleep', 'oats', 'matcha'].map((t) => (
              <Link
                key={t}
                href={`/search?q=${encodeURIComponent(t)}`}
                className="chip"
              >
                {t}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {typeLinks.map((l) => (
            <Link
              key={l.key}
              href={`/search?q=${encodeURIComponent(q)}&type=${encodeURIComponent(l.key)}`}
              className={
                `rounded-full border px-3 py-1 text-sm ${type === l.key ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-50'}`
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="mt-10">
        {qn ? (
          <p className="text-sm text-zinc-600">{results.length} result{results.length === 1 ? '' : 's'} for “{q}”.</p>
        ) : (
          <p className="text-sm text-zinc-600">Browse everything, or search above.</p>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {(qn ? results : [...topics, ...shortlists.slice(0, 8), ...posts.slice(0, 4)]).slice(0, 60).map((item) => (
            <Card key={`${item.type}_${item.href}`} item={item} />
          ))}
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
