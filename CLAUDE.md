# Quest Vault Reborn – CLAUDE.md

Dieses Dokument steuert das Projekt und dient als primäre Gedächtnisstütze bei Kontextverlust.
**Immer zuerst lesen, bevor mit der Arbeit begonnen wird.**

---

## Projekt-Übersicht

**Ziel:** Neuaufbau des eingestellten Online-Tools "Quest Vault" für das Brettspiel
*Descent – Die Reise ins Dunkel 2. Edition* (Descent: Journeys in the Dark 2nd Edition).

**Original-URL (offline):** www.DescentQuestVault.com  
**Ziel-Produkt:** Vollständige Webapp, browserbasiert startbar, kein lokaler Server notwendig.

---

## Wissens- und Dokumentationsstruktur

```
quest-vault-reborn/
├── CLAUDE.md                        ← Diese Datei (Projektzentrale)
├── README.md                        ← Benutzeranleitung / Deployment-Guide
├── docs/
│   ├── research/
│   │   ├── quest-vault-original.md  ← Was wir über das Original wissen
│   │   ├── rebuild-attempts.md      ← Bekannte Nachbau-Versuche
│   │   ├── digital-assets.md        ← Quellen für Spielmaterial (Tiles, Figuren etc.)
│   │   └── game-content.md          ← Spielinhalt, Regeln, Erweiterungen
│   ├── translations/
│   │   └── de-en-glossary.md        ← Deutsch↔Englisch Begriffe (Spiel + Tool)
│   ├── game-data/
│   │   ├── expansions.md            ← Alle Erweiterungen (DE Namen)
│   │   ├── heroes.md                ← Alle Helden
│   │   ├── monsters.md              ← Alle Monster
│   │   ├── map-tiles.md             ← Alle Spielplan-Plättchen
│   │   └── overlays.md              ← Overlay-Plättchen
│   └── architecture/
│       ├── plan.md                  ← Implementierungsplan
│       └── decisions.md             ← Architektur-Entscheidungen (ADR)
└── src/                             ← Quellcode (noch nicht angelegt)
```

---

## Kontextverlust-Strategie

Bei Kontextverlust (Sitzungsende, Komprimierung) gilt folgende Priorität beim Wiederlesen:

