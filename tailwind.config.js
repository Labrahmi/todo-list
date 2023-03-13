/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/*.js",
    "src/components/*.js",
    "public/index.html"
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}
