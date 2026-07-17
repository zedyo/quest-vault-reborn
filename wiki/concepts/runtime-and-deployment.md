---
type: Concept
title: Datenspeicherung, Assets, Hosting & Routing
description: Grundlegende Laufzeit- und Deployment-Entscheidungen der Webapp.
tags: [architektur, deployment, hosting, routing, pwa]
timestamp: 2026-07-17T00:00:00Z
---

# Entscheidungen

- **Datenspeicherung:** localStorage via zustand `persist` (bis v2.0).
- **Assets:** any2cards/d2e PNG-Tiles (Community, FFG-IP-Grauzone) — siehe
  [any2cards / d2e](../sources/any2cards-d2e.md).
- **Hosting:** GitHub Pages (`deploy.yml` vorhanden).
- **Routing:** `BrowserRouter` mit `basename="/quest-vault-reborn"` + `404.html`-SPA-
  Fallback (postbuild kopiert `index.html` → `404.html` für GitHub-Pages-Deep-Links).
- **iPad primär:** ab v1.2 alle Features auf iPad Portrait/Landscape verifizieren.

# Persist-Schutzregel

Persist-Schema **nie** ändern ohne `version`-Erhöhung + `migrate`-Schritt in
`src/store/useGameStore.ts` (sonst Datenverlust bei Bestandsnutzern). Importierte
Fremddaten laufen IMMER durch `src/utils/questImport.ts`. (Diese Regel bleibt auch in
`CLAUDE.md → Schutzregeln` verbindlich verankert.)

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Wichtige Designentscheidungen" (Datenspeicherung/Assets/Hosting/Routing/iPad) + „Schutzregeln".
[2] `src/store/useGameStore.ts`, `src/utils/questImport.ts`, `vite.config.ts`, `.github/workflows/deploy.yml`.
