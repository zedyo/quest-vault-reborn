---
type: Concept
title: CRRG-Errata/FAQ-Integration (Architektur)
description: Wie der Community Rules Reference Guide additiv, quellenbelegt und namensbasiert an die Karten angebunden ist.
tags: [errata, crrg, architektur, verknüpfung, additiv]
timestamp: 2026-07-17T00:00:00Z
---

# Leitprinzip (additiv)

CRRG-Inhalte (offizielle FFG-Errata + FAQ + ~400 Community-FAQs) sind **additiv**: sie
erweitern die Original-Karten als optionale Zusatzinfo und **ersetzen den Original-Inhalt
NIE**. In der App nur als **default-eingeklappte** Zusatzbox bzw. durchsuchbare Sektion,
jeweils mit Quellenangabe „CRRG V1.15". Der Original-Kartentext bleibt Hauptdarstellung
(siehe [FFG-IP-Grenze](./ffg-ip-boundary.md)).

# Datenmodell (`src/types/game.ts`)

`RuleClarification` (Teil 1, alphabetisch), `ErrataEntry` (Teil 2, komponentenbezogen),
`ErrataGroup` = `{label, points[]}` (bei Klassen `label` = Fertigkeitskartenname),
`ErrataNote` (Road-to-Legend-Kästen), `ErrataScope` = `hero|class|item|overlord|plot|
monster|monster-ability|adventure|rumor|secret-room|other`.

# Namensbasierte Verknüpfung (`src/data/errataLinks.ts`)

CRRG-Einträge nennen Komponenten nur beim **Namen** → `errataLinks.ts` löst den Namen
**zur Laufzeit** gegen die echten Datensätze auf (bleibt automatisch synchron).
Normalisierung: Kleinschreibung, `ß`→`ss`, „and"→„und", Klammer-Zusätze/Trennzeichen
entfernt; für Held/Monster ein **Edit-Distanz-≤1-Rückfall** (fängt „Jain"↔„Jaine").
Scope→Quelle: `hero→HEROES`, `class→HERO_CLASSES`, `item→SHOP_ITEMS+RELICS`,
`overlord→OVERLORD_DECKS`, `monster→MONSTERS`, `rumor→RUMORS`, `plot→PLOT_DECKS`
(Teilstring), `adventure→` Kampagne über `subgroupDe`.

- **Monsterfähigkeiten** (`monster-ability`, z. B. „Feuerodem") werden über den
  Fähigkeitsnamen (Text vor „:" in surges/abilities/actions) jedem Monster zugeordnet,
  das sie besitzt (`getMonsterAbilityErrata`).
- **Nicht auflösbare** Einträge behalten `targetId: null` und erscheinen nur in der
  durchsuchbaren Übersicht → **keine Information geht verloren**.
- Schreibvarianten per `HERO_ALIASES` (z. B. CRRG „Augur Grimson" → Held „Augur Grisom").

# Extraktion (Verfahren)

PDF mit echtem Textlayer (InDesign), Extraktion via PyMuPDF: Spaltenerkennung +
**font-basierte Rollen** (`Windlass`=Überschriften, `GaramondPremrPro`=Fließtext,
`-Bd`≥11 pt=Fertigkeitsname). **Symbol-Mapping** aus dem Font `GaraScenarioDescent`
(`∏`→Erschöpfung, `≥`→Herz, `±`/`į`→Schub, `İ`→Verteidigung, `Į`→Aktion, `Ĳ`→Bewegung,
`Ĵ`/`ĵ`/`ķ`/`π`/`ĳ`/`μ`→Stärke/Wissen/Willenskraft/Gespür) → in der App via
[GameSymbols](../entities/game-symbols.md) als Icons. Die breiten Banner/2-Spalten-Layouts
täuschen reine Textheuristiken → **jede Teil-2-Seite adversarial gegen das Seitenbild
verifiziert** (siehe [Kartentext-Transkription](./card-text-transcription.md)).

# Bekannte Grenzen

Teil 3 (visuelle Beispiele) nicht reproduziert; Leutnants-Fähigkeiten ohne passendes
Monster nur über Panel/Übersicht; Abenteuer-Errata hängen an der Kampagne (Szenarioname
als Zwischenzeile); Promo-Helden außerhalb der 60-Helden-DB bleiben unverknüpft.

# Autoritative Quelle

Quell-Identität (Titel/URL/Version), der 3-Teile-Aufbau und die Umfangszahlen stehen in
`docs/game-data/crrg-errata.md`; die Errata-Texte selbst in `src/data/errata.ts` +
`ruleClarifications.ts` (test-verknüpft via `ERRATA_LINK_STATS`).

# Citations

[1] [docs/game-data/crrg-errata.md](../../docs/game-data/crrg-errata.md) — Quelle + Aufbau + Umfang.
[2] `src/data/errataLinks.ts`, `src/types/game.ts`, `src/components/ErrataBox.tsx`, `src/pages/RulesClarificationsPage.tsx`.
