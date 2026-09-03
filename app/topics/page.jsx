import Image from 'next/image'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Explore healthier living — seven practical journeys',
  description: 'Explore Wild & Well through Water, Air, Sleep, Nutrition, Movement, Healthy Home and Practical Resilience. Understand first, act for free where possible, then buy only if useful.',
}

const CORE_PATHS = [
  { number: '01', title: 'Water', desc: 'Taste, filtration, hard-water comfort and household backup—starting with the job you actually need done.', learn: '/topics/water', buy: '/water-filtration-shortlist-uk', image: '/images/photography/water.jpg' },
  { number: '02', title: 'Air', desc: 'Particles, smoke, damp, humidity and ventilation. Diagnose the problem before choosing equipment.', learn: '/topics/air-quality', buy: '/air-quality-shortlist-uk', image: '/images/photography/air-quality.png' },
  { number: '03', title: 'Sleep', desc: 'Light, timing, temperature and comfort first; products only when they solve a defined sleep problem.', learn: '/topics/sleep', buy: '/sleep-recovery-shortlist-uk', image: '/images/photography/sleep.jpg' },
  { number: '04', title: 'Nutrition', desc: 'Food-first nutrition, useful staples and realistic routines before optional supplements.', learn: '/topics/nutrition', buy: '/nutrition/food-first-shortlist', image: '/images/photography/nutrition.jpg' },
  { number: '05', title: 'Movement', desc: 'Walking and simple strength first, then footwear, home training or tracking when useful.', learn: '/topics/movement', buy: '/movement/movement-shortlist', image: '/images/photography/movement.jpg' },
  { number: '06', title: 'Healthy Home', desc: 'Air, moisture, cleaning, laundry and high-contact materials—prioritised by what matters most.', learn: '/healthy-home', buy: '/healthy-home/low-tox-shortlist', image: '/images/photography/home.jpg' },
  { number: '07', title: 'Practical Resilience', desc: 'Calm planning for short disruptions to water, food, power, warmth and communication.', learn: '/topics/resilience', buy: '/blog/72-hour-household-emergency-kit-uk', image: '/images/photography/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg' },
]

const DEEPER_TOPICS = [
  ['Recovery', '/topics/recovery', 'Load management, soreness and adaptation.'],
  ['Foot strength', '/topics/foot-strength', 'Natural movement basics and gradual transitions.'],
  ['Gut health', '/topics/gut-health', 'Fibre, diversity and sensible expectations.'],
  ['Hydration', '/topics/hydration', 'Habits first; electrolytes when they actually help.'],
  ['Skin health', '/topics/skin-health', 'Barrier basics, fragrance and simple routines.'],
  ['Sun protection', '/topics/sun-protection', 'Shade, clothing and practical sunscreen habits.'],
  ['Fragrance-free home', '/topics/fragrance-free', 'High-contact changes for laundry, cleaning and bathrooms.'],
  ['Dog health & wellness', '/dogs', 'Food, healthy weight, movement, allergies and the shared home.'],
]

