import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseChart from './components/ExpenseChart';
import FilterBar from './components/FilterBar';

function getMonthStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

export default function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  const [filters, setFilters] = React.useState({
    search: '',
    category: '',
    month: getMonthStr(),
  });

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const filtered = expenses.filter((e) => {
    const matchSearch = !filters.search || e.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchCategory = !filters.category || e.category === filters.category;
    const matchMonth = !filters.month || e.date.startsWith(filters.month);
    return matchSearch && matchCategory && matchMonth;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Expense Tracker</h1>
      </header>
      <main className="app-main">
        <div className="sidebar">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseChart expenses={filtered} />
        </div>
        <div className="content">
          <ExpenseSummary expenses={expenses} selectedMonth={filters.month} />
          <FilterBar filters={filters} onFilterChange={setFilters} />
          <ExpenseList expenses={filtered} onDeleteExpense={handleDeleteExpense} />
        </div>
      </main>
    </div>
  );
}
