import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Sleep Topics — Wild & Well',
  description: 'Sleep and recovery: light, timing, temperature, and practical options for UK homes.',
}

export default function Page() {
  const faqs = [
    {
      q: 'What is the single most important sleep habit?',
      a: 'A consistent wake time, including weekends, tends to stabilise sleep timing over time. Morning light soon after waking can help anchor the rhythm.',
    },
    {
      q: 'How many hours before bed should I stop caffeine?',
      a: 'Many people do better with a cut-off about 8 hours before bed. Sensitivity varies, so adjust based on how quickly you fall asleep.',
    },
    {
      q: 'Does bedroom temperature matter?',
      a: 'Yes. A cooler room is associated with easier sleep for many people. A common starting range is about 17–19°C, but comfort matters.',
    },
    {
      q: 'Do supplements work for sleep?',
      a: 'Some people find magnesium helpful for winding down, but responses vary. If you are pregnant, on medication, or managing a condition, check with a qualified clinician first.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Sleep &amp; Recovery</h1>
        <p className="mt-3 text-zinc-700">
          Better sleep usually comes from a few levers: morning light, consistent timing, a cool dark room, and a repeatable wind-down routine.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Cornerstone guide</Link>
          <Link className="btn-secondary" href="/best-natural-sleep-support">Sleep support shortlist</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#shortlist">Shortlist</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>
      </header>

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: '7-day reset (simple)',
            bullets: [
              'Morning light within ~1 hour of waking.',
              'Caffeine cut-off: about 8 hours before bed.',
              'Cool bedroom (often ~17–19°C) and darkness.',
              'Same wind-down cue nightly (reading, shower, stretch).',
            ],
          },
          {
            title: 'Useful purchases',
            bullets: [
              'Light control: blackout curtains or an eye mask.',
              'Noise buffer: white noise if you wake easily.',
              'Temperature control: breathable bedding.',
              'Supplements: keep it simple; start low and track effects.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Trying many changes at once (hard to tell what helps).',
              'Overcomplicating supplements and routines.',
              'Bright light late at night without compensating in the morning.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="shortlist">
        <h2 className="section-title">Shortlist (buyer topics)</h2>
        <p className="section-subtitle">Broad search links so you can choose the best price/size for your needs.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Magnesium glycinate (capsules)"
            badge="Gentle form"
            description="Commonly used for evening wind-down. Choose a reputable brand and start low."
            href={amazonSearchUrl('magnesium glycinate capsules UK')}
            bullets={[
              'Look for glycinate (or bisglycinate) rather than oxide',
              'Start low and assess tolerance',
              'Check interactions if you take medication',
            ]}
          />
          <ProductPick
            title="Blackout eye mask"
            badge="Light control"
            description="Simple option for reducing light exposure in bed."
            href={amazonSearchUrl('blackout sleep mask contoured')}
            bullets={['Choose a comfortable design', 'Washable is helpful']}
          />
          <ProductPick
            title="White noise machine"
            badge="Noise buffer"
            description="Useful for light sleepers and urban noise."
            href={amazonSearchUrl('white noise machine bedside')}
            bullets={['Simple controls help', 'Timer + continuous modes are useful']}
          />
          <ProductPick
            title="Breathable duvet (all-season)"
            badge="Temperature"
            description="Temperature control is a common driver of night waking."
            href={amazonSearchUrl('all season duvet breathable cotton wool')}
            bullets={['Consider natural fills if you run hot', 'Prioritise easy returns']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-natural-sleep-support">See the shortlist page →</Link>
          <Link className="btn-secondary" href="/blog/magnesium-for-sleep-basics">Read: magnesium basics</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">
        General information only. If you are pregnant, on medication, or managing a health condition, check with a qualified clinician first.
      </p>

      <p className="mt-3 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
