# Quest Vault Reborn – Roadmap & Implementierungsplan

**Aktuelle Version:** 1.1.1  
**Letztes Update:** 2026-06-13  
**Status:** v1.0 ausgeliefert; v1.1 inkrementell (1.1.0: Monster-Gruppengrößen, Versionsanzeige+
Release-Notes; 1.1.1: Grundspiel-Helden-Klassen zweisprachig). Weitere v1.1-Daten folgen in 1.1.x

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
- [x] Monster-Gruppengrößen pro Spieleranzahl (2/3/4) — alle 56 Gruppen (2026-06-13,
      von `-back.png`-Karten validiert; Feld `groupSizes`, UI-Anzeige, Integritäts-Test)
- [~] Helden-Klassen: Grundspiel ✅ (1.1.1 – 8 Klassen, 72 Karten, zweisprachig EN+DE,
      ClassesPage). Offen: Klassen der Erweiterungen (Champion, Beastmaster, Marshal, Prophet, …)
- [ ] Beschwörungs-Begleiter (Companion-Karten mit eigenen Werten)
- [ ] Item-Shop-Karten (alle Gegenstände, Typen, Kosten, Fähigkeiten, pro Erweiterung)
- [ ] Reliktkarten (alle Relikte)
- [ ] Overlord-Klassen + Karten (alle Decks, Kartenname, Kosten in XP, Effekte)
- [ ] Overlord-Hauptmänner/Leutnants (alle mit Werten, Fähigkeitskarten)
- [ ] Reisekarten + Nebenszenarien (alle Reisekarten, ausgelöste Ereignisse)
- [ ] Kampagnen (Grundspiel + Erweiterungen: alle Szenarien, Monster-Vorgaben)
- [x] Daten-Validierungspass: alle vorhandenen Monster- und Heldenwerte gegen offizielle Karten prüfen (v1.0.3: 70+ Korrekturen, alle 56 Monstergruppen + 60 Helden kartenscan-validiert)
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

### v2.2.0 – Benutzerkonten, Cloud-Speicherung & Kampagnen-Sharing 👥

**Vom User gewünscht (2026-06-12), explizit als späteres ToDo eingeplant.
Baut auf der v2.0-Backend-Infrastruktur auf.**

**Grobkonzept:**
- Registrierung + Login (E-Mail/Passwort, optional OAuth z.B. Google/Apple)
- Cloudbasierte Speicherung von Kampagnen, Quests und Sammlungen
  (datenbankgestützt, geräteübergreifend — localStorage bleibt als Offline-Fallback)
- **Kampagnen-Sharing:** Andere registrierte User können zu einer Kampagne
  eingeladen/hinzugefügt werden
- Geteilte Kampagnen und Features sind für eingeladene User direkt nutzbar
  (z.B. Helden-Spieleransicht aus v1.6 mit dem eigenen Konto verknüpft)
- Rollen innerhalb einer Kampagne: Besitzer (Overlord) / Mitspieler (Held)

**Aufgaben (grob, Planungssession vor Umsetzung nötig):**
- [ ] Auth-Konzept festlegen (Anbieter, Datenschutz/DSGVO, Passwort-Reset)
- [ ] Datenmodell: User ↔ Kampagne ↔ Mitglieder (n:m mit Rollen)
- [ ] Einladungs-Flow (Link oder Benutzername-Suche)
- [ ] Berechtigungen: Wer sieht/ändert was in einer geteilten Kampagne
- [ ] Migration bestehender localStorage-Daten ins Konto (Import beim ersten Login)
- [ ] Konto-Löschung inkl. aller Daten (DSGVO)

