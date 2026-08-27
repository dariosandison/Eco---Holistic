'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function Page() {
  const [watts, setWatts] = useState(250)
  const [hours, setHours] = useState(6)
  const [pence, setPence] = useState(25)
  const result = useMemo(() => {
    const dailyKwh = Math.max(0, Number(watts)) / 1000 * Math.max(0, Number(hours))
    const daily = dailyKwh * Math.max(0, Number(pence)) / 100
    return { dailyKwh, daily, monthly: daily * 30, annual: daily * 365 }
  }, [watts, hours, pence])

  return <main className="mx-auto max-w-3xl px-4 py-16">
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Free UK calculator</p>
    <h1 className="mt-2 text-4xl font-bold">Dehumidifier running cost calculator</h1>
    <p className="mt-3 text-zinc-700">Estimate electricity use from the appliance wattage, hours used per day and your own electricity unit rate. This is an estimate: humidistats, cycling and operating conditions can reduce or change actual consumption.</p>
    <section className="mt-8 grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:grid-cols-3">
      <label className="text-sm font-semibold">Power (watts)<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" value={watts} onChange={e=>setWatts(e.target.value)} /></label>
      <label className="text-sm font-semibold">Hours per day<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" max="24" step="0.5" value={hours} onChange={e=>setHours(e.target.value)} /></label>
      <label className="text-sm font-semibold">Electricity (p/kWh)<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" step="0.1" value={pence} onChange={e=>setPence(e.target.value)} /></label>
    </section>
    <section className="mt-6 grid gap-4 sm:grid-cols-3">
      <div className="card"><p className="text-sm text-zinc-500">Per day</p><p className="mt-1 text-2xl font-bold">£{result.daily.toFixed(2)}</p><p className="text-xs text-zinc-500">{result.dailyKwh.toFixed(2)} kWh</p></div>
      <div className="card"><p className="text-sm text-zinc-500">30 days</p><p className="mt-1 text-2xl font-bold">£{result.monthly.toFixed(2)}</p></div>
      <div className="card"><p className="text-sm text-zinc-500">365 days</p><p className="mt-1 text-2xl font-bold">£{result.annual.toFixed(2)}</p></div>
    </section>
    <section className="mt-10"><h2 className="text-2xl font-semibold">Use the number properly</h2><p className="mt-3 text-zinc-700">Do not compare machines on purchase price alone. Check rated power, likely runtime, extraction capacity, noise, filter costs and whether the machine is appropriately sized for the moisture problem.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/best-dehumidifiers-uk">Dehumidifier buying guide</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk">Air quality shortlist</Link><Link className="btn-secondary" href="/blog/dehumidifier-running-cost-uk">Running-cost guide</Link></div></section>
    <p className="mt-10 text-xs text-zinc-500">This calculator is for planning only and does not predict an appliance's exact measured consumption.</p>
  </main>
}
