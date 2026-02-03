import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Stretches & mobility — a simple daily routine | Wild & Well',
  description:
    'Mobility guide: what to do for desk bodies, how to build a 10-minute routine, and optional gear for comfort and assistance.',
}

export default function Page() {
  const faqs = [
    {
      q: 'Stretching vs mobility: what’s the difference?',
      a: 'Stretching is usually about lengthening a muscle in a position. Mobility is the ability to control useful joint range. Good mobility work often includes light strength and control, not just long holds.',
    },
    {
      q: 'How often should I do this?',
      a: 'Most people do well with 5–10 minutes on most days. Consistency matters more than doing long sessions occasionally.',
    },
    {
      q: 'Is discomfort normal?',
      a: 'Mild discomfort can be normal. Sharp pain, tingling, numbness, or joint pain are signs to stop and reassess the position or intensity.',
    },
    {
      q: 'Should I stretch before lifting or running?',
      a: 'A short warm-up with gentle movement and a few controlled reps usually works better than long static holds immediately before hard effort. Save longer holds for after training or separate sessions.',
    },
    {
      q: 'What areas matter most for desk work?',
      a: 'Hips (flexors), upper back (T-spine), shoulders, and ankles are common limitations for people who sit a lot. A simple routine that touches each tends to work well.',
    },
    {
      q: 'Do I need equipment?',
      a: 'No. A mat helps with comfort and grip. Bands or a strap can make certain positions easier, but they are optional.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Movement</p>
        <h1 className="mt-2 text-4xl font-bold">Stretches &amp; mobility</h1>
        <p className="mt-3 text-zinc-700">
          Mobility is the ability to move joints through useful ranges of motion. Short, regular mobility sessions can reduce stiffness and make walking, training, and daily movement more comfortable.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/movement">Back to Movement</Link>
          <Link className="btn-secondary" href="/blog/mobility-for-desk-workers">Desk mobility article</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#routine">Routine</a>
          <a className="chip" href="#setup">Setup</a>
          <a className="chip" href="#gear">Gear</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'Start here',
            bullets: [
              'Do 5–10 minutes most days rather than long sessions occasionally.',
              'Breathe slowly; don’t force range.',
              'Touch hips, upper back (T‑spine), ankles, and shoulders.',
            ],
          },
          {
            title: '10‑minute routine',
            bullets: [
              'Neck + upper back: gentle rotations, 60s each direction.',
              'T‑spine: open‑book rotations, 6/side.',
              'Hip flexors: couch stretch or lunge hold, 60s/side.',
              'Ankles: knee‑to‑wall rocks, 10/side.',
              'Hamstrings: relaxed hinge + breathing, 60s.',
            ],
          },
          {
            title: 'Avoid',
            bullets: [
              'Sharp pain, numbness, or tingling.',
              'Holding your breath.',
              'Only stretching one area and ignoring the rest of the chain.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="routine">
        <h2 className="section-title">The 10‑minute daily routine</h2>
        <p className="section-subtitle">A simple sequence for stiff hips, tight backs, and desk shoulders.</p>
        <div className="mt-4 max-w-3xl text-sm text-zinc-700 space-y-3">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Neck + upper back</strong>: gentle rotations, 60s each direction.</li>
            <li><strong>T‑spine</strong>: open‑book rotations, 6/side.</li>
            <li><strong>Hip flexors</strong>: couch stretch or lunge hold, 60s/side.</li>
            <li><strong>Ankles</strong>: knee‑to‑wall rocks, 10/side.</li>
            <li><strong>Hamstrings</strong>: relaxed hinge + breathing, 60s.</li>
          </ol>
          <p className="text-xs text-zinc-500">
            General information only. If you have injuries or persistent pain, consider guidance from a qualified professional.
          </p>
        </div>
      </section>

      <section className="mt-14" id="setup">
        <h2 className="section-title">Routine setup</h2>
        <p className="section-subtitle">Small choices that make the routine easier to repeat.</p>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Short, frequent sessions are easier to maintain than long sessions. Leave your mat where you can see it and pair the routine with something you already do.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>After a walk</strong> (your body is warm).</li>
            <li><strong>After a shower</strong> (easy habit pairing).</li>
            <li><strong>After desk work</strong> (set a 10‑minute timer).</li>
          </ul>
        </div>
      </section>

      <section className="mt-14" id="gear">
        <h2 className="section-title">Gear (optional)</h2>
        <p className="section-subtitle">Comfort and gentle assistance for floor work.</p>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          You can do mobility with zero equipment. These are the items that improve comfort, grip, or positioning.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Yoga mat"
            badge="Foundation"
            description="Comfort + grip makes mobility work more enjoyable."
            href="/best-yoga-mats-grip-comfort"
            bullets={['Non-slip matters most', 'Choose a thickness you like', 'Leave it out where you’ll use it']}
          />
          <ProductPick
            title="Resistance bands"
            badge="Assist"
            description="Great for shoulder mobility, activation, and gentle strength."
            href="/best-resistance-bands-home-workouts"
            bullets={['A small kit covers most needs', 'Useful for rehab basics', 'Store it with your mat']}
          />
          <ProductPick
            title="Foam roller & recovery tools"
            badge="Recovery"
            description="Helpful when hips/back feel tight after long days."
            href="/best-foam-rollers-recovery-tools"
            bullets={['Use gently at first', 'Focus on breathing', '10 minutes is plenty']}
          />
          <ProductPick
            title="Stretch strap"
            badge="Simple"
            description="Makes hamstrings and shoulder work easier without forcing range."
            href={amazonSearchUrl('stretch strap yoga strap')}
            bullets={['Avoid yanking into pain', 'Slow breathing', 'Beginner friendly']}
          />
          <ProductPick
            title="Knee pad"
            badge="Comfort"
            description="A cheap comfort upgrade for floor work so you actually do it."
            href={amazonSearchUrl('knee pad for floor exercises')}
            bullets={['Useful for planks too', 'Makes kneeling work tolerable']}
          />
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
