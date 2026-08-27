import Link from 'next/link'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Air Quality Topics — Wild & Well',
  description: 'Air quality for UK homes: identify whether particles, damp, humidity or smoke is the problem before choosing a purifier, dehumidifier or other solution.',
}

const guides = [
  { href: '/blog/air-purifier-bedroom-uk', title: 'Air purifier for a bedroom', text: 'Room size, useful-speed noise and filter cost for overnight use.' },
  { href: '/blog/air-purifier-pollen-uk', title: 'Air purifier for pollen', text: 'A practical route for seasonal airborne-particle problems.' },
  { href: '/blog/air-purifier-pet-dander-uk', title: 'Air purifier for pet dander', text: 'What filtration can help with and what still needs source control.' },
  { href: '/blog/air-purifier-smoke-odours-uk', title: 'Smoke and odours: HEPA vs carbon', text: 'Understand why particle and odour filtration are different jobs.' },
  { href: '/blog/condensation-windows-dehumidifier-uk', title: 'Condensation on windows', text: 'Work out whether recurring moisture is a ventilation issue, a dehumidifier job or both.' },
  { href: '/blog/dehumidifier-running-cost-uk', title: 'Dehumidifier running costs', text: 'Compare capacity, runtime and electricity use before choosing a unit.' },
]

export default function Page() {
  const edu = getTopicEdu('air-quality')
  const faqs = [
    { q: 'Do air purifiers help with allergies?', a: 'They can reduce airborne particles such as pollen and dust when sized correctly for the room and used consistently. Room size and filter replacement matter more than extra features.' },
    { q: 'Do air purifiers help with damp or mould?', a: ['Purifiers can help with airborne particles; they do not remove moisture.', 'If damp is the driver, focus on ventilation, the moisture source and humidity control first.'] },
    { q: 'How do I choose the right size?', a: 'Match the purifier’s stated coverage or CADR to your room. A small unit in a large room is a common reason for disappointing results.' },
    { q: 'HEPA vs “HEPA-style”: what’s the difference?', a: 'Prefer specific, checkable filtration specifications from reputable manufacturers. “HEPA-style” is not the same as a defined HEPA performance claim.' },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Diagnose first</p>
        <h1 className="mt-2 text-4xl font-bold">Air Quality (Allergies + Damp)</h1>
        <p className="mt-3 text-zinc-700">Particles and excess moisture are different problems. Work out which one you actually have before spending money on equipment.</p>
        <img src="/images/photography/air-quality.png" alt="" className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm" loading="lazy" decoding="async" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/air-quality-shortlist-uk">Choose the right air-quality route</Link>
          <Link className="btn-secondary" href="/blog/healthy-air-at-home">Healthy air guide</Link>
          <Link className="btn-secondary" href="/blog/damp-and-mould-uk-renters-playbook">Damp & mould</Link>
          <Link className="btn-secondary" href="/blog/air-purifier-filter-replacement-cost-uk">Purifier filter costs</Link>
          <Link className="btn-secondary" href="/blog/air-purifier-smoke-odours-uk">Smoke & odours</Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2"><a className="chip" href="#understand">Understand</a><a className="chip" href="#start">Start</a><a className="chip" href="#guides">Popular questions</a><a className="chip" href="#options">Choose</a><a className="chip" href="#faqs">FAQs</a></div>
      </header>

      <TopicEducationDeepDive edu={edu} />
      <div id="start" />
      <TopicAtAGlance items={[
        { title: 'If particles are the issue', bullets: ['Match purifier performance to room size.', 'Prioritise filtration, noise and replacement-filter availability.', 'Place the unit where airflow is not obstructed.'] },
        { title: 'If damp is the issue', bullets: ['Measure humidity rather than guessing.', 'Address leaks, ventilation and moisture sources first.', 'Consider a dehumidifier when excess humidity remains a recurring problem.'] },
        { title: 'Common mistakes', bullets: ['Buying a purifier to solve a moisture problem.', 'Buying an undersized unit.', 'Ignoring replacement filters, noise and running costs.'] },
      ]} />

      <section className="mt-14" id="guides">
        <div className="max-w-3xl">
          <h2 className="section-title">Popular UK air-quality questions</h2>
          <p className="section-subtitle">Focused guides for the problems people usually search before they are ready to compare equipment.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card transition-shadow hover:shadow-sm">
              <h3 className="font-semibold">{guide.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{guide.text}</p>
              <p className="mt-3 text-sm font-semibold">Read guide →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14" id="options">
        <div className="max-w-3xl">
          <h2 className="section-title">Choose by problem</h2>
          <p className="section-subtitle">The commercial shortlist separates the main jobs so visitors compare the right type of equipment.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link href="/air-quality-shortlist-uk#air-purifiers" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Allergies, particles & smoke</h3><p className="mt-2 text-sm text-zinc-600">Compare air purifiers by room suitability, filtration, noise and filter availability.</p><p className="mt-3 text-sm font-semibold">Compare purifiers →</p></Link>
          <Link href="/air-quality-shortlist-uk#dehumidifiers" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Damp & condensation</h3><p className="mt-2 text-sm text-zinc-600">Compare dehumidifiers when moisture control is the actual job.</p><p className="mt-3 text-sm font-semibold">Compare dehumidifiers →</p></Link>
          <Link href="/air-quality-shortlist-uk#replacement-filters" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Replacement filters</h3><p className="mt-2 text-sm text-zinc-600">Check ongoing ownership costs before committing to a purifier.</p><p className="mt-3 text-sm font-semibold">Check replacements →</p></Link>
          <Link href="/air-quality-shortlist-uk#fans-cooling" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Airflow & cooling</h3><p className="mt-2 text-sm text-zinc-600">Useful for comfort and airflow, but not a substitute for filtration or moisture control.</p><p className="mt-3 text-sm font-semibold">Compare airflow options →</p></Link>
        </div>
        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
          <h3 className="text-xl font-semibold">Not sure whether you need a purifier or dehumidifier?</h3>
          <p className="mt-2 text-sm text-zinc-700">Start with the comparison guide before buying equipment for mould or condensation.</p>
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/blog/air-purifier-vs-dehumidifier-mould-uk">Purifier vs dehumidifier</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk">Compare current options</Link></div>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
