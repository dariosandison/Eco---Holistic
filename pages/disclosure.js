export const seo = {
  title: 'Disclaimer',
  description:
    'Important information about health, fitness, and product guidance on Wild & Well.',
};

export default function Disclaimer() {
  const updated = '2025-01-01';
  return (
    <div className="prose">
      <h1>Disclaimer</h1>
      <p><strong>Last updated:</strong> {updated}</p>

      <h2>No Medical or Professional Advice</h2>
      <p>
        The content on this Site is for educational and informational purposes only and
        is not a substitute for professional medical advice, diagnosis, or treatment.
        Always seek the advice of your physician or other qualified health provider with
        any questions you may have regarding a medical condition. Never disregard
        professional advice or delay seeking it because of something you have read here.
        If you are experiencing an emergency, call your local emergency number
        immediately.
      </p>

      <h2>Fitness, Nutrition &amp; Supplementation</h2>
      <p>
        Exercise, diet, and supplements involve risks and may not be appropriate for all
        individuals. Evaluate product labels for allergens and consult a professional
        before starting any program.
      </p>

      <h2>Environmental &amp; Product Safety</h2>
      <p>
        We aim to present accurate information, but product formulations and regulations
        can change. Confirm details with the manufacturer before use.
      </p>

      <h2>Results Vary</h2>
      <p>
        Individual results depend on many factors. We make no guarantees of results or
        outcomes.
      </p>

      <h2>External Links</h2>
      <p>
        We are not responsible for the content, policies, or practices of third-party
        websites we link to.
      </p>
    </div>
  );
}
