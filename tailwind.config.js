/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dracula"],
  },
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans"],
      },
      backgroundColor: {
        light: "#f5f5f5",
        dark: "#333",
      },
      textColor: {
        light: "#333",
        dark: "#f5f5f5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

