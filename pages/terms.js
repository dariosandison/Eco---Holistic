// pages/terms.js
import React from 'react';
import SEO from '../components/SEO';

export default function TermsPage() {
  const updatedOn = new Date(2024, 9, 1).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <SEO
        title="Terms of Use — Eco & Holistic"
        description="Read the terms that govern your use of Eco & Holistic, including disclaimers, limitations of liability, and contact information."
        canonical="/terms"
        noindex={false}
      />

      <main className="container prose mx-auto px-4 py-12">
        <h1>Terms of Use</h1>
        <p className="text-sm text-neutral-500">Last updated: {updatedOn}</p>

        <p>
          By using this website, you agree to these Terms of Use. If you do not agree,
          please do not use the site.
        </p>

        <h2>Use of Content</h2>
        <p>
          All content is provided for informational purposes only and is not a
          substitute for professional advice. You agree not to copy, distribute, or
          create derivative works without permission.
        </p>

        <h2>Disclaimers</h2>
        <p>
          We make no warranties regarding the accuracy, completeness, or reliability
          of the content. Your use of the site is at your own risk.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Eco &amp; Holistic disclaims all
          liability for any damages arising from your use of the site.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the site
          after changes means you accept the updated Terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:hello@ecoholistic.app">hello@ecoholistic.app</a>
          <br />
          Mail: Eco &amp; Holistic, 123 Calm Lane, Greentown, USA
        </p>
      </main>
    </>
  );
}

