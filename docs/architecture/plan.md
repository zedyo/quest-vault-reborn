# Quest Vault Reborn – Roadmap & Implementierungsplan

**Aktuelle Version:** 1.6.4  
**Letztes Update:** 2026-07-17  
**Status:** v1.0 ausgeliefert; v1.1-Datenbasis abgeschlossen (1.1.0–1.1.32: Daten/Kartensymbole,
Overlord/Leutnants/Agenten/Plotdecks komplett, Kampagnen, Reisekarten, Overlays). **v1.2 (Design)
abgeschlossen:** 1.2.0 = Design-Fundament (warme Palette, Fonts Cinzel/Inter offline, Fokusringe);
1.2.1 = Navigation (Daten-Dropdown + mobiles Menü); 1.2.2 = Startseite-Hub; 1.2.3 = Feinschliff
(Scrollleisten/::selection/reduced-motion) + iPad-Layout verifiziert; 1.2.4 = umschaltbare Themes
(Verlies/Arkanblau/Schiefer via CSS-Variablen + 🎨-Umschalter). **Seither ausgeliefert:** v1.3 (deutsche Original-Karten), v1.4/1.5 (Session-Tracker), v1.6 (Design-System v2 + Dashboard). Maßgeblich ist die CLAUDE.md-Statustabelle

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

> **Hinweis:** Die maßgebliche, laufend gepflegte Statusübersicht steht in `CLAUDE.md`
> (Statustabelle). Die Versions-Nummerierung in *diesem* Roadmap-Dokument ist gegenüber
> der tatsächlichen Auslieferung verschoben – im Zweifel gilt `CLAUDE.md`.

### v1.6.0 – Design-System v2 ✅ (2026-07-10)

- Zwei umschaltbare Designs: **Overlord** (dunkel/Blut, Standard) + **Heldentum** (hell/Gold),
  aus dem in „Claude DESIGN" ausgearbeiteten Design-System (`export/theme.css` + `tailwind.config.js`).
- Semantische Design-Tokens (`--qv-*`) in `src/theme.css`; die bestehenden Tailwind-Skalen
  (`dungeon`/`gold`/`gray`) als theme-variablen-getriebene Brücke → komplettes UI wechselt live.
- Neue self-hosted Schriften je Theme (Pirata One/Cormorant bzw. Cinzel/EB Garamond, IBM Plex Mono).
- Details siehe `CLAUDE.md` (Statustabelle v1.6.0 + Designentscheidungen).

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
- Datenbasis: 208 Tiles (Stand v1.0.0; heute 225), 56 Monstergruppen (Vollwerte Akt 1+2), 60 Helden
- Vollständige Spielwerte-Dokumentation in `docs/game-data/*.md`

---

## Geplante Versionen

> ⚠️ **Veraltetes Versionsschema.** Die unten skizzierten Zuordnungen (v1.3 = Monster-
> Tracker, v1.4 = Kampagnen-Speicherstand, v1.5 = Overlord-Kommandozentrale, v1.6 =
> Helden-Spieleransicht) entsprechen **nicht** der tatsächlichen Auslieferung. Real:
> v1.3 = deutsche Original-Karten, v1.4/1.5 = Session-Tracker, v1.6 = Design-System v2.
> **Maßgeblich ist die CLAUDE.md-Statustabelle.** Der Monster-Tracker ist jetzt für **v1.9.0** geplant.

### v1.1.0 – Datenvollständigkeit 📋 (nächster Schritt)

**Ziel:** Alle spielrelevanten Daten vollständig erfassen, validieren und dokumentieren.
Bevor Features auf Daten basieren, müssen diese korrekt sein.

**Aufgaben:**
- [x] Monster-Gruppengrößen pro Spieleranzahl (2/3/4) — alle 56 Gruppen (2026-06-13,
      von `-back.png`-Karten validiert; Feld `groupSizes`, UI-Anzeige, Integritäts-Test)
