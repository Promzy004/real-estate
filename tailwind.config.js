 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
        //background image for the hero section
        'custom-image': "url('./src/assets/images/hero.png')"
      },
      colors: {
        primaryColor: '#0984E3'
      }
    },
  },
  plugins: [],
}
