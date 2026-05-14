# Implementierungsplan

**Stand:** Phase 0-1 (Setup & Recherche)  
**Zuletzt aktualisiert:** 2026-05-14

---

## Phasen-Übersicht

### Phase 0 – Setup ✅
- [x] Repository einrichten
- [x] CLAUDE.md anlegen
- [x] README.md mit Deployment-Anleitung
- [x] Dokumentationsstruktur anlegen
- [ ] Git-Workflow konfigurieren (Auto-Commits)

### Phase 1 – Recherche 🔄
- [x] Recherche-Agenten gestartet
- [ ] Quest Vault Original dokumentiert
- [ ] Spielinhalte vollständig erfasst
- [ ] Deutsche Begriffe-Glossar erstellt
- [ ] Digitale Assets identifiziert

### Phase 2 – Konzept & Architektur ⏳
- [ ] Tech-Stack festlegen (ADR-001)
- [ ] Feature-Liste priorisieren (MVP definieren)
- [ ] Datenmodell entwerfen
- [ ] UI/UX-Skizze

### Phase 3 – Grundgerüst ⏳
- [ ] Projekt-Setup (Vite + React + TypeScript)
- [ ] GitHub Actions für Auto-Deploy auf GitHub Pages
- [ ] Basis-Routing
- [ ] Grundlegendes UI-Layout (DE)
- [ ] Erweiterungs-Auswahl (welche Packs besitzt der User)

### Phase 4 – Spielinhalt-Datenbasis ⏳
- [ ] JSON-Daten: Alle Erweiterungen
- [ ] JSON-Daten: Alle Monster mit Werten
- [ ] JSON-Daten: Alle Helden
- [ ] JSON-Daten: Alle Spielplan-Tiles
- [ ] JSON-Daten: Alle Overlays

### Phase 5 – Kern-Features ⏳
- [ ] Spielplan-Builder (Tiles platzieren, drehen)
- [ ] Quest-Editor (Quests anlegen, Ziele definieren)
- [ ] Monster-Tracker (HP, Statuswerte während Spiel)
- [ ] Helden-Verwaltung
- [ ] Quest speichern/laden (localStorage)

### Phase 6 – Erweiterte Features ⏳
- [ ] Quest exportieren/importieren (JSON)
- [ ] Kampagnen-Verwaltung
- [ ] Overlord-Karten-Tracker
- [ ] Printable Quest-Karten
- [ ] Mobile-Responsive UI

### Phase 7 – Polish & Release ⏳
- [ ] Deutsche UI vollständig lokalisiert
- [ ] Accessibility-Check
- [ ] Performance-Optimierung
- [ ] Dokumentation vervollständigen
- [ ] Community-Feedback einarbeiten

---

## MVP-Definition (Minimum Viable Product)

Das MVP soll folgendes können:
1. Erweiterungen auswählen, die man besitzt
2. Einen Spielplan aus Tiles zusammenstellen
3. Quest-Daten (Monsterpositionen, Ziele) speichern
4. Den aktuellen Spielstand tracken (Monster-HP)

---

## Offene Entscheidungen

- Tech-Stack (React vs. Svelte vs. Vue)
- Asset-Strategie (eigene SVGs vs. Community-Assets)
- Hosting-Plattform
