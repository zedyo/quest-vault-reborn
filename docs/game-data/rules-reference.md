# Descent 2. Edition – Regeln & Referenz

**Status:** Umgesetzt ✅ (v1.3.12) – Referenzseite `/regeln` + `src/data/rulesReference.ts`
**Zuletzt aktualisiert:** 2026-06-26

---

## Zweck & IP-Grenze

Diese Seite ist ein **Schnellnachschlag** für Symbole, Würfel, Spielablauf und Begriffe.
Sie reproduziert **ausdrücklich NICHT** das FFG-Regelheft oder Questbuch (Urheberrecht): Alle
Texte sind **eigene, zusammenfassende Kurzbeschreibungen** allgemein bekannter Grundmechaniken,
keine abgetippten Regelpassagen. Verbindlich bleiben die offiziellen Regelhefte/Questbücher.

Damit verhält sie sich wie der bisherige Umgang mit FFG-IP im Projekt (Reise-, Kampagnen- und
Gerücht-Texte werden ebenfalls nicht reproduziert).

## Inhalt `src/data/rulesReference.ts`

| Block | Export | Inhalt |
|---|---|---|
| Symbole | `GAME_SYMBOLS` | Herz, Schub, Erschöpfung, Aktion, Bewegung, Verteidigung – je `nameDe`/`nameEn` + eigene Kurzbeschreibung; `symbol` = Render-Schlüssel für die `GameSymbols`-Komponente |
| Angriffswürfel | `ATTACK_DICE` | blau/rot/gelb/grün mit kurzer Rolle (blau zeigt Reichweite) |
| Verteidigungswürfel | `DEFENSE_DICE` | grau/braun/schwarz (schwach → stark) |
| Spielablauf | `GAMEPLAY_STEPS` | Spielrunde, zwei Aktionen, Aktionsarten, Angriff/Verteidigung, Sichtlinie, Akt 1/2 |
| Begriffe | `GLOSSARY` | Zustände, Durchsuchen, Bedrohung, Ausdauer/Erschöpfung, Gelände, Gruppengröße, Diener/Meister, Overlord – einige mit Deep-Link auf die passende App-Seite |

Die Seite (`src/pages/RulesReferencePage.tsx`, Route `/regeln`) rendert die Symbole über die
vorhandenen `GameSymbols`-Komponenten (`HeartSymbol`, `SurgeSymbol`, `DiceSymbol` …) und verlinkt
Glossar-Begriffe auf bestehende Übersichtsseiten (`/zustaende`, `/monster`, `/overlord`, `/karte`).

Datenintegritäts-Tests sichern: eindeutige IDs, gültige Symbol-/Würfel-Schlüssel, nicht-leere
Texte und gültige interne Links.

## Bewusst NICHT enthalten

- Wörtlicher Regeltext / Questbuch-Inhalte (FFG-IP).
- Detaillierte Szenario-/Kampagnendaten (Ziele, Monsterlisten) – siehe `campaigns.md`, ebenfalls
  bewusst nur als faktischer Überblick.
