# my-project

🎁 Secret Santa Assignment App
A React-based tool to automate Secret Santa pairings for your team, with support for CSV uploads, exclusion rules from previous years, and downloadable results.

---

🚀 Features
📤 Upload employee list via CSV

📤 Upload last year's assignments to avoid repeats

🔄 Smart pairing logic with backtracking

📄 Preview assignments in a responsive table

📥 Download final assignments as CSV

⚠️ Error handling for duplicates, invalid formats, and unsolvable constraints

---

🛠️ Tech Stack
React (with hooks)

Tailwind CSS for styling

PapaParse for CSV parsing

Modular Components for clean architecture

---

📦 Project Setup

1. Clone or Create the Project
If you already have the code, navigate to the project folder:

cd secrate_santa
If you're starting fresh:

npx create-react-app secrate_santa
cd secrate_santa

2. Install Dependencies  
✅ Tailwind CSS  
npm install -D tailwindcss postcss autoprefixer  
npx tailwindcss init -p  

✅ PapaParse (for CSV parsing)  
npm install papaparse  

3. Configure Tailwind  
tailwind.config.js  
Update the content array:  

module.exports = {  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  
  theme: {  
    extend: {},  
  },  
  plugins: [],  
}  

src/index.css  
Replace the contents with:  

css  
@tailwind base;  
@tailwind components;  
@tailwind utilities;  

src/index.js  
Make sure it imports the CSS:  

import './index.css';  

4. Add Your App Code  
Replace the contents of src/App.js with your Secret Santa logic and UI. If you’ve modularized it, make sure your components are in src/components/ and your logic is in src/utils/.

5. Run the App  
bash  
npm start  


