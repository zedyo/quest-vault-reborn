# Aktualisierungsprotokoll

Chronologisches Protokoll der Wiki-Entwicklung — unveränderliche Historie,
**neueste Einträge oben** (OKF §7). Datumsüberschriften im ISO-8601-Format
`## YYYY-MM-DD`; jeder Eintrag beginnt mit einem fettgedruckten Leitwort
(**Initialization**, **Ingest**, **Update**, **Query**, **Lint**,
**Correction**, **Deprecation**). Eine **Correction** nennt immer
*Quelle/Feld · von → zu · Beleg* und ist so der dauerhafte Prüfpfad für
Korrekturen. Die jüngsten Tage stehen oben und bleiben unix-parsebar,
z. B. `grep "^## " wiki/log.md | head`.

## 2026-07-17

* **Update**: `schema.md` um Abschnitt „Quellen-Verfall & tote Links" ergänzt (Vorbeugen: Zitate an Commit/Tag pinnen, Assets lokalisieren, kritische Quellen nach `references/` spiegeln; Lint-Behandlungstabelle) + Lint-Liste und Konformitäts-Checkliste erweitert. Quelle [any2cards/d2e](sources/any2cards-d2e.md) auf Commit `83ff615` (Zugriff 2026-07-17) gepinnt statt `master`.
* **Ingest**: Pilot — erste Konzept-/Quellen-/Entitäts-Seiten aus den „Bekannte Probleme"-Abschnitten der CLAUDE.md abgeleitet (**verweisend, nicht kopierend**): [Connector-Rendering-Modell](concepts/connector-rendering.md), [Kartenbild-Validierung](concepts/card-image-validation.md), [Vorfall fabrizierte Spieldaten](concepts/fabricated-data-incident.md); Quelle [any2cards/d2e](sources/any2cards-d2e.md); Entität [MapGrid](entities/map-grid.md). Kataloge `concepts/`, `sources/`, `entities/` aktualisiert. CLAUDE.md und `docs/**` bleiben unverändert und autoritativ.
* **Initialization**: Wiki-Grundgerüst nach Karpathys LLM-Wiki-Konzept und dem Open Knowledge Format (OKF v0.1) angelegt — Bundle-Struktur unter `wiki/`, [Schema & Betriebsanleitung](schema.md), Wurzel-[Index](index.md) sowie leere Kataloge für [entities/](entities/), [concepts/](concepts/), [sources/](sources/) und [sessions/](sessions/). Reine Struktur, noch keine Inhaltsseiten.
