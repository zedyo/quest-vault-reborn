/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dungeon: {
          950: '#0f0f1a',
          900: '#1a1a2e',
          800: '#16213e',
          700: '#0f3460',
          600: '#1a3a5c',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        parchment: {
          100: '#fef9e7',
          200: '#fdf3c4',
          300: '#fae8a0',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
