// components/Disclosure.jsx
import Link from 'next/link';

export default function Disclosure({
  children
}) {
  return (
    <aside className="disclosure" role="note" aria-label="Affiliate disclosure">
      {children ? children : (
        <>
          We’re reader-supported. If you buy through links on Wild &amp; Well, we may earn a commission at no extra cost to you.
          See our <Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link>.
        </>
      )}
    </aside>
  );
}
