#!/usr/bin/env python3
"""Erzeugt src/data/heroOfficialDe.ts aus den eingescannten Karten-Markdowns.

Liest scans/helden/<Klasse>/<Klasse>.md, extrahiert je Held den offiziellen
deutschen **Namen**, die **Heldenfähigkeit** und die **Heldentat** (wortgetreu von
den physischen deutschen Karten) und schreibt sie als Override-Schicht.

Die Override-Schicht wird in heroes.ts ueber die (erhalten bleibenden) alten
Community-Werte gelegt – so zeigt die App den offiziellen Kartenstand, ohne dass
die alten Uebersetzungen verloren gehen.

`[…]`-Symbolplatzhalter aus den Markdowns werden in die Woerter umgewandelt, die
renderGameText kennt: [Herz]→Herz (❤), [Schub]→Schub (⚡), [Aktion]→Aktion (↻).
[Ausdauer]/[Schild]/Attribute werden zu Klartext (kein Icon, aber korrektes Wort).

Aufruf:  python3 scripts/build_hero_official_de.py
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_hero_de_images import MAPPING  # (Klasse, Scan-Stem, heroes.ts-id)

STEM_TO_ID = {stem: hid for _, stem, hid in MAPPING}
FILES = ["Heiler/Heiler.md", "Krieger/Krieger.md",
         "Kundschafter/Kundschafter.md", "Magier/Magier.md"]
TS_FILE = ROOT / "src" / "data" / "heroOfficialDe.ts"


def strip_placeholders(text: str) -> str:
    """`[Herz]`→`Herz` usw. – Klammern entfernen, Inhalt behalten."""
    return re.sub(r"\[([^\]]+)\]", r"\1", text).strip()


def parse() -> dict[str, dict[str, str]]:
    out: dict[str, dict[str, str]] = {}
    for rel in FILES:
        text = (ROOT / "scans" / "helden" / rel).read_text(encoding="utf-8")
        blocks = re.split(r"(?m)^## ", text)[1:]  # [0] = Datei-Kopf
        for b in blocks:
            name = b.splitlines()[0].strip()
            img = re.search(r"!\[[^\]]*\]\(\./([^)]+)\.png\)", b)
            if not img:
                continue
            stem = img.group(1)
            hid = STEM_TO_ID.get(stem)
            if not hid:
                raise SystemExit(f"Unbekannter Scan-Stem ohne heroes.ts-id: {stem}")
            am = re.search(r"(?m)^\*\*Heldenfähigkeit:\*\*\s*(.+?)\s*$", b)
            fm = re.search(r"(?m)^\*\*Heldentat:\*\*\s*(.+?)\s*$", b)
            entry: dict[str, str] = {"name": name}
            if am and am.group(1).strip():
                entry["heroAbility"] = strip_placeholders(am.group(1))
            if fm and fm.group(1).strip():
                entry["heroicFeat"] = strip_placeholders(fm.group(1))
            out[hid] = entry
    return out


def write_ts(data: dict[str, dict[str, str]]) -> None:
    lines = [
        "// AUTO-GENERIERT von scripts/build_hero_official_de.py – nicht von Hand editieren.",
        "//",
        "// Offizieller deutscher Kartenstand (Name + Heldenfähigkeit + Heldentat),",
        "// wortgetreu von den eingescannten physischen deutschen Karten. Wird in",
        "// heroes.ts als Override ueber die alten Community-Werte gelegt (diese bleiben",
        "// als Basis-Literale erhalten). 54 von 60 Helden gescannt.",
        "",
        "export interface HeroOfficialDe {",
        "  name?: string",
        "  heroAbility?: string",
        "  heroicFeat?: string",
        "}",
        "",
        "export const HERO_OFFICIAL_DE: Record<string, HeroOfficialDe> = {",
    ]
    # Reihenfolge wie im MAPPING (Klasse fuer Klasse) fuer stabile Diffs.
    for _, stem, hid in MAPPING:
        e = data[hid]
        parts = [f"name: {json.dumps(e['name'], ensure_ascii=False)}"]
        if "heroAbility" in e:
            parts.append(f"heroAbility: {json.dumps(e['heroAbility'], ensure_ascii=False)}")
        if "heroicFeat" in e:
            parts.append(f"heroicFeat: {json.dumps(e['heroicFeat'], ensure_ascii=False)}")
        lines.append(f"  '{hid}': {{ {', '.join(parts)} }},")
    lines += ["}", ""]
    TS_FILE.write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    data = parse()
    assert len(data) == 54, f"Erwartet 54 Helden, gefunden {len(data)}"
    write_ts(data)
    miss_ab = [h for h, e in data.items() if "heroAbility" not in e]
    miss_ft = [h for h, e in data.items() if "heroicFeat" not in e]
    print(f"{len(data)} Helden -> {TS_FILE.relative_to(ROOT)}")
    print(f"  ohne Heldenfähigkeit: {miss_ab or 'keine'}")
    print(f"  ohne Heldentat:       {miss_ft or 'keine'}")
