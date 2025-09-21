export default function AffiliateNote() {
  return (
    <>
      <div className="aff">
        This page uses affiliate links. As an Amazon Associate, I earn from qualifying purchases at no extra cost to you.
      </div>
      <style jsx>{`
        .aff {
          margin-top: 28px;
          padding-top: 14px;
          border-top: 1px dashed #e7e7e7;
          color: #6b7280;
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
