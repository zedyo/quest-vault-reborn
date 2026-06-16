# Akzeptanzkriterien – Quest Vault Reborn

**Zweck:** Jedes Feature wird nur als „abgeschlossen" gewertet, wenn ALLE Kriterien
dieser Datei erfüllt sind. Kriterien können vom User jederzeit ergänzt oder angepasst
werden. Vor größeren Features werden die Kriterien dem User vorgelegt.

**Letzte Aktualisierung:** 2026-05-25

---

## v1.1 – Datenvollständigkeit

### 1.1.1 Monster-Gruppengrößen

- [ ] Für jede der ~60 Monstergruppen ist dokumentiert: Anzahl Normal-Figuren und Anzahl Meister-Figuren für 1 / 2 / 3 / 4 Helden
- [ ] Werte stehen in `src/data/monsters.ts` als `groupSizes: { 1: {...}, 2: {...}, 3: {...}, 4: {...} }` oder äquivalentes Format
- [ ] Werte stehen auch in `docs/game-data/monsters.md` in lesbarer Tabelle
- [ ] Alle Werte wurden gegen offizielle Karten-Rückseiten (Scan/Foto) validiert und als validiert markiert
- [ ] Quelle jedes validierten Wertes ist festgehalten

### 1.1.2 Helden-Klassen

- [ ] Alle Klassen aller Erweiterungen sind dokumentiert (~24+ Klassen, 4 Archetypen × ~6 Erweiterungen)
- [ ] Jede Klasse enthält: Name (DE+EN), Archetyp, Erweiterung, Startausrüstung, verfügbare Fähigkeitskarten
- [ ] Jede Fähigkeitskarte enthält: Name, XP-Kosten, Kartentext (DE), Typ (Waffe/Rüstung/Fertigkeit/etc.)
- [ ] Beschwörungs-Begleiter (z.B. Runenmeister-Golem, Totenbeschwörer-Skelett) haben eigene Einträge mit: Bewegung, LP, Verteidigung, Angriff, Fähigkeiten
- [ ] Daten in `src/data/heroClasses.ts` vorhanden
- [ ] Daten in `docs/game-data/hero-classes.md` vollständig dokumentiert
- [ ] Alle Werte validiert gegen offizielle Karten-Scans

### 1.1.3 Item-Shop-Karten & Relikte

- [ ] Alle Kaufkarten aus Grundspiel + jeder Erweiterung erfasst
- [ ] Pro Karte: Name (DE+EN), Erweiterung, Typ (Waffe/Rüstung/Anderes), Shop-Preis, Fähigkeit/Effekt (DE)
- [ ] Relikte separat gekennzeichnet (keine Kaufkarten, andere Regeln)
- [ ] Würfelangaben bei Waffen vollständig (Angriff, Trefferpunkte, Reichweite)
- [ ] Daten in `src/data/items.ts` vorhanden
- [ ] Daten in `docs/game-data/items.md` vollständig dokumentiert
- [ ] Alle Werte validiert

### 1.1.4 Overlord-Klassen & Karten

- [ ] Alle Overlord-Klassen/-Decks aller Erweiterungen erfasst (~12 Decks)
- [ ] Pro Deck: Name (DE+EN), Erweiterung, Startdeck-Zusammensetzung
- [ ] Pro Overlord-Karte: Name, Klasse, Menge im Deck, XP-Kosten zum Kaufen, Karteneffekt (DE)
- [ ] Basis-Overlord-Deck (ohne Klassenkarten) vollständig dokumentiert
- [ ] Daten in `src/data/overlordClasses.ts` vorhanden
- [ ] Daten in `docs/game-data/overlord-classes.md` vollständig dokumentiert
- [ ] Alle Werte validiert

### 1.1.5 Leutnants / Hauptmänner

- [ ] Alle Leutnants aller Erweiterungen erfasst
- [ ] Pro Leutnant: Name (DE+EN), Erweiterung, Größe (Felder), LP, Verteidigung, Angriff, Fähigkeiten
- [ ] Leutnant-Fähigkeitskarten vollständig dokumentiert
- [ ] Unterscheidung zwischen Leutnants mit/ohne physische Figur dokumentiert
- [ ] Daten in `src/data/lieutenants.ts` vorhanden
- [ ] Daten in `docs/game-data/lieutenants.md` vollständig dokumentiert
- [ ] Alle Werte validiert

### 1.1.6 Reisekarten & Nebenszenarien

