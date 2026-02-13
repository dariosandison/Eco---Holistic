import Link from "next/link";

import ProductPick from '@/components/mdx/ProductPick'

export const metadata = {
  title: "Movement & Fitness",
  description: "Strength, walking, mobility, and gear basics (trackers, bands, shoes, mats).",
};

// Partner links (AWIN)
const ON_GOLD_STANDARD_WHEY = 'https://www.awin1.com/cread.php?awinmid=19863&awinaffid=2754234&clickref=ww_movement_picks_whey_optimum_gs100whey&ued=https%3A%2F%2Fwww.optimumnutrition.com%2Fen-gb%2Fproducts%2Fgold-standard-100-whey-protein-powder-eu'
const WFL_DUMBBELL_TOWER_24KG = 'https://www.awin1.com/cread.php?awinmid=25564&awinaffid=2754234&clickref=ww_movement_picks_dumbbell_tower_body_sculpture_24kg&ued=https%3A%2F%2Fwww.workoutforless.co.uk%2Fcollections%2Fdumbbells%2Fproducts%2Fbody-sculpture-24kg-smart-dumbbell-tower-with-stand'
const FITNESSOPTIONS_A1_WATERROWER = 'https://www.awin1.com/cread.php?awinmid=899&awinaffid=2754234&clickref=ww_movement_picks_rower_fitnessoptions_a1_waterrower&ued=https%3A%2F%2Ffitnessoptions.co.uk%2Fcollections%2Fpopular%2Fproducts%2Fa1-waterrower'
const ANCIENT_TRUE_CREATINE = 'https://www.awin1.com/cread.php?awinmid=54585&awinaffid=2754234&clickref=ww_movement_strength_ancient_true_creatine&ued=https%3A%2F%2Fancientandbrave.earth%2Fproducts%2Ftrue-creatine'
const NAKEDPHARMACY_NATRUFLEX = 'https://www.awin1.com/cread.php?awinmid=20100&awinaffid=2754234&clickref=ww_movement_recovery_naked_natruflex_turmeric&ued=https%3A%2F%2Fwww.thenakedpharmacy.com%2Fproducts%2Fnatruflex-turmeric%3Futm_source%3Dchatgpt.com'
const VIVO_TRACKER_WINTER_III = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footstrength_vivo_tracker_winter_iii&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Ftracker-winter-iii-sg-mens%3Futm_source%3Dchatgpt.com'

