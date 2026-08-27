import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Water Topics — Wild & Well',
  description: 'Water filtration for UK homes: understand the main formats, replacement costs and sensible buying criteria before comparing products.',
}

export default function Page() {
  const edu = getTopicEdu('water')
  const faqs = [
    { q: 'Do I need a water filter in the UK?', a: ['It depends on your goal. Many people filter for taste or personal preference.', 'If you are concerned about a specific contaminant, check your local water company report and choose a system with relevant, verifiable testing or certification claims.'] },
    { q: 'Jug vs under-sink vs gravity: which is best?', a: ['A jug is the simplest entry point.', 'Under-sink systems suit people who want convenient filtered water from a tap and can install one.', 'Gravity systems can provide useful capacity without plumbing.'] },
    { q: 'What usually costs more over time: the unit or filters?', a: 'Replacement filters can be the main long-term cost. Compare replacement schedules, prices and availability before buying the unit.' },
    { q: 'What should I look for in testing claims?', a: 'Prefer specific, checkable claims about what was tested, to what standard and by whom over vague percentage-removal marketing.' },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Understand before buying</p>
        <h1 className="mt-2 text-4xl font-bold">Water (Filters + Hydration)</h1>
        <p className="mt-3 text-zinc-700">Start with the job you need the filter to do. Then choose the format and compare replacement cost, availability and credible testing claims.</p>
        <img src="/images/photography/water.jpg" alt="" className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm" loading="lazy" decoding="async" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/water-filtration-shortlist-uk">Choose a filtration route</Link>
          <Link className="btn-secondary" href="/best-water-filters-uk">Full buying guide</Link>
          <Link className="btn-secondary" href="/blog/hard-water-uk-myths-and-comfort">Hard water</Link>
          <Link className="btn-secondary" href="/blog/filter-replacement-costs-uk">Replacement costs</Link>
          <Link className="btn-secondary" href="/blog/72-hour-water-plan-uk">72-hour water plan</Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2"><a className="chip" href="#understand">Understand</a><a className="chip" href="#start">Start</a><a className="chip" href="#options">Choose</a><a className="chip" href="#faqs">FAQs</a></div>
      </header>

      <TopicEducationDeepDive edu={edu} />
      <div id="start" />
      <TopicAtAGlance items={[
        { title: 'Start here', bullets: ['Define the problem: taste, convenience, portability or a specific concern.', 'Choose a format: portable, jug/countertop, under-sink or gravity.', 'Compare replacement filters before comparing purchase prices.'] },
        { title: 'Which type suits you?', bullets: ['Portable: commuting, travel and days out.', 'Jug/countertop: simple entry point with no installation.', 'Under-sink: higher convenience if installation suits your home.', 'Gravity: useful capacity without plumbing.'] },
        { title: 'Common mistakes', bullets: ['Buying a system with replacements you will not keep up with.', 'Choosing on vague marketing claims instead of checkable details.', 'Paying for capacity or complexity you do not need.'] },
      ]} />

      <section className="mt-14" id="options">
        <div className="max-w-3xl">
          <h2 className="section-title">Choose the route, then the product</h2>
          <p className="section-subtitle">The upgraded shortlist groups our partner options by actual use case, so you can compare like with like.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link href="/water-filtration-shortlist-uk#filter-bottles-replacements" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Portable / travel</h3><p className="mt-2 text-sm text-zinc-600">Filter bottles and replacement filters for portable use.</p><p className="mt-3 text-sm font-semibold">Compare portable options →</p></Link>
          <Link href="/water-filtration-shortlist-uk#jugs-dispensers" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Jugs & dispensers</h3><p className="mt-2 text-sm text-zinc-600">Simple countertop filtration with no installation.</p><p className="mt-3 text-sm font-semibold">Compare countertop options →</p></Link>
          <Link href="/water-filtration-shortlist-uk#under-sink-ro" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Under-sink / RO</h3><p className="mt-2 text-sm text-zinc-600">Higher-capacity systems where installation and running cost make sense.</p><p className="mt-3 text-sm font-semibold">Compare under-sink options →</p></Link>
          <Link href="/water-filtration-shortlist-uk#gravity-shower-filtration" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Gravity / no plumbing</h3><p className="mt-2 text-sm text-zinc-600">Useful where you want filtration without plumbing changes.</p><p className="mt-3 text-sm font-semibold">Compare gravity options →</p></Link>
        </div>
        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
          <h3 className="text-xl font-semibold">Preparing for a short water interruption?</h3>
          <p className="mt-2 text-sm text-zinc-700">Everyday filtration and emergency water planning are different jobs. Stored drinking water comes first for short disruptions.</p>
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/blog/72-hour-water-plan-uk">Build a 72-hour water plan</Link><Link className="btn-secondary" href="/topics/resilience">Practical resilience</Link></div>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