- [ ] Alle Reisekarten (Travel Cards) aller Erweiterungen erfasst
- [ ] Pro Karte: Name (DE+EN), Erweiterung, Kartentext (DE), mögliche ausgelöste Ereignisse
- [ ] Nebenszenarien (Side Quests) die durch Reisekarten erreichbar sind, dokumentiert
- [ ] Daten in `docs/game-data/travel-cards.md` vollständig dokumentiert
- [ ] (Optional erst v1.4): `src/data/travelCards.ts`

### 1.1.7 Kampagnen & Szenarien

- [x] Alle Kampagnen aus Grundspiel und Erweiterungen dokumentiert (9, faktischer Überblick – v1.1.30)
- [x] Pro Kampagne: Name (DE+EN), Erweiterung, Typ (Groß-/Mini-Kampagne), Verzweigung (ja/nein) – v1.1.30
- [~] Pro Szenario: bewusst NICHT umgesetzt – detaillierte Szenario-Daten (Monstergruppen je
      Spielerzahl, Ziele, Besonderheiten) stehen nur in den FFG-Questbüchern (Urheberrecht, keine
      zuverlässige strukturierte Quelle). Stattdessen: 16 „Advanced Quests" der kleinen Packs aus
      any2cards mit faktischen Metadaten (Titel, Erweiterung, Akt, Reise-Gelände, Kartenbilder).
      Volle Szenario-Daten → v1.4+ (nur mit Quelle + geklärter Rechtslage).
- [x] Daten in `docs/game-data/campaigns.md` dokumentiert (Überblick + Advanced Quests + Abgrenzung)
- [x] `src/data/campaigns.ts` (CAMPAIGNS + ADVANCED_QUESTS) + `/kampagnen`-Seite + Tests – v1.1.30

### 1.1.8 Overlay-Datenbasis

- [ ] Alle Overlay-Typen aller Erweiterungen in `src/data/overlays.ts`
- [ ] Pro Overlay: id, Typ, Größe (cols × rows), Erweiterung, Beschreibung
- [ ] Dokumentiert in `docs/game-data/overlays.md`

### 1.1.9 Daten-Validierungspass

- [ ] Alle Monsterwerte (speed/health/defense/attack/surges/abilities/actions, Akt 1+2) gegen Karten-Scans aus any2cards/d2e verifiziert
- [ ] Alle Heldenwerte (6 Attribute, heroAbility, heroicFeat) gegen Karten-Scans verifiziert
- [ ] Abweichungen dokumentiert und korrigiert
- [ ] Nach Validierung: Datum und Status in `docs/game-data/` Dateien aktualisieren

---

## v1.2 – Qualität & Design

### 1.2.1 Design-Überarbeitung

- [ ] Neues Farbschema: Dunkelbraun/Schwarz als Basis, Pergament-Töne für Textflächen, Gold für Überschriften/Akzente
- [ ] Mindestens 1 Fantasy-Schriftart für Überschriften (lizenzfrei, WebFont)
- [ ] Hintergrundtextur oder -muster (Stein/Pergament) subtil eingesetzt
- [ ] Alle bestehenden Seiten im neuen Design: HomePage, MapBuilder, QuestEditor, Heroes, Monsters, Sammlung
- [ ] Dark Mode bleibt als primäres Theme
- [ ] Keine weißen/hellen UI-Elemente als Kontrast (durchgehend dunkel)
- [ ] Screenshot-Review vom User abgenommen (User bestätigt Design)

### 1.2.2 iPad & Mobile

- [ ] Alle Seiten auf 768px × 1024px (iPad Portrait) vollständig bedienbar
- [ ] Alle Seiten auf 1024px × 768px (iPad Landscape) vollständig bedienbar
- [ ] Touch-Drag im MapBuilder funktioniert auf iPad (kein Maus-only)
- [ ] Keine überlappenden Elemente auf 375px (iPhone SE) – zumindest lesbar
- [ ] Getestet mit Browser-DevTools Tablet-Simulation

### 1.2.3 Unit-Tests

- [ ] Vitest eingerichtet, läuft in CI (GitHub Actions)
- [ ] Tests für: Datenkonsistenz monsters.ts (alle Pflichtfelder vorhanden), heroes.ts, mapTiles.ts
- [ ] Tests für: Tile-Connector-Logik (getConnectorStyle gibt korrekte Werte)
- [ ] Tests für: Store-Logik (Erweiterungs-Toggle, Quest-CRUD)
- [ ] Mindestens 80% Coverage auf Daten-Dateien
- [ ] Alle Tests grün vor jedem Deploy (via CI)

### 1.2.4 Security

