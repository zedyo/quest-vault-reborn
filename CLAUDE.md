# Quest Vault Reborn – CLAUDE.md

Dieses Dokument ist die **primäre Gedächtnisstütze** für jede Session.
**Immer zuerst vollständig lesen, bevor mit der Arbeit begonnen wird.**

---

## Projekt-Übersicht

**Ziel:** Neuaufbau des eingestellten Online-Tools "Quest Vault" für das Brettspiel
*Descent – Die Reise ins Dunkel 2. Edition* (Descent: Journeys in the Dark 2nd Edition).

**Original-URL (offline):** www.DescentQuestVault.com  
**Ziel-Produkt:** Vollständige Webapp, browserbasiert startbar, kein lokaler Server notwendig.  
**Aktuell live auf:** https://zedyo.github.io/quest-vault-reborn/ (nach Deploy-Pipeline)

---

## Aktuelle Version: 1.0.0 (2026-05-25)

### Versionierungsregeln

| Änderungstyp | Version |
|---|---|
| Bugfix, kleine UI-Anpassung | Patch `1.0.x` |
| Neues Feature, Datenerweiterung | Minor `1.x.0` |
| Strukturelle Neuausrichtung | Major `x.0.0` – **User-Bestätigung erforderlich** |

---

## Aktueller Projektstatus

| Phase/Version | Status | Beschreibung |
|---|---|---|
| v1.0.0 | ✅ Abgeschlossen | Map-Builder, Quest-Editor, Helden/Monster, Save/Load, Export, Deploy |
| v1.1.0 | 🔄 In Vorbereitung | Datenvollständigkeit: Gruppengrößen, Klassen, Items, Overlord, Leutnants, Kampagnen |
| v1.2.0 | ⏳ Geplant | Design, iPad, Tests, Security |
| v1.3.0 | ⏳ Geplant | Monster-Tracker (Live-HP) – Planung zuerst |
| v1.4.0 | ⏳ Geplant | Kampagnen-Speicherstand – Planung zuerst |
| v1.5.0 | ⏳ Geplant | Overlord-Kommandozentrale |
| v1.6.0 | ⏳ Geplant | Helden-Spieleransicht |
| v2.0.0 | ⏳ Zukunft | Backend-Migration + Sync (Major, User-Zustimmung nötig) |
| v2.1.0 | ⏳ Zukunft | Englische Lokalisierung |

---

## Was ist in v1.0.0 enthalten

- **Map Builder:** Tiles platzieren, drehen, Connector-Rendering (INSET 0.269), Hover-Vorschau in Sidebar
- **Quest-Editor:** Quests, Begegnungen, Ziele, Erzähltext, Monster-Positionierung
- **Helden-Übersicht:** Alle Helden mit Filtern, vollständige Attributwerte
- **Monster-Übersicht:** Alle Monster mit Filtern, vollständige Spielwerte
- **Meine Sammlung:** Erweiterungs-Auswahl, alles filtert sich entsprechend
- **Speichern/Laden:** localStorage via zustand persist
- **Export/Import:** JSON, Druckansicht
- **GitHub Actions Auto-Deploy:** Push → automatisch auf GitHub Pages
- **PWA:** App ist offline-fähig (Service Worker, Manifest)
- **Datenbasis:** 208 Tiles (Connectoren pixelverifiziert), ~60 Monster (Akt 1+2 vollständig), ~68 Helden

---

## Bekannte Probleme & Verworfene Ansätze

### Map-Tile Connector-Rendering (GELÖST – nicht erneut umbauen!)

**Problem:** Descent-2e-Tile-PNGs müssen so dargestellt werden, dass Tiles über
Puzzle-Connectoren ineinandergreifen und das interne Tile-Raster deckungsgleich
mit dem Board-Raster bleibt.

**Funktionierende Lösung:**

