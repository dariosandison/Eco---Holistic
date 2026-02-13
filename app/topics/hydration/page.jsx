import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Hydration Topics — Wild & Well',
  description: 'Hydration basics for UK life: habits first, then electrolytes for sweaty training days (education‑first).',
}

export default function Page() {
  const edu = getTopicEdu('hydration')

  const faqs = [
    {
      q: 'How do I know if I’m drinking enough?',
      a: [
        'A practical check: your urine is generally pale straw coloured (not perfectly clear all day).',
        'If you train hard, sweat a lot, or it’s hot, you may need more fluids — and sometimes electrolytes.',
      ],
    },
    {
      q: 'Do I need electrolytes?',
      a: [
        'Often only for longer/sweatier sessions, hot days, or if you cramp easily. For many people, water plus normal meals is enough.',
        'If you do use them, check sodium content and avoid turning them into an “all day” habit unless you have a clear reason.',
      ],
    },
    {
      q: 'Is drinking loads of water always good?',
      a: 'More isn’t always better. Over‑drinking can cause problems in rare cases. Aim for steady intake, and match fluids to your activity level.',
    },
    {
      q: 'Does caffeine dehydrate you?',
      a: 'In normal amounts, caffeinated drinks still count towards fluid intake for most people. Sensitivity varies, and late caffeine can hurt sleep.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Hydration</h1>
        <p className="mt-3 text-zinc-700">
          Hydration is mostly a habit problem, not a “perfect formula” problem. Start by removing friction: a bottle you like, visible water, and a simple cue.
        </p>

        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/water.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/water">Water (filters) topic</Link>
          <Link className="btn-secondary" href="/blog/reusable-water-bottles-guide">Reusable bottle guide</Link>
          <Link className="btn-secondary" href="/best-electrolytes-hydration-supplement-uk-ancient-and-brave-true-hydration">Electrolytes shortlist</Link>
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
            title: 'Start here (no spend)',
            bullets: [
              'Add one visible water cue (on desk / by kettle).',
              'Drink a glass after waking and with meals.',
              'Match intake to activity (more on training days).',
            ],
          },
          {
            title: 'Training days',
            bullets: [
              'If you sweat a lot, consider electrolytes for longer sessions.',
              'Salt + normal meals often cover many people.',
              'Avoid “stacking” lots of drinks with sugar/caffeine.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Buying lots of hydration products but not fixing the habit.',
              'Drinking too much too late → night waking.',
              'Ignoring sleep (dehydration-like fatigue is common after poor sleep).',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">If you want to reduce friction, compare a couple of simple tools you’ll actually use.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Stainless steel bottle (750ml)"
            badge="Habit"
            description="A bottle you like (and will clean) is often the biggest win."
            href={amazonSearchUrl('stainless steel water bottle 750ml wide mouth')}
            bullets={['Wide mouth is easier to clean', 'Leakproof lid matters', 'Dishwasher-safe helps']}
          />
          <ProductPick
            title="Electrolyte mix (training days)"
            badge="Sweat"
            description="Useful for longer/hot sessions. Compare sodium content and ingredients."
            href={amazonSearchUrl('electrolyte powder no sugar high sodium UK')}
            bullets={['Check sodium per serving', 'Avoid turning into an all-day habit', 'Keep it simple']}
          />
          <ProductPick
            title="Water bottle brush"
            badge="Maintenance"
            description="Keeps bottles usable long-term (and reduces the “I stopped because it got gross” problem)."
            href={amazonSearchUrl('water bottle brush set')}
            bullets={['Bottle + straw brush combo', 'Let it dry fully']}
          />
          <ProductPick
            title="Insulated tumbler (desk)"
            badge="Visible cue"
            description="If you work at a desk, a cup that stays cold/hot can make intake effortless."
            href={amazonSearchUrl('insulated tumbler with straw 900ml UK')}
            bullets={['Fits your desk/cup holder', 'Easy to clean', 'Use it as a cue']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/blog/reusable-water-bottles-guide">Bottle guide →</Link>
          <Link className="btn-secondary" href="/best-electrolytes-hydration-supplement-uk-ancient-and-brave-true-hydration">Electrolytes shortlist →</Link>
          <Link className="btn-secondary" href="/topics/water">Water filters topic →</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
