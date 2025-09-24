export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Wild & Well</p>
        <p>
          As an Amazon Associate, we may earn from qualifying purchases.
          Links marked “(affiliate)” help support this site.
        </p>
      </div>
    </footer>
  );
}

