import Image from 'next/image'
import Link from 'next/link'
import BlogExplorer from '@/components/BlogExplorer'
import InlineSignup from '@/components/InlineSignup'
import { listContent } from '@/lib/content'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'UK healthy-living guides',
  description: 'Practical UK guides on water, air, sleep, nutrition, movement, healthy homes and household resilience — organised around the problem you want to solve.',
}

const CLUSTERS = [
  { number:'01', title:'Water', href:'/topics/water', image:'/images/photography/water.jpg', text:'Taste, hard water, filtration formats, replacement costs and household backup.', links:[['Jug or under-sink?','/blog/water-filter-jug-vs-under-sink-uk'],['Is RO worth it?','/blog/reverse-osmosis-water-filter-worth-it-uk']] },
  { number:'02', title:'Air', href:'/topics/air-quality', image:'/images/photography/air-quality.png', text:'Ventilation, particles, pollen, damp, condensation and indoor humidity.', links:[['Window condensation','/blog/condensation-on-windows-uk-dehumidifier'],['Purifier or dehumidifier?','/blog/air-purifier-vs-dehumidifier-mould-uk']] },
  { number:'03', title:'Sleep', href:'/topics/sleep', image:'/images/photography/sleep.jpg', text:'Light, timing, bedroom comfort and recovery without chasing hacks.', links:[['Bedroom temperature','/blog/bedroom-temperature-bedding'],['Sleep naturally','/blog/sleep-naturally-simple-guide']] },
  { number:'04', title:'Nutrition', href:'/topics/nutrition', image:'/images/photography/nutrition.jpg', text:'Food-first nutrition, useful staples, protein, fibre and selective supplementation.', links:[['Creatine, simply','/blog/creatine-uk-simple-guide'],['72-hour food plan','/blog/72-hour-food-plan-uk']] },
  { number:'05', title:'Movement', href:'/topics/movement', image:'/images/photography/movement.jpg', text:'Walking, strength, mobility and equipment that earns its place.', links:[['Home strength basics','/blog/home-strength-basics-busy-people'],['Walking basics','/blog/walking-basics-weekly-plan']] },
  { number:'06', title:'Healthy home', href:'/healthy-home', image:'/images/photography/home.jpg', text:'Cleaning, laundry, materials and practical lower-exposure household choices.', links:[['Fragrance-free laundry','/best-fragrance-free-laundry-detergents-uk'],['Healthy-home shortlist','/healthy-home/low-tox-shortlist']] },
  { number:'07', title:'Practical resilience', href:'/topics/resilience', image:'/images/photography/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg', text:'Calm planning for short disruptions to water, food, power and communication.', links:[['72-hour household kit','/blog/72-hour-household-emergency-kit-uk'],['Household water plan','/blog/72-hour-household-water-plan-uk']] },
]

export default function Page() {
  const insights = listContent('insights')
  const explainers = listContent('explainers')
  const flat = [...(insights || []), ...(explainers || [])]
  const itemList = { '@context':'https://schema.org', '@type':'ItemList', name:'Wild & Well UK guides', itemListElement:flat.slice(0,50).map((p,i)=>({ '@type':'ListItem', position:i+1, name:p.title, url:`${SITE_URL}/blog/${p.slug}` })) }

  return (
    <main className="bg-[#fffdf8] text-[var(--ink)]">
      <StructuredData data={itemList} />
      <section className="content-shell grid min-h-[560px] items-center gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div>
          <p className="eyebrow">The Wild &amp; Well library</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[.94] tracking-[-.055em] text-[var(--brand-dark)]">Useful answers.<br /><em className="font-normal text-[#6d714f]">Less wellness noise.</em></h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[#536058]">Start with the problem you are actually trying to solve. Our guides explain what matters, what you can do without buying anything, and when a product may genuinely help.</p>
          <div className="mt-8 flex flex-wrap items-center gap-5"><Link href="/start-here" className="btn-primary">Find your starting point</Link><Link href="/shortlists" className="text-link">Compare only when needed →</Link></div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-[#dde3de] lg:min-h-[520px]"><Image src="/images/photography/home-hero.jpg" alt="A calm naturally lit home" fill priority sizes="(max-width: 900px) 100vw, 45vw" className="object-cover" /></div>
      </section>

      <section className="border-y border-[#ccd2cc] bg-white/40 py-6"><div className="content-shell grid gap-4 text-xs font-semibold uppercase tracking-[.08em] text-[#59665e] sm:grid-cols-3"><span>Evidence-aware guidance</span><span>No-spend actions considered</span><span>UK context where it matters</span></div></section>

      <section className="content-shell py-20">
        <div className="grid gap-5 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Browse by journey</p><h2 className="mt-3 font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-none tracking-[-.045em] text-[var(--brand-dark)]">What are you trying to improve?</h2></div><p className="max-w-xl self-end text-[#637068] leading-7">Seven flagship areas organise the library. Specialist subjects remain available underneath them without turning the main experience into a directory of everything.</p></div>
        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2">
          {CLUSTERS.map((cluster,index)=><article key={cluster.href} className={index===0||index===3||index===6?'md:col-span-2 md:grid md:grid-cols-[1.05fr_.95fr] md:gap-7':''}>
            <Link href={cluster.href} className="relative block min-h-[280px] overflow-hidden bg-[#dfe4df] md:min-h-[340px]"><Image src={cluster.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-[1.025]" /></Link>
            <div className="border-b border-[#cbd1cb] py-5"><div className="flex items-center gap-3"><span className="font-serif text-sm italic text-[#849087]">{cluster.number}</span><p className="eyebrow">{cluster.title}</p></div><h3 className="mt-2 font-serif text-3xl font-normal tracking-[-.03em] text-[var(--brand-dark)]"><Link href={cluster.href}>{cluster.title}</Link></h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#616c65]">{cluster.text}</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">{cluster.links.map(([label,href])=><Link key={href} href={href} className="text-sm font-semibold text-[var(--brand)] underline decoration-black/15 underline-offset-4">{label} →</Link>)}</div></div>
          </article>)}
        </div>
      </section>

      <section className="bg-[#123b32] py-20 text-[#f8f5ed]"><div className="content-shell"><div className="max-w-3xl"><p className="eyebrow !text-[#a9c9b9]">Full library</p><h2 className="mt-3 font-serif text-[clamp(3rem,5vw,5rem)] font-normal leading-none tracking-[-.045em]">Go deeper when you need to.</h2><p className="mt-5 max-w-2xl leading-7 text-[#c7d3cd]">Browse the complete guide library or use the filters to narrow it down.</p></div><div className="mt-10 rounded-none bg-[#fffdf8] p-5 text-[var(--ink)] sm:p-8"><BlogExplorer insights={insights} explainers={explainers} /></div></div></section>

      <section className="content-shell py-16"><InlineSignup placement="blog_index" /></section>
    </main>
  )
}
