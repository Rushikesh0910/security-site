/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f172a", // Deep corporate blue
          charcoal: "#1e293b", // Dark gray for sections
          accent: "#f59e0b", // Amber/Gold for action buttons
        },
      },
    },
  },
  plugins: [],
};
