export const seo = { title: 'Server Error', noindex: true };

export default function FiveHundred() {
  return (
    <div className="prose">
      <h1>Something went wrong</h1>
      <p>We’ve logged the error and will fix it ASAP.</p>
    </div>
  );
}
