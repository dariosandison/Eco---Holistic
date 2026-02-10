import Link from 'next/link'
import InlineSignup from '@/components/InlineSignup'

export const metadata = {
  title: 'Start here',
  description:
    'A simple, UK-friendly starting point: pick one area (air, water, fragrance-free home, sleep, nutrition, movement) and take the next best step — without overhauling everything.',
}

function Card({ title, tag, desc, steps = [], links = [] }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
          <p className="mt-1 text-sm text-zinc-700">{desc}</p>
        </div>
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">
            {tag}
          </span>
        ) : null}
      </div>

      {steps?.length ? (
        <ul className="mt-4 list-disc pl-6 text-sm text-zinc-700 space-y-2">
          {steps.slice(0, 5).map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : null}

      {links?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={l.primary ? 'btn-primary' : 'btn-secondary'}>
              {l.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Start here</h1>
        <p className="mt-3 text-zinc-700">
          The fastest way to feel a difference is to pick <span className="font-semibold">one</span> area for this week,
          do a no-spend step first, then use a shortlist only if you’re buying something.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/topics" className="btn-secondary">Browse Topics</Link>
          <Link href="/shortlists" className="btn-primary">Browse Shortlists</Link>
          <Link href="/shopping-list" className="btn-secondary">Free shopping list</Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Card
          title="Allergies, stale air, or musty rooms"
          tag="Air"
          desc="If your nose/eyes flare up indoors, focus on the basics first: ventilation, humidity, and filtration."
          steps={[
            'Open windows for 5–10 minutes twice a day (even in winter).',
            'If you see condensation most mornings, damp control usually beats a purifier alone.',
            'If buying, size by room and run it consistently on a quiet setting.',
          ]}
          links={[
            { href: '/topics/air-quality', label: 'Air quality basics', primary: false },
            { href: '/best-air-purifiers-allergies-uk', label: 'Air purifier shortlist', primary: true },
            { href: '/best-dehumidifiers-damp-mould-uk', label: 'Dehumidifier shortlist', primary: false },
          ]}
        />

        <Card
          title="Hard water skin/hair discomfort"
          tag="Water"
          desc="Hard water is normal in many UK areas. Start with simple comfort steps; if buying, keep expectations realistic."
          steps={[
            'Try a gentler wash routine (less hot water, shorter showers).',
            'Use a simple moisturiser after showering; avoid heavy fragrance if sensitive.',
            'If buying a shower filter, treat it as a comfort experiment, not a miracle fix.',
          ]}
          links={[
            { href: '/topics/water', label: 'Water basics', primary: false },
            { href: '/best-shower-filters-uk-hard-water', label: 'Shower filter shortlist', primary: true },
            { href: '/best-water-filters-uk', label: 'Water filter shortlist', primary: false },
          ]}
        />

        <Card
          title="Sensitive skin or fragrance headaches"
          tag="Cleaning"
          desc="If scent triggers symptoms, laundry detergent is usually the highest‑impact swap."
          steps={[
            'Cut detergent dose to the minimum that works (residue can irritate).',
            'Add an extra rinse for towels/bed linen if skin is reactive.',
            'Avoid “fresh” scents and essential oils if you’re sensitive.',
          ]}
          links={[
            { href: '/topics/fragrance-free', label: 'Fragrance-free basics', primary: false },
            { href: '/best-fragrance-free-laundry-detergents-uk', label: 'Detergent shortlist', primary: true },
            { href: '/best-low-tox-products-for-beginners', label: 'Beginner starter shortlist', primary: false },
          ]}
        />

        <Card
          title="Sleep feels off"
          tag="Sleep"
          desc="Start with light timing and a simple wind-down routine. Supplements are optional and should be conservative."
          steps={[
            'Get outdoor daylight within 60 minutes of waking (even if cloudy).',
            'Aim for a consistent wake time before chasing hacks.',
            'Make the bedroom cooler and darker if possible.',
          ]}
          links={[
            { href: '/topics/sleep', label: 'Sleep basics', primary: false },
            { href: '/best-natural-sleep-support', label: 'Sleep shortlist', primary: true },
            { href: '/blog/magnesium-for-sleep-basics', label: 'Magnesium guide', primary: false },
          ]}
        />

        <Card
          title="Nutrition: simple foundations"
          tag="Nutrition"
          desc="You don’t need perfect meals — just a few staples you repeat."
          steps={[
            'Add protein to breakfast or lunch (helps appetite + strength).',
            'Add one high-fibre food daily (oats, beans, berries, veg).',
            'Use supplements only to fill a specific gap.',
          ]}
          links={[
            { href: '/nutrition', label: 'Nutrition section', primary: false },
            { href: '/blog/protein-basics-plain-english-uk', label: 'Protein basics', primary: false },
            { href: '/best-organic-supplements-beginners', label: 'Starter supplements shortlist', primary: true },
          ]}
        />

        <Card
          title="Movement: start without overthinking"
          tag="Movement"
          desc="Walking most days + two simple strength sessions beats complicated plans."
          steps={[
            'Walk 20–30 minutes, 4–5 days/week (split into two walks if needed).',
            'Add two short strength sessions (bodyweight is fine).',
            'If buying anything, start with a mat or resistance bands — nothing fancy.',
          ]}
          links={[
            { href: '/movement', label: 'Movement section', primary: false },
            { href: '/blog/simple-weekly-movement-plan-beginners', label: 'Weekly plan', primary: false },
            { href: '/best-resistance-bands-home-workouts', label: 'Resistance bands shortlist', primary: true },
          ]}
        />
      </section>

      <InlineSignup placement="start_here" />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission at no extra cost to you.
      </p>
    </main>
  )
}
