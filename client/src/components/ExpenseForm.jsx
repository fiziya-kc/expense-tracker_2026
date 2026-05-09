import React, { useState } from 'react';

const CATEGORIES = [
  'Food', 'Transport', 'Shopping', 'Entertainment',
  'Bills', 'Health', 'Education', 'Other',
];

export default function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount) return;

    onAddExpense({
      id: Date.now().toString(),
      description: description.trim(),
      amount: parseFloat(amount),
      category,
      date,
    });

    setDescription('');
    setAmount('');
    setCategory(CATEGORIES[0]);
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <div className="form-row">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="form-row">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export { CATEGORIES };
