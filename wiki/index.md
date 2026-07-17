---
okf_version: "0.1"
---

# Quest Vault Reborn — Projekt-Wiki

Ein kompoundierendes Wissens- und Gedächtnis-Wiki für das Projekt *Quest Vault
Reborn*, angelegt nach Andrej Karpathys „LLM-Wiki"-Konzept und formatiert nach
dem **Open Knowledge Format (OKF v0.1)**. Dieses Verzeichnis (`wiki/`) ist ein in
sich geschlossenes **Knowledge Bundle**: eine Sammlung verlinkter
Markdown-Dokumente, die ein LLM-Agent beim Ingest neuer Quellen fortschreibt und
aktuell hält. Es dient künftig als Grundlage für **Erinnerung und
Kontext-Sicherung** des Projekts.

**Zuerst lesen:** [Wiki-Schema & Betriebsanleitung](schema.md) — erklärt Aufbau,
Frontmatter-Konventionen, Konzept-Typen und die Ingest-/Query-/Lint-Workflows.

> Dieses Wiki ist bewusst als **leeres Gerüst** angelegt. Die Kataloge unten
> füllen sich, sobald die erste Quelle ingestiert wird — der Agent schreibt die
> Seiten, der Mensch kuratiert.

# Schema & Konventionen

* [schema.md](schema.md) - Aufbau, Frontmatter-Felder, Konzept-Typen und Workflows dieses Wikis.

# Bereiche

* [entities/](entities/) - Greifbare Projektbausteine: Module, Subsysteme, Seiten, Datendateien, Assets.
* [concepts/](concepts/) - Abstraktes Wissen: Muster, Verfahren, Entscheidungen, Mechaniken, Fallstricke.
* [sources/](sources/) - Zusammenfassungen ingestierter Quellen (externe Dokumente, Specs, Datendumps, Scans, Gespräche).
* [sessions/](sessions/) - Verdichtete Notizen je Arbeitssitzung für Erinnerung und Kontext-Sicherung.

# Protokoll

* [log.md](log.md) - Chronologisches Änderungsprotokoll (Ingests, Queries, Lint-Läufe).
