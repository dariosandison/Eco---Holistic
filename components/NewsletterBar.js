// components/NewsletterBar.js
export default function NewsletterBar() {
  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-text">
          <strong>Join the list</strong>
          <span>Occasional tips & new guides—no spam.</span>
        </div>
        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks for subscribing!');
          }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="newsletter-input"
            aria-label="Email address"
          />
          <button className="btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
