import Link from 'next/link'
import JourneyHero from '@/components/JourneyHero'

export const metadata = {
  title: 'Practical Resilience — Wild & Well',
  description: 'Calm UK guidance for short household disruptions, with practical routes for water, food, power, communication and indoor air.',
}

const ROUTES = [
  { title: 'Water first', description: 'Work out stored drinking-water needs first. Add portable, gravity or home filtration only for the job it actually solves.', learn: '/blog/72-hour-household-water-plan-uk', buy: '/water-filtration-shortlist-uk' },
  { title: 'Light & phone power', description: 'Start with torches, charged power banks and a simple charging plan before considering larger backup systems.', learn: '/blog/power-cut-preparation-uk', buy: '/blog/72-hour-household-emergency-kit-uk' },
  { title: 'Normal shelf-stable food', description: 'Build around food your household already eats and rotate it into normal meals rather than creating a forgotten emergency cupboard.', learn: '/nutrition', buy: '/nutrition/food-first-shortlist' },
  { title: 'Indoor air', description: 'For smoke or pollution events, understand ventilation timing and cleaner-room basics before buying filtration.', learn: '/blog/indoor-air-smoke-pollution-uk', buy: '/air-quality-shortlist-uk' },
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
    <main className="journey-page resilience-hub">
      <JourneyHero number="07" kicker="Calm household preparation" title="Ready for disruption. Free from fear." intro="Prepare for ordinary interruptions first: a power cut, a temporary water problem or a few inconvenient days. The goal is useful redundancy—not stockpiling." image="/images/photography/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg" imageAlt="A simple water carafe and cups in a home kitchen" actions={[{label:'Build a 72-hour plan',href:'/blog/72-hour-household-emergency-kit-uk'},{label:'Plan household water',href:'/blog/72-hour-household-water-plan-uk'},{label:'Prepare for a power cut',href:'/blog/power-cut-preparation-uk'}]} anchors={[{label:'Start free',href:'#start'},{label:'Six pillars',href:'#pillars'},{label:'Solve a gap',href:'#routes'}]} />

      <section id="start" className="resilience-start mt-12">
        <div><p>01 / Start free</p><h2>Know the household before you build the kit.</h2></div>
        <div className="resilience-start__steps">
          <article><span>01</span><div><h3>Know the house</h3><p>Know your utility providers, stopcock and fuse box. Keep key contacts somewhere accessible even if a phone battery is flat.</p></div></article>
          <article><span>02</span><div><h3>Know the people</h3><p>Plan around medication, children, pets, mobility, food requirements and essential devices—not an imaginary generic household.</p></div></article>
          <article><span>03</span><div><h3>Use what you already own</h3><p>Check torches, charging cables, blankets, normal cupboard food and containers before creating a shopping list.</p></div></article>
        </div>
      </section>

      <section id="pillars" className="resilience-pillars mt-16">
        <div className="resilience-pillars__heading"><p>02 / The framework</p><div><h2>Six practical pillars.</h2><span>Enough structure to spot a real gap, without turning preparation into a hobby or a fear-driven shopping exercise.</span></div></div>
        <div className="resilience-pillars__list">{PILLARS.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section id="routes" className="resilience-routes mt-16">
        <div className="resilience-routes__heading"><p>03 / Solve a gap</p><div><h2>Plan first. Add equipment second.</h2><span>Each route starts with the free plan and only moves into buying guidance where an item has a clear job to do.</span></div></div>
        <div className="resilience-routes__list">{ROUTES.map((route, index) => <article key={route.title}><span>0{index + 1}</span><div><h3>{route.title}</h3><p>{route.description}</p></div><div className="resilience-routes__actions"><Link href={route.learn}>Plan first →</Link><Link href={route.buy}>Useful options ↗</Link></div></article>)}</div>
      </section>

      <section className="resilience-target mt-16"><div><p>04 / A sensible target</p><h2>Comfortable for roughly 72 hours.</h2></div><div><p>Start with water, light, phone power, normal food, basic hygiene and household-specific essentials. That covers the ordinary disruption case without encouraging stockpiling.</p><p>Expensive backup equipment belongs later, when you can clearly name the failure it protects against and why simpler redundancy is not enough.</p><Link href="/blog/72-hour-household-emergency-kit-uk">Open the 72-hour guide →</Link></div></section>

      <section className="resilience-context mt-14"><p>Part of the wider system</p><div><h2>Resilience should make the rest of Wild & Well more useful.</h2><p>It connects naturally with water, air quality, nutrition and home energy. The aim is practical household continuity—not a separate fear-driven preparedness identity.</p><nav><Link href="/topics/water">Water →</Link><Link href="/topics/air-quality">Air quality →</Link><Link href="/topics/nutrition">Nutrition →</Link><Link href="/healthy-home/home-energy">Home energy →</Link></nav></div></section>

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
