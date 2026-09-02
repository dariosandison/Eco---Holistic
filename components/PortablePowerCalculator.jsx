'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function PortablePowerCalculator() {
  const [watts, setWatts] = useState(60)
  const [hours, setHours] = useState(8)
  const [efficiency, setEfficiency] = useState(85)
  const result = useMemo(() => {
    const safeWatts = Math.max(0, Number(watts) || 0)
    const safeHours = Math.max(0, Number(hours) || 0)
    const safeEfficiency = Math.min(100, Math.max(1, Number(efficiency) || 85)) / 100
    const loadWh = safeWatts * safeHours
    return { loadWh, minimumWh: loadWh / safeEfficiency, outputWatts: safeWatts }
  }, [watts, hours, efficiency])

  return <main className="mx-auto max-w-4xl px-4 py-16"><p className="text-sm font-semibold uppercase tracking-[.16em] text-zinc-500">Free planning tool</p><h1 className="mt-2 text-4xl font-bold">Portable power runtime calculator</h1><p className="mt-3 max-w-3xl text-zinc-700">Estimate the usable watt-hours needed for one appliance or a combined steady load. This is a sizing starting point, not a promise of real-world runtime.</p><section className="mt-8 grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:grid-cols-3"><label className="text-sm font-semibold">Combined load (watts)<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" value={watts} onChange={event=>setWatts(event.target.value)} /></label><label className="text-sm font-semibold">Hours needed<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="0" step="0.5" value={hours} onChange={event=>setHours(event.target.value)} /></label><label className="text-sm font-semibold">Assumed efficiency (%)<input className="mt-2 w-full rounded-xl border p-3 font-normal" type="number" min="1" max="100" value={efficiency} onChange={event=>setEfficiency(event.target.value)} /></label></section><section className="mt-6 grid gap-4 sm:grid-cols-2"><div className="card"><p className="text-sm text-zinc-500">Energy used by the load</p><p className="mt-1 text-3xl font-bold">{Math.ceil(result.loadWh)} Wh</p></div><div className="card"><p className="text-sm text-zinc-500">Indicative battery capacity</p><p className="mt-1 text-3xl font-bold">{Math.ceil(result.minimumWh)} Wh</p><p className="mt-1 text-xs text-zinc-500">Before ageing, temperature, standby and surge allowances.</p></div></section><section className="mt-10 rounded-3xl border border-amber-900/10 bg-amber-50/60 p-6"><h2 className="text-xl font-semibold">Three checks the watt-hour result cannot answer</h2><ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-700"><li><strong>Continuous output:</strong> the unit must support at least the combined running watts.</li><li><strong>Starting surge:</strong> fridges, pumps and some tools can briefly require much more power.</li><li><strong>Suitability and safety:</strong> do not power medical, heating or safety-critical equipment from a general calculator.</li></ul></section><div className="mt-8 flex flex-wrap gap-2"><Link href="/healthy-home/home-energy" className="btn-primary" onClick={()=>trackEvent('tool_next_step',{tool:'portable_power',destination:'home_energy'})}>Home Energy guide</Link><Link href="/topics/resilience" className="btn-secondary">Plan essential loads</Link><Link href="/outdoors" className="btn-secondary">Outdoors hub</Link></div><p className="mt-10 text-xs text-zinc-500">Actual runtime varies with inverter losses, battery management limits, temperature, battery age, load behaviour and manufacturer settings.</p></main>
}
