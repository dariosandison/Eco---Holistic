import Link from 'next/link'
import { flattenShortlists } from '@/lib/shortlistsData'

function norm(s) {
  return String(s || '').toLowerCase()
}

function score(shortlist, tags = []) {
  const t = (tags || []).map(norm)
  const hay = norm([shortlist.label, shortlist.tag, shortlist._sectionTitle, shortlist.desc].join(' '))
  let s = 0
  for (const tg of t) {
    if (!tg) continue
    if (norm(shortlist.tag).includes(tg) || tg.includes(norm(shortlist.tag))) s += 4
    if (norm(shortlist._sectionTitle).includes(tg) || tg.includes(norm(shortlist._sectionTitle))) s += 2
    if (norm(shortlist.label).includes(tg) || tg.includes(norm(shortlist.label))) s += 2
    if (hay.includes(tg)) s += 1
  }
  return s
}

function Card({ item }) {
  return (
    <Link href={item.href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-zinc-900 truncate">{item.label}</h3>
          <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{item.desc}</p>
        </div>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{item.tag || 'Shortlist'}</span>
      </div>
      <p className="mt-3 text-xs text-zinc-500">In: {item._sectionTitle}</p>
    </Link>
  )
}

export default function RelatedShortlists({ tags = [], limit = 6 }) {
  const all = flattenShortlists()

  const picks = all
    .map((s) => ({ ...s, _score: score(s, tags) }))
    .filter((s) => s._score > 0)
    .sort((a, b) => (b._score - a._score) || (String(b.updated || '').localeCompare(String(a.updated || ''))))
    .slice(0, limit)

  if (!picks.length) return null

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Related shortlists</h2>
          <p className="mt-2 text-sm text-zinc-600">If you’re comparing products, these are built to be quick: what matters, what to avoid, and a short shortlist.</p>
        </div>
        <Link href="/shortlists" className="text-sm font-semibold text-zinc-900 hover:underline whitespace-nowrap">Browse all →</Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {picks.map((p) => (
          <Card key={p.href} item={p} />
        ))}
      </div>
    </section>
  )
}
