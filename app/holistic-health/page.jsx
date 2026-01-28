export const metadata = {
  title: "Holistic Health | Wild & Well",
  description: "Holistic health covering natural remedies, daily habits, and whole-body wellness.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Holistic Health</h1>
      <p className="text-zinc-700 mb-6">Holistic health covering natural remedies, daily habits, and whole-body wellness.</p>
      <p className="text-xs text-zinc-500 mb-8">Last updated: January 28, 2026</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/blog/sleep-naturally-without-overwhelm" className="underline">How to sleep better naturally (cornerstone)</a></li>
        <li><a href="/best-holistic-wellness-starter-kit" className="underline">Holistic wellness starter kit (simple essentials)</a></li>
<li><a href="/best-herbal-remedies-for-stress-anxiety" className="underline">Herbal support for stress & anxiety</a></li>
<li><a href="/best-natural-sleep-remedies-non-pharma" className="underline">Natural sleep remedies (what helps)</a></li>
<li><a href="/best-natural-immune-support-remedies" className="underline">Immune support (simple options)</a></li>
      </ul>
    </main>
  );
}