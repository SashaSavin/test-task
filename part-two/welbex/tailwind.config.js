export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        bl: "url('/src/assets/imgs/bg.png')",
        blmob: "url('/src/assets/imgs/mob-bgr.png')"
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        'light-text': '#e4e5ea',
        black: '#0e1014',
        'dark-gray': '#656566',
        royalblue: '#4077f3'
      },
      fontFamily: {
        font: 'Inter',
        montserrat: 'Montserrat'
      }
    }
  },
  container: {},
  plugins: [],
  mode: 'jit'
};
