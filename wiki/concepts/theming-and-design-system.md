---
type: Concept
title: Theming & Design-System v2
description: Entwicklung des Farb-/Token-Systems von der Dungeon-Palette über umschaltbare Themes bis zum Design-System v2 (Overlord/Heldentum).
resource: src/theme.css
tags: [design-system, theming, tokens, tailwind, fonts]
timestamp: 2026-07-17T00:00:00Z
---

# Design-Fundament (1.2.0)

Warme, mystische Dungeon-Palette in `tailwind.config.js` (`dungeon` 950–600 =
Anthrazit/Braun statt Tech-Blau; `gold` + `parchment` als Akzente). Alles nutzt Tokens
→ zentrale Wirkung. Hardcodierte Builder-Farben (MapGrid Grid-Hintergrund/Linien)
mit-vereinheitlicht (`#17110a` / `#332617`). Fonts anfänglich **Cinzel** (Display h1–h3)
+ **Inter** (Fließtext), offline self-hosted via `@fontsource` (kein CDN → PWA bleibt
offline). Globaler `:focus-visible`-Goldring als Accessibility-Grundlinie. Karten-Titel
(h4) bewusst Inter (nur h1–h3 = Cinzel).

# Umschaltbare Themes (1.2.4, abgelöst durch v2)

Die `dungeon`-Palette wurde auf CSS-Variablen umgestellt
(`rgb(var(--c-dungeon-NNN) / <alpha-value>)` — Kanal-Format wegen Opazitäts-Utilities).
Variablensätze je Theme in `index.css` unter `:root`/`[data-theme=…]`. `src/theme.ts`
hält `THEMES` + liest/schreibt die Wahl in **eigenem** localStorage-Key `qvr-theme`
(NICHT im zustand-Store → **kein** Persist-Bump). `main.tsx` setzt `data-theme` vor dem
Render (kein Flackern). `ThemeSwitcher.tsx` (🎨-Dropdown + Inline-Variante).

# Design-System v2 (1.6.0) — „Overlord" / „Heldentum"

Löst die drei 1.2.4-Themes durch zwei Designs aus dem Projekt „Claude DESIGN" ab
(Quelle: ZIP `export/{theme.css,tailwind.config.js,README.md}`, 2026-07-10).

- **Struktur:** `src/index.css` importiert `./theme.css` ganz oben; `src/theme.css`
  hält je `data-theme` **(a)** semantische `--qv-*`-Tokens (bg/surface/surface-2/border,
  text/muted/faint, accent(+deep/bright/soft/line), btn/btn-text, font-*) **und (b)** die
  Legacy-Brücke `--c-dungeon/gold/gray-*` (R G B-Kanäle). `tailwind.config.js` mappt
  beide Ebenen (neue semantische Utilities `bg-bg`/`bg-surface`/`text-fg`/`bg-accent`/
  `text-onaccent`/`border-line`/`rounded-*`/`shadow-*`/`animate-*` + die weiterhin
  nutzbaren, jetzt variablen-getriebenen Legacy-Skalen `dungeon`/`gold`/`gray`).
- **Warum Brücke statt Voll-Migration:** ≈900 Klassenvorkommen in 37 Dateien; durch das
  Umlegen der Skalen auf Theme-Variablen färbt sich das Bestands-UI beim Wechsel live um,
  ohne jede Komponente umzuschreiben (geringes Regressionsrisiko).
- **Semantik der Brücke:** `gold` = Akzent-TEXT/Rahmen (Overlord helle Rottöne, Heldentum
  lesbare Dunkelgoldtöne); `gray` = neutraler Text (Overlord hell→dunkel, Heldentum
  invertiert); `dungeon` = Flächen-Elevation (dunkle bzw. Pergament-Rampe).
- **Konflikt „dunkler Text auf hellem Akzent":** Füllflächen von `bg-gold-*` auf
  `bg-accent`(/`-deep`/`-soft`) umgestellt, Text darauf von `text-dungeon-950`/
  `text-gray-900` auf **`text-onaccent`** (= `--qv-btn-text`, flippt korrekt). Geordnete
  Skript-Ersetzung (`bg-gold-*`→accent 25×, Text→onaccent 21×).
- **Nicht gebrückt:** Default-Tailwind-Statusfarben (red/blue/purple/green als Würfel-/
  Kategorie-Chips) bleiben (Doppelnutzung als solide Chips + Transluzent-Tints). ErrataBox
  + Monster-Errata-Panel auf theme-aware `accent-soft`/`gold`/`success` umgestellt.
- **Schriften** self-hosted (@fontsource, offline/PWA): Overlord Pirata One + Cormorant
  Garamond, Heldentum Cinzel + EB Garamond, Mono IBM Plex Mono; Inter entfernt.
- **Verwaltung** unverändert (`qvr-theme`-Key, kein Persist-Bump; alte ids fallen via
  `getStoredTheme` auf einen gültigen Wert zurück). Standard seit v1.6.4 = **`heldentum`**
  (hell), auch in `index.html`.
- **Neues Theme künftig** = ein `[data-theme=…]`-Block in `theme.css` (semantische +
  Brücken-Variablen) + ein `THEMES`-Eintrag.

# Autoritative Quelle

`src/theme.css`, `src/theme.ts`, `tailwind.config.js` (Implementierung). Der lebende
Styleguide ist die App-Seite `/designsystem` (`src/pages/DesignSystemPage.tsx`).

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Design-Fundament (1.2.0)", „Umschaltbare Themes (1.2.4)", „Design-System v2 (1.6.0)".
[2] [src/theme.css](../../src/theme.css), [src/theme.ts](../../src/theme.ts), [tailwind.config.js](../../tailwind.config.js).
