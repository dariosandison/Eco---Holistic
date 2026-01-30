// lib/moneyPageFaq.js
// Simple FAQ sets for money pages. Rendered on-page + used for FAQPage schema.
// Keep answers conservative and practical.

function categoryFromSlug(slug) {
  const s = slug.toLowerCase();
  if (s.includes("water-filter")) return "water";
  if (s.includes("air-purifier") || s.includes("humidifier")) return "air";
  if (s.includes("shower-filter")) return "shower";
  if (s.includes("laundry")) return "laundry";
  if (s.includes("cookware") || s.includes("kitchen")) return "kitchen";
  if (s.includes("sleep")) return "sleep";
  if (s.includes("supplement") || s.includes("adaptogen") || s.includes("herbal") || s.includes("immune") || s.includes("gut-health")) return "supplements";
  if (s.includes("oats") || s.includes("chia") || s.includes("flax") || s.includes("olive-oil") || s.includes("matcha") || s.includes("protein") || s.includes("snacks") || s.includes("cooking-oils") || s.includes("fermented") || s.includes("anti-inflammatory") || s.includes("detox")) return "nutrition";
  if (s.includes("tracker") || s.includes("scale") || s.includes("bands") || s.includes("yoga") || s.includes("walking-shoes") || s.includes("foam-roller") || s.includes("activewear")) return "movement";
  return "starter";
}

