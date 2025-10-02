import React from 'react';

/**
 * Flexible comparison table for MDX.
 *
 * Usage examples in MDX:
 * <ComparisonTable columns="Name, Price, Score" rows={[
 *   ["Widget A", "$29", "8/10"],
 *   ["Widget B", "$39", "9/10"]
 * ]} />
 *
 * or with objects:
 * <ComparisonTable columns={["name", "price", "score"]} rows={[
 *   { name: "Widget A", price: "$29", score: "8/10" },
 *   { name: "Widget B", price: "$39", score: "9/10" }
 * ]} />
 *
 * or:
 * <ComparisonTable>
 *   <thead>...</thead>
 *   <tbody>...</tbody>
 * </ComparisonTable>
 */
export default function ComparisonTable({
  columns,
  rows,
  data, // alias for rows
  caption,
  compact = false,
  striped = true,
  children,
  ...props
}) {
  const resolvedRows = Array.isArray(rows) && rows.length ? rows : Array.isArray(data) ? data : [];
  const resolvedColumns = Array.isArray(columns)
    ? columns
    : typeof columns === 'string'
      ? columns.split(',').map((c) => c.trim())
      : [];

  // Normalize rows to array-of-arrays based on columns if objects are passed
  const normalized =
    resolvedRows.length && resolvedColumns.length && typeof resolvedRows[0] === 'object' && !Array.isArray(resolvedRows[0])
      ? resolvedRows.map((obj) => resolvedColumns.map((key) => obj[key]))
      : resolvedRows;

  const cellPadding = compact ? '8px 10px' : '12px 14px';
  const fontSize = compact ? 14 : 15;

  // If children are provided, render verbatim (MDX can include a custom table)
  if (children) {
    return (
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            overflow: 'hidden',
            fontSize,
          }}
          {...props}
        >
          {caption ? <caption style={{ captionSide: 'top', padding: '8px 0', fontWeight: 600 }}>{caption}</caption> : null}
          {children}
        </table>
      </div>
    );
  }

  // Otherwise, build the table from props
  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: 0,
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          overflow: 'hidden',
          fontSize,
        }}
        {...props}
      >
        {caption ? <caption style={{ captionSide: 'top', padding: '8px 0', fontWeight: 600 }}>{caption}</caption> : null}

        {resolvedColumns.length ? (
          <thead>
            <tr>
              {resolvedColumns.map((col, i) => (
                <th
                  key={i}
                  style={{
                    textAlign: 'left',
                    padding: cellPadding,
                    background: '#f9fafb',
                    borderBottom: '1px solid #e5e7eb',
                    fontWeight: 600,
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}

        {normalized.length ? (
          <tbody>
            {normalized.map((row, rIdx) => {
              const asArray = Array.isArray(row) ? row : [row];
              const bg = striped && rIdx % 2 === 1 ? '#fcfcfd' : '#fff';
              return (
                <tr key={rIdx} style={{ background: bg }}>
                  {asArray.map((cell, cIdx) => (
                    <td key={cIdx} style={{ padding: cellPadding, borderBottom: '1px solid #f0f1f3', verticalAlign: 'top' }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        ) : null}
      </table>
    </div>
  );
}
