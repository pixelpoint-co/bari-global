/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        plex: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

