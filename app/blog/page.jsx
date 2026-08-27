import Link from 'next/link'
import BlogExplorer from '@/components/BlogExplorer'
import InlineSignup from '@/components/InlineSignup'
import { listContent } from '@/lib/content'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'UK Healthy Home & Wellness Guides',
  description: 'Practical UK guides on water filtration, air quality, damp, sleep, nutrition and movement — organised by problem so you can find the useful route quickly.',
}

const clusters = [
  { title: 'Water & filtration', href: '/topics/water', text: 'Hard water, filter formats, RO, gravity filtration, shower water and replacement costs.', links: [['Jug vs under-sink', '/blog/water-filter-jug-vs-under-sink-uk'], ['RO worth it?', '/blog/reverse-osmosis-water-filter-worth-it-uk'], ['Chlorine taste', '/blog/water-filter-chlorine-taste-uk']] },
  { title: 'Air, damp & condensation', href: '/topics/air-quality', text: 'Purifiers, dehumidifiers, pollen, pets, smoke, mould and indoor humidity.', links: [['Window condensation', '/blog/condensation-on-windows-uk-dehumidifier'], ['Purifier vs dehumidifier', '/blog/air-purifier-vs-dehumidifier-mould-uk'], ['Filter costs', '/blog/air-purifier-filter-replacement-cost-uk']] },
  { title: 'Sleep & recovery', href: '/topics/sleep-recovery', text: 'Bedroom comfort, bedding, routines and selective recovery tools.', links: [['Bedroom temperature & bedding', '/blog/bedroom-temperature-bedding'], ['Sleep naturally', '/blog/sleep-naturally-simple-guide']] },
  { title: 'Movement', href: '/movement', text: 'Strength basics, walking, mobility and barefoot-footwear guidance.', links: [['Home strength basics', '/blog/home-strength-basics-busy-people'], ['Barefoot training shoes', '/best-barefoot-training-shoes-uk-vivobarefoot-primus-lite-knit']] },
]

export default function Page() {
  const insights = listContent('insights')
  const explainers = listContent('explainers')
  const flat = [...(insights || []), ...(explainers || [])]
  const itemList = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Wild & Well UK guides', itemListElement: flat.slice(0, 50).map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: `${SITE_URL}/blog/${p.slug}` })) }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <StructuredData data={itemList} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Practical UK guides</p><h1 className="mt-2 text-3xl font-semibold text-zinc-900">Find the problem first, then the right guide</h1><p className="mt-2 text-sm text-zinc-700">Start with the topic you are trying to solve. Our strongest guides are grouped below; the full article library follows afterwards.</p></div>
        <div className="flex gap-2"><Link href="/start-here" className="btn-secondary">Start here</Link><Link href="/shortlists" className="btn-primary">Shortlists</Link></div>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {clusters.map((cluster) => <div key={cluster.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><Link href={cluster.href} className="text-xl font-semibold text-zinc-900 hover:underline">{cluster.title}</Link><p className="mt-2 text-sm text-zinc-600">{cluster.text}</p><div className="mt-4 flex flex-wrap gap-2">{cluster.links.map(([label, href]) => <Link key={href} href={href} className="chip">{label}</Link>)}</div></div>)}
      </section>

      <div className="mt-12 border-t border-zinc-200 pt-10"><h2 className="text-2xl font-semibold text-zinc-900">All guides</h2><p className="mt-1 text-sm text-zinc-600">Browse the complete library or use the filters to narrow it down.</p></div>
      <BlogExplorer insights={insights} explainers={explainers} />
      <InlineSignup placement="blog_index" />
      <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><h2 className="text-lg font-semibold text-zinc-900">Ready to compare products?</h2><p className="mt-2 text-sm text-zinc-700">Use the maintained shortlists only after you know what problem the product needs to solve.</p><div className="mt-4 flex flex-wrap gap-2"><Link href="/shortlists" className="btn-primary">Browse shortlists</Link><Link href="/topics" className="btn-secondary">Browse topics</Link><Link href="/shopping-list" className="btn-secondary">Free shopping list</Link></div></div>
      <p className="mt-10 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </div>
  )
}
