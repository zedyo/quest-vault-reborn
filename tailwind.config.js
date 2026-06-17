/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // `dungeon` ist über CSS-Variablen (R G B-Kanäle) definiert → zur Laufzeit
        // per data-theme umschaltbar (s. src/index.css + src/theme.ts). Gold + Pergament
        // bleiben themeübergreifend konstante Akzente.
        dungeon: {
          950: 'rgb(var(--c-dungeon-950) / <alpha-value>)',
          900: 'rgb(var(--c-dungeon-900) / <alpha-value>)',
          850: 'rgb(var(--c-dungeon-850) / <alpha-value>)',
          800: 'rgb(var(--c-dungeon-800) / <alpha-value>)',
          700: 'rgb(var(--c-dungeon-700) / <alpha-value>)',
          600: 'rgb(var(--c-dungeon-600) / <alpha-value>)',
        },
        gold: {
          200: '#fde68a',
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
        // Cinzel = epische Fantasy-Serif für Überschriften; Inter = klare Lesbarkeit im Fließtext.
        display: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
