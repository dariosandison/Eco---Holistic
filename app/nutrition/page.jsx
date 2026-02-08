import Link from "next/link";

import ProductPick from '@/components/mdx/ProductPick'

export const metadata = {
  title: "Nutrition & Organic Food",
  description:
    "Nutrition, organic food, and single-ingredient staples — with practical guidance and product shortlists when you’re ready to buy.",
};

// Partner links (AWIN)
const SIMPLY_SUPPLEMENTS_VITAMIN_D3 = 'https://www.awin1.com/cread.php?awinmid=5959&awinaffid=2754234&clickref=ww_nutrition_picks_vitamin_d3_2000iu_simplysupplements&ued=https%3A%2F%2Fwww.simplysupplements.co.uk%2Fvitamin-d3-2000iu'
const HEALF_LMNT_VARIETY = 'https://www.awin1.com/cread.php?awinmid=22320&awinaffid=2754234&clickref=ww_nutrition_picks_electrolytes_healf_lmnt_variety&ued=https%3A%2F%2Fhealf.com%2Fproducts%2Flmnt-recharge-electrolytes-variety-pack'
const KAYTEA_ICE_TEA_SAMPLE = 'https://www.awin1.com/cread.php?awinmid=115673&awinaffid=2754234&clickref=ww_nutrition_picks_ice_tea_sample_kaytea_6pack&ued=https%3A%2F%2Fkaytea.co.uk%2Fproducts%2Fice-tea-6-pack-sample'
const FARMFETCH_GRASSFED_BEEF_BOX = 'https://www.awin1.com/cread.php?awinmid=75682&awinaffid=2754234&clickref=ww_nutrition_picks_farmfetch_grassfed_beef_box&ued=https%3A%2F%2Ffarmfetch.co%2Fproducts%2Fgrass-fed-beef-selection-box-1'
const SYMPROVE_MANGO = 'https://www.awin1.com/cread.php?awinmid=109974&awinaffid=2754234&clickref=ww_nutrition_picks_guthealth_symprove_mango_passionfruit&ued=https%3A%2F%2Fw-wellness.co.uk%2Fproducts%2Fsymprove-daily-live-active-bacteria-mango-passion-fruit'
const GOLD_COLLAGEN_PURE = 'https://www.awin1.com/cread.php?awinmid=20972&awinaffid=2754234&clickref=ww_nutrition_picks_collagen_goldcollagen_pure&ued=https%3A%2F%2Fwww.gold-collagen.com%2Fuk%2Fshop%2Fbest-seller%2Fpure'
const REVIVE_COLLAGEN_ENHANCEDPLUS = 'https://www.awin1.com/cread.php?awinmid=122882&awinaffid=2754234&clickref=ww_nutrition_picks_liquid_collagen_revive_enhancedplus&ued=https%3A%2F%2Frevivecollagen.com%2Fproducts%2Frevive-collagen-plus-hydrolysed-marine-collagen-drink'
const COLLAGEN_SUPERDOSE_SKIN = 'https://www.awin1.com/cread.php?awinmid=25052&awinaffid=2754234&clickref=ww_nutrition_picks_liquid_collagen_collagensuperdose_skin_care&ued=https%3A%2F%2Fcollagensuperdose.com%2Fproducts%2Fsuperdose-skin'

function Card({ title, desc, href, tag, image }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
            <img
              src={image || '/images/photography/thumbs/cards/nutrition-hero.jpg'}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-zinc-600">{desc}</p>
          </div>
        </div>
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{tag}</span>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Nutrition &amp; Organic Food</h1>
        <p className="mt-3 text-zinc-700">
          Clear, practical nutrition content — focusing on the modern food environment, label reading, and simple upgrades you can repeat.
          When it helps, we link to “Shortlists” product shortlists (single-ingredient foods, organic staples, and sensible add-ons).
        </p>
        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/nutrition.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog">Read Wellness Insights</Link>
          <Link className="btn-secondary" href="/topics">Browse Topics</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 1, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Explore nutrition sections</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Three deep-dive sections: fundamentals first, then practical tools and shortlists where they help.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/photography/thumbs/cards/close-up-of-hands-holding-a-warm-mug-near-a-window-shallow-depth-of-field.jpg" title="Supplements" desc="A low-additive, label-reading approach — quality signals, common traps, and simple tools." href="/nutrition/supplements" tag="Education" />
          <Card image="/images/photography/thumbs/cards/calm-living-room-corner-with-linen-throw-and-houseplant-by-a-window-negative-space.jpg" title="Grow your own" desc="Home or allotment: start small, get the basics right (light, soil, watering), then scale." href="/nutrition/grow-your-own" tag="Education" />
          <Card image="/images/photography/thumbs/cards/cooked-oats-and-seeds-in-small-ceramic-bowls-on-wooden-table-soft-daylight.jpg" title="Organic & single-ingredient" desc="Staples that scale: label-reading, simple swaps, and where organic upgrades make sense." href="/nutrition/organic-single-ingredient" tag="Education" />
        </div>
      </section>

      <section className="mt-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Featured products (UK)</h2>
            <p className="mt-1 text-sm text-zinc-600 max-w-2xl">
              High‑fit options we feature across our nutrition pages. (Links are affiliate links.)
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ProductPick
            title="Baseline staple: Vitamin D3 (2,000iu)"
            badge="Staples"
            description="A simple baseline for UK winters. Check label guidance and talk to a clinician if you have medical concerns."
            bullets={["Common UK winter staple", "Check dosage guidance", "Avoid stacking lots of new supplements"]}
            links={[{ label: 'Check price', merchant: 'awin', href: SIMPLY_SUPPLEMENTS_VITAMIN_D3, variant: 'primary' }]}
          />
          <ProductPick
            title="Training day add‑on: LMNT Electrolytes (Variety Pack)"
            badge="Hydration"
            description="Electrolytes can help on sweaty training days — keep it simple and check ingredients."
            bullets={["Good for: training days", "Check ingredients", "Use as a convenience tool"]}
            links={[{ label: 'Check price', merchant: 'awin', href: HEALF_LMNT_VARIETY, variant: 'primary' }]}
          />
          <ProductPick
            title="Better drinks swap: Kaytea ice tea sample"
            badge="Drinks"
            description="A simple lower-friction drinks swap — try flavours before stocking up."
            bullets={["Try flavours first", "Keep it low-effort", "Check sugar/caffeine on label"]}
            links={[{ label: 'Check price', merchant: 'awin', href: KAYTEA_ICE_TEA_SAMPLE, variant: 'primary' }]}
          />
          <ProductPick
            title="Whole-food protein: Farmfetch grass fed beef box"
            badge="Staples"
            description="If you want high-protein meal prep, this is a simple whole-food route."
            bullets={["Good for: meal prep", "Food-first approach", "Plan freezer space"]}
            links={[{ label: 'Check price', merchant: 'awin', href: FARMFETCH_GRASSFED_BEEF_BOX, variant: 'primary' }]}
          />
          <ProductPick
            title="Gut option: Symprove (Mango & Passion Fruit)"
            badge="Gut"
            description="If you try a gut-focused product, keep expectations realistic and change one thing at a time."
            bullets={["Change one thing at a time", "Track 2–4 weeks", "Check ingredients"]}
            links={[{ label: 'Check price', merchant: 'awin', href: SYMPROVE_MANGO, variant: 'primary' }]}
          />
          <ProductPick
            title="Collagen option: GOLD COLLAGEN® PURE"
            badge="Staples"
            description="If you trial collagen, measure results and keep the rest of your routine steady."
            bullets={["Track outcomes", "Avoid stacking", "Compare ingredients/serving"]}
            links={[{ label: 'Check price', merchant: 'awin', href: GOLD_COLLAGEN_PURE, variant: 'primary' }]}
          />
          <ProductPick
            title="Collagen option: Revive Collagen Enhanced Plus"
            badge="Staples"
            description="Marine collagen drink — compare ingredients and serving size before committing."
            bullets={["Compare ingredients", "Check serving size", "Keep routine steady"]}
            links={[{ label: 'Check price', merchant: 'awin', href: REVIVE_COLLAGEN_ENHANCEDPLUS, variant: 'primary' }]}
          />
          <ProductPick
            title="Collagen option: Collagen Superdose (Superdose Skin)"
            badge="Staples"
            description="Another liquid collagen option — if you trial it, measure results and avoid lots of changes at once."
            bullets={["Measure results", "Avoid stacking", "Check ingredients"]}
            links={[{ label: 'Check price', merchant: 'awin', href: COLLAGEN_SUPERDOSE_SKIN, variant: 'primary' }]}
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Shortlists</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Straightforward roundups: label cues that matter and a shortlist of solid options.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/photography/thumbs/cards/nutrition-hero.jpg" title="Extra virgin olive oil (UK): our shortlist" desc="Freshness, storage, and label cues that actually help." href="/best-extra-virgin-olive-oil-uk" tag="Staples" />
          <Card image="/images/photography/thumbs/cards/nutrition-hero.jpg" title="Organic oats (UK): our shortlist" desc="Rolled vs jumbo vs steel-cut — pick what you’ll use." href="/best-organic-oats-uk" tag="Staples" />
          <Card image="/images/photography/thumbs/cards/nutrition-hero.jpg" title="Chia seeds (UK): simple shortlist" desc="Simple seeds, easy fibre add-in, and storage tips." href="/best-chia-seeds-uk" tag="Superfoods" />
          <Card image="/images/photography/thumbs/cards/nutrition-hero.jpg" title="Ground flaxseed (UK): simple shortlist" desc="Freshness matters — plus easy daily uses." href="/best-ground-flaxseed-uk" tag="Superfoods" />
          <Card image="/images/photography/thumbs/cards/nutrition-hero.jpg" title="Matcha (UK): what to buy" desc="Everyday vs ceremonial-style and what to look for." href="/best-organic-matcha-uk" tag="Drinks" />
          <Card image="/images/photography/thumbs/cards/nutrition-hero.jpg" title="Fermented foods to start with" desc="Sauerkraut & kimchi: simple ingredients, realistic expectations." href="/best-fermented-foods-sauerkraut-kimchi" tag="Gut" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Read next</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Informative articles: what the issue is, where it shows up in modern life, what research suggests, and practical steps.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/ultra-processed-foods-what-they-are-and-why-they-matter">Ultra-processed foods</Link>
          <Link className="btn-secondary" href="/blog/fibre-gut-health-practical-guide">Fibre & gut health</Link>
          <Link className="btn-secondary" href="/blog/single-ingredient-staples-that-actually-matter">Single-ingredient staples</Link>
          <Link className="btn-secondary" href="/blog/superfoods-worth-it-and-what-to-skip">Superfoods: worth it?</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  );
}
