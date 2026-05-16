# Implementierungsplan

**Stand:** Phase 5 (Kern-Features – größtenteils umgesetzt)  
**Zuletzt aktualisiert:** 2026-05-16

---

## Phasen-Übersicht

### Phase 0 – Setup ✅
- [x] Repository einrichten
- [x] CLAUDE.md anlegen
- [x] README.md mit Deployment-Anleitung
- [x] Dokumentationsstruktur anlegen
- [x] Git-Workflow (Branch + Push pro Arbeitseinheit)

### Phase 1 – Recherche ✅
- [x] Quest Vault Original dokumentiert
- [x] Spielinhalte erfasst (Erweiterungen/Monster/Helden/Tiles)
- [x] Community-Alternativen recherchiert
- [x] Digitale Assets identifiziert (any2cards/d2e)

### Phase 2 – Konzept & Architektur ✅
- [x] Tech-Stack festgelegt (React + Vite + TypeScript + Tailwind + zustand)
- [x] MVP definiert
- [x] Datenmodell (`src/types/game.ts`)
- [x] UI-Layout (Dark-Dungeon-Theme)

### Phase 3 – Grundgerüst ✅
- [x] Projekt-Setup (Vite + React + TypeScript)
- [x] Basis-Routing (react-router)
- [x] Grundlegendes UI-Layout (DE)
- [x] Erweiterungs-Auswahl (Sammlung)
- [ ] GitHub Actions für Auto-Deploy auf GitHub Pages

### Phase 4 – Spielinhalt-Datenbasis ✅ (Überprüfung offen)
- [x] Daten: Alle Erweiterungen (`expansions.ts`)
- [x] Daten: Monster (`monsters.ts`) – Werte-Vollständigkeit prüfen
- [x] Daten: Helden (`heroes.ts`) – Vollständigkeit prüfen
- [x] Daten: Alle Spielplan-Tiles inkl. Connectoren (`mapTiles.ts`, 208 Tiles)
- [ ] Daten: Overlays

### Phase 5 – Kern-Features ✅ (weitgehend)
- [x] Spielplan-Builder (Tiles platzieren, drehen, Connectoren, Hover-Vorschau)
- [x] Quest-Editor (Quests/Begegnungen/Ziele, freigeschaltet)
- [x] Helden-Verwaltung (Anzeige/Filter)
- [x] Quest speichern/laden (zustand persist → localStorage)
- [ ] Monster-Tracker (HP/Status während Spiel) – nur Platzierung, kein Live-Tracking

### Phase 6 – Erweiterte Features 🔄
- [x] Quest exportieren/importieren (JSON)
- [x] Printable Quest-Karten (Druckansicht)
- [ ] Kampagnen-Verwaltung
- [ ] Overlord-Karten-Tracker
- [ ] Mobile-Responsive UI

### Phase 7 – Polish & Release ⏳
- [ ] Deutsche UI vollständig lokalisiert (Feinschliff)
- [ ] Accessibility-Check
- [ ] Performance-Optimierung
- [ ] B-Seiten-Connectoren visuell verifizieren
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

- ~~Tech-Stack~~ → entschieden: React + Vite + TypeScript + Tailwind + zustand
- ~~Hosting-Plattform~~ → GitHub Pages (Auto-Deploy noch einzurichten)
- Asset-Strategie / FFG-IP-Rechte: aktuell Community-Assets (any2cards/d2e,
  Grauzone) – langfristig eigene Grafiken prüfen

## Nächste konkrete Schritte

- GitHub Actions: Auto-Deploy auf GitHub Pages einrichten
- Monster-Tracker: Live-HP/Status während des Spiels
- B-Seiten-Connectoren visuell verifizieren
- Overlays als Datenbasis ergänzen
- Monster-/Helden-Datenvollständigkeit prüfen
