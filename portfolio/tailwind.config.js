/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primario: "#faa2b2",
        secundario: "#77530a",
      },
      fontFamily: {
        titulo1: '"Parisienne", cursive',
        titulo2: '"MonteCarlo", cursive',
        parrafo: '"Crimson Pro", serif',
      },
    },
  },
  plugins: [],
};
