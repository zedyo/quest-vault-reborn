# Bekannte Nachbau-Versuche und Alternative Tools

**Status:** Recherche abgeschlossen (Mai 2026)
**Zuletzt aktualisiert:** 2026-05-14

---

## 1. Community-Nachbau-Versuche (Direkte Quest-Vault-Ersätze)

### 1.1 Descent Quest Builder (Lorenzo Balducci)

| Feld | Wert |
|------|------|
| GitHub | https://github.com/LorenzoBalducci96/descent-quest-builder |
| Live-Demo | https://lorenzobalducci96.github.io/descent-quest-builder/index_web.html |
| Motivation | "Due to the end of the official descent quest vault" |
| Status | Aktiv (letzter Stand bekannt) |
| Sprache | Englisch |

**Features:**
- Custom Mission-Erstellung für Descent (visueller Editor)
- Drag-and-Drop Tiles mit 4 Rotationen (0°, 90°, 180°, 270°)
- Tile-Namensschema: `TILENAME_000.png`
- PDF-Export (über html2canvas + jsPDF)
- Projekt-Speicherung:
  - Desktop: Lokal (über Electron)
  - Web: HTML-Datei-Download als Backup
- Sitzungswiederherstellung (gespeicherte Projekte laden)
- Zwei Betriebsmodi: Desktop (Electron-App) oder Webbrowser

**Tech-Stack:**
- Desktop: Electron + Node.js
- Web: Plain HTML/JavaScript (browserbasiert)
- Rendering: html2canvas
- PDF: jsPDF
- Bilder: Base64-kodiert (zur CORS-Vermeidung)
- Eigene Bewegungs-, Resize- und Snap-Funktionen

**Einschränkungen (vermutet):**
- Kein Sharing/Community-Bibliothek
- Kein Bewertungssystem
- Vermutlich keine vollständige Erweiterungs-Abdeckung

---

### 1.2 D2eMap (Sadgit-HL, ursprünglich Vitezslav)

| Feld | Wert |
|------|------|
| GitHub | https://github.com/Sadgit-HL/D2eMap |
| Live-Demo | https://sadgit-hl.github.io/D2eMap/ |
| Zweck | Karten-Tool für Descent 2nd Edition (KEIN vollständiger Quest-Editor) |
| Status | Aktiv (496+ Commits) |
| Hauptsprache | JavaScript (95%) + HTML + CSS + AutoHotkey |

**Features:**
- Alle Monster-Karten und -Tokens (inkl. aktualisierter Versionen: Dark Minotaurs, Crow Hags, Blood Apes mit 2x2-Bases)
- Alle Helden-Karten und -Tokens (inkl. CK Heroes)
- Agent Card Backsides
- Plot Decks: Vital Essence, First Legion, Eternal Agony
- Overlord Deck (Basic 1 und 2)
- Automatische randomisierte OL-Kartenliste
- Dorfbewohner-Positionsspeicherung auf Preset-Maps
- Rotation für große Monster
- Map-Auswahlmenü
- Vorgefertigte Maps
- Karten-Errata integriert
- **Offiziell als "fork for play-by-forum games" designiert**

**Einschränkungen:**
- Kein vollständiger Quest-Editor (kein Text-Editor, kein PDF-Export)
- Schwerpunkt: Map-Visualisierung, nicht Quest-Erstellung

---

### 1.3 Severenity Quest Builder (DmytroLopushanskyy)

| Feld | Wert |
|------|------|
| GitHub | https://github.com/DmytroLopushanskyy/Severenity-Quest-Builder |
| Zweck | Quest-Builder (Descent-spezifisch) |

**Details:** Wenige Informationen verfügbar; Community nicht sehr prominent.

---

### 1.4 Descent Dungeon Generator (SirMorland)

| Feld | Wert |
|------|------|
| GitHub | https://github.com/SirMorland/Descent-Dungeon-Generator |
| Zweck | Zufällige Encounter-Generierung (kein vollständiger Editor) |

