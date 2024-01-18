/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'sponsorgba': 'rgba(41, 72, 119, 0.30);',
        'missionrgba': 'rgba(3, 45, 107, 0.65);'
      },
    },
  },
  plugins: [],
}

