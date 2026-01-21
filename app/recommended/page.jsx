import Link from 'next/link'
import AmazonButton from '@/components/mdx/AmazonButton'

const PICKS = {
  starter: [
    {
      title: 'Low‑tox multi‑surface cleaner',
      badge: 'Starter pick',
      description: 'A simple, widely-available option to replace harsher sprays.',
      asin: 'B000000000',
      bullets: ['Good all‑rounder', 'Easy to find', 'Great first swap'],
    },
    {
      title: 'Gentle mineral sunscreen',
      badge: 'Sensitive skin',
      description: 'A mineral option that’s easy to work into an everyday routine.',
      asin: 'B000000001',
      bullets: ['Mineral-based', 'Everyday wear', 'Great for beginners'],
    },
    {
      title: 'Basic magnesium (glycinate) supplement',
      badge: 'Sleep routine',
      description: 'Commonly chosen form for evening wind‑down routines.',
      asin: 'B000000002',
      bullets: ['Gentler form', 'Simple dosing', 'Pairs well with habits'],
    },
  ],
  skincare: [
    {
      title: 'Low‑fragrance moisturiser',
      badge: 'Everyday',
      description: 'A calm, barrier-friendly option for most routines.',
      asin: 'B000000003',
      bullets: ['Simple ingredients', 'Daily use', 'Good for dry skin'],
    },
  ],
  sleep: [
    {
      title: 'Blue‑light blocking bedside lamp',
      badge: 'Evening',
      description: 'A practical swap to support better wind‑down habits.',
      asin: 'B000000004',
      bullets: ['Warm light', 'Habit friendly', 'Low effort'],
    },
  ],
  gut: [
    {
      title: 'Quality probiotic (broad spectrum)',
      badge: 'Gut basics',
      description: 'A beginner-friendly option with straightforward strains.',
      asin: 'B000000005',
      bullets: ['Broad spectrum', 'Easy routine', 'Good starter'],
    },
  ],
  home: [
    {
      title: 'Water filter (UK)',
      badge: 'Home upgrade',
      description: 'A popular upgrade for taste and peace of mind.',
      asin: 'B000000006',
      bullets: ['Improves taste', 'Straightforward setup', 'Long-term swap'],
    },
  ],
}

function Section({ id, title, description, items }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
          {description ? <p className="mt-1 text-sm text-zinc-700">{description}</p> : null}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((p) => (
          <div key={p.asin} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-zinc-900">{p.title}</h3>
              {p.badge ? (
                <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                  {p.badge}
                </span>
              ) : null}
            </div>
            {p.description ? <p className="mt-2 text-sm text-zinc-700">{p.description}</p> : null}
            {p.bullets?.length ? (
              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <AmazonButton asin={p.asin}>Check price on Amazon</AmazonButton>
              <Link href="/how-we-test" className="text-sm font-medium text-zinc-700 hover:underline">
                How we test
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const metadata = {
  title: 'Trusted Picks | Wild & Well',
  description: 'Curated low‑tox and holistic wellness product picks: starter swaps, skincare, sleep, gut health, and eco home essentials.',
}

export default function RecommendedPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          Trusted picks
        </h1>
        <p className="mt-3 text-base text-zinc-700">
          Looking for natural wellness products that are actually worth it? These are our most trusted picks —
          chosen for safety, quality, and real‑world practicality.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <a href="#starter" className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50">
            Starter swaps
          </a>
          <a href="#skincare" className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50">
            Skincare
          </a>
          <a href="#sleep" className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50">
            Sleep
          </a>
          <a href="#gut-health" className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50">
            Gut health
          </a>
          <a href="#home" className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50">
            Home
          </a>
        </div>

        <p className="mt-6 text-sm text-zinc-600">
          Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
          See our <Link className="underline decoration-dotted" href="/product-disclosure">disclosure</Link>.
        </p>
      </div>

      <div className="mt-10 space-y-14">
        <Section
          id="starter"
          title="Low‑tox starter swaps"
          description="The easiest first changes for noticeable impact — without overwhelm."
          items={PICKS.starter}
        />

        <Section
          id="skincare"
          title="Low‑tox skincare"
          description="Gentle, effective options for simple routines."
          items={PICKS.skincare}
        />

        <Section
          id="sleep"
          title="Natural sleep support"
          description="Practical tools that make good habits easier."
          items={PICKS.sleep}
        />

        <Section
          id="gut-health"
          title="Gut health essentials"
          description="Beginner-friendly basics with clear routines."
          items={PICKS.gut}
        />

        <Section
          id="home"
          title="Eco‑friendly home swaps"
          description="Low‑tox cleaning and home upgrades that stick."
          items={PICKS.home}
        />
      </div>

      <div className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 md:p-10">
        <h2 className="text-xl font-semibold text-zinc-900">Want the “Low‑Tox Shopping List”?</h2>
        <p className="mt-2 text-sm text-zinc-700">
          A simple, beginner-friendly list of trusted swaps (with links) — so you can shop once and move on.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-primary text-center">Request the list</Link>
          <Link href="/guides" className="text-sm font-medium text-zinc-700 hover:underline">
            Or start with the guides →
          </Link>
        </div>
      </div>
    </main>
  )
}
