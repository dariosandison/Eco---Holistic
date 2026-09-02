import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import InterestSignup from '@/components/InterestSignup'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Family Camping Sleep System UK — Mat, Bag and Warmth Guide',
  description: 'Choose a practical UK family-camping sleep system by matching ground insulation, sleeping bags, clothing and tent setup to likely conditions.',
}

const DECISIONS = [
  ['1. Ground insulation', 'Choose the mat before adding blankets. Thickness describes cushioning; an R-value describes resistance to heat loss. Compare stated R-values where manufacturers provide them and treat an unlabelled airbed as comfort, not proven insulation.'],
  ['2. Sleeping-bag rating', 'Use the stated comfort information rather than the dramatic “extreme” figure. Check the size and fit for each sleeper, especially children, and plan around the coldest credible overnight temperature.'],
  ['3. Dry night layers', 'Keep a dedicated dry base layer, socks and hat available. Do not rely on wearing every daytime layer inside an unsuitable bag, and change damp clothing before bed.'],
  ['4. Tent and pitch', 'Pitch on suitable level ground, keep bedding away from wet tent walls and ventilate as the tent manufacturer directs. A larger tent may feel colder because there is more air volume and more space for bedding to spread out.'],
]

const COMPARISON = [
  ['Foam mat', 'Simple, durable and inexpensive', 'Bulky; comfort may be limited', 'First trips, children, backup insulation'],
  ['Self-inflating mat', 'Good comfort/insulation balance', 'Heavier and can puncture', 'Family and car camping'],
  ['Inflatable insulated mat', 'Compact and often warm for its weight', 'Higher price and puncture risk', 'Smaller packing volume or walking trips'],
  ['Airbed', 'Familiar feel and generous size', 'Bulky; can lose heat and needs inflation', 'Warm-weather car camping when insulation is separately addressed'],
]

export default function Page() {
  return <main className="mx-auto max-w-5xl px-4 py-16">
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'Article', headline: 'Family Camping Sleep System UK', description: metadata.description, mainEntityOfPage: `${SITE_URL}/outdoors/family-camping-sleep-system-uk`, author: { '@type': 'Organization', name: 'Wild & Well' }, publisher: { '@type': 'Organization', name: 'Wild & Well' } }} />
    <header className="max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[.16em] text-emerald-900">Outdoors · family camping</p><h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Build the night before buying the campsite kitchen</h1><p className="mt-4 max-w-3xl text-lg text-zinc-700">A sleeping bag is only one part of staying comfortable. For a repeatable family trip, plan the ground insulation, bag, dry clothing and pitch as one system.</p></header>

    <section className="mt-10 grid gap-4 md:grid-cols-2">{DECISIONS.map(([title, text]) => <article key={title} className="rounded-3xl border border-zinc-200 bg-white p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-zinc-700">{text}</p></article>)}</section>

    <section className="mt-12"><h2 className="text-2xl font-semibold">Choose the mat by the trip</h2><div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200"><table className="min-w-[720px] w-full text-left text-sm"><thead className="bg-zinc-50"><tr><th className="p-4">Type</th><th className="p-4">Strength</th><th className="p-4">Trade-off</th><th className="p-4">Best starting use</th></tr></thead><tbody>{COMPARISON.map((row) => <tr key={row[0]} className="border-t border-zinc-200">{row.map((cell) => <td key={cell} className="p-4 align-top text-zinc-700">{cell}</td>)}</tr>)}</tbody></table></div></section>

    <section className="mt-12 rounded-3xl border border-amber-900/10 bg-amber-50/60 p-6 md:p-8"><h2 className="text-2xl font-semibold">A low-risk first-night test</h2><ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-700"><li>Check the site rules and forecast, including the overnight low.</li><li>Pitch and inflate everything at home before departure.</li><li>Use a nearby campsite and arrive in daylight.</li><li>Bring a sensible extra dry layer and a safe exit plan if anyone cannot get warm.</li><li>After the trip, replace only the part that caused the real comfort failure.</li></ol></section>

    <section className="mt-12"><h2 className="text-2xl font-semibold">How this guide was researched</h2><p className="mt-3 text-sm leading-6 text-zinc-700">Wild &amp; Well has not personally tested every sleep product. This decision framework draws on current UK retailer guidance about mat insulation, comfort, pack size and sleeping-bag temperature information. Product claims still need checking against the individual manufacturer specification.</p><ul className="mt-3 list-disc space-y-2 pl-6 text-sm"><li><a className="underline" href="https://www.cotswoldoutdoor.com/the-knowledge/camping/choosing-a-sleeping-mat.html" target="_blank" rel="noreferrer">Cotswold Outdoor: choosing a sleeping mat</a></li><li><a className="underline" href="https://www.gooutdoors.co.uk/blogs/article/expert-advice-sleeping-systems" target="_blank" rel="noreferrer">GO Outdoors: sleeping-system temperature ratings</a></li></ul></section>

    <div className="mt-10 flex flex-wrap gap-2"><Link href="/outdoors/family-camping-checklist-uk" className="btn-primary">Use the full camping checklist</Link><Link href="/outdoors" className="btn-secondary">Back to Outdoors</Link><Link href="/tools/portable-power-runtime-calculator" className="btn-secondary">Size portable power</Link></div>
    <div className="mt-14"><InterestSignup placement="family-camping-sleep-system" defaultInterest="outdoors" title="Build a camping setup that earns repeat use" description="Get practical UK camping, walking and family-nature guidance, plus only the offers that genuinely help." /></div>
  </main>
}
