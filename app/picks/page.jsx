import Image from 'next/image'
import Link from 'next/link'

import EducationFirstCallout from '@/components/EducationFirstCallout'
import ShortlistExplorer from '@/components/ShortlistExplorer'
import { getPicksSections } from '@/lib/picksSections'
import { PARTNER_PRODUCTS } from '@/lib/partnerProducts'

export const metadata = {
  title: 'Picks (Shortlists)',
  description:
    'Shortlists with clear trade-offs for UK homes: air, water, fragrance-free laundry, sleep, nutrition, and movement.',
}

export default function Page() {
  const sections = getPicksSections()
  const partners = PARTNER_PRODUCTS

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
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">Picks</h1>
            <p className="mt-4 text-base text-zinc-700 md:text-lg">
              Shortlists with the main trade-offs, made for UK homes. Start with a Topic page if you want the “why”, then use these pages when you want options.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/topics" className="btn-secondary w-full sm:w-auto text-center">Start with Topics</Link>
              <Link href="/shopping-list" className="btn-primary w-full sm:w-auto text-center">Free shopping list</Link>
              <Link href="/deals" className="w-full sm:w-auto text-center rounded-xl border border-zinc-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white">Deals</Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-zinc-700">Filter:</span>
              <Link href="/picks?tag=Air" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">Air</Link>
              <Link href="/picks?tag=Water" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">Water</Link>
              <Link href="/picks?tag=Laundry" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">Laundry</Link>
              <Link href="/picks?tag=Sleep" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">Sleep</Link>
              <Link href="/picks?tag=Staples" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">Nutrition</Link>
              <Link href="/picks?tag=Walking" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">Movement</Link>
            </div>

            <p className="mt-4 text-xs text-zinc-600">Some links are affiliate links. If you buy via them, we earn a commission.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div id="start-here" className="scroll-mt-24" />
        <EducationFirstCallout topicHref="/topics" topicLabel="Start with Topics" insightHref="/blog" insightLabel="Read Wellness Insights" />
        <ShortlistExplorer sections={sections} />

        <div className="mt-14">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Featured partner products</h2>
              <p className="mt-1 text-sm text-zinc-600 max-w-2xl">
                A small set of high-fit products from partners you’re approved with. (Links are affiliate links.)
              </p>
            </div>
            <Link
              href="/affiliate-disclosure"
              className="text-sm font-semibold text-zinc-900 hover:underline"
            >
              How affiliate links work
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <div key={p.key} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
                <a
                  href={p.links.card}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="block"
                >
                  <div className="relative h-40">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                    <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur">
                      {p.tag}
                    </div>
                  </div>
                </a>

                <div className="p-5">
                  <p className="text-xs font-semibold text-zinc-500">{p.brand}</p>
                  <h3 className="mt-1 text-base font-semibold text-zinc-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-zinc-700">{p.desc}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={p.links.cta}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      className="btn-primary"
                    >
                      Check price
                    </a>
                    <Link
                      href={
                        p.tag === 'Water'
                          ? '/best-water-filters-uk'
                          : p.tag === 'Sleep'
                            ? '/best-natural-sleep-support'
                            : p.tag === 'Movement' || p.tag === 'Strength' || p.tag === 'Walking'
                              ? '/movement'
                              : p.tag === 'Staples' || p.tag === 'Drinks'
                                ? '/nutrition'
                                : '/holistic-health'
                      }
                      className="text-sm font-semibold text-zinc-900 hover:underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
