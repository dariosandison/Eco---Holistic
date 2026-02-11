import Link from 'next/link'
import ShortlistExplorer from '@/components/ShortlistExplorer'
import { SHORTLIST_SECTIONS } from '@/lib/shortlistsData'
import { flattenShortlists } from '@/lib/shortlistsData'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Shortlists',
  description:
    'Buyer-friendly shortlists for UK homes: clear trade-offs, simple comparisons, and calm recommendations across air, water, fragrance-free living, sleep, nutrition, and movement.',
}


export default function Page() {
  const flat = flattenShortlists(SHORTLIST_SECTIONS)
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wild & Well shortlists',
    itemListElement: (flat || []).map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      url: `${SITE_URL}${it.href}`,
    })),
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={itemList} />
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Shortlists</h1>
        <p className="mt-3 text-zinc-700">
          These are our buyer-friendly pages — built to be quick: what matters, what to avoid, and a small shortlist.
          Use <strong>Search</strong> and <strong>Tag</strong> to find what you need.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics">Learn first (Topics)</Link>
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
          <Link className="btn-secondary" href="/deals">Browse deals</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 8, 2026</p>
      </header>

      <ShortlistExplorer sections={SHORTLIST_SECTIONS} />

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Suggested order</h2>
        <ol className="mt-3 list-decimal pl-6 text-sm text-zinc-700 space-y-2">
          <li>Choose one problem area (air, water, damp, fragrance, sleep).</li>
          <li>Skim the “What matters / Watch-out” sections on the shortlist page.</li>
          <li>Compare 2–3 options, then stop — simplicity wins.</li>
        </ol>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
