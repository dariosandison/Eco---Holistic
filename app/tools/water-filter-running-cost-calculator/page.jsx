'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function Page() {
  const [unitPrice, setUnitPrice] = useState(120)
  const [filterPrice, setFilterPrice] = useState(35)
  const [changes, setChanges] = useState(2)
  const [years, setYears] = useState(3)
  const result = useMemo(() => {
    const purchase = Math.max(0, Number(unitPrice))
    const annualFilters = Math.max(0, Number(filterPrice)) * Math.max(0, Number(changes))
    const period = Math.max(1, Number(years))
    const total = purchase + annualFilters * period
    return { annualFilters, total, monthly: total / (period * 12) }
  }, [unitPrice, filterPrice, changes, years])

  return <main className="mx-auto max-w-3xl px-4 py-16">
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Free ownership-cost tool</p>
    <h1 className="mt-2 text-4xl font-bold">Water filter running cost calculator</h1>
    <p className="mt-3 text-zinc-700">Compare a water filter on the cost you are likely to own, not just the day-one price. Enter the unit price, replacement-filter cost and expected replacement frequency.</p>
    <section className="mt-8 grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:grid-cols-2">
      <label className="text-sm font-semibold">Filter system price (£)<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" value={unitPrice} onChange={e=>setUnitPrice(e.target.value)} /></label>
      <label className="text-sm font-semibold">Replacement filter price (£)<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" value={filterPrice} onChange={e=>setFilterPrice(e.target.value)} /></label>
      <label className="text-sm font-semibold">Replacements per year<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" step="0.5" value={changes} onChange={e=>setChanges(e.target.value)} /></label>
      <label className="text-sm font-semibold">Ownership period (years)<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="1" max="20" value={years} onChange={e=>setYears(e.target.value)} /></label>
    </section>
    <section className="mt-6 grid gap-4 sm:grid-cols-3">
      <div className="card"><p className="text-sm text-zinc-500">Filters per year</p><p className="mt-1 text-2xl font-bold">£{result.annualFilters.toFixed(2)}</p></div>
      <div className="card"><p className="text-sm text-zinc-500">Total ownership</p><p className="mt-1 text-2xl font-bold">£{result.total.toFixed(2)}</p><p className="text-xs text-zinc-500">over {Math.max(1, Number(years))} year(s)</p></div>
      <div className="card"><p className="text-sm text-zinc-500">Average/month</p><p className="mt-1 text-2xl font-bold">£{result.monthly.toFixed(2)}</p></div>
    </section>
    <section className="mt-10"><h2 className="text-2xl font-semibold">Use the figure to compare like with like</h2><p className="mt-3 text-zinc-700">Replacement frequency varies with the system, usage and water conditions. Use the manufacturer's schedule as a starting assumption, then check that replacement cartridges are actually available in the UK.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/water-filtration-shortlist-uk">Water filtration shortlist</Link><Link className="btn-secondary" href="/blog/filter-replacement-costs-uk">Replacement-cost guide</Link><Link className="btn-secondary" href="/topics/water">Water hub</Link></div></section>
    <p className="mt-10 text-xs text-zinc-500">Planning estimate only. It excludes installation, water, electricity and maintenance costs that may apply to particular systems.</p>
  </main>
}
