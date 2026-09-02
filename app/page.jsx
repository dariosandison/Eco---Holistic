import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Wild & Well — clearer choices for healthier everyday living',
  description: 'Independent, UK-focused guidance for water, air, sleep, nutrition, movement, healthy homes and practical resilience. Learn first. Buy second.',
}

const JOURNEYS = [
  { number: '01', title: 'Water', href: '/topics/water', image: '/images/photography/water.jpg', line: 'Taste, filtration, hard-water comfort and household backup.' },
  { number: '02', title: 'Air', href: '/topics/air-quality', image: '/images/photography/air-quality.png', line: 'Ventilation, particles, damp, humidity and cleaner indoor air.' },
  { number: '03', title: 'Sleep', href: '/topics/sleep', image: '/images/photography/sleep.jpg', line: 'Light, timing, temperature and a room that helps you recover.' },
  { number: '04', title: 'Nutrition', href: '/topics/nutrition', image: '/images/photography/nutrition.jpg', line: 'Food-first habits, useful staples and fewer empty promises.' },
  { number: '05', title: 'Movement', href: '/topics/movement', image: '/images/photography/movement.jpg', line: 'Walking, simple strength and movement that fits real life.' },
  { number: '06', title: 'Healthy home', href: '/healthy-home', image: '/images/photography/home.jpg', line: 'Practical, lower-exposure changes in the rooms you use most.' },
  { number: '07', title: 'Practical resilience', href: '/topics/resilience', image: '/images/photography/cards/condensation-on-a-window-with-soft-morning-light-minimal-interior-background.jpg', line: 'Calm preparation for short disruptions to water, power and food.' },
]

const FIELD_NOTES = [
  { eyebrow: 'Water', title: 'Jug, countertop or under-sink?', href: '/blog/water-filter-jug-vs-under-sink-uk', image: '/images/photography/cards/water-hero.jpg', text: 'Choose the format around the job, the space you have and what replacement filters really cost.' },
  { eyebrow: 'Healthy home', title: 'Condensation is a clue, not a diagnosis', href: '/blog/condensation-windows-dehumidifier-uk', image: '/images/photography/cards/condensation-on-a-window-with-soft-morning-light-minimal-interior-background.jpg', text: 'Work out whether ventilation, moisture or both are driving the problem before buying equipment.' },
  { eyebrow: 'Sleep', title: 'A calmer evening starts in the morning', href: '/blog/morning-light-sleep-10-minute-plan', image: '/images/photography/cards/calm-evening-routine-scene-with-tea-and-book-on-bed-neutral-tones.jpg', text: 'A practical light-and-timing plan that costs nothing and takes ten minutes.' },
]

