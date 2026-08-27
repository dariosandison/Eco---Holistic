'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function Page() {
  const [people, setPeople] = useState(4)
  const [litres, setLitres] = useState(3)
  const [days, setDays] = useState(3)
  const total = useMemo(() => Math.max(0, Number(people)) * Math.max(0, Number(litres)) * Math.max(0, Number(days)), [people, litres, days])
  return <main className="mx-auto max-w-3xl px-4 py-16">
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Free household planning tool</p>
    <h1 className="mt-2 text-4xl font-bold">72-hour household water calculator</h1>
    <p className="mt-3 text-zinc-700">Work out a simple drinking-water planning quantity for a short disruption. Adjust the daily litres to suit your household and circumstances rather than treating one number as universal.</p>
    <section className="mt-8 grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:grid-cols-3">
      <label className="text-sm font-semibold">People<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="1" value={people} onChange={e=>setPeople(e.target.value)} /></label>
      <label className="text-sm font-semibold">Litres/person/day<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" step="0.5" value={litres} onChange={e=>setLitres(e.target.value)} /></label>
      <label className="text-sm font-semibold">Days<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="1" value={days} onChange={e=>setDays(e.target.value)} /></label>
    </section>
    <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6"><p className="text-sm text-zinc-600">Planning quantity</p><p className="mt-1 text-4xl font-bold">{total.toFixed(1)} litres</p><p className="mt-2 text-sm text-zinc-600">For {people || 0} people × {litres || 0} L/day × {days || 0} days.</p></div>
    <section className="mt-10"><h2 className="text-2xl font-semibold">Storage first, filtration second</h2><p className="mt-3 text-zinc-700">A filter is not a substitute for having water available. Start with sensible stored drinking water, rotate it, and use filtration as an additional tool where it solves a defined problem.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/blog/72-hour-household-water-plan-uk">72-hour water plan</Link><Link className="btn-secondary" href="/topics/resilience">Practical resilience</Link><Link className="btn-secondary" href="/water-filtration-shortlist-uk">Water filtration shortlist</Link></div></section>
    <p className="mt-10 text-xs text-zinc-500">This is a planning calculator, not an official emergency-water requirement. Needs vary with health, weather, activity, food preparation and other circumstances.</p>
  </main>
}
