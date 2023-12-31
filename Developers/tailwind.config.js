const { Lexend } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0066C5",
        secondary: "#4D90DB",
        dark: "#004B9B",
        accent: "#FF6600",
        accentSecondary: "#FF9933",
        neutral: "#F5F5F5",
      },
      borderRadius: {
        default: "12px",
        large: "45px",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
        sans: ["Lexend", "sans-serif"],
      },
      fontSize: {
        24: "24px",
      },
    },
  },
  plugins: [],
};
