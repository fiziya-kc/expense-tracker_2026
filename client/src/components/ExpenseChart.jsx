import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CATEGORIES } from './ExpenseForm';

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
  '#9966FF', '#FF9F40', '#C9CBCF', '#7BC8A4',
];

export default function ExpenseChart({ expenses }) {
  const categoryTotals = {};
  CATEGORIES.forEach((cat) => {
    categoryTotals[cat] = 0;
  });
  expenses.forEach((e) => {
    if (categoryTotals[e.category] !== undefined) {
      categoryTotals[e.category] += e.amount;
    }
  });

  const data = {
    labels: CATEGORIES,
    datasets: [
      {
        data: CATEGORIES.map((cat) => categoryTotals[cat]),
        backgroundColor: COLORS,
        borderWidth: 1,
      },
    ],
  };

  const hasData = data.datasets[0].data.some((v) => v > 0);

  return (
    <div className="expense-chart">
      <h2>Spending by Category</h2>
      {hasData ? (
        <div className="chart-wrapper">
          <Doughnut data={data} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
        </div>
      ) : (
        <p className="empty-state">No data for this period.</p>
      )}
    </div>
  );
}
