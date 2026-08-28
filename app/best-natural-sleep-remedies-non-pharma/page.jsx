import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Natural Sleep Support UK — Non-Pharma Basics First',
  description: 'A calm, non-pharma sleep guide that prioritises light, noise, temperature, caffeine timing and routine before products or supplements.',
}

const STEPS = [
  { title: '1. Lock in wake time', text: 'A reasonably consistent wake time and morning daylight help anchor sleep timing before you spend money on sleep products.' },
  { title: '2. Make the room darker and quieter', text: 'Blackout, reducing unwanted light and addressing disruptive noise are usually higher-priority than adding another supplement.' },
  { title: '3. Get temperature and bedding right', text: 'If you regularly sleep too warm or too cold, solve that comfort problem directly instead of treating it as a general sleep-product problem.' },
  { title: '4. Review caffeine and late stimulation', text: 'Late caffeine, alcohol, screens and mentally demanding work can all undermine an otherwise sensible bedtime routine.' },
  { title: '5. Add one optional support only if needed', text: 'If the foundations are already good, compare one targeted product or support at a time so you can judge whether it actually helps.' },
]

export default function Page() {
  const slug = 'best-natural-sleep-remedies-non-pharma'
  const edu = getMoneyPageEdu(slug)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Natural sleep support UK: non-pharma basics first',
    datePublished: '2026-01-24',
    dateModified: '2026-08-28',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Sleep foundations</p>
          <h1 className="mt-2 text-4xl font-bold">Natural sleep support: fix the environment before buying remedies</h1>
          <p className="mt-3 text-zinc-700">This page used to mix useful sleep foundations with a generic shopping list. The better order is simpler: timing, light, noise, temperature and routine first; products only when they solve a specific remaining problem.</p>
        </div>
        <img src="/images/photography/sleep.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep fundamentals" insightHref="/blog/caffeine-and-sleep-timing" insightLabel="Caffeine & sleep timing" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/sleep-recovery-shortlist-uk">Compare sleep & recovery options</Link>
            <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Cornerstone sleep guide</Link>
            <Link className="btn-secondary" href="/topics/recovery">Recovery basics</Link>
          </div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">A sensible order of operations</h2>
        <div className="mt-5 space-y-4">
          {STEPS.map((step) => <div key={step.title} className="card"><h3 className="font-semibold">{step.title}</h3><p className="mt-2 text-sm text-zinc-700">{step.text}</p></div>)}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">When a product may be reasonable</p>
          <h2 className="mt-2 text-2xl font-semibold">Buy for the specific sleep problem</h2>
          <p className="mt-2 text-zinc-700">A worn mattress, unsuitable pillow, overly warm duvet or disruptive room conditions are different problems. The maintained Sleep & Recovery shortlist groups current partner options by those use cases instead of repeating a general marketplace catalogue here.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/sleep-recovery-shortlist-uk">Open sleep & recovery shortlist</Link>
            <Link className="btn-secondary" href="/sleep-recovery-shortlist-uk#mattress-support">Mattress support</Link>
            <Link className="btn-secondary" href="/sleep-recovery-shortlist-uk#bedding-temperature">Bedding temperature</Link>
          </div>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">A note on supplements</h2>
        <p className="mt-3 text-zinc-700">Do not treat a supplement as a substitute for sleep opportunity, routine or a suitable bedroom. If you take medication, are pregnant, have a health condition or have persistent insomnia, discuss supplements and ongoing sleep problems with an appropriate clinician rather than stacking products yourself.</p>
      </section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">This page is informational and not medical advice. Some links are affiliate links; Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
