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
    <main className="journey-page">
      <JourneyHero number="07" kicker="Calm household preparation" title="Ready for disruption. Free from fear." intro="Prepare for ordinary interruptions first: a power cut, a temporary water problem or a few inconvenient days. The goal is useful redundancy—not stockpiling." image="/images/photography/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg" imageAlt="A simple water carafe and cups in a home kitchen" actions={[{label:'Build a 72-hour plan',href:'/blog/72-hour-household-emergency-kit-uk'},{label:'Plan household water',href:'/blog/72-hour-household-water-plan-uk'},{label:'Prepare for a power cut',href:'/blog/power-cut-preparation-uk'}]} anchors={[{label:'Start free',href:'#start'},{label:'Six pillars',href:'#pillars'},{label:'Solve a gap',href:'#routes'}]} />

      <section className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 md:p-8"><h2 className="text-2xl font-semibold">Start without spending</h2><div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-zinc-200 bg-white p-5"><h3 className="font-semibold">Know the house</h3><p className="mt-2 text-sm text-zinc-700">Know your utility providers, stopcock and fuse box. Keep key contacts somewhere accessible even if a phone battery is flat.</p></div><div className="rounded-2xl border border-zinc-200 bg-white p-5"><h3 className="font-semibold">Know the household</h3><p className="mt-2 text-sm text-zinc-700">Plan around the people who actually live there: medication, children, pets, mobility, food requirements and essential devices.</p></div></div></section>

      <section className="mt-12"><h2 className="text-2xl font-semibold">Six practical pillars</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{PILLARS.map(([title, copy]) => <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm text-zinc-700">{copy}</p></div>)}</div></section>

      <section className="mt-14"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Preparedness funnel</p><h2 className="mt-2 text-2xl font-semibold">Solve one resilience gap at a time</h2><p className="mt-2 text-zinc-700">Each route starts with the free plan, then moves into an existing Wild & Well shortlist only where buying something is useful.</p></div><div className="mt-6 grid gap-5 md:grid-cols-2">{ROUTES.map((route) => <article key={route.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="text-lg font-semibold">{route.title}</h3><p className="mt-2 text-sm text-zinc-700">{route.description}</p><div className="mt-4 flex flex-wrap gap-2"><Link className="btn-secondary" href={route.learn}>Plan first</Link><Link className="btn-primary" href={route.buy}>Useful options</Link></div></article>)}</div></section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><div className="max-w-3xl"><h2 className="text-xl font-semibold">A sensible first target</h2><p className="mt-2 text-sm text-zinc-700">Aim to make the household comfortable for roughly 72 hours without relying on last-minute shopping. Start with water, light, phone power, normal food, basic hygiene and household-specific essentials. Add expensive equipment only when you can clearly explain the problem it solves.</p><div className="mt-4"><Link className="btn-primary" href="/blog/72-hour-household-emergency-kit-uk">Open the 72-hour guide</Link></div></div></section>

      <section className="mt-12 max-w-3xl"><h2 className="text-2xl font-semibold">Where this fits Wild & Well</h2><p className="mt-3 text-zinc-700">Practical resilience connects naturally with water, air quality and food-first nutrition. It gives those existing guides another useful search and buying pathway without turning Wild & Well into a fear-driven preparedness site.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-secondary" href="/topics/water">Water</Link><Link className="btn-secondary" href="/topics/air-quality">Air quality</Link><Link className="btn-secondary" href="/nutrition">Nutrition</Link><Link className="btn-secondary" href="/topics">All topics</Link></div></section>
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
