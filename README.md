# Expense Tracker 💰
Apne expenses track karne ka simple website. React + Node.js mein bana hai, aur data browser ke localStorage mein save hota hai (koi database nahi chahiye).
---
## Features
- **Expense Add karo** — Description, Amount, Category, Date ke saath
- **Categories** — Food, Transport, Shopping, Entertainment, Bills, Health, Education, Other
- **Search & Filter** — Text search, category filter, month filter
- **Monthly Summary** — Total spending dekho aur previous month se compare karo
- **Chart** — Doughnut chart mein category-wise spending dekhlo
- **Delete** — Koi bhi expense delete kar sakte ho
- **Data safe** — Browser band karne ke baad bhi data localStorage mein save rahega
---
## Kaise Run Karein (Step by Step)
### Pehli baar (sirf ek baar karna hai):
1. **PowerShell kholo** — Windows key + R press karo, `powershell` likho, Enter press karo
2. **Project folder mein jaao:**
   ```powershell
   cd C:\Users\fiziy\AppData\Local\Temp\opencode\expense-tracker
   ```
3. **Dependencies install karo:**
   ```powershell
   npm install
   ```
   *(yeh sirf pehli baar karna hai)*
### App chalane ke liye (har baar):
```powershell
cd C:\Users\fiziy\AppData\Local\Temp\opencode\expense-tracker
npm run dev
```
Console mein kuch aisa dikhega:
```
VITE ready on http://localhost:5173
Server running on http://localhost:3001
```
**Browser mein kholo:** `http://localhost:5173`
### App band karna:
Console mein `Ctrl + C` press karo, phir `Y` press karo.
---
## Project Structure
```
expense-tracker/
├── client/                  # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ExpenseForm.jsx      # Add expense form
│   │   │   ├── ExpenseList.jsx      # Expenses table
│   │   │   ├── ExpenseSummary.jsx   # Monthly summary
│   │   │   ├── ExpenseChart.jsx     # Doughnut chart
│   │   │   └── FilterBar.jsx        # Search & filter
│   │   ├── hooks/
│   │   │   └── useLocalStorage.js   # LocalStorage hook
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── vite.config.js
├── server/                  # Express server
│   └── index.js
├── package.json
└── README.md
```
---
## Production Build
Sirf hosting ke liye ready karna hai to:
```powershell
npm run build
npm start
```
Phir `http://localhost:3001` pe app chalegi.
---
## Tech Stack
- **Frontend:** React 18, Vite, Chart.js, react-chartjs-2
- **Backend:** Node.js, Express
- **Data Storage:** Browser LocalStorage (kisi DB ki zaroorat nahi)
---
## GitHub Repo
Source code: [https://github.com/fiziya-kc/expense-tracker_2026](https://github.com/fiziya-kc/expense-tracker_2026)
