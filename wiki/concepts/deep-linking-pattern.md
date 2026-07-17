---
type: Pattern
title: Quer-Verlinkung mit Deep-Links (Leutnant ↔ Plotdeck)
description: Wiederverwendbares Muster für bidirektionale Deep-Links zwischen Referenzseiten inkl. Scroll + Highlight.
resource: src/data/lieutenantPlotLinks.ts
tags: [navigation, deep-link, muster, wiederverwendbar]
timestamp: 2026-07-17T00:00:00Z
---

# Muster

`src/data/lieutenantPlotLinks.ts` bündelt die Zuordnung Leutnant↔Plotdeck (importiert
`LIEUTENANTS` + `PLOT_DECKS` in einem **eigenen Modul**, um Zirkularimporte zu
vermeiden). Match per Namensgleichheit `lieutenant.nameEn === deck.agentEn`; einzige
Ausnahme: Alias „Mirklace" → „Gargan Mirklace" (Plotdeck *Burning Ambition*;
generischer vs. benannter Nerekhall-Leutnant, dieselbe Figur). Alle 21 Leutnants haben
ein Deck, alle 20 Decks einen Leutnant (per Datenintegritäts-Tests abgesichert).

# UI-Verhalten

- LieutenantsPage zeigt pro Karte einen „📜 Plotdeck:"-Link → `/plotdecks?deck=<id>`.
- PlotDecksPage macht das Agenten-Label zum Link → `/leutnants?lt=<id>`.
- Beide Zielseiten lesen den Query-Param (`useSearchParams`), schalten „Nur meine
  Sammlung" beim Aufruf via Link aus, scrollen zum Ziel (`scroll-mt-24`) und heben es
  ~2,5 s mit `ring-2 ring-gold-400` hervor.

**Für künftige Quer-Verlinkungen wiederverwenden.**

# Verwandt

* [Geteilte UI-Bausteine](./shared-ui-building-blocks.md) - weitere zentral wiederverwendbare Muster (Filters/`useSearchParams`-Umfeld).

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Leutnant↔Plotdeck-Verknüpfung (1.1.28)".
[2] [src/data/lieutenantPlotLinks.ts](../../src/data/lieutenantPlotLinks.ts) — Zuordnungsmodul (autoritativ).
