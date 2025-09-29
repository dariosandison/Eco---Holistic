// pages/privacy.js
import React from 'react';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  const updatedOn = new Date(2024, 9, 1).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <SEO
        title="Privacy Policy — Eco & Holistic"
        description="Learn how Eco & Holistic collects, uses, and protects your data. Read our privacy practices, cookies policy, and how to contact us with questions."
        canonical="/privacy"
        noindex={false}
      />

      <main className="container prose mx-auto px-4 py-12">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-neutral-500">Last updated: {updatedOn}</p>

        <p>
          We respect your privacy. This page explains what information we collect,
          how we use it, and the choices you have. We strive to collect the minimum
          amount of personal information necessary to provide our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information that you provide directly (e.g., your email if
          you contact us), as well as non-identifying usage data (e.g., pages viewed
          and basic analytics). We do not sell your personal information.
        </p>

        <h2>Cookies &amp; Analytics</h2>
        <p>
          We may use cookies or similar technologies to remember preferences and
          improve site performance. You can control cookies via your browser settings.
        </p>

        <h2>How We Use Information</h2>
        <ul>
          <li>To operate, maintain, and improve our website and content</li>
          <li>To respond to inquiries or support requests</li>
          <li>To analyze aggregate usage and performance trends</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell personal data. Limited service providers may process data on
          our behalf to operate the site (e.g., hosting). These providers are
          obligated to safeguard your information.
        </p>

        <h2>Your Choices</h2>
        <p>
          You can disable cookies in your browser, and you may contact us to request
          access or deletion of personal information we hold about you, if any.
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
