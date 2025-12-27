/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // toggle with <html class="dark">
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          light: "#3b82f6", // blue-500
          dark: "#1e40af", // blue-800
        },
        secondary: {
          DEFAULT: "#64748b", // slate-500
          light: "#94a3b8",
          dark: "#334155",
        },
        accent: {
          DEFAULT: "#22c55e", // green-500
          light: "#4ade80",
          dark: "#15803d",
        },
        background: {
          DEFAULT: "#f8fafc",
          dark: "#0f172a",
        },
        foreground: {
          DEFAULT: "#0f172a",
          light: "#334155",
          dark: "#f8fafc",
        },
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },

      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 15px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
