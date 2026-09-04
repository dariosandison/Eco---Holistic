import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Wild & Well — practical healthy-living decisions, without the noise',
  description: 'Independent UK-focused guidance for water, air, sleep, nutrition, movement, healthy homes and practical resilience. Understand first. Buy only when it helps.',
  alternates: { canonical: '/' },
}

const JOURNEYS = [
  { number: '01', title: 'Water', href: '/topics/water', image: '/images/photography/water.jpg', line: 'Taste, filtration, hard-water comfort and sensible household backup.' },
  { number: '02', title: 'Air', href: '/topics/air-quality', image: '/images/photography/air-quality.png', line: 'Ventilation, particles, damp and humidity—without buying the wrong fix.' },
  { number: '03', title: 'Sleep', href: '/topics/sleep', image: '/images/photography/sleep.jpg', line: 'Light, timing, temperature and a bedroom that supports recovery.' },
  { number: '04', title: 'Nutrition', href: '/topics/nutrition', image: '/images/photography/nutrition.jpg', line: 'Food-first habits, useful staples and fewer expensive promises.' },
  { number: '05', title: 'Movement', href: '/topics/movement', image: '/images/photography/movement.jpg', line: 'Walking, simple strength and movement that survives real life.' },
  { number: '06', title: 'Healthy home', href: '/healthy-home', image: '/images/photography/home.jpg', line: 'Practical changes for cleaner, calmer rooms without low-tox theatre.' },
  { number: '07', title: 'Practical resilience', href: '/topics/resilience', image: '/images/photography/cards/condensation-on-a-window-with-soft-morning-light-minimal-interior-background.jpg', line: 'Calm preparation for short disruptions to water, power, food and warmth.' },
]

const FIELD_NOTES = [
  { eyebrow: 'Water', title: 'Jug, countertop or under-sink?', href: '/blog/water-filter-jug-vs-under-sink-uk', image: '/images/photography/cards/water-hero.jpg', text: 'Start with the job, your space and replacement costs—not the brand name on the box.' },
  { eyebrow: 'Healthy home', title: 'Condensation is a clue, not a diagnosis', href: '/blog/condensation-windows-dehumidifier-uk', image: '/images/photography/cards/condensation-on-a-window-with-soft-morning-light-minimal-interior-background.jpg', text: 'Work out whether ventilation, moisture or both are driving the problem before buying equipment.' },
  { eyebrow: 'Sleep', title: 'A calmer evening starts in the morning', href: '/blog/morning-light-sleep-10-minute-plan', image: '/images/photography/cards/calm-evening-routine-scene-with-tea-and-book-on-bed-neutral-tones.jpg', text: 'A practical light-and-timing plan that costs nothing and takes ten minutes.' },
]

