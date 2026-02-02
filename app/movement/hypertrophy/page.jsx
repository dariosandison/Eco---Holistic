import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Hypertrophy — build muscle with simple training',
  description:
    'Hypertrophy guide: progressive overload, simple weekly plans, and beginner-friendly home equipment options.',
}

export default function Page() {
  const faqs = [
    {
      q: 'What does hypertrophy mean in practice?',
      a: 'It means gradually increasing the amount of work your muscles can do, then recovering. Over time that usually shows up as more reps with the same weight, more weight for the same reps, or more total sets performed with good form.',
    },
    {
      q: 'How many days per week do I need?',
      a: 'For most beginners, 2–4 sessions per week is enough. Consistency matters more than the exact split. If you can recover and progress, you are doing enough.',
    },
    {
      q: 'Do I need to train to failure?',
      a: 'Not on every set. A practical rule is to finish most sets with 1–3 reps in reserve, and save true failure for occasional safe movements (machines, isolation work, or bodyweight variations you can control).',
    },
    {
      q: 'How long should I run the same plan?',
      a: 'Long enough to see progression. A simple approach is 6–8 weeks on the same core exercises. Change a plan when progress stalls for several weeks despite good sleep, food, and training quality.',
    },
    {
      q: 'Is soreness required for growth?',
      a: 'No. Soreness can happen when an exercise is new or volume jumps too quickly, but it is not a reliable sign of progress. Track performance instead: reps, load, and control.',
    },
    {
      q: 'What matters most for recovery?',
      a: 'Sleep, enough calories for your goal, adequate protein, and not doing every session as a maximum-effort test. If you feel run down, reduce volume first (fewer sets) before reducing frequency.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Movement</p>
        <h1 className="mt-2 text-4xl font-bold">Hypertrophy (building muscle)</h1>
        <p className="mt-3 text-zinc-700">
          Hypertrophy is muscle growth over time. Progress comes from progressive overload, enough weekly training volume, and recovery.
          A simple plan you can repeat and track consistently is usually enough for steady progress.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/movement">Back to Movement</Link>
          <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Home strength basics</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#plan">Plan</a>
          <a className="chip" href="#progression">Progression</a>
          <a className="chip" href="#recovery">Recovery</a>
          <a className="chip" href="#equipment">Equipment</a>
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
              'Train 2–4 days/week and keep the schedule consistent.',
              'Prioritise squat/hinge, push, pull, and carry patterns.',
              'Progress slowly: reps first, then load.',
            ],
          },
          {
            title: 'Progression rule',
            bullets: [
              'Pick a rep range (e.g., 8–12).',
              'Add 1 rep per set until you hit the top of the range.',
              'Increase weight and return to the bottom of the range.',
            ],
          },
          {
            title: 'Avoid',
            bullets: [
              'Changing exercises weekly (you can’t track progress).',
              'Maxing out every session (fatigue builds fast).',
              'Jumping volume too quickly (soreness + missed sessions).',
            ],
          },
        ]}
      />

      <section className="mt-14" id="plan">
        <h2 className="section-title">A simple 3‑day plan (beginner friendly)</h2>
        <p className="section-subtitle">Three sessions per week, full-body emphasis, clear progression.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold">Day A</h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>Squat pattern (goblet squat): 3×8–12</li>
              <li>Push (press-up or dumbbell press): 3×6–12</li>
              <li>Pull (row / band row): 3×8–12</li>
              <li>Carry (farmer carry): 3×30–60s</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Day B</h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>Hinge (Romanian deadlift): 3×8–12</li>
              <li>Vertical push (pike press / overhead press): 3×6–12</li>
              <li>Vertical pull (assisted pull-up / band pulldown): 3×6–12</li>
              <li>Core (dead bug / plank): 3×30–60s</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 max-w-3xl text-sm text-zinc-700 space-y-2">
          <p>
            Alternate A and B across the week (e.g., A/B/A one week, B/A/B the next). Keep the core exercises the same for 6–8 weeks so you can track progress.
          </p>
          <p className="text-xs text-zinc-500">
            General information only. If you have injuries or persistent pain, get personalised advice from a qualified professional.
          </p>
        </div>
      </section>

      <section className="mt-14" id="progression">
        <h2 className="section-title">Progression you can actually follow</h2>
        <p className="section-subtitle">A simple way to add work without guessing.</p>
        <div className="mt-4 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Choose a rep range for each movement (for example 8–12 reps). Use the same load and aim to add 1 rep per set over time.
            When you can hit the top of the range on every set with good form, add a small amount of weight and repeat.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Keep most sets controlled.</strong> Stop with 1–3 reps in reserve on most sets.</li>
            <li><strong>Add sets last.</strong> If you stall, add 1 set to the main lift (not 5 extra exercises).</li>
            <li><strong>Deload when needed.</strong> If you feel run down for a full week, reduce sets by ~30–50% for 7 days.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14" id="recovery">
        <h2 className="section-title">Recovery basics</h2>
        <p className="section-subtitle">What supports progress between sessions.</p>
        <div className="mt-4 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Recovery is not passive — it’s the conditions that allow you to repeat quality training. If you’re consistently getting weaker, sore for days, or skipping sessions, reduce training volume (fewer sets) before changing everything else.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sleep:</strong> aim for a stable bedtime and enough total hours.</li>
            <li><strong>Protein:</strong> spread protein across meals; total daily intake matters more than timing.</li>
            <li><strong>Steps:</strong> light daily walking improves recovery for many people.</li>
            <li><strong>Fatigue management:</strong> not every session should feel maximal.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14" id="equipment">
        <h2 className="section-title">Equipment (optional)</h2>
        <p className="section-subtitle">Items that make progression easier at home.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Resistance bands"
            badge="Best starter"
            description="Versatile for rows, assistance, and basic shoulder work."
            href="/best-resistance-bands-home-workouts"
            bullets={['Small kit covers most needs', 'Useful alongside weights later', 'Easy to store']}
          />
          <ProductPick
            title="Adjustable dumbbells (browse)"
            badge="Progress"
            description="A space‑efficient way to add load at home."
            href={amazonSearchUrl('adjustable dumbbells set')}
            bullets={['Space efficient', 'Progressive loading', 'Check max weight before buying']}
          />
          <ProductPick
            title="Pull‑up bar (doorframe)"
            badge="Pull"
            description="Simple pulling strength at home (use bands to assist early on)."
            href={amazonSearchUrl('doorway pull up bar no screws')}
            bullets={['Check doorway fit', 'Controlled reps', 'Bands can assist early on']}
          />
          <ProductPick
            title="Dip bars / station (browse)"
            badge="Push"
            description="Good pressing strength if you have space."
            href={amazonSearchUrl('dip bars station')}
            bullets={['Space needed', 'Start with support holds', 'Progress slowly']}
          />
          <ProductPick
            title="Foam roller & recovery tools"
            badge="Recovery"
            description="A simple way to reduce stiffness so training stays consistent."
            href="/best-foam-rollers-recovery-tools"
            bullets={['Use gently', 'Pair with breathing', '10 minutes is plenty']}
          />
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
