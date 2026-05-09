import React from 'react';
import { CATEGORIES } from './ExpenseForm';

export default function FilterBar({ filters, onFilterChange }) {
  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search description..."
        value={filters.search}
        onChange={(e) => handleChange('search', e.target.value)}
      />
      <select
        value={filters.category}
        onChange={(e) => handleChange('category', e.target.value)}
      >
        <option value="">All Categories</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="month"
        value={filters.month}
        onChange={(e) => handleChange('month', e.target.value)}
      />
    </div>
  );
}
