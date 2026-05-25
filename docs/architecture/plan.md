# Quest Vault Reborn – Roadmap & Implementierungsplan

**Aktuelle Version:** 1.0.0  
**Letztes Update:** 2026-05-25  
**Status:** v1.0 ausgeliefert, v1.1 in Vorbereitung

---

## Versionierungsregeln

| Änderungstyp | Version | Beispiel |
|---|---|---|
| Bugfix, kleine UI-Anpassung | Patch `1.0.x` | Tile-Darstellungsfehler |
| Neues Feature, Datenerweiterung | Minor `1.x.0` | Monster-Tracker |
| Strukturelle Neuausrichtung (Tech, Architektur) | Major `x.0.0` | Backend-Migration |

**Regel:** Vor einem Major-Versionssprung explizite Bestätigung vom User einholen.

---

## Abgeschlossene Versionen

### v1.0.0 – Kern-MVP ✅ (2026-05-25)

**Was ist drin:**
- Map Builder: Tiles platzieren, drehen, Connectors, Hover-Vorschau
- Quest-Editor: Quests, Begegnungen, Ziele, Erzähltext
- Helden-Übersicht mit Filter
- Monster-Übersicht mit Filter
- Meine Sammlung (Erweiterungs-Auswahl)
- Speichern/Laden (localStorage, zustand persist)
- Export/Import (JSON), Druckansicht
- GitHub Actions Auto-Deploy auf GitHub Pages
- PWA (offline-fähig)
- Datenbasis: 208 Tiles (mit Connectoren), ~60 Monster (Vollwerte Akt 1+2), ~68 Helden
- Vollständige Spielwerte-Dokumentation in `docs/game-data/*.md`

---

## Geplante Versionen

### v1.1.0 – Datenvollständigkeit 📋 (nächster Schritt)

**Ziel:** Alle spielrelevanten Daten vollständig erfassen, validieren und dokumentieren.
Bevor Features auf Daten basieren, müssen diese korrekt sein.

**Aufgaben:**
- [ ] Monster-Gruppengrößen pro Spieleranzahl (2/3/4) — alle ~60 Gruppen
- [ ] Helden-Klassen vollständig (alle Klassen aller Erweiterungen, Fähigkeitskarten, Kosten in XP)
- [ ] Beschwörungs-Begleiter (Companion-Karten mit eigenen Werten)
- [ ] Item-Shop-Karten (alle Gegenstände, Typen, Kosten, Fähigkeiten, pro Erweiterung)
- [ ] Reliktkarten (alle Relikte)
- [ ] Overlord-Klassen + Karten (alle Decks, Kartenname, Kosten in XP, Effekte)
- [ ] Overlord-Hauptmänner/Leutnants (alle mit Werten, Fähigkeitskarten)
- [ ] Reisekarten + Nebenszenarien (alle Reisekarten, ausgelöste Ereignisse)
- [ ] Kampagnen (Grundspiel + Erweiterungen: alle Szenarien, Monster-Vorgaben)
- [ ] Daten-Validierungspass: alle vorhandenen Monster- und Heldenwerte gegen offizielle Karten prüfen
- [ ] Overlay-Datenbasis (`src/data/overlays.ts`)

**Akzeptanzkriterien → siehe `docs/architecture/acceptance-criteria.md` Abschnitt v1.1**

---

### v1.2.0 – Qualität & Design 🎨

**Ziel:** Stabile, optisch ansprechende, auf iPad nutzbare App.

**Aufgaben:**
- [ ] Design-Überarbeitung: mittelalterlich/mystisches Fantasy-Theme (dunkel, Pergament-Textur, Runenschrift, Golddetails)
- [ ] iPad-Optimierung: alle Seiten auf 768px–1024px vollständig bedienbar, Touch-Events
- [ ] Mobile-Responsive UI (alle Breakpoints)
- [ ] B-Seiten-Connectoren visuell in der App verifizieren
- [ ] Unit-Tests einführen (Vitest): Datenintegrität, Kernlogik, Tile-Rendering
- [ ] Security-Review: keine XSS, keine unsicheren Imports, Input-Validierung
- [ ] Accessibility-Check (WCAG AA, Keyboard-Navigation)
- [ ] Performance-Optimierung (Lazy Loading, Bundle-Analyse)
- [ ] DE-Lokalisierung vollständig (alle UI-Texte auf Deutsch)

**Akzeptanzkriterien → `docs/architecture/acceptance-criteria.md` Abschnitt v1.2**

---

### v1.3.0 – Monster-Tracker 🎯

**Voraussetzung:** Detaillierte Planungssession mit User VOR Implementierung.

**Grobkonzept:**
- Pro aktive Spielsitzung: Auswahl welche Monster-Gruppen im Einsatz sind
- Pro Gruppe: Anzahl Normal + Anzahl Meister-Figuren konfigurierbar (nach Spielerzahl)
- Jede Figur erhält: Lebenspunkte-Tracker, Status-Anzeige (Betäubt, Vergiftet, etc.)
- Anzeige: Restliche HP visuell (Herzen), Statusmarker
- Kein physisches Plättchen-Management mehr auf dem Spieltisch nötig

