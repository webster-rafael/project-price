/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: "Sora",
      },
      colors: {
        azulMain: "#05071A",
      },
      boxShadow: {
        cardServices: "rgb(16, 22, 54) 0px -10px 40px 0px inset",
      },
    },
  },
  plugins: [],
};
