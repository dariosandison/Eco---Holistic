// components/mdx/Disclosure.jsx
export default function Disclosure({ title = 'Details', children, open = false, className = '' }) {
  return (
    <details className={`rounded-2xl border p-4 [&_summary]:cursor-pointer ${className}`} open={open}>
      <summary className="font-medium">{title}</summary>
      <div className="mt-2 text-sm">{children}</div>
    </details>
  );
}