**Rechtlicher Hinweis:** Konten/Sync sind als Dienstleistung von den FFG-Spieldaten
trennbar (siehe „Interne Projektstrategie" in CLAUDE.md) — Premium-Eignung dort evaluieren.

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

## Audit-Backlog (Projektprüfung 2026-06-12)

Vollständige Befunde: Architektur-, Sicherheits- und Daten-Audit dieser Session.

### Bereits behoben (v1.0.1)
- [x] 8 fabrizierte Helden entfernt (Maze of the Drakon / Sands of the Past existieren nicht)
- [x] Datenintegritäts-Testsuite (18 Tests) + CI-Gate vor Deploy
- [x] Quest-Import-Validierung (Whitelist-Sanitizer, Größenlimits) — vorher persistenter Crash-DoS möglich
- [x] zustand persist: version + migrate + validierendes merge — vorher Datenverlust-Risiko bei Schema-Änderungen
- [x] ErrorBoundary mit Backup-Download statt weißer Seite
- [x] 404.html-SPA-Fallback (Deep-Links auf GitHub Pages funktionieren jetzt)
- [x] PWA-Icons generiert (waren 404, Installation defekt)
- [x] Workflow-Permissions job-scoped
- [x] SessionStart-Hook + Projekt-Subagenten (sicherheits-pruefer, daten-pruefer)

### Offen — Mittel (v1.1–v1.2 einplanen)
- [x] Reanimate-Werte gegen Kartenscan validiert (v1.0.2: Defense überall Braun, act2Master-Angriff 3 Würfel, Schwarm-Text korrigiert)
- [x] Rat-Swarm gegen Scan verifiziert (v1.0.2: Akt-1-Meister-Defense Braun, Gefräßig gibt Energie statt Herz; attack ['green'] bestätigt)
- [ ] Store-Aufteilung VOR v1.3 entscheiden: Session-/Tracker-State getrennt von Quest-Definitionen
- [ ] Duplikate extrahieren: StatIcons, Lightbox, FilterBar (bevor Items/Klassen-Seiten sie kopieren)
- [ ] Zentrales Asset-URL-Modul (aktuell 3 verschiedene Strategien)
- [ ] Quest-Löschen ohne Rückfrage (Touch-Mistap = Datenverlust) → Bestätigung/Undo
- [ ] Standalone-Kartenbauer (/karte) speichert nicht → persistieren oder warnen
- [ ] Touch-Targets ≥44px (Monster-Token-X ist 14px), Hover-Vorschau braucht Touch-Alternative
- [ ] localforage entfernen oder als IndexedDB-Adapter nutzen (tote Dependency)
- [ ] react-router-dom auf ≥6.30.4 (Open-Redirect-Advisory, praktisch kaum ausnutzbar)
- [ ] navItems umgruppieren wenn v1.3+ kommt: Spielen / Erstellen / Kompendium / Sammlung

### Offen — Niedrig
- [ ] Route-basiertes Code-Splitting (React.lazy) sobald Items/Overlord-Daten da sind
- [ ] *_BY_ID-Maps statt Array.find in Render-Pfaden
- [ ] Gesamt-Export/-Import (Backup) vor v1.4
- [ ] Actions per Commit-SHA pinnen
- [ ] CSP-Meta-Tag (img-src 'self' raw.githubusercontent.com)
- [ ] Lightbox: Escape-Close + Fokus-Management
- [ ] Asset-Hotlinking-Risiko (any2cards) in decisions.md dokumentieren; Vendoring evaluieren
- [ ] vitest 4.x Update (Critical-Advisory betrifft nur Dev-Umgebung)

---

## Nächste konkrete Schritte (jetzt)

1. ✅ **erledigt (2026-06-13):** Monster-Gruppengrößen in monsters.ts + monsters.md
   (alle 56 Gruppen aus `-back.png`-Karten abgelesen, UI + Test ergänzt)
2. ✅ **erledigt (2026-06-13):** Daten-Validierungspass aller 56 Monstergruppen + 60 Helden
   per Kartenbild-Analyse (v1.0.3, 70+ Korrekturen)
3. **v1.1 weiter:** Helden-Klassen Dokumentationsstruktur füllen (validierte Daten)
4. **v1.1 weiter:** Items / Overlord-Klassen / Leutnants / Kampagnen erfassen
5. Audit-Backlog „Mittel" in v1.1/v1.2 abarbeiten
