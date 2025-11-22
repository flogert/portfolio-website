/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0B0D17',
          light: '#151932',
          accent: '#D0D6F9',
          neon: '#00D4FF',
          purple: '#B233FF',
        }
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0B0D17, #151932)',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
