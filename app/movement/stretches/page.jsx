import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Stretches & mobility — a simple daily routine | Wild & Well',
  description:
    'Mobility guide: what to do for desk bodies, how to build a 10-minute routine, and optional gear for comfort and assistance.',
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
        <h1 className="mt-2 text-4xl font-bold">Stretches &amp; mobility</h1>
        <p className="mt-3 text-zinc-700">
          Mobility isn’t about complicated routines — it’s about keeping your joints moving well enough that walking, strength training, and daily life feel easier.
          The goal is a small routine you can repeat, not “perfect flexibility”.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/movement">Back to Movement</Link>
          <Link className="btn-secondary" href="/blog/mobility-for-desk-workers">Desk mobility article</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <Card title="Start here">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Do 10 minutes</strong> most days instead of 45 minutes occasionally.</li>
            <li><strong>Breathe slowly</strong> — it reduces tension faster than forcing range.</li>
            <li><strong>Cover the basics</strong>: hips, upper back (T‑spine), ankles, shoulders.</li>
          </ul>
        </Card>

        <Card title="The 10‑minute daily routine">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Neck + upper back</strong>: gentle rotations, 60s each direction.</li>
            <li><strong>T‑spine</strong>: open‑book rotations, 6/side.</li>
            <li><strong>Hip flexors</strong>: couch stretch or lunge hold, 60s/side.</li>
            <li><strong>Ankles</strong>: knee‑to‑wall rocks, 10/side.</li>
            <li><strong>Hamstrings</strong>: relaxed hinge + breathing, 60s.</li>
          </ol>
        </Card>

        <Card title="Avoid">
          <ul className="list-disc pl-6 space-y-2">
            <li>Pushing into sharp pain (discomfort is okay, pain is not).</li>
            <li>Holding your breath — it usually makes tightness worse.</li>
            <li>Only stretching one area while ignoring hips/ankles/upper back.</li>
          </ul>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Routine setup</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Short, frequent sessions are easier to maintain than long sessions. Leave your mat where you can see it and pair the routine with something you already do.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>After a walk</strong> (your body is warm).</li>
            <li><strong>After a shower</strong> (easy habit pairing).</li>
            <li><strong>After desk work</strong> (set a 10‑minute timer).</li>
          </ul>
          <p className="text-xs text-zinc-500">
            General information only. If you have injuries or persistent pain, consider guidance from a qualified professional.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Gear that helps</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          You can do mobility with zero equipment. These are the items that make consistency easier (comfort, grip, and gentle assistance).
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

      <p className="mt-12 text-xs text-zinc-500">Some links may earn us a commission at no extra cost to you.</p>
    </main>
  )
}
