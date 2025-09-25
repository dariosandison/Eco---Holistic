export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-olive-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-olive-900/80">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Wild &amp; Well</p>
          <p>Affiliate links may earn us a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