1. **CLAUDE.md** (diese Datei) – Projektüberblick und Status
2. **docs/architecture/plan.md** – Aktueller Implementierungsplan und Stand
3. **docs/research/quest-vault-original.md** – Was das Original konnte
4. **docs/translations/de-en-glossary.md** – Deutsche Begriffe
5. **docs/game-data/** – Spielinhalte (vollständige Werte-Dokumentation)

**Regeln:**
- Nach jeder abgeschlossenen Arbeitseinheit einen Git-Commit erstellen.
  Format: `feat|fix|docs|research: kurze Beschreibung`
- **Dokumentation synchron halten:** Jede Korrektur oder Ergänzung von Spieldaten
  (Monsterwerte, Heldenwerte, Tile-Maße, Connector-Daten etc.) muss SOWOHL im
  TypeScript-Code als AUCH in der entsprechenden `.md`-Datei unter `docs/game-data/`
  aktualisiert werden. Die `.md`-Dateien sind die langfristige Wissensbasis — der
  TypeScript-Code allein reicht nicht aus, wenn der Kontext verloren geht.

---

## Aktueller Projektstatus

**Stand: Phase 5 (Kern-Features) weitgehend abgeschlossen** — 2026-05-25

| Phase | Status | Beschreibung |
|-------|--------|--------------|
| 0 – Setup | ✅ Abgeschlossen | Repo-Struktur, CLAUDE.md, README |
| 1 – Recherche | ✅ Abgeschlossen | Quest Vault Features, Spielinhalte, Alternativ-Tools |
| 2 – Planung | ✅ Abgeschlossen | Tech-Stack: React+Vite+TS+Tailwind+zustand, MVP definiert |
| 3 – Grundgerüst | ✅ Abgeschlossen | Vite-App, Routing, DE-UI, Erweiterungs-Auswahl |
| 4 – Kerndaten | ✅ Abgeschlossen | Erweiterungen, Monster (60), Helden (68), Tiles (208) |
| 5 – Features | 🔄 Weitgehend | Map-Builder, Quest-Editor, Helden, Speichern/Laden, Export/Print |
| 6 – Erweitert | 🔄 Laufend | Monster-Tracker, Kampagnen, Mobile UI |
| 7 – Polish | ⏳ Ausstehend | DE-Lokalisierung feinschliff, Accessibility, Performance |

---

## Kern-Anforderungen

- **Sprache:** Deutsch als primäre Sprache der UI
- **Erweiterungs-Filter:** Benutzer wählt aus, welche Erweiterungen er besitzt
- **Browserzugang:** Kein lokaler Server nötig (statische Webapp oder gehosteter Dienst)
- **Startbarkeit:** Nach jedem Commit testbar
- **Spielinhalt:** Alle offiziellen Erweiterungen von Descent 2. Edition abdecken

---

## Git-Workflow

- Branch: `claude/descent-quest-vault-DCYTY`
- Remote: `origin` (GitHub: zedyo/quest-vault-reborn)
- **Nach jeder Arbeitseinheit committen und pushen**
- Commit-Format: `<typ>(<bereich>): <was wurde getan>`
  - Beispiele: `docs(research): Quest Vault Features dokumentiert`
  - `feat(map-editor): Tile-Drag implementiert`

---

## Wichtige Designentscheidungen (Details in docs/architecture/decisions.md)

- **Tech-Stack:** React 18 + Vite 5 + TypeScript + Tailwind CSS + zustand (persist)
- **Datenspeicherung:** localStorage via zustand persist middleware
- **Assets:** any2cards/d2e PNG-Tiles (Community, Grauzone FFG-IP)
- **Mehrsprachigkeit:** Deutsch primär, Englisch optional
- **Hosting:** GitHub Pages, Auto-Deploy via GitHub Actions (`.github/workflows/deploy.yml`)
- **Routing:** react-router-dom, HashRouter für GitHub Pages Kompatibilität

---

## Map-Tile Connector-Rendering (GELÖST – nicht erneut umbauen!)

**Problem:** Descent-2e-Tile-PNGs (any2cards/d2e) müssen so dargestellt werden,
dass benachbarte Tiles über ihre Puzzle-Connector (Tab/Notch) ineinandergreifen
und das interne Tile-Raster deckungsgleich mit dem Board-Raster bleibt.

**Funktionierende Lösung (Stand: erste 8 Tiles perfekt):**

1. **PNG-Geometrie:** Canvas ist exakt `cols×75 × rows×75 px` (75px = 1 Feld).
   Auf Connector-Kanten liegt die Body-Wall ~18px innen, Tab ragt bis zur
   Canvas-Kante (~1px), Notch schneidet bis ~35px ein. Flache Kanten: Inhalt
   direkt an der Canvas-Kante (~1px).

2. **Connector-Erkennung (Python/PIL):** Pro Kante von der Canvas-Kante nach
   innen scannen bis erstes opakes Pixel (alpha>128). 45px an beiden Enden
   abschneiden (Rundecken). Median-Tiefe des Kerns: **≈1px = flach**,
   **≈18px = Connector**. Schwelle: `baseline >= 8` → Connector. Gegen 4
   pixel-verifizierte Tiles (01a/02a/05a/08a) validiert: 4/4.

3. **Streckungs-Modell (`MapGrid.tsx` `DraggableTile`):** `CONNECTOR_INSET_FRAC
   = 0.269` (visuell kalibriert via 01a/02a). Pro Seite NUR strecken, wenn
   dort ein Connector ist: `iL/iR/iT/iB = conn[seite] ? 0.269 : 0`.
   `sx = dCols/(dCols−iL−iR)`, `sy = dRows/(dRows−iT−iB)`,
   `imgW = footW·sx`, `imgH = footH·sy`,
   `imgLeft = −(iL·CELL_SIZE)·sx`, `imgTop = −(iT·CELL_SIZE)·sy`.
   Wrapper = Footprint (`dCols·CELL_SIZE × dRows·CELL_SIZE`),
   `overflow: visible` bei Connector-Tiles, damit der Rand herausragt.

4. **KRITISCHER FIX:** Tailwind-Preflight setzt global
   `img { max-width: 100%; height: auto }`. Das stauchte horizontal
   gestreckte Bilder auf die Wrapper-Breite zurück → rechte Streckung wirkte
   nie. **Lösung:** `maxWidth: 'none'` UND `maxHeight: 'none'` im img-Style.
   Ohne diesen Fix ist die rechte Connector-Seite immer falsch.

**Connector-Daten:** stehen pro Tile in `src/data/mapTiles.ts` als
`connectors: { top, right, bottom, left: boolean }`. Nur Kanten mit echtem
Connector auf `true`. B-Seiten haben eigene Muster (andere Tile-Rückseite).

---

## Bekannte Offene Fragen

- [x] Welche Features hatte das Original Quest Vault exakt? → docs/research/quest-vault-original.md
- [x] Gibt es Community-Datensätze mit allen Spielinhalten? → any2cards/d2e (JSON+PNG), D2eMap
- [x] Welche Assets stehen unter freier Lizenz zur Verfügung? → docs/research/digital-assets.md (Fazit: Grauzone)
- [x] Hosting: GitHub Pages mit Auto-Deploy via GitHub Actions
- [x] Tech-Stack: React + Vite + TypeScript + Tailwind + zustand
- [x] App offline-fähig: PWA via vite-plugin-pwa (sw.js + manifest)
- [ ] Umgang mit FFG IP-Rechten langfristig klären (Community-Grauzone aktuell)
- [ ] B-Seiten-Connectoren visuell in der App verifizieren
- [ ] Overlays als vollständige Datenbasis (src/data/overlays.ts fehlt noch)
- [ ] Monster-Tracker: Live-HP/Status während Spielsitzung
- [ ] Kampagnen-Verwaltung
- [ ] Mobile-Responsive UI

## Recherche-Ergebnisse (Kurzfassung)

### Original Quest Vault
- **Betreiber:** Fantasy Flight Games (offiziell!)
- **URL:** tools.fantasyflightgames.com/descent/
- **Zeitraum:** Jan 2013 – Jan 2020 (~7 Jahre)
- **Shutdown:** 21. Januar 2020
- **Kern-Features:** Quest-Editor, Map Builder (Tiles/Drag-Drop), Encounter-Editor, PDF-Export, Community-Bibliothek, Bewertungssystem, Versions-Archiv, Kampagnen-Verknüpfung
- **Schwäche:** Keine Updates für Erweiterungen ab 2015; dauerhaft "Open Beta"

### Community-Alternativen
- **descent-quest-builder** (Lorenzo Balducci): Electron/Web, PDF-Export, kein Sharing – EINZIGER ernst zu nehmender Nachbau
- **D2eMap** (Sadgit-HL): Karten-Visualisierung, alle Monster/Tokens – KEIN vollständiger Quest-Editor
- **any2cards/d2e**: Beste strukturierte Datenbasis (JSON + PNG aller Karten/Tiles)
- **d2etracker.com**: Kampagnen-Tracking, kein Quest-Editor
- **Road to Legend App** (FFG): Offizieller Companion, kein Quest-Editor

### Wichtige Erkenntnis
Es gibt KEINEN vollständigen, modernen Ersatz für den Quest Vault. Das ist die Marktlücke dieses Projekts.
