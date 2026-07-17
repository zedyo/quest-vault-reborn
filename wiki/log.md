# Aktualisierungsprotokoll

Chronologisches Protokoll der Wiki-Entwicklung — unveränderliche Historie,
**neueste Einträge oben** (OKF §7). Datumsüberschriften im ISO-8601-Format
`## YYYY-MM-DD`; jeder Eintrag beginnt mit einem fettgedruckten Leitwort
(**Initialization**, **Ingest**, **Update**, **Query**, **Lint**,
**Deprecation**). Die jüngsten Tage stehen oben und bleiben unix-parsebar,
z. B. `grep "^## " wiki/log.md | head`.

## 2026-07-17

* **Ingest**: Pilot — erste Konzept-/Quellen-/Entitäts-Seiten aus den „Bekannte Probleme"-Abschnitten der CLAUDE.md abgeleitet (**verweisend, nicht kopierend**): [Connector-Rendering-Modell](concepts/connector-rendering.md), [Kartenbild-Validierung](concepts/card-image-validation.md), [Vorfall fabrizierte Spieldaten](concepts/fabricated-data-incident.md); Quelle [any2cards/d2e](sources/any2cards-d2e.md); Entität [MapGrid](entities/map-grid.md). Kataloge `concepts/`, `sources/`, `entities/` aktualisiert. CLAUDE.md und `docs/**` bleiben unverändert und autoritativ.
* **Initialization**: Wiki-Grundgerüst nach Karpathys LLM-Wiki-Konzept und dem Open Knowledge Format (OKF v0.1) angelegt — Bundle-Struktur unter `wiki/`, [Schema & Betriebsanleitung](schema.md), Wurzel-[Index](index.md) sowie leere Kataloge für [entities/](entities/), [concepts/](concepts/), [sources/](sources/) und [sessions/](sessions/). Reine Struktur, noch keine Inhaltsseiten.
