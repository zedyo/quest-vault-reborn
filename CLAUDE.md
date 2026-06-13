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

## Aktuelle Version: 1.1.0 (2026-06-13)

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
| v1.0.3 | ✅ Abgeschlossen | Vollständiger Daten-Validierungspass: 70+ Korrekturen an Monstern+Helden (Kartenscan-validiert) |
| v1.1.0 | 🔄 In Arbeit (Teil 1 ausgeliefert) | Datenvollständigkeit – ausgeliefert: Monster-Gruppengrößen, Versionsanzeige + Release-Notes-Popup. Offen: Helden-Klassen, Items, Overlord, Leutnants, Kampagnen (→ 1.1.x) |
| v1.2.0 | ⏳ Geplant | Design, iPad, Tests, Security |
| v1.3.0 | ⏳ Geplant | Monster-Tracker (Live-HP) – Planung zuerst |
| v1.4.0 | ⏳ Geplant | Kampagnen-Speicherstand – Planung zuerst |
| v1.5.0 | ⏳ Geplant | Overlord-Kommandozentrale |
| v1.6.0 | ⏳ Geplant | Helden-Spieleransicht |
| v2.0.0 | ⏳ Zukunft | Backend-Migration + Sync (Major, User-Zustimmung nötig) |
| v2.1.0 | ⏳ Zukunft | Englische Lokalisierung |
| v2.2.0 | ⏳ Zukunft | Benutzerkonten, Cloud-Speicherung, Kampagnen-Sharing (User-Wunsch 2026-06-12) |

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
- **Datenbasis:** 208 Tiles (Connectoren pixelverifiziert), 56 Monstergruppen (Akt 1+2 vollständig), 60 Helden

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

### DATEN-VORFALL 2026-06-12: Fabrizierte Helden (BEHOBEN – Lehre beachten!)

In `heroes.ts` wurden **8 frei erfundene Helden** mit zwei **nicht existierenden
Erweiterungen** („Maze of the Drakon", „Sands of the Past") gefunden — vermutlich
in einer früheren Session halluziniert. Namen wie Gaia, Aurora, Gristtun existieren
in Descent 2e nicht. Sie wurden aus `heroes.ts` und `heroes.md` entfernt.
**Korrekte Zahlen: 60 Helden, 56 Monstergruppen, 208 Tiles, 23 Erweiterungen.**

**Lehren / Regeln daraus:**
1. `src/data/expansions.ts` ist die **verbindliche Produktliste**. Jeder Datensatz
   mit einer expansionId außerhalb dieser Liste ist halluzinationsverdächtig.
2. Die Datenintegritäts-Tests (`src/data/__tests__/dataIntegrity.test.ts`) prüfen
   das automatisch — `npm test` hätte den Fehler sofort gefunden. Tests nie umgehen.
3. Vor dem Eintragen neuer Spieldaten: Existenz in der echten Produktwelt
   gegenprüfen (BGG, Fandom Wiki, any2cards-Repo-Struktur).
4. Bei Datenänderungen den Subagenten `daten-pruefer` laufen lassen.

### Kartenbild-Validierung (ETABLIERTES VERFAHREN seit 2026-06-12)

Spielwerte lassen sich **direkt aus den any2cards-Kartenbildern validieren** —
die Werte stehen pro Kartentyp immer an derselben Position:

1. Karte herunterladen (URLs: Helden in `heroes.ts` als `imageUrl`; Monster per
   Muster `images/monsters/d2e/<erweiterung>/<act1|act2>/<prefix>-<id>-front.png`,
   siehe `EXPANSION_PREFIX`/`EXPANSION_PATH` in `MonstersPage.tsx`. `-back.png`
   enthält Fähigkeitstexte UND Gruppengrößen pro Spielerzahl!)
2. Mit Python/PIL relevante Bereiche zuschneiden und 4–6× hochskalieren
   (LANCZOS), dann per Read-Tool visuell ablesen. Monsterkarte (385×600):
   Minion-Stats oben (y 0–60), Meister-Stats unten (y 540–600), Verteidigungs-
   würfel jeweils rechts (x 230–385); Angriffswürfel Minion ~y 155–200,
   Meister ~y 405–450. Heldenkarte (600×483): Stats-Spalte x 230–420.
3. Akt 1 vs. Akt 2 beachten (getrennte Karten in `act1/`- und `act2/`-Ordnern).

**Gruppengrößen ablesen (Verfahren etabliert 2026-06-13):** Auf der `-back.png`-Karte
(385×600) liegt unten ein Streifen (y ~548–600) mit drei Segmenten für 2 / 3 / 4 Spieler
(von links nach rechts). Jedes Segment zeigt links die **Diener**-Zahl (goldene Figur) und
rechts die **Meister**-Zahl (rote Figur). Effizient: alle `-back.png` laden, den Streifen
ausschneiden, 4–5× hochskalieren und mehrere als beschriftete Montage stapeln (Streifen
breit + niedrig ⇒ im Read-Tool gut lesbar). Große Monster haben das Muster 1+0 / 0+1 / 1+1;
Schwärme (Kobold) deutlich größere Zahlen. Im Code: `groupSizes` als `[Diener, Meister]`.

