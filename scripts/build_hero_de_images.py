#!/usr/bin/env python3
"""Erzeugt web-optimierte deutsche Heldenkarten-Bilder + das TS-Zuordnungsmodul.

Quelle: scans/helden/<Klasse>/<karten-name>.png (volle Auflösung, ~4 MB, RGBA).
Ziel:   public/heroes/de/<held-id>.webp (≈900px breit, WebP mit Transparenz) –
        klein genug fuer die Web-App; die Originale in scans/ bleiben unberuehrt.

Zusaetzlich wird src/data/heroImagesDe.ts generiert (HeldId -> public-Pfad).

Die Zuordnung Scan-Datei -> heroes.ts-id ist hier explizit hinterlegt, weil 16 der
54 Kartennamen von heroes.ts abweichen (siehe scans/helden/ABWEICHUNGEN_heroes_ts.md).
Aufruf:  python3 scripts/build_hero_de_images.py
"""
from __future__ import annotations

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SCAN_DIR = ROOT / "scans" / "helden"
OUT_DIR = ROOT / "public" / "heroes" / "de"
TS_FILE = ROOT / "src" / "data" / "heroImagesDe.ts"

TARGET_WIDTH = 900
WEBP_QUALITY = 80

# (Klassen-Ordner, Scan-Dateiname ohne .png, heroes.ts-id)
# 38 per Namensgleichheit + 16 ueber die Abweichungstabelle.
MAPPING: list[tuple[str, str, str]] = [
    # ── Heiler ───────────────────────────────────────────────────────────────
    ("Heiler", "andira-runenhand",     "andira-runehand"),
    ("Heiler", "ashrian",              "ashrian"),
    ("Heiler", "augur-grisom",         "augur-grisom"),
    ("Heiler", "avric-albright",       "avric-albright"),
    ("Heiler", "bruder-gherinn",       "brother-gherinn"),
    ("Heiler", "geistersprecher-mok",  "elder-mok"),          # Abw.
    ("Heiler", "ispher",               "ispher"),
    ("Heiler", "jonas-der-guetige",    "jonas-the-kind"),
    ("Heiler", "okaluk-und-rakash",    "okaluk-and-rakash"),
    ("Heiler", "rendiel",              "rendiel"),
    ("Heiler", "sahla",                "sahla"),
    ("Heiler", "ulma-grimstone",       "ulma-grimstone"),
    # ── Krieger ──────────────────────────────────────────────────────────────
    ("Krieger", "alys-raine",           "alys-raine"),
    ("Krieger", "corbin",               "corbin"),
    ("Krieger", "einfaust",             "one-fist"),           # Abw.
    ("Krieger", "grisban-der-durstige", "grisban-the-thirsty"),
    ("Krieger", "karnon",               "karnon"),
    ("Krieger", "krutzbeck",            "krutzbeck"),
    ("Krieger", "kundschafter-durik",   "pathfinder-durik"),   # Abw.
    ("Krieger", "lord-hawthorne",       "lord-hawthorne"),
    ("Krieger", "mordrog",              "mordrog"),
    ("Krieger", "nanok-die-klinge",     "nanok-of-the-blade"), # Abw.
    ("Krieger", "nara-der-reisszahn",   "nara-the-fang"),      # Abw.
    ("Krieger", "orkell-der-flinke",    "orkell-the-swift"),
    ("Krieger", "reynhart-der-erhabene","reynhart-the-worthy"),# Abw.
    ("Krieger", "sir-valadir",          "sir-valadir"),
    ("Krieger", "stahlhorn",            "steelhorns"),         # Abw.
    ("Krieger", "syndrael",             "syndrael"),
    ("Krieger", "tahlia",               "tahlia"),
    ("Krieger", "trenloe-der-starke",   "trenloe-the-strong"),
    # ── Kundschafter (archetype: spaeher) ────────────────────────────────────
    ("Kundschafter", "arvel-weltenwanderer", "arvel-worldwalker"),
    ("Kundschafter", "jaine-fairwood",       "jain-fairwood"),     # Abw.
    ("Kundschafter", "ker-der-graue",        "grey-ker"),          # Abw.
    ("Kundschafter", "laurel-vom-blutwald",  "laurel-of-bloodwood"),# Abw.
    ("Kundschafter", "lindel",               "lindel"),
    ("Kundschafter", "logan-lashley",        "logan-lashley"),
    ("Kundschafter", "roganna-der-schemen",  "roganna-the-shade"), # Abw.
    ("Kundschafter", "silhouette",           "silhouette"),
    ("Kundschafter", "tatianna",             "tatianna"),
    ("Kundschafter", "tetherys",             "tetherys"),
    ("Kundschafter", "thaiden-nebelspitze",  "thaiden-mistpeak"),  # Abw.
    ("Kundschafter", "tinashi-die-wanderin", "tinashi-the-wanderer"),
    ("Kundschafter", "tomble-burrowell",     "tomble-burrowell"),
    # ── Magier ───────────────────────────────────────────────────────────────
    ("Magier", "astarra",                "astarra"),
    ("Magier", "desra-die-schaendliche", "dezra-the-vile"),     # Abw.
    ("Magier", "grossmagier-cwellin",    "high-mage-quellen"),  # Abw.
    ("Magier", "jaes-der-verbannte",     "jaes-the-exile"),
    ("Magier", "leorik-der-gelehrte",    "leoric-of-the-book"), # Abw.
    ("Magier", "meister-thorn",          "master-thorn"),
    ("Magier", "ravaella-leichtfuss",    "ravaella-lightfoot"),
    ("Magier", "seherin-kel",            "seer-kel"),           # Abw.
    ("Magier", "shiver",                 "shiver"),
    ("Magier", "witwe-tarha",            "widow-tarha"),
    ("Magier", "zyla",                   "zyla"),
]


