'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

const TAG_ICON = {
  Water: '/images/cards/water-filter.svg',
  Air: '/images/cards/air-purifier.svg',
  Laundry: '/images/cards/laundry.svg',
  Kitchen: '/images/cards/kitchen.svg',
  Shower: '/images/cards/shower-filter.svg',
  Sleep: '/images/cards/sleep.svg',
  Humidity: '/images/cards/humidifier.svg',
  Nutrition: '/images/cards/nutrition.svg',
  Staples: '/images/cards/nutrition.svg',
  Superfoods: '/images/cards/nutrition.svg',
  Drinks: '/images/cards/nutrition.svg',
  Gut: '/images/cards/nutrition.svg',
  Supplements: '/images/cards/supplements.svg',
  Movement: '/images/cards/bands.svg',
  Strength: '/images/cards/bands.svg',
  Mobility: '/images/cards/bands.svg',
  Recovery: '/images/cards/bands.svg',
  Walking: '/images/cards/shoe.svg',
  Trackers: '/images/cards/tracker.svg',
  Fitness: '/images/cards/tracker.svg',
  Scales: '/images/cards/scale.svg',
  'Body comp': '/images/cards/scale.svg',
  'Body Comp': '/images/cards/scale.svg',
  Bands: '/images/cards/bands.svg',
  Footwear: '/images/cards/shoe.svg',
  Clothing: '/images/cards/neutral.svg',
  Guide: '/images/cards/neutral.svg',
  Education: '/images/cards/neutral.svg',
}

function ItemCard({ it }) {
  return (
    <Link key={it.href} href={it.href} className="card hover:shadow-sm transition-shadow p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
            <img
              src={(it.image || TAG_ICON[it.tag] || '/images/cards/neutral.svg')}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-zinc-900">{it.label}</h3>
            {it.desc ? <p className="mt-1 text-sm text-zinc-600">{it.desc}</p> : null}
          </div>
        </div>
        {it.tag ? (
          <span className="chip shrink-0">{it.tag}</span>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

export default function ShortlistExplorer({ sections }) {
  const [q, setQ] = useState('')
  const [tag, setTag] = useState('')

  const allItems = useMemo(() => {
    const flat = []
    for (const s of sections || []) {
      for (const it of (s.items || [])) {
        flat.push({ ...it, _sectionTitle: s.title })
      }
    }
    return flat
  }, [sections])

  const tags = useMemo(() => {
    const s = new Set()
    allItems.forEach((it) => {
      if (it.tag) s.add(it.tag)
    })
    return Array.from(s).sort((a, b) => a.localeCompare(b))
  }, [allItems])

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return allItems.filter((it) => {
      const matchesTag = tag ? String(it.tag || '').toLowerCase() === tag.toLowerCase() : true
      const hay = `${it.label || ''} ${it.desc || ''} ${it._sectionTitle || ''}`.toLowerCase()
      const matchesQ = query ? hay.includes(query) : true
      return matchesTag && matchesQ
    })
  }, [allItems, q, tag])

  const isFiltering = Boolean(q.trim() || tag)

  return (
    <div className="mt-6">
      <div className="panel">
        <div className="grid gap-3 sm:grid-cols-[1fr,200px]">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Search</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Try: water, sleep, laundry, trackers…"
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Tag</label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            >
              <option value="">All</option>
              {tags.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {isFiltering ? (
          <div className="mt-4 text-xs text-zinc-600">
            Showing {filtered.length} result{filtered.length === 1 ? '' : 's'}.
          </div>
        ) : (
          <div className="mt-4 text-xs text-zinc-600">
            Browse by section, or use search and tag filters.
          </div>
        )}
      </div>

      {isFiltering ? (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {filtered.map((it) => (
            <ItemCard key={it.href} it={it} />
          ))}
        </div>
      ) : (
        <div className="mt-10 space-y-12">
          {(sections || []).map((s) => (
            <section key={s.title}>
              <h2 className="section-title">{s.title}</h2>
              {s.desc ? <p className="section-subtitle">{s.desc}</p> : null}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {(s.items || []).map((it) => (
                  <ItemCard key={it.href} it={it} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
