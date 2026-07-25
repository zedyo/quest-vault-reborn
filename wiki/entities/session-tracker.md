---
type: Subsystem
title: Session-Tracker (Kampagnen-Spielstand)
description: Eigener Store + abgeleiteter Live-Stand für den Kampagnen-Spielstand, getrennt vom Spiel-Store.
resource: src/store/useSessionStore.ts
tags: [session-tracker, zustand, persistenz, architektur, redesign]
timestamp: 2026-07-25T00:00:00Z
---

# Architektur

- **Eigener zustand-Store** `src/store/useSessionStore.ts` mit **eigenem**
  localStorage-Key `qvr-sessions` (dritter Eigen-Key neben `qvr-theme`/
  `qvr-builder-draft`), bewusst **getrennt** von `useGameStore` (Key
  `quest-vault-reborn`) — so bleibt dessen Persist-Schema (Quests + Sammlung)
  unangetastet. Eigene `PERSIST_VERSION`/`migrate`/`merge` + `sanitizeSessionList`.
- **Live-Stand abgeleitet, nicht gespeichert:** XP/Gold/besessene Karten & Gegenstände
  werden NICHT als Saldo persistiert, sondern per reiner Funktion
  `deriveLiveState(session)` (`src/store/sessionDerive.ts`) aus Setup + Szenario-Protokoll
  **gefaltet**. Add/Update/Remove eines Szenarios sind einfache Array-Ops → Doppelzählen
  ist strukturell unmöglich (Dangling-Sell-Guard: Verkauf ohne existierende Instanz zählt
  nicht).
- **Typen** in `src/types/session.ts`; Item-/Skill-/Karten-Besitz sind reine
  ID-Referenzen in die statischen Daten (Auflösung + sanfter Fallback in
  `src/components/session/sessionHelpers.ts`).
- **Export/Import** über `src/utils/sessionImport.ts` (Whitelist-Rebuild wie
  `questImport.ts`; beim Import nur die Top-Level-ID neu, alle inneren Referenz-IDs
  bleiben → verlustfreier Round-Trip).
- **Detail:** Overlord-Karten-IDs werden als `deckId:cardId` geführt (Karten-IDs sind
  nur je Deck eindeutig).

# UI-Architektur (Redesign v1.8.0)

Bis v1.5.3 spiegelte die Oberfläche das Datenmodell (Tabs Setup/Helden/Overlord/
Szenarien). Seit v1.8.0 folgt sie den drei **Arbeitsmomenten** am Spieltisch:
einmal einrichten, nach jedem Szenario nachtragen, das nächste vorbereiten.

```
/session                        Kampagnen-Auswahl (laufend + Archiv)
/session/:id                    Shell: 74-px-Kopfzeile + 46-px-Abschnittsleiste
  ├── (index)                   Überblick — Cockpit
  ├── helden[/:heroId]          Partei + Heldenbogen              [data-theme=heldentum]
  ├── overlord[/karten]         Kommandozentrale + Kartendeck     [data-theme=overlord]
  ├── verlauf[/karten]          Zeitleiste + Abenteuerkarten (geteilte Sicht)
  └── einrichtung               dezent rechts in der Abschnittsleiste
/session/:id/abschluss          Abschluss-Flow, 5 Schritte
```

- **Zwei Designs als Struktur:** Heldenbereiche rendern in einem Container mit
  `data-theme="heldentum"`, Overlord-Bereiche mit `data-theme="overlord"` —
  **unabhängig** vom globalen Theme-Schalter (`ThemeScope` in
  `components/session/ui/controls.tsx`). Das ist die Kern-Orientierung: helle
  Fläche = Heldenseite, dunkle Spalte = Overlord.
- **`CardTile`** (`components/session/ui/CardTile.tsx`) ist die EINE Karten-Kachel
  für Fähigkeit / Gegenstand / Overlord-Karte / Plotkarte / Gerücht / Marktkarte.
  `rulesText` ist **Pflichtfeld** — der Regeltext steht immer im Klartext, der
  Scan nur noch als Miniatur mit Lightbox (`CardThumb`, entfällt unter 480 px).
- **`HeroChipRow`** ersetzt sämtliche `<select>`-Zuweisungen; Klick auf das aktive
  Kürzel oder auf „Gemeinsam" setzt `toHeroLocalId = null`. Mobil werden die
  Kürzel zu vier gleich breiten 44-px-Flächen.
