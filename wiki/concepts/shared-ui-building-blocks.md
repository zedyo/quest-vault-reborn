---
type: Pattern
title: Geteilte UI-Bausteine
description: Zentral gebündelte, wiederverwendbare UI-Muster (StatIcons, ModalOverlay, Filters, ConfirmDialog, assetUrls).
tags: [ui, refactoring, wiederverwendbar, komponenten]
timestamp: 2026-07-17T00:00:00Z
---

# Zweck

Vor neuen Inhaltsseiten (Overlord/Leutnants/Kampagnen) wurden wiederkehrende Muster
zentralisiert, damit künftige Seiten sie **wiederverwenden statt kopieren** (1.1.13).

# Bausteine

- **`src/components/StatIcons.tsx`** — `HealthIcon`/`StaminaIcon`/`AttackIcon` (zuvor
  in HeroesPage UND MonstersPage dupliziert; ergänzen die Bewegungs-/Verteidigungs-
  Badges aus [GameSymbols](../entities/game-symbols.md)).
- **`src/components/ModalOverlay.tsx`** — geteilter Lightbox-/Dialog-Backdrop
  (Escape-Schließen + Klick-außerhalb + `stopPropagation` am Panel + Fokus ins Panel +
  `role="dialog"`). Genutzt von Helden-/Monster-/Item-Lightbox und ReleaseNotesModal.
  Folge: Helden- und Monster-Vorschau schließen jetzt auch per Esc.
- **`src/components/Filters.tsx`** — `SearchInput`, `OwnedToggle` („Nur meine
  Sammlung"), `SegmentedControl<T>` (generische Buttongruppe), `LangToggle` (DE/EN). In
  Helden/Monster/Items/Klassen verbaut (ItemsPage-Akt-Filter + Tabs bewusst lokal —
  abweichende Aktiv-Optik).
- **`src/data/assetUrls.ts`** — zentrales Asset-URL-Modul: `ANY2CARDS_IMAGES`-Basis,
  `EXPANSION_PATH`, `EXPANSION_PREFIX`, `monsterImageUrl()`, `tileImageUrl()`. Löst die
  zuvor 3 parallelen Strategien ab (gespeicherte Voll-URLs in `heroes.ts`/`items.ts`
  bleiben, da pro Karte validiert). `mapTiles.ts` re-exportiert `tileImageUrl` für
  API-Stabilität.

# Bestätigung vor dem Löschen (1.1.14)

`src/components/ConfirmDialog.tsx` baut auf `ModalOverlay` auf — der destruktive Knopf
ist bewusst **nicht** autofokussiert, damit Enter nicht versehentlich löscht. In
QuestEditorPage für alle drei Lösch-Pfade (Quest aus Liste, Quest im Editor, Begegnung)
über gemeinsamen `pendingDelete`-State. Für künftige destruktive Aktionen wiederverwenden.

# Autoritative Quelle

Implementierung in den genannten `src/`-Dateien (Quelle der Wahrheit); diese Seite hält
Zweck + Wiederverwendungs-Absicht fest.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Geteilte UI-Bausteine (1.1.13)" + „Bestätigung vor dem Löschen (1.1.14)".
[2] `src/components/StatIcons.tsx`, `src/components/ModalOverlay.tsx`, `src/components/Filters.tsx`, `src/components/ConfirmDialog.tsx`, [src/data/assetUrls.ts](../../src/data/assetUrls.ts).
