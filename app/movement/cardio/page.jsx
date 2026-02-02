import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Cardio — build fitness with a simple progression | Wild & Well',
  description:
    'Cardio guide: build a base with walking, add gentle intervals, and choose optional gear that supports consistency.',
}

export default function Page() {
  const faqs = [
    {
      q: 'What counts as cardio?',
      a: 'Anything that raises your heart rate and breathing for long enough to train your aerobic system. Brisk walking, cycling, swimming, rowing, jogging, and hiking all count.',
    },
    {
      q: 'How hard should most sessions feel?',
      a: 'Easy. A practical check is “can you speak in full sentences?” Most sessions should be conversational. Hard sessions are useful, but they should be a small part of the week.',
    },
    {
      q: 'Do I need to run to get fitter?',
      a: 'No. Walking and cycling can build a strong base, especially for beginners. Running adds impact and tends to require a slower ramp. Choose the form you can repeat consistently.',
    },
    {
      q: 'When should I add intervals?',
      a: 'After you’ve built a base you can recover from (often 4–8 weeks of mostly easy sessions). Start with short, controlled intervals once per week and keep everything else easy.',
    },
    {
      q: 'Is a step goal useful?',
      a: 'Yes for many people. Steps are a simple way to increase total weekly activity. If your goal is fitness, also include a few dedicated sessions of sustained easy effort.',
    },
    {
      q: 'What if I get pain or unusual symptoms?',
      a: 'Stop and seek professional advice if you have chest pain, dizziness, fainting, or persistent joint pain. For mild niggles, reduce volume (time) and intensity first and progress more gradually.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-zinc-500">Movement</p>
        <h1 className="mt-2 text-4xl font-bold">Cardio (walking, running, and beyond)</h1>
        <p className="mt-3 text-zinc-700">
          Cardio improves fitness through consistent, mostly easy work. Build an easy base first (walking counts), then add a small amount of harder work if you want to progress.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/movement">Back to Movement</Link>
          <Link className="btn-secondary" href="/best-walking-shoes-daily-steps-uk">Walking shoes shortlist</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#progression">Progression</a>
          <a className="chip" href="#template">Template</a>
          <a className="chip" href="#intensity">Intensity</a>
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
              'Aim for 3 sessions/week before increasing intensity.',
              'Make most sessions easy enough to talk in full sentences.',
              'Increase time or days before adding intervals.',
            ],
          },
          {
            title: '3‑step progression',
            bullets: [
              'Weeks 1–4: 20–40 minutes easy, 3×/week.',
              'Weeks 5–8: add one longer session or an extra day.',
              'Then: add 1 interval day (short, controlled) if you want.',
            ],
          },
          {
            title: 'Avoid',
            bullets: [
              'Going “all hard” immediately (fatigue and niggles).',
              'Judging sessions by calories; track time and consistency instead.',
              'Big jumps in running volume (increase gradually).',
            ],
          },
        ]}
      />

      <section className="mt-14" id="progression">
        <h2 className="section-title">A simple progression</h2>
        <p className="section-subtitle">Build an aerobic base first; add harder work later.</p>
        <div className="mt-4 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            If you want a straightforward plan, start by making easy sessions normal. Easy sessions build the base that supports everything else: longer walks, quicker running, and better recovery.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Start with time</strong>: choose a duration you can repeat (20–40 minutes).</li>
            <li><strong>Add days or a longer session</strong> once the habit feels stable.</li>
            <li><strong>Add intervals</strong> only after you can recover from easy volume.</li>
          </ol>
        </div>
      </section>

      <section className="mt-14" id="template">
        <h2 className="section-title">Beginner weekly template</h2>
        <p className="section-subtitle">A default week you can repeat.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold">Week (example)</h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>Mon: 30 min easy walk (or cycle)</li>
              <li>Wed: 30 min easy + 5 min brisk finish</li>
              <li>Fri: 30–40 min easy cardio</li>
              <li>Optional Sat/Sun: longer easy session (45–75 min)</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">If you want intervals (later)</h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>Warm up 10 minutes easy</li>
              <li>6 × 30 seconds brisk / 90 seconds easy</li>
              <li>Cool down 10 minutes easy</li>
            </ul>
            <p className="mt-3 text-xs text-zinc-500">Keep the brisk efforts controlled (not sprinting).</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-zinc-500 max-w-3xl">
          General information only. If you have medical concerns or symptoms with exercise, seek professional advice.
        </p>
      </section>

      <section className="mt-14" id="intensity">
        <h2 className="section-title">Intensity: a practical check</h2>
        <p className="section-subtitle">You don’t need complex zones to start.</p>
        <div className="mt-4 max-w-3xl text-sm text-zinc-700 space-y-3">
          <p>
            Most sessions should be easy. If you can hold a conversation in full sentences, you’re in the right range for base building.
            If you can only speak a few words, you’re closer to interval intensity.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Easy:</strong> conversational pace (most of the week).</li>
            <li><strong>Brisk:</strong> breathing heavier but controlled (short portions).</li>
            <li><strong>Hard:</strong> short intervals (once weekly, later).</li>
          </ul>
        </div>
      </section>

      <section className="mt-14" id="gear">
        <h2 className="section-title">Gear (optional)</h2>
        <p className="section-subtitle">Comfort and convenience are the usual reasons to buy.</p>
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
            description="Steps and heart rate can help you keep sessions easy."
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
            description="Hydration is easier when the bottle is easy to carry and clean."
            href={amazonSearchUrl('stainless steel water bottle wide mouth')}
            bullets={['Dishwasher safe is a plus', 'Choose a size you’ll carry', 'Wide mouth is easier to clean']}
          />
          <ProductPick
            title="Activewear basics"
            badge="Comfort"
            description="Comfort-first basics: layers, socks, breathable tops."
            href="/best-activewear-basics-uk"
            bullets={['Prioritise comfort', 'Socks matter', 'Layers help with UK weather']}
          />
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
