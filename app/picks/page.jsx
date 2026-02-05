import Image from 'next/image'
import Link from 'next/link'

import EducationFirstCallout from '@/components/EducationFirstCallout'
import ShortlistExplorer from '@/components/ShortlistExplorer'
import { getPicksSections } from '@/lib/picksSections'

export const metadata = {
  title: 'Picks (Shortlists)',
  description:
    'Shortlists with clear trade-offs for UK homes: air, water, fragrance-free laundry, sleep, nutrition, and movement.',
}

export default function Page() {
  const sections = getPicksSections()

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
      </section>
    </main>
  )
}