**Damit gefundene & behobene Fehler (alle 2026-06-12/13, kartenscan-validiert):**
- Ravaella Leichtfuß: Bewegung 5→4 (v1.0.2)
- Reanimate: Verteidigung Braun (alle 4), act2Master +1 gelber Würfel (v1.0.2)
- Rat Swarm: Meister-Verteidigung Braun, Gefräßig gibt Energie nicht Herz (v1.0.2)
- **v1.0.3 – Vollständiger Audit (70+ Korrekturen an allen 56 Monstergruppen):**
  - Verteidigungswürfelfarben bei ~35 Monstern korrigiert (systematische Fehler)
  - Angriffswürfel: Arachyura alle grün (nicht gelb); Giant/Golem act2 rot+rot;
    Blood-Ape/Ynfernael-Hulk/Marrow-Priest act2 Würfel ergänzt
  - Textfehler: Elemental (Erde→Gespür, Wasser→Willenskraft); Wraith/Plague-Worm
    (Wissen/Ausdauer→Willenskraft); Ironbound Beschützen (Erschöpfung→Herz);
    Bane-Spider Einspinnen (Stärke→Gespür); Shadow-Dragon Schatten (Erschöpfung→Schub);
    Ferrox Extrahieren (Herzen→Erschöpfung); Dark-Minotaur Eiterbeulen (Herzen→Erschöpfung);
    Ice-Wyrm Eisig (Herz→Erschöpfung); Marrow-Priest (Herz→Schub, 3→5 Bewegung);
    Shade Seelenfessel (Herzen→Erschöpfung) + Flackern (Gespür-Test ergänzt)
  - Fähigkeitstypen: Feueratem (Shadow-Dragon/Hybrid-Sentinel) action→surge;
    Zauberei (Sorcerer/Chaos-Beast) surge→ability; Druckwelle (Lava-Käfer Master) surge→ability;
    Durchbohren (Skeleton-Archer/Deep-Elf) surge→ability; Ätherischer Griff action→ability
  - Shade Trait: Dunkel→Kalt; Steelhorns heroAbility Bedingung invertiert;
    Jain-Fairwood heroicFeat Klausel entfernt; Lebenspunkte→Herzen (Ogre, Crow-Hag,
    Skeleton-Archer, Deep-Elf); Beastman Schübe ergänzt; Flesh-Moulder Schübe ergänzt

→ Vollständiger Validierungspass aller 56 Monstergruppen + 2 Helden: ✅ ABGESCHLOSSEN

---

## Was noch fehlt (offene Arbeit v1.1)

- [x] Monster-Gruppengrößen pro Spielerzahl (2/3/4) — in monsters.ts + monsters.md
      (2026-06-13: alle 56 Gruppen aus den `-back.png`-Karten abgelesen; neues Feld
      `groupSizes: { p2/p3/p4: [Diener, Meister] }` im `Monster`-Typ; Anzeige in
      MonstersPage; Datenintegritäts-Test ergänzt — 19 Tests grün)
- [ ] Helden-Klassen vollständig (hero-classes.md ist Stub, Daten ausstehend)
- [ ] Items (items.md ist Stub, src/data/items.ts fehlt)
- [ ] Overlord-Klassen + Karten (overlord-classes.md ist Stub, src/data/overlordClasses.ts fehlt)
- [ ] Leutnants (lieutenants.md ist Stub, src/data/lieutenants.ts fehlt)
- [ ] Reisekarten + Nebenszenarien (travel-cards.md ist Stub)
- [ ] Kampagnen (campaigns.md ist Stub, src/data/campaigns.ts fehlt)
- [ ] Overlay-Datenbasis (src/data/overlays.ts fehlt)
- [ ] Daten-Validierungspass: alle Werte gegen Karten-Scans prüfen
      (Verfahren etabliert — siehe „Kartenbild-Validierung" oben; Gruppengrößen
      stehen auf den `-back`-Karten)
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

Ein **SessionStart-Hook** (`.claude/session-start.sh`) liefert jedem neuen Session
automatisch Version, letzte Commits und offene Aufgaben — manuelles Antriggern
ist nicht nötig.

**Dokumentations-Pflicht:** Jede Korrektur oder Ergänzung von Spieldaten MUSS sowohl
in der TypeScript-Quelldatei als AUCH in der entsprechenden `.md`-Datei unter
`docs/game-data/` festgehalten werden. Die `.md`-Dateien sind die langfristige
Wissensbasis. TypeScript-Code allein reicht nicht aus.

---

## AI-Arbeitsregeln (verbindlich für jede Session)

