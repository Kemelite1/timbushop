/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseblack: '#0a0b0b',
        basewhite: '#fafafa',
        primary: '#008080',
        primary100: '#d5ffff',
        primary200: '#aaffff',
        primary300: '#80ffff',
        primary400: '#55ffff', 
        primary500: '#2bffff',
        primary600: '#00ffff',
        primary700: '#00d5d5',
        primary800: '#00aaaa',
        primary900: '#006666',
        primary1000: '#004d4d',
        secondary: '#AAB9C5',
        secondary100: '#E7EBEF',
        secondary200: '#DAE1E7',
        secondary300: '#CED7DE',
        secondary400: '#C2CDD6',
        secondary500: '#B6C3CD',
        secondary600: '#92A5B5',
        secondary700: '#7991A4',
        secondary800: '#637D92',
        secondary900: '#4A5E6D',
        secondary1000: '#323F49',
        success: '#A4F4E7',
        success100: '#A4F4E7',
        success200: '#15B097',
        success300: '#0B7B69',
        warning: '#F4C790',
        warning100: '#F4C790',
        warning200: '#EDA145',
        warning300: '#CC7914',
        error: '#E4626F',
        error100: '#E4626F',
        eroor200: '#C03744',
        error300: '#8C1823',
        neutral100: '#e2e2e2',
        neutral200: '#cbcaca',
        neutral300: '#b4b2b2',
        neutral400: '#9d9a9a',
        neutral500: '#868181',
        neutral600: '#6f6969',
        neutral700: '#575252',
        neutral800: '#3f3a3a',
        neutral900: '#262323',
        neutral950: '#0A0B0B',
        neutral1000: '#0e0d0d', 
        herobg: '#f5f5f5',
        navbg: '#ffffff'
      },
      fontFamily: {
        'primary': [ 'Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
    },
  },
  plugins: [],
}

