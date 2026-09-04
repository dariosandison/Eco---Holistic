import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Best Shower Filters UK for Hard Water — What They Can & Can’t Do',
  description: 'A practical UK shower-filter guide for hard-water homes: understand the limits, compare a tracked partner option, and avoid confusing filtration with water softening.',
}

const showerPick = (AWIN_PICKS.water || []).find((p) => p.clickref === 'ww_shower_filter_doulton_shower_head_filter')

const checks = [
  ['What is the actual problem?', 'If limescale on taps and screens is the main frustration, a shower filter is not the same thing as a water softener.'],
  ['What does the cartridge target?', 'Check the manufacturer’s stated reduction claims rather than assuming every shower filter tackles the same substances.'],
  ['What will replacements cost?', 'A low purchase price can be misleading if cartridges are expensive or need frequent replacement.'],
]

export default function Page() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best shower filters UK for hard water: what they can and can’t do',
    dateModified: '2026-08-27',
    datePublished: '2026-01-25',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">UK buying guide</p>
        <h1 className="mt-2 text-4xl font-bold">Shower filters for UK hard water: know the limit before you buy</h1>
        <p className="mt-3 text-zinc-700">A shower filter may be useful when you specifically want shower-water filtration, but it should not be sold as a cure for hard water. If your main problem is mineral scale, the solution is usually further upstream.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {showerPick && <a className="btn-primary" href="#partner-option">See the tracked partner option</a>}
          <Link className="btn-secondary" href="/blog/hard-water-uk-myths-and-comfort">Understand hard water first</Link>
          <Link className="btn-secondary" href="/water-filtration-shortlist-uk">Compare water filtration</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Partner links may earn Wild & Well a commission at no extra cost to you. Check current specifications and replacement guidance before buying.</p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {checks.map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-zinc-900">{title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 panel">
        <h2 className="text-xl font-semibold">The important distinction: filtration vs softening</h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <div><h3 className="font-semibold">A shower filter</h3><p className="mt-2 text-sm text-zinc-700">Treats water at the shower using a replaceable filter medium. Performance depends on the cartridge and the substances it is designed to reduce.</p></div>
          <div><h3 className="font-semibold">A water softener</h3><p className="mt-2 text-sm text-zinc-700">Addresses hardness minerals for the household water supply. If visible limescale is your central problem, investigate softening rather than expecting a shower cartridge to do the same job.</p></div>
        </div>
      </section>

      {showerPick ? (
        <section className="mt-14 scroll-mt-28" id="partner-option">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Wild & Well partner option</p>
            <h2 className="mt-2 text-2xl font-semibold">A direct option to compare</h2>
            <p className="mt-2 text-sm text-zinc-700">Compare this partner option’s stated filtration performance, compatibility and replacement costs against your actual reason for buying.</p>
          </div>
          <div className="mt-6 max-w-2xl">
            <ProductPick
              title={showerPick.product}
              badge={showerPick.badge}
              description="A direct shower-filter option from a Wild & Well water-filtration partner. Best considered when shower-water filtration — not whole-home softening — is the goal."
              bullets={['Check the manufacturer’s current reduction claims', 'Confirm fit and water-pressure requirements', 'Price the replacement filter before committing']}
              trackingContext="shower_filter_guide_partner"
              links={[
                { label: `Check ${showerPick.badge || showerPick.advertiser} price`, merchant: 'awin', href: showerPick.awin, variant: 'primary' },
                { label: 'Compare all water filtration routes', merchant: 'internal', href: '/water-filtration-shortlist-uk', variant: 'ghost' },
              ]}
            />
          </div>
        </section>
      ) : (
        <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="text-xl font-semibold">Compare the wider water shortlist</h2>
          <p className="mt-2 text-sm text-zinc-700">No shower-specific partner option is currently loaded, so use the water shortlist rather than an untracked marketplace search.</p>
          <Link className="btn-primary mt-4 inline-flex" href="/water-filtration-shortlist-uk">Compare water filtration</Link>
        </section>
      )}

      <section className="mt-14 grid gap-4 md:grid-cols-2">
        <div className="card"><h2 className="text-lg font-semibold">Choose a shower filter when…</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700"><li>You have a clear shower-water filtration goal.</li><li>You understand what the chosen cartridge is designed to reduce.</li><li>You are comfortable with the ongoing replacement cost.</li></ul></div>
        <div className="card"><h2 className="text-lg font-semibold">Look elsewhere when…</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700"><li>Your priority is stopping limescale throughout the home.</li><li>Your concern is damp or bathroom ventilation rather than water quality.</li><li>You cannot verify what the filter actually targets.</li></ul></div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Not sure a shower filter is the right purchase?</h2>
        <p className="mt-2 text-sm text-zinc-700">Start with the hard-water explainer, then use the wider filtration shortlist if your concern is drinking water or household resilience instead.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/blog/hard-water-uk-myths-and-comfort">Read the hard-water guide</Link>
          <Link className="btn-secondary" href="/water-filtration-shortlist-uk">Water filtration shortlist</Link>
          <Link className="btn-secondary" href="/topics/resilience">Household resilience</Link>
        </div>
      </section>
    </main>
  )
}
