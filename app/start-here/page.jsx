import Image from 'next/image'
import Link from 'next/link'
import InlineSignup from '@/components/InlineSignup'

export const metadata = {
  title: 'Start here — choose one useful change',
  description: 'Choose one area to improve across water, air, sleep, nutrition, movement, healthy home or practical resilience, then start with the simplest useful action.',
  alternates: { canonical: '/start-here' },
}

const PATHS = [
  {
    number: '01', title: 'Air', eyebrow: 'Stale air, allergies, condensation', href: '/topics/air-quality', image: '/images/photography/air-quality.png',
    copy: 'Work out whether the problem is particles, ventilation, damp or humidity before choosing equipment.',
    action: 'Start with ventilation and humidity', compare: '/air-quality-shortlist-uk',
  },
  {
    number: '02', title: 'Water', eyebrow: 'Taste, hardness, filtration, backup', href: '/topics/water', image: '/images/photography/water.jpg',
    copy: 'Start with the job you want water treatment to do, then match the format and maintenance burden to your home.',
    action: 'Check the job before the filter', compare: '/water-filtration-shortlist-uk',
  },
  {
    number: '03', title: 'Sleep', eyebrow: 'Timing, light, temperature, comfort', href: '/topics/sleep', image: '/images/photography/sleep.jpg',
    copy: 'Morning light, a consistent wake time and a calmer bedroom usually deserve attention before sleep products.',
    action: 'Fix the free signals first', compare: '/sleep-recovery-shortlist-uk',
  },
  {
    number: '04', title: 'Nutrition', eyebrow: 'Food quality, protein, fibre, convenience', href: '/topics/nutrition', image: '/images/photography/nutrition.jpg',
    copy: 'Build repeatable meals and useful staples first. Supplements should solve a specific gap rather than become the plan.',
    action: 'Build the plate before the stack', compare: '/nutrition/food-first-shortlist',
  },
  {
    number: '05', title: 'Movement', eyebrow: 'Walking, strength, mobility, consistency', href: '/topics/movement', image: '/images/photography/movement.jpg',
    copy: 'Make movement easier to repeat before buying equipment, trackers or specialised footwear.',
    action: 'Make consistency the first upgrade', compare: '/movement/movement-shortlist',
  },
  {
    number: '06', title: 'Healthy home', eyebrow: 'Cleaning, laundry, materials, exposure', href: '/healthy-home', image: '/images/photography/home.jpg',
    copy: 'Prioritise the products and rooms you use most rather than trying to replace everything at once.',
    action: 'Change the highest-contact things first', compare: '/healthy-home/low-tox-shortlist',
  },
  {
    number: '07', title: 'Practical resilience', eyebrow: 'Water, food, power, communication', href: '/topics/resilience', image: '/images/photography/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg',
    copy: 'Plan for ordinary short disruptions before buying specialist emergency equipment.',
    action: 'Use what you already own first', compare: '/blog/72-hour-household-emergency-kit-uk',
  },
]

export default function Page() {
  return (
    <main className="start-page">
      <section className="start-hero content-shell">
        <div className="start-hero__copy">
          <p className="eyebrow">Your clearest first step</p>
          <h1>Don’t overhaul your life.<br /><em>Change one useful thing.</em></h1>
          <p>Choose the area creating the most friction right now. We’ll help you understand it, try the sensible no-spend actions, and only compare products if there is still a job for one to do.</p>
          <div className="start-hero__principles" aria-label="How to use Wild and Well">
            <span><b>01</b> Understand</span><span><b>02</b> Act</span><span><b>03</b> Buy only if useful</span>
          </div>
        </div>
        <div className="start-hero__image"><Image src="/images/photography/home-hero.jpg" alt="A calm naturally lit home" fill priority sizes="(max-width: 900px) 100vw, 44vw" className="object-cover" /></div>
      </section>

      <section className="content-shell start-paths">
        <div className="start-paths__intro"><p className="eyebrow">Choose what feels off</p><h2>Seven places to begin.</h2><p>You do not need to work through them in order. Pick the one that would make everyday life noticeably better.</p></div>
        <div className="start-paths__list">
          {PATHS.map((path) => (
            <article className="start-path" key={path.href}>
              <Link href={path.href} className="start-path__image"><Image src={path.image} alt="" fill sizes="(max-width: 700px) 100vw, 30vw" className="object-cover" /></Link>
              <div className="start-path__copy">
                <div className="start-path__meta"><span>{path.number}</span><p className="eyebrow">{path.eyebrow}</p></div>
                <h3><Link href={path.href}>{path.title}</Link></h3>
                <p>{path.copy}</p>
                <div className="start-path__action"><strong>{path.action}</strong><div><Link href={path.href}>Understand →</Link><Link href={path.compare}>Compare only if needed →</Link></div></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="start-note"><div className="content-shell start-note__inner"><div><p className="eyebrow">A useful rule</p><h2>If the free step works, stop there.</h2></div><p>Wild &amp; Well is designed to reduce unnecessary buying, not create reasons to shop. A product recommendation is useful only when it solves a clearly defined problem better than the simpler alternatives.</p></div></section>

      <div className="content-shell start-signup"><InlineSignup placement="start_here" /></div>
    </main>
  )
}
