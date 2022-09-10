/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ECE1DB',
        'btn' : '#A45050',
        'btn-hover' : '#A45050',
        'btn-pressed' : '#583D3D',
        'btn-text' : '#FFFFFF',
      }
    },
  },
  plugins: [],
}