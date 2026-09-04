import Link from 'next/link'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { getTopicEdu } from '@/lib/topicEdu'
import JourneyHero from '@/components/JourneyHero'

export const metadata = {
  title: 'Water filtration and hard-water guidance',
  description: 'Water filtration for UK homes: understand the main formats, replacement costs and sensible buying criteria before comparing products.',
  alternates: { canonical: '/topics/water' },
}

const guides = [
  { href: '/blog/water-filter-jug-vs-under-sink-uk', title: 'Jug vs under-sink filter', text: 'Compare convenience, installation, capacity and ongoing filter costs.' },
  { href: '/blog/under-sink-water-filter-worth-it-uk', title: 'Are under-sink filters worth it?', text: 'A practical decision guide before committing to plumbing changes.' },
  { href: '/blog/reverse-osmosis-water-filter-worth-it-uk', title: 'Is reverse osmosis worth it?', text: 'Understand RO capability, wastewater, maintenance and when simpler filtration may be enough.' },
  { href: '/blog/gravity-water-filter-worth-it-uk', title: 'Are gravity filters worth it?', text: 'Compare non-plumbed capacity, replacement filters and resilience use.' },
  { href: '/blog/water-filter-chlorine-taste-uk', title: 'Filtering chlorine taste', text: 'Start with the actual taste problem and choose filtration accordingly.' },
  { href: '/blog/water-filter-vs-bottled-water-uk', title: 'Filter vs bottled water', text: 'Compare recurring cost, convenience and waste rather than headline price.' },
]

export default function Page() {
  const edu = getTopicEdu('water')
  const faqs = [
    { q: 'Do I need a water filter in the UK?', a: ['It depends on your goal. Many people filter for taste or personal preference.', 'If you are concerned about a specific contaminant, check your local water company report and choose a system with relevant, verifiable testing or certification claims.'] },
    { q: 'Jug vs under-sink vs gravity: which is best?', a: ['A jug is the simplest entry point.', 'Under-sink systems suit people who want convenient filtered water from a tap and can install one.', 'Gravity systems can provide useful capacity without plumbing.'] },
    { q: 'What usually costs more over time: the unit or filters?', a: 'Replacement filters can be the main long-term cost. Compare replacement schedules, prices and availability before buying the unit.' },
    { q: 'What should I look for in testing claims?', a: 'Prefer specific, checkable claims about what was tested, to what standard and by whom over vague percentage-removal marketing.' },
  ]

  return (
    <main className="journey-page">
      <JourneyHero number="01" kicker="Understand before buying" title="Better water starts with the right question." intro="Begin with the job: taste, convenience, a specific concern or household backup. Then compare formats, credible testing and the real cost of replacement filters." image="/images/photography/water.jpg" imageAlt="Clear water being poured into a glass" actions={[{label:'Choose a filtration route',href:'/water-filtration-shortlist-uk'},{label:'Calculate running cost',href:'/tools/water-filter-running-cost-calculator'},{label:'Read the full guide',href:'/best-water-filters-uk'}]} anchors={[{label:'Understand',href:'#understand'},{label:'First steps',href:'#start'},{label:'Questions',href:'#guides'},{label:'Choose',href:'#options'},{label:'FAQs',href:'#faqs'}]} />

      <TopicEducationDeepDive edu={edu} />
      <div id="start" />
      <TopicAtAGlance items={[
        { title: 'Start here', bullets: ['Define the problem: taste, convenience, portability or a specific concern.', 'Choose a format: portable, jug/countertop, under-sink or gravity.', 'Compare replacement filters before comparing purchase prices.'] },
        { title: 'Which type suits you?', bullets: ['Portable: commuting, travel and days out.', 'Jug/countertop: simple entry point with no installation.', 'Under-sink: higher convenience if installation suits your home.', 'Gravity: useful capacity without plumbing.'] },
        { title: 'Common mistakes', bullets: ['Buying a system with replacements you will not keep up with.', 'Choosing on vague marketing claims instead of checkable details.', 'Paying for capacity or complexity you do not need.'] },
      ]} />

      <section className="mt-14" id="guides">
        <div className="max-w-3xl">
          <h2 className="section-title">Popular UK water-filter questions</h2>
          <p className="section-subtitle">These focused guides answer the questions people usually have before they are ready to compare products.</p>
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
        <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><h3 className="text-lg font-semibold">Compare ownership cost before choosing</h3><p className="mt-2 text-sm text-zinc-700">Replacement cartridges can change the economics of a filter completely. Put the purchase price and replacement schedule into the free calculator before comparing systems.</p><div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/tools/water-filter-running-cost-calculator">Calculate filter running cost</Link><Link className="btn-secondary" href="/blog/filter-replacement-costs-uk">Read replacement-cost guide</Link></div></div>
      </section>

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
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/tools/72-hour-water-calculator">Calculate your water quantity</Link><Link className="btn-secondary" href="/blog/72-hour-household-water-plan-uk">Read the water plan</Link><Link className="btn-secondary" href="/topics/resilience">Practical resilience</Link></div>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
