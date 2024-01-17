/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {
      
      keyframes: {
        "open-menu": {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(0.8)'},
          '100%': { transform: 'scaleY(1)'}
        },
       
      },
      animation: {
        "open-menu": 'open-menu 0.35s ease-in-out forwards', 
      }
    },
  },
  plugins: [],
}

