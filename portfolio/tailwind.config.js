/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        titulo1: '"Parisienne", cursive',
        titulo2: '"Sacramento", cursive',
        parrafo: '"Crimson Pro", serif'
      }
    },
  },
  plugins: [],
}

