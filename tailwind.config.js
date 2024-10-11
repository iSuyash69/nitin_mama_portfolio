/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#2d2d2d',
        'darker': '#1f2020',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],  // Default font
        inter: ['Inter', 'sans-serif'],     // Custom Inter font
      },
      screens:{
        'h-lg':{'raw':'(min-height:800px)'},
        'w-md': {'raw': '(min-width: 1000px) and (max-width: 1300px) and (max-height: 749px)'},
        'ipad': {'raw': '(min-height: 750px) and (min-width: 1000px) and (max-width: 1300px)'},
      },
    },
  },
  plugins: [],
};
