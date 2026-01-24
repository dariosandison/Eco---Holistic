export const metadata = {
  title: "Nutrition & Organic Food | Wild & Well",
  description: "Nutrition-focused guides covering organic food choices, anti-inflammatory eating, and gentle dietary upgrades.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Nutrition & Organic Food</h1>
      <p className="text-zinc-700 mb-6">Nutrition-focused guides covering organic food choices, anti-inflammatory eating, and gentle dietary upgrades.</p>
      <p className="text-xs text-zinc-500 mb-8">Last updated: January 24, 2026</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/best-anti-inflammatory-foods-shopping-list" className="underline">Anti-inflammatory foods</a></li>
<li><a href="/best-organic-protein-powders-uk" className="underline">Organic protein powders</a></li>
<li><a href="/best-organic-snacks-healthy" className="underline">Healthy organic snacks</a></li>
<li><a href="/best-organic-cooking-oils-uk" className="underline">Organic cooking oils</a></li>
      </ul>
    </main>
  );
}