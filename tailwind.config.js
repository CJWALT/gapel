/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{ 
        'rightSpiral': "url('./assets/img/right.png')", 
        'leftSpiral': "url('./assets/img/left.png')"
      },
      backgroundColor: {
        'sponsorgba': 'rgba(41, 72, 119, 0.30);',
        'missionrgba': 'rgba(3, 45, 107, 0.65);', 
        'impactrgba': 'rgba(8, 100, 238, 0.20);',
        'impactbgrgba': 'rgba(22, 56, 106, 0.90);',
        'contactbgrgba':'rgba(50, 121, 227, 0.30);',
        'fieldrgba': 'rgba(50, 121, 227, 0.30);'
      },
      boxShadow:{ 
        'impactShadow': '0px 2px 4px 0px #FFF;'
      },
      borderColor:{ 
        'impactBdColor': 'rgba(37, 93, 177, 0.70);'
      }
    },
  },
  plugins: [],
}