1. **PNG-Geometrie:** Canvas ist exakt `cols×75 × rows×75 px`. Auf Connector-Kanten
   liegt die Body-Wall ~18px innen, Tab ragt bis zur Canvas-Kante (~1px), Notch
   schneidet bis ~35px ein.

2. **Streckungs-Modell (`MapGrid.tsx` `DraggableTile`):** `CONNECTOR_INSET_FRAC = 0.269`
   (visuell kalibriert). Pro Seite NUR strecken wenn dort ein Connector ist:
   `iL/iR/iT/iB = conn[seite] ? 0.269 : 0`. Formeln:
   - `sx = dCols/(dCols−iL−iR)`, `sy = dRows/(dRows−iT−iB)`
   - `imgW = footW·sx`, `imgH = footH·sy`
   - `imgLeft = −(iL·CELL_SIZE)·sx`, `imgTop = −(iT·CELL_SIZE)·sy`
   - Wrapper = Footprint, `overflow: visible` bei Connector-Tiles

3. **KRITISCHER FIX:** Tailwind-Preflight setzt `img { max-width: 100% }`.
   Das stauchte horizontal gestreckte Bilder → rechte Streckung wirkte nie.
   **Lösung:** `maxWidth: 'none'` UND `maxHeight: 'none'` im img-Style.
   Ohne diesen Fix ist die rechte Connector-Seite immer falsch. **Nie entfernen.**

**Verworfene Ansätze:**
- `CONNECTOR_INSET_FRAC = 0.24` (aus Pixel-Analyse) → visuell falsch, user hat 0.269 kalibriert
- Natural-Scale ohne Stretching → Tiles liegen nicht korrekt auf dem Grid
- Einheitliche Streckung auf alle 4 Seiten → falsch, nur Connector-Seiten strecken

**Connector-Daten:** In `src/data/mapTiles.ts` als `connectors: { top, right, bottom, left: boolean }`.
B-Seiten haben eigene Muster. Vollständige Connector-Tabelle in `docs/game-data/map-tiles.md`.

---

## Was noch fehlt (offene Arbeit v1.1)

- [ ] Monster-Gruppengrößen pro Spielerzahl (2/3/4) — in monsters.ts + monsters.md
- [ ] Helden-Klassen vollständig (hero-classes.md ist Stub, Daten ausstehend)
- [ ] Items (items.md ist Stub, src/data/items.ts fehlt)
- [ ] Overlord-Klassen + Karten (overlord-classes.md ist Stub, src/data/overlordClasses.ts fehlt)
- [ ] Leutnants (lieutenants.md ist Stub, src/data/lieutenants.ts fehlt)
- [ ] Reisekarten + Nebenszenarien (travel-cards.md ist Stub)
- [ ] Kampagnen (campaigns.md ist Stub, src/data/campaigns.ts fehlt)
- [ ] Overlay-Datenbasis (src/data/overlays.ts fehlt)
- [ ] Daten-Validierungspass: alle Werte gegen Karten-Scans prüfen
- [ ] B-Seiten-Connectoren visuell verifizieren

---

## Wissens- und Dokumentationsstruktur

