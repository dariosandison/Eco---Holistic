import SEO from "../../components/SEO";

export default function About() {
  return (
    <>
      <SEO title="About" description="What we stand for and how we review products." path="/about/" />
      <main className="container" style={{padding:'18px 0 28px'}}>
        <h1>About Wild & Well</h1>
        <p className="prose">
          We publish practical guides on eco-friendly living and holistic wellness. We value clarity over hype and keep product picks simple and transparent.
        </p>
        <h2>How we review</h2>
        <ul>
          <li>Focus on fewer additives and simpler materials.</li>
          <li>Cross-check labels and user reports.</li>
          <li>Test usability and reliability where possible.</li>
        </ul>
      </main>
    </>
  );
}
