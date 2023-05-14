/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('../src/Images/Home_image_3.jpg')",
     },
     screens: {
      '2xl': '1536px',
      '2xl': '1536px',
    },
    fontFamily: {
      decorative: ['Cinzel Decorative', 'cursive']
    }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}