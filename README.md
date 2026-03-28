# 🚀 Ramya Sri – Portfolio (React + Vite)

A professional developer portfolio built with **React 18 + Vite**.

> ✅ Uses **Vite** instead of Create React App to avoid npm audit issues.

---

## 📁 Project Structure

```
portfolio/
├── index.html               ← Vite entry (in root, not public/)
├── vite.config.js
├── package.json
└── src/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Skills.jsx
    │   ├── Experience.jsx
    │   ├── Projects.jsx
    │   ├── Certificates.jsx
    │   ├── Education.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── App.jsx
    ├── App.css        ← All styles here
    └── main.jsx
```

---

## ⚡ Getting Started

### Step 1 — Install
```bash
npm install
```

### Step 2 — Run
```bash
npm run dev
```
Opens at **http://localhost:5173**

### Step 3 — Build for production
```bash
npm run build
```

---

## ✏️ Customization

- **Contact links** → `src/components/Contact.jsx`
- **Projects** → `src/components/Projects.jsx`
- **Skills** → `src/components/Skills.jsx`
- **Colors & fonts** → `src/App.css` (`:root` variables at the top)
