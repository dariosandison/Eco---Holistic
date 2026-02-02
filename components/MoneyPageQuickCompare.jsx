'use client'

// components/MoneyPageQuickCompare.jsx
import { useMemo, useState } from 'react'

/**
 * Quick comparison table built from a PICKS array.
 * Designed for scanning: best-for label + one key note + one trade-off.
 *
 * This is intentionally lightweight: filtering/searching helps readers
 * find the right row fast without changing the editorial order by default.
 */
export default function MoneyPageQuickCompare({ picks = [] }) {
  const [q, setQ] = useState('')
  const [badge, setBadge] = useState('All')
  const [sort, setSort] = useState('Recommended')

  const badgeOptions = useMemo(() => {
    const set = new Set()
    picks.forEach((p) => {
      if (p?.badge) set.add(String(p.badge))
    })
    return ['All', ...Array.from(set)]
  }, [picks])

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    let out = Array.isArray(picks) ? [...picks] : []

    if (badge !== 'All') {
      out = out.filter((p) => String(p?.badge || '') === badge)
    }

    if (query) {
      out = out.filter((p) => {
        const hay = [
          p?.title,
          p?.badge,
          p?.note,
          p?.tradeoff,
          ...(Array.isArray(p?.bullets) ? p.bullets : []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        return hay.includes(query)
      })
    }

    if (sort === 'A–Z') {
      out.sort((a, b) => String(a?.title || '').localeCompare(String(b?.title || '')))
    }

    return out
  }, [picks, q, badge, sort])

  if (!picks || picks.length === 0) return null

  return (
    <section className="mt-8">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-zinc-900">Quick comparison</h2>
            <p className="mt-2 text-sm text-zinc-700 max-w-3xl">
              Scan the best‑for label, one key note, and one trade‑off.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search picks…"
              className="w-full sm:w-56 rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            />

            <select
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full sm:w-48 rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              aria-label="Filter by label"
            >
              {badgeOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full sm:w-40 rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              aria-label="Sort order"
            >
              <option value="Recommended">Recommended</option>
              <option value="A–Z">A–Z</option>
            </select>
          </div>
        </div>

        <div className="mt-5 overflow-auto rounded-2xl border">
          <table className="min-w-[760px] w-full border-collapse text-sm">
            <thead className="bg-zinc-50 text-left text-zinc-700">
              <tr>
                <th className="px-4 py-3 font-semibold w-[220px]">Pick</th>
                <th className="px-4 py-3 font-semibold">Best for</th>
                <th className="px-4 py-3 font-semibold">Key note</th>
                <th className="px-4 py-3 font-semibold">Trade‑off</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3 font-semibold text-zinc-900">{p.title}</td>
                  <td className="px-4 py-3 text-zinc-700">{p.badge}</td>
                  <td className="px-4 py-3 text-zinc-700">{p.note}</td>
                  <td className="px-4 py-3 text-zinc-700">{p.tradeoff}</td>
                </tr>
              ))}
              {filtered.length === 0 ? (
                <tr className="border-t">
                  <td className="px-4 py-5 text-zinc-600" colSpan={4}>
                    No matches. Try a different search or filter.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
