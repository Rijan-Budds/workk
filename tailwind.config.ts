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
        '3xl': '1700px'
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
