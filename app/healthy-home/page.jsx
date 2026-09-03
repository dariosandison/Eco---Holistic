import Link from 'next/link'
import InterestSignup from '@/components/InterestSignup'
import JourneyHero from '@/components/JourneyHero'

export const metadata = {
  title: 'Healthy Home UK — Air, Water & Lower-Tox Living',
  description: 'A practical UK healthy-home guide to air, water, cleaning, energy and household resilience. Fix the problem first and replace products selectively.',
}

const ROUTES = [
  { number: '01', title: 'Indoor air', problem: 'Particles, pollen, smoke, damp or humidity?', desc: 'Diagnose the room first. Purifiers, dehumidifiers and ventilation solve different problems.', href: '/topics/air-quality', cta: 'Understand indoor air' },
  { number: '02', title: 'Water', problem: 'Taste, filtration, hard water or backup?', desc: 'Separate drinking-water filtration from limescale, shower comfort and short-term household resilience.', href: '/topics/water', cta: 'Understand your water' },
  { number: '03', title: 'Lower-tox essentials', problem: 'Which everyday exposures are worth changing?', desc: 'Prioritise high-use laundry, cleaning and kitchen products rather than replacing everything at once.', href: '/healthy-home/low-tox-shortlist', cta: 'See the practical shortlist' },
  { number: '04', title: 'Home energy', problem: 'Comfort, bills, efficiency or backup power?', desc: 'Measure household demand first, then consider insulation, monitoring, solar, batteries or heat-pump routes.', href: '/healthy-home/home-energy', cta: 'Open the energy route' },
  { number: '05', title: 'Practical resilience', problem: 'What happens if water or power stops briefly?', desc: 'Cover drinking water, food, light, warmth and communication without turning preparedness into shopping.', href: '/topics/resilience', cta: 'Build a calm household plan' },
]

export default function Page() {
  return (
    <main className="journey-page healthy-home-hub">
      <JourneyHero number="06" kicker="The rooms you live in" title="A healthier home starts with better decisions, not more products." intro="Air, water, cleaning, energy and resilience overlap. Start with the problem you notice most, fix the obvious causes and only then decide whether equipment or a replacement product has a useful job." image="/images/photography/home.jpg" imageAlt="A calm, naturally lit home interior" actions={[{label:'Choose a home problem',href:'#routes'},{label:'Read practical guides',href:'/blog'},{label:'Compare only when useful',href:'/shortlists'}]} anchors={[{label:'Choose',href:'#routes'},{label:'Principles',href:'#start'},{label:'Updates',href:'#updates'}]} />

      <section id="routes" className="healthy-home-routes mt-14">
        <div className="healthy-home-routes__intro">
          <p>Five useful starting points</p>
          <div><h2>Start with the room or problem that keeps recurring.</h2><span>You do not need to optimise the whole house. One well-chosen change is more useful than a cupboard full of replacements.</span></div>
        </div>
        <div className="healthy-home-routes__list">
          {ROUTES.map((route) => (
            <Link key={route.title} href={route.href} className="healthy-home-route">
              <span>{route.number}</span>
              <div><p>{route.problem}</p><h3>{route.title}</h3><small>{route.desc}</small></div>
              <b>{route.cta} →</b>
            </Link>
          ))}
        </div>
      </section>

      <section id="start" className="healthy-home-principles mt-16">
        <div><p>The Wild & Well home rule</p><h2>Fix causes before buying fixes.</h2></div>
        <ol>
          <li><span>01</span><div><strong>Deal with the obvious problem.</strong><p>Leaks, blocked vents, condensation, poor maintenance and unsuitable routines usually deserve attention before new equipment.</p></div></li>
          <li><span>02</span><div><strong>Prioritise what you encounter every day.</strong><p>Air, drinking water, laundry, cleaning and sleep spaces usually matter more than occasional products.</p></div></li>
          <li><span>03</span><div><strong>Change one thing at a time.</strong><p>That makes it easier to judge whether the intervention was actually useful.</p></div></li>
          <li><span>04</span><div><strong>Compare ownership, not just purchase price.</strong><p>Filters, electricity, replacement parts and maintenance can matter more than the initial cost.</p></div></li>
        </ol>
      </section>

      <section id="updates" className="healthy-home-updates mt-16"><InterestSignup placement="healthy-home-hub" defaultInterest="healthy-home" title="Useful healthy-home guidance, without the constant shopping prompts" description="Practical UK air, water, lower-tox, energy and resilience guidance built around problems, trade-offs and sensible next steps." /></section>

      <p className="mt-10 text-xs text-zinc-500">Some linked pages contain affiliate links. If you buy through them, Wild & Well may earn a commission at no extra cost to you. Affiliate relationships do not determine inclusion.</p>
    </main>
  )
}
