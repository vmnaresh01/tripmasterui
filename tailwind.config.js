/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3563E9',
        'secondary': '#54D2C0',
        'dark': '#1E293B',
        'light': '#F8FAFC'
      },
      boxShadow: {
        'card': '0 10px 20px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
