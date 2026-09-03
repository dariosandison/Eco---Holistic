'use client'

import { useMemo, useState } from 'react'
import VisibilityTracker from '@/components/VisibilityTracker'
import { trackEvent } from '@/lib/analytics'

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
      <div className="rounded-[2rem] border border-[#cbd2cc] bg-[#f1f1e9] p-5 md:p-7">
        <div className="grid gap-4 md:grid-cols-[1fr,220px]">
          <div>
            <label htmlFor="catalogue-search" className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">Search approved products</label>
            <input id="catalogue-search" value={query} onChange={(event) => setQuery(event.target.value)} onBlur={() => { if (query.trim()) trackEvent('catalogue_search', { catalogue: 'partner_catalogue', query: query.trim().toLowerCase(), result_count: filtered.length }) }} placeholder="Try: under-sink, mattress, dehumidifier…" className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]" />
          </div>
          <div>
            <label htmlFor="catalogue-topic" className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">Topic</label>
            <select id="catalogue-topic" value={topic} onChange={(event) => { const value = event.target.value; setTopic(value); trackEvent('catalogue_filter', { catalogue: 'partner_catalogue', topic: value || 'all' }) }} className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]">
              <option value="">All topics</option>
              {Object.entries(TOPIC_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 border-t border-[#cbd2cc] pt-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Showing <strong className="text-[#123b32]">{filtered.length}</strong> of {products.length} approved partner products.</p>
          <p className="text-xs">No invented prices or discounts — check the retailer for current terms.</p>
        </div>
      </div>

      <div className="mt-12 space-y-16">
        {grouped.map((section) => (
          <section key={`${section.topic}:${section.group}`}>
            <div className="flex flex-col gap-2 border-b border-zinc-300 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">{TOPIC_LABELS[section.topic] || section.topic}</p><h2 className="mt-1 font-serif text-3xl font-normal tracking-tight text-[#123b32]">{section.group}</h2></div>
              <p className="max-w-md text-xs leading-5 text-zinc-500">Use the bullets to judge fit. Retailer links are a final step, not the starting point.</p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((product) => (
                <VisibilityTracker key={product.clickref} event="product_impression" data={{ catalogue: 'partner_catalogue', merchant: product.advertiser, product: product.product, topic: product.topic, clickref: product.clickref }} className="h-full">
                  <article className="flex h-full flex-col border border-zinc-200 bg-white p-6 shadow-[0_12px_34px_rgba(18,59,50,.06)]">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Approved partner · {product.advertiser}</p>
                    <h3 className="mt-3 font-serif text-[1.45rem] font-normal leading-tight text-[#123b32]">{product.product}</h3>
                    <div className="mt-5 border-t border-zinc-200 pt-4"><p className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500">Why it is here</p><ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">{(product.bullets || []).slice(0, 3).map((bullet) => <li key={bullet} className="flex gap-2"><span aria-hidden="true" className="text-[#245c4c]">—</span><span>{bullet}</span></li>)}</ul></div>
                    <div className="mt-auto pt-6"><a href={product.awin} target="_blank" rel="sponsored nofollow noopener" className="btn-primary inline-flex" data-affiliate-context={`catalogue:${product.topic}:${product.group}`}>Check retailer details</a><p className="mt-2 text-[11px] leading-4 text-zinc-500">Affiliate link. Wild & Well may earn a commission at no extra cost to you.</p></div>
                  </article>
                </VisibilityTracker>
              ))}
            </div>
          </section>
        ))}
        {!grouped.length ? <div className="panel text-sm text-zinc-700">No products match that search. Try a broader product type or choose all topics.</div> : null}
      </div>
    </div>
  )
}