const FAQ = {
  water: [
    { q: "Do I need an under‑sink filter, or is a jug enough?", a: "For most people, a jug is a good starter. Under‑sink is mainly about convenience if you’ll use filtered water daily and keep up with replacements." },
    { q: "What’s the hidden cost of water filters?", a: "Replacement filters. Always check the replacement price and schedule before buying — it’s the real long‑term cost." },
    { q: "Do certifications matter?", a: "They can, but don’t treat marketing claims as proof. Look for clear testing details, and choose a system you’ll maintain consistently." },
    { q: "How often should I replace filters?", a: "Follow the manufacturer schedule and adjust for your household usage. If you notice taste changes or slow flow, it’s usually time." },
    { q: "Which type is easiest for renters?", a: "Jugs and countertop gravity filters are easiest because they require no plumbing." },
  ],
  air: [
    { q: "How do I choose the right size air purifier?", a: "Match it to your room size. A small purifier in a large room won’t do much. Look for room-size guidance and run it consistently." },
    { q: "Do I need carbon filters as well as HEPA?", a: "HEPA helps with particles (dust/pollen). Carbon helps with odours and some gases. If smell sensitivity is a big issue, carbon can be worth it." },
    { q: "What’s the ongoing cost?", a: "Filters. Before buying, check replacement prices and how often you’ll change them." },
    { q: "Is it okay to run an air purifier overnight?", a: "Yes — many people do. Prioritise a quiet mode you can tolerate." },
    { q: "Should I buy an expensive smart purifier?", a: "Not necessarily. A reliable purifier you run daily beats an expensive one you rarely use." },
  ],
  shower: [
    { q: "Do shower filters work for hard water?", a: "Many people find them helpful for comfort, but expectations should be realistic. Hard water scale is a separate issue and filters vary widely." },
    { q: "How often do cartridges need replacing?", a: "It depends on the filter and your usage. Check cartridge prices and set a reminder — performance drops when replacements slip." },
    { q: "Will a shower filter fix hair/skin issues?", a: "Sometimes it helps, but it’s not guaranteed. If you have persistent irritation, consider fragrance-free products and consult a clinician if needed." },
    { q: "Are all shower filters the same?", a: "No. Design, flow rate, and cartridge quality vary. Choose one with easy replacements and clear instructions." },
    { q: "What should I check before buying?", a: "Your fitting type, cartridge pricing, and whether replacements are easy to buy in the UK." },
  ],
  laundry: [
    { q: "Is fragrance-free always better for sensitive skin?", a: "It often helps, but not always. Look for simple formulas and avoid overdosing detergent so it rinses out properly." },
    { q: "Do I need fabric softener?", a: "Usually not. If you want softness, start with correct dosing and consider a simpler routine before adding extras." },
    { q: "Why do clothes still smell after washing?", a: "Often buildup or overdosing. Use the right dose, clean the machine, and don’t leave damp laundry sitting." },
    { q: "Is “eco” detergent automatically low-irritant?", a: "No. ‘Eco’ can refer to biodegradability, not skin sensitivity. Check for fragrance and keep dosing minimal." },
    { q: "What’s the simplest routine?", a: "Fragrance-free detergent, correct dosing, and an occasional machine-clean cycle. Add boosters only if needed." },
  ],
  kitchen: [
    { q: "Do I need to replace all my cookware at once?", a: "No. Replace one piece at a time — start with what you use daily (frying pan, saucepan)." },
    { q: "What’s the most practical ‘non-toxic’ starter choice?", a: "Stainless steel or cast iron are durable. The best option is the one you’ll actually use and maintain." },
    { q: "Do I need a full set?", a: "Most people don’t. One or two reliable pieces beats a cupboard of barely-used items." },
    { q: "What about care and maintenance?", a: "Maintenance is part of the decision. Choose materials that match your willingness to care for them." },
    { q: "Is a coating automatically bad?", a: "Not automatically. Focus on durability and realistic use. Avoid anything that chips easily or needs delicate handling if you’re busy." },
  ],
  sleep: [
    { q: "What’s the biggest sleep upgrade that costs nothing?", a: "Consistent wake time + morning light. It’s a boring answer, but it works for many people." },
    { q: "Do sleep supplements actually work?", a: "Sometimes, modestly. Start low, use one change at a time, and check interactions if you’re medicated or pregnant." },
    { q: "Is an expensive gadget worth it?", a: "Usually not before you’ve tried basics: temperature, light, noise, and caffeine timing." },
    { q: "How long should I trial a change?", a: "Give a routine 1–2 weeks if it’s safe and practical. Track fewer bad nights rather than perfect sleep." },
    { q: "What should I avoid?", a: "Anything promising ‘knockout’ results, and complicated stacks that make your routine harder to stick to." },
  ],
  supplements: [
    { q: "Should I take multiple supplements at once?", a: "Better not. Start with one change at a time so you can tell what helps." },
    { q: "How do I check supplement safety?", a: "If you’re pregnant, medicated, or managing a condition, check with a qualified clinician. Look for sensible dosages and reputable brands." },
    { q: "Are higher doses better?", a: "Not usually. More isn’t automatically better and can increase side effects or interactions." },
    { q: "How long should I take a supplement?", a: "It depends. Reassess periodically — some are helpful short-term, others are unnecessary long-term." },
    { q: "What’s the simplest approach?", a: "Basics first (sleep, diet, movement), then one targeted supplement if there’s a clear reason." },
  ],
  nutrition: [
    { q: "How do I choose staples without overthinking?", a: "Pick foods you’ll use weekly. Consistency beats novelty." },
    { q: "Does storage really matter?", a: "Yes. Oils and ground seeds lose quality faster with heat, light, and air." },
    { q: "Is organic always necessary?", a: "Not always. Prioritise what you eat most often and what fits your budget." },
    { q: "How do I avoid wasting money?", a: "Buy smaller amounts first and only scale up once you know you’ll use them before freshness drops." },
    { q: "What’s the easiest win?", a: "Simple staples: oats, olive oil, seeds — stored well and used regularly." },
  ],
  movement: [
    { q: "What’s the best beginner equipment?", a: "The simplest tool you’ll use weekly: bands, comfortable shoes, or a mat." },
    { q: "Do I need expensive gear?", a: "Not usually. Comfort and consistency matter more than features." },
    { q: "How do I avoid buying the wrong size?", a: "Measure your space and check return policies. Fit and comfort vary." },
    { q: "What if I’m busy?", a: "Choose low-friction basics — a small kit used often beats a big kit unused." },
    { q: "What’s a good progression?", a: "Start simple, build the habit, then upgrade only where a real need appears." },
  ],
  starter: [
    { q: "Where should I start?", a: "Pick one room or routine and make 1–2 swaps you can maintain. High-contact items first." },
    { q: "How do I avoid buying too much?", a: "Start small. Trial one change at a time before investing in upgrades." },
    { q: "What matters most?", a: "Consistency. The best product is the one you actually use and keep up with." },
    { q: "What should I avoid?", a: "Vague marketing claims and bundles that look impressive but don’t match your routine." },
    { q: "Is there a ‘perfect’ setup?", a: "No — aim for better, not perfect. Practical wins compound over time." },
  ],
};

export function getMoneyPageFaq(slug) {
  const key = categoryFromSlug(slug);
  return FAQ[key] || FAQ.starter;
}
