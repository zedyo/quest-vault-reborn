---
type: Session Summary
title: Projekt-Audit 2026-06-12 (Architektur/Sicherheit/Daten)
description: Postmortem des Architektur-, Sicherheits- und Daten-Audits; behobene Befunde + Verweis auf den offenen Backlog.
tags: [audit, postmortem, sicherheit, session]
timestamp: 2026-07-17T00:00:00Z
---

# Was passiert ist

Am 2026-06-12 lief ein vollständiges Architektur-, Sicherheits- und Daten-Audit. Es
deckte mehrere ernste Probleme auf, die anschließend behoben wurden — das *Warum*
dahinter ist die eigentliche Erinnerung.

# Behoben (v1.0.1) — mit Begründung

- **8 fabrizierte Helden** entfernt → eigener Postmortem: [fabrizierte Spieldaten](../concepts/fabricated-data-incident.md).
- **Datenintegritäts-Testsuite + CI-Gate vor Deploy** — hätte den Helden-Fehler sofort gefunden.
- **Quest-Import-Validierung** (Whitelist-Sanitizer + Größenlimits) — vorher war ein **persistenter Crash-DoS** über importiertes JSON möglich.
- **zustand persist: `version` + `migrate` + validierendes `merge`** — vorher **Datenverlust-Risiko** bei Schema-Änderungen (daher heute Schutzregel).
- **ErrorBoundary mit Backup-Download** statt weißer Seite.
- **404.html-SPA-Fallback** — Deep-Links auf GitHub Pages funktionierten vorher nicht.
- **PWA-Icons** generiert — waren 404, Installation war defekt.
- **Workflow-Permissions** job-scoped; **SessionStart-Hook** + Subagenten
  (`sicherheits-pruefer`, `daten-pruefer`) eingeführt.

# Noch offen

Die verbliebenen „Mittel/Niedrig"-Punkte (z. B. Store-Aufteilung, Touch-Targets
≥44 px, Actions per Commit-SHA pinnen, CSP-Meta-Tag, Asset-Hotlinking dokumentieren)
stehen im **operativen Backlog** in `docs/architecture/plan.md` → „Audit-Backlog
(Projektprüfung 2026-06-12)".

# Verwandt

* [Vorfall: fabrizierte Spieldaten](../concepts/fabricated-data-incident.md).
* [Datenspeicherung, Assets, Hosting & Routing](../concepts/runtime-and-deployment.md) - Persist-/404-/Asset-Themen.

# Citations

[1] [docs/architecture/plan.md](../../docs/architecture/plan.md) — „Audit-Backlog (Projektprüfung 2026-06-12)".
