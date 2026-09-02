import Link from 'next/link'
import InterestSignup from '@/components/InterestSignup'
import JourneyHero from '@/components/JourneyHero'

export const metadata = {
  title: 'Healthy Home UK — Air, Water & Lower-Tox Living',
  description: 'A practical Wild & Well hub for cleaner air, better water, lower-tox household swaps and everyday home resilience.',
}

const ROUTES = [
  {
    title: 'Efficient home energy',
    desc: 'Take a measured route through efficiency, monitoring, solar, batteries, heat pumps, EV charging and backup power.',
    href: '/healthy-home/home-energy',
    cta: 'Open the home-energy route',
  },
  {
    title: 'Lower-tox home swaps',
    desc: 'Start with high-use products: laundry, cookware, bathroom basics and simple fragrance reduction.',
    href: '/healthy-home/low-tox-shortlist',
    cta: 'See the low-tox route',
  },
  {
    title: 'Indoor air quality',
    desc: 'Work out whether the problem is particles, allergies, damp, humidity or ventilation before buying equipment.',
    href: '/air-quality-shortlist-uk',
    cta: 'Compare air-quality options',
  },
  {
    title: 'Water filtration',
    desc: 'Choose between portable, countertop, under-sink and gravity filtration based on the job you need it to do.',
    href: '/water-filtration-shortlist-uk',
    cta: 'Compare filtration routes',
  },
  {
    title: 'Practical resilience',
    desc: 'Build sensible household backup for short water, power, food and communication disruption.',
    href: '/topics/resilience',
    cta: 'Open resilience guides',
  },
]

export default function Page() {
  return (
    <main className="journey-page">
      <JourneyHero number="06" kicker="The rooms you live in" title="A healthier home, one useful change at a time." intro="Begin with the things you encounter every day: air, water, laundry, cleaning and comfort. Fix the practical problem first; replace products selectively." image="/images/photography/home.jpg" imageAlt="A calm, naturally lit home interior" actions={[{label:'Find your first change',href:'/shopping-list'},{label:'Explore all topics',href:'/topics'},{label:'Browse focused shortlists',href:'/shortlists'}]} anchors={[{label:'Choose an area',href:'#routes'},{label:'Where to start',href:'#start'}]} />

      <section id="routes" className="mt-10 grid gap-4 md:grid-cols-2">
        {ROUTES.map((route) => (
          <article key={route.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">{route.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{route.desc}</p>
            <Link href={route.href} className="mt-5 inline-flex font-semibold text-zinc-900 underline underline-offset-4">
              {route.cta} →
            </Link>
          </article>
        ))}
      </section>

      <section id="start" className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Where to start</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-700">
          <li>Fix obvious damp, ventilation, water or maintenance problems before shopping.</li>
          <li>Prioritise products and exposures you encounter every day.</li>
          <li>Make one change at a time so you can tell whether it was useful.</li>
          <li>Use the shortlists only when a product genuinely solves the problem.</li>
        </ol>
      </section>

      <div className="mt-12"><InterestSignup placement="healthy-home-hub" defaultInterest="healthy-home" title="Build a healthier home one decision at a time" description="Practical UK air, water, lower-tox, energy and resilience guidance without scare tactics or constant shopping prompts." /></div>

      <p className="mt-10 text-xs text-zinc-500">Some linked pages contain affiliate links. If you buy through them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
