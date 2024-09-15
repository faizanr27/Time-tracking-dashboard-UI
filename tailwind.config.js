/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#0D1323',
        card1:'#5746EA',
        cardcolor:'#1D204B',
        cardhover:'#34397B',
        txcolor: '#787AB7',
        cardindi: {
          orange: '#FF8B64',
          blue: '#56C2E6',
          pink: '#FF5E7D',
          green: '#4BCF83',
          purple: '#7235D1',
          yellow: '#F1C75B'
        },
        
      }
    },
  },
  plugins: [],
}
