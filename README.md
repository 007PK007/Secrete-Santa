# 🎁 Secret Santa Assignment App

A React-based tool to automate Secret Santa pairings for your team, with support for CSV uploads, exclusion rules from previous years, and downloadable results.

---

## 🚀 Features

- 📤 Upload employee list via CSV  
- 📤 Upload last year's assignments to avoid repeats  
- 🔄 Smart pairing logic with backtracking  
- 📄 Preview assignments in a responsive table  
- 📥 Download final assignments as CSV  
- ⚠️ Error handling for duplicates, invalid formats, and unsolvable constraints  

---

## 🛠️ Tech Stack

- React (with hooks)  
- Tailwind CSS for styling  
- PapaParse for CSV parsing  
- Modular Components for clean architecture  

---

## 📦 Project Setup

### 1. Clone or Create the Project

    npx create-react-app secrate_santa
    cd secrate_santa

### 2. Install Dependencies

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    npm install papaparse


### 3. Configure Tailwind

  tailwind.config.js

    module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
    extend: {},
    },
    plugins: [],
    }

  src/index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

  src/index.js

    import './index.css';

### 4. Run the App

    npm start
