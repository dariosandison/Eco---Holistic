// data/top10Meta.js

const commonRoutes = (topicHref, topicLabel, guideHref, guideLabel, altHref, altLabel) => ([
  {
    title: `Explore: ${topicLabel}`,
    href: topicHref,
    description: 'Start with the basics and avoid the common mistakes before you buy.',
    badge: 'Start here',
  },
  {
    title: `Read: ${guideLabel}`,
    href: guideHref,
    description: 'A practical guide that explains what to do first (often cheaper than buying).',
    badge: 'Guide',
  },
  {
    title: altLabel,
    href: altHref,
    description: 'A related shortlist for a different use-case, if your home is different.',
    badge: 'Compare',
  },
])

export const TOP10_META = {
  'best-air-purifiers-allergies-uk': {
    bestFor: ['Bedrooms', 'Hay fever / pollen', 'Pets', 'Quiet sleep'],
    routes: commonRoutes(
      '/topics/air-quality',
      'Air quality',
      '/blog/healthy-air-at-home',
      'Healthy air at home',
      '/best-air-purifiers-small-flats-uk',
      'Compare: Small flats shortlist',
    ),
    faqs: [
      { q: 'Do air purifiers help with pollen allergies?', a: 'They can reduce airborne particles indoors, but only if the unit is sized correctly for the room and you run it consistently during high pollen periods.' },
      { q: 'What matters most when choosing an air purifier?', a: 'Room-size coverage, true HEPA filtration for particles, realistic filter replacement costs, and low noise for bedrooms.' },
      { q: 'Do I need carbon filtration?', a: 'Carbon helps with odours and some VOCs, but it is not a replacement for ventilation. If smells bother you, carbon is worth paying for.' },
      { q: 'How often do filters need replacing?', a: 'It varies by model, home conditions, and run time. Always check replacement price and availability before buying.' },
      { q: 'Should I buy one big unit or two smaller ones?', a: 'Often you get better results covering the bedroom first, then adding a second unit later if needed.' },
      { q: 'Will a purifier fix damp or mould?', a: 'No. A purifier helps particles, but damp needs ventilation and often dehumidifying.' },
    ],
  },

  'best-air-purifiers-small-flats-uk': {
    bestFor: ['Small rooms', 'Studio flats', 'Low noise', 'Low running fuss'],
    routes: commonRoutes(
      '/topics/air-quality',
      'Air quality',
      '/blog/healthy-air-at-home',
      'Healthy air at home',
      '/best-air-purifiers-allergies-uk',
      'Compare: Allergy shortlist',
    ),
    faqs: [
      { q: 'What size air purifier is best for a small flat?', a: 'Size it to the room you care about most (often the bedroom). A too-small unit is the most common mistake.' },
      { q: 'Do I need a purifier in every room?', a: 'Not usually. Start with the bedroom or main living space and run it consistently. Add a second unit later if needed.' },
      { q: 'Are “smart” features worth it?', a: 'In small spaces, noise level and filter cost usually matter more than smart features.' },
      { q: 'How do I keep noise down?', a: 'Choose a model with a good quiet/night mode and run it longer at a lower speed rather than blasting it briefly.' },
      { q: 'Do purifiers remove cooking smells?', a: 'They can help a little if there is carbon, but ventilation is still the main fix for cooking odours.' },
      { q: 'What are the hidden costs?', a: 'Replacement filters. Check price and availability before buying.' },
    ],
  },

  'best-dehumidifiers-damp-mould-uk': {
    bestFor: ['Condensation', 'Damp + mould risk', 'Bedrooms', 'Drying laundry indoors'],
    routes: commonRoutes(
      '/topics/air-quality',
      'Air quality',
      '/blog/damp-and-mould-uk-renters-playbook',
      'Damp & mould renters playbook',
      '/blog/winter-humidity-guide',
      'Compare: Winter humidity guide',
    ),
    faqs: [
      { q: 'Is a dehumidifier worth it for damp?', a: 'Often yes — especially if you see condensation, musty smells, or mould risk. It reduces indoor humidity so surfaces stay drier.' },
      { q: 'What size dehumidifier do I need?', a: 'Match the unit to the room size and how wet the home is. Laundry drying indoors usually needs more capacity.' },
      { q: 'Do I need an air purifier as well?', a: 'Not for moisture. A purifier helps particles; a dehumidifier targets humidity. Start with the tool that matches your problem.' },
      { q: 'How much does it cost to run?', a: 'It depends on the unit, target humidity, and how wet the home is. Many homes only need it a few hours a day once humidity is under control.' },
      { q: 'Should I buy a desiccant dehumidifier?', a: 'Desiccant models can be better in colder rooms but may cost more to run. Compressor models are common for typical heated UK homes.' },
      { q: 'Will it stop mould permanently?', a: 'It can reduce risk, but you also need ventilation, fix leaks, and treat existing mould safely.' },
    ],
  },

  'best-water-filters-uk': {
    bestFor: ['Taste + odour', 'Limescale reduction', 'Fridge jugs', 'Under-sink options'],
    routes: commonRoutes(
      '/topics/water',
      'Water',
      '/blog/water-filter-buying-guide-uk',
      'Water filter buying guide (UK)',
      '/best-shower-filters-uk-hard-water',
      'Compare: Shower filters shortlist',
    ),
    faqs: [
      { q: 'Do water filters remove limescale?', a: 'Many filters improve taste and reduce some minerals, but not all are designed for limescale. Check whether the filter targets hardness.' },
      { q: 'Are filter jugs enough?', a: 'For many homes, a jug is a simple start for taste. If you want higher capacity or convenience, consider an under-sink system.' },
      { q: 'Do filters remove fluoride?', a: 'Most common carbon jug filters do not remove fluoride. Fluoride removal usually requires specific media like reverse osmosis or activated alumina.' },
      { q: 'How often do cartridges need changing?', a: 'It depends on the model and your usage. Replacement frequency is a key running cost — check it before you buy.' },
      { q: 'What about microplastics?', a: 'Some filters can reduce particles, but performance varies. Look for certifications and pore-size information where available.' },
      { q: 'Is bottled water better?', a: 'Not necessarily. A good filter can improve taste with less cost and waste than bottled water.' },
    ],
  },

  'best-shower-filters-uk-hard-water': {
    bestFor: ['Hard water areas', 'Dry/itchy skin', 'Fragrance-free routines', 'Easy install'],
    routes: commonRoutes(
      '/topics/water',
      'Water',
      '/blog/water-filter-buying-guide-uk',
      'Water filter buying guide (UK)',
      '/best-water-filters-uk',
      'Compare: Drinking water filters',
    ),
    faqs: [
      { q: 'Do shower filters actually work?', a: 'They can help with chlorine and some impurities, but results vary. Expectations should be realistic — they are not whole-house softeners.' },
      { q: 'Will a shower filter soften hard water?', a: 'Most shower filters do not truly soften hard water like a dedicated softener. They may improve feel for some people.' },
      { q: 'How often do shower filter cartridges need replacing?', a: 'It depends on the brand and water quality. Check cartridge cost and replacement intervals before buying.' },
      { q: 'Can a shower filter help eczema?', a: 'Some people find chlorine reduction helps irritation, but it is not a medical treatment. Patch-test and keep routines simple.' },
      { q: 'Is it easy to install?', a: 'Most are DIY: screw-on between hose and head. Ensure it fits your shower type.' },
      { q: 'What’s the biggest mistake?', a: 'Buying without checking replacement cartridge cost and availability.' },
    ],
  },

  'best-fragrance-free-laundry-detergents-uk': {
    bestFor: ['Sensitive skin', 'Babies', 'Fragrance-free homes', 'Low residue'],
    routes: commonRoutes(
      '/topics/fragrance-free',
      'Fragrance-free',
      '/blog/eco-laundry',
      'Eco laundry: simple routines',
      '/best-low-tox-products-for-beginners',
      'Compare: Low-tox beginners list',
    ),
    faqs: [
      { q: 'Is “unscented” the same as fragrance-free?', a: 'Not always. “Unscented” can still include masking fragrances. Look for truly fragrance-free or “no perfume” and check the ingredient list.' },
      { q: 'Do I need fabric softener?', a: 'Most people do not. Softener can leave residue; simpler routines often help sensitive skin.' },
      { q: 'What’s the best option for babies?', a: 'A fragrance-free detergent with a simple formula. Use the smallest effective dose and run an extra rinse if needed.' },
      { q: 'Why do clothes still smell after washing?', a: 'Residue, overloading, and low wash temperatures can all contribute. Try a hotter wash occasionally and don’t use too much detergent.' },
      { q: 'Is powder or liquid better?', a: 'Powder can be effective for whites and higher temps. Liquid is convenient for cold washes. Choose based on your routine.' },
      { q: 'How do I avoid skin irritation?', a: 'Use fragrance-free, dose correctly, and consider an extra rinse. Avoid boosters unless you really need them.' },
    ],
  },

  'best-humidifiers-for-bedrooms-uk': {
    bestFor: ['Dry winter air', 'Bedrooms', 'Quiet operation', 'Nasal comfort'],
    routes: commonRoutes(
      '/topics/sleep',
      'Sleep',
      '/blog/winter-humidity-guide',
      'Winter humidity guide',
      '/best-dehumidifiers-damp-mould-uk',
      'Compare: Dehumidifiers shortlist',
    ),
    faqs: [
      { q: 'Do bedrooms in the UK need a humidifier?', a: 'Sometimes in winter with heating on, air can feel dry. Use a humidifier only if humidity is consistently low.' },
      { q: 'What humidity level should I aim for?', a: 'Many people find roughly 40–60% comfortable. Too high increases mould risk.' },
      { q: 'Is a warm mist humidifier better?', a: 'Not necessarily. Cool mist is common and energy-efficient. Warm mist can feel nicer but uses more power and needs care around kids.' },
      { q: 'How do I keep it clean?', a: 'Clean and dry it regularly and follow the manufacturer instructions. Dirty humidifiers can grow bacteria and mould.' },
      { q: 'Do I need filtered water?', a: 'In hard water areas it can reduce mineral dust. Some models are less sensitive than others.' },
      { q: 'What’s the main risk?', a: 'Over-humidifying. Use a hygrometer and avoid pushing humidity too high.' },
    ],
  },

  'best-natural-sleep-support': {
    bestFor: ['Falling asleep', 'Staying asleep', 'Non-habit forming options', 'Simple routines'],
    routes: commonRoutes(
      '/topics/sleep',
      'Sleep',
      '/blog/sleep-naturally-simple-guide',
      'Sleep naturally: simple guide',
      '/best-natural-sleep-remedies-non-pharma',
      'Compare: Non-pharma remedies',
    ),
    faqs: [
      { q: 'What’s the best “natural” sleep support?', a: 'The best option depends on the problem (falling vs staying asleep). Start with basics first: light, caffeine timing, and bedroom temperature.' },
      { q: 'Is magnesium good for sleep?', a: 'Some people find it helpful, especially if intake is low. Effects vary and it is not a guaranteed fix.' },
      { q: 'What about melatonin?', a: 'In the UK, melatonin is generally prescription-only. Focus on light timing and routine first.' },
      { q: 'Can supplements replace good sleep habits?', a: 'No. They work best as a small support on top of good sleep foundations.' },
      { q: 'How long should I try something before judging?', a: 'Give it 1–2 weeks for routine changes. For supplements, follow label guidance and stop if you feel worse.' },
      { q: 'When should I talk to a professional?', a: 'If insomnia is persistent, severe, or linked with snoring, breathing issues, or low mood, speak with a clinician.' },
    ],
  },

  'best-natural-sleep-remedies-non-pharma': {
    bestFor: ['Sleep routine reset', 'Anxiety support', 'Non-prescription tools', 'Gentle approaches'],
    routes: commonRoutes(
      '/topics/sleep',
      'Sleep',
      '/blog/sleep-naturally-simple-guide',
      'Sleep naturally: simple guide',
      '/best-natural-sleep-support',
      'Compare: Natural sleep supports',
    ),
    faqs: [
      { q: 'What are the most effective non-pharma sleep remedies?', a: 'Light timing, consistent wake time, cooler bedrooms, and reducing late caffeine and alcohol often beat supplements.' },
      { q: 'Does magnesium help anxiety-related sleep issues?', a: 'Some people find it calming, but effects vary. Start low, check interactions, and keep expectations realistic.' },
      { q: 'Are herbal teas useful?', a: 'They can help as a calming ritual. The routine can matter as much as the ingredient.' },
      { q: 'Should I use white noise?', a: 'If noise wakes you, white noise can be a simple fix. Keep volume low and place the device away from the bed.' },
      { q: 'Can exercise help sleep?', a: 'Yes, especially daytime movement. Avoid intense late-night workouts if they make you wired.' },
      { q: 'What’s the fastest win?', a: 'Get morning light and keep a consistent wake time for a week.' },
    ],
  },

  'best-extra-virgin-olive-oil-uk': {
    bestFor: ['Everyday cooking', 'Salads', 'High polyphenols', 'Good value bottles'],
    routes: commonRoutes(
      '/nutrition/organic-single-ingredient',
      'Single-ingredient nutrition',
      '/best-organic-cooking-oils-uk',
      'Organic cooking oils',
      '/best-organic-matcha-uk',
      'Compare: Organic matcha shortlist',
    ),
    faqs: [
      { q: 'Is extra virgin olive oil safe for cooking?', a: 'For most everyday cooking, yes. Choose a quality oil and avoid burning it. For very high heat, consider other oils.' },
      { q: 'What does “high polyphenol” mean?', a: 'Polyphenols are natural compounds linked to flavour and potential health benefits. Higher polyphenols often taste more peppery/bitter.' },
      { q: 'How do I store olive oil?', a: 'Keep it cool, dark, and tightly sealed. Heat and light speed up oxidation.' },
      { q: 'How long does EVOO last?', a: 'It’s freshest within months of opening. Buy smaller bottles if you don’t use it quickly.' },
      { q: 'Is organic worth it?', a: 'If budget allows, it can reduce pesticide exposure. But quality and freshness matter more than the label alone.' },
      { q: 'What’s the biggest mistake?', a: 'Buying a huge bottle you can’t finish while it’s fresh.' },
    ],
  },
}

export function getTop10Meta(slug) {
  return TOP10_META[slug] || { bestFor: [], routes: [], faqs: [] }
}
