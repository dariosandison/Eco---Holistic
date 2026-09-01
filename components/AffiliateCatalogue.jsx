'use client'

import { useMemo, useState } from 'react'

const TOPIC_LABELS = { water: 'Water', air: 'Air quality', sleep: 'Sleep', movement: 'Movement' }

export default function AffiliateCatalogue({ products }) {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((product) => {
      if (topic && product.topic !== topic) return false
      if (!q) return true
      return `${product.product} ${product.advertiser} ${product.group}`.toLowerCase().includes(q)
    })
  }, [products, query, topic])

  const grouped = useMemo(() => {
    const groups = new Map()
    for (const product of filtered) {
      const key = `${product.topic}:${product.group}`
      if (!groups.has(key)) groups.set(key, { topic: product.topic, group: product.group, items: [] })
      groups.get(key).items.push(product)
    }
    return Array.from(groups.values())
  }, [filtered])

  return (
    <div className="mt-8">
      <div className="panel grid gap-4 md:grid-cols-[1fr,220px]">
        <div>
          <label htmlFor="catalogue-search" className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Search approved products</label>
          <input id="catalogue-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try: under-sink, mattress, dehumidifier…" className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]" />
        </div>
        <div>
          <label htmlFor="catalogue-topic" className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Topic</label>
          <select id="catalogue-topic" value={topic} onChange={(event) => setTopic(event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]">
            <option value="">All topics</option>
            {Object.entries(TOPIC_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </div>
        <p className="text-sm text-zinc-600 md:col-span-2">Showing {filtered.length} of {products.length} approved partner products.</p>
      </div>

      <div className="mt-10 space-y-12">
        {grouped.map((section) => (
          <section key={`${section.topic}:${section.group}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">{TOPIC_LABELS[section.topic] || section.topic}</p>
            <h2 className="mt-1 text-2xl font-semibold">{section.group}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((product) => (
                <article key={product.clickref} className="card flex flex-col p-5">
                  <p className="text-xs font-semibold text-zinc-500">{product.advertiser}</p>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900">{product.product}</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600">
                    {(product.bullets || []).slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <a href={product.awin} target="_blank" rel="sponsored nofollow noopener" className="btn-primary mt-5 self-start">Check current price</a>
                </article>
              ))}
            </div>
          </section>
        ))}
        {!grouped.length ? <div className="panel text-sm text-zinc-700">No products match that search. Try a broader product type or choose all topics.</div> : null}
      </div>
    </div>
  )
}
