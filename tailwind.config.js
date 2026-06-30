export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#378ADD",
        success: "#1D9E75",
        ink: "#172033",
      },
      fontFamily: {
        sans: ["Sarabun", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(23, 32, 51, 0.08)",
      },
    },
  },
  plugins: [],
};
