'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { amazonSearchUrl } from '@/lib/amazon'

function DealCard({ title, desc, query, guideHref, tag }) {
  const href = amazonSearchUrl(query)
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{tag}</span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a className="btn-secondary" href={href} target="_blank" rel="noreferrer">
          View deal search
        </a>
        {guideHref ? (
          <Link className="btn-secondary" href={guideHref}>
            Open the page
          </Link>
        ) : null}
      </div>

      <p className="mt-3 text-xs text-zinc-500">Prices and availability change quickly. Check the listing for current details.</p>
    </div>
  )
}

function norm(s) {
  return String(s || '').toLowerCase().trim()
}

export default function DealExplorer({ deals = [] }) {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('All')

  const tags = useMemo(() => {
    const set = new Set(['All'])
    for (const d of deals) if (d.tag) set.add(d.tag)
    return Array.from(set)
  }, [deals])

  const filtered = useMemo(() => {
    const q = norm(query)
    return deals.filter((d) => {
      if (tag !== 'All' && d.tag !== tag) return false
      if (!q) return true
      const hay = norm([d.title, d.desc, d.tag, d.group].join(' '))
      return hay.includes(q)
    })
  }, [deals, query, tag])

  const groups = useMemo(() => {
    const map = new Map()
    for (const d of filtered) {
      const g = d.group || 'More'
      if (!map.has(g)) map.set(g, [])
      map.get(g).push(d)
    }
    return Array.from(map.entries())
  }, [filtered])

  return (
    <section className="mt-10">
      <div className="card">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Find deals fast</h2>
            <p className="mt-1 text-sm text-zinc-600">Filter by tag or search (e.g., “humidifier”, “oats”).</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search deals…"
              className="w-full sm:w-72 rounded-xl border px-3 py-2 text-sm"
            />
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="rounded-xl border px-3 py-2 text-sm"
            >
              {tags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-8">
        {groups.map(([g, items]) => (
          <div key={g}>
            <h2 className="text-2xl font-semibold" id={g.toLowerCase().replace(/\s+/g, '-')}>{g}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {items.map((d) => (
                <DealCard key={d.title} {...d} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
