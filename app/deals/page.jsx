import Link from "next/link";
import { amazonSearchUrl } from "@/lib/amazon";

export const metadata = {
  title: "Deals",
  description:
    "Deal searches for products we already cover. Always verify current price and specs before buying.",
};

function DealCard({ title, desc, query, guideHref, tag }) {
  const href = amazonSearchUrl(query);
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">
            {tag}
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a className="btn-secondary" href={href} target="_blank" rel="noreferrer">
          View deal search
        </a>
        {guideHref ? (
          <Link className="btn-secondary" href={guideHref}>
            Open the page
          </Link>
        ) : null}
      </div>

      <p className="mt-3 text-xs text-zinc-500">
        Prices and availability change quickly. Check the listing for current details.
      </p>
    </div>
  );
}

export default function DealsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Deals</h1>
        <p className="mt-3 text-zinc-700">
          Quick access to deal searches for products we already cover on our pages. If you see a good price, cross-check
          specs and reviews before buying.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/favourites">
            Browse favourites
          </Link>
          <Link className="btn-secondary" href="/topics">Topics</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last checked: January 27, 2026</p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Good times to buy</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-1">
            <li><strong>Seasonal peaks:</strong> air purifiers (spring allergies), humidifiers (autumn/winter), fans (summer).</li>
            <li><strong>Sales events:</strong> big retailer sales can be real discounts — but check history if you can.</li>
            <li><strong>End-of-line:</strong> older models can be great value if filters/spares remain available.</li>
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">What to check before you buy</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-1">
            <li><strong>Size fit:</strong> room coverage, tank size, or dimensions (especially bedrooms and small flats).</li>
            <li><strong>Ongoing costs:</strong> filters, refills, and replacement parts (often the hidden expense).</li>
            <li><strong>Returns &amp; warranty:</strong> only worth it if you can return easily and the brand supports spares.</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Home (low-tox, air, water)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <DealCard
            title="Air purifier deals (UK)"
            desc="HEPA purifiers for allergies and general air quality."
            query="air purifier HEPA deal UK"
            guideHref="/best-air-purifiers-allergies-uk"
            tag="Air"
          />
          <DealCard
            title="Water filter deals (UK)"
            desc="Jugs, countertop, and under-sink filters."
            query="water filter jug under sink deal UK"
            guideHref="/best-water-filters-uk"
            tag="Water"
          />
          <DealCard
            title="Fragrance-free laundry deals"
            desc="Sensitive-home laundry options."
            query="fragrance free laundry detergent deal"
            guideHref="/best-fragrance-free-laundry-detergents-uk"
            tag="Laundry"
          />
          <DealCard
            title="Shower filter deals (UK)"
            desc="Hard water comfort options."
            query="shower filter hard water deal UK"
            guideHref="/best-shower-filters-uk-hard-water"
            tag="Water"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Sleep</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <DealCard
            title="Humidifier deals (UK)"
            desc="Bedroom humidifiers — check tank size + cleaning."
            query="humidifier bedroom deal UK"
            guideHref="/best-humidifiers-for-bedrooms-uk"
            tag="Sleep"
          />
          <DealCard
            title="Sleep essentials deals"
            desc="Practical sleep items."
            query="blackout curtains earplugs white noise machine deal"
            guideHref="/topics/sleep"
            tag="Sleep"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Nutrition</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <DealCard
            title="Extra virgin olive oil deals"
            desc="Look for smaller bottles and clear origin info."
            query="extra virgin olive oil deal"
            guideHref="/best-extra-virgin-olive-oil-uk"
            tag="Food"
          />
          <DealCard
            title="Organic oats deals"
            desc="Jumbo/rolled/steel-cut — buy what you’ll finish."
            query="organic oats deal"
            guideHref="/best-organic-oats-uk"
            tag="Food"
          />
          <DealCard
            title="Chia & flax deals"
            desc="Simple add-ins for oats, yoghurt, smoothies."
            query="chia seeds flaxseed deal"
            guideHref="/best-chia-seeds-uk"
            tag="Food"
          />
          <DealCard
            title="Matcha deals"
            desc="Check origin and buy small tins if you want freshness."
            query="matcha powder deal"
            guideHref="/best-organic-matcha-uk"
            tag="Food"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Movement</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <DealCard
            title="Fitness tracker deals (UK)"
            desc="Step tracking + sleep basics."
            query="fitness tracker deal UK"
            guideHref="/best-fitness-trackers-beginners-uk"
            tag="Gear"
          />
          <DealCard
            title="Resistance band deals"
            desc="Long bands + mini loops cover most home training."
            query="resistance bands set deal"
            guideHref="/best-resistance-bands-home-workouts"
            tag="Gear"
          />
          <DealCard
            title="Walking shoe deals (UK)"
            desc="Comfort-first walking shoes for regular steps."
            query="walking shoes deal UK"
            guideHref="/best-walking-shoes-daily-steps-uk"
            tag="Footwear"
          />
          <DealCard
            title="Yoga mat deals"
            desc="Grip + comfort for mobility and floor work."
            query="yoga mat deal"
            guideHref="/best-yoga-mats-grip-comfort"
            tag="Gear"
          />
          <DealCard
            title="Activewear deals (UK)"
            desc="Comfort-first basics: socks, layers, simple training gear."
            query="activewear deal UK training top leggings socks"
            guideHref="/best-activewear-basics-uk"
            tag="Clothing"
          />

        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  );
}
