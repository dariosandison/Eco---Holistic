import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'
import JourneyHero from '@/components/JourneyHero'

export const metadata = {
  title: 'Nutrition Topics — Wild & Well',
  description: 'Food-first nutrition basics for UK life: labels, ultra-processed foods, fibre, protein, and simple upgrades you can repeat.',
}

export default function Page() {
  const edu = getTopicEdu('nutrition')

  const faqs = [
    { q: 'What is the best “first change” for nutrition?', a: ['Pick one repeatable upgrade for 7–14 days: a higher-protein breakfast, an extra serving of veg at lunch, or swapping one ultra-processed snack for a whole-food option.', 'Avoid changing everything at once — you learn faster when the experiment is simple.'] },
    { q: 'Do I need supplements?', a: ['Many people don’t. Food, sleep, and movement tend to be the big levers.', 'If you do add supplements, do it one at a time and track effects for 2–4 weeks. If you are pregnant, on medication, or managing a condition, check with a clinician.'] },
    { q: 'Is “organic” always better?', a: 'Not always. A practical approach is “organic where it makes sense”, then prioritise whole foods, fibre, and consistency over perfection.' },
    { q: 'What should I look for on labels?', a: ['Short ingredient lists, recognisable ingredients, and lower added sugar are common “quick wins”.', 'For packaged foods, compare protein and fibre per serving — these often predict how filling a food is.'] },
  ]

  return (
    <main className="journey-page">
      <JourneyHero number="04" kicker="Food first" title="Eat well without turning life into a project." intro="Build around protein, fibre and food you genuinely enjoy. Learn the labels, make one repeatable upgrade, and leave perfection off the shopping list." image="/images/photography/nutrition.jpg" imageAlt="Colourful whole foods prepared in a kitchen" actions={[{label:'Start with food',href:'/nutrition'},{label:'Learn to read labels',href:'/blog/label-reading-101'},{label:'Open the food-first shortlist',href:'/nutrition/food-first-shortlist'}]} anchors={[{label:'Understand',href:'#understand'},{label:'First steps',href:'#start'},{label:'Useful options',href:'#options'},{label:'FAQs',href:'#faqs'}]} note="Education first. Some buying-guide links may be affiliate links." />

      <TopicEducationDeepDive edu={edu} />

      <div id="start" />
      <TopicAtAGlance items={[
        { title: 'Start here (7–14 days)', bullets: ['Pick one repeatable upgrade (breakfast, lunch, snacks).', 'Aim for protein + fibre in 2 meals per day.', 'Keep ultra-processed treats intentional, not automatic.'] },
        { title: 'Practical upgrades', bullets: ['Build a small pantry of staples you actually use.', 'Use batch cooking once per week (even 30–45 minutes helps).', 'Keep default snacks: fruit, yoghurt, nuts, seeds, tinned fish.'] },
        { title: 'Common mistakes', bullets: ['Changing too many things at once.', 'Buying health foods that do not fit your real routine.', 'Ignoring sleep and movement, which affect appetite and cravings.'] },
      ]} />

      <section className="mt-14" id="options">
        <div className="max-w-3xl">
          <h2 className="section-title">Useful tools and staples</h2>
          <p className="section-subtitle">Food comes first. These are optional tools for making a good routine easier to repeat.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick title="Meal prep containers (glass)" badge="Consistency" description="A simple tool for reducing decision fatigue during the week." href={amazonSearchUrl('glass meal prep containers set leakproof')} bullets={['Look for stackable sets', 'Dishwasher safe is helpful', 'Start small: 6–10 containers']} />
          <ProductPick title="Kitchen scale (optional)" badge="Learning" description="Useful if you want to learn portions without guessing; not required long-term." href={amazonSearchUrl('digital kitchen scale 1g')} bullets={['Use briefly to learn portions', 'Stop if it becomes unhelpful']} />
          <ProductPick title="Extra virgin olive oil" badge="Staple" description="A useful everyday staple. Freshness and storage matter more than marketing." href={amazonSearchUrl('extra virgin olive oil cold pressed uk')} bullets={['Prefer dark glass or tins', 'Store away from heat/light', 'Choose one you will actually use']} />
          <ProductPick title="Ground flaxseed" badge="Fibre" description="Easy fibre add-in for oats, yoghurt, smoothies or baking." href={amazonSearchUrl('ground flaxseed 1kg')} bullets={['Keep sealed and cool', 'Introduce gradually', 'Drink enough fluid']} />
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
          <h3 className="text-xl font-semibold">Ready to buy food rather than supplements?</h3>
          <p className="mt-2 text-sm text-zinc-700">Our food-first shortlist routes you toward whole-food protein, convenient meals and pantry staples before optional supplements.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/nutrition/food-first-shortlist">Open food-first shortlist</Link>
            <Link className="btn-secondary" href="/best-organic-oats-uk">Organic oats</Link>
            <Link className="btn-secondary" href="/best-extra-virgin-olive-oil-uk">Olive oil</Link>
          </div>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