const SHORTLISTS = [
  ['Water filtration', 'Portable, countertop, under-sink and gravity routes matched to the job.', '/water-filtration-shortlist-uk'],
  ['Indoor air', 'Purifiers and dehumidifiers separated by the problem they actually solve.', '/air-quality-shortlist-uk'],
  ['Sleep & recovery', 'Comfort and recovery options only after the no-spend basics are covered.', '/sleep-recovery-shortlist-uk'],
  ['Food-first nutrition', 'Useful pantry and food choices before supplement stacks.', '/nutrition/food-first-shortlist'],
]

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__image">
          <Image src="/images/photography/home-hero.jpg" alt="A calm, naturally lit home interior" fill priority sizes="(max-width: 900px) 100vw, 54vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[rgba(14,42,35,.78)] via-[rgba(14,42,35,.22)] to-transparent px-6 pb-6 pt-24 text-white md:px-8 md:pb-8">
            <p className="max-w-md font-serif text-xl leading-tight md:text-2xl">A healthier life is rarely one big purchase. It is a series of better decisions.</p>
          </div>
        </div>
        <div className="home-hero__content">
          <p className="eyebrow">Independent UK guidance for everyday health</p>
          <h1>Live well.<br /><em>Choose better.</em></h1>
          <p className="home-hero__dek">Cut through wellness noise with practical guidance for the water you drink, the air you breathe, the home you live in and the habits that matter most.</p>
          <div className="home-hero__actions"><Link href="/start-here" className="btn-primary">Find your starting point</Link><Link href="/topics" className="text-link">Explore the seven journeys <span aria-hidden="true">↗</span></Link></div>
          <div className="home-hero__proof" aria-label="Our approach"><span>Evidence-aware</span><span>No-spend steps first</span><span>UK focused</span></div>
          <div className="mt-8 grid grid-cols-3 border-y border-[rgba(18,59,50,.16)] py-4 text-[.68rem] font-bold uppercase tracking-[.09em] text-[#5e6861]">
            <span>Understand</span><span className="text-center">Act</span><span className="text-right">Buy only if useful</span>
          </div>
        </div>
      </section>

      <section className="content-shell py-7 md:py-9" aria-label="Wild & Well promise">
        <div className="grid gap-4 border-b border-[rgba(18,59,50,.14)] pb-7 md:grid-cols-[1.15fr_.85fr] md:items-end md:gap-12 md:pb-9">
          <p className="max-w-4xl font-serif text-[clamp(1.8rem,3.2vw,3.4rem)] leading-[1.05] tracking-[-.035em] text-[var(--brand-dark)]">Practical guidance for people who want to feel better, live more deliberately and avoid buying things they do not need.</p>
          <div className="md:justify-self-end"><p className="max-w-md text-sm leading-7 text-[#667069]">We separate useful actions from product decisions, make trade-offs visible and keep affiliate relationships secondary to the advice.</p><Link href="/about" className="text-link mt-4">How Wild &amp; Well works →</Link></div>
        </div>
      </section>

      <section className="editorial-intro content-shell">
        <p className="eyebrow">Seven paths. One clearer way forward.</p>
        <div className="editorial-intro__heading"><h2>Start with what you want to change.</h2><p>Each journey begins with understanding, then the sensible free steps. Products appear only when they have a clear job to do.</p></div>
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
        <div className="section-heading-row"><div><p className="eyebrow">The useful edit</p><h2>Three decisions worth getting right.</h2></div><Link href="/blog" className="text-link">Browse all guides <span aria-hidden="true">→</span></Link></div>
        <div className="story-grid">{FIELD_NOTES.map((story, index) => (
          <Link href={story.href} className={index === 0 ? 'story story--lead' : 'story'} key={story.href}>
            <div className="story__image"><Image src={story.image} alt="" fill sizes={index === 0 ? '(max-width: 800px) 100vw, 55vw' : '(max-width: 800px) 100vw, 28vw'} className="object-cover" /></div>
            <div className="story__copy"><p className="eyebrow">{story.eyebrow}</p><h3>{story.title}</h3><p>{story.text}</p><span>Read the guide →</span></div>
          </Link>
        ))}</div>
      </div></section>

      <section className="decision-section content-shell">
        <div className="decision-section__intro"><p className="eyebrow">When a product has a real job to do</p><h2>Less choice. Better reasons.</h2><p>Our shortlists are built around use case, ongoing cost and meaningful trade-offs—not how many affiliate links fit on a page. Where we have not independently tested something, we say so.</p><Link href="/how-we-test" className="text-link">How we evaluate products →</Link></div>
        <div className="shortlist-list">{SHORTLISTS.map(([title, copy, href], i) => <Link href={href} key={href} className="shortlist-row"><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><b aria-hidden="true">↗</b></Link>)}<Link href="/shortlists" className="shortlist-all">See every shortlist →</Link></div>
      </section>

      <section className="resilience-feature content-shell">
        <div className="resilience-feature__image"><Image src="/images/photography/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg" alt="Water stored simply in a home kitchen" fill sizes="(max-width: 800px) 100vw, 48vw" className="object-cover" /></div>
        <div className="resilience-feature__copy"><p className="eyebrow">Practical resilience</p><h2>Prepare calmly. Buy selectively.</h2><p>Short disruptions are household problems before they are survival problems. Begin with a simple plan for water, food, light, warmth and communication.</p><ol><li><span>01</span>Use what you already have</li><li><span>02</span>Fill the genuine gaps</li><li><span>03</span>Keep it easy to maintain</li></ol><Link href="/topics/resilience" className="btn-primary">Build a sensible plan</Link></div>
      </section>

      <section className="trust-strip"><div className="content-shell trust-strip__inner">
        <p className="eyebrow">The Wild &amp; Well standard</p><h2>Learn first.<br />Buy second.</h2>
        <div className="trust-strip__points"><div><strong>Useful before impressive</strong><p>Practical changes come before wellness theatre and expensive upgrades.</p></div><div><strong>Clear about evidence</strong><p>Claims, limitations and uncertainty stay visible rather than being buried.</p></div><div><strong>Commercially independent</strong><p>Affiliate links can fund the site. They cannot buy a recommendation.</p></div></div>
        <div className="trust-strip__links"><Link href="/editorial-policy">Editorial policy</Link><Link href="/corrections">Corrections</Link><Link href="/affiliate-disclosure">Affiliate disclosure</Link></div>
      </div></section>
    </main>
  )
}
