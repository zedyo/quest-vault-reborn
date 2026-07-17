---
type: Source Summary
title: any2cards / d2e (Community-Datensatz)
description: Strukturierte JS/JSON-Spieldaten + Kartenbilder für Descent 2e — Haupt-Asset des Projekts, inkl. bekannter Fallstricke.
resource: https://github.com/any2cards/d2e
tags: [quelle, any2cards, daten, assets]
timestamp: 2026-07-17T00:00:00Z
---

# Was es ist

Das any2cards/d2e-Repo hat ein `data/`-Verzeichnis mit **strukturierten
JS/JSON-Dateien** — weit zuverlässiger als das Pixel-Lesen von Kartenbildern — plus
PNG-Bilder aller Karten und Tiles. Zugriff ohne API-Limit per **Blobless-Clone**:

```
git clone --filter=blob:none --no-checkout --depth 1 https://github.com/any2cards/d2e
git -C <repo> ls-tree -r --name-only HEAD | grep '^data/'
```

Einzeldatei direkt (gültiges JSON): die *aktuelle* Fassung über
`raw.githubusercontent.com/any2cards/d2e/master/data/<name>.js`, eine
*reproduzierbare* über den gepinnten Commit (siehe Stand unten).

**Stand/Version:** Commit `83ff61596b03d296c3092832789e5fa0f2e1d54a` (Zugriff
2026-07-17). Für reproduzierbaren Zugriff `master` durch diesen Hash ersetzen.

# Relevante Datendateien

- `class-skills.js` (282 Karten; Felder: name, archetype, class, `xp cost`,
  `fatigue cost`, rules, expansion, image), `class-familiars.js`, `class-items.js`,
  `hybrid-class-skills.js`
- `shop-items.js`, `relics.js` (Items), `overlord-decks.js`, `lieutenants.js`,
  `agents.js`, `travel-event-decks.js`, `heroes.js`, `monsters.js`

# Nutzung im Projekt

- Bild-URLs werden zentral über `src/data/assetUrls.ts` gebildet (`ANY2CARDS_IMAGES`,
  `EXPANSION_PREFIX`, `EXPANSION_PATH`).
- Die Rohdaten sind **englisch** → im Projekt zweisprachig speichern: EN-Original
  (zuverlässig) + DE-Community-Übersetzung (klar als solche markiert, nicht zwingend
  offizieller FFG-Wortlaut).

# Fallstricke (bekannt)

- **Errata-Dubletten:** dieselbe Karte 2× mit unterschiedlichem Text → die
  spätere/klarere Fassung nehmen.
- **Stub-Fehler:** z. B. Runenmeister hat KEINEN Begleiter; der
  Totenbeschwörer-Begleiter heißt „Reanimate", nicht „Skelett".
- **Vertauschte Quelldaten in `agents.js`** (entdeckt v1.1.21 — behoben v1.1.29): bei
  **Ardus Ix'Erebus / Kyndrithul / Zarihell / Skarn** (Bilehall/Manor) sind
  `xws/name/image/act` den falschen Charakteren zugewiesen (Regeltexte nennen den
  falschen Namen, Akt-Labels teils dupliziert). **Kern-Erkenntnis:** die *Inhalte*
  sind stimmig — Front-Rows (`attack`/`abilities`/`characteristics`) und Back-Rows
  (`ability rules`/`deck`) nennen je den korrekten Charakter; nur die Label-Felder
  sind permutiert. Zuordnung per **Dreifachabgleich** (Namensbanner am Kartenbild +
  Front-Ability-Signatur + Back-Regeltext/Deck). Decks bestätigt: Ardus→First Legion,
  Kyndrithul→Vital Essence, Zarihell→Eternal Agony, Skarn→Twisted Soul. Die korrigierten
  4 leben als kartenscan-validierte Literale in `agents.ts` → 20 Agenten / 40 Formen
  (Werte aus Front-Cards, EN-Regeln 1:1 aus Back-Cards inkl. Quell-Tippfehler
  „as it if were", DE handübersetzt). **Der Upstream bleibt fehlerhaft** — diese Notiz
  schützt einen künftigen Re-Ingest; die korrekte Fassung liegt in `agents.ts`.

# Verwandt

* [Kartenbild-Validierung](../concepts/card-image-validation.md) - Kreuzprüfung der Werte gegen die Kartenbilder.
* [Vorfall: fabrizierte Spieldaten](../concepts/fabricated-data-incident.md) - warum jede Quelle geprüft wird.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „any2cards-STRUKTURDATEN (Goldgrube, entdeckt 2026-06-13)" + „VERTAUSCHTE Quelldaten".
[2] any2cards/d2e — Repo <https://github.com/any2cards/d2e>, validierte Fassung Commit `83ff61596b03d296c3092832789e5fa0f2e1d54a` (Zugriff 2026-07-17).
[3] [src/data/assetUrls.ts](../../src/data/assetUrls.ts) — Asset-URL-Modul.
[4] [src/data/agents.ts](../../src/data/agents.ts) — korrigierte Agenten-Literale.
