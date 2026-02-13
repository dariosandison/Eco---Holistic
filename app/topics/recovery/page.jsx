import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Recovery Topics — Wild & Well',
  description: 'Recovery basics: sleep, load management, soreness, and low‑friction tools (UK).',
}

export default function Page() {
  const edu = getTopicEdu('recovery')

  const faqs = [
    {
      q: 'What is the most important recovery tool?',
      a: 'Sleep. Most recovery “hacks” matter far less than consistent sleep timing, enough total sleep, and a manageable training load.',
    },
    {
      q: 'Is soreness a sign of a good workout?',
      a: 'Not necessarily. Some soreness is normal when you change training, but progress is better measured by repeatable performance (more reps, more weight, better form) rather than soreness.',
    },
    {
      q: 'Do I need ice baths or saunas?',
      a: 'They are optional. If you enjoy them and they fit your life, great — but basic sleep, protein, and sensible training volume usually come first.',
    },
    {
      q: 'When should I rest instead of pushing through?',
      a: 'If pain is sharp, worsening, or changes your movement, stop and reassess. For persistent issues, follow NHS guidance and consider clinical advice.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Recovery</h1>
        <p className="mt-3 text-zinc-700">
          Recovery is mostly sleep + sensible training load + enough food. Tools can help, but they’re the last layer.
        </p>

        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/sleep.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/sleep">Sleep topic</Link>
          <Link className="btn-secondary" href="/sleep-recovery-shortlist-uk">Partner shortlist</Link>
          <Link className="btn-secondary" href="/movement">Explore Movement section</Link>
          <Link className="btn-secondary" href="/best-foam-rollers-recovery-tools">Foam rollers shortlist</Link>
          <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Home strength basics</Link>
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
            title: 'Your recovery “base layer”',
            bullets: [
              'Sleep: consistent wake time + wind‑down routine.',
              'Load: increase volume gradually (not every week).',
              'Food: enough protein + carbs around hard training.',
              'Daily movement: walking helps circulation and stiffness.',
            ],
          },
          {
            title: 'When to reduce load',
            bullets: [
              'Sleep is getting worse for multiple nights.',
              'Resting heart rate is up and you feel “wired”.',
              'Performance drops for several sessions in a row.',
              'Niggles are worsening instead of settling.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Adding many recovery tools instead of fixing sleep.',
              'Pushing volume too fast (especially after a break).',
              'Skipping easy days and turning everything into a max effort session.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">Low‑friction tools that can help soreness and consistency — not magic fixes.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Foam roller"
            badge="Stiffness"
            description="Useful for short mobility sessions or after long sitting. Comfort matters more than aggressiveness."
            href={amazonSearchUrl('foam roller medium density')}
            bullets={['Start gentle', '2–5 minutes is enough', 'Pair with walking/mobility']}
          />
          <ProductPick
            title="Massage ball / lacrosse ball"
            badge="Targeted"
            description="Good for feet, glutes, and shoulders. Use light pressure and breathe."
            href={amazonSearchUrl('massage ball lacrosse ball mobility')}
            bullets={['Short sessions', 'Avoid sharp pain', 'Great for travel']}
          />
          <ProductPick
            title="Magnesium (simple)
"
            badge="Wind‑down"
            description="Some people find magnesium helpful as part of an evening routine."
            href={amazonSearchUrl('magnesium glycinate uk')}
            bullets={['One change at a time', 'Start low', 'Check interactions if medicated']}
          />
          <ProductPick
            title="Protein shaker bottle"
            badge="Convenience"
            description="If you use protein powder, a good shaker reduces friction."
            href={amazonSearchUrl('protein shaker bottle with mixer ball')}
            bullets={['Dishwasher safe helps', 'Leak‑proof lid', 'Keep it simple']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/sleep">Sleep (biggest lever) →</Link>
          <Link className="btn-secondary" href="/best-foam-rollers-recovery-tools">Foam roller shortlist →</Link>
          <Link className="btn-secondary" href="/best-natural-sleep-support">Sleep support shortlist →</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
