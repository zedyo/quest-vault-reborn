#!/usr/bin/env python3
"""Erzeugt src/data/rumors.ts + web-optimierte Bilder aus den Gerücht-Scans.

Quelle:
- scans/geruechte/<exp-id>/<xws>.png          (eingescannte deutsche Karten)
- scans/geruechte/Geruechtkarten.md           (deutscher + englischer Name je Karte)
- ANY2 (unten, aus any2cards data/rumors.js)  (Akt + Reise-Gelände, faktisch)

Ergebnis:
- public/geruechte/de/<xws>.webp              (≤640px, WebP mit Transparenz)
- src/data/rumors.ts                          (RUMORS: Rumor[])

Bewusst NICHT enthalten: der Kartentext (FFG-IP – bleibt nur in der Scan-Doku).
Aufruf:  python3 scripts/build_rumors.py
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SCAN_DIR = ROOT / "scans" / "geruechte"
MD = SCAN_DIR / "Geruechtkarten.md"
OUT_IMG = ROOT / "public" / "geruechte" / "de"
TS_FILE = ROOT / "src" / "data" / "rumors.ts"
TARGET_WIDTH = 640
WEBP_QUALITY = 80

# Faktische Felder aus any2cards data/rumors.js (Akt + Reise-Gelände-Icons).
# travel == [None] bedeutet: keine Gelände-Daten -> leeres Array.
ANY2 = {
    'adangerouspath': {"act": 1, "travel": [None]},
    'atrocities': {"act": 1, "travel": [None]},
    'burningharvest': {"act": 1, "travel": ['Mountain', 'Plain', 'Mountain']},
    'crusadeoftheforgotten': {"act": 1, "travel": ['Road', 'Water', 'Plain']},
    'cursedtreasures': {"act": None, "travel": [None]},
    'famineandstrife': {"act": 1, "travel": [None]},
    'findersandkeepers': {"act": 1, "travel": ['Road', 'Plain', 'Forest']},
    'foodforworms': {"act": 1, "travel": ['Forest', 'Water', 'Water']},
    'ghosttown': {"act": 1, "travel": ['Forest', 'Road', 'Road']},
    'golddigger': {"act": 1, "travel": ['Road', 'Road', 'Road']},
    'guardiansofdeephall': {"act": 1, "travel": ['Road', 'Plain', 'Mountain', 'Road']},
    'myhousemyrules': {"act": 1, "travel": ['Forest', 'Forest', 'Plain']},
    'oathoftheoutcast': {"act": 1, "travel": ['Forest', 'Forest', 'Mountain']},
    'rudeawakening': {"act": 1, "travel": ['Plain', 'Plain', 'Forest', 'Road']},
    'scarcegoods': {"act": 1, "travel": [None]},
    'shardsofeverdark': {"act": 1, "travel": ['Road', 'Plain', 'Mountain']},
    'sindaessecret': {"act": 1, "travel": ['Road', 'Forest', 'Plain']},
    'spreadyourwings': {"act": 1, "travel": ['Mountain', 'Water', 'Plain']},
    'stewardsofthesecret': {"act": 1, "travel": ['Forest', 'Water', 'Mountain']},
    'threeheadsonemind': {"act": 1, "travel": ['Water', 'Road', 'Mountain']},
    'trucebreaker': {"act": 1, "travel": ['Plain', 'Forest', 'Mountain']},
    'unknowntreasures': {"act": None, "travel": [None]},
    'valyndrasfury': {"act": 1, "travel": [None]},
    'whatsyoursismine': {"act": 1, "travel": ['Plain', 'Forest', 'Mountain', 'Mountain']},
}


def parse_markdown() -> dict[str, dict]:
    """xws -> {nameDe, nameEn, expansionId} aus der Scan-Doku."""
    text = MD.read_text(encoding="utf-8")
    out: dict[str, dict] = {}
    for block in re.split(r"(?m)^### ", text)[1:]:
        head = block.splitlines()[0].strip()
        m = re.match(r"(.+) \(([^)]+)\)$", head)
        img = re.search(r"!\[[^\]]*\]\(\./([^/]+)/([a-z]+)\.png\)", block)
        if not m or not img:
            continue
        name_de, name_en = m.group(1).strip(), m.group(2).strip()
        exp_id, xws = img.group(1), img.group(2)
        out[xws] = {"nameDe": name_de, "nameEn": name_en, "expansionId": exp_id}
    return out


def build_images(xws_list: list[str]) -> None:
    OUT_IMG.mkdir(parents=True, exist_ok=True)
    for xws in xws_list:
        # Quelle anhand des Markdown-Exp-Ordners finden
        matches = list(SCAN_DIR.glob(f"*/{xws}.png"))
        if not matches:
            raise FileNotFoundError(f"Scan fehlt für {xws}")
        im = Image.open(matches[0]).convert("RGBA")
        if im.width > TARGET_WIDTH:
            h = round(im.height * TARGET_WIDTH / im.width)
            im = im.resize((TARGET_WIDTH, h), Image.LANCZOS)
        out = OUT_IMG / f"{xws}.webp"
        im.save(out, "WEBP", quality=WEBP_QUALITY, method=6)
        print(f"  {xws:22s} {im.size[0]}x{im.size[1]}  {out.stat().st_size/1024:6.1f} KB")


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def write_ts(cards: list[dict]) -> None:
    lines = [
        "// AUTO-GENERIERT von scripts/build_rumors.py – nicht von Hand editieren.",
        "//",
        "// Gerücht-Karten (Rumor) – faktische Metadaten + deutsches Kartenbild.",
        "// Quelle: eingescannte deutsche Karten (Name DE), any2cards (Name EN, Akt,",
        "// Reise-Gelände). Der Kartentext wird BEWUSST nicht reproduziert (FFG-IP);",
        "// er liegt als Referenz in scans/geruechte/Geruechtkarten.md.",
        "",
        "import type { Rumor } from '../types/game'",
        "",
        "export const RUMORS: Rumor[] = [",
    ]
    for c in cards:
        travel = "[" + ", ".join(ts_str(t) for t in c["travel"]) + "]"
        act = "null" if c["act"] is None else str(c["act"])
        lines.append(
            f"  {{ id: {ts_str(c['id'])}, nameDe: {ts_str(c['nameDe'])}, "
            f"nameEn: {ts_str(c['nameEn'])}, expansionId: {ts_str(c['expansionId'])}, "
            f"act: {act}, travel: {travel}, imageDe: {ts_str(c['imageDe'])} }},"
        )
    lines += ["]", ""]
    TS_FILE.write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    md = parse_markdown()
    assert len(md) == 24, f"Erwartet 24 Karten in der Doku, gefunden {len(md)}"
    cards = []
    for xws in sorted(md):
        info = md[xws]
        a = ANY2.get(xws)
        if a is None:
            raise SystemExit(f"Kein any2cards-Eintrag für {xws}")
        travel = [t for t in a["travel"] if t]  # None/[] herausfiltern
        cards.append({
            "id": xws,
            "nameDe": info["nameDe"],
            "nameEn": info["nameEn"],
            "expansionId": info["expansionId"],
            "act": a["act"],
            "travel": travel,
            "imageDe": f"geruechte/de/{xws}.webp",
        })
    # Sortierung: Erweiterung, dann englischer Name (stabile Diffs)
    cards.sort(key=lambda c: (c["expansionId"], c["nameEn"]))
    print(f"{len(cards)} Gerücht-Karten -> Bilder + {TS_FILE.relative_to(ROOT)}")
    build_images([c["id"] for c in cards])
    write_ts(cards)
    print("Fertig.")