**Vor Implementierung zu klären:**
- Wie sieht die UX aus? (Grid? Liste? Karten-Layout?)
- Wie wird eine Figur als besiegt markiert?
- Wie wird der Tracker zurückgesetzt (neues Szenario)?
- Integration mit Quest-Editor?

**Akzeptanzkriterien → nach Planungssession ergänzen**

---

### v1.4.0 – Kampagnen-Speicherstand 💾

**Voraussetzung:** Detaillierte Planungssession mit User VOR Implementierung.

**Grobkonzept:**
- Vollständiger Kampagnen-Zustand persistierbar und wiederherstellbar
- Helden-Seite: Name des Spielers, Held, aktuelle LP/Ausdauer, XP (ungekauft), Gold, Items (ausgerüstet + Beutel), erworbene Fähigkeiten
- Overlord-Seite: Gewählte Klasse, aktuelle Deckzusammensetzung, Hauptmann, aktive Gerüchtekarten
- Kampagnen-Fortschritt: abgeschlossene/fehlgeschlagene Szenarien, Kampagnen-Ereignisse
- Export als JSON (Backup), Import zur Wiederherstellung

**Vor Implementierung zu klären:**
- Mehrere gleichzeitige Kampagnen?
- Wie wird XP-Ausgabe in Klassen-Upgrades abgebildet?

**Akzeptanzkriterien → nach Planungssession ergänzen**

---

### v1.5.0 – Overlord-Kommandozentrale ⚔️

**Ziel:** Dem Overlord alle Informationen und Steuerungsmöglichkeiten an einem Ort.

**Aufgaben:**
- [ ] Helden-Übersicht für Overlord: aktive HP/Ausdauer aller Helden, Fähigkeiten einsehbar
- [ ] Deck-Tracker: welche Overlord-Karten wurden bereits gespielt/gezogen
- [ ] Restkarten anzeigen: welche Karten sind noch im Deck
- [ ] Hauptmann-Verwaltung: Hauptmann-Karte mit Werten, Status, Fähigkeiten
- [ ] Szenario-Monsterauswahl: für aktuelles Szenario valide Monstergruppen anzeigen (nach Spielerzahl)
- [ ] iPad-optimierte Overlord-Ansicht

**Akzeptanzkriterien → `docs/architecture/acceptance-criteria.md` Abschnitt v1.5**

---

### v1.6.0 – Helden-Spieleransicht 🧙

**Ziel:** Jeder Spieler hat eine eigene Ansicht mit relevanten Informationen.

**Aufgaben:**
- [ ] Missionsbeschreibung nachlesen (vom Overlord freischaltbar)
- [ ] Aktive Monster auf dem Spielfeld einsehen (Typ, ggf. HP wenn Overlord freigibt)
- [ ] Eigene HP/Ausdauer, Status und Fähigkeiten im Blick
- [ ] Ausrüstungs-Übersicht

**Akzeptanzkriterien → `docs/architecture/acceptance-criteria.md` Abschnitt v1.6**

---

### v2.0.0 – Backend-Migration & Multiplayer-Sync 🔄

**Achtung: Major-Version. Vorher explizite Zustimmung des Users einholen.**

**Grobkonzept:**
- Migration von localStorage auf eine Backend-Datenbank
- Echtzeit-Synchronisation zwischen mehreren Geräten (Overlord + Spieler)
- Overlord kann Informationen gezielt freischalten (z.B. Szenario-Beschreibung, Monster-HP)
- Schadensverteilung wird auf allen Geräten synchron aktualisiert
- Benutzerkonten oder Session-Codes ohne Login

**Technologie-Entscheidung offen:** Supabase / Firebase / eigenes Backend?

**Akzeptanzkriterien → nach Planungssession ergänzen**

---

### v2.1.0 – Englische Lokalisierung 🌐

**Aufgaben:**
- [ ] i18n-System einführen (react-i18next oder ähnlich)
- [ ] Alle UI-Texte ins Englische übersetzt
- [ ] Spielinhalt (Karten, Fähigkeiten) optional EN/DE umschaltbar
- [ ] Sprachwahl persistent speichern

---

## Offene Entscheidungen

| Entscheidung | Status | Optionen |
|---|---|---|
| FFG IP-Rechte langfristig | Offen | Community-Grauzone weiter / eigene Grafiken / Lizenz anfragen |
| Hosting bei Backend-Migration | Offen | Supabase, Railway, eigenes VPS |
| Monetarisierung | Evaluieren | Ko-Fi Spenden, Premium-Features (DB-Sync), free forever |
| UI-Framework bleiben? | Stabil | React + Tailwind bleibt bis v2.0 |

---

## Nächste konkrete Schritte (jetzt)

1. **v1.1 starten:** Monster-Gruppengrößen in monsters.ts + monsters.md dokumentieren
2. **v1.1 starten:** Helden-Klassen Dokumentationsstruktur anlegen und füllen
3. **v1.1 starten:** Items, Overlord-Klassen, Leutnants als Daten-Stub anlegen
4. Daten-Validierungspass (alle Monsterwerte gegen Karten-Scans prüfen)
5. Akzeptanzkriterien für v1.2–v1.5 im Detail ausarbeiten
