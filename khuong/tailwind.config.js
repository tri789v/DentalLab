/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/App.js"],
  theme: {
    extend: {
      colors: {
        'maincolor': '#40A8AF',
        daisyui: {
          themes: ["light", "dark",],
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

