export const metadata = {
  title: "Natural Remedies & Supplements | Wild & Well",
  description: "Evidence-informed natural remedies and supplement explainers, designed for beginners.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Natural Remedies & Supplements</h1>
      <p className="text-zinc-700 mb-6">Evidence-informed natural remedies and supplement explainers, designed for beginners.</p>
      <p className="text-xs text-zinc-500 mb-8">Last updated: January 24, 2026</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/best-organic-supplements-beginners" className="underline">Organic supplements for beginners</a></li>
<li><a href="/best-adaptogens-beginners-guide" className="underline">Adaptogens for beginners</a></li>
<li><a href="/best-gut-health-supplements-beginners" className="underline">Gut health supplements</a></li>
<li><a href="/best-detox-support-foods" className="underline">Detox-support foods</a></li>
      </ul>
    </main>
  );
}