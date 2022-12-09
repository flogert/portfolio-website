/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'trees': "url('/trees.png')",
        'trees1': "url('/trees1.png')",
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