- [x] Helden-Klassen: VOLLSTÄNDIG ✅ (1.1.2 – alle 24 Klassen, Grundspiel + Erweiterungen, zweisprachig EN+DE, ClassesPage)
- [x] Beschwörungs-Begleiter ✅ (Begleiter + Startausrüstung je Klasse in heroClasses.ts)
- [x] Item-Shop-Karten ✅ (1.1.3 – 122 Marktkarten)
- [x] Reliktkarten ✅ (1.1.4 – 54 Relikt-Seiten, doppelseitig)
- [x] Overlord-Klassen + Karten: VOLLSTÄNDIG ✅ (1.1.15 Grundspiel + 1.1.16 Erweiterungen +
      1.1.17 Belohnungskarten; 105 Karten in 27 Decks, EN 105/105 wortgetreu verifiziert)
- [x] Overlord-Hauptmänner/Leutnants: VOLLSTÄNDIG ✅ (1.1.18 Grundspiel + 1.1.19 Erweiterungen;
      21 Leutnants / 39 Formen, EN verifiziert)
- [x] Agenten + Plotdecks: VOLLSTÄNDIG ✅ – 20 Agenten / 40 Formen (1.1.20 Grundspiel 6 +
      1.1.21 Erweiterungen 10 + 1.1.29 die 4 vertauschten kartenscan-validiert) und
      Plotdeck-Karten (1.1.22–1.1.27: 20 Decks / 200 Karten)
- [x] Reisekarten erfasst ✅ (1.1.31 – `src/data/travelCards.ts` + `/reisekarten`): 41 Reise-/
      Stadtereignis-Karten, nur faktische Strukturdaten (Erweiterung, Position, Gelände-Abdeckung) +
      Kartenbilder; Ereignistext bewusst nicht reproduziert. Nebenszenarien = Advanced Quests (v1.1.30).
- [x] Kampagnen ✅ (1.1.30 – faktischer Überblick: 9 Kampagnen + 16 Advanced Quests; Szenario-Inhalte = FFG-IP, nicht reproduziert)
- [x] Daten-Validierungspass: alle vorhandenen Monster- und Heldenwerte gegen offizielle Karten prüfen (v1.0.3: 70+ Korrekturen, alle 56 Monstergruppen + 60 Helden kartenscan-validiert)
- [x] Overlay-Datenbasis ✅ (1.1.32 – `src/data/overlays.ts`): 9 platzierbare Overlay-Marker im
      MapBuilder (Quest-Editor + Kartenbauer), mit der Begegnung gespeichert. Kompakter Kernsatz.

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
- [x] Duplikate extrahieren: StatIcons, Lightbox, FilterBar (v1.1.13 – `StatIcons.tsx`,
      `ModalOverlay.tsx`, `Filters.tsx`; in Helden/Monster/Items/Klassen + ReleaseNotesModal verbaut)
- [x] Zentrales Asset-URL-Modul (v1.1.13 – `src/data/assetUrls.ts`: Basis-URL + EXPANSION_PATH/PREFIX
      + monsterImageUrl/tileImageUrl; löst die 3 parallelen Strategien)
- [x] Quest-Löschen ohne Rückfrage (Touch-Mistap = Datenverlust) → Bestätigung (v1.1.14 –
      `ConfirmDialog` auf `ModalOverlay`; Quest aus Liste/Editor + Begegnung abgesichert)
- [ ] Standalone-Kartenbauer (/karte) speichert nicht → persistieren oder warnen
- [ ] Touch-Targets ≥44px (Monster-Token-X ist 14px), Hover-Vorschau braucht Touch-Alternative
- [x] localforage entfernen (v1.1.x – tote Dependency, nirgends importiert; Store nutzt
      zustand-Default `localStorage`. Aus package.json + lockfile entfernt)
- [x] react-router-dom auf ≥6.30.4 (v1.1.x – Open-Redirect-Advisory; von 6.30.3 → 6.30.4,
      Floor in package.json auf `^6.30.4` angehoben)
- [x] **Dependency-Sicherheitspass v1.8.1** — alle 12 offenen Dependabot-Advisories behoben,
      `npm audit` = 0. React 18→19, react-router-dom 6 → **react-router 8** (das Paket
      `react-router-dom` wird ab v8 nicht mehr veröffentlicht; alle Importe umgestellt),
      vite 5→8, vitest 2→4, @vitejs/plugin-react 4→6, vite-plugin-pwa 0.20→1.3, postcss/
      tailwind/typescript auf aktuelle Patches, CI-Node 20→22. Details: `wiki/concepts/dependency-security-pass.md`
