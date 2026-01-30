// components/MoneyPageFAQ.jsx
import StructuredData from "@/components/StructuredData";
import { getMoneyPageFaq } from "@/lib/moneyPageFaq";

export default function MoneyPageFAQ({ slug }) {
  const faqs = getMoneyPageFaq(slug);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="mt-14">
      <StructuredData data={faqLd} />
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
        Quick answers to the questions people usually have before buying.
      </p>

      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-2xl border bg-white p-4">
            <summary className="cursor-pointer font-semibold text-zinc-900">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
