# Architektur-Entscheidungen (ADR)

Dieses Dokument hält alle wesentlichen technischen Entscheidungen fest.

---

## ADR-001: Tech-Stack (Status: Entschieden)

**Entscheidung:** React 18 + Vite + TypeScript + Tailwind CSS

**Begründung:**
- Beste Bibliotheken für Drag&Drop (dnd-kit) und Canvas
- GitHub Pages funktioniert direkt mit dem Vite-Build
- `any2cards/d2e` JSON-Daten können direkt importiert werden
- Tailwind CSS für schnelles UI-Styling

---

## ADR-002: Datenspeicherung (Status: Entschieden)

**Entscheidung:** localStorage via Zustand persist middleware

**Begründung:**
- Kein Backend-Server nötig
- Funktioniert offline (PWA)
- Kein Account-System nötig
- Zustand macht Persistenz trivial

---

## ADR-003: Hosting (Status: Entschieden)

**Entscheidung:** GitHub Pages (Branch `gh-pages`)

**Deployment:** GitHub Actions baut bei Push auf `claude/descent-quest-vault-DCYTY` und deployt nach `gh-pages`.  
**URL:** https://zedyo.github.io/quest-vault-reborn/

---

## ADR-004: Spieldaten-Format (Status: Entschieden)

**Entscheidung:** TypeScript-Module (Daten als `const` Arrays/Objects)

**Datenbasis:** `any2cards/d2e` (GitHub) als Referenz; Assets in Grauzone genutzt (nicht-kommerziell, FFG-Copyright-Hinweis).

---

## ADR-005: Karteneditor-Technologie (Status: Entschieden)

**Entscheidung:** dnd-kit für Drag&Drop + CSS Grid für Map-Raster

**Begründung:** PNG-Tiles aus `any2cards/d2e` werden direkt als `<img>` gerendert; Rotation via CSS `transform`. Kein Canvas nötig für Phase 5.

## ADR-006: Offline-Fähigkeit (Status: Entschieden)

**Entscheidung:** PWA via `vite-plugin-pwa`

**Begründung:** Benutzer soll das Tool offline nutzen können. Service Worker cacht alle Assets.

## ADR-007: Asset-Strategie (Status: Entschieden)

**Entscheidung:** Assets aus `any2cards/d2e` (nicht-kommerziell, Grauzone)

**Hinweis:** FFG-Copyright-Hinweis wird in der App angezeigt. Keine kommerzielle Nutzung.
