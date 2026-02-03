'use client'

import { useMemo, useState } from 'react'

function clampNum(v) {
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
}

function fmtGBP(n) {
  const x = Number(n)
  if (!Number.isFinite(x)) return '—'
  return x.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 2 })
}

function fmtPencePerKwh(n) {
  const x = Number(n)
  if (!Number.isFinite(x)) return ''
  return String(x)
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-semibold text-zinc-900">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

/**
 * RunningCostTool
 * - Filter replacement estimator (annual / monthly)
 * - Electricity estimator (daily / monthly / annual)
 *
 * These calculators are intentionally input-driven (no hidden assumptions),
 * so the numbers reflect the reader's own prices and usage.
 */
export default function RunningCostTool({
  showFilters = true,
  showElectricity = true,
  defaultElectricityPencePerKwh = 30,
}) {
  const [packPrice, setPackPrice] = useState('')
  const [filtersPerPack, setFiltersPerPack] = useState(1)
  const [replacementsPerYear, setReplacementsPerYear] = useState('')

  const [watts, setWatts] = useState('')
  const [hoursPerDay, setHoursPerDay] = useState('')
  const [pencePerKwh, setPencePerKwh] = useState(defaultElectricityPencePerKwh)

  const filterResult = useMemo(() => {
    const price = clampNum(packPrice)
    const perPack = Math.max(1, clampNum(filtersPerPack))
    const perYear = clampNum(replacementsPerYear)

    if (!price || !perYear) return null

    const perFilter = price / perPack
    const annual = perFilter * perYear
    return {
      perFilter,
      annual,
      monthly: annual / 12,
    }
  }, [packPrice, filtersPerPack, replacementsPerYear])

  const energyResult = useMemo(() => {
    const w = clampNum(watts)
    const h = clampNum(hoursPerDay)
    const p = clampNum(pencePerKwh)

    if (!w || !h || !p) return null

    const kwhPerDay = (w / 1000) * h
    const costPerKwhGBP = p / 100
    const daily = kwhPerDay * costPerKwhGBP
    const monthly = daily * 30
    const annual = daily * 365

    return {
      kwhPerDay,
      daily,
      monthly,
      annual,
    }
  }, [watts, hoursPerDay, pencePerKwh])

  if (!showFilters && !showElectricity) return null

  return (
    <div className="mt-4">
      <div className="grid gap-4 md:grid-cols-2">
        {showFilters ? (
          <Card title="Replacement cost estimator">
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Pack price (£)</label>
                <input
                  value={packPrice}
                  onChange={(e) => setPackPrice(e.target.value)}
                  inputMode="decimal"
                  placeholder="e.g. 25"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Filters per pack</label>
                <input
                  value={filtersPerPack}
                  onChange={(e) => setFiltersPerPack(e.target.value)}
                  inputMode="numeric"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Replacements per year</label>
                <input
                  value={replacementsPerYear}
                  onChange={(e) => setReplacementsPerYear(e.target.value)}
                  inputMode="decimal"
                  placeholder="e.g. 6"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                />
              </div>
            </div>

            {filterResult ? (
              <div className="mt-4 rounded-2xl border bg-zinc-50 p-3 text-sm text-zinc-800">
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <div><span className="font-semibold">Per filter:</span> {fmtGBP(filterResult.perFilter)}</div>
                  <div><span className="font-semibold">Annual:</span> {fmtGBP(filterResult.annual)}</div>
                  <div><span className="font-semibold">Monthly:</span> {fmtGBP(filterResult.monthly)}</div>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-xs text-zinc-500">
                Enter pack price and your replacement frequency to estimate ongoing cost.
              </p>
            )}
          </Card>
        ) : null}

        {showElectricity ? (
          <Card title="Electricity cost estimator">
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Power (watts)</label>
                <input
                  value={watts}
                  onChange={(e) => setWatts(e.target.value)}
                  inputMode="decimal"
                  placeholder="e.g. 250"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Hours per day</label>
                <input
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(e.target.value)}
                  inputMode="decimal"
                  placeholder="e.g. 6"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Electricity (p/kWh)</label>
                <input
                  value={fmtPencePerKwh(pencePerKwh)}
                  onChange={(e) => setPencePerKwh(e.target.value)}
                  inputMode="decimal"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                />
              </div>
            </div>

            {energyResult ? (
              <div className="mt-4 rounded-2xl border bg-zinc-50 p-3 text-sm text-zinc-800">
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <div><span className="font-semibold">kWh/day:</span> {energyResult.kwhPerDay.toFixed(2)}</div>
                  <div><span className="font-semibold">Daily:</span> {fmtGBP(energyResult.daily)}</div>
                  <div><span className="font-semibold">Monthly:</span> {fmtGBP(energyResult.monthly)}</div>
                  <div><span className="font-semibold">Annual:</span> {fmtGBP(energyResult.annual)}</div>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-xs text-zinc-500">
                Enter watts and hours/day to estimate running cost. Use the rate from your bill if you know it.
              </p>
            )}
          </Card>
        ) : null}
      </div>
    </div>
  )
}
