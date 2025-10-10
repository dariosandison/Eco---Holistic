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
      {items.length === 0 && <p className="text-sm text-neutral-600">New deals drop soon — check back!</p>}
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
