import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Fitness Trackers for Beginners UK — What Matters',
  description: 'A beginner-friendly UK fitness tracker guide focused on useful metrics, battery, comfort and app fit, with current movement options kept in one shortlist.',
}

const METRICS = [
  { title: 'Steps and movement', text: 'Useful when a visible daily target helps you stay consistent. Treat the number as a trend, not a precise medical measurement.' },
  { title: 'Training consistency', text: 'Workout history can be helpful if you use it to spot patterns and keep a routine rather than chase every metric.' },
  { title: 'Sleep trends', text: 'Wearables can show patterns, but sleep-stage estimates are not a diagnosis and should not replace how you actually feel.' },
  { title: 'Heart-rate trends', text: 'Useful for general training feedback. Accuracy varies by device, fit and activity, particularly during fast or irregular movement.' },
]

export default function Page() {
  const slug = 'best-fitness-trackers-beginners-uk'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Fitness trackers for beginners UK: what matters', datePublished: '2026-01-27', dateModified: '2026-08-28' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Movement buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Fitness trackers for beginners: buy for one useful behaviour</h1>
          <p className="mt-3 text-zinc-700">A tracker is optional. If it helps you walk more, train consistently or notice longer-term trends, it can be useful. If it only gives you more numbers to worry about, it has missed the point.</p>
        </div>
        <img src="/images/photography/movement.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/movement" topicLabel="Movement fundamentals" insightHref="/blog/walking-basics-weekly-plan" insightLabel="Walking plan" />
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/movement/movement-shortlist#tracking-feedback">Compare tracking options</Link><Link className="btn-secondary" href="/topics/movement">Movement basics</Link><Link className="btn-secondary" href="/topics/recovery">Recovery basics</Link></div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">The metrics most beginners can actually use</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">{METRICS.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-zinc-700">{item.text}</p></div>)}</div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">What to check before buying</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-zinc-700"><li>Battery life that fits how often you are willing to charge it.</li><li>Comfort for the amount of time you intend to wear it.</li><li>Compatibility with your phone and preferred health or training apps.</li><li>Whether useful features require an ongoing subscription.</li><li>A returns policy you are comfortable with if fit or usability is poor.</li></ul>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Current buying route</p><h2 className="mt-2 text-2xl font-semibold">One maintained shortlist, not repeated marketplace lists</h2><p className="mt-2 text-zinc-700">The previous version repeated the same tracker brands in a quick comparison, a top-three section and a full Amazon list. Current partner options now live in the Movement shortlist, while this page keeps the decision criteria.</p><div className="mt-5"><Link className="btn-primary" href="/movement/movement-shortlist#tracking-feedback">Open tracking & feedback options</Link></div></div>
      </section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
