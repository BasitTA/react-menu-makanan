/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'beef': 'url("./src/assets/Beef.png")',
        'seafood': 'url("./src/assets/Seafood.png")',
        'dessert': 'url("./src/assets/Dessert.png")',
        'drinks': 'url("./src/assets/Drinks.png")',
        'foods': 'url("./src/assets/All-Menus.png")',
      }
    },
  },
  plugins: [],
}