- **Abschluss-Flow** arbeitet auf einem **Entwurf** (eigener localStorage-Key
  `qvr-scenario-draft:<sessionId>` — einer je Kampagne, Muster `builderDraft.ts`),
  nicht auf dem Store. Erst
  „Szenario abschließen" schreibt — und zwar in EINEM `persist`-Aufruf:
  Szenario-Eintrag + Bedrohungsstand + Schicksalsmarker → 0 (regelkonform nach
  dem Einkaufsschritt) + Kartenzustände. Der Live-Stand bleibt allein aus
  `deriveLiveState` abgeleitet.
- **„Stand vor dem Szenario":** der Flow rechnet gegen
  `deriveLiveState({...session, scenarios: ohne den Entwurf})` — dadurch stimmen
  XP-Budgets und Gold-Rechnung auch beim BEARBEITEN eines Eintrags.
- **Vorschlagslogik** (`scenarioSuggest.ts`) ist rein und schlägt nur vor, wo der
  Kampagnenbogen es eindeutig hergibt (linear, Einführung, letztes offenes
  Szenario, Zwischenspiel/Finale als einzige Kandidaten, genau zwei Zweige).
  Sonst: **kein Vorschlag** — es wird nicht geraten.
- **Gerüchte** (`src/utils/rumorTiming.ts`): Zeitfenster, Akt-Beschränkung,
  Intermezzo-Sperre, Ausschlüsse und Verfallsregeln werden aus `Rumor.textDe`
  **geparst**, nicht gemappt. Sechs Zeitfenster; nicht spielbare Karten bleiben
  sichtbar und nennen den Grund. Zusatzabenteuerkarten (Akt II, ohne eigenen
  Spielzeitpunkt) sind **kein Teil des Gerüchtedecks**.
- **Titel-Auflösung:** die auf einer Gerüchtekarte GENANNTE Zusatzabenteuerkarte
  wird über `resolveAdvancedQuestId` **normalisiert** gesucht (Apostrophe,
  Mehrfach-Leerzeichen, Groß-/Kleinschreibung). Grund: „Die Hüter des
  Geheimnisses" nennt „Devis Blutturm", die Zusatzabenteuerkarte selbst heißt
  „Devis' Blutturm". Beide Transkriptionen sind kartengenau und bleiben
  unangetastet (Kartentext = priorisierte Wahrheit) — verglichen wird
  normalisiert, nicht korrigiert. Ein Test hält fest, dass **jeder** genannte
  Titel auflösbar bleibt.
- **Marker beim Nachbearbeiten:** Bedrohung und Schicksal beschreiben den
  AKTUELLEN Stand. `finish()` schreibt sie deshalb nur fort, wenn der Eintrag neu
  oder der jüngste ist — eine Korrektur an einem alten Szenario darf die Zähler
  am Tisch nicht zurücksetzen.

# Persist-Schema

`PERSIST_VERSION` **3** (v1.8.0). Additiv ergänzt:
`CampaignSession.archived/note/epic/rumors/advancedQuests`,
`TrackedHero.startingXp` (epische Variante: belegt 3 EP „Fortgeschrittene" /
6 EP „Experten") und `startingFateTokens` (**freier** Startwert, keine
Regelvorgabe der Variante — Schicksalsmarker entstehen erst im Spiel),
`PlayedScenario.playedAt/threatAfter/fateAfter/rumorPlayedId/market`.
`TrackedOverlord.activeRumorIds` ist **@deprecated** — die Migration überträgt den
Inhalt EINMALIG nach `CampaignSession.rumors` (Status `in-play`) und leert das
Altfeld; erkannt wird v2 daran, dass das Feld `rumors` komplett fehlt (ein
vorhandenes, auch leeres Array ist bereits v3 → idempotent).

# Autoritative Quelle

Implementierung in `src/store/**` + `src/types/session.ts` + `src/components/session/**`.
Diese Seite fasst die Architektur-Entscheidungen zusammen.

# Verwandt

* [Datenspeicherung, Assets, Hosting & Routing](../concepts/runtime-and-deployment.md) - localStorage/zustand-`persist` + Persist-Schutzregel (der Session-Store hält bewusst einen eigenen Key).

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Session-Tracker (1.4.0)" + Statustabelle v1.4.0–v1.8.0.
[2] [src/store/useSessionStore.ts](../../src/store/useSessionStore.ts), [src/store/sessionDerive.ts](../../src/store/sessionDerive.ts), [src/utils/sessionImport.ts](../../src/utils/sessionImport.ts).
[3] [src/utils/rumorTiming.ts](../../src/utils/rumorTiming.ts) + [src/components/session/scenarioSuggest.ts](../../src/components/session/scenarioSuggest.ts) — reine Ableitungen (Zeitfenster, Vorschlag), unit-getestet.
[4] Design-Handoff „Session-Tracker Redesign" (16 Screens) — Vorlage für Struktur, Maße, Typo-Skala und Texte der v1.8.0-Oberfläche.
