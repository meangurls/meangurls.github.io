/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkish: '#ff85c0',
        deepPink: '#ff4081',
      },
    },
  },
  plugins: [],
}