```
quest-vault-reborn/
├── CLAUDE.md                              ← Primäre Gedächtnisstütze (DIESE DATEI)
├── README.md                              ← Benutzeranleitung / Deployment-Guide
├── package.json                           ← version: 1.0.0
├── docs/
│   ├── architecture/
│   │   ├── plan.md                        ← Vollständige Roadmap mit Versionen
│   │   ├── acceptance-criteria.md         ← Akzeptanzkriterien pro Feature
│   │   └── decisions.md                   ← Architektur-Entscheidungen (ADR)
│   ├── research/
│   │   ├── quest-vault-original.md        ← Was das Original konnte
│   │   ├── rebuild-attempts.md            ← Community-Nachbau-Versuche
│   │   ├── digital-assets.md              ← Asset-Quellen (any2cards/d2e etc.)
│   │   └── game-content.md               ← Spielinhalt Überblick
│   ├── translations/
│   │   └── de-en-glossary.md              ← DE↔EN Begriffe
│   └── game-data/                         ← Vollständige Spielwerte-Datenbank
│       ├── expansions.md                  ← Alle Erweiterungen ✅
│       ├── monsters.md                    ← ~60 Monster mit Vollwerten ✅ (Gruppengrößen fehlen)
│       ├── heroes.md                      ← ~68 Helden mit Vollwerten ✅
│       ├── hero-classes.md                ← Helden-Klassen (Stub – v1.1)
│       ├── map-tiles.md                   ← 208 Tiles mit Connectoren ✅
│       ├── items.md                       ← Item-Shop + Relikte (Stub – v1.1)
│       ├── overlord-classes.md            ← Overlord-Klassen + Karten (Stub – v1.1)
│       ├── lieutenants.md                 ← Leutnants/Hauptmänner (Stub – v1.1)
│       ├── travel-cards.md                ← Reisekarten + Nebenszenarien (Stub – v1.1)
│       ├── campaigns.md                   ← Kampagnen + Szenarien (Stub – v1.1)
│       └── overlays.md                    ← Overlay-Plättchen (Stub)
└── src/
    ├── data/
    │   ├── expansions.ts   ✅
    │   ├── monsters.ts     ✅ (Gruppengrößen fehlen noch)
    │   ├── heroes.ts       ✅
    │   ├── mapTiles.ts     ✅
    │   ├── heroClasses.ts  ❌ fehlt noch
    │   ├── items.ts        ❌ fehlt noch
    │   ├── overlordClasses.ts ❌ fehlt noch
    │   ├── lieutenants.ts  ❌ fehlt noch
    │   └── overlays.ts     ❌ fehlt noch
    ├── types/game.ts       ← TypeScript Typdefinitionen
    ├── store/useGameStore.ts ← zustand Store
    ├── components/
    │   ├── MapBuilder/     ← MapGrid, TileSidebar, constants
    │   └── ...
    └── pages/
        ├── HomePage.tsx
        ├── MapBuilderPage.tsx
        ├── QuestEditorPage.tsx
        ├── HeroesPage.tsx
        ├── MonstersPage.tsx
        └── CollectionPage.tsx
```

---

## Kontextverlust-Strategie

Bei Sitzungsstart oder nach Komprimierung: folgende Reihenfolge lesen:

1. **CLAUDE.md** (diese Datei) — Vollständiger Überblick, aktueller Stand, bekannte Probleme
2. **docs/architecture/plan.md** — Roadmap, Versionen, nächste Schritte
3. **docs/architecture/acceptance-criteria.md** — Akzeptanzkriterien pro Feature
4. **docs/game-data/[relevante Datei]** — Spieldaten bei Korrekturen

**Dokumentations-Pflicht:** Jede Korrektur oder Ergänzung von Spieldaten MUSS sowohl
in der TypeScript-Quelldatei als AUCH in der entsprechenden `.md`-Datei unter
`docs/game-data/` festgehalten werden. Die `.md`-Dateien sind die langfristige
Wissensbasis. TypeScript-Code allein reicht nicht aus.

---

## Kern-Anforderungen

- **Sprache:** Deutsch als primäre UI-Sprache
- **Erweiterungs-Filter:** Benutzer wählt aus, welche Erweiterungen er besitzt
- **Browserzugang:** Kein lokaler Server nötig (statische Webapp)
- **Startbarkeit:** Nach jedem Commit testbar
- **iPad:** Alle Features müssen auf iPad (768px–1024px) vollständig bedienbar sein

---

## Tech-Stack

| Technologie | Verwendung |
|---|---|
| React 18 + Vite 5 | Frontend-Framework + Build |
| TypeScript | Typsicherheit |
| Tailwind CSS | Styling (ACHTUNG: `max-width: none` auf Tile-Images nötig!) |
| zustand + persist | State Management + localStorage |
| react-router-dom | Routing (HashRouter für GitHub Pages) |
| @dnd-kit/core | Drag-and-Drop im MapBuilder |
| vite-plugin-pwa | PWA / Service Worker |
| GitHub Actions | CI/CD → GitHub Pages |

