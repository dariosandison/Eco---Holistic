// Internal commercial inventory. Network benchmarks are directional AWIN figures,
// not Wild & Well results. Refresh against the authenticated account before use.
export const awinAudit = {
  publisherId: '2754234',
  auditedAt: '2026-09-02',
  activeProgrammeCount: 60,
  accountPerformance: { period: 'current dashboard view', clicks: 0, transactions: 0, commission: 0 },
}

export const priorityAwinAdvertisers = [
  { name: 'Waterdropfilter UK', pillars: ['healthy-home', 'outdoors'], conversionRate: 3.83, approvalRate: 92.85, epc: 0.58, currency: 'GBP', productFeed: true, priority: 'high', note: 'Strong fit for filtration; verify product-level certifications and claims.' },
  { name: 'Blueair UK', pillars: ['healthy-home', 'dogs'], conversionRate: 4.62, approvalRate: 89.33, epc: 0.32, currency: 'GBP', productFeed: true, priority: 'high', note: 'Existing fit for indoor air and pet-dander decision content.' },
  { name: 'Meaco UK', pillars: ['healthy-home'], conversionRate: 2.27, approvalRate: 97.31, epc: 0.36, currency: 'GBP', productFeed: true, priority: 'high', note: 'Dehumidification and practical indoor-air coverage.' },
  { name: 'Water to Go', pillars: ['outdoors', 'resilience'], conversionRate: 6.82, approvalRate: 40.61, epc: 0.31, currency: 'GBP', productFeed: false, priority: 'medium', note: 'Strong topical fit; low approval benchmark requires cautious commercial forecasting.' },
  { name: 'Allbirds UK', pillars: ['outdoors', 'movement'], conversionRate: 10.19, approvalRate: 88.73, epc: 0.48, currency: 'GBP', productFeed: true, priority: 'medium', note: 'Selective walking and everyday movement use only.' },
  { name: 'simbasleep.com', pillars: ['sleep'], conversionRate: 14.45, approvalRate: 88.1, epc: 0.57, currency: 'GBP', productFeed: true, priority: 'high', note: 'High-intent sleep comparisons; do not imply testing.' },
  { name: 'Panda London', pillars: ['sleep', 'healthy-home'], conversionRate: 42.53, approvalRate: 89.99, epc: 0.1, currency: 'GBP', productFeed: true, priority: 'medium', note: 'Useful for materials-led sleep content; unusually high network conversion needs context.' },
  { name: 'Fitness Options', pillars: ['movement'], conversionRate: 1.72, approvalRate: 75, epc: 0.3, currency: 'GBP', productFeed: true, priority: 'medium', note: 'Home-fitness decision content rather than catalogue expansion.' },
  { name: 'Together Health', pillars: ['wellness'], conversionRate: 6.25, approvalRate: 95.85, epc: 0.12, currency: 'GBP', productFeed: true, priority: 'medium', note: 'Use only where supplement evidence and safety framing are adequate.' },
  { name: 'Ancient + Brave', pillars: ['wellness'], conversionRate: 4.18, approvalRate: 97.46, epc: 0.21, currency: 'GBP', productFeed: true, priority: 'medium', note: 'Evidence-led nutrition contexts only.' },
  { name: 'Regn - Eco Friendly Products', pillars: ['healthy-home'], conversionRate: 9.39, approvalRate: 92.52, epc: 0.14, currency: 'GBP', productFeed: true, priority: 'medium', note: 'Lower-tox cleaning fit; verify ingredient and environmental claims.' },
  { name: 'Britt’s Superfoods', pillars: ['wellness'], conversionRate: 3.03, approvalRate: 75.68, epc: 0.2, currency: 'GBP', productFeed: true, priority: 'medium', note: 'Food-first editorial context; avoid unsupported health outcomes.' },
]

export const awinProgrammeGaps = [
  { pillar: 'dogs', need: 'complete food, activity, hydration, DNA and evidence-led supplements', status: 'material-gap' },
  { pillar: 'outdoors', need: 'family camping, outdoor cooking, cool boxes and portable power', status: 'material-gap' },
  { pillar: 'home-energy', need: 'monitoring, portable power, solar and installer lead generation', status: 'material-gap' },
]
