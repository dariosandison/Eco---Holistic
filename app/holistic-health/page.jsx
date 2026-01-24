export const metadata = {
  title: "Holistic Health Guides | Wild & Well",
  description: "Holistic health guides covering natural remedies, daily habits, and whole-body wellness.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Holistic Health Guides</h1>
      <p className="text-zinc-700 mb-6">Holistic health guides covering natural remedies, daily habits, and whole-body wellness.</p>
      <p className="text-xs text-zinc-500 mb-8">Last updated: January 24, 2026</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/best-holistic-wellness-starter-kit" className="underline">Holistic wellness starter kit</a></li>
<li><a href="/best-herbal-remedies-for-stress-anxiety" className="underline">Herbal remedies for stress & anxiety</a></li>
<li><a href="/best-natural-sleep-remedies-non-pharma" className="underline">Natural sleep remedies</a></li>
<li><a href="/best-natural-immune-support-remedies" className="underline">Natural immune support</a></li>
      </ul>
    </main>
  );
}