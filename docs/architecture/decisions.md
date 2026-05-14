# Architektur-Entscheidungen (ADR)

Dieses Dokument hält alle wesentlichen technischen Entscheidungen fest.

---

## ADR-001: Tech-Stack (Status: Offen – Recherche läuft)

**Optionen unter Bewertung:**

| Option | Vorteile | Nachteile |
|--------|----------|-----------|
| React + Vite | Weit verbreitet, gute Drag&Drop-Libs | Komplexer als nötig? |
| SvelteKit | Leichtgewichtig, schnell | Kleinere Community |
| Vue 3 + Vite | Gute Balance | - |
| Vanilla JS + HTML | Keine Dependencies | Wartungsaufwand hoch |

**Tendenz:** React + Vite + TypeScript (wegen Ecosystem für Drag&Drop, Canvas-Libs)

---

## ADR-002: Datenspeicherung (Status: Vorläufig entschieden)

**Entscheidung:** Lokaler Browserspeicher (localStorage / IndexedDB)

**Begründung:**
- Kein Backend-Server nötig
- Funktioniert offline
- Kein Account-System nötig

**Alternative:** Supabase oder Firebase für Cloud-Sync (spätere Phase)

---

## ADR-003: Hosting (Status: Offen)

**Optionen:**
- GitHub Pages (kostenlos, automatisch bei Push)
- Netlify (kostenlos, einfacher CI/CD)
- Vercel (kostenlos, gut für React)

**Tendenz:** GitHub Pages für Einfachheit

---

## ADR-004: Spieldaten-Format (Status: Offen)

**Optionen:**
- JSON-Dateien im Repository
- JavaScript-Module
- SQLite (über WASM)

**Tendenz:** JSON-Dateien, importiert als TypeScript-Module

---

## ADR-005: Karteneditor-Technologie (Status: Offen)

**Optionen:**
- HTML Canvas + eigene Rendering-Logik
- SVG-basiert
- React-Konva (Canvas via React)
- Fabric.js

**Tendenz:** Noch offen, hängt von Asset-Format ab (SVG bevorzugt)