### Definition of Done — vor JEDEM Commit

1. `npm test` — alle Tests grün (Datenintegrität + Unit-Tests)
2. `npm run build` — fehlerfrei (inkl. TypeScript-Check)
3. Spieldaten-Änderung? → `.md`-Doku unter `docs/game-data/` synchron aktualisiert
4. Feature fertig? → Abgleich mit `docs/architecture/acceptance-criteria.md`;
   Haken in `plan.md` nur setzen, wenn ALLE Kriterien erfüllt sind
5. Statusänderung? → CLAUDE.md-Statustabelle und „Was noch fehlt" aktualisieren

### Selbstaktualisierung (Pflicht am Ende jeder Arbeitseinheit)

Diese Datei (CLAUDE.md) ist das Gedächtnis des Projekts. Nach jeder Arbeitseinheit:
- Neue Erkenntnisse, gelöste Probleme, verworfene Ansätze HIER dokumentieren
- Probleme die Zeit gekostet haben → unter „Bekannte Probleme" eintragen
- Die Statustabelle aktuell halten — eine neue Session muss ohne Rückfragen
  weiterarbeiten können

### Projekt-Subagenten (in .claude/agents/)

| Agent | Wann einsetzen |
|---|---|
| `sicherheits-pruefer` | Vor jedem Push mit src/-Änderungen (außer reine Datendateien). Liefert FREIGABE/BLOCKIERT. |
| `daten-pruefer` | Nach jeder Änderung an `src/data/*.ts`, vor dem Commit. Prüft auf Halluzinationen + Doku-Sync. |

Bei BLOCKIERT: Befund beheben, erneut prüfen lassen. Niemals blockierte Änderungen pushen.

### CI als Sicherheitsnetz

- `.github/workflows/ci.yml`: Tests + Build auf jedem Feature-Branch-Push und PR
- `.github/workflows/deploy.yml`: Tests laufen VOR dem Deploy — rote Tests = kein Deploy
- Tests niemals löschen/skippen um CI grün zu bekommen; Ursache beheben

### Auto-PR-und-Merge (User-Anweisung 2026-06-13, dauerhaft)

Der User hat dauerhaft autorisiert: **Wenn ALLE folgenden Bedingungen erfüllt sind,
automatisch einen PR nach `main` öffnen UND mergen — ohne Rückfrage:**

1. `npm test` lokal grün UND `npm run build` fehlerfrei
2. CI-Checks (`ci.yml`) auf dem gepushten Branch/PR sind **grün** (Status abwarten,
   nicht raten — via GitHub-MCP `pull_request_read`/`get_job_logs` prüfen)
3. Die Prüfung war **gründlich** und ergab **keine Fehler**: zuständige Subagenten
   (`daten-pruefer` bei `src/data/*`-Spieldaten, `sicherheits-pruefer` bei sonstigen
   `src/`-Änderungen) haben **FREIGABE** gegeben

**Ablauf:** committen → pushen → CI abwarten → bei Grün PR erstellen
(`mcp__github__create_pull_request`) → mergen (`mcp__github__merge_pull_request`,
Squash). Merge nach `main` löst automatisch den Deploy aus (`deploy.yml`).

**Nicht mergen** wenn: CI rot, ein Subagent BLOCKIERT, Tests/Build fehlschlagen,
oder es eine offene inhaltliche Rückfrage gibt. Dann Befund beheben oder nachfragen.
Major-Versionssprünge brauchen weiterhin separate User-Bestätigung.

### Release Notes pflegen (öffentlich)

- Bei **jedem Versionsbump** einen Eintrag in `src/data/releaseNotes.ts` ergänzen
  (neueste Version oben, `version` muss zur `package.json` passen).
- **Nur öffentlich relevante** Infos: sichtbare Features, Verbesserungen, Datenpflege.
  **Niemals** interne Strategie, Monetarisierung/Ko-Fi/Spenden, Sicherheits- oder
  Technik-Interna in die Release Notes schreiben (werden im Startseiten-Popup gezeigt).

### Schutzregeln

- **Niemals** `CONNECTOR_INSET_FRAC` oder den maxWidth/maxHeight-Fix anfassen (s. unten)
- **Niemals** Spieldaten erfinden — nur belegt aus Karten-Scans/any2cards/BGG übernehmen;
  im Zweifel als „Validierung ausstehend" markieren statt raten
- **Niemals** Persist-Schema ändern ohne `version`-Erhöhung + `migrate`-Schritt
  in `src/store/useGameStore.ts` (sonst Datenverlust bei Bestandsnutzern)
- Importierte Fremddaten (JSON-Import) laufen IMMER durch `src/utils/questImport.ts`

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
- **Routing:** BrowserRouter mit `basename="/quest-vault-reborn"` + `404.html`-SPA-Fallback
  (postbuild kopiert index.html → 404.html für GitHub-Pages-Deep-Links)
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
