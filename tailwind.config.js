/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
        accent: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        lavender: {
          50: "#faf6ff",
          100: "#f3edff",
          200: "#e9dfff",
          300: "#dcc8fe",
          400: "#c8a2fc",
          500: "#b57df8",
          600: "#a35af0",
          700: "#9145e8",
          800: "#7b3ad9",
          900: "#6932c7",
        },
        bg: {
          light: "#fdfcff",
          DEFAULT: "#f9f7ff",
          dark: "#f3f0ff",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "purple-glow": "0 0 30px rgba(168, 85, 247, 0.3)",
        "soft-purple": "0 10px 40px rgba(168, 85, 247, 0.15)",
      },
    },
  },
  plugins: [],
};