function Card({ title, desc, href, tag, image }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
            <img
              src={image || '/images/cards/neutral.svg'}
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
        <h1 className="text-4xl font-bold">Movement &amp; Fitness</h1>
        <p className="mt-3 text-zinc-700">
          Walking, basic strength, mobility, and recovery — with optional gear when it helps.
        </p>
        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/movement.jpg"
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
        <h2 className="text-2xl font-semibold">Explore movement styles</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Choose a lane and build a repeatable routine before adding equipment.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="Stretches & mobility" desc="A simple 10‑minute routine for desk bodies, stiff hips, and tight backs — plus optional tools." href="/movement/stretches" tag="Guide" />
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="Hypertrophy" desc="Build muscle with a simple plan, progressive overload, and minimal equipment." href="/movement/hypertrophy" tag="Guide" />
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="Cardio" desc="Start with walking, build a base, then add gentle intervals when ready." href="/movement/cardio" tag="Guide" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Shortlists</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Straightforward roundups: what to look for, what to avoid, and a shortlist of solid options.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="Fitness trackers for beginners (UK): shortlist" desc="Steps, sleep, heart-rate: what matters for most people." href="/best-fitness-trackers-beginners-uk" tag="Trackers" />
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="Smart scales (UK): shortlist" desc="If you use one, use it for trends — not daily readings." href="/best-smart-scales-uk" tag="Scales" />
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="Resistance bands for home workouts: shortlist" desc="A small kit that covers strength + rehab basics." href="/best-resistance-bands-home-workouts" tag="Bands" />
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="Walking shoes for daily steps (UK): shortlist" desc="Comfort-first shoes for regular walking." href="/best-walking-shoes-daily-steps-uk" tag="Footwear" />
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="yoga mats for grip & comfort" desc="Grip and cushioning for floor work." href="/best-yoga-mats-grip-comfort" tag="Mobility" />
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="foam rollers & recovery tools" desc="Simple recovery tools for tight hips/backs." href="/best-foam-rollers-recovery-tools" tag="Recovery" />
          <Card image="/images/photography/thumbs/cards/movement-hero.jpg" title="activewear basics (UK)" desc="Comfort-first basics: tops, leggings, socks, layers." href="/best-activewear-basics-uk" tag="Clothing" />
        </div>
      </section>

      <section className="mt-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Partner gear recommendations (UK)</h2>
            <p className="mt-1 text-sm text-zinc-600 max-w-2xl">
              A few gear and nutrition add‑ons we feature because they help consistency. (Links are affiliate links.)
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link className="btn-secondary" href="/best-creatine-supplement-uk-ancient-and-brave-true-creatine">Creatine guide →</Link>
              <Link className="btn-secondary" href="/best-turmeric-supplement-uk-naked-pharmacy-natruflex">Turmeric guide →</Link>
              <Link className="btn-secondary" href="/best-barefoot-walking-boots-uk-vivobarefoot-tracker-winter-iii">Barefoot boots guide →</Link>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Compact strength kit: 24kg Smart Dumbbell Tower"
            badge="Strength"
            description="A space‑efficient dumbbell setup for home strength training — useful if you want consistency without clutter."
            bullets={["Great for: small spaces", "Easy to keep set‑up", "Progressive strength without a full rack"]}
            links={[{ label: 'Check price', merchant: 'awin', href: WFL_DUMBBELL_TOWER_24KG, variant: 'primary' }]}
          />
          <ProductPick
            title="Low‑impact cardio: A1 WaterRower"
            badge="Cardio"
            description="Rowing is time‑efficient and joint‑friendly — ideal if you want reliable sessions at home."
            bullets={["Great for: full‑body cardio", "Low impact", "Check footprint and storage"]}
            links={[{ label: 'Check price', merchant: 'awin', href: FITNESSOPTIONS_A1_WATERROWER, variant: 'primary' }]}
          />
          <ProductPick
            title="Training day add‑on: Gold Standard 100% Whey"
            badge="Protein"
            description="A straightforward protein option if you train and struggle to hit protein targets from food alone."
            bullets={["Check ingredients/allergens", "Use as a convenience tool", "Keep overall diet food‑first"]}
            links={[{ label: 'Check price', merchant: 'awin', href: ON_GOLD_STANDARD_WHEY, variant: 'primary' }]}
          />

          <ProductPick
            title="Strength add‑on: True Creatine (Ancient + Brave)"
            badge="Strength"
            description="A simple creatine option if you train and want a well‑studied performance support tool."
            bullets={["Consistency beats timing", "Drink enough water", "Keep everything else stable"]}
            links={[{ label: 'Check price', merchant: 'awin', href: ANCIENT_TRUE_CREATINE, variant: 'primary' }]}
          />

          <ProductPick
            title="Recovery add‑on: Natruflex Turmeric"
            badge="Recovery"
            description="A turmeric option some people use for joint comfort. Check interactions before using."
            bullets={["Track for 2–4 weeks", "Avoid stacking changes", "Check medication interactions"]}
            links={[{ label: 'Check price', merchant: 'awin', href: NAKEDPHARMACY_NATRUFLEX, variant: 'primary' }]}
          />

          <ProductPick
            title="Barefoot boots: Vivobarefoot Tracker Winter III"
            badge="Foot strength"
            description="For outdoor walking when you want ground feel. Transition slowly to avoid calf/foot overload."
            bullets={["Short walks first", "Fit matters", "Increase volume gradually"]}
            links={[{ label: 'Check price', merchant: 'awin', href: VIVO_TRACKER_WINTER_III, variant: 'primary' }]}
          />

        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Start with routines (bodyweight first)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Start with simple routines you can repeat. Equipment is optional.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/walking-for-health-how-much-is-enough">Walking guide</Link>
          <Link className="btn-secondary" href="/blog/home-strength-basics-busy-people">Home strength basics</Link>
          <Link className="btn-secondary" href="/blog/mobility-for-desk-workers">Mobility for desk work</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  );
}
