---
type: Decision
title: Dependency-Sicherheitspass v1.8.1 (React 19 + react-router 8 + Vite 8)
description: Warum die Behebung aller Dependabot-Advisories zwingend React 18→19, react-router-dom→react-router 8 und Node 22 erforderte, und welche Fallen dabei auftraten.
tags: [dependencies, sicherheit, dependabot, react, react-router, vite, vitest, node, wartung]
timestamp: 2026-07-31T00:00:00Z
---

# Ausgangslage (2026-07-31)

`npm audit` meldete **12 Advisories** (1 kritisch, 4 hoch, 6 moderat, 1 niedrig);
auf GitHub standen **3 offene Dependabot-PRs** (#97, #98, #99), die jeweils nur
Teilmengen abdeckten und die harten Blocker unten **nicht** lösen konnten.

Ziel der Arbeitseinheit (User-Vorgabe): **am Ende null Dependabot-Meldungen.**

# Zwei harte Blocker — und warum es keinen weicheren Weg gab

## 1. react-router: nur ≥ 8.3.0 ist advisory-frei

Zwei sich überlappende Advisories schließen die **gesamte v6- und v7-Linie** aus:

| Advisory | Betroffen | Behoben in |
|---|---|---|
| `GHSA-wrjc-x8rr-h8h6` (Open Redirect via Backslash in `<Link>`/`useNavigate`) | `6.0.0 – 7.17.0` | 7.18.0 |
| `GHSA-qwww-vcr4-c8h2` (RSC-Mode CSRF-Bypass) | `>=7.12.0 <8.3.0` | **8.3.0** |

Es gibt **keine** 6er- oder 7er-Version, die beide Bereiche verlässt. Daraus folgt
zwingend eine Kette:

- **`react-router-dom` gibt es ab v8 nicht mehr** (letzte Version: 7.18.2). In v7 war
  das Paket bereits nur noch ein Re-Export-Shim; der offizielle Weg ist der Import aus
  **`react-router`**. → Alle 24 Dateien mit `from 'react-router-dom'` auf `from 'react-router'`
  umgestellt. Die verwendete API (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`,
  `Outlet`, `useNavigate`, `useParams`, `useSearchParams`, `useLocation`, `useOutletContext`)
  existiert dort **unverändert** — kein Code-Umbau nötig, reine Import-Umbenennung.
- **`react-router@8` verlangt `react >= 19.2.7`** → React 18 → 19.
- **`react-router@8` verlangt `node >= 22.22.0`** → CI/Deploy von Node 20 auf 22
  (Node 20 ist ohnehin seit April 2026 EOL).

> **Einordnung:** Der CSRF-Bypass ist laut Advisory **nur im RSC-Modus** ausnutzbar, den
> diese reine Client-SPA nicht verwendet. Praktisch war die App also nie betroffen —
> Dependabot bewertet aber nach Versionsbereich, nicht nach Erreichbarkeit. Für „null
> Meldungen" führt kein Weg an 8.3.0 vorbei.

### React-19-Migrationsfläche: minimal

Die Codebasis war bereits React-19-tauglich — kein `forwardRef`, kein `React.FC`,
keine `defaultProps`/`propTypes`, `createRoot` statt `ReactDOM.render`, und alle
`useRef(x)`-Aufrufe hatten schon ein Initialargument. **Einzige** nötige Anpassung:

```ts
// @types/react 19 entfernt den globalen JSX-Namespace
import { useState, useMemo, useRef, type JSX } from 'react'   // QuestEditorPage.tsx
```

## 2. brace-expansion: nur 5.0.8+ ist sauber — aber nicht drop-in

`GHSA-mh99-v99m-4gvg` hat **einen einzigen** Bereich `<= 5.0.7`, behoben erst in
**5.0.8**. Damit gilt *jede* Version der 1.x/2.x/3.x/4.x-Linien als verwundbar.

Der verwundbare Pfad war ausschließlich transitiv und **build-only**:

```
vite-plugin-pwa → workbox-build → @trickfilm400/rollup-plugin-off-main-thread
                → ejs → jake → filelist → minimatch@5 → brace-expansion@2.1.4
```

**Falle:** Ein pauschales `overrides: { "brace-expansion": "^5.0.9" }` **bricht**
`minimatch@3/5`. Empirisch geprüft — der CJS-Export von 5.x ist kein aufrufbarer
Default mehr:

```
require('brace-expansion')  →  { EXPANSION_MAX, EXPANSION_MAX_LENGTH, expand }
// minimatch macht aber: const expand = require('brace-expansion'); expand(pattern)
```

**Lösung:** zielgenaues Override auf die *einzige* minimatch-Linie, die bereits
`brace-expansion@^5` nutzt — und deren API zu `filelist` passt:

```json
"overrides": { "filelist": { "minimatch": "^10.2.6" } }
```

`filelist` ruft nur `minimatch.match(files, pat, opts)` auf; dass `minimatch@10`
diese Funktion im CJS-Export bereitstellt, wurde vor dem Override in Node verifiziert.
Ergebnis: nur noch **eine** `brace-expansion`-Instanz im Baum (5.0.9).

# Ergebnis

| Paket | vorher | nachher |
|---|---|---|
| react / react-dom | 18.3.1 | **19.2.8** |
| react-router-dom → **react-router** | 6.30.4 | **8.3.0** |
| vite | 5.4.10 | **8.2.0** (Rolldown) |
| vitest | 2.1.6 | **4.1.10** |
| @vitejs/plugin-react | 4.3.3 | **6.0.5** |
| vite-plugin-pwa | 0.20.5 | **1.3.0** |
| postcss / autoprefixer / tailwind / typescript | 8.4 / 10.4 / 3.4.15 / 5.6 | 8.5.25 / 10.5.4 / 3.4.19 / 5.9.3 |
| CI-/Deploy-Node | 20 | **22** |

`npm audit` → **found 0 vulnerabilities**. 195 Tests + Build grün.

## Bewusst NICHT mitgezogen (kein Advisory, unnötiges Risiko)

- **tailwindcss 4** (kompletter Rewrite der Konfiguration — die gesamte
  variablen-getriebene Token-Brücke aus v1.6.0 hinge daran)
- **zustand 5** (Breaking Changes am Store; `PERSIST_VERSION`-Risiko für Bestandsstände)
- **typescript 7** (nativer Port, zu frisch für den Build-Gate)

# Nebenbefund: Vite 8 / Rolldown

Vite 8 baut auf Rolldown. Zwei Beobachtungen:

- Der native Config-Loader warnt bei JSON-Import ohne Attribut →
  `import pkg from './package.json' with { type: 'json' }` in `vite.config.ts`.
- Die Chunk-Warnung empfiehlt jetzt `build.rolldownOptions.output.codeSplitting`
  statt `manualChunks`. Route-basiertes Code-Splitting steht weiterhin offen
  (siehe `docs/architecture/plan.md`, „Offen — Niedrig").

# Verifikation

Neben `npm test` (195 grün) und `npm run build` wurde der **echte Produktions-Build**
per Playwright geprüft: 16 Routen × beide Designs (heldentum/overlord), SPA-Navigation
ohne Reload (Marker im `window` überlebt den Klick → react-router 8 navigiert wirklich
client-seitig), `useSearchParams` (`/monster?q=Goblin` filtert), mobiler Viewport 390 px.
Null JS-/Render-Fehler.

> **Testfalle fürs nächste Mal:** `?q=Naga` liefert absichtlich **kein** Ergebnis — Naga
> ist ein Erweiterungs-Monster und wird vom Sammlungs-Filter (Standard: nur Grundspiel)
> ausgeblendet. Für Suchtests ein Grundspiel-Monster nehmen.

# Citations

- `package.json`, `package-lock.json` (Stand v1.8.1)
- `docs/architecture/plan.md` — Abschnitt „Offen"
- GitHub Advisories: `GHSA-wrjc-x8rr-h8h6`, `GHSA-qwww-vcr4-c8h2`, `GHSA-mh99-v99m-4gvg`
