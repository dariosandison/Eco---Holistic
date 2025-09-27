// components/NewsletterBar.js
import { useState } from 'react';

export default function NewsletterBar() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | thanks

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // Hook up later to a real provider (Beehiiv/Mailchimp). For now show a thank you.
    setState('thanks');
  }

  return (
    <div className="newsletter-floating" role="complementary" aria-label="Newsletter">
      {state === 'thanks' ? (
        <div className="newsletter-inner">
          <strong>Thanks!</strong> You’ll hear from us soon.
        </div>
      ) : (
        <form className="newsletter-inner" onSubmit={onSubmit}>
          <span className="newsletter-title">Get the Good Stuff</span>
          <input
            className="news-input"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            aria-label="Email address"
            required
          />
          <button className="btn" type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}
