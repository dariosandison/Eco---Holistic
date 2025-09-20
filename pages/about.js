import SEO from "../components/SEO";
<SEO title="About" path="/about" />

import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO title="About — Wild & Well" description="Our mission: practical eco living and holistic health." />
      <main className="container">
        <h1 className="h1">About Wild &amp; Well</h1>
        <p>
          Wild &amp; Well is a simple resource for eco-friendly habits and holistic
          health. We test products, summarize research in plain language, and
          share recipes and routines that are easy to stick with.
        </p>
        <p className="muted">This site may earn from qualifying purchases (read our disclosure in the footer).</p>
      </main>
    </>
  );
}

