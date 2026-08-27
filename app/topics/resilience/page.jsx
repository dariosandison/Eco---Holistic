import Link from 'next/link'

export const metadata = {
  title: 'Practical Resilience — Wild & Well',
  description: 'Calm, practical UK guidance for short-term household disruption: water, power, food, communication, air quality and essential supplies.',
}

const GUIDES = [
  {
    title: 'UK 72-Hour Household Kit',
    description: 'A sensible, non-panic checklist for water, food, light, power, first aid, hygiene and communication.',
    href: '/blog/72-hour-household-emergency-kit-uk',
  },
  {
    title: '72-Hour Household Water Plan (UK)',
    description: 'How much drinking water to keep, how to store it, and where filtration does — and does not — help.',
    href: '/blog/72-hour-household-water-plan-uk',
  },
  {
    title: 'Power Cut Preparation (UK)',
    description: 'Lighting, phone power, refrigeration, warmth and when a larger battery system may actually be useful.',
    href: '/blog/power-cut-preparation-uk',
  },
  {
    title: 'Indoor Air During Smoke or Pollution',
    description: 'A practical plan for ventilation timing, cleaner rooms and HEPA filtration when outdoor air quality is temporarily poor.',
    href: '/blog/indoor-air-smoke-pollution-uk',
  },
  {
    title: 'Water Filters (UK): shortlist',
    description: 'Compare jug, under-sink, gravity and portable filtration routes with the main trade-offs explained.',
    href: '/best-water-filters-uk',
  },
  {
    title: 'Air Quality hub',
    description: 'HEPA basics, damp, dehumidification and practical indoor-air comparisons for UK homes.',
    href: '/topics/air-quality',
  },
]

const PILLARS = [
  ['Water', 'Stored drinking water first; filtration as a separate layer.'],
  ['Power', 'Light, communication and essential-device charging before expensive backup systems.'],
  ['Food', 'Normal shelf-stable foods you already eat, rotated rather than forgotten.'],
  ['Air', 'Source control, ventilation timing and filtration matched to the actual problem.'],
  ['Communication', 'Important numbers and information should not exist only on one phone.'],
  ['Household needs', 'Medication, infants, pets, mobility and other household-specific essentials.'],
]

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Wild &amp; Well</p>
        <h1 className="mt-2 text-4xl font-bold">Practical resilience</h1>
        <p className="mt-4 text-lg text-zinc-700">
          Healthy living is easier when normal systems are working. This section covers the boring-but-useful basics that help a household cope with short-term disruption — without fear, stockpiling or doomsday hype.
        </p>
        <p className="mt-3 text-sm text-zinc-600">
          UK-focused guidance for water, power, food, communication, air quality, hygiene and other everyday essentials.
        </p>
      </header>

      <section className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Start with the essentials</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-semibold">Free actions first</h3>
            <p className="mt-2 text-sm text-zinc-700">Know your utility providers, keep emergency contact details, understand where your stopcock and fuse box are, and make a simple household plan.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-semibold">Buy only where it solves a problem</h3>
            <p className="mt-2 text-sm text-zinc-700">Stored water, lighting, power banks, first-aid supplies and suitable filters can be useful. Expensive kit is not automatically better preparation.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Six practical pillars</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Guides &amp; shortlists</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">Start with a problem, understand the free steps, then compare equipment only where it genuinely adds resilience.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => (
            <Link key={guide.href} href={guide.href} className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:shadow-sm">
              <h3 className="text-lg font-semibold">{guide.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{guide.description}</p>
              <p className="mt-4 text-sm font-semibold">Read guide →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">Where this fits Wild &amp; Well</h2>
        <p className="mt-3 text-zinc-700">
          Practical resilience sits alongside our existing work on water, air quality, sleep, nutrition, movement and low-tox living. The aim is the same: explain the evidence and trade-offs clearly, then recommend sensible options only where they genuinely help.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/water">Water</Link>
          <Link className="btn-secondary" href="/topics/air-quality">Air quality</Link>
          <Link className="btn-secondary" href="/topics/sleep">Sleep &amp; recovery</Link>
          <Link className="btn-secondary" href="/topics">All topics</Link>
        </div>
      </section>
    </main>
  )
}