- [ ] Kein `dangerouslySetInnerHTML` ohne explizite Sanitierung
- [ ] Import von Fremdinhalten (JSON-Import) validiert vor Verwendung
- [ ] Keine direkten URL-Parameter in JSX ohne Encoding
- [ ] Dependency-Audit (`npm audit`) zeigt 0 High/Critical Vulnerabilities
- [ ] Keine Secrets oder API-Keys im Code

### 1.2.5 B-Seiten-Verifikation

- [ ] Alle b-Seiten-Tiles visuell in der App auf korrektes Connector-Rendering geprüft
- [ ] Abweichungen zwischen Pixel-Erkennung und visuell korrigiert
- [ ] `docs/game-data/map-tiles.md` entsprechend aktualisiert

---

## v1.3 – Monster-Tracker

*Akzeptanzkriterien werden VOR Implementierung in einer Planungssession mit dem User ausgearbeitet.*

**Vorläufige Mindest-Kriterien:**
- [ ] Planungssession durchgeführt, UX-Konzept vom User abgenommen
- [ ] Für ein aktives Szenario: Monstergruppen auswählen, Figurenanzahl nach Spielerzahl setzen
- [ ] Jede Figur hat: aktuellen HP-Tracker (visuell und als Zahl), Status-Marker
- [ ] HP kann durch +/- Buttons oder direkten Zahleneingabe geändert werden
- [ ] Besiegte Figuren werden markiert/entfernt
- [ ] Tracker ist ohne Neuladen der Seite nutzbar (keine Datenverluste)
- [ ] iPad-optimiert: große Touch-Targets, gut bedienbar mit Fingern
- [ ] Tracker kann zurückgesetzt werden (neues Szenario)

---

## v1.4 – Kampagnen-Speicherstand

*Akzeptanzkriterien werden VOR Implementierung in einer Planungssession ausgearbeitet.*

**Vorläufige Mindest-Kriterien:**
- [ ] Planungssession durchgeführt, Datenmodell vom User abgenommen
- [ ] Vollständiger Held-Zustand speicherbar: Name des Spielers, LP, Ausdauer, XP, Gold, ausgerüstete Items, Beutel-Items, erworbene Fähigkeiten
- [ ] Vollständiger Overlord-Zustand speicherbar: Klasse, Deckinhalt, Hauptmann, Gerüchtekarten
- [ ] Kampagnen-Fortschritt speicherbar: bisherige Szenarien, Entscheidungen
- [ ] Export als JSON + Import zur vollständigen Wiederherstellung
- [ ] Mehrere Kampagnen gleichzeitig verwaltbar
- [ ] Datum der letzten Spielsitzung angezeigt

---

## v1.5 – Overlord-Kommandozentrale

**Vorläufige Mindest-Kriterien:**
- [ ] Übersicht aller aktiven Helden: Name, HP, Ausdauer, Status
- [ ] Fähigkeiten jedes Helden einsehbar (aus Datenbasis, kein manuelles Eingeben)
- [ ] Overlord-Deck-Tracker: gespielte Karten, verbleibende Karten
- [ ] Leutnant-Verwaltung: aktiver Leutnant anzeigen mit Werten
- [ ] Szenario-Filter: welche Monstergruppen sind für das gewählte Szenario gültig?
- [ ] Alle Elemente auf iPad Portrait bedienbar (primäre Zielplattform)

---

## v1.6 – Helden-Spieleransicht

**Vorläufige Mindest-Kriterien:**
- [ ] Jeder Spieler kann seine eigene Helden-Karte sehen
- [ ] Eigene HP/Ausdauer, Status, Fähigkeiten jederzeit einsehbar
- [ ] Missionsbeschreibung (wenn vom Overlord freigegeben)
- [ ] Aktive Monster mit Typ (wenn vom Overlord freigegeben)
- [ ] Eigene Ausrüstungs-Übersicht

---

## v2.0 – Backend & Sync

*Akzeptanzkriterien werden VOR Implementierung ausgearbeitet. Major-Version braucht User-Bestätigung.*

---

## Allgemeine Qualitäts-Grundregel (gilt für alle Versionen)

Jede Version muss folgendes erfüllen, bevor sie als „fertig" gilt:

- [ ] `npm run build` ohne Fehler oder TypeScript-Warnungen
- [ ] Keine `console.error` oder unbehandelte Exceptions im Browser
- [ ] Alle neuen Daten sowohl in TypeScript-Quelldateien als auch in `.md`-Dokumentation vorhanden
- [ ] Git-Commit mit aussagekräftiger Nachricht, gepusht
- [ ] `docs/architecture/plan.md` aktualisiert (Version, Status)
- [ ] `CLAUDE.md` Projektstatus-Tabelle aktualisiert
