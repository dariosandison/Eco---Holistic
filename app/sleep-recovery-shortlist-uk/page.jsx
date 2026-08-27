import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Sleep & Recovery Upgrades UK — Mattress, Pillow & Bedding Guide',
  description: 'Choose the right sleep upgrade for your actual problem: support, pillows, bedding temperature and recovery comfort, with conservative UK partner links.',
}

function slugify(s = '') {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const ROUTES = [
  { title: 'Mattress support', text: 'Best when your main issue is comfort, pressure or a worn sleep surface.', target: 'mattress-support' },
  { title: 'Pillow & bedding', text: 'Start here for neck comfort, pillow height or a bedding refresh.', target: 'pillows-bedding' },
  { title: 'Temperature', text: 'For people who regularly sleep too warm or too cold.', target: 'bedding-temperature' },
  { title: 'Posture & recovery', text: 'Useful when support and recovery comfort are the main goals.', target: 'posture-support' },
]

export default function Page() {
  const picks = AWIN_PICKS.sleep || []
  const groupOrder = ['Mattress & support', 'Pillows & bedding', 'Bedding & temperature', 'Posture & support', 'Sleep & recovery']
  const groups = groupOrder
    .map((g) => ({ title: g, id: slugify(g), items: picks.filter((p) => p.group === g) }))
    .filter((g) => g.items.length)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Sleep buying guide</p>
        <h1 className="mt-2 text-4xl font-bold">Fix the sleep problem before buying the sleep product</h1>
        <p className="mt-3 text-zinc-700">Light, timing, room temperature and routine still come first. If those basics are reasonable, choose one physical upgrade that matches the problem instead of stacking products.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/sleep">Sleep basics</Link>
          <Link className="btn-secondary" href="/topics/recovery">Recovery basics</Link>
          <Link className="btn-secondary" href="/best-natural-sleep-support">Natural sleep support</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">How affiliate links work</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Partner links may earn Wild & Well a commission at no extra cost to you. Trials, returns, warranty and current pricing should always be checked on the merchant site.</p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ROUTES.map((route) => (
          <a key={route.title} href={`#${route.target}`} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="font-semibold text-zinc-900">{route.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{route.text}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-zinc-900">Compare options →</span>
          </a>
        ))}
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Three rules that prevent expensive mistakes</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li><strong>Change one thing at a time:</strong> otherwise you will not know what actually helped.</li>
          <li><strong>Use the trial period properly:</strong> especially for mattresses and higher-ticket sleep products.</li>
          <li><strong>Do not treat products as medical treatment:</strong> persistent insomnia, heavy snoring, breathing pauses or unexplained daytime sleepiness deserve proper clinical assessment.</li>
        </ul>
      </section>

      {groups.map((g) => (
        <section key={g.id} className="mt-14 scroll-mt-28" id={g.id}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="section-title">{g.title}</h2>
              <p className="section-subtitle">Relevant partner options for comparison. Prices and availability can change.</p>
            </div>
            <Link href="/topics/sleep" className="text-sm font-semibold text-zinc-700 underline underline-offset-4">Sleep criteria</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {g.items.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                trackingContext={`sleep_shortlist_${g.id}`}
                links={[
                  { label: `Check ${p.badge || p.advertiser} price`, merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Read sleep basics', merchant: 'internal', href: '/topics/sleep', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Not sure whether you need to buy anything?</h2>
        <p className="mt-2 text-sm text-zinc-700">Start with the no-spend sleep basics first. A cooler, darker, quieter room and a consistent schedule can matter more than another product.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/sleep">Start with sleep basics</Link>
          <Link className="btn-secondary" href="/topics/recovery">Recovery guide</Link>
        </div>
      </section>
    </main>
  )
}
