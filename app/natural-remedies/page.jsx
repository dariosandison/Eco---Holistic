import Link from 'next/link'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'

export const metadata = {
  title: 'Natural remedies | Wild & Well',
  description:
    'Evidence-informed natural remedies and supplement explainers, with simple next steps and shortlists when relevant.',
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
      q: 'Are natural remedies always safe because they are “natural”?',
      a: 'No. Herbs and supplements can be potent and can interact with medications or medical conditions. “Natural” is not a safety guarantee.',
    },
    {
      q: 'How should I choose what to try first?',
      a: 'Start with low-risk basics (sleep routine, light exposure, movement, hydration), then add one targeted change at a time. Track a simple outcome (sleep onset, weekly stress score, bowel regularity) rather than trying many things at once.',
    },
    {
      q: 'How long should I trial an herb or supplement?',
      a: 'A practical approach is 2–4 weeks for one change (if it is safe for you), while keeping other variables steady. Stop if you feel worse or develop new symptoms.',
    },
    {
      q: 'Do I need third‑party testing?',
      a: 'For supplements, independent testing can reduce risk of contamination or mislabeling. Look for specific programme or lab names rather than vague claims.',
    },
    {
      q: 'Can I take multiple products together?',
      a: 'It is easier to learn what works if you add one change at a time. If you take medication, are pregnant, or manage a condition, check with a qualified clinician before combining products.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Natural remedies</h1>
        <p className="mt-3 text-zinc-700">
          Practical pages on herbs, supplements, and non‑pharmaceutical options — with clear label cues and simple ways to trial changes.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/holistic-health">Holistic health</Link>
          <Link className="btn-secondary" href="/nutrition/supplements">Supplements guide</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#pages">Pages</a>
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
              'Use lifestyle basics first: sleep timing, morning light, movement, hydration.',
              'Make one change at a time and track a simple outcome.',
              'Prefer products with clear dosing and simple ingredient lists.',
            ],
          },
          {
            title: 'Quality signals',
            bullets: [
              'Specific testing details (programme/lab name).',
              'Transparent dosing and ingredients.',
              'Avoid “proprietary blends” where amounts are hidden.',
            ],
          },
          {
            title: 'Safety',
            bullets: [
              'Check interactions if you take medication or manage a condition.',
              'Avoid stacking many new products at once.',
              'Stop if you feel worse or develop new symptoms.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="pages">
        <h2 className="section-title">Pages</h2>
        <p className="section-subtitle">Shortlists and explainers for common goals.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <MiniCard
            image="/images/cards/sleep.svg"
            title="Natural sleep support"
            desc="Non‑pharmaceutical options, routines, and shortlists."
            href="/best-natural-sleep-remedies-non-pharma"
            tag="Sleep"
          />
          <MiniCard
            image="/images/cards/neutral.svg"
            title="Herbal support for stress & anxiety"
            desc="Common herbs, what to look for on labels, and trade‑offs."
            href="/best-herbal-remedies-for-stress-anxiety"
            tag="Stress"
          />
          <MiniCard
            image="/images/cards/neutral.svg"
            title="Immune support"
            desc="Simple options and evidence‑aligned basics."
            href="/best-natural-immune-support-remedies"
            tag="Immune"
          />
          <MiniCard
            image="/images/cards/neutral.svg"
            title="Supplements: beginner shortlist"
            desc="Low‑additive options and label cues for beginners."
            href="/best-organic-supplements-beginners"
            tag="Supplements"
          />
          <MiniCard
            image="/images/cards/neutral.svg"
            title="Adaptogens (beginner guide)"
            desc="What they are, what they are not, and how to choose."
            href="/best-adaptogens-beginners-guide"
            tag="Adaptogens"
          />
          <MiniCard
            image="/images/cards/neutral.svg"
            title="Gut health supplements"
            desc="Beginner shortlist and practical label checks."
            href="/best-gut-health-supplements-beginners"
            tag="Gut"
          />
        </div>

        <p className="mt-6 text-xs text-zinc-500 max-w-3xl">
          General information only. If you are pregnant, taking medication, or managing a condition, check with a qualified clinician before using herbs or supplements.
        </p>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