---

## 2. Digitale Companion-Apps (Offiziell von FFG)

### 2.1 Road to Legend (FFG, kostenlos)

| Feld | Wert |
|------|------|
| Plattformen | iOS, Android, Steam (Windows) |
| App Store | https://apps.apple.com/us/app/road-to-legend/id1098000926 |
| Google Play | https://play.google.com/store/apps/details?id=com.fantasyflightgames.rtl |
| Steam | https://store.steampowered.com/app/477200/Descent_Road_to_Legend/ |
| Release | Mai 2016 |
| Kosten | Kostenlos |
| Sprachen | Englisch (und weitere) |

**Features:**
- Übernimmt die Overlord-Rolle → vollständig **kooperatives/Solo-Spiel**
- Automatische Monster-Aktivierung mit individuellen Befehlen pro Runde
- Dynamische Map-Aufdeckung (nur sichtbare Räume werden gezeigt)
- Erweiterungs-Management: App zeigt automatisch Monster aus besessenen Erweiterungen
- Inventar- und Skill-Tracking der Helden
- Mehrstufige Kampagnen verfügbar:
  - Rise of All Goblins (Mini-Kampagne, Tutorial)
  - Kindred Fire (Lord Merick Farrow)
  - Nerekhall: Seeds of Corruption (Verminous)
  - Embers of Dread (Belthir)
  - Weitere via Updates
- Kein Quest-Editor / kein Custom-Content

**Wichtig:** Road to Legend hat **keine Quest-Erstellungs-Funktion** und ist kein Ersatz für den Quest Vault. Es ist ein Companion für das Spielen, nicht für das Erstellen.

---

### 2.2 Valkyrie (Open Source, NPBruce)

| Feld | Wert |
|------|------|
| GitHub | https://github.com/NPBruce/valkyrie |
| Lizenz | Apache 2.0 |
| Zweck | Scenario-Builder für Descent 2e und Mansions of Madness |

**Features:**
- Open-Source Scenario-Builder
- Unterstützt Descent 2e und Mansions of Madness
- Keine eigenen Spielgrafiken → Assets müssen aus Road-to-Legend-App importiert werden
- Sehr komplex in der Einrichtung

---

## 3. Campaign-Tracker-Tools

### 3.1 D2E Tracker (d2etracker.com)

| Feld | Wert |
|------|------|
| URL | http://d2etracker.com/ |
| Zweck | Kampagnen-Tracking (kein Quest-Editor) |

**Features:**
- Kampagnen-Fortschrittsverfolgung (Advanced Campaign: RTL oder SOB)
- Nach Kampfabschnitten: Gold, Erfahrung, Items, Skills eingeben
- Quest-Informationen inkl. FAQ/Errata
- Monsterliste pro Quest
- Monster-Statistiken und -Fähigkeiten mit Filterfunktion
- Kampagnen-Statistiken und Balance-Analysen
- Helden-Popularitätsstatistiken
- Hero-Skills und Overlord-Karten Übersicht
- Story-Zusammenfassung (Kampagnen-Erzählung)

---

### 3.2 Descent Campaign Tracker App (carloscasalar)

| Feld | Wert |
|------|------|
| GitHub | https://github.com/carloscasalar/descentCampaignTrackerApp |
| Tech | AngularJS |
| Stand | 2015 (älteres Projekt) |
| Zweck | Einfaches Kampagnen-Tracking für "Sea of Blood" |

---

## 4. Virtual Tabletop (VTT) Lösungen

### 4.1 Tabletop Simulator (Steam Workshop)

Mehrere Community-Mods vorhanden, teilweise auf DMCA-Anfragen hin entfernt:

| Mod | Steam-ID | Beschreibung |
|-----|----------|-------------|
| Descent 2e Main Table setup | 1371901280 | Alle Descent-2e-Inhalte, Kampagnenbücher |
| Kisho's Descent 2nd Ed. | 2247450980 | Karten bis Lost Legends |
| Descent 2e RTL – Fantasy Setup (reupload) | 3116068365 | Wiederveröffentlichung nach DMCA |

