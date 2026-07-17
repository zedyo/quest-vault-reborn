---
type: Subsystem
title: Session-Tracker (Kampagnen-Spielstand)
description: Eigener Store + abgeleiteter Live-Stand für den Kampagnen-Spielstand, getrennt vom Spiel-Store.
resource: src/store/useSessionStore.ts
tags: [session-tracker, zustand, persistenz, architektur]
timestamp: 2026-07-17T00:00:00Z
---

# Architektur

- **Eigener zustand-Store** `src/store/useSessionStore.ts` mit **eigenem**
  localStorage-Key `qvr-sessions` (dritter Eigen-Key neben `qvr-theme`/
  `qvr-builder-draft`), bewusst **getrennt** von `useGameStore` (Key
  `quest-vault-reborn`) — so bleibt dessen Persist-Schema (Quests + Sammlung)
  unangetastet. Eigene `PERSIST_VERSION`/`migrate`/`merge` + `sanitizeSessionList`.
- **Live-Stand abgeleitet, nicht gespeichert:** XP/Gold/besessene Karten & Gegenstände
  werden NICHT als Saldo persistiert, sondern per reiner Funktion
  `deriveLiveState(session)` (`src/store/sessionDerive.ts`) aus Setup + Szenario-Protokoll
  **gefaltet**. Add/Update/Remove eines Szenarios sind einfache Array-Ops → Doppelzählen
  ist strukturell unmöglich (Dangling-Sell-Guard: Verkauf ohne existierende Instanz zählt
  nicht).
- **Typen** in `src/types/session.ts`; Item-/Skill-/Karten-Besitz sind reine
  ID-Referenzen in die statischen Daten (Auflösung + sanfter Fallback in
  `src/components/session/sessionHelpers.ts`).
- **Export/Import** über `src/utils/sessionImport.ts` (Whitelist-Rebuild wie
  `questImport.ts`; beim Import nur die Top-Level-ID neu, alle inneren Referenz-IDs
  bleiben → verlustfreier Round-Trip).
- **UI:** `SessionsPage` (Liste ↔ Detail, Tabs Setup/Helden/Overlord/Szenarien) +
  `src/components/session/*`.
- **Detail:** Overlord-Karten-IDs werden als `deckId:cardId` geführt (Karten-IDs sind
  nur je Deck eindeutig).

# Autoritative Quelle

Implementierung in `src/store/**` + `src/types/session.ts` + `src/components/session/**`.
Diese Seite fasst die Architektur-Entscheidungen zusammen.

# Verwandt

* [Datenspeicherung, Assets, Hosting & Routing](../concepts/runtime-and-deployment.md) - localStorage/zustand-`persist` + Persist-Schutzregel (der Session-Store hält bewusst einen eigenen Key).

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Session-Tracker (1.4.0)" + Statustabelle v1.4.0–v1.5.3.
[2] [src/store/useSessionStore.ts](../../src/store/useSessionStore.ts), [src/store/sessionDerive.ts](../../src/store/sessionDerive.ts), [src/utils/sessionImport.ts](../../src/utils/sessionImport.ts).
