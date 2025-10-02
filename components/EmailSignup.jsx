import { useState } from 'react';

export default function EmailSignup({
  headline = 'Get the Wild & Well newsletter',
  sub = '1–2 bite-size tips a week. No spam.'
}) {
  const [email, setEmail] = useState('');
  const action = process.env.NEXT_PUBLIC_NEWSLETTER_URL || '';
  const disabled = !action;

  const handleSubmit = (e) => {
    if (disabled) {
      e.preventDefault();
      alert('Add NEXT_PUBLIC_NEWSLETTER_URL in your environment to enable the form.');
    }
  };

  return (
    <div className="border rounded-xl p-5 bg-gray-50">
      <h3 className="text-lg font-semibold">{headline}</h3>
      <p className="text-sm text-gray-600 mb-3">{sub}</p>
      <form method="post" action={action} onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="flex-1 border rounded-md px-3 py-2"
        />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">Subscribe</button>
      </form>
      {disabled && <p className="text-xs text-red-600 mt-2">Form disabled: set NEXT_PUBLIC_NEWSLETTER_URL.</p>}
    </div>
  );
}