const SHORTLISTS = [
  ['Water filtration', 'Portable, countertop, under-sink and gravity routes.', '/water-filtration-shortlist-uk'],
  ['Indoor air', 'Purifiers and dehumidifiers matched to the actual problem.', '/air-quality-shortlist-uk'],
  ['Sleep & recovery', 'Comfort and recovery options after the no-spend basics.', '/sleep-recovery-shortlist-uk'],
  ['Food-first nutrition', 'Useful food and pantry options before supplement stacks.', '/nutrition/food-first-shortlist'],
]

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__image"><Image src="/images/photography/home-hero.jpg" alt="A calm, naturally lit home interior" fill priority sizes="(max-width: 900px) 100vw, 54vw" className="object-cover" /></div>
        <div className="home-hero__content">
          <p className="eyebrow">Independent guidance for real life</p>
          <h1>Feel better at home.<br /><em>Choose with clarity.</em></h1>
          <p className="home-hero__dek">Practical UK guidance for the water you drink, the air you breathe and the everyday habits that shape how you feel—without hype or unnecessary shopping.</p>
          <div className="home-hero__actions"><Link href="/start-here" className="btn-primary">Find your starting point</Link><Link href="/topics" className="text-link">Explore all seven journeys <span aria-hidden="true">↗</span></Link></div>
          <div className="home-hero__proof" aria-label="Our approach"><span>Evidence-aware</span><span>No-spend steps first</span><span>UK focused</span></div>
        </div>
      </section>

      <section className="editorial-intro content-shell">
        <p className="eyebrow">Seven paths. One clearer way forward.</p>
        <div className="editorial-intro__heading"><h2>Start with what you want to change.</h2><p>Each journey helps you understand the problem, try the sensible free steps, and decide whether buying something would genuinely help.</p></div>
        <div className="journey-grid">
          {JOURNEYS.map((item, index) => (
            <Link href={item.href} className={`journey-card journey-card--${index + 1}`} key={item.href}>
              <div className="journey-card__image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" className="object-cover" /></div>
              <div className="journey-card__copy"><span>{item.number}</span><h3>{item.title}</h3><p>{item.line}</p><b aria-hidden="true">Explore →</b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="field-notes"><div className="content-shell">
        <div className="section-heading-row"><div><p className="eyebrow">Worth knowing now</p><h2>Useful thinking for everyday decisions.</h2></div><Link href="/blog" className="text-link">All insights <span aria-hidden="true">→</span></Link></div>
        <div className="story-grid">{FIELD_NOTES.map((story, index) => (
          <Link href={story.href} className={index === 0 ? 'story story--lead' : 'story'} key={story.href}>
            <div className="story__image"><Image src={story.image} alt="" fill sizes={index === 0 ? '(max-width: 800px) 100vw, 55vw' : '(max-width: 800px) 100vw, 28vw'} className="object-cover" /></div>
            <div className="story__copy"><p className="eyebrow">{story.eyebrow}</p><h3>{story.title}</h3><p>{story.text}</p><span>Read the guide →</span></div>
          </Link>
        ))}</div>
      </div></section>

      <section className="decision-section content-shell">
        <div className="decision-section__intro"><p className="eyebrow">When a product has a job to do</p><h2>Shortlists built around decisions, not endless choice.</h2><p>We narrow the field by use case, ownership cost and meaningful trade-offs. Where we have not independently tested a product, we say so.</p><Link href="/how-we-test" className="text-link">How we evaluate products →</Link></div>
        <div className="shortlist-list">{SHORTLISTS.map(([title, copy, href], i) => <Link href={href} key={href} className="shortlist-row"><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><b aria-hidden="true">↗</b></Link>)}<Link href="/shortlists" className="shortlist-all">See every shortlist →</Link></div>
      </section>

      <section className="resilience-feature content-shell">
        <div className="resilience-feature__image"><Image src="/images/photography/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg" alt="Water stored simply in a home kitchen" fill sizes="(max-width: 800px) 100vw, 48vw" className="object-cover" /></div>
        <div className="resilience-feature__copy"><p className="eyebrow">Practical resilience</p><h2>Prepare calmly. Buy selectively.</h2><p>Short disruptions are household problems before they are survival problems. Begin with a simple plan for water, food, light, warmth and communication.</p><ol><li><span>01</span>Use what you already have</li><li><span>02</span>Fill the genuine gaps</li><li><span>03</span>Keep it easy to maintain</li></ol><Link href="/topics/resilience" className="btn-primary">Build a sensible plan</Link></div>
      </section>

      <section className="trust-strip"><div className="content-shell trust-strip__inner">
        <p className="eyebrow">The Wild &amp; Well standard</p><h2>Learn first.<br />Buy second.</h2>
        <div className="trust-strip__points"><div><strong>Useful before impressive</strong><p>We prioritise practical changes over wellness theatre.</p></div><div><strong>Clear about evidence</strong><p>Claims, limitations and uncertainty stay visible.</p></div><div><strong>Commercially independent</strong><p>Affiliate links fund the site; they do not buy inclusion.</p></div></div>
        <div className="trust-strip__links"><Link href="/editorial-policy">Editorial policy</Link><Link href="/corrections">Corrections</Link><Link href="/affiliate-disclosure">Affiliate disclosure</Link></div>
      </div></section>
    </main>
  )
}
