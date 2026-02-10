'use client'

import { useMemo, useState } from 'react'
import Card from '@/components/Card'

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

function norm(s) {
  return String(s || '').toLowerCase().trim()
}

function uniqueTags(posts) {
  const set = new Set()
  for (const p of posts || []) {
    const tags = Array.isArray(p?.tags) ? p.tags : []
    for (const t of tags) {
      const clean = String(t || '').trim()
      if (!clean) continue
      // keep "blog" out of UI filters
      if (clean.toLowerCase() === 'blog') continue
      set.add(clean)
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}

export default function BlogExplorer({ insights = [], explainers = [] }) {
  const [q, setQ] = useState('')
  const [tag, setTag] = useState('All')
  const [view, setView] = useState('All')

  const all = useMemo(() => {
    const a = (insights || []).map((p) => ({ ...p, _type: 'Insight' }))
    const b = (explainers || []).map((p) => ({ ...p, _type: 'Explainer' }))
    return [...a, ...b]
  }, [insights, explainers])

  const tags = useMemo(() => uniqueTags(all), [all])

  function matches(post) {
    if (!post) return false
    if (view !== 'All' && post._type !== view) return false
    if (tag !== 'All') {
      const t = Array.isArray(post.tags) ? post.tags : []
      if (!t.map((x) => String(x || '')).includes(tag)) return false
    }
    const query = norm(q)
    if (!query) return true
    const hay = [
      post.title,
      post.description,
      post.excerpt,
      (Array.isArray(post.tags) ? post.tags.join(' ') : ''),
      post.category,
    ]
      .map(norm)
      .join(' ')
    return hay.includes(query)
  }

  const filteredInsights = (insights || []).map((p) => ({ ...p, _type: 'Insight' })).filter(matches)
  const filteredExplainers = (explainers || []).map((p) => ({ ...p, _type: 'Explainer' })).filter(matches)
  const total = filteredInsights.length + filteredExplainers.length

  return (
    <>
      <div className="mt-8 rounded-2xl border bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <label className="text-xs font-semibold text-zinc-700" htmlFor="blog-search">
              Search
            </label>
            <input
              id="blog-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Try: sleep, mould, hard water, protein…"
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm"
            />
            <p className="mt-2 text-xs text-zinc-500">
              Showing <span className="font-semibold">{total}</span> result{total === 1 ? '' : 's'}.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-700">View</span>
              <select
                value={view}
                onChange={(e) => setView(e.target.value)}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm"
                aria-label="Filter by type"
              >
                <option value="All">All</option>
                <option value="Insight">Insights</option>
                <option value="Explainer">Explainers</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-700">Tag</span>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm"
                aria-label="Filter by tag"
              >
                <option value="All">All</option>
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {(q || tag !== 'All' || view !== 'All') ? (
              <button
                type="button"
                onClick={() => {
                  setQ('')
                  setTag('All')
                  setView('All')
                }}
                className="btn-secondary"
              >
                Reset
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {(view === 'All' || view === 'Insight') ? (
        <section id="insights" className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">Latest insights</h2>
          <p className="mt-1 text-sm text-zinc-700">What the issue is, where it shows up, and what to do about it.</p>
          {filteredInsights.length ? (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {filteredInsights.map((i) => (
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
                  date={fmtDate(i.updated || i.date)}
                />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-zinc-600">No insights match your filters.</p>
          )}
        </section>
      ) : null}

      {(view === 'All' || view === 'Explainer') ? (
        <section id="explainers" className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900">Practical explainers</h2>
          <p className="mt-1 text-sm text-zinc-700">
            Clear, step-by-step context that helps you choose well: what matters, what to ignore, and what to avoid.
          </p>
          {filteredExplainers.length ? (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {filteredExplainers.map((g) => (
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
                  date={fmtDate(g.updated || g.date)}
                />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-zinc-600">No explainers match your filters.</p>
          )}
        </section>
      ) : null}
    </>
  )
}
