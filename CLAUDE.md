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
5. **docs/game-data/** – Spielinhalte

**Regel:** Nach jeder abgeschlossenen Arbeitseinheit einen Git-Commit erstellen.
Format: `feat|fix|docs|research: kurze Beschreibung`

---

## Aktueller Projektstatus

| Phase | Status | Beschreibung |
|-------|--------|--------------|
| 0 – Setup | ✅ Abgeschlossen | Repo-Struktur, CLAUDE.md, README |
| 1 – Recherche | ✅ Abgeschlossen | Quest Vault Features, Spielinhalte, Alternativ-Tools |
| 2 – Planung | ⏳ Ausstehend | Architektur, Tech-Stack |
| 3 – Grundgerüst | ⏳ Ausstehend | Webapp-Skeleton |
| 4 – Kerndaten | ⏳ Ausstehend | Spielinhalt als Datenbasis |
| 5 – Features | ⏳ Ausstehend | Feature-by-Feature Implementierung |
| 6 – Polish | ⏳ Ausstehend | UI, DE-Lokalisierung |

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

## Wichtige Designentscheidungen (werden in docs/architecture/decisions.md ausgeführt)

- Tech-Stack: TBD (Recherche läuft)
- Datenspeicherung: Lokal im Browser (localStorage/IndexedDB) bevorzugt
- Assets: Eigene SVG-Grafiken oder Community-Assets (Rechte prüfen!)
- Mehrsprachigkeit: Deutsch primär, Englisch optional

---

## Bekannte Offene Fragen

- [x] Welche Features hatte das Original Quest Vault exakt? → docs/research/quest-vault-original.md
- [x] Gibt es Community-Datensätze mit allen Spielinhalten? → any2cards/d2e (JSON+PNG), D2eMap
- [x] Welche Assets stehen unter freier Lizenz zur Verfügung? → docs/research/digital-assets.md (Fazit: Grauzone)
- [ ] Soll die App offline-fähig sein (PWA)?
- [x] Hosting: GitHub Pages (bereits in README geplant)
- [ ] Tech-Stack festlegen (React/Vue/Svelte + Vite?)
- [ ] Umgang mit FFG IP-Rechten klären (eigene Grafiken oder Grauzone)

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
