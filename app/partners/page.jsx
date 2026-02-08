import Image from 'next/image'
import Link from 'next/link'

import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import { PARTNER_PRODUCTS } from '@/lib/partnerProducts'

export const metadata = {
  title: 'Partner Picks',
  description: 'A curated list of partner products we feature across Wild & Well (affiliate links).',
}

const GROUP_ORDER = ['Water', 'Sleep', 'Movement', 'Strength', 'Staples', 'Drinks', 'Gut', 'Home']

function groupProducts(products) {
  const map = new Map()
  for (const p of products) {
    const k = p.tag || 'Other'
    map.set(k, [...(map.get(k) || []), p])
  }
  // stable ordering + fallbacks
  const orderedKeys = [...new Set([...GROUP_ORDER, ...Array.from(map.keys())])]
  return orderedKeys
    .filter((k) => map.has(k))
    .map((k) => ({ tag: k, items: map.get(k) }))
}

export default function Page() {
  const groups = groupProducts(PARTNER_PRODUCTS)

  return (
    <main>
      {/* Full-width hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/photography/home.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-white" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">Partner picks</h1>
            <p className="mt-4 text-base text-zinc-700 md:text-lg">
              These are the partner products we currently feature across Wild &amp; Well. We keep this list small and high‑fit — no endless catalogue.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/picks" className="btn-secondary w-full sm:w-auto text-center">Browse Picks</Link>
              <Link href="/topics" className="btn-secondary w-full sm:w-auto text-center">Start with Topics</Link>
              <Link href="/affiliate-disclosure" className="btn-primary w-full sm:w-auto text-center">How affiliate links work</Link>
            </div>

            <p className="mt-5 text-xs text-zinc-600">Some links are affiliate links. If you buy via them, we may earn a commission at no extra cost to you.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <EducationFirstCallout topicHref="/topics" topicLabel="Start with Topics" insightHref="/how-we-test" insightLabel="How we test" />

        <div className="mt-10 grid gap-3 rounded-2xl border bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold">Quick navigation</h2>
            <p className="mt-1 text-sm text-zinc-600">Jump to a section:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <a key={g.tag} href={`#${g.tag.toLowerCase()}`} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                {g.tag}
              </a>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <section key={g.tag} id={g.tag.toLowerCase()} className="mt-14 scroll-mt-24">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{g.tag}</h2>
                <p className="mt-1 text-sm text-zinc-600">
                  {g.tag === 'Water'
                    ? 'Low-effort filtration options — jug, under-sink, gravity, and on-the-go.'
                    : g.tag === 'Sleep'
                      ? 'Simple support for better nights — environment first, products second.'
                      : g.tag === 'Movement' || g.tag === 'Strength'
                        ? 'Gear that helps consistency without turning your home into a gym.'
                        : g.tag === 'Home'
                          ? 'Low-tox swaps for bathrooms and home routines.'
                          : g.tag === 'Gut'
                            ? 'Gut-focused options — keep expectations realistic and avoid stacking.'
                            : 'Nutrition and everyday staples.'}
                </p>
              </div>

              <Link
                href={
                  g.tag === 'Water'
                    ? '/best-water-filters-uk'
                    : g.tag === 'Sleep'
                      ? '/best-natural-sleep-support'
                      : g.tag === 'Movement' || g.tag === 'Strength'
                        ? '/movement'
                        : g.tag === 'Home'
                          ? '/best-low-tox-products-for-beginners'
                          : '/nutrition'
                }
                className="text-sm font-semibold text-zinc-900 hover:underline"
              >
                Read the related guide →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((p) => (
                <ProductPick
                  key={p.key}
                  title={p.title}
                  badge={p.brand}
                  description={p.desc}
                  image={p.image}
                  links={[{ label: 'Check price', merchant: 'awin', href: p.links.cta, variant: 'primary' }]}
                />
              ))}
            </div>
          </section>
        ))}

        <p className="mt-14 text-xs text-zinc-500">
          Some links are affiliate links. If you buy via them, we earn a commission. We don’t accept paid placements disguised as advice.
        </p>
      </section>
    </main>
  )
}