export default function Page() {
  const itemList = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Wild & Well core journeys', itemListElement: CORE_PATHS.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.title, url: `${SITE_URL}${item.learn}` })) }

  return (
    <main className="bg-[#fffdf8] pb-24 text-[var(--ink)]">
      <StructuredData data={itemList} />

      <header className="content-shell grid gap-10 border-b border-[rgba(18,59,50,.14)] py-14 md:grid-cols-[1.25fr_.75fr] md:items-end md:py-20">
        <div>
          <p className="eyebrow">Explore Wild &amp; Well</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3.5rem,7vw,7.3rem)] font-normal leading-[.92] tracking-[-.055em] text-[var(--brand-dark)]">Seven ways to make everyday life <em className="font-normal text-[#6b7051]">work better.</em></h1>
        </div>
        <div className="md:pb-2">
          <p className="max-w-lg text-base leading-8 text-[#5b655e]">Start with the problem. Understand what is driving it. Try the useful no-spend steps. Only then decide whether a product deserves your money.</p>
          <div className="mt-6 flex flex-wrap gap-5"><Link className="btn-primary" href="/start-here">Find your starting point</Link><Link className="text-link" href="/about">Our approach →</Link></div>
        </div>
      </header>

      <section className="content-shell py-16 md:py-24">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow">The core journeys</p><h2 className="mt-3 max-w-3xl font-serif text-[clamp(2.6rem,4.8vw,5rem)] font-normal leading-[1] tracking-[-.045em] text-[var(--brand-dark)]">Choose what you want to improve.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-[#667069]">Each destination combines practical education, free first steps and a restrained route to comparison when buying is justified.</p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-12">
          {CORE_PATHS.map((path, index) => {
            const wide = [0, 3, 6].includes(index)
            return (
              <article key={path.title} className={wide ? 'group lg:col-span-7' : 'group lg:col-span-5'}>
                <Link href={path.learn} className="block">
                  <div className={`relative overflow-hidden bg-[#e4e6df] ${wide ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                    <Image src={path.image} alt="" fill sizes={wide ? '(max-width: 1024px) 100vw, 58vw' : '(max-width: 1024px) 100vw, 42vw'} className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(14,42,35,.68)] to-transparent px-5 pb-5 pt-20 text-white"><span className="font-serif text-sm italic opacity-80">{path.number}</span><h3 className="mt-1 font-serif text-3xl font-normal tracking-[-.03em] md:text-4xl">{path.title}</h3></div>
                  </div>
                </Link>
                <div className="grid grid-cols-[1fr_auto] gap-5 border-b border-[#cfd4ce] py-5">
                  <p className="max-w-2xl text-sm leading-7 text-[#626b65]">{path.desc}</p>
                  <div className="flex flex-col items-end gap-2 text-xs font-bold uppercase tracking-[.06em]"><Link href={path.learn} className="text-[var(--brand-dark)]">Understand →</Link><Link href={path.buy} className="text-[var(--brand)]">Compare ↗</Link></div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-[#f8f5ed] md:py-20">
        <div className="content-shell grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
          <div><p className="eyebrow !text-[#a9c9b9]">Go deeper</p><h2 className="mt-3 max-w-md font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[.98] tracking-[-.045em]">The library behind the journeys.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#c7d3cd]">Focused subjects live underneath the seven main journeys so the site can go deep without turning the navigation into a catalogue.</p></div>
          <div className="border-t border-white/20">
            {DEEPER_TOPICS.map(([title, href, desc], i) => <Link href={href} key={href} className="grid grid-cols-[2rem_1fr_auto] items-start gap-4 border-b border-white/20 py-5 text-inherit"><span className="font-serif text-sm italic text-[#a9b9b0]">{String(i + 1).padStart(2, '0')}</span><div><h3 className="font-serif text-xl font-normal md:text-2xl">{title}</h3><p className="mt-1 text-sm leading-6 text-[#c7d3cd]">{desc}</p></div><span aria-hidden="true">↗</span></Link>)}
          </div>
        </div>
      </section>

      <section className="content-shell grid gap-10 py-16 md:grid-cols-[1fr_1fr] md:py-24">
        <div><p className="eyebrow">How decisions work here</p><h2 className="mt-3 max-w-xl font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[1] tracking-[-.045em] text-[var(--brand-dark)]">Learn first. Buy second.</h2></div>
        <ol className="border-t border-[rgba(18,59,50,.18)]">
          {['Understand what is actually causing the problem.', 'Try the sensible actions that cost little or nothing.', 'Decide whether a product would materially help.', 'Compare a focused set of options and check current merchant details before buying.'].map((text, i) => <li key={text} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-[rgba(18,59,50,.18)] py-5 text-sm leading-7 text-[#5b655e]"><span className="font-serif italic text-[#7a867e]">0{i + 1}</span><span>{text}</span></li>)}
        </ol>
      </section>

      <div className="content-shell"><p className="border-t border-[rgba(18,59,50,.14)] pt-5 text-xs leading-6 text-[#7a837d]">Some links are affiliate links. If you buy through them, Wild &amp; Well may earn a commission at no extra cost to you. Affiliate relationships do not determine inclusion.</p></div>
    </main>
  )
}