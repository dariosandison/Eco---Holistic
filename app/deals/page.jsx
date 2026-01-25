import Link from 'next/link'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Deals — Wild & Well',
  description: 'Short, curated deal searches (UK) to help you compare prices without endless scrolling.',
}

function Deal({ title, desc, href, tag }) {
  return (
    <a
      className="card hover:shadow-sm transition-shadow"
      href={href}
      target="_blank"
      rel="noopener sponsored nofollow"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">
          {tag}
        </span>
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open search →</p>
    </a>
  )
}

export default function Deals() {
  const items = [
    {
      title: 'HEPA air purifiers under £150',
      desc: 'Great for bedrooms + small flats. Compare filter costs too.',
      href: amazonSearchUrl('HEPA air purifier under 150 quiet night mode'),
      tag: 'Air',
    },
    {
      title: 'Dehumidifiers (quiet + energy efficient)',
      desc: 'If damp is the real problem, this often beats another “cleaning spray”.',
      href: amazonSearchUrl('dehumidifier UK quiet energy efficient laundry mode'),
      tag: 'Humidity',
    },
    {
      title: 'Water filter jugs + replacement filters',
      desc: 'Start simple: jug that fits your fridge + a replacement plan.',
      href: amazonSearchUrl('water filter jug brita style + filters'),
      tag: 'Water',
    },
    {
      title: 'Fragrance-free laundry detergent',
      desc: 'High-contact swap. Often a comfort win within a week.',
      href: amazonSearchUrl('fragrance free laundry detergent Ecover Zero Surcare'),
      tag: 'Laundry',
    },
    {
      title: 'Magnesium glycinate (capsules)',
      desc: 'Commonly used for evening wind-down. Start low if you try it.',
      href: amazonSearchUrl('magnesium glycinate capsules UK'),
      tag: 'Sleep',
    },
    {
      title: 'Non-toxic cookware starter picks',
      desc: 'Search by material and size (not marketing).',
      href: amazonSearchUrl('stainless steel frying pan 24cm tri ply'),
      tag: 'Kitchen',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Deals</h1>
        <p className="mt-3 text-zinc-700">
          Deals change fast. These are curated searches so you can compare prices across reputable options without chasing clickbait “limited time” lists.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
          <Link className="btn-secondary" href="/picks">Browse Picks hubs</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((d) => (
          <Deal key={d.title} {...d} />
        ))}
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">Want weekly deals?</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Join the free list and we’ll include a short weekly round-up (no spam, unsubscribe anytime).
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/shopping-list">Get the free list →</Link>
          <Link className="btn-secondary" href="/recommended">Trusted Picks (start here)</Link>
        </div>
      </section>

      <p className="text-xs text-zinc-500 mt-12">
        As an Amazon Associate, we earn from qualifying purchases. We never accept paid placements in reviews.
      </p>
    </main>
  )
}
