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
    match: ({ title }) => /replacement cost|running cost|ownership cost|yearly cost|annual cost/i.test(title),
    block: {
      what:
        'The purchase price is only one part of a product decision. Filters, cartridges, electricity, servicing and other recurring requirements can change which option is genuinely good value over time.',
      why:
        'A product that looks cheaper at checkout can become the more expensive choice if consumables are costly, hard to source or replaced frequently. Ownership cost also matters because an appliance or filter you stop maintaining cannot do its intended job well.',
      causes: [
        'Comparing headline purchase price without pricing consumables.',
        'Assuming the longest quoted filter or cartridge life will match real use.',
        'Ignoring electricity, servicing, replacement parts or UK stock availability.',
      ],
      noSpend: [
        'Write down the exact replacement part before buying.',
        'Estimate how many replacements a normal year of your use would require.',
        'Check whether the required part is currently easy to source in the UK.',
      ],
      buying: [
        'Compare first-year and ongoing cost, not just checkout price.',
        'Prefer maintainable products with clearly identified replacement parts.',
        'Do not buy a feature-rich product if the ongoing cost makes you unlikely to maintain it.',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /air|purifier|allerg|asthma|damp|mould/i.test(title) ||
      tags.some((t) => /air|purifier|allerg|damp|mould/i.test(t)),
    block: {
      what:
        'Indoor air quality is shaped by particles (dust, pollen, smoke), moisture (damp/mould risk), and gases (cooking fumes, fragranced products). The aim is to reduce exposure in the rooms you actually use.',
      why:
        'Poor air can worsen comfort and may aggravate allergies or asthma in sensitive households. The practical goal is to identify the pollutant or moisture problem first, then use source control, ventilation or filtration appropriately.',
      causes: [
        'Poor ventilation, especially during colder weather.',
        'Cooking fumes without effective extraction.',
        'Damp rooms, slow-drying laundry and unresolved moisture sources.',
        'Smoke, pollen, dust and fragranced products adding particles or irritants.',
      ],
      noSpend: [
        'Use extraction during cooking and showering and ventilate strategically.',
        'Measure humidity when damp or condensation is part of the problem.',
        'Reduce pollutants at source where practical.',
        'Dust and vacuum regularly in the rooms that matter most.',
      ],
      buying: [
        'For particles, match purifier airflow and filtration to the actual room.',
        'For excess moisture, address leaks and ventilation before considering dehumidification.',
        'Check noise, electricity and replacement-filter costs before buying.',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /water|hard water|hydration/i.test(title) ||
      tags.some((t) => /water|drinking-water|hard-water/i.test(t)),
    block: {
      what:
        'UK tap water is regulated, while household water concerns range from taste and limescale to a specific contaminant question. Different treatment formats solve different jobs, so the reason for filtering needs to come first.',
      why:
        'Choosing by the actual job avoids paying for unnecessary stages or assuming one filter solves every water issue. Maintenance and replacement availability are part of performance in real life.',
      causes: [
        'Hard-water minerals causing limescale rather than a drinking-water safety problem.',
        'Taste or odour differences from supply, plumbing or storage.',
        'Confusion between softening, filtration and specific contaminant-reduction claims.',
      ],
      noSpend: [
        'Check your local supplier’s water-quality information for context.',
        'If taste is the issue, try chilling tap water in a covered container first.',
        'Descale kettles and appliances appropriately when limescale is the main nuisance.',
      ],
      buying: [
        'Choose the format around the job and household volume required.',
        'Check the exact reduction claim and supporting testing or certification where relevant.',
        'Price replacement filters and maintenance before committing.',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /sleep|caffeine|magnesium|light|bedroom/i.test(title) || tags.some((t) => /sleep/i.test(t)),
    block: {
      what:
        'Most sleep problems are better approached through timing, light exposure, stress arousal, temperature, comfort and stimulants before adding products.',
      why:
        'A repeatable sleep routine supports daytime function and recovery. Product changes are most useful when they solve a clearly identified comfort or environmental problem.',
      causes: [
        'Late or excessive caffeine for individual sensitivity.',
        'Weak daytime light cues combined with bright evenings.',
        'Bedrooms that are uncomfortable, noisy, bright or too warm.',
        'Changing several parts of a routine at once.',
      ],
      noSpend: [
        'Keep wake time reasonably consistent for 7–14 days.',
        'Get outdoor light earlier in the day.',
        'Test an earlier caffeine cut-off if sleep onset is difficult.',
        'Build one low-effort wind-down cue you can repeat.',
      ],
      buying: [
        'Buy for a defined issue such as light control, support or temperature.',
        'Check trials and returns before higher-ticket sleep purchases.',
        'Treat supplements as optional rather than the foundation of sleep.',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /protein|nutrition|food|upf|fibre|fiber|gut/i.test(title) ||
      tags.some((t) => /nutrition|protein|fibre|fiber|gut/i.test(t)),
    block: {
      what:
        'Nutrition gets confusing because marketing is loud and the basics are quiet. A practical starting point is adequate protein and fibre, a varied diet built mostly around minimally processed foods, and habits that fit normal life.',
      why:
        'Simple, repeatable food choices tend to be more useful than complicated rules or constantly changing products. Supplements can have a role, but they should not displace the food and routine basics.',
      causes: [
        'Convenience patterns crowding out useful staple foods.',
        'Packaged foods being judged by marketing language rather than their overall fit.',
        'Overcomplicated plans that are difficult to repeat.',
      ],
      noSpend: [
        'Add one useful protein source to a meal that is currently light on protein.',
        'Add a fibre-rich food such as beans, oats, fruit or vegetables regularly.',
        'Keep a small set of easy staples available for busy days.',
      ],
      buying: [
        'Use convenience products to solve a real time or access problem.',
        'Keep supplement claims conservative and check suitability where relevant.',
        'Prefer products that complement rather than replace a workable diet.',
      ],
    },
  },
  {
    match: ({ tags, title }) =>
      /movement|walking|strength|mobility|cardio/i.test(title) ||
      tags.some((t) => /movement|walking|strength|mobility|cardio/i.test(t)),
    block: {
      what:
        'Movement does not require a complex programme or a large equipment setup. Regular walking, simple strength work and gradual progression form a practical base for most everyday movement goals.',
      why:
        'The routine that is repeated matters more than the impressive routine that is abandoned. Equipment is useful when it removes a real barrier or expands what an established habit can do.',
      causes: [
        'All-or-nothing plans that are difficult to sustain.',
        'Increasing volume or intensity too quickly.',
        'Treating tracking and equipment as the activity itself.',
      ],
      noSpend: [
        'Build regular walking into the week.',
        'Add short bodyweight strength sessions before buying a large setup.',
        'Increase time, distance or load gradually.',
      ],
      buying: [
        'Name the limitation the equipment will solve before purchasing.',
        'Prioritise fit, comfort, returns and long-term usefulness.',
        'Start with the smallest setup that supports the routine.',
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
