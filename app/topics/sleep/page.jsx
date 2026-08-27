import Link from 'next/link'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Sleep Topics — Wild & Well',
  description: 'Sleep and recovery basics: light, timing, temperature and comfort first, then a focused UK buying route when equipment may genuinely help.',
}

export default function Page() {
  const edu = getTopicEdu('sleep')
  const faqs = [
    { q: 'What is the single most important sleep habit?', a: 'A consistent wake time can help stabilise sleep timing. Morning light soon after waking can also help anchor the rhythm.' },
    { q: 'How long before bed should I stop caffeine?', a: 'Sensitivity varies. An earlier cut-off is worth testing if falling asleep is difficult; keep the rest of your routine stable while you assess the change.' },
    { q: 'Does bedroom temperature matter?', a: 'Yes. Many people sleep more comfortably in a cooler room, but personal comfort, bedding and season all matter.' },
    { q: 'Do I need sleep supplements?', a: 'Not necessarily. Routine, light, timing, comfort and temperature are better starting points. If considering supplements, avoid stacking several new products at once and check suitability where relevant.' },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Habits before hardware</p>
        <h1 className="mt-2 text-4xl font-bold">Sleep &amp; Recovery</h1>
        <p className="mt-3 text-zinc-700">Start with light, timing, temperature and a repeatable wind-down routine. If those basics are in place, identify the specific comfort or recovery problem before buying anything.</p>
        <img src="/images/photography/sleep.jpg" alt="" className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm" loading="lazy" decoding="async" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/sleep-recovery-shortlist-uk">Choose a sleep/recovery route</Link>
          <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Cornerstone guide</Link>
          <Link className="btn-secondary" href="/blog/morning-light-sleep-10-minute-plan">Morning light plan</Link>
          <Link className="btn-secondary" href="/best-natural-sleep-support">Sleep support guide</Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2"><a className="chip" href="#understand">Understand</a><a className="chip" href="#start">Start</a><a className="chip" href="#options">Choose</a><a className="chip" href="#faqs">FAQs</a></div>
      </header>

      <TopicEducationDeepDive edu={edu} />
      <div id="start" />
      <TopicAtAGlance items={[
        { title: '7-day basics', bullets: ['Keep wake time reasonably consistent.', 'Get useful light exposure earlier in the day.', 'Test an earlier caffeine cut-off if needed.', 'Make the room dark, comfortable and appropriately cool.'] },
        { title: 'Buy only for a clear problem', bullets: ['Mattress: support, comfort or temperature.', 'Pillow/bedding: neck support, pressure or heat.', 'Temperature: bedding and bedroom comfort.', 'Recovery: simple tools that fit an existing routine.'] },
        { title: 'Common mistakes', bullets: ['Buying supplements before fixing the routine.', 'Changing several things at once.', 'Ignoring trials, returns and whether a high-ticket product actually suits you.'] },
      ]} />

      <section className="mt-14" id="options">
        <div className="max-w-3xl"><h2 className="section-title">Choose by the problem you are solving</h2><p className="section-subtitle">The upgraded shortlist keeps higher-ticket purchases and optional add-ons behind a clear reason to buy.</p></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link href="/sleep-recovery-shortlist-uk#mattresses" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Mattress support</h3><p className="mt-2 text-sm text-zinc-600">For persistent comfort, support or temperature issues where a mattress change is genuinely justified.</p><p className="mt-3 text-sm font-semibold">Compare mattresses →</p></Link>
          <Link href="/sleep-recovery-shortlist-uk#pillows-bedding" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Pillows & bedding</h3><p className="mt-2 text-sm text-zinc-600">For neck support, pressure, light control or bedding comfort.</p><p className="mt-3 text-sm font-semibold">Compare bedding →</p></Link>
          <Link href="/sleep-recovery-shortlist-uk#temperature-comfort" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Temperature & comfort</h3><p className="mt-2 text-sm text-zinc-600">For people whose main issue is running too hot, too cold or struggling with bedroom comfort.</p><p className="mt-3 text-sm font-semibold">Compare comfort options →</p></Link>
          <Link href="/sleep-recovery-shortlist-uk#recovery-support" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Recovery support</h3><p className="mt-2 text-sm text-zinc-600">Optional tools and products that complement — rather than replace — the basics.</p><p className="mt-3 text-sm font-semibold">Compare recovery options →</p></Link>
        </div>
        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><h3 className="text-xl font-semibold">Considering a mattress or other expensive upgrade?</h3><p className="mt-2 text-sm text-zinc-700">Check the trial period, returns process, delivery terms and whether the product addresses the problem you actually have before committing.</p><div className="mt-4"><Link className="btn-primary" href="/sleep-recovery-shortlist-uk">Open sleep & recovery shortlist</Link></div></div>
      </section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">General information only. Some links are affiliate links; if you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
