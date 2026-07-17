# Aktualisierungsprotokoll

Chronologisches Protokoll der Wiki-Entwicklung — unveränderliche Historie,
**neueste Einträge oben** (OKF §7). Datumsüberschriften im ISO-8601-Format
`## YYYY-MM-DD`; jeder Eintrag beginnt mit einem fettgedruckten Leitwort
(**Initialization**, **Ingest**, **Update**, **Query**, **Lint**,
**Deprecation**). Die jüngsten Tage stehen oben und bleiben unix-parsebar,
z. B. `grep "^## " wiki/log.md | head`.

## 2026-07-17

* **Initialization**: Wiki-Grundgerüst nach Karpathys LLM-Wiki-Konzept und dem Open Knowledge Format (OKF v0.1) angelegt — Bundle-Struktur unter `wiki/`, [Schema & Betriebsanleitung](schema.md), Wurzel-[Index](index.md) sowie leere Kataloge für [entities/](entities/), [concepts/](concepts/), [sources/](sources/) und [sessions/](sessions/). Reine Struktur, noch keine Inhaltsseiten.