---

## Git-Workflow

- **Branch:** `claude/descent-quest-vault-DCYTY`
- **Remote:** `origin` (GitHub: zedyo/quest-vault-reborn)
- **Nach jeder Arbeitseinheit:** committen und pushen
- **Commit-Format:** `<typ>(<bereich>): <was wurde getan>`
  - `feat(monster-tracker): Live-HP-Tracking implementiert`
  - `fix(map-builder): Tile-Rotation bei b-Seiten korrigiert`
  - `docs(game-data): Monster-Gruppengrößen validiert und dokumentiert`
  - `chore(version): v1.1.0`

---

## Wichtige Designentscheidungen

- **Tile-Connector-Rendering:** CONNECTOR_INSET_FRAC=0.269, maxWidth:none (siehe oben)
- **Datenspeicherung:** localStorage via zustand persist (bis v2.0)
- **Assets:** any2cards/d2e PNG-Tiles (Community, FFG IP Grauzone)
- **Hosting:** GitHub Pages (deploy.yml vorhanden)
- **Routing:** HashRouter (für GitHub Pages Pfad-Kompatibilität)
- **iPad primär:** Ab v1.2 alle Features auf iPad Portrait/Landscape verifizieren

---

## Interne Projektstrategie (nicht für README/öffentliche Docs)

### Monetarisierung & Ko-Fi
- **Ko-Fi Spendenbutton** in die App einbauen (dezent, Fußzeile) — geplant für nach v1.2
- **Rechtliche Einschätzung Premium-Features:** Da FFG-IP-Material (Karten-Scans, Regeltext)
  verwendet wird (Grauzone), ist ein kommerzielles Modell mit Bezahl-Features rechtlich
  riskant. Empfehlung: Ko-Fi als freiwillige Spende (wie andere Community-Tools) anstatt
  Bezahl-Schranken. Das hält das rechtliche Risiko minimal.
- **Premium-DB-Sync (v2.0):** Evaluieren ob ein optionales Konto + Sync-Feature mit
  eigenem Backend als "Dienstleistung" (nicht als Spielinhalt) rechtlich sauber ist.
  Dies ist inhaltlich von den FFG-Daten trennbar.

### Daten-Validierungsstrategie
- Alle Spielwerte müssen gegen offizielle Karten-Scans validiert werden
- Quelle: any2cards/d2e ist gut, aber nicht immer 100% korrekt
- BGG und Fandom Wiki als Kreuzreferenz nutzen
- Beim Validieren: Datum und "✅ validiert" in der .md-Datei vermerken

---

## Recherche-Ergebnisse (Kurzfassung)

### Original Quest Vault
- **Betreiber:** Fantasy Flight Games (offiziell)
- **Zeitraum:** Jan 2013 – Jan 2020 (Shutdown)
- **Kern-Features:** Quest-Editor, Map Builder, Encounter-Editor, PDF-Export, Community-Bibliothek

### Community-Alternativen
- **descent-quest-builder** (Lorenzo Balducci): Einziger ernst zu nehmender Nachbau, kein Sharing
- **any2cards/d2e**: Beste strukturierte Datenbasis (JSON + PNG aller Karten/Tiles) — unser Haupt-Asset
- Kein vollständiger moderner Ersatz vorhanden → Marktlücke dieses Projekts

---

## Offene Entscheidungen

| Entscheidung | Status |
|---|---|
| FFG IP-Rechte langfristig | Offen — Community-Grauzone aktuell akzeptiert |
| Backend-Technologie (v2.0) | Offen — Supabase / Firebase / eigenes VPS |
| Monetarisierung | Evaluieren — Ko-Fi bevorzugt, Premium-DB-Sync evaluieren |
| B-Seiten-Connectoren visuell verifizieren | Offen |
