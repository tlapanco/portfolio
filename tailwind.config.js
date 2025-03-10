/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': 'rgb(14, 122, 141)',
        'main-purple': 'rgb(150, 139, 168)'
      },
      boxShadow: {
        'main-blue': '0 25px 50px -12px rgb(14, 122, 141)'
      }
    },
  },
  plugins: [],
}