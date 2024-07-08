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
    },
    fontFamily: {
      workSans: ['var(--font-workSans)'],
      poppins: ['var(--font-poppins)'],
    },
  },
  plugins: [],
}
export default config