def build_images() -> list[str]:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    done = []
    for klasse, stem, hero_id in MAPPING:
        src = SCAN_DIR / klasse / f"{stem}.png"
        if not src.exists():
            raise FileNotFoundError(f"Scan fehlt: {src}")
        im = Image.open(src).convert("RGBA")
        if im.width > TARGET_WIDTH:
            h = round(im.height * TARGET_WIDTH / im.width)
            im = im.resize((TARGET_WIDTH, h), Image.LANCZOS)
        out = OUT_DIR / f"{hero_id}.webp"
        im.save(out, "WEBP", quality=WEBP_QUALITY, method=6)
        kb = out.stat().st_size / 1024
        print(f"  {hero_id:24s} {im.size[0]}x{im.size[1]}  {kb:6.1f} KB")
        done.append(hero_id)
    return done


def write_ts(hero_ids: list[str]) -> None:
    lines = [
        "// AUTO-GENERIERT von scripts/build_hero_de_images.py – nicht von Hand editieren.",
        "//",
        "// Zuordnung HeldId -> deutsches Kartenbild (eingescannte deutsche Karten,",
        "// web-optimiert unter public/heroes/de/). Die englischen any2cards-Bilder",
        "// bleiben als `imageUrl` in heroes.ts erhalten (fuer die spaetere EN-Version).",
        "",
        "export const HERO_IMAGE_DE: Record<string, string> = {",
    ]
    for klasse, stem, hero_id in MAPPING:
        lines.append(f"  '{hero_id}': 'heroes/de/{hero_id}.webp',")
    lines += [
        "}",
        "",
        "/**",
        " * Base-bewusste URL des deutschen Kartenbilds eines Helden, sonst undefined.",
        " * (Vite stellt public/ unter import.meta.env.BASE_URL bereit.)",
        " */",
        "export function heroImageDeSrc(heroId: string): string | undefined {",
        "  const path = HERO_IMAGE_DE[heroId]",
        "  return path ? import.meta.env.BASE_URL + path : undefined",
        "}",
        "",
    ]
    TS_FILE.write_text("\n".join(lines), encoding="utf-8")
    print(f"\nTS-Modul geschrieben: {TS_FILE.relative_to(ROOT)} ({len(hero_ids)} Einträge)")


if __name__ == "__main__":
    print(f"{len(MAPPING)} Heldenbilder -> {OUT_DIR.relative_to(ROOT)}")
    ids = build_images()
    assert len(ids) == len(set(ids)) == 54, "Erwartet 54 eindeutige Helden-IDs"
    write_ts(ids)
    print("Fertig.")
