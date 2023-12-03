/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#191A19",
        subtle:"#3C3C3C"
      }
    },
  },
  plugins: [],
}