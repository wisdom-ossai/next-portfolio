/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const { colors } = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1360px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        mono: ["var(--font-inter)", ...fontFamily.mono],
        bodyFont: ["var(--font-montserrat)"],
        titleFont: ["var(--font-inter)"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      colors: {
        ...colors,
        // bodyColor: "#1C1C1C",
        bodyColor: "#0A192F",
        textGreen: "#64FFDA",
        textLight: "#CCd6f6",
        textDark: "#8892B0",
        primary: "#175fff",
        "primary-light": "#89A9FF",
        "primary-dark": "#0033B9",
        secondary: "#FFB800",
        hoverColor: "rgba(100, 255, 218, 0.1)",
        "body-color": {
          50: "#E6EAF2",
          100: "#B3BCD9",
          200: "#8093C0",
          300: "#4D6AA7",
          400: "#1A419E",
          500: "#0A192F", // Base color
          600: "#081526",
          700: "#06121E",
          800: "#040D15",
          900: "#02070D",
        },
      },
    },
  },
  plugins: [],
};
