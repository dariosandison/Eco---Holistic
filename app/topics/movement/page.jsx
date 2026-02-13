import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Movement Topics — Wild & Well',
  description: 'Movement basics: daily walking, simple strength, mobility, and repeatable routines (UK).',
}

export default function Page() {
  const edu = getTopicEdu('movement')

  const faqs = [
    {
      q: 'What matters more: steps or workouts?',
      a: [
        'For most people, both help — but daily steps are often the easiest “base layer” to build first.',
        'Two short strength sessions per week is a realistic next step once walking feels consistent.',
      ],
    },
    {
      q: 'How much strength training do I need?',
      a: 'A simple minimum: 2 sessions per week, covering push, pull, squat/lunge, and hinge patterns. Consistency beats complexity.',
    },
    {
      q: 'Do I need equipment?',
      a: 'No. Bodyweight and a resistance band can go a long way. Equipment is optional — it’s there to reduce friction, not create it.',
    },
    {
      q: 'How do I avoid injury when starting?',
      a: 'Increase volume gradually (10–20% per week), keep most sessions easy, and don’t add lots of new things at once.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Movement (Walk + Strength + Mobility)</h1>
        <p className="mt-3 text-zinc-700">
          Build the base first (steps), then add simple strength and mobility. Most “fitness plans” fail because they ask for too much too soon.
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
          <Link className="btn-secondary" href="/movement/movement-shortlist">Movement shortlist</Link>
          <Link className="btn-secondary" href="/blog/walking-for-health-how-much-is-enough">Walking guide</Link>
          <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Home strength basics</Link>
          <Link className="btn-secondary" href="/blog/mobility-for-desk-workers">Mobility for desk workers</Link>
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
            title: 'Base layer (daily)',
            bullets: [
              'Aim for a daily walk (even 10–20 minutes counts).',
              'Track steps for awareness, not perfection.',
              'Add hills or brisk segments once the habit is stable.',
            ],
          },
          {
            title: 'Strength (2×/week)',
            bullets: [
              'Push, pull, squat/lunge, hinge, carry/core.',
              'Start with bodyweight + a band; add load slowly.',
              'Leave 1–2 reps “in the tank” most sessions.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Starting too hard, too fast (then stopping).',
              'Buying gear before building the habit.',
              'Ignoring sleep and recovery when training volume rises.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">A few low‑friction tools that can make consistency easier (not mandatory).</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Resistance bands set"
            badge="Strength"
            description="Small, cheap, and versatile for rows, presses, rehab, and mobility."
            href={amazonSearchUrl('resistance bands set loops and tube UK')}
            bullets={['Choose a range of tensions', 'Keep them visible', 'Use 2×/week']}
          />
          <ProductPick
            title="Walking shoes"
            badge="Steps"
            description="Comfort-first shoes for regular walking — fit and comfort beat hype."
            links={[{ label: 'Read the shortlist', merchant: 'internal', href: '/best-walking-shoes-daily-steps-uk', variant: 'primary' }]}
            bullets={['Try on and walk around', 'Consider returns', 'Use them daily']}
          />
          <ProductPick
            title="Fitness tracker (beginner)"
            badge="Awareness"
            description="Steps and sleep trends can help you stay honest — don’t obsess over daily numbers."
            links={[{ label: 'Read the shortlist', merchant: 'internal', href: '/best-fitness-trackers-beginners-uk', variant: 'primary' }]}
            bullets={['Use for trends', 'Charge consistently', 'Turn off noisy notifications']}
          />
          <ProductPick
            title="Yoga mat"
            badge="Mobility"
            description="A comfortable base for mobility, stretching, and floor work."
            links={[{ label: 'Read the shortlist', merchant: 'internal', href: '/best-yoga-mats-grip-comfort', variant: 'primary' }]}
            bullets={['Grip matters', 'Choose thickness for joints', 'Keep it accessible']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/movement">Go deeper in Movement →</Link>
          <Link className="btn-secondary" href="/topics/recovery">Recovery topic →</Link>
          <Link className="btn-secondary" href="/topics/foot-strength">Foot strength topic →</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
