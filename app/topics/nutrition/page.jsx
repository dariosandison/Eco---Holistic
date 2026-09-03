import Link from 'next/link'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { getTopicEdu } from '@/lib/topicEdu'
import { buildPageMetadata } from '@/lib/pageMetadata'
import JourneyHero from '@/components/JourneyHero'

export const metadata = buildPageMetadata({
  title: 'Nutrition — Food-First UK Guidance',
  description: 'Food-first nutrition basics for UK life: labels, fibre, protein and simple upgrades you can repeat without turning eating into a project.',
  path: '/topics/nutrition',
  image: '/images/photography/nutrition.jpg',
})

const ROUTES = [
  { title: 'Build a repeatable plate', copy: 'Start with protein, fibre, fruit or vegetables and food you actually enjoy rather than a perfect diet template.', href: '/nutrition', label: 'Open nutrition basics' },
  { title: 'Read labels without obsessing', copy: 'Use ingredients and nutrition information to compare similar foods—not to turn every packet into a moral judgement.', href: '/blog/label-reading-101', label: 'Learn label reading' },
  { title: 'Choose useful staples', copy: 'When shopping guidance helps, prioritise normal foods and pantry staples before optional powders and supplements.', href: '/nutrition/food-first-shortlist', label: 'Open food-first shortlist' },
]

export default function Page() {
  const edu = getTopicEdu('nutrition')
  const faqs = [
    { q: 'What is the best “first change” for nutrition?', a: ['Pick one repeatable upgrade for 7–14 days: a higher-protein breakfast, an extra serving of veg at lunch, or swapping one ultra-processed snack for a whole-food option.', 'Avoid changing everything at once — you learn faster when the experiment is simple.'] },
    { q: 'Do I need supplements?', a: ['Many people don’t. Food, sleep, and movement tend to be the big levers.', 'If you do add supplements, introduce them deliberately rather than stacking several new products at once. If you are pregnant, on medication, or managing a condition, check suitability with an appropriate clinician or pharmacist.'] },
    { q: 'Is “organic” always better?', a: 'Not always. A practical approach is “organic where it makes sense”, then prioritise whole foods, fibre, and consistency over perfection.' },
    { q: 'What should I look for on labels?', a: ['Ingredient lists and nutrition information are most useful for comparing similar foods.', 'Protein, fibre, sugars, salt and serving size can all matter depending on what you are choosing; no single number defines whether a food belongs in a good diet.'] },
  ]

  return (
    <main className="journey-page nutrition-hub">
      <JourneyHero number="04" kicker="Food first" title="Eat well without turning life into a project." intro="Build around protein, fibre and food you genuinely enjoy. Learn the labels, make one repeatable upgrade, and leave perfection off the shopping list." image="/images/photography/nutrition.jpg" imageAlt="Colourful whole foods prepared in a kitchen" actions={[{label:'Start with food',href:'/nutrition'},{label:'Learn to read labels',href:'/blog/label-reading-101'},{label:'Open the food-first shortlist',href:'/nutrition/food-first-shortlist'}]} anchors={[{label:'Understand',href:'#understand'},{label:'First steps',href:'#start'},{label:'Choose a route',href:'#options'},{label:'FAQs',href:'#faqs'}]} note="Education first. Some buying-guide links may be affiliate links." />

      <TopicEducationDeepDive edu={edu} />
      <div id="start" />
      <TopicAtAGlance items={[
        { title: 'Start here (7–14 days)', bullets: ['Pick one repeatable upgrade rather than a complete overhaul.', 'Build two meals around a useful protein source and fibre-rich foods.', 'Keep enjoyable foods in the picture so the routine can survive normal life.'] },
        { title: 'Make the environment easier', bullets: ['Keep a small set of staples you genuinely use.', 'Prepare one or two components ahead rather than attempting a perfect meal-prep system.', 'Keep simple defaults available for busy days.'] },
        { title: 'Common mistakes', bullets: ['Changing too many things at once.', 'Buying “health” products that do not fit your real routine.', 'Treating supplements as a substitute for the basics.'] },
      ]} />

      <section className="nutrition-routes mt-16" id="options">
        <div className="nutrition-routes__heading"><p>Choose a route</p><div><h2>Food before products.</h2><span>Use the route that matches the decision you are actually making. Most nutrition progress should not require a specialist purchase.</span></div></div>
        <div className="nutrition-routes__list">{ROUTES.map((route, index) => <Link key={route.title} href={route.href}><span>0{index + 1}</span><div><h3>{route.title}</h3><p>{route.copy}</p></div><b>{route.label} →</b></Link>)}</div>
      </section>

      <section className="nutrition-buying mt-16"><div><p>Buying rule</p><h2>Do not manufacture a nutrition problem to justify a product.</h2></div><div><p>Kitchen tools, convenience foods and supplements can all be useful in the right context. They should earn their place by solving a real friction point: time, access, appetite, portability or a specific nutritional need.</p><p>For supplements, suitability and evidence matter more than wellness marketing. Introduce changes deliberately and seek professional advice where medication, pregnancy or a medical condition makes that appropriate.</p><Link href="/nutrition/food-first-shortlist">See the food-first buying route →</Link></div></section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">General information only. Some links are affiliate links; if you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
