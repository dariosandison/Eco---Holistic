// components/ComparisonTable.jsx
import React from "react";

export default function ComparisonTable({ headers = [], rows = [], caption }) {
  return (
    <div className="ww-table-wrap">
      {caption ? <div className="ww-table-caption">{caption}</div> : null}
      <table className="ww-table">
        {headers.length ? (
          <thead>
            <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((c, ci) => <td key={ci}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .ww-table-wrap { overflow-x: auto; margin: 1rem 0; }
        .ww-table { width: 100%; border-collapse: collapse; }
        .ww-table th, .ww-table td {
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.6rem 0.8rem;
          text-align: left;
        }
        .ww-table thead th {
          background: rgba(255,255,255,0.06);
        }
      `}</style>
    </div>
  );
}
