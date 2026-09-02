'use client'

import { useMemo, useState } from 'react'
import VisibilityTracker from '@/components/VisibilityTracker'

const NEEDS = {
  purifier: 'Airborne dander',
  humidity: 'Damp & humidity',
  replacement: 'Replacement filters',
}

export default function DogProductCatalogue({ products }) {
  const [query, setQuery] = useState('')
  const [need, setNeed] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((product) => {
      if (need && product.dogNeed !== need) return false
      if (!q) return true
      return [product.product, product.advertiser, product.group, product.dogUse]
        .join(' ')
        .toLowerCase()
        .includes(q)
    })
  }, [products, query, need])

  return (
    <div className="mt-8">
      <div className="panel grid gap-4 md:grid-cols-[1fr,220px]">
        <div>
          <label htmlFor="dog-product-search" className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Search current products</label>
          <input
            id="dog-product-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: purifier, HEPA filter, humidity…"
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
          />
        </div>
        <div>
          <label htmlFor="dog-product-need" className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Household need</label>
          <select
            id="dog-product-need"
            value={need}
            onChange={(event) => setNeed(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
          >
            <option value="">All needs</option>
            {Object.entries(NEEDS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </div>
        <p className="text-sm text-zinc-600 md:col-span-2">Showing {filtered.length} of {products.length} currently approved products.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <VisibilityTracker key={product.clickref} event="product_impression" data={{ product: product.product, merchant: product.advertiser, category: 'dog-home', clickref: product.clickref }}>
          <article className="card flex h-full flex-col p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{NEEDS[product.dogNeed]}</p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900">{product.product}</h2>
            <p className="mt-1 text-xs text-zinc-500">{product.advertiser}</p>
            <p className="mt-3 text-sm text-zinc-700">{product.dogUse}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600">
              {(product.bullets || []).slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <a
              href={product.awin}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="btn-primary mt-5 self-start"
              data-affiliate="awin"
              data-clickref={product.clickref}
            >
              Check current price
            </a>
          </article>
          </VisibilityTracker>
        ))}
      </div>
      {!filtered.length ? <div className="panel mt-6 text-sm text-zinc-700">No current products match that search. Try a broader term or select all needs.</div> : null}
    </div>
  )
}
