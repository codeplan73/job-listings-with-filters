/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-desktop':"url('./assets/images/bg-header-desktop.svg')",
        'header-mobile':"url('./assets/images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
}