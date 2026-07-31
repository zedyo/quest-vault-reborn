#!/usr/bin/env python3
"""
Helden-Porträtausschnitte (Mini-Kreise) aus den deutschen Original-Kartenscans.

Hintergrund
-----------
Dashboard, Session-Tracker und Quest-Editor zeigen Helden als kleine Kreise
(28–40 px). Bisher standen dort nur Initialen bzw. ein blinder Ausschnitt
`object-position: left center` der Landschafts-Karte — bei dieser Größe war
nichts zu erkennen.

Dieses Skript schneidet aus jedem Kartenscan (`public/cards/de/heroes/<id>.webp`,
760 × ~608 px, Figur links) ein QUADRAT um den Kopf des Helden und legt es unter
`public/cards/de/heroes/portraits/<id>.webp` ab.

Kopf-Anteil
-----------
Die Kopf-Bounding-Box (Haar/Helm/Hörner oben bis Kinn unten, Ohr zu Ohr inkl.
Haar) steht in `hero_face_boxes.json` in ORIGINAL-Kartenpixeln. Die Kantenlänge
des Quadrats folgt daraus:

    S = max(kopfBreite, kopfHöhe) / HEAD_FRACTION

Bei HEAD_FRACTION = 0.70 nimmt der Kopf also mindestens 70 % der Bildkante ein.
Das Quadrat wird um den Kopfmittelpunkt gelegt und, falls es über den Bildrand
ragt, VERSCHOBEN (nicht verkleinert) — der Anteil bleibt damit erhalten.

Aufrufe
-------
    python3 scripts/hero_portraits.py locators   # Arbeitsbilder für die Sichtprüfung
    python3 scripts/hero_portraits.py build      # Porträts erzeugen
    python3 scripts/hero_portraits.py sheet      # nummerierte Beispiel-Übersicht
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
CARDS = ROOT / "public" / "cards" / "de" / "heroes"
OUT = CARDS / "portraits"
BOXES = Path(__file__).resolve().parent / "hero_face_boxes.json"

#: Mindestanteil des Kopfes an der Bildkante (User-Vorgabe: min. 70 %).
HEAD_FRACTION = 0.70
#: Kantenlänge der ausgelieferten Porträts. 256 px reicht für 40-px-Kreise
#: bei 3× Gerätepixelverhältnis und bleibt als WebP unter ~20 KB.
OUT_SIZE = 256
WEBP_QUALITY = 88


def hero_ids() -> list[str]:
    """Alle Helden-Ids aus den vorhandenen Kartenscans (Vorderseiten)."""
    return sorted(p.stem for p in CARDS.glob("*.webp") if not p.stem.endswith("-back"))


def load_boxes() -> dict[str, dict]:
    if not BOXES.exists():
        return {}
    return json.loads(BOXES.read_text(encoding="utf-8"))


def square_crop_box(box: dict, img_w: int, img_h: int, fraction: float = HEAD_FRACTION):
    """Quadratischer Ausschnitt um die Kopf-Box, Kopf = `fraction` der Kante."""
    x0, y0, x1, y1 = box["x0"], box["y0"], box["x1"], box["y1"]
    head = max(x1 - x0, y1 - y0)
    side = min(head / fraction, img_w, img_h)
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    left = min(max(cx - side / 2, 0), img_w - side)
    top = min(max(cy - side / 2, 0), img_h - side)
    return (round(left), round(top), round(left + side), round(top + side))


def build(ids: list[str] | None = None, fraction: float = HEAD_FRACTION) -> list[str]:
    boxes = load_boxes()
    OUT.mkdir(parents=True, exist_ok=True)
    done = []
    for hid in ids or hero_ids():
        box = boxes.get(hid)
        if not box:
            continue
        img = Image.open(CARDS / f"{hid}.webp").convert("RGB")
        crop = img.crop(square_crop_box(box, img.width, img.height, fraction))
        crop = crop.resize((OUT_SIZE, OUT_SIZE), Image.LANCZOS)
        crop.save(OUT / f"{hid}.webp", "WEBP", quality=WEBP_QUALITY, method=6)
        done.append(hid)
    return done


# ── Arbeitsbilder (nur Zwischenschritt, nicht im Repo) ───────────────────────

def _grid(img: Image.Image, scale: float, step: int, label_every: int) -> Image.Image:
    """Bild hochskalieren und ein Raster in ORIGINAL-Pixelkoordinaten einzeichnen."""
    big = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    big = big.convert("RGB")
    d = ImageDraw.Draw(big, "RGBA")
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 15)
    except OSError:
        font = ImageFont.load_default()
    for x in range(0, img.width + 1, step):
        major = x % label_every == 0
        d.line([(x * scale, 0), (x * scale, big.height)],
               fill=(255, 0, 0, 190) if major else (255, 255, 0, 90), width=2 if major else 1)
        if major:
            d.text((x * scale + 3, 3), str(x), fill=(255, 255, 255), font=font,
                   stroke_width=3, stroke_fill=(0, 0, 0))
    for y in range(0, img.height + 1, step):
        major = y % label_every == 0
        d.line([(0, y * scale), (big.width, y * scale)],
               fill=(255, 0, 0, 190) if major else (255, 255, 0, 90), width=2 if major else 1)
        if major:
            d.text((3, y * scale + 3), str(y), fill=(255, 255, 255), font=font,
                   stroke_width=3, stroke_fill=(0, 0, 0))
    return big


def locators(ids: list[str] | None = None, dest: Path | None = None) -> None:
    """Linke Kartenhälfte (Figurenfeld) mit Koordinatenraster, 3×, zur Kopfsuche."""
    dest = dest or Path("/tmp/hero-locators")
    dest.mkdir(parents=True, exist_ok=True)
    for hid in ids or hero_ids():
        img = Image.open(CARDS / f"{hid}.webp").convert("RGB")
        panel = img.crop((0, 0, round(img.width * 0.42), img.height))
        _grid(panel, 3.0, 20, 100).save(dest / f"{hid}.png")


def _label(draw, xy, text, font, big=False):
    draw.text(xy, text, fill=(255, 255, 255), font=font, stroke_width=4, stroke_fill=(0, 0, 0))


def preview(hid: str, box: dict, fraction: float = HEAD_FRACTION,
            dest: Path | None = None) -> Path:
    """
    Prüfbild für eine Kopf-Box: links das Figurenfeld mit eingezeichneter
    Kopf-Box (grün) und Ausschnitt-Quadrat (rot), rechts das Ergebnis groß
    sowie in den echten UI-Kreisgrößen.
    """
    dest = dest or Path("/tmp/hero-checks")
    dest.mkdir(parents=True, exist_ok=True)
    img = Image.open(CARDS / f"{hid}.webp").convert("RGB")
    cb = square_crop_box(box, img.width, img.height, fraction)

    panel_w = round(img.width * 0.42)
    ctx = img.crop((0, 0, panel_w, img.height))
    s = 1.6
    ctx = ctx.resize((round(panel_w * s), round(img.height * s)), Image.LANCZOS)
    d = ImageDraw.Draw(ctx)
    d.rectangle([cb[0] * s, cb[1] * s, cb[2] * s, cb[3] * s], outline=(255, 40, 40), width=4)
    d.rectangle([box["x0"] * s, box["y0"] * s, box["x1"] * s, box["y1"] * s],
                outline=(40, 255, 80), width=3)

    crop = img.crop(cb)
    big = crop.resize((420, 420), Image.LANCZOS)

    out = Image.new("RGB", (ctx.width + 460, max(ctx.height, 640)), (20, 20, 22))
    out.paste(ctx, (0, 0))
    out.paste(big, (ctx.width + 20, 40))
    x = ctx.width + 20
    for size in (92, 56, 34):
        mini = crop.resize((size, size), Image.LANCZOS)
        mask = Image.new("L", (size, size), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
        out.paste(mini, (x, 500 + (92 - size) // 2), mask)
        x += size + 14
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 20)
    except OSError:
        font = ImageFont.load_default()
    dd = ImageDraw.Draw(out)
    head = max(box["x1"] - box["x0"], box["y1"] - box["y0"])
    _label(dd, (ctx.width + 20, 8),
           f"{hid} · Kopf {head}px / Kante {cb[2] - cb[0]}px = "
           f"{round(100 * head / max(1, cb[2] - cb[0]))} %", font)
    _label(dd, (ctx.width + 20, 610), "Kreise wie im UI: 92 / 56 / 34 px", font)
    path = dest / f"{hid}.png"
    out.save(path)
    return path


def sheet(ids: list[str], out_path: Path, fraction: float = HEAD_FRACTION,
          cols: int = 5, cell: int = 300) -> None:
    """Nummerierte Beispiel-Übersicht: Kreis + Quadrat + Miniatur je Held."""
    boxes = load_boxes()
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 22)
        small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 17)
    except OSError:
        font = small = ImageFont.load_default()

    rows = (len(ids) + cols - 1) // cols
    ch = cell + 96
    out = Image.new("RGB", (cols * cell, rows * ch), (24, 22, 20))
    d = ImageDraw.Draw(out)
    for k, hid in enumerate(ids):
        img = Image.open(CARDS / f"{hid}.webp").convert("RGB")
        crop = img.crop(square_crop_box(boxes[hid], img.width, img.height, fraction))
        sq = crop.resize((cell - 20, cell - 20), Image.LANCZOS)
        ox, oy = (k % cols) * cell, (k // cols) * ch
        out.paste(sq, (ox + 10, oy + 40))
        # Kreis-Vorschauen in den echten UI-Größen (92 / 56 / 34 px)
        x = ox + 12
        for size in (92, 56, 34):
            mini = crop.resize((size, size), Image.LANCZOS)
            mask = Image.new("L", (size, size), 0)
            ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
            out.paste(mini, (x, oy + cell + 34 + (92 - size) // 2), mask)
            x += size + 10
        _label(d, (ox + 12, oy + 8), f"{k + 1:02d}  {hid}", font)
        _label(d, (ox + 12, oy + cell + 12), f"Kopf ≈ {round(fraction * 100)} % der Kante", small)
    out.save(out_path)


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "build"
    rest = sys.argv[2:]
    if cmd == "locators":
        locators(rest or None)
    elif cmd == "preview":
        hid, x0, y0, x1, y1 = rest[0], *map(int, rest[1:5])
        frac = float(rest[5]) if len(rest) > 5 else HEAD_FRACTION
        print(preview(hid, {"x0": x0, "y0": y0, "x1": x1, "y1": y1}, frac))
    elif cmd == "build":
        print(f"{len(build(rest or None))} Porträts erzeugt → {OUT}")
    elif cmd == "sheet":
        sheet(rest[1:], Path(rest[0]))
    else:
        raise SystemExit(__doc__)
