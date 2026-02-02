import Link from 'next/link'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'

export const metadata = {
  title: 'Holistic health | Wild & Well',
  description: 'Holistic health: daily habits, whole-body fundamentals, and practical guides on sleep, movement, and a healthier home.',
}

function MiniCard({ title, desc, href, tag, image }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
            <img src={image || '/images/cards/neutral.svg'} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-zinc-600">{desc}</p>
          </div>
        </div>
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{tag}</span>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

export default function Page() {
  const faqs = [
    {
      q: 'What does “holistic health” mean here?',
      a: 'A whole-system approach: sleep, movement, nutrition, stress, environment, and habits. It is not one product or one protocol — it is the basics repeated consistently.',
    },
    {
      q: 'Where should I start if everything feels overwhelming?',
      a: 'Pick one lever with the best “effort to impact” ratio: consistent bedtime/wake time, morning light, a daily walk, or one low-tox swap you will actually maintain.',
    },
    {
      q: 'Do I need supplements to be “holistic”?',
      a: 'No. Supplements are optional. For many people, sleep routine, protein, fibre, hydration, and daily movement have a larger impact than adding products.',
    },
    {
      q: 'How do I avoid doing too many changes at once?',
      a: 'Use a 2–4 week trial window: change one thing, track a simple outcome, then decide whether to keep it before adding another change.',
    },
    {
      q: 'Is a low-tox home the same as “chemical-free”?',
      a: 'No. “Chemical-free” is not meaningful. The practical goal is reducing avoidable exposures (fragrance, harsh irritants, unnecessary additives) while keeping home hygiene sensible.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Holistic health</h1>
        <p className="mt-3 text-zinc-700">
          Whole-body fundamentals: sleep, movement, nutrition, and a healthier home — with practical guides you can apply without adding complexity.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics">Browse topics</Link>
          <Link className="btn-secondary" href="/blog">Read Wellness Insights</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#guides">Guides</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'High-impact basics',
            bullets: [
              'Consistent sleep/wake time and a cool, dark bedroom.',
              'Daily movement: walking + basic strength 2–3×/week.',
              'Protein + fibre with most meals; hydration that is easy to maintain.',
            ],
          },
          {
            title: 'Simple method',
            bullets: [
              'Pick one change for 2–4 weeks.',
              'Track one outcome (sleep onset, energy, steps, digestion).',
              'Keep what helps; drop what doesn’t.',
            ],
          },
          {
            title: 'Home environment',
            bullets: [
              'Reduce fragrance exposure if you are sensitive.',
              'Ventilate and control damp where possible.',
              'Use the simplest cleaning products that do the job.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="guides">
        <h2 className="section-title">Start with these guides</h2>
        <p className="section-subtitle">Cornerstone reading and practical next steps.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <MiniCard
            image="/images/cards/sleep.svg"
            title="Sleep better naturally"
            desc="A simple, practical sleep guide: timing, light, temperature, routines."
            href="/blog/sleep-naturally-simple-guide"
            tag="Sleep"
          />
          <MiniCard
            image="/images/cards/air-purifier.svg"
            title="Healthy air at home"
            desc="Ventilation, damp basics, filtration, and common mistakes."
            href="/blog/healthy-air-at-home"
            tag="Home"
          />
          <MiniCard
            image="/images/cards/bands.svg"
            title="Home strength basics"
            desc="Simple strength principles and a plan you can repeat."
            href="/blog/home-strength-basics-busy-people"
            tag="Movement"
          />
          <MiniCard
            image="/images/cards/neutral.svg"
            title="Fibre & gut health (practical)"
            desc="Simple food-first steps and what tends to help most."
            href="/blog/fibre-gut-health-practical-guide"
            tag="Nutrition"
          />
          <MiniCard
            image="/images/cards/laundry.svg"
            title="Non-toxic cleaning starter"
            desc="A sensible starter approach for laundry and cleaning swaps."
            href="/blog/non-toxic-cleaning-starter"
            tag="Cleaning"
          />
          <MiniCard
            image="/images/cards/neutral.svg"
            title="Natural remedies"
            desc="Herbs and supplement pages with label cues and shortlists."
            href="/natural-remedies"
            tag="Remedies"
          />
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
