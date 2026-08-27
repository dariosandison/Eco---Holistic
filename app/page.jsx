import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Wild & Well — practical wellness for real life',
  description: 'UK-focused guides for water, air, sleep, nutrition, movement, low-tox living and practical household resilience.',
}

const CORE_TOPICS = [
  { title: 'Water', href: '/topics/water', image: '/images/cards/water-filter.svg', desc: 'Drinking water, filter types, hard-water comfort and sensible shortlists.' },
  { title: 'Air quality', href: '/topics/air-quality', image: '/images/cards/air-purifier.svg', desc: 'Allergies, damp, smoke, ventilation and purifier basics.' },
  { title: 'Sleep & recovery', href: '/topics/sleep', image: '/images/cards/sleep.svg', desc: 'Light, timing, temperature, routines and recovery options.' },
  { title: 'Nutrition', href: '/topics/nutrition', image: '/images/photography/thumbs/nutrition.svg', desc: 'Food-first habits, labels, protein, fibre and practical upgrades.' },
  { title: 'Movement', href: '/topics/movement', image: '/images/photography/thumbs/movement.svg', desc: 'Walking, simple strength, mobility and natural movement.' },
  { title: 'Low-tox home', href: '/topics/fragrance-free', image: '/images/cards/laundry.svg', desc: 'Fragrance, cleaning, laundry and lower-exposure household swaps.' },
]

const RESILIENCE_GUIDES = [
  { title: 'UK 72-Hour Household Kit', href: '/blog/72-hour-household-emergency-kit-uk', desc: 'A calm checklist for water, food, lighting, power, first aid and hygiene.' },
  { title: '72-Hour Household Water Plan', href: '/blog/72-hour-household-water-plan-uk', desc: 'How much water to store, how to rotate it and where filtration fits.' },
  { title: 'Power Cut Preparation', href: '/blog/uk-power-cut-preparation-guide', desc: 'Practical steps for lighting, communication, charging and warmth.' },
  { title: 'Indoor Air During Smoke or Pollution', href: '/blog/indoor-air-smoke-pollution-uk', desc: 'What helps indoors when outside air quality becomes poor.' },
]

const COMMERCIAL_PATHS = [
  { title: 'Best water filters UK', href: '/best-water-filters-uk', desc: 'Compare household and portable filtration routes.' },
  { title: 'Air purifiers for allergies', href: '/best-air-purifiers-allergies-uk', desc: 'A shortlist for common UK home setups.' },
  { title: 'Dehumidifiers for damp & mould', href: '/best-dehumidifiers-damp-mould-uk', desc: 'Useful where humidity is part of the problem.' },
  { title: 'Low-tox starter shortlist', href: '/best-low-tox-products-for-beginners', desc: 'A practical starting point for cleaner household swaps.' },
]

function TopicCard({ item }) {
  return (
    <Link href={item.href} className="group rounded-2xl border border-zinc-200 bg-white p-5 transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
          <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900 group-hover:underline">{item.title}</h3>
          <p className="mt-2 text-sm text-zinc-700">{item.desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/photography/home-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-600">Wild &amp; Well</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
              Evidence-led wellness for real life.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-zinc-700 md:text-lg">
              Clear UK-focused guidance on water, food, air, sleep, movement, low-tox living and practical household resilience — with useful products only where they genuinely solve a problem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/start-here" className="btn-primary">Start here</Link>
              <Link href="/topics" className="btn-secondary">Browse topics</Link>
              <Link href="/shortlists" className="btn-secondary">Compare products</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <Link href="/topics/water" className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1.5">Water</Link>
              <Link href="/topics/air-quality" className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1.5">Air quality</Link>
              <Link href="/topics/sleep" className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1.5">Sleep</Link>
              <Link href="/topics/nutrition" className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1.5">Nutrition</Link>
              <Link href="/topics/resilience" className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1.5">Practical resilience</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Start with a problem</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">Choose what you want to improve</h2>
          <p className="mt-3 text-zinc-700">Each topic starts with practical steps first, then links to comparisons when buying something would actually help.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_TOPICS.map((item) => <TopicCard key={item.href} item={item} />)}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/70">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">New pillar</p>
              <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Practical resilience</h2>
              <p className="mt-3 text-zinc-700">Short-term disruption is a household problem before it is a survival problem. Our approach is calm, useful and non-alarmist.</p>
              <Link href="/topics/resilience" className="mt-5 inline-block font-semibold text-zinc-900 hover:underline">Explore practical resilience →</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {RESILIENCE_GUIDES.map((guide) => (
                <Link key={guide.href} href={guide.href} className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:shadow-sm">
                  <h3 className="font-semibold text-zinc-900">{guide.title}</h3>
                  <p className="mt-2 text-sm text-zinc-700">{guide.desc}</p>
                  <p className="mt-4 text-sm font-semibold">Read guide →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">When you are ready to buy</p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Shortlists built around use-cases</h2>
          </div>
          <Link href="/shortlists" className="text-sm font-semibold text-zinc-900 hover:underline">See all shortlists →</Link>
        </div>
        <p className="mt-3 max-w-3xl text-zinc-700">We prefer a few relevant options with clear trade-offs over endless product grids.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {COMMERCIAL_PATHS.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:shadow-sm">
              <h3 className="font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{item.desc}</p>
              <p className="mt-4 text-sm font-semibold">Compare →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 md:grid-cols-3 md:p-10">
          <div>
            <h2 className="font-semibold text-zinc-900">Research first</h2>
            <p className="mt-2 text-sm text-zinc-700">We explain the evidence, common standards and practical trade-offs before recommending products.</p>
          </div>
          <div>
            <h2 className="font-semibold text-zinc-900">No-spend steps matter</h2>
            <p className="mt-2 text-sm text-zinc-700">Many useful improvements cost nothing. We put those before shopping recommendations.</p>
          </div>
          <div>
            <h2 className="font-semibold text-zinc-900">Affiliate-funded, editorially separate</h2>
            <p className="mt-2 text-sm text-zinc-700">Some links earn commission. Product inclusion should still be based on fit, usefulness and evidence.</p>
          </div>
          <div className="md:col-span-3 flex flex-wrap gap-3 text-sm">
            <Link href="/editorial-policy" className="underline decoration-dotted">Editorial policy</Link>
            <Link href="/how-we-test" className="underline decoration-dotted">How we test</Link>
            <Link href="/affiliate-disclosure" className="underline decoration-dotted">Affiliate disclosure</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
