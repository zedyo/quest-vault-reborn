---
type: Procedure
title: DE-Kartenbild-Pipeline (Scans → public/cards)
description: Wie die deutschen Original-Kartenbilder aus dem Scans-Release gezogen und rasterbasiert zugeschnitten werden.
tags: [assets, scans, byte-range, raster, verfahren]
timestamp: 2026-07-17T00:00:00Z
---

# Zweck

Erzeugt die klein-optimierten `public/cards/de/**`-Bilder aus den deutschen
Original-Scans. **Roh-Scans werden NIE committet** (siehe `.gitignore`); nur die
webp-Ausgaben (~475–500 px, ≤150 KB) landen im Repo.

# Schritt 1 — Zugriff ohne Volldownload (Byte-Range)

Die 600-MB-`Descent.Scans.zip` (Release `scans-transfer`) wird **nicht** komplett
geladen; einzelne Dateien per HTTP-Range:

1. Letzte ~64 KB ziehen → EOCD (`PK\x05\x06`) parsen → `cd_offset`/`cd_size` (ZIP
   ist **nicht** ZIP64; CD liegt im Tail).
2. Central Directory parsen → je Datei `name`, uncompressed size, local-header-offset.
3. Ab dem local-header-offset den Local-File-Header (`PK\x03\x04`) lesen und die
   Daten-Bytes per Range ziehen.

**Gotcha 1 — Kompression:** Die Karten-/Marker-Dateien sind **deflate (Methode 8)**,
**nicht** `store/0` (nur 5 der 235 Einträge sind unkomprimiert). Nach dem Range-Zug
also **raw-inflate**: `zlib.decompress(raw, -15)`. (Korrektur 2026-07-17 — frühere
Fassung behauptete fälschlich „store/unkomprimiert".)

**Gotcha 2 — Ranges:** Azure/Blob (die signierte Release-URL) liefert **`501` bei
Suffix-Ranges** → immer **explizite** `start-end`-Ranges verwenden.

Ein komplettes, reproduzierbares Pull-Rezept (CD-Parse + Einzeldatei-Inflate) steht in
`docs/game-data/scan-sources.md` → „Operativer Zugriff".

# Schritt 2 — Rasterbasierter Zuschnitt

Kartenblätter (z. B. `Monsterkarten Akt 1.jpg`, `Klassenkarten 1..4.jpg`) sind Raster.
Schneider mit **Autokorrelations-Pitch-Erkennung** + **Empty-Cell-Detection**
(etabliert v1.3.12, auch für Markt-/Relikt-/Gerücht-Karten); jede Karte per Position
über stabile `id→Zelle`-Maps zugeschnitten (`recut_all.py` nutzt die Maps weiter).

# Fallstrick — zu enger Zuschnitt (v1.3.6)

Markt-/Relikt-/Gerücht-Bilder waren mit **0.93–0.965 der Zell-Pitch** zu eng
geschnitten (Rahmen/Titel-Oberkante beschnitten). Die Karten füllen die Zelle aber zu
~99 %. Fix: **Re-Cut aller 233 Bilder auf VOLLE Pitch** (Zelle
`[c·P,(c+1)·P]×[r·R,(r+1)·R]`, kein Inset). Merksatz: bei rasterbasiertem Zuschnitt
volle Zell-Pitch, kein defensives Inset.

# Autoritative Quelle

`docs/game-data/scan-sources.md` — Release-URL, sha256, Byte-Range-Verfahren im
Detail und das **vollständige 235-Datei-Manifest**. Diese Seite hält Technik +
Fallstricke fest; das Manifest wird nicht dupliziert.

# Verwandt

* [Kartenbild-Validierung](./card-image-validation.md) - Werte aus den Bildern prüfen.
* [Kartentext-Transkription](./card-text-transcription.md) - Text von den Karten übernehmen + verifizieren.

# Citations

[1] [docs/game-data/scan-sources.md](../../docs/game-data/scan-sources.md) — Byte-Range-Verfahren + Manifest (autoritativ).
[2] [CLAUDE.md](../../CLAUDE.md) — Statustabelle v1.3.5/v1.3.6 (Re-Cut), v1.3.12 (Raster-Schneider), v1.3.21 (Klassen-Scans).