**Hinweis:** FFG hat mehrfach Mods entfernen lassen. DMCA-Durchsetzung aktiv.

### 4.2 Vassal

- Vassal-Modul vorhanden: https://boardgamegeek.com/filepage/81517/descent-2nd-edition-vassal-module
- Community-Thread: https://boardgamegeek.com/thread/1011361/descent-2e-vassal-module-continued

### 4.3 Roll20 / Fantasy Grounds

- Kein offizielles Modul
- Community-Anfragen ohne Ergebnis

---

## 5. Descent-Community-Projekte (nicht Quest-Vault-Ersatz, aber relevant)

### 5.1 Descent Community Website

- URL: https://descent-community.org/
- Bietet: Custom Rules, Fan-Projekte, Campaign Rule Reference Guide (CRRG)
- CRRG PDF: https://descent-community.org/wp-content/uploads/2018/10/CRRG_1_12.pdf

### 5.2 The Shadow Rune Project

- URL: https://descent-community.org/index.php/fan-projects-fan-content/the-shadow-rune-project/
- Adaptiert The Shadow Rune-Kampagne für Solo/Kooperativ-Spiel (ohne Overlord)
- Nutzt Valkyrie-Software

### 5.3 any2cards D2e (Datenbasis)

- GitHub: https://github.com/any2cards/d2e
- Enthält: JSON-Daten + Bilder für Helden, Monster, Skills, Items, Tiles, Tokens, Karten
- Browser-Extension für Chrome/Firefox
- Disclaimer: "All related properties, images and text are owned by FFG"
- **Beste bekannte strukturierte Datenbasis für Descent 2e**

---

## 6. Bekannte Anforderungen der Community (Was sie sich wünschen)

Aus Forum-Diskussionen destilliert (BGG, FFG Forum Archive):

1. **Vollständige Erweiterungs-Unterstützung** – alle Erweiterungen bis Lost Legends / Shards of Everdark
2. **Quest-Editor mit Map Builder** – wie das Original, aber mit modernem Interface
3. **Community-Bibliothek** mit Such- und Bewertungsfunktion
4. **PDF-Export** im offiziellen Descent-Design
5. **Campaign-Erstellung** (Quests zu Kampagnen verknüpfen)
6. **Rumor Cards und Advanced Quest Cards** erstellen
7. **Keine lokale Installation nötig** (browserbasiert)
8. **Aktive Maintenance** und regelmäßige Updates

---

## 7. Nicht realisierte / gescheiterte Versuche

- "Time for a New Vault?" (FFG Community Thread 2018/2019) – Diskussion ohne Ergebnis
- Multiple BGG-Threads fordern ein neues Tool, niemand hat bisher ein vollständiges Ersatzprojekt geliefert
- descent-quest-builder (Lorenzo Balducci) ist der bisher einzige bekannte ernsthafte Versuch

---

## 8. Quellen-Übersicht

| Quelle | URL |
|--------|-----|
| BGG: Quest Vault alternative (2022) | https://boardgamegeek.com/thread/2789277/quest-vault-alternative |
| BGG: Modern quest creator wanted | https://boardgamegeek.com/thread/2687012/ |
| FFG Forum Archive: Alternative to Quest Vault | https://ffg-forum-archive.entropicdreams.com/topic/288786/ |
| FFG Forum Archive: Vault Shutdown | https://ffg-forum-archive.entropicdreams.com/topic/304004/ |
| GitHub: descent-quest-builder | https://github.com/LorenzoBalducci96/descent-quest-builder |
| GitHub: D2eMap | https://github.com/Sadgit-HL/D2eMap |
| GitHub: any2cards/d2e | https://github.com/any2cards/d2e |
| Road to Legend (FFG) | https://www.fantasyflightgames.com/en/news/2016/3/15/road-to-legend/ |
| Descent Community | https://descent-community.org/ |
