#!/usr/bin/env python3
"""Inhaltsbasiertes Zuschneiden von Descent-2e-Heldenscans.

Eine Scan-Seite enthaelt ZWEI Heldenkarten auf hellem Scanner-Hintergrund.
Dieses Skript erkennt die Karten anhand des Kontrasts zum Hintergrund, trennt
die Seite in die beiden Einzelkarten und schneidet jede eng an ihren Raendern
zu. Robust gegen leicht schwankende Positionierung (keine festen Koordinaten).

Verwendung:
    # Einzelne Seite
    python3 scripts/crop_hero_scans.py "seite.jpg" -o out/

    # Ganzer Ordner (alle Bilder, rekursiv)
    python3 scripts/crop_hero_scans.py "Helden/Krieger" -o out/Krieger

Optionen:
    --threshold N   Hellgrenze fuer "Hintergrund" (Graustufe, Default 235).
                    Pixel heller als N gelten als Scanner-Weiss.
    --margin N      Zusaetzlicher Rand in px um jede Karte (Default 8).
    --axis a        Trennachse: auto (Default) | h (horizontal, Karten
                    uebereinander) | v (vertikal, Karten nebeneinander).
    --min-gap N     Minimale Breite der Trennluecke in px (Default 12).
    --line-frac F   Anteil Inhalts-Pixel, ab dem eine Zeile/Spalte als
                    "Inhalt" zaehlt (Default 0.02).

Ausgabe je Seite:  <stem>__a.png (oben/links), <stem>__b.png (unten/rechts)
plus ein kurzer Report (Groessen, Achse, Split-Position) zur Sichtpruefung.

Hinweis: Das Skript ist ein robuster Startpunkt. Bei maessigem Ergebnis die
Parameter an den echten Scans feintunen (zuerst an EINER Probeseite).
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".tif", ".tiff", ".bmp", ".webp"}


def content_mask(img: Image.Image, threshold: int) -> np.ndarray:
    """True, wo Inhalt ist (dunkler als der helle Hintergrund)."""
    gray = np.asarray(img.convert("L"), dtype=np.uint8)
    return gray < threshold


def longest_low_run(frac: np.ndarray, lo: int, hi: int, gap_thresh: float):
    """Laengster zusammenhaengender Lauf mit frac < gap_thresh in [lo, hi).

    Gibt (start, end, length) zurueck; (0, 0, 0) wenn keiner existiert.
    """
    best = (0, 0, 0)
    run_start = None
    for i in range(lo, hi):
        if frac[i] < gap_thresh:
            if run_start is None:
                run_start = i
        else:
            if run_start is not None:
                length = i - run_start
                if length > best[2]:
                    best = (run_start, i, length)
                run_start = None
    if run_start is not None:
        length = hi - run_start
        if length > best[2]:
            best = (run_start, hi, length)
    return best


def find_split(mask: np.ndarray, axis: str, min_gap: int, gap_thresh: float):
    """Bestimmt Trennachse + Split-Position ueber die groesste zentrale Luecke.

    axis: 'auto' | 'h' | 'v'. 'h' = Split entlang Zeilen (Karten uebereinander),
    'v' = Split entlang Spalten (Karten nebeneinander).
    Rueckgabe: (chosen_axis, split_index) oder (chosen_axis, None) bei Fallback.
    """
    h, w = mask.shape
    row_frac = mask.mean(axis=1)  # je Zeile Anteil Inhalt
    col_frac = mask.mean(axis=0)  # je Spalte Anteil Inhalt

    # Zentrales Drittel-Fenster, in dem die Trennluecke liegen sollte.
    def central(n):
        return int(n * 0.30), int(n * 0.70)

    candidates = []
    if axis in ("auto", "h"):
        r0, r1 = central(h)
        s, e, length = longest_low_run(row_frac, r0, r1, gap_thresh)
        candidates.append(("h", length, (s + e) // 2 if length else None))
    if axis in ("auto", "v"):
        c0, c1 = central(w)
        s, e, length = longest_low_run(col_frac, c0, c1, gap_thresh)
        candidates.append(("v", length, (s + e) // 2 if length else None))

    # Beste Kandidatin = laengste gefundene Luecke.
    candidates.sort(key=lambda c: c[1], reverse=True)
    chosen_axis, length, split = candidates[0]

    if split is None or length < min_gap:
        # Fallback: nach Seitenverhaeltnis in der Mitte teilen.
        if axis == "auto":
            chosen_axis = "h" if h >= w else "v"
        else:
            chosen_axis = axis
        split = (h // 2) if chosen_axis == "h" else (w // 2)
        return chosen_axis, split, True  # fallback=True
    return chosen_axis, split, False


def tight_bbox(mask: np.ndarray, line_frac: float):
    """Enges Bounding-Box ueber Zeilen/Spalten mit genug Inhalt (entrauscht)."""
    row_ok = mask.mean(axis=1) > line_frac
    col_ok = mask.mean(axis=0) > line_frac
    if not row_ok.any() or not col_ok.any():
        # Nichts gefunden -> komplette Flaeche zurueckgeben.
        return 0, mask.shape[0], 0, mask.shape[1]
    rows = np.where(row_ok)[0]
    cols = np.where(col_ok)[0]
    return rows[0], rows[-1] + 1, cols[0], cols[-1] + 1


def crop_with_margin(img: Image.Image, box, margin: int) -> Image.Image:
    r0, r1, c0, c1 = box
    w, h = img.size
    left = max(0, c0 - margin)
    top = max(0, r0 - margin)
    right = min(w, c1 + margin)
    bottom = min(h, r1 + margin)
    return img.crop((left, top, right, bottom))


def process_page(path: Path, out_dir: Path, args) -> list[Path]:
    img = Image.open(path)
    img = img.convert("RGB")
    mask = content_mask(img, args.threshold)
    h, w = mask.shape

    chosen_axis, split, fallback = find_split(
        mask, args.axis, args.min_gap, gap_thresh=args.line_frac
    )

    if chosen_axis == "h":
        halves = [
            (img.crop((0, 0, w, split)), mask[:split, :], "a"),
            (img.crop((0, split, w, h)), mask[split:, :], "b"),
        ]
    else:
        halves = [
            (img.crop((0, 0, split, h)), mask[:, :split], "a"),
            (img.crop((split, 0, w, h)), mask[:, split:], "b"),
        ]

    out_dir.mkdir(parents=True, exist_ok=True)
    written = []
    for half_img, half_mask, label in halves:
        box = tight_bbox(half_mask, args.line_frac)
        card = crop_with_margin(half_img, box, args.margin)
        out_path = out_dir / f"{path.stem}__{label}.png"
        card.save(out_path)
        written.append(out_path)
        print(
            f"  -> {out_path.name}  {card.size[0]}x{card.size[1]} px"
        )

    flag = " (FALLBACK: Mittenteilung – bitte pruefen)" if fallback else ""
    print(
        f"{path.name}: {w}x{h} -> Achse '{chosen_axis}', Split @ {split}{flag}"
    )
    return written


def iter_images(target: Path):
    if target.is_file():
        if target.suffix.lower() in IMAGE_EXTS:
            yield target
        return
    for p in sorted(target.rglob("*")):
        if p.is_file() and p.suffix.lower() in IMAGE_EXTS:
            yield p


def main(argv=None):
    ap = argparse.ArgumentParser(description="Heldenscans inhaltsbasiert teilen.")
    ap.add_argument("input", help="Bilddatei ODER Ordner mit Scans")
    ap.add_argument("-o", "--out", required=True, help="Ausgabe-Ordner")
    ap.add_argument("--threshold", type=int, default=235,
                    help="Hellgrenze Hintergrund (Graustufe 0-255), Default 235")
    ap.add_argument("--margin", type=int, default=8,
                    help="Rand in px um jede Karte, Default 8")
    ap.add_argument("--axis", choices=["auto", "h", "v"], default="auto",
                    help="Trennachse, Default auto")
    ap.add_argument("--min-gap", type=int, default=12,
                    help="Min. Breite der Trennluecke in px, Default 12")
    ap.add_argument("--line-frac", type=float, default=0.02,
                    help="Inhalts-Anteil-Schwelle je Zeile/Spalte, Default 0.02")
    args = ap.parse_args(argv)

    target = Path(args.input).expanduser()
    out_dir = Path(args.out).expanduser()
    if not target.exists():
        print(f"FEHLER: Eingabe nicht gefunden: {target}", file=sys.stderr)
        return 2

    images = list(iter_images(target))
    if not images:
        print(f"FEHLER: Keine Bilder in {target}", file=sys.stderr)
        return 2

    print(f"{len(images)} Scan-Seite(n) gefunden. Ausgabe -> {out_dir}\n")
    total = 0
    for img_path in images:
        try:
            written = process_page(img_path, out_dir, args)
            total += len(written)
        except Exception as exc:  # robust weitermachen
            print(f"  !! Fehler bei {img_path.name}: {exc}", file=sys.stderr)
    print(f"\nFertig: {total} Einzelkarten geschrieben "
          f"(erwartet ~{2 * len(images)}).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
