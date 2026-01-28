import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: "Organic oats (UK): our favourites | Wild & Well",
  description: "A shortlist of organic oats (rolled, jumbo, steel-cut) and how to choose based on your breakfast and baking habits.",
}

const PICKS = [
  {
    "title": "Organic jumbo rolled oats",
    "badge": "Best all-round",
    "desc": "Great texture for porridge and overnight oats.",
    "query": "organic jumbo rolled oats",
    "bullets": [
      "Great texture",
      "Versatile",
      "Check for simple ingredients"
    ]
  },
  {
    "title": "Organic porridge oats (rolled)",
    "badge": "Budget favourite",
    "desc": "Reliable daily staple.",
    "query": "organic porridge oats",
    "bullets": [
      "Affordable",
      "Good daily use",
      "Choose size you’ll finish"
    ]
  },
  {
    "title": "Organic steel-cut oats",
    "badge": "Best slow-cook",
    "desc": "Chewier texture; great if you like batch cooking.",
    "query": "organic steel cut oats",
    "bullets": [
      "Chewy texture",
      "Great for batch cooking",
      "Longer cook time"
    ]
  },
  {
    "title": "Organic gluten-free oats",
    "badge": "Best gluten-free",
    "desc": "If gluten-free is needed, look for certification.",
    "query": "organic gluten free oats certified",
    "bullets": [
      "Look for certification",
      "Good for coeliac needs",
      "Usually pricier"
    ]
  },
  {
    "title": "Organic oat bran",
    "badge": "High fibre option",
    "desc": "Easy add-in for yoghurt or baking.",
    "query": "organic oat bran",
    "bullets": [
      "Easy add-in",
      "Fibre boost",
      "Start small if new to bran"
    ]
  },
  {
    "title": "Organic instant oats (minimal)",
    "badge": "Convenient",
    "desc": "If you need convenience, keep ingredients simple.",
    "query": "organic instant oats plain",
    "bullets": [
      "Convenient",
      "Watch added sugar/flavours",
      "Plain is easiest"
    ]
  }
]

function SummaryBox() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        A short, practical shortlist plus the label cues that matter (freshness, ingredients, and how you’ll actually use it).
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/nutrition">Nutrition hub</Link>
        <Link className="btn-secondary" href="/blog/single-ingredient-staples-that-actually-matter">Blog: single-ingredient staples</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: January 27, 2026</p>
    </div>
  )
}

export default function Page() {
  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Organic oats (UK): our favourites",
    dateModified: '2026-01-27',
    datePublished: '2026-01-27',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: itemList,
    },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Organic oats (UK): our favourites</h1>
        <p className="mt-3 text-zinc-700">A shortlist of organic oats (rolled, jumbo, steel-cut) and how to choose based on your breakfast and baking habits.</p>
      </header>

      <section className="mt-8">
        <SummaryBox />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top options (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Three solid starting points, then a fuller list below.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Organic jumbo rolled oats"
            badge="Best all-round"
            description="Great texture for porridge and overnight oats."
            href={amazonSearchUrl('organic jumbo rolled oats')}
            bullets={["Great texture", "Versatile", "Check for simple ingredients"]}
          />

          <ProductPick
            title="Organic porridge oats (rolled)"
            badge="Budget favourite"
            description="Reliable daily staple."
            href={amazonSearchUrl('organic porridge oats')}
            bullets={["Affordable", "Good daily use", "Choose size you\u2019ll finish"]}
          />

          <ProductPick
            title="Organic steel-cut oats"
            badge="Best slow-cook"
            description="Chewier texture; great if you like batch cooking."
            href={amazonSearchUrl('organic steel cut oats')}
            bullets={["Chewy texture", "Great for batch cooking", "Longer cook time"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Full shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Choose based on your needs (space, budget, comfort, and how often you’ll actually use it).</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Organic jumbo rolled oats"
            badge="Best all-round"
            description="Great texture for porridge and overnight oats."
            href={amazonSearchUrl('organic jumbo rolled oats')}
            bullets={["Great texture", "Versatile", "Check for simple ingredients"]}
          />

          <ProductPick
            title="Organic porridge oats (rolled)"
            badge="Budget favourite"
            description="Reliable daily staple."
            href={amazonSearchUrl('organic porridge oats')}
            bullets={["Affordable", "Good daily use", "Choose size you\u2019ll finish"]}
          />

          <ProductPick
            title="Organic steel-cut oats"
            badge="Best slow-cook"
            description="Chewier texture; great if you like batch cooking."
            href={amazonSearchUrl('organic steel cut oats')}
            bullets={["Chewy texture", "Great for batch cooking", "Longer cook time"]}
          />

          <ProductPick
            title="Organic gluten-free oats"
            badge="Best gluten-free"
            description="If gluten-free is needed, look for certification."
            href={amazonSearchUrl('organic gluten free oats certified')}
            bullets={["Look for certification", "Good for coeliac needs", "Usually pricier"]}
          />

          <ProductPick
            title="Organic oat bran"
            badge="High fibre option"
            description="Easy add-in for yoghurt or baking."
            href={amazonSearchUrl('organic oat bran')}
            bullets={["Easy add-in", "Fibre boost", "Start small if new to bran"]}
          />

          <ProductPick
            title="Organic instant oats (minimal)"
            badge="Convenient"
            description="If you need convenience, keep ingredients simple."
            href={amazonSearchUrl('organic instant oats plain')}
            bullets={["Convenient", "Watch added sugar/flavours", "Plain is easiest"]}
          />

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How we build our shortlists</h2>
        <div className="mt-3 space-y-3 text-sm text-zinc-700 max-w-3xl">
          <p>
            Our approach here is: sensible features, decent reviews across many buyers, and a realistic fit for most homes — not hype, not extreme claims.
          </p>
          <p>
            Always check sizing/specs and current pricing before you buy. If a product makes strong health claims without evidence, treat that as marketing.
          </p>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Some links may earn us a small commission at no extra cost to you.
        </p>
      </section>
    </main>
  )
}
