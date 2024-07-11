import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E0630A',
        secondary: '#FFFFFF',
        tertiary: '',
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
