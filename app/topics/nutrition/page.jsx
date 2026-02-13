import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Nutrition Topics — Wild & Well',
  description: 'Food-first nutrition basics for UK life: labels, ultra-processed foods, fibre, protein, and simple upgrades you can repeat.',
}

export default function Page() {
  const edu = getTopicEdu('nutrition')

  const faqs = [
    {
      q: 'What is the best “first change” for nutrition?',
      a: [
        'Pick one repeatable upgrade for 7–14 days: a higher‑protein breakfast, an extra serving of veg at lunch, or swapping one ultra‑processed snack for a whole‑food option.',
        'Avoid changing everything at once — you learn faster when the experiment is simple.',
      ],
    },
    {
      q: 'Do I need supplements?',
      a: [
        'Many people don’t. Food, sleep, and movement tend to be the big levers.',
        'If you do add supplements, do it one at a time and track effects for 2–4 weeks. If you are pregnant, on medication, or managing a condition, check with a clinician.',
      ],
    },
    {
      q: 'Is “organic” always better?',
      a: 'Not always. A practical approach is “organic where it makes sense”, then prioritise whole foods, fibre, and consistency over perfection.',
    },
    {
      q: 'What should I look for on labels?',
      a: [
        'Short ingredient lists, recognisable ingredients, and lower added sugar are common “quick wins”.',
        'For packaged foods, compare protein and fibre per serving — these often predict how filling a food is.',
      ],
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Nutrition (Food + Labels)</h1>
        <p className="mt-3 text-zinc-700">
          Food-first basics for modern life: label reading, ultra‑processed foods, and simple upgrades you can repeat.
        </p>

        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/nutrition.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Explore Nutrition section</Link>
          <Link className="btn-secondary" href="/blog/label-reading-101">Label reading 101</Link>
          <Link className="btn-secondary" href="/blog/ultra-processed-foods-what-they-are-and-why-they-matter">Ultra‑processed foods</Link>
          <Link className="btn-secondary" href="/best-anti-inflammatory-foods-shopping-list">Anti‑inflammatory foods: shopping list</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#understand">Understand</a>
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#options">Options</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026</p>
      </header>

      <TopicEducationDeepDive edu={edu} />

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'Start here (7–14 days)',
            bullets: [
              'Pick one repeatable upgrade (breakfast, lunch, snacks).',
              'Aim for protein + fibre in 2 meals per day.',
              'Keep ultra‑processed “treats” intentional, not automatic.',
            ],
          },
          {
            title: 'Practical upgrades',
            bullets: [
              'Build a small pantry of staples you actually use.',
              'Use batch cooking once per week (even 30–45 minutes helps).',
              'Keep “default” snacks: fruit, yoghurt, nuts, seeds, tinned fish.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Changing too many things at once (you can’t learn what worked).',
              'Buying “health” foods that don’t fit your real routine.',
              'Ignoring sleep and movement (they strongly affect appetite and cravings).',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">If you want to improve consistency, these broad links help you compare simple, low‑friction tools and staples.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Meal prep containers (glass)"
            badge="Consistency"
            description="A simple tool for reducing decision fatigue during the week."
            href={amazonSearchUrl('glass meal prep containers set leakproof')}
            bullets={['Look for stackable sets', 'Dishwasher safe is helpful', 'Start small: 6–10 containers']}
          />
          <ProductPick
            title="Kitchen scale (optional)"
            badge="Learning"
            description="Useful if you want to learn portions without guessing (not required long-term)."
            href={amazonSearchUrl('digital kitchen scale 1g')}
            bullets={['Use for 1–2 weeks to learn portions', 'Then stop if it becomes stressful']}
          />
          <ProductPick
            title="Extra virgin olive oil"
            badge="Staple"
            description="A high‑leverage staple. Freshness and storage matter more than marketing."
            href={amazonSearchUrl('extra virgin olive oil cold pressed uk')}
            bullets={['Prefer dark glass / tins', 'Store away from heat/light', 'Use daily']}
          />
          <ProductPick
            title="Ground flaxseed"
            badge="Fibre"
            description="Easy fibre add‑in for oats, yoghurt, smoothies, or baking."
            href={amazonSearchUrl('ground flaxseed 1kg')}
            bullets={['Keep sealed and cool', 'Start with 1–2 tsp', 'Drink water alongside']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/nutrition">Go deeper in Nutrition →</Link>
          <Link className="btn-secondary" href="/best-organic-oats-uk">Organic oats shortlist →</Link>
          <Link className="btn-secondary" href="/best-extra-virgin-olive-oil-uk">Olive oil shortlist →</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
