import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Foot Strength Topics — Wild & Well',
  description: 'Foot strength and natural movement basics: gradual progression, footwear choices, and simple routines.',
}

// Vivobarefoot (AWIN)
const VIVO_PRIMUS_LITE_KNIT = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footstrength_vivo_primus_lite_knit&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Fprimus-lite-knit-training-footwear'

export default function Page() {
  const edu = getTopicEdu('foot-strength')

  const faqs = [
    {
      q: 'Should I switch to barefoot shoes straight away?',
      a: [
        'Usually no. The limiting factor is often your calves/feet adapting to a different load pattern.',
        'Start with short, easy walks and build gradually over weeks.',
      ],
    },
    {
      q: 'What are the signs I’m doing too much too soon?',
      a: 'Persistent calf/foot soreness that doesn’t settle with rest, sharp pain, or symptoms that worsen week to week. Reduce volume and consider clinical advice if symptoms persist.',
    },
    {
      q: 'Do I need special exercises?',
      a: 'Walking on varied surfaces, toe-spread practice, and slow calf raises can help. Consistent, gradual exposure usually beats “complex programs”.',
    },
    {
      q: 'Are minimalist shoes for everyone?',
      a: 'Not necessarily. Comfort, history, and current training load matter. Consider them as a gradual experiment, not an identity.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Foot Strength (Natural Movement)</h1>
        <p className="mt-3 text-zinc-700">
          A practical, low-drama approach: strengthen feet and calves over time, and choose footwear that supports your real routine.
        </p>

        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/movement.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/movement">Explore Movement section</Link>
          <Link className="btn-secondary" href="/best-walking-shoes-daily-steps-uk">Walking shoes shortlist</Link>
          <Link className="btn-secondary" href="/best-barefoot-walking-boots-uk-vivobarefoot-tracker-winter-iii">Barefoot boots guide</Link>
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
            title: 'Start here (2 weeks)',
            bullets: [
              'Keep your normal shoes as the default.',
              'Add 5–15 minute easy walks in a more minimal shoe, 2–3x/week.',
              'Increase duration slowly (think +10–20% per week).',
              'If sore, reduce volume, not “push through”.',
            ],
          },
          {
            title: 'Simple strengthening',
            bullets: [
              'Slow calf raises (2–3 sets, 2–3x/week).',
              'Toe spreads / short-foot practice (30–60 seconds daily).',
              'Balance work (single-leg stand while brushing teeth).',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Switching footwear and increasing walking/running volume at the same time.',
              'Treating soreness as a sign you “need more”.',
              'Buying expensive shoes before you’ve built the habit.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">Use these broad links to compare fit, return policies, and how the shoe feels for your real life (not just marketing).</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Minimal trainers (beginner-friendly)"
            badge="Transition"
            description="Look for wide toe box, flexible sole, and realistic returns. Build slowly."
            href={amazonSearchUrl('minimalist trainers wide toe box flexible sole')}
            bullets={['Start with short walks', 'Increase gradually', 'Comfort matters']}
          />
          <ProductPick
            title="Toe socks"
            badge="Comfort"
            description="Some people like toe socks for toe splay and blister reduction when transitioning."
            href={amazonSearchUrl('toe socks men women running')}
            bullets={['Try 1–2 pairs first', 'Washable is key']}
          />
          <ProductPick
            title="Calf raise wedge / slant board"
            badge="Strength"
            description="A simple tool for calves/ankles if you’re tight (use gently)."
            href={amazonSearchUrl('slant board calf stretch')}
            bullets={['Gentle holds first', 'Don’t force range']}
          />
          <ProductPick
            title="Vivobarefoot Primus Lite Knit (training)"
            badge="Barefoot"
            description="A popular Vivo trainer for gym work and short walks — transition gradually."
            bullets={['Short walks first', 'Build over weeks', 'Fit matters']}
            links={[{ label: 'Check price', merchant: 'awin', href: VIVO_PRIMUS_LITE_KNIT, variant: 'primary' }]}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-walking-shoes-daily-steps-uk">Daily walking shoes →</Link>
          <Link className="btn-secondary" href="/best-barefoot-walking-boots-uk-vivobarefoot-tracker-winter-iii">Barefoot boots guide →</Link>
          <Link className="btn-secondary" href="/movement/stretches">Mobility basics →</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
