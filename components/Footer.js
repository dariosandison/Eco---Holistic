export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-5xl p-4 text-sm text-gray-600">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {year} Wild &amp; Well</p>
          <p>Affiliate links may earn us a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
