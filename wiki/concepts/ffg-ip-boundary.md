---
type: Concept
title: FFG-IP-Grenze (was reproduziert wird und was nicht)
description: Projektweite Regel, welche Descent-Inhalte reproduziert werden (faktische Metadaten, funktionale Kartentexte) und welche nicht (Ereignis-/Quest-/Regelheft-Prosa).
tags: [ip, recht, grenze, prinzip, ffg]
timestamp: 2026-07-17T00:00:00Z
---

# Prinzip

Descent 2e ist FFG/Asmodee-IP (Grauzone, siehe [Asset-Sourcing & IP](./asset-sourcing-and-ip.md)).
Über alle Datenbereiche gilt eine einheitliche Grenze, die bisher in ~6 `docs/`-Dateien
nahezu wortgleich wiederholt wurde und hier zentral steht:

**Reproduziert (faktisch / als Referenz-Werkzeug):**
- Faktische/strukturelle **Metadaten**: Namen, Anzahl/Zählwerte, Erweiterung, Akt,
  Deck-Position, welche Gelände-/Reise-Symbole eine Karte trägt, Verzweigungen.
- **Kartenbilder** (deutsche Original-Scans, lokal optimiert) — Grauzone,
  nicht-kommerziell, mit FFG-Copyright-Hinweis.
- **Funktionale Kartentexte** der Referenzseiten (Monster-/Item-/Overlord-/
  Klassen-/Zustands-Regeltexte) 1:1, zweisprachig — der eigentliche Nachschlage-Zweck.

**NICHT reproduziert (kreative FFG-Prosa, die kein Spielwert-Nachschlag ist):**
- **Reise-/Stadt-Ereignistext** (zunächst nur Metadaten; Ereignistext später bewusst
  ergänzt nur, wo als Referenz sinnvoll — siehe die jeweilige Datei).
- **Quest-/Szenario-/Kampagnenbuch-Inhalte** (Ziele, Aufbau, Erzähltext).
- **Abgetippter Regelheft-Text** — Regeln/Referenz nur als **eigene**,
  zusammenfassende Kurzbeschreibungen (z. B. `/regeln`), mit Disclaimer.
- **CRRG (Community-Regelreferenz):** additiv als optionale Variante, **immer mit
  Quellenangabe**, ersetzt nie den Original-Kartentext.

# Wo die Grenze angewandt wird

Diese Dateien setzen das Prinzip um und verweisen hierher statt es zu wiederholen:
`docs/game-data/travel-cards.md`, `campaigns.md`, `campaign-scenarios.md`,
`rules-reference.md`, `crrg-errata.md`, `de-karten/rumors.md`.

# Citations

[1] [docs/research/digital-assets.md](../../docs/research/digital-assets.md) §5/§6 — FFG-IP-Policy + Optionen (autoritativ).
[2] [Asset-Sourcing & IP](./asset-sourcing-and-ip.md) — gewählter Weg.
[3] [CLAUDE.md](../../CLAUDE.md) — „Interne Projektstrategie" / Release-Notes-Regel (nichts IP-Kritisches öffentlich).
