import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Cardio — build fitness without burnout | Wild & Well',
  description:
    'Cardio guide: build a base with walking, add gentle intervals, and choose gear that supports consistency.',
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
        <h1 className="mt-2 text-4xl font-bold">Cardio (walking, running, and beyond)</h1>
        <p className="mt-3 text-zinc-700">
          Cardio works best when it’s sustainable. Start with a base you can repeat (walking counts), then add a small amount of harder work once you feel ready.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/movement">Back to Movement</Link>
          <Link className="btn-secondary" href="/best-walking-shoes-daily-steps-uk">Walking shoes shortlist</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <Card title="Start here">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consistency first:</strong> 3–5 sessions/week beats one heroic session.</li>
            <li><strong>Base first:</strong> build easy volume before hard intervals.</li>
            <li><strong>Low friction:</strong> pick the form you’ll actually do (walking, cycling, rowing, jogging).</li>
          </ul>
        </Card>

        <Card title="The simple 3‑step progression">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Weeks 1–4:</strong> easy cardio 20–40 min, 3×/week.</li>
            <li><strong>Weeks 5–8:</strong> add one longer session or extra day.</li>
            <li><strong>Then:</strong> add 1 interval day (short, controlled) if you want.</li>
          </ol>
          <p className="text-xs text-zinc-500">Keep most sessions easy enough to talk in full sentences.</p>
        </Card>

        <Card title="Avoid">
          <ul className="list-disc pl-6 space-y-2">
            <li>Going “all hard” immediately (burnout and niggles).</li>
            <li>Buying lots of gear before you’ve built the habit.</li>
            <li>Judging sessions by calories (use time + consistency instead).</li>
          </ul>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Beginner weekly template</h2>
        <div className="mt-3 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            If you want a plan that’s hard to mess up, use this. It’s intentionally simple.
          </p>
          <div className="card">
            <h3 className="text-lg font-semibold">Week (example)</h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>Mon: 30 min easy walk (or cycle)</li>
              <li>Wed: 30 min easy walk + 5 min brisk finish</li>
              <li>Fri: 30–40 min easy cardio</li>
              <li>Optional Sat/Sun: longer easy walk (45–75 min)</li>
            </ul>
          </div>
          <p className="text-xs text-zinc-500">
            General information only. If you have medical concerns or symptoms with exercise, seek professional advice.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Gear that supports consistency</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          You only need comfortable shoes and something to carry water. Everything else is optional.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Walking shoes"
            badge="Comfort"
            description="Comfort-first shoes make daily cardio easier to maintain."
            href="/best-walking-shoes-daily-steps-uk"
            bullets={['Fit matters more than brand', 'Rotate pairs if you walk a lot', 'Replace when cushioning is gone']}
          />
          <ProductPick
            title="Fitness tracker"
            badge="Feedback"
            description="Steps + heart rate can help motivation (you don’t need the fanciest model)."
            href="/best-fitness-trackers-beginners-uk"
            bullets={['Use trends, not perfection', 'Sleep + steps are usually enough', 'Set simple weekly targets']}
          />
          <ProductPick
            title="Running belt (or small bag)"
            badge="Convenience"
            description="Carry keys/phone without it being annoying."
            href={amazonSearchUrl('running belt phone keys')} 
            bullets={['Low bounce', 'Enough room for phone', 'Reflective is a plus']}
          />
          <ProductPick
            title="Reusable water bottle"
            badge="Habit"
            description="Hydration works best when the habit is frictionless."
            href={amazonSearchUrl('stainless steel water bottle wide mouth')}
            bullets={['Dishwasher safe is a plus', 'Choose a size you’ll carry', 'Wide mouth is easier to clean']}
          />
          <ProductPick
            title="Activewear basics"
            badge="Comfort"
            description="Comfort-first basics: layers, socks, breathable tops."
            href="/best-activewear-basics-uk"
            bullets={['Prioritise comfort', 'Socks matter more than you think', 'Layers help with UK weather']}
          />
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links may earn us a commission at no extra cost to you.</p>
    </main>
  )
}
