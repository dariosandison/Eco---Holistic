import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Hypertrophy — build muscle with simple training | Wild & Well',
  description:
    'Hypertrophy guide: progressive overload, simple weekly plans, and beginner-friendly home equipment options.',
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 text-sm text-zinc-700 space-y-2">{children}</div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Movement</p>
        <h1 className="mt-2 text-4xl font-bold">Hypertrophy (building muscle)</h1>
        <p className="mt-3 text-zinc-700">
          Hypertrophy means building muscle over time. The main drivers are consistent training, progressive overload, enough protein, and sleep. A simple weekly template and a clear progression rule are often enough for steady progress.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/movement">Back to Movement</Link>
          <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Home strength basics</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <Card title="Start here">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Train 2–4 days/week</strong> consistently.</li>
            <li><strong>Focus on big patterns</strong>: squat/hinge, push, pull, carry.</li>
            <li><strong>Add a little over time</strong>: reps, weight, sets, or better form.</li>
          </ul>
        </Card>

        <Card title="Progressive overload (the whole game)">
          <p>
            Muscle grows when you ask it to do slightly more than it’s used to — then recover.
            The simplest progression is “same exercise, add 1 rep each week until the top of the range, then increase weight and drop reps back down”.
          </p>
          <p className="text-xs text-zinc-500">Keep 1–3 reps “in the tank” on most sets. Save true failure for occasional safe movements.</p>
        </Card>

        <Card title="Avoid">
          <ul className="list-disc pl-6 space-y-2">
            <li>Changing programs every 2 weeks (you never progress).</li>
            <li>Going to failure on everything (fatigue grows faster than strength).</li>
            <li>Ignoring recovery: sleep, steps, and enough food.</li>
          </ul>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">A simple 3‑day plan (beginner friendly)</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Do this for 6–8 weeks before changing anything. Pick weights that feel challenging but controlled.
          </p>
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
              <li>Vertical pull (assisted pull-up / lat pull band): 3×6–12</li>
              <li>Core (dead bug / plank): 3×30–60s</li>
            </ul>
          </div>
          <p className="text-xs text-zinc-500">
            General information only. If you have injuries or persistent pain, get personalised advice from a qualified professional.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Equipment (optional)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Start with bodyweight if you want. If you do buy gear, choose items that unlock progression and save space.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Resistance bands"
            badge="Best starter"
            description="Cheap, versatile, great for rows, assistance, and rehab basics."
            href="/best-resistance-bands-home-workouts"
            bullets={['Small kit covers most needs', 'Useful alongside weights later', 'Easy to store']}
          />
          <ProductPick
            title="Adjustable dumbbells (browse)"
            badge="Progress"
            description="The most space‑efficient way to add load at home."
            href={amazonSearchUrl('adjustable dumbbells set')}
            bullets={['Space efficient', 'Progressive loading', 'Check max weight before buying']}
          />
          <ProductPick
            title="Pull‑up bar (doorframe)"
            badge="Pull"
            description="A simple way to train pulling strength at home."
            href={amazonSearchUrl('doorway pull up bar no screws')}
            bullets={['Check doorway fit', 'Use controlled reps', 'Bands can assist early on']}
          />
          <ProductPick
            title="Dip bars / station (browse)"
            badge="Push"
            description="Great for pressing strength if you have space."
            href={amazonSearchUrl('dip bars station')}
            bullets={['Space needed', 'Start with support holds', 'Progress slowly']}
          />
          <ProductPick
            title="Foam roller & recovery tools"
            badge="Recovery"
            description="Helps you stay consistent by reducing stiffness."
            href="/best-foam-rollers-recovery-tools"
            bullets={['Use gently', 'Pair with breathing', '10 minutes is plenty']}
          />
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links.</p>
    </main>
  )
}
