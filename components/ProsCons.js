// components/ProsCons.js
import React from 'react';

function List({ items = [], sign = '+', className }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <ul className={className}>
      {items.map((x, i) => (
        <li key={i}>
          <span aria-hidden="true" className="sign">
            {sign}
          </span>
          <span>{x}</span>
        </li>
      ))}
      <style jsx>{`
        ul {
          margin: 8px 0 0;
          padding: 0;
          list-style: none;
        }
        li {
          display: grid;
          grid-template-columns: 18px 1fr;
          gap: 8px;
          margin: 6px 0;
        }
        .sign {
          font-weight: 700;
          opacity: 0.7;
          display: inline-block;
          width: 18px;
          text-align: center;
        }
      `}</style>
    </ul>
  );
}

/**
 * ProsCons
 * Props:
 * - pros: string[]
 * - cons: string[]
 * - title?: string (section heading)
 * - compact?: boolean
 */
export default function ProsCons({ pros = [], cons = [], title, compact = false }) {
  const has = (arr) => Array.isArray(arr) && arr.length > 0;
  if (!has(pros) && !has(cons)) return null;

  return (
    <section className={`pc ${compact ? 'pc-compact' : ''}`}>
      {title ? <h3 className="pc-title">{title}</h3> : null}
      <div className="pc-grid">
        {has(pros) ? (
          <div className="pc-col">
            <div className="pc-head good" aria-label="Pros">
              Pros
            </div>
            <List items={pros} sign="+" />
          </div>
        ) : null}
        {has(cons) ? (
          <div className="pc-col">
            <div className="pc-head bad" aria-label="Cons">
              Cons
            </div>
            <List items={cons} sign="–" />
          </div>
        ) : null}
      </div>

      <style jsx>{`
        .pc {
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          padding: 14px;
          margin: 20px 0;
          background: #fff;
        }
        .pc-title {
          margin: 0 0 10px;
          font-size: 1.1rem;
          line-height: 1.3;
        }
        .pc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .pc-col {
          padding: 6px 0;
        }
        .pc-head {
          font-weight: 700;
          margin-bottom: 6px;
        }
        .pc-head.good {
          color: #136f2b;
        }
        .pc-head.bad {
          color: #9b2335;
        }
        @media (min-width: 720px) {
          .pc-grid {
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }
          .pc-compact .pc-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
