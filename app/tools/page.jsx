import Link from 'next/link'

export const metadata = {
  title: 'Free UK Household Wellness Calculators & Tools',
  description: 'Free practical tools from Wild & Well for household water planning, filtration ownership costs, dehumidifier running costs and evidence-led home decisions.',
}

const tools = [
  {
    href: '/tools/portable-power-runtime-calculator',
    title: 'Portable power runtime calculator',
    text: 'Estimate the watt-hours needed for camping, short outages or essential low-power devices before comparing battery stations.',
    topic: 'Home energy & outdoors',
  },
  {
    href: '/tools/72-hour-water-calculator',
    title: '72-hour household water calculator',
    text: 'Estimate a simple drinking-water planning quantity for a short household disruption.',
    topic: 'Water & resilience',
  },
  {
    href: '/tools/water-filter-running-cost-calculator',
    title: 'Water filter running cost calculator',
    text: 'Estimate replacement-filter spend and total ownership cost instead of comparing day-one prices alone.',
    topic: 'Water & filtration',
  },
  {
    href: '/tools/dehumidifier-running-cost-calculator',
    title: 'Dehumidifier running cost calculator',
    text: 'Estimate daily, monthly and annual electricity cost using appliance wattage, runtime and your own tariff.',
    topic: 'Air quality & damp',
  },
]

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Free practical tools</p>
        <h1 className="mt-2 text-4xl font-bold">Calculators that help before you buy</h1>
        <p className="mt-3 text-zinc-700">These tools turn common household questions into simple numbers. They are designed to help you plan first, then decide whether a product is actually necessary.</p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{tool.topic}</p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-900">{tool.title}</h2>
            <p className="mt-2 text-sm text-zinc-700">{tool.text}</p>
            <p className="mt-4 text-sm font-semibold">Open free tool →</p>
          </Link>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="text-xl font-semibold">Why we build tools</h2>
        <p className="mt-2 text-zinc-700">A useful calculator can answer part of the decision without requiring you to buy anything. Where a product comparison is relevant, the tool links to the appropriate guide afterwards.</p>
        <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-secondary" href="/topics">Browse topics</Link><Link className="btn-secondary" href="/blog">Browse guides</Link><Link className="btn-primary" href="/shortlists">Compare shortlists</Link></div>
      </section>
    </main>
  )
}
