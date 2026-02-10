import Link from 'next/link'
import BlogExplorer from '@/components/BlogExplorer'
import InlineSignup from '@/components/InlineSignup'
import { listContent } from '@/lib/content'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Wellness Insights',
  description:
    'Informative articles and practical explainers on nutrition, sleep, movement, and a healthier home — with clear, practical writing.',
}

export default function Page() {
  const insights = listContent('insights')
  const explainers = listContent('explainers')

  const flat = [...(insights || []), ...(explainers || [])]
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wild & Well Wellness Insights',
    itemListElement: flat.slice(0, 50).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
    })),
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <StructuredData data={itemList} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Wellness Insights</h1>
          <p className="mt-1 text-sm text-zinc-700">
            Informative articles and practical explainers on nutrition, sleep, movement, and a healthier home — with clear, practical writing.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a href="#insights" className="font-medium text-zinc-800 hover:underline">Insights</a>
            <a href="#explainers" className="font-medium text-zinc-800 hover:underline">Explainers</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center w-full sm:w-auto">
          <Link
            href="/start-here"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 w-full sm:w-auto text-center"
          >
            Start here
          </Link>
          <Link
            href="/shortlists"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 w-full sm:w-auto text-center"
          >
            Browse Shortlists
          </Link>
        </div>
      </div>

      <BlogExplorer insights={insights} explainers={explainers} />

      <InlineSignup placement="blog_index" />

      <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Shortlists — when you’re ready</h2>
        <p className="mt-2 text-sm text-zinc-700">
          When you’re ready to compare options, our shortlist pages keep things simple with small shortlists and clear trade-offs.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="/shortlists" className="btn-primary text-center">Browse Shortlists</a>
          <a href="/topics" className="btn-secondary text-center">Browse Topics</a>
          <a href="/shopping-list" className="btn-secondary text-center">Free shopping list</a>
        </div>
      </div>

      <p className="mt-10 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </div>
  )
}
