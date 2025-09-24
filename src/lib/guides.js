// Minimal in-repo data so build never fails.
// You can edit titles/excerpts later; dates MUST be strings (YYYY-MM-DD).
const GUIDES = [
  { slug: 'alcohol-free-social-starters', title: 'Alcohol-Free Social Starters', excerpt: 'Great drinks without alcohol.', date: '2024-01-01', updated: '2024-01-01', image: null },
  { slug: 'anti-mould-habits', title: 'Anti-Mould Habits', excerpt: 'Daily actions to reduce mould exposure.', date: '2024-01-02', updated: '2024-01-02', image: null },
  { slug: 'blood-sugar-steadiness', title: 'Blood Sugar Steadiness', excerpt: 'Simple steps to reduce spikes.', date: '2024-01-03', updated: '2024-01-03', image: null },
  { slug: 'bedroom-air-purifiers', title: 'Bedroom Air Purifiers', excerpt: 'Cleaner air while you sleep.', date: '2024-01-04', updated: '2024-01-04', image: null },
  { slug: 'blue-light-sleep-tools', title: 'Blue Light Sleep Tools', excerpt: 'Support melatonin naturally.', date: '2024-01-05', updated: '2024-01-05', image: null },
  { slug: 'circadian-sleep-reset', title: 'Circadian Sleep Reset', excerpt: 'A gentle reset protocol.', date: '2024-01-06', updated: '2024-01-06', image: null },
  { slug: 'clean-electrolytes-hydration', title: 'Clean Electrolytes & Hydration', excerpt: 'Hydrate without junk additives.', date: '2024-01-07', updated: '2024-01-07', image: null },
  { slug: 'cleaning-chemicals-off-fruit', title: 'Cleaning Chemicals off Fruit', excerpt: 'Rinse methods that work.', date: '2024-01-08', updated: '2024-01-08', image: null },
  { slug: 'cold-exposure-basics', title: 'Cold Exposure Basics', excerpt: 'Start safely, feel amazing.', date: '2024-01-09', updated: '2024-01-09', image: null },
  { slug: 'creatine-everyday-essentials', title: 'Creatine: Everyday Essentials', excerpt: 'What to buy and why.', date: '2024-01-10', updated: '2024-01-10', image: null },
  { slug: 'creatine-minimal-ingredients', title: 'Creatine: Minimal Ingredients', excerpt: 'Cleanest options, no fillers.', date: '2024-01-11', updated: '2024-01-11', image: null },
  { slug: 'daily-neat-move-more', title: 'Daily NEAT: Move More', excerpt: 'Boost movement without workouts.', date: '2024-01-12', updated: '2024-01-12', image: null },
  { slug: 'daily-neat-movement', title: 'Daily NEAT Movement', excerpt: 'Tiny habits that add up.', date: '2024-01-13', updated: '2024-01-13', image: null },
  { slug: 'gut-health-basics', title: 'Gut Health Basics', excerpt: 'Foundations for a happier gut.', date: '2024-01-14', updated: '2024-01-14', image: null },
  { slug: 'gut-health-starters', title: 'Gut Health Starters', excerpt: 'Easy first steps.', date: '2024-01-15', updated: '2024-01-15', image: null },
  { slug: 'low-waste-shower-kit', title: 'Low-Waste Shower Kit', excerpt: 'Essentials that reduce plastic.', date: '2024-01-16', updated: '2024-01-16', image: null },
  { slug: 'minimal-ingredient-cereals', title: 'Minimal-Ingredient Cereals', excerpt: 'Simple boxes that aren’t junk.', date: '2024-01-17', updated: '2024-01-17', image: null },
  { slug: 'nasal-breathing-better-sleep', title: 'Nasal Breathing for Better Sleep', excerpt: 'Why and how to start.', date: '2024-01-18', updated: '2024-01-18', image: null },
  { slug: 'nasal-breathing-mouth-tape', title: 'Mouth Tape 101', excerpt: 'Gentle training aids explained.', date: '2024-01-19', updated: '2024-01-19', image: null },
  { slug: 'non-toxic-cookware-basics', title: 'Non-Toxic Cookware Basics', excerpt: 'Safer pans and materials.', date: '2024-01-20', updated: '2024-01-20', image: null },
  { slug: 'omega-3-fish-oil-guide', title: 'Omega-3 Fish Oil Guide', excerpt: 'Pick quality, avoid rancid.', date: '2024-01-21', updated: '2024-01-21', image: null },
  { slug: 'parasite-basics-prevention', title: 'Parasite Basics & Prevention', excerpt: 'Practical hygiene tips.', date: '2024-01-22', updated: '2024-01-22', image: null },
  { slug: 'posture-setup-healthy-desk', title: 'Healthy Desk Posture', excerpt: 'Make your setup work for you.', date: '2024-01-23', updated: '2024-01-23', image: null },
  { slug: 'protein-powders-natural-ingredients', title: 'Protein Powders: Natural Ingredients', excerpt: 'Cleaner tubs that mix well.', date: '2024-01-24', updated: '2024-01-24', image: null },
  { slug: 'reduce-heavy-metal-exposure', title: 'Reduce Heavy Metal Exposure', excerpt: 'Everyday swaps that help.', date: '2024-01-25', updated: '2024-01-25', image: null },
  { slug: 'safer-cleaning', title: 'Safer Cleaning', excerpt: 'Non-toxic basics that work.', date: '2024-01-26', updated: '2024-01-26', image: null },
  { slug: 'sauna-basics', title: 'Sauna Basics', excerpt: 'Heat therapy for beginners.', date: '2024-01-27', updated: '2024-01-27', image: null },
  { slug: 'sauna-heat-therapy', title: 'Sauna & Heat Therapy', excerpt: 'Programming and benefits.', date: '2024-01-28', updated: '2024-01-28', image: null },
  { slug: 'sleep-better-evening-routine', title: 'Sleep Better: Evening Routine', excerpt: 'A simple, soothing plan.', date: '2024-01-29', updated: '2024-01-29', image: null },
  { slug: 'vitamin-supplements-minimal-additives', title: 'Vitamins: Minimal Additives', excerpt: 'Pick clean, effective options.', date: '2024-01-30', updated: '2024-01-30', image: null },
  { slug: 'water-filters', title: 'Water Filters', excerpt: 'Choose the right filter, fast.', date: '2024-01-31', updated: '2024-01-31', image: null },
  { slug: 'wellness-starter', title: 'Wellness Starter', excerpt: 'Start here for fast wins.', date: '2024-02-01', updated: '2024-02-01', image: null }
];

export function getAllGuidesMeta() {
  return [...GUIDES].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllGuidesSlugs() {
  return GUIDES.map(g => g.slug);
}

export function getGuideBySlug(slug) {
  const g = GUIDES.find(x => x.slug === slug);
  if (!g) return null;
  const html = `
    <h2>${g.title}</h2>
    <p class="lead">${g.excerpt}</p>
    <p><em>Published ${g.date}${g.updated ? ` • Updated ${g.updated}` : ''}</em></p>
    <hr/>
    <p>This is placeholder content. Replace with your real guide body when ready.</p>
    <ul>
      <li>Tip #1</li>
      <li>Tip #2</li>
      <li>Tip #3</li>
    </ul>
  `;
  return { meta: g, html };
}

export function getAllGuides() {
  return GUIDES.map(g => ({ meta: g, html: getGuideBySlug(g.slug).html }));
}
