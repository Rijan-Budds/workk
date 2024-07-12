import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#187EC0',
        secondary: '#E0630A',
        heading: '#313131',
        body: '#5D5F69',
        background: '#F8FAFD ',
        border: '#E7EEF8',
        primaryLighter: '#F1F7FB',
        primaryLight: '#CDDFED',
        primaryDark: '#1A86CC',
        secondaryLighter: '#FDF6F0'


      },
      screens: {
        '2xl_lg': '1700px',
        '3xl': '1800px',
        '4xl': '1900px',
        '5xl': '2000px'
      }
    },
    fontFamily: {
      workSans: ['var(--font-workSans)'],
      poppins: ['var(--font-poppins)'],
      inter: ['var(--font-inter)'],
    },
  },
  plugins: [],
}
export default config
