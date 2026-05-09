import React from 'react';

export default function ExpenseSummary({ expenses, selectedMonth }) {
  const filtered = selectedMonth
    ? expenses.filter((e) => e.date.startsWith(selectedMonth))
    : expenses;

  const total = filtered.reduce((sum, e) => sum + e.amount, 0);

  const [year, month] = selectedMonth ? selectedMonth.split('-').map(Number) : [];
  const prevDate = new Date(year, month - 2, 1);
  const prevMonth = `${prevDate.getFullYear()}-${String(prevDate.getMonth() + 1).padStart(2, '0')}`;
  const prevFiltered = expenses.filter((e) => e.date.startsWith(prevMonth));
  const prevTotal = prevFiltered.reduce((sum, e) => sum + e.amount, 0);

  const diff = prevTotal > 0 ? ((total - prevTotal) / prevTotal * 100).toFixed(1) : null;

  return (
    <div className="expense-summary">
      <div className="summary-card">
        <span className="summary-label">Total</span>
        <span className="summary-value">${total.toFixed(2)}</span>
        <span className="summary-count">{filtered.length} transactions</span>
      </div>
      {diff !== null && (
        <div className="summary-card">
          <span className="summary-label">vs Last Month</span>
          <span className={`summary-value ${diff >= 0 ? 'up' : 'down'}`}>
            {diff >= 0 ? '+' : ''}{diff}%
          </span>
        </div>
      )}
    </div>
  );
}
