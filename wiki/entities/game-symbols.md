---
type: Component
title: GameSymbols — Descent-Kartensymbole & renderGameText
description: Zentrales Modul für Descent-Symbole (Herz/Schub/Erschöpfung/Aktion/Bewegung/Verteidigung/Würfel) und die Text→Symbol-Helfer.
resource: src/components/GameSymbols.tsx
tags: [ui, symbole, karten, wiederverwendbar]
timestamp: 2026-07-17T00:00:00Z
---

# Überblick

`src/components/GameSymbols.tsx` bündelt die Descent-Symbole und die Helfer, die
Kartentexte einheitlich mit Symbolen rendern. Für **künftige Kartentexte
(Overlord, Klassen, …) wiederverwenden** statt neu zu bauen.

# Symbole

- `SurgeSymbol` ⚡, `ActionSymbol` ↻, `HeartSymbol` ❤, `FatigueSymbol` 💧
- `MovementSymbol` (Stiefel), `DefenseSymbol` (Schild), Kreis-Badges
  `MovementBadge`/`DefenseBadge`, `DiceSymbol` (isometrischer 3D-Würfel).
  Symbol-Pfade stammen aus einer PSD-Familiar-Kartenvorlage (aufbereitet per
  `psd-tools`/`potrace`); Basisfarben aus den PSD-Pixeln. Action=blau,
  Surge=diagonaler Blitz, Fatigue=gelber gebogener Tropfen.
- `DiceSymbol` ersetzt die Buchstaben-Quadrate in `DiceDisplay.tsx` (`DicePip`) +
  ItemsPage. `MovementBadge`/`DefenseBadge` ersetzen die lokalen Stat-Icons in
  HeroesPage + MonstersPage (Bewegung grüner Kreis `#15552c`, Verteidigung blauer
  Kreis `#1f6fb2`; Health/Stamina-Icons bleiben lokal).

# Text→Symbol-Helfer

- `renderGameText()` — ersetzt Herz/Schub/Erschöpfung/Aktion durch Symbole **und**
  setzt jeden Satz in eine eigene Zeile. Angewendet auf Monster-/Item-Karten (1.1.5),
  Helden-Beschreibungen (`heroAbility`/`heroicFeat`) und Klassenkarten (1.1.9).
- `renderGameTextInline()` — Symbole **ohne** Satz-pro-Zeile, für Fließtexte:
  MonstersPage `formatEntry` (behält das fette „Name:"-Präfix) und QuestEditorPage
  (`QuestPrintView` + Vorschau; `pre-wrap` der Autoren-Umbrüche bleibt) (1.1.10).
- `TOKEN_SPLIT` erkennt zusätzlich „Aktion/Aktionen/Action/Actions" → `ActionSymbol`
  ↻ (1.1.11) — wirkt zentral überall (Helden/Klassen/Items/Relikte/Monster/Quest-Editor).

# Quest-Editor-Integration

`TextField` hat eine `SymbolInsertBar` (Knöpfe ❤/⚡/💧/↻), die den Begriff an der
Cursorposition einfügt (`onMouseDown`+`preventDefault` hält Fokus/Cursor, korrekte
Wortgrenze) + Hinweiszeile unter der Quest-Beschreibung (1.1.12).

# Verwandt

* [Geteilte UI-Bausteine](../concepts/shared-ui-building-blocks.md) - StatIcons ergänzen die Badges hier.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Wichtige Designentscheidungen → Kartensymbole".
[2] [src/components/GameSymbols.tsx](../../src/components/GameSymbols.tsx) — Implementierung (autoritativ).
