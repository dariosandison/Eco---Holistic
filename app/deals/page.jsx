export const metadata = { title: 'Today’s Deals — Wild & Well' }

export default function Deals() {
  const items = [
    // Example:
    // { title:'Glass Food Storage Set', href:'https://www.amazon.co.uk/dp/B07PGL2N7J', note:'Ends Sunday' },
  ]
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-3">Today’s Deals</h1>
      <p className="text-neutral-600 mb-6">Curated discounts on durable, low-tox picks.</p>
      {items.length === 0 && (
        <div className="mt-6 space-y-4">
          <p className="text-zinc-700">
            Deals change quickly — so instead of a long list that goes stale, we share a short weekly round-up.
          </p>
          <div className="flex flex-wrap gap-2">
            <a className="btn-primary" href="/shopping-list">Get weekly deals + the free list</a>
            <a className="btn-secondary" href="/recommended">Browse trusted picks</a>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Popular deal categories</h2>
            <ul className="list-disc pl-6 text-zinc-700 space-y-1">
              <li><a className="underline" href="/recommended#starter">Starter swaps</a></li>
              <li><a className="underline" href="/guides/healthy-air-at-home">Air purifiers & filters</a></li>
              <li><a className="underline" href="/guides/water-filter-buying-guide-uk">Water filters</a></li>
              <li><a className="underline" href="/guides/non-toxic-cleaning-starter">Cleaning</a></li>
              <li><a className="underline" href="/guides/non-toxic-mattress-and-bedding-guide">Sleep</a></li>
            </ul>
          </div>
        </div>
      )}
      <ul className="space-y-3">
        {items.map((d) => (
          <li key={d.href}>
            <a className="font-medium underline" href={d.href} target="_blank" rel="noopener sponsored nofollow">
              {d.title}
            </a>
            {d.note && <span className="text-sm text-neutral-500"> — {d.note}</span>}
          </li>
        ))}
      </ul>
      <p className="text-xs text-neutral-500 mt-8">As an Amazon Associate, we earn from qualifying purchases.</p>
    </div>
  )
}
