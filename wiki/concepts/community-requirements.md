---
type: Concept
title: Community-Anforderungen & Lehren aus dem Original
description: Warum das Projekt existiert — die aus Foren destillierten Anforderungen und die Schwächen des eingestellten Original-Tools als Produktziele.
tags: [produktziele, anforderungen, marktlücke, recherche]
timestamp: 2026-07-17T00:00:00Z
---

# Marktlücke

Das offizielle **Descent Quest Vault** (FFG, Jan 2013 – **21. Jan 2020**) wurde
eingestellt; kein vollständiger moderner Ersatz existiert (der einzige ernsthafte
Nachbau `descent-quest-builder` hat kein Sharing). Daraus die Existenzberechtigung
dieses Projekts. Ausführliche Recherche: `docs/research/**`; Kurzfassung in
[Kontext — Original & Community-Alternativen](../sources/quest-vault-context.md).

# Anforderungen der Community (aus Foren destilliert)

Aus BGG-/FFG-Forum-Diskussionen (`docs/research/rebuild-attempts.md` §6):

1. Vollständige **Erweiterungs-Unterstützung** (bis Lost Legends / Shards of Everdark).
2. **Quest-Editor mit Map Builder** wie das Original, aber modernes Interface.
3. **Community-Bibliothek** mit Such- und Bewertungsfunktion.
4. **PDF-Export** im offiziellen Descent-Design.
5. **Kampagnen-Erstellung** (Quests verknüpfen).
6. **Rumor Cards + Advanced Quest Cards** erstellen.
7. **Keine lokale Installation** (browserbasiert).
8. **Aktive Maintenance** + regelmäßige Updates.

Diese Liste ist die faktische Grundlage der „Kern-Anforderungen" (CLAUDE.md) und der
Akzeptanzkriterien.

# Lehren aus dem Original (das „Warum" der Designziele)

Warum das Original scheiterte (`docs/research/quest-vault-original.md` §2.3/§3):
- **Erweiterungs-Support hinkte** stark hinterher (ab ~2015 keine neuen Tiles/Monster)
  → häufigster Kritikpunkt. **Konsequenz für uns:** vollständige Erweiterungsabdeckung.
- Dauerhaft im **„Open Beta"-Status**, Bedienung „not comfortable". **Konsequenz:**
  echtes, poliertes UI (v1.2/v1.6 Design-System).
- Serverseitige Datenhaltung → mit dem Shutdown weg (nur eine Community-Rettung
  bewahrte 3.747 Quest-PDFs). **Konsequenz:** lokal-first (localStorage), verlustfreier
  Export/Import.

Belegende Community-Einschätzung: *„…the best map interface for creating quest guide
pages… Version updates were trivial—doing all that with other tools would be
prohibitive."*

# Verwandt

* [Kontext — Original Quest Vault & Community-Alternativen](../sources/quest-vault-context.md).
* [Asset-Sourcing & IP](./asset-sourcing-and-ip.md).

# Citations

[1] [docs/research/rebuild-attempts.md](../../docs/research/rebuild-attempts.md) §6/§7.
[2] [docs/research/quest-vault-original.md](../../docs/research/quest-vault-original.md) §2.3/§3/§9.
