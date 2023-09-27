/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#d9d9d9",
        gray: "rgba(255, 255, 255, 0.35)",
        mediumpurple: "#ba80e6",
        darkPurple: "#391952",
        lightPurple: "#BA80E6",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