- [ ] navItems umgruppieren wenn v1.3+ kommt: Spielen / Erstellen / Kompendium / Sammlung

### Offen — Niedrig
- [ ] Route-basiertes Code-Splitting (React.lazy) sobald Items/Overlord-Daten da sind
- [ ] *_BY_ID-Maps statt Array.find in Render-Pfaden
- [ ] Gesamt-Export/-Import (Backup) vor v1.4
- [ ] Actions per Commit-SHA pinnen
- [ ] CSP-Meta-Tag (img-src 'self' raw.githubusercontent.com)
- [x] Lightbox: Escape-Close + Fokus-Management (v1.1.13 – via geteiltem `ModalOverlay`:
      Escape schließt, Fokus wandert ins Panel; voller Fokus-Trap später)
- [ ] Asset-Hotlinking-Risiko (any2cards) in decisions.md dokumentieren; Vendoring evaluieren
- [x] vitest 4.x Update (v1.8.1 – Critical-Advisory betraf nur die Dev-Umgebung, jetzt behoben)

---

## Nächste konkrete Schritte (jetzt)

> Maßgeblich ist die CLAUDE.md-Statustabelle + „Was noch fehlt". Aktueller Stand: **v1.8.2**.

**Erledigt mit v1.8.2 — Branch-Vorschauen auf GitHub Pages:** Jeder Push auf einen
Entwicklungsbranch erscheint unter `…/quest-vault-reborn/preview/<slug>/` (Übersicht
unter `…/preview/`) und ist damit prüfbar, bevor er nach `main` gemergt wird. Der
Inhalts-Branch `pages-content` hält den gesamten Seitenbaum; deployt wird an genau einer
Stelle (Workflow „Pages veröffentlichen" auf `main`). Vorschauen speichern ihre
Spielstände getrennt von der Live-Version. Details:
`wiki/concepts/pages-preview-deployments.md`.

**Erledigt mit v1.8.1 — Dependency-Sicherheitspass:** alle Dependabot-Meldungen behoben
(`npm audit` = 0), React 19 + react-router 8 + Vite 8 + Node 22.

**Erledigt mit v1.8.0 — Session-Tracker Redesign** (Design-Handoff, 16 Screens):
neue Informationsarchitektur (Überblick/Helden/Overlord/Verlauf + dezente Einrichtung),
geführter 5-Schritte-Abschluss-Flow auf einem eigenen Entwurf, Regeltext im Klartext
auf jeder Karte (`CardTile`), Zuweisung per Heldenkürzel statt Dropdown, Gerüchte als
geteilte Ansicht mit aus dem Kartentext geparsten Zeitfenstern, epische Variante,
Archivieren, Persist-Migration v2→v3. Tippziele im Tracker sind mobil ≥ 44 px.

1. **v1.9.0 (geplant):** Monster-Tracker (Live-HP) — Planungssession mit User vor Umsetzung.
   Der Platz dafür ist im Überblick bereits reserviert (fünfter Abschnitt „Am Tisch",
   nur während eines laufenden Szenarios). Hinweis: 1.7.0 wurde übersprungen, das
   Session-Tracker-Redesign trägt auf Userwunsch die 1.8.0; die geplanten Vorhaben
   rücken auf 1.9.0 (Monster-Tracker) und 1.10.0 (Helden-Spieleransicht).
2. **Audit-Backlog abarbeiten** (siehe „Audit-Backlog" oben): offene „Mittel/Niedrig"-Punkte,
   u. a. Store-Aufteilung, Touch-Targets ≥44 px **außerhalb** des Session-Trackers
   (Layout-Kopfzeile), Actions per Commit-SHA pinnen, CSP-Meta-Tag.
3. **Projekt-Wiki** (`wiki/`) als kompoundierendes Gedächtnis weiter pflegen (Ingest/Query/Lint).
