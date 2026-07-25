/** @type {import('tailwindcss').Config} */
// Quest Vault Reborn — Tailwind-Theme (Design-System v2).
// Alle Farben laufen über CSS-Variablen aus src/theme.css, damit sich das
// komplette UI über  data-theme="overlord" | "heldentum"  live umschalten lässt.
//
// Zwei Token-Ebenen:
//  • SEMANTISCH (neu, bevorzugt für neuen Code): bg/surface/surface-2/line/fg/
//    muted/faint, accent(.deep/.bright/.soft/.line), onaccent, success/info/…
//  • LEGACY-BRÜCKE (dungeon/gold/gray): weiterhin nutzbar, per Theme-Variablen
//    eingefärbt – so färbt sich das Bestands-UI beim Theme-Wechsel automatisch mit.
const channel = (v) => `rgb(var(${v}) / <alpha-value>)`

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Semantische Design-Tokens ──────────────────────────────
        bg:          'var(--qv-bg)',
        surface:     'var(--qv-surface)',
        'surface-2': 'var(--qv-surface-2)',
        line:        'var(--qv-border)',
        fg:          'var(--qv-text)',
        muted:       'var(--qv-muted)',
        faint:       'var(--qv-faint)',
        accent: {
          DEFAULT: 'var(--qv-accent)',
          deep:    'var(--qv-accent-deep)',
          bright:  'var(--qv-accent-bright)',
          soft:    'var(--qv-accent-soft)',
          line:    'var(--qv-accent-line)',
        },
        // Text auf Akzent-/Button-Flächen (hell auf Rot / dunkel auf Gold).
        onaccent:  'var(--qv-btn-text)',
        success:   'var(--qv-success)',
        info:      'var(--qv-info)',
        warning:   'var(--qv-warning)',
        danger:    'var(--qv-danger)',

        // ── Legacy-Brücke (per Theme über CSS-Variablen eingefärbt) ──
        dungeon: {
          950: channel('--c-dungeon-950'),
          900: channel('--c-dungeon-900'),
          850: channel('--c-dungeon-850'),
          800: channel('--c-dungeon-800'),
          700: channel('--c-dungeon-700'),
          600: channel('--c-dungeon-600'),
        },
        gold: {
          200: channel('--c-gold-200'),
          300: channel('--c-gold-300'),
          400: channel('--c-gold-400'),
          500: channel('--c-gold-500'),
          600: channel('--c-gold-600'),
          700: channel('--c-gold-700'),
          800: channel('--c-gold-800'),
          900: channel('--c-gold-900'),
          950: channel('--c-gold-950'),
        },
        // Neutrale Text-Skala – theme-abhängig (Overlord hell / Heldentum dunkel).
        gray: {
          50:  channel('--c-gray-50'),
          100: channel('--c-gray-100'),
          200: channel('--c-gray-200'),
          300: channel('--c-gray-300'),
          400: channel('--c-gray-400'),
          500: channel('--c-gray-500'),
          600: channel('--c-gray-600'),
          700: channel('--c-gray-700'),
          800: channel('--c-gray-800'),
          900: channel('--c-gray-900'),
          950: channel('--c-gray-950'),
        },
        parchment: {
          100: '#fef9e7',
          200: '#fdf3c4',
          300: '#fae8a0',
        },
      },
      fontFamily: {
        // Theme-abhängige Schriften (via CSS-Variablen):
        //  Overlord  → Pirata One (Display) + Cormorant Garamond (Text)
        //  Heldentum → Cinzel (Display) + EB Garamond (Text)
        display: ['var(--qv-font-display)', 'Georgia', 'serif'],
        head:    ['var(--qv-font-head)', 'Georgia', 'serif'],
        body:    ['var(--qv-font-body)', 'Georgia', 'serif'],
        // `sans` bleibt als Alias für den Fließtext erhalten (Bestandscode).
        sans:    ['var(--qv-font-body)', 'ui-serif', 'Georgia', 'serif'],
        mono:    ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card:    '14px',
        control: '10px',
        chip:    '8px',
        pill:    '999px',
      },
      boxShadow: {
        btn:   'var(--qv-btn-shadow)',
        card:  'var(--qv-shadow-card)',
        panel: '0 40px 90px -24px rgba(0,0,0,.75)',
      },
      backgroundImage: {
        'btn-primary': 'var(--qv-btn)',
      },
      keyframes: {
        ember:    { '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' }, '12%': { opacity: '.95' }, '100%': { transform: 'translateY(-150px) translateX(12px)', opacity: '0' } },
        mote:     { '0%': { transform: 'translateY(0)', opacity: '0' }, '12%': { opacity: '.9' }, '90%': { opacity: '.5' }, '100%': { transform: 'translateY(-130px)', opacity: '0' } },
        fog:      { '0%': { transform: 'translateX(-8%) scale(1.1)' }, '100%': { transform: 'translateX(8%) scale(1.1)' } },
        breathe:  { '0%,100%': { opacity: '.3' }, '50%': { opacity: '.62' } },
        sweep:    { '0%': { transform: 'translateX(-130%) skewX(-18deg)' }, '100%': { transform: 'translateX(260%) skewX(-18deg)' } },
        underline:{ from: { transform: 'scaleX(0)' }, to: { transform: 'scaleX(1)' } },
      },
      animation: {
        ember:    'ember 8s linear infinite',
        mote:     'mote 12s linear infinite',
        fog:      'fog 18s ease-in-out infinite alternate',
        breathe:  'breathe 6s ease-in-out infinite',
        sweep:    'sweep 5s ease-in-out infinite',
        underline:'underline .5s ease both',
      },
    },
  },
  plugins: [],
}
