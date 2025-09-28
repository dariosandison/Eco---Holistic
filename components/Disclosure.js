// components/Disclosure.js
export default function Disclosure({ className = "" }) {
  return (
    <div className={`disclosure ${className}`}>
      <strong>Heads up:</strong> We’re reader-supported. If you buy through our links, we may earn a commission. We only recommend products we genuinely use or research deeply.
    </div>
  );
}
