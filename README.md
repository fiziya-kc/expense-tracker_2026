# Expense Tracker 💰
A simple web app to track your daily expenses. Built with React + Node.js. Data is stored in your browser's localStorage (no database required).
---
## Features
- **Add Expenses** — with Description, Amount, Category, and Date
- **Categories** — Food, Transport, Shopping, Entertainment, Bills, Health, Education, Other
- **Search & Filter** — search by text, filter by category, filter by month
- **Monthly Summary** — view total spending and compare with previous month
- **Chart** — doughnut chart showing category-wise spending breakdown
- **Delete** — remove any expense entry
- **Persistent Data** — data stays saved in localStorage even after closing the browser
---
## How to Run
### First time setup (one-time only):
1. **Open PowerShell** — Press `Windows + R`, type `powershell`, press Enter
2. **Go to project folder:**
   ```powershell
   cd C:\Users\fiziy\AppData\Local\Temp\opencode\expense-tracker
   ```
3. **Install dependencies:**
   ```powershell
   npm install
   ```
### To start the app (every time):
```powershell
cd C:\Users\fiziy\AppData\Local\Temp\opencode\expense-tracker
npm run dev
```
You'll see something like:
```
VITE ready on http://localhost:5173
Server running on http://localhost:3001
```
**Open in browser:** `http://localhost:5173`
### To stop the app:
Press `Ctrl + C` in the console, then press `Y`.
---
## Project Structure
---
## Production Build
To build for production:
```powershell
npm run build
npm start
```
Then open `http://localhost:3001` in your browser.
---
## Tech Stack
- **Frontend:** React 18, Vite, Chart.js, react-chartjs-2
- **Backend:** Node.js, Express
- **Data Storage:** Browser LocalStorage (no database needed)
---
## GitHub Repo
