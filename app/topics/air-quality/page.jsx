import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Air Quality Topics — Wild & Well',
  description: 'Air quality for UK homes: allergies, damp, and the small choices that make a big difference.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Air Quality (Allergies + Damp)</h1>
        <p className="mt-3 text-zinc-700">
          The biggest win is matching the purifier to the room size — not buying the fanciest model.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/healthy-air-at-home">Read the air guide</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Great for allergies (UK)</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Great for small flats</Link>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">Start here</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Check your room size (m²) before buying.</li>
            <li>Choose HEPA + carbon if odours bother you.</li>
            <li>Put it where the air flows (not hidden in a corner).</li>
            <li>Replace filters on schedule — it matters more than “extras”.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">If damp/mould is the issue</h2>
          <p className="mt-3 text-sm text-zinc-700">
            A purifier helps particles, but damp often needs dehumidifying + ventilation.
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <Link className="btn-secondary" href="/blog/winter-humidity-guide">Winter humidity guide</Link>
          </div>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Avoid</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Overpaying for “smart” features you’ll never use.</li>
            <li>Units that are too loud for bedrooms (you’ll stop using them).</li>
            <li>Buying small units for big rooms.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Quick topics</h2>
        <p className="mt-2 text-sm text-zinc-600">Short search links so you can compare price, warranty, and filter costs.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Air purifier (bedroom / small room)"
            badge="Small spaces"
            description="Look for true HEPA + quiet night mode."
            href={amazonSearchUrl('HEPA air purifier small room quiet night mode')}
            bullets={['Choose based on room size', 'Plan for replacement filters', 'Aim for quiet night mode']}
          />
          <ProductPick
            title="Air purifier (allergy season / living room)"
            badge="Allergens"
            description="Bigger rooms need higher CADR / coverage."
            href={amazonSearchUrl('HEPA air purifier allergies UK large room')}
            bullets={['HEPA + carbon helps with smells', 'Auto mode is useful, not essential']}
          />
          <ProductPick
            title="Humidity monitor (hygrometer)"
            badge="Damp control"
            description="If your humidity is regularly high, the fix isn’t another candle — it’s airflow and moisture control."
            href={amazonSearchUrl('digital hygrometer humidity monitor')}
            bullets={['Aim for ~40–60% humidity', 'Use to decide if a dehumidifier is worth it']}
          />
          <ProductPick
            title="Dehumidifier (if needed)"
            badge="Moisture"
            description="If your home stays damp, dehumidifying often beats purifying."
            href={amazonSearchUrl('dehumidifier UK energy efficient quiet')}
            bullets={['Check tank size', 'Look for laundry mode', 'Consider noise for bedrooms']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-air-purifiers-allergies-uk">Air purifiers for allergies: shortlist →</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Great for small flats →</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links may earn us a commission. We never accept paid placements in reviews.</p>
    </main>
  )
}
