# Frontend Template

A modern, minimal **React + Vite + Tailwind CSS** starter template for building
frontend applications quickly and consistently.

This template is designed to be:

- ⚡ Fast to start
- 🧼 Clean and minimal
- 🧱 Easy to extend
- 🎨 Design-token driven

---

## ✨ Tech Stack

- **React** – UI library
- **Vite** – Fast build tool and dev server
- **Tailwind CSS v4** – Utility-first CSS (via Vite plugin)
- **ESLint** – Code quality and linting

---

## 📁 Project Structure

```

src/
├─ App.jsx          # Main app component
├─ main.jsx         # App entry point
├─ index.css        # Tailwind entry (@import "tailwindcss")

```

> The structure is intentionally minimal.
> More folders (components, layouts, pages, etc.) can be added as needed.

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite will start the app at:

```
http://localhost:5173
```

---

## 🎨 Styling & Design Tokens

Tailwind CSS is installed using the **official Vite plugin**.

Global styles are loaded via:

```css
@import "tailwindcss";
```

Design tokens (colors, fonts, spacing) are defined in:

- `tailwind.config.js`
- or via `@theme` (Tailwind v4 recommended approach)

Example usage:

```jsx
<div className="bg-primary text-white p-4 rounded-md">Primary Card</div>
```

---

## 🧩 ESLint

ESLint is preconfigured to:

- Catch common React issues
- Enforce hooks rules
- Improve code consistency

Lint manually with:

```bash
npm run lint
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📜 License

MIT – free to use, modify, and distribute.

---

Happy coding 🚀
