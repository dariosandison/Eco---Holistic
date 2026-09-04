import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Lower-Tox Cookware Starter UK — Buy Less, Use It Well',
  description: 'A practical cookware starter guide focused on durable materials, heat control and replacing damaged pieces gradually rather than buying a whole new kitchen.',
}

const MATERIALS = [
  { title: 'Stainless steel', text: 'Durable and versatile for most everyday cooking. The main learning curve is heat control rather than the material itself.' },
  { title: 'Cast iron', text: 'Long-lasting and useful for searing and oven cooking. The trade-offs are weight, drying and seasoning care.' },
  { title: 'Enameled cast iron', text: 'Useful for soups, stews and batch cooking when you genuinely use that style of pot often.' },
  { title: 'Coated non-stick', text: 'Treat coatings as consumable surfaces: avoid overheating and replace cookware when the coating is materially damaged or peeling.' },
]

export default function Page() {
  const slug = 'best-non-toxic-cookware-starter'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Lower-tox cookware starter UK: buy less, use it well', datePublished: '2026-01-29', dateModified: '2026-08-28' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Healthy Home kitchen guide</p>
          <h1 className="mt-2 text-4xl font-bold">Cookware: replace the piece that needs replacing, not the whole kitchen</h1>
          <p className="mt-3 text-zinc-700">A lower-tox approach should not create unnecessary waste. Keep sound cookware you use safely, replace damaged or unsuitable pieces when needed and learn the technique required by the material you choose.</p>
        </div>
        <img src="/images/photography/cleaning.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/healthy-home" topicLabel="Healthy Home principles" insightHref="/blog/non-toxic-cleaning-starter" insightLabel="Lower-tox starter" />
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/healthy-home/low-tox-shortlist">Compare Healthy Home swaps</Link><Link className="btn-secondary" href="/healthy-home">Healthy Home hub</Link><Link className="btn-secondary" href="/shopping-list">Free shopping list</Link></div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12"><h2 className="text-2xl font-semibold">Choose material by how you cook</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{MATERIALS.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-zinc-700">{item.text}</p></div>)}</div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">The useful starter set is usually small</h2><p className="mt-3 text-zinc-700">For many kitchens, one dependable frying pan and one saucepan cover a large share of everyday cooking. Add larger pots, oven-safe pieces or specialist cookware when your actual cooking habits justify them rather than buying a large matched set up front.</p></section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Compare household replacements</p><h2 className="mt-2 text-2xl font-semibold">Replace cookware selectively</h2><p className="mt-2 text-zinc-700">Use the Healthy Home shortlist after checking condition, cooking style, durability and which pieces genuinely need replacing.</p><div className="mt-5"><Link className="btn-primary" href="/healthy-home/low-tox-shortlist">Open Healthy Home shortlist</Link></div></div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">Use matters as much as material</h2><p className="mt-3 text-zinc-700">Avoid unnecessary overheating, follow manufacturer care guidance and inspect surfaces and handles as cookware ages. “Non-toxic” is often used loosely in marketing, so favour clear material information and durable construction over dramatic safety claims.</p></section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links; Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
