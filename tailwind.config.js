/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warme, mystische Dungeon-Palette: dunkles Anthrazit/Braun (gebranntes Holz,
        // altes Leder) mit Gold/Fackelschein- und Pergament-Akzenten.
        dungeon: {
          950: '#0f0b07', // Seitenhintergrund (warmes Fast-Schwarz)
          900: '#17110a', // Kopf-/Fußzeile, erhöhte dunkle Flächen
          850: '#1e160e', // Zwischenebene
          800: '#261c12', // Kartenhintergrund (dunkles Braun)
          700: '#3a2c1d', // Rahmen (warmes Braun)
          600: '#4f3d28', // Hover-Rahmen / Trenner
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
