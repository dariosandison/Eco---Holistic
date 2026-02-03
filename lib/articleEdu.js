const DEFAULT = {
  what:
    'This topic is common in modern life because our homes, routines, and products have changed fast—sometimes faster than our bodies adapt. The goal here is clarity: understand the main drivers, then choose a simple next step.',
  why:
    'Small, repeatable improvements tend to matter more than perfect solutions. A clearer routine reduces overwhelm, helps you notice what actually changes how you feel, and prevents wasted spending.',
  causes: [
    'Modern routines: convenience, screens, indoor time, and stress.',
    'Product complexity: lots of claims, little clarity.',
    'Environment + habits interacting (small things stacking up).',
  ],
  noSpend: [
    'Pick one lever and run it for 7–14 days (don’t change everything at once).',
    'Track one outcome (sleep, symptoms, energy, comfort) in a simple note.',
    'Remove the biggest obvious trigger first (sprays, harsh mixes, late caffeine, etc.).',
  ],
  buying: [
    'Buy only after you’ve tried the simplest change for 1–2 weeks.',
    'Choose one “good enough” option with easy returns.',
    'Prefer fewer features + clearer specs over hype.',
  ],
}

const MAP = [
  {
    match: ({ tags, title }) =>
      /air|purifier|allerg|asthma|damp|mould/i.test(title) ||
      tags.some((t) => /air|purifier|allerg|damp|mould/i.test(t)),
    block: {
      what:
        'Indoor air quality is shaped by particles (dust, pollen, smoke), moisture (damp/mould risk), and gases (cooking fumes, fragranced products). The aim is to reduce exposure in the rooms you actually use.',
      why:
        'Poor air can worsen comfort and may aggravate allergies or asthma in sensitive households. You’ll usually notice benefits as “less stuffy”, fewer morning symptoms, and more comfortable sleep.',
      causes: [
        'Poor ventilation (especially in winter).',
        'Cooking fumes without extraction.',
        'Damp bathrooms/bedrooms and slow drying laundry indoors.',
        'Fragranced sprays/candles adding irritants for some people.',
      ],
      noSpend: [
        'Ventilate strategically: short, intense airing + extractor use during cooking/showering.',
        'Keep humidity in check (roughly 40–60% if you can measure).',
        'Dry laundry with airflow; don’t block radiators.',
        'Dust + vacuum regularly, especially bedrooms.',
      ],
      buying: [
        'If buying a purifier: match CADR to room size; HEPA matters; noise matters.',
        'If damp: measure humidity first; a dehumidifier can help targeted rooms.',
        'Avoid “ioniser/ozone” style claims; keep it simple.',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /water|filter|hard water|hydration/i.test(title) || tags.some((t) => /water|filter/i.test(t)),
    block: {
      what:
        'UK tap water is generally safe, but people buy filters for taste, limescale, or specific concerns. Different filter types do different jobs.',
      why:
        'The biggest win is often behavioural: water that tastes good is water you drink. For kettles and appliances, reducing limescale can also make daily life easier.',
      causes: [
        'Hard water areas = limescale build-up.',
        'Taste/odour variability from local supply or plumbing.',
        'Confusion about what filters can/can’t remove.',
      ],
      noSpend: [
        'If taste is the issue: chill water, use a covered jug, or try a different bottle/cup.',
        'Descale kettles regularly if you’re in a hard-water area.',
        'Check your local supplier’s water quality report for context.',
      ],
      buying: [
        'Choose by use case: jug (taste), under-sink (capacity), countertop (mid).',
        'Budget for ongoing filters (replacement cost matters most).',
        'Avoid fear-based marketing; prioritise clear specs and replacements.',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /sleep|caffeine|magnesium|light|bedroom/i.test(title) || tags.some((t) => /sleep/i.test(t)),
    block: {
      what:
        'Most sleep issues come down to timing, light exposure, stress arousal, temperature, and stimulants (like caffeine). The “fix” is usually a small set of repeatable levers.',
      why:
        'Better sleep supports mood, appetite regulation, training recovery, and daily resilience. Even modest improvements (fewer wake-ups, quicker sleep onset) can noticeably improve your days.',
      causes: [
        'Late caffeine (often underestimated).',
        'Bright light/screens late at night without strong morning light.',
        'Bedrooms that run too warm, noisy, or too bright.',
        'Trying too many changes at once (hard to see what works).',
      ],
      noSpend: [
        'Keep wake time consistent for 7–14 days.',
        'Get outdoor light early in the day (even cloudy).',
        'Move caffeine earlier; test a cut-off ~8 hours before bed.',
        'Create one low-effort wind-down cue you’ll actually repeat.',
      ],
      buying: [
        'If buying: start with light control (eye mask/blackout) and bedding comfort.',
        'Keep supplements simple; start low; stop if it worsens sleep or gut.',
        'Prioritise returns and avoid “miracle” claims.',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /protein|nutrition|food|upf|fibre|fiber|gut/i.test(title) ||
      tags.some((t) => /nutrition|protein|fibre|fiber|gut/i.test(t)),
    block: {
      what:
        'Nutrition gets confusing because marketing is loud and the basics are quiet. The practical focus is: enough protein and fibre, mostly minimally processed foods, and habits you can repeat.',
      why:
        'Protein supports muscle and appetite; fibre supports digestion and helps meals feel more satisfying. Simple defaults tend to beat complicated rules.',
      causes: [
        'Convenience foods crowding out high-fibre staples (beans, oats, veg).',
        '“Healthy” snacks still being low-protein/low-fibre.',
        'Under-eating at meals → overeating later.',
      ],
      noSpend: [
        'Add one protein anchor to breakfast or lunch (eggs, yoghurt, beans, fish).',
        'Add one fibre boost daily (oats, lentils, berries, seeds).',
        'Keep “easy staples” stocked to reduce decision fatigue.',
      ],
      buying: [
        'If using powders/supplements: use as a bridge, not a replacement for food.',
        'Pick simple ingredient lists; avoid mega-blends with wild claims.',
        'Track tolerance (especially for gut-sensitive people).',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /movement|walking|strength|mobility|cardio/i.test(title) ||
      tags.some((t) => /movement|walking|strength|mobility|cardio/i.test(t)),
    block: {
      what:
        'Movement improves health even without weight loss. The most effective plan is the one you’ll repeat: walking most days + 2 simple strength sessions + a little mobility to keep joints happy.',
      why:
        'Strength supports independence and reduces injury risk; walking supports mental health and cardio fitness; mobility keeps movement feeling easy.',
      causes: [
        'All-or-nothing plans that are too hard to sustain.',
        'Too much intensity too soon → soreness → stopping.',
        'No structure (so the week disappears).',
      ],
      noSpend: [
        'Start with 20–30 mins walking, 4–5 days/week.',
        'Add 2 short strength sessions (bodyweight is fine).',
        'Do 5–10 mins mobility on desk-heavy days.',
      ],
      buying: [
        'Optional upgrades: resistance bands, comfortable walking shoes, and a basic mat.',
        'Avoid gadget overload; consistency beats equipment.',
      ],
    },
  },
]

export function pickEduBlock({ title = '', tags = [] } = {}) {
  const ctx = { title: String(title || ''), tags: (tags || []).map(String) }
  for (const row of MAP) {
    if (row.match(ctx)) return { ...DEFAULT, ...row.block }
  }
  return DEFAULT
}
