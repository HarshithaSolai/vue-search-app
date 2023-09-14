/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "abn-green": "#337872",
        "abn-yellow": "#F9D347",
      },
    },
  },
  plugins: [],
};
