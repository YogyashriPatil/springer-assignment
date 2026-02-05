# 📊 Sales Analytics Dashboard

A modern **Sales Analytics Dashboard** built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, following the **Atomic Design Architecture**.

This project visualizes yearly sales performance (2022–2024) using interactive charts and real API data in a professional SaaS-style interface.

---

## 🚀 Live Demo

🔗 https://springer-assignment-one.vercel.app/ 
---

## 🧠 Project Overview

This dashboard demonstrates how to build a **scalable, production-ready analytics UI** using modern frontend technologies and architecture patterns.

It includes:

✔ Interactive charts  
✔ Real API integration  
✔ Reusable UI components  
✔ Atomic design structure  
✔ Professional dashboard layout  

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 | React Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Recharts | Data visualization |
| Fake Store API | Sales data source |
| Vercel | Deployment platform |

---

## ⚛️ Architecture — Atomic Design

The project follows **Atomic Design** for maintainable UI structure:

```
components/
│
├── atoms/        → Button, Input
├── molecules/    → StatCard, ChartCard
├── organisms/    → SalesChart
├── templates/    → Layout structure
└── pages/        → Dashboard page
```

This makes the application **scalable**, **organized**, and industry-standard.

---

## 📊 Features

### 📈 Interactive Charts
Users can switch between:

- Bar Chart  
- Line Chart  
- Pie Chart  

Built using **Recharts**.

---

### 🎛 Custom Sales Filter
Users can enter a sales threshold to dynamically filter chart data.

---

### 🌍 Real API Integration
Data is fetched from:

```
https://fakestoreapi.com/products
```

The application processes product prices and groups them into yearly sales totals.

---

### 💎 Modern Dashboard UI
- Glassmorphism cards  
- Dark gradient background  
- Responsive layout  
- Hover animations  
- SaaS-style dashboard design  

---

## 🖥️ Dashboard Sections

| Section | Description |
|--------|-------------|
| Header | Dashboard title & status |
| Stats Cards | Total Sales, Best Year, Growth Rate |
| Chart Panel | Interactive chart display |
| Insights Panel | Key performance insights |

---

## 📂 Important Files

| File | Role |
|------|------|
| `SalesChart.tsx` | Main chart logic |
| `fetchSales.ts` | API data processing |
| `StatCard.tsx` | Dashboard statistics cards |
| `ChartCard.tsx` | Glassmorphism container |
| `dashboard/page.tsx` | Dashboard layout |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/YogyashriPatil/springer-assignment.git
cd sales-dashboard
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Locally
```bash
npm run dev
```

Open → http://localhost:3000/dashboard

---

## 🌍 Deployment (Vercel)

1. Push project to GitHub  
2. Go to Vercel  
3. Import the repository  
4. Click **Deploy**  

Your app will be live instantly 🚀

---

## 🔮 Future Enhancements

- Sidebar navigation  
- Dark/Light mode toggle  
- Authentication system  
- Database integration  
- Real-time analytics  
- Export reports  

---

## 👩‍💻 Author

Frontend dashboard project built using modern React architecture and UI design patterns.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and feel free to fork & improve!
