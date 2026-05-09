import React from 'react';

export default function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="empty-state">No expenses found.</p>;
  }

  const sorted = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((expense) => (
            <tr key={expense.id}>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{expense.description}</td>
              <td><span className="category-badge">{expense.category}</span></td>
              <td className="amount">${expense.amount.toFixed(2)}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDeleteExpense(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
