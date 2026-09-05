# Scan-Quellen (Descent Scans Release)

**Zweck:** Zentrale Referenz, WO die deutschen Original-Scans liegen und WIE man
einzelne Dateien ohne 600-MB-Volldownload zieht. Aus den Scans werden die
klein-optimierten `public/cards/de/**`-Bilder erzeugt (Roh-Scans werden NIE committet).

## Quelle

- **Release:** `scans-transfer` auf `zedyo/quest-vault-reborn`
  (<https://github.com/zedyo/quest-vault-reborn/releases/tag/scans-transfer>)
- **Asset:** `Descent.Scans.zip` — 602.542.680 Bytes, sha256
  `b4f26f75dff12a92ea5d43b1dee74bcdb82e5e44565ec5579bd6aaebf76f5acf`
- **Direkt-URL:** `https://github.com/zedyo/quest-vault-reborn/releases/download/scans-transfer/Descent.Scans.zip`
  (leitet auf eine signierte `release-assets.githubusercontent.com`-URL um; unterstützt HTTP-Range `206`).

## Zugriff ohne Volldownload (Byte-Range)

Die ZIP ist **nicht** ZIP64. Verfahren:
1. Letzte ~64 KB per `curl -L -r <start>-<end>` ziehen → EOCD (`PK\x05\x06`) parsen
   → `cd_offset`/`cd_size` (hier: 235 Einträge, CD @ 602515548, 27110 B — liegt im Tail).
2. Central Directory parsen → je Datei `name`, `uncompressed size`, `local header offset`.
3. Einzeldatei: ab `local header offset` den Local-File-Header (`PK\x03\x04`) lesen
   (Kompression i. d. R. `store`/0 bei PNG/JPG → Bytes direkt nutzbar) und per Range ziehen.
Wichtig: Azure/Blob liefert **501** bei Suffix-Ranges → immer **explizite** Ranges verwenden.

## Relevanz für offene Aufgaben

- ✅ **Klassen-Startausrüstung + Begleiter (DE) – erledigt (v1.3.21):** aus `Karten/Klassenkarten 1..4.jpg`
  (**10×7-Raster**, Zellgröße 475×740, je Karte per Position zugeschnitten) + `Karten/Klasse Elementarmagier 1/2.png`
  (Runenspeicher/Energiebündel) + `Karten/Klasse Seelenschnitter 1.png` (Seelenernter). Begleiter
  (Wolf/Untoter Diener/Belebter Stein/Schattenseele) liegen ebenfalls auf den `Klassenkarten`-Blättern.
  Ergebnis: `public/cards/de/classes/<item-id>.webp` + `familiar-<class-id>.webp`.
  **Fallen:** die einzelnen `Klasse <Name> N.png` von Bewahrer/Gauner/Häretiker/Kreuzritter/Plünderer/
  Rächer/Verwüster/Wahrsaager sind **Hybrid-Klassen** (Karte 1 = Archetyp-Wahlkarte, KEIN Startgegenstand);
  `Vertraute und Gefährtenfähigkeiten.jpg` + `Gefährten.jpg` enthalten HELDEN-Vertraute/NSC-Gefährten
  (Pico/Skye/Raythen/Serena …), NICHT die Klassen-Begleiter.
- (Weiteres bereits verarbeitet: Helden, Monster, Markt/Relikte, Overlord, Hauptmann, Reise, Gerüchte, Zustände, Overlay-Token.)

## Operativer Zugriff — ein Einzelbild als Referenz ziehen

> **Zweck:** Damit eine spätere Session **ohne Volldownload** ein einzelnes Quellblatt
> (oder eine daraus zugeschnittene Karte) als visuelle Referenz für eine Aufgabe
> heranziehen kann — auch nachdem der Release ggf. gelöscht/extern gesichert wurde.
> Voraussetzung dann: die `Descent.Scans.zip` liegt an der dokumentierten URL **oder**
> als externes Backup vor (Byte-Range-Verfahren identisch).

**Wichtige Korrektur (2026-07-17):** Die Karten-/Marker-Dateien sind in der ZIP
**deflate-komprimiert (Methode 8)**, **nicht** `store/0` wie frühere Doku behauptete
(nur 5 der 235 Einträge sind `store`). Nach dem Range-Zug muss also **raw-inflate**
(`zlib.decompress(raw, -15)`) erfolgen. Die Größen im Manifest unten sind die
**unkomprimierten** Größen.

Reproduzierbares Rezept (Python 3, nur `curl` + stdlib `zlib`):

```python
import subprocess, struct, zlib, json
URL = "https://github.com/zedyo/quest-vault-reborn/releases/download/scans-transfer/Descent.Scans.zip"
TOTAL, CD_OFF, CD_SIZE = 602542680, 602515548, 27110   # aus EOCD (siehe unten)

def rng(a, b):  # HTTP-Range [a,b] (explizit! Suffix-Ranges -> 501 bei Azure/Blob)
    return subprocess.run(["curl","-sSL","-r",f"{a}-{b}",URL],capture_output=True,check=True).stdout

# 1) Central Directory einmal ziehen + parsen -> Einträge {name, method, comp, lho}
cd = rng(CD_OFF, CD_OFF+CD_SIZE-1); i=0; ENTRIES={}
while cd[i:i+4]==b'PK\x01\x02':
    method=struct.unpack('<H',cd[i+10:i+12])[0]; comp=struct.unpack('<I',cd[i+20:i+24])[0]
    nlen=struct.unpack('<H',cd[i+28:i+30])[0]; elen=struct.unpack('<H',cd[i+30:i+32])[0]
    clen=struct.unpack('<H',cd[i+32:i+34])[0]; lho=struct.unpack('<I',cd[i+42:i+46])[0]
    name=cd[i+46:i+46+nlen].decode('utf-8'); ENTRIES[name]={"method":method,"comp":comp,"lho":lho}
    i+=46+nlen+elen+clen

def pull(name, out):                     # Einzeldatei ziehen (Suffix-Match auf Basename ok)
    e=ENTRIES.get(name) or next(v for k,v in ENTRIES.items() if k.endswith(name))
    h=rng(e["lho"], e["lho"]+29)          # Local-File-Header: fixe 30 B + name + extra
    ds=e["lho"]+30+struct.unpack('<H',h[26:28])[0]+struct.unpack('<H',h[28:30])[0]
    raw=rng(ds, ds+e["comp"]-1)
    if e["method"]==8: raw=zlib.decompress(raw,-15)   # deflate -> raw-inflate
    open(out,"wb").write(raw)

pull("Karten/Suchkarten.jpg", "/tmp/suchkarten.jpg")   # Beispiel
```

Die EOCD-Werte (`CD_OFF`/`CD_SIZE`) sind stabil, solange das Release-Asset unverändert
bleibt (sha256 oben). Neu ermitteln: letzte 64 KB ziehen, `PK\x05\x06` suchen,
Bytes 10–20 = `#Einträge` / `cd_size` / `cd_offset`.

## Import-Status & Provenienz (welches App-Bild aus welchem Blatt)

Stand 2026-07-17. „App-Ziel" = wohin die zugeschnittenen webp/png committet sind bzw.
gehören. Raster = grobe Zellanordnung Spalten×Zeilen (der Autokorrelations-Schneider
misst die exakte Pitch selbst; hier nur als Orientierung für den Re-Cut).

**✅ Bereits importiert (Bild + i. d. R. Text):**

| Quellblatt(er) | App-Ziel | Raster (ca.) |
|---|---|---|
| `Helden {Heiler,Krieger,Kundschafter,Magier}.jpg` (+R) | `public/cards/de/heroes/` | pro Archetyp-Blatt |
| `Monsterkarten Akt {1,2}.jpg` (+R) | `public/cards/de/monsters/` | Akt 1/2, Front+Back |
| `Marktkarten Akt {1,2}.jpg` | `public/cards/de/items/` | volle Pitch (Zelle ~472×732) |
| `Relikte.jpg` (+R) | `public/cards/de/relics/` | doppelseitig (Held/Overlord) |
| `Gerüchtekarten Akt {1,2}.jpg` (+R) | `public/cards/de/geruechte/` | Front + Akt-II-Rückseiten |
| `Overlordkarten *.jpg` (13 Blätter) | `public/cards/de/overlord/` | je Deck ein Blatt |
| `Hauptmannkarten Akt {1,2}.jpg` (+R) | `public/cards/de/lieutenants/` | Akt1 5×4, Akt2 6×4 |
| `Reisekarten.jpg` / `Reisekarten Stadt.jpg` | `public/cards/de/reisekarten/` | 7×5 / 4×3 |
| `Zustandskarten.jpg` (+R) | `public/cards/de/zustand/` | 4×3 (10) |
| `Klassenkarten 1..4.jpg` + `Klasse {Elementarmagier,Seelenschnitter} N.png` | `public/cards/de/classes/` | 10×7 (Startausrüstung + Begleiter) |

**✅ Transkribiert + Bild committet (2026-07-17)** — Text in
[`de-karten/weitere-decks.md`](de-karten/weitere-decks.md), Bilder unter
`public/cards/de/<deck>/` (56 webp): Suchkarten, Geheimkammern, Befleckt, Korrumpiert,
Vertraute, NSC-Gefährten + Gefährten-Fähigkeiten, Aktivierungskarten.
**✅ Agenten-Bilder committet (Phase 2, 2026-07-17):** 40 webp unter `public/cards/de/agents/`
(`<agentId>-act<1|2>.webp`); Werte in `agents.ts`. Autoritative dt. Rückseitentexte optional offen.
**✅ Plotdecks/Handlungskarten korrigiert (Phase 3, 2026-07-17):** 6 Decks/60 Karten 1:1 von
den dt. Karten → `plotDecks.ts` (5 Deck-Namen + 44 nameDe + 60 rulesDe), 60 Bilder unter
`public/cards/de/plotdecks/`, `plotCardDeUrl` + Plot-/Agenten-Seite zeigen DE mit EN-Fallback.
**✅ Marker + Symbole gesichert (Phase 4/5, 2026-07-17):** 62 Marker → `public/cards/de/marker/`,
16 Symbole → `public/cards/de/symbole/` (optimierte webp, reine Sicherung). Damit ist der
**gesamte Zip-Inhalt außer den 13 Regelbuch-PDFs** im Repo gesichert → Release für Bild-/
Kartenmaterial löschbar. Details: `de-karten/weitere-decks.md` §10/§11.
**⬜ Offen:** nur noch `Regelbücher PDF/` (durchsuchbare Regeln, IP-sicher via CRRG + eigene
Zusammenfassungen — separater Schritt).

| Quellblatt | Deck / Inhalt | Karten | Raster (ca.) | App-Datenlage |
|---|---|---|---|---|
| `Anführerkarten.jpg` (+R) | **Agenten**-Statkarten (Akt I+II) | 40 | 7×6 (Zelle ~660×1030) | `agents.ts` (Werte da), **DE-Bild fehlt** |
| `Handlungskarten.jpg` (+R) | **Plotdecks Grundspiel** (6 Decks) | 60 | 10×6 (Zelle ~660×1030) | `plotDecks.ts` (Basis-Text da), **DE-Bild fehlt** |
| `Geheimkammern.jpg` (+R) | **Geheimkammern** (Labyrinth d. Verderbens) | 12 | 5×3 (Zelle ~660×1030) | **fehlt komplett** |
| `Beflecktkarten.jpg` (+R) | **Befleckt**-Karten (Nebel v. Belihall) | 12 | 5×3 (Zelle ~475×740) | **fehlt komplett** |
| `Korrumpiertenkarten.jpg` (+R) | **Korrumpiert** (Elite-Wechselbalg, Belihall) | 9 | 4×3 (Zelle ~475×740) | **fehlt komplett** |
| `Suchkarten.jpg` (+R) | **Suchkarten** (Suchstapel Grundspiel) | 13 | 5×3 (Zelle ~475×740) | **fehlt komplett** |
| `Vertraute und Gefährtenfähigkeiten.jpg` (+R) | 5 **Vertraute** + 6 **Gefährten-Fähigkeiten** (Raythen/Serena) | 11 | gemischt (Vertraute quer, Fähigkeiten hoch) | Token da, Kartentext fehlt |
| `Gefährten.jpg` (+R) | **NSC-Gefährten** Raythen/Serena (Statkarten) | 2 | 2 Karten oben | Token da, Statkarte fehlt |
| `Aktivierungskarten.jpg` (+R) | **Heldenzug-Übersicht** (Referenzkarte je Farbe) | 4 | 4 Karten | **fehlt** (reine Regelreferenz) |

**Klassen-Fertigkeitskarten (DE) – erledigt (v1.6.9):** ALLE Fertigkeitskarten importiert
(nicht nur Startausrüstung/Begleiter): 267 Bilder aus `Klassenkarten 1..4.jpg` (Standard-
Klassen) + Einzel-PNGs `Klasse {Elementarmagier,Seelenschnitter,Bewahrer,Gauner,Häretiker,
Kreuzritter,Plünderer,Rächer,Verwüster,Wahrsaager} N.png` (Elementarmagier/Seelenschnitter +
8 Unsterbliche-Legenden-Hybriden; die 4 Rostende-Ketten-Hybriden Wächter/Stahlmagier/Mönch/
Kampfmagier liegen auf den Sheets). Ziel: `public/cards/de/classes/skills/<classId>-<skillId>.webp`.
**Scan-Lücken (kein DE-Bild, EN-Fallback):** Elementarmagier `Sturmeswut`/`Zorn der Natur`
(Einzel-PNGs enthalten stattdessen je ein Duplikat von `Himmel und Erde`/`Umarmung der Natur`).

### Nachtrag v1.8.5 – Bewahrer `Interdisziplinär` (Fremdquelle, nicht aus diesem Release)

Die dritte Lücke ist geschlossen: Für Bewahrer `Interdisziplinär` gibt es weiterhin **keine**
`Klasse Bewahrer 1.png` im Manifest. Das Bild wurde vom **User separat beschafft** und über
den Entwicklungsbranch ins Repo gegeben (Rohdatei danach wieder entfernt).

- **Herkunft:** Der Dateiname der Rohdatei verwies auf `steamusercontent-a.akamaihd.net/ugc/…`,
  also auf Steam-Workshop-Inhalte (Descent 2e existiert dort als Tabletop-Simulator-Mod).
  Das ist eine **andere Quelle als der `scans-transfer`-Release** und hier bewusst vermerkt.
- **Plausibilität geprüft:** Der Scanner-Hintergrund unter dem Alphakanal trägt exakt den
  Farbton der Release-Sheets (RGB ~198/210/212 gegen ~197/207/206 bei
  `lorekeeper-lkancientremedy`), das Seitenverhältnis liegt bei 0,6558 gegen 0,6567 im
  Bestand. Das Bild stammt also mit hoher Wahrscheinlichkeit aus derselben Scan-Familie und
  ist kein Fremdrender.
- **Inhaltlich verifiziert:** Kartentitel `INTERDISZIPLINÄR`, Klassenzeile `BEWAHRER`, kein
  EP-Wert und kein Erschöpfungssymbol (passt zu `xpCost: 0`/`fatigueCost: 0`); der Regeltext
  deckt sich wortgenau mit `rulesDe` in `heroClasses.ts` und mit `de-karten/klassen.md`.
  **Keine** Daten- oder Textkorrektur nötig.
- **Aufbereitung:** Quelle 501×764 RGBA (mit nachträglich aufgelegter Transparenzmaske für
  Rand + abgerundete Ecken). Der Alphakanal wurde **verworfen** statt auf Weiß komponiert:
  darunter liegt der originale Scan-Hintergrund, dadurch sehen die Ecken exakt aus wie im
  Bestand. Danach LANCZOS auf die einheitliche Bestandsbreite 440 px (ergibt 440×671, exakt die
  Höhe von `lorekeeper-lkallknowing`), WebP `quality=90, method=6` → 102,8 KB (Bestand:
  50–112 KB, Median 100,8 KB). Kein Zuschnitt: der Randanteil entsprach bereits dem Bestand.
`Marker/` + `Symbole/` = Token/Symbole (größtenteils bereits über any2cards-Overlays bzw.
als SVG in `GameSymbols` abgedeckt). `Regelbücher PDF/` = 13 Handbücher (separater Task,
CRRG-Errata bereits via `Community Hausregeln V 1.15.pdf` eingebunden).

## Vollständiges Datei-Manifest (235 Einträge)

Format: `<uncompressed bytes>  @<local header offset>  <pfad>`

```
         0  @0           Descent Scans/
         0  @76          Descent Scans/Karten/
   1193793  @159         Descent Scans/Karten/Aktivierungskarten R.png
    796594  @1193057     Descent Scans/Karten/Aktivierungskarten.jpg
   8268114  @1966539     Descent Scans/Karten/Anführerkarten R.jpg
   9573246  @10181904    Descent Scans/Karten/Anführerkarten.jpg
   1004893  @19721423    Descent Scans/Karten/Beflecktkarten R.png
   1580632  @20726730    Descent Scans/Karten/Beflecktkarten.jpg
    677529  @22288757    Descent Scans/Karten/Gauner R.png
    481736  @22966607    Descent Scans/Karten/Gefährten R.jpg
    552546  @23402827    Descent Scans/Karten/Gefährten.jpg
   2026514  @23912584    Descent Scans/Karten/Geheimkammern R.png
   2660316  @25939831    Descent Scans/Karten/Geheimkammern.jpg
   2027144  @28548783    Descent Scans/Karten/Gerüchtekarten Akt 1 R.png
   5303350  @30576668    Descent Scans/Karten/Gerüchtekarten Akt 1.jpg
   3243415  @35818397    Descent Scans/Karten/Gerüchtekarten Akt 2 R.jpg
   3441265  @39002967    Descent Scans/Karten/Gerüchtekarten Akt 2.jpg
   1722440  @42391067    Descent Scans/Karten/Handlungskarten R.png
  12133063  @44114097    Descent Scans/Karten/Handlungskarten.jpg
   3532154  @56068539    Descent Scans/Karten/Hauptmannkarten Akt 1 R.jpg
   4315650  @59545682    Descent Scans/Karten/Hauptmannkarten Akt 1.jpg
   4274211  @63821170    Descent Scans/Karten/Hauptmannkarten Akt 2 R.jpg
   5111687  @68029898    Descent Scans/Karten/Hauptmannkarten Akt 2.jpg
   7752968  @73091366    Descent Scans/Karten/Helden Heiler R.jpg
   7295960  @80644527    Descent Scans/Karten/Helden Heiler.jpg
  10384537  @87739467    Descent Scans/Karten/Helden Krieger R.jpg
   9801392  @98059617    Descent Scans/Karten/Helden Krieger.jpg
   9361667  @107796963   Descent Scans/Karten/Helden Kundschafter R.jpg
   8843707  @117036235   Descent Scans/Karten/Helden Kundschafter.jpg
   7900366  @125757363   Descent Scans/Karten/Helden Magier R.jpg
   7404459  @133453521   Descent Scans/Karten/Helden Magier.jpg
    785264  @140654332   Descent Scans/Karten/Klasse Bewahrer 2.png
    805718  @141439956   Descent Scans/Karten/Klasse Bewahrer 3.png
    821446  @142246044   Descent Scans/Karten/Klasse Bewahrer 4.png
    733140  @143067860   Descent Scans/Karten/Klasse Bewahrer R.png
    888192  @143801345   Descent Scans/Karten/Klasse Elementarmagier 1.png
    658514  @144689939   Descent Scans/Karten/Klasse Elementarmagier 10.png
    797242  @145348786   Descent Scans/Karten/Klasse Elementarmagier 11.png
    806608  @146146401   Descent Scans/Karten/Klasse Elementarmagier 12.png
    756613  @146953387   Descent Scans/Karten/Klasse Elementarmagier 13.png
    785488  @147710363   Descent Scans/Karten/Klasse Elementarmagier 14.png
    788047  @148496219   Descent Scans/Karten/Klasse Elementarmagier 15.png
    853881  @149284634   Descent Scans/Karten/Klasse Elementarmagier 2.png
    775811  @150138902   Descent Scans/Karten/Klasse Elementarmagier 3.png
    792753  @150915080   Descent Scans/Karten/Klasse Elementarmagier 4.png
    788877  @151708205   Descent Scans/Karten/Klasse Elementarmagier 5.png
    825660  @152497454   Descent Scans/Karten/Klasse Elementarmagier 6.png
    726220  @153323496   Descent Scans/Karten/Klasse Elementarmagier 7.png
    791320  @154050068   Descent Scans/Karten/Klasse Elementarmagier 8.png
    786795  @154841760   Descent Scans/Karten/Klasse Elementarmagier 9.png
    855483  @155628922   Descent Scans/Karten/Klasse Elementarmagier R.png
    806007  @156482952   Descent Scans/Karten/Klasse Gauner 1.png
    801193  @157289327   Descent Scans/Karten/Klasse Gauner 2.png
    706105  @158090883   Descent Scans/Karten/Klasse Gauner 3.png
    792789  @158797321   Descent Scans/Karten/Klasse Gauner 4.png
    804951  @159590441   Descent Scans/Karten/Klasse Häretiker 1.png
    799298  @160395759   Descent Scans/Karten/Klasse Häretiker 2.png
    900948  @161195267   Descent Scans/Karten/Klasse Häretiker 3.png
    786319  @162096025   Descent Scans/Karten/Klasse Häretiker 4.png
    698352  @162882706   Descent Scans/Karten/Klasse Häretiker R.png
    809654  @163581395   Descent Scans/Karten/Klasse Kreuzritter 1.png
    771574  @164391422   Descent Scans/Karten/Klasse Kreuzritter 2.png
    730040  @165163354   Descent Scans/Karten/Klasse Kreuzritter 3.png
    965454  @165893742   Descent Scans/Karten/Klasse Kreuzritter 4.png
    736543  @166859018   Descent Scans/Karten/Klasse Kreuzritter R.png
    702553  @167595909   Descent Scans/Karten/Klasse Plünderer 1.png
    755248  @168298799   Descent Scans/Karten/Klasse Plünderer 2.png
    758240  @169054399   Descent Scans/Karten/Klasse Plünderer 3.png
    833695  @169812996   Descent Scans/Karten/Klasse Plünderer 4.png
    856038  @170647068   Descent Scans/Karten/Klasse Plünderer R.png
    800767  @171502967   Descent Scans/Karten/Klasse Rächer 1.png
    805004  @172304098   Descent Scans/Karten/Klasse Rächer 2.png
    813174  @173109466   Descent Scans/Karten/Klasse Rächer 3.png
    855818  @173923009   Descent Scans/Karten/Klasse Rächer 4.png
    698437  @174779211   Descent Scans/Karten/Klasse Rächer R.png
    869771  @175477982   Descent Scans/Karten/Klasse Seelenschnitter 1.png
    790764  @176348145   Descent Scans/Karten/Klasse Seelenschnitter 10.png
    802310  @177139282   Descent Scans/Karten/Klasse Seelenschnitter 11.png
    773576  @177941965   Descent Scans/Karten/Klasse Seelenschnitter 2.png
    802029  @178715908   Descent Scans/Karten/Klasse Seelenschnitter 3.png
    687882  @179518271   Descent Scans/Karten/Klasse Seelenschnitter 4.png
    756397  @180206490   Descent Scans/Karten/Klasse Seelenschnitter 5.png
    812515  @180963249   Descent Scans/Karten/Klasse Seelenschnitter 6.png
    833772  @181776141   Descent Scans/Karten/Klasse Seelenschnitter 7.png
    796630  @182610295   Descent Scans/Karten/Klasse Seelenschnitter 8.png
    828634  @183407297   Descent Scans/Karten/Klasse Seelenschnitter 9.png
    882574  @184236313   Descent Scans/Karten/Klasse Seelenschnitter R.png
    788494  @185118572   Descent Scans/Karten/Klasse Verwüster 1.png
    766523  @185907428   Descent Scans/Karten/Klasse Verwüster 2.png
    791210  @186674308   Descent Scans/Karten/Klasse Verwüster 3.png
    813837  @187465885   Descent Scans/Karten/Klasse Verwüster 4.png
    856582  @188280094   Descent Scans/Karten/Klasse Verwüster R.png
    709391  @189136532   Descent Scans/Karten/Klasse Wahrsaager 1.png
    725235  @189846265   Descent Scans/Karten/Klasse Wahrsaager 2.png
    756577  @190571847   Descent Scans/Karten/Klasse Wahrsaager 3.png
    759471  @191328781   Descent Scans/Karten/Klasse Wahrsaager 4.png
    764794  @192088609   Descent Scans/Karten/Klasse Wahrsaager R.png
   8678782  @192853760   Descent Scans/Karten/Klassenkarten 1 R.jpg
   7955601  @201427423   Descent Scans/Karten/Klassenkarten 1.jpg
   7191066  @209332333   Descent Scans/Karten/Klassenkarten 2 R.jpg
   7088011  @216405787   Descent Scans/Karten/Klassenkarten 2.jpg
   8470103  @223411307   Descent Scans/Karten/Klassenkarten 3 R.jpg
   8180391  @231803703   Descent Scans/Karten/Klassenkarten 3.jpg
   7556036  @239942323   Descent Scans/Karten/Klassenkarten 4 R.jpg
   6828441  @247373392   Descent Scans/Karten/Klassenkarten 4.jpg
   1926992  @254107294   Descent Scans/Karten/Korrumpiertenkarten R.png
    822487  @256034860   Descent Scans/Karten/Korrumpiertenkarten.jpg
     88449  @256841615   Descent Scans/Karten/Marktkarten Akt 1 R.jpg
   8245143  @256915751   Descent Scans/Karten/Marktkarten Akt 1.jpg
     84043  @265119648   Descent Scans/Karten/Marktkarten Akt 2 R.jpg
   7147523  @265189972   Descent Scans/Karten/Marktkarten Akt 2.jpg
  12803481  @272281763   Descent Scans/Karten/Monsterkarten Akt 1 R.jpg
  13848223  @284975284   Descent Scans/Karten/Monsterkarten Akt 1.jpg
  12888632  @298719389   Descent Scans/Karten/Monsterkarten Akt 2 R.jpg
  13852948  @311502244   Descent Scans/Karten/Monsterkarten Akt 2.jpg
   1951970  @325249583   Descent Scans/Karten/Overlordkarten Alle Klassen.jpg
   2730279  @327103082   Descent Scans/Karten/Overlordkarten Arsenal II.jpg
   2585419  @329775322   Descent Scans/Karten/Overlordkarten Arsenal.jpg
   3232732  @332303123   Descent Scans/Karten/Overlordkarten Belohnung.jpg
   1440629  @335508471   Descent Scans/Karten/Overlordkarten Gebieter.jpg
   1104704  @336935867   Descent Scans/Karten/Overlordkarten Heermeister.jpg
   1172692  @338018232   Descent Scans/Karten/Overlordkarten Hexer.jpg
   1763614  @339169031   Descent Scans/Karten/Overlordkarten R.png
   1252571  @340933133   Descent Scans/Karten/Overlordkarten Schattenmagier.jpg
   1252588  @342162836   Descent Scans/Karten/Overlordkarten Schurke.jpg
   1443374  @343393102   Descent Scans/Karten/Overlordkarten Seelenbinder.jpg
   1316108  @344823264   Descent Scans/Karten/Overlordkarten Vergelter.jpg
   1263474  @346115582   Descent Scans/Karten/Overlordkarten Verseucher.jpg
   1260368  @347357007   Descent Scans/Karten/Overlordkarten Verzauberer.jpg
   2034845  @348594116   Descent Scans/Karten/Reisekarten R.png
   2079290  @350629697   Descent Scans/Karten/Reisekarten Stadt R.png
    907533  @352709720   Descent Scans/Karten/Reisekarten Stadt.jpg
   6534522  @353607431   Descent Scans/Karten/Reisekarten.jpg
   3237261  @360037555   Descent Scans/Karten/Relikte R.jpg
   3382051  @363256154   Descent Scans/Karten/Relikte.jpg
    993816  @366611122   Descent Scans/Karten/Suchkarten R.png
   1651026  @367605310   Descent Scans/Karten/Suchkarten.jpg
   1443991  @369240077   Descent Scans/Karten/Vertraute und Gefährte R.jpg
   1375668  @370675940   Descent Scans/Karten/Vertraute und Gefährtenfähigkeiten.jpg
   1241407  @372040618   Descent Scans/Karten/Zustandskarten R.jpg
   1244584  @373270322   Descent Scans/Karten/Zustandskarten.jpg
         0  @374499581   Descent Scans/Marker/
    465618  @374499664   Descent Scans/Marker/Aufgabenmarker Blau.png
    469009  @374958255   Descent Scans/Marker/Aufgabenmarker Grün.png
    471563  @375420222   Descent Scans/Marker/Aufgabenmarker Rot.png
    472916  @375884641   Descent Scans/Marker/Aufgabenmarker Weiss.png
     91416  @376350039   Descent Scans/Marker/Bedrohungsmarker.png
    422586  @376441490   Descent Scans/Marker/Besonderer Suchmarker.png
    255465  @376856506   Descent Scans/Marker/Einflussmarker 1.png
    261033  @377111928   Descent Scans/Marker/Einflussmarker 2.png
    247988  @377372885   Descent Scans/Marker/Einflussmarker 3.png
    257604  @377620825   Descent Scans/Marker/Einflussmarker R.png
     95327  @377878369   Descent Scans/Marker/Erschöpfung.png
     73485  @377973753   Descent Scans/Marker/Geheimtür.jpg
    313428  @378045565   Descent Scans/Marker/Heldenmarker Gelb.jpg
    320682  @378300509   Descent Scans/Marker/Heldenmarker Grau.jpg
    313580  @378562821   Descent Scans/Marker/Heldenmarker Lila.jpg
    331516  @378817974   Descent Scans/Marker/Heldenmarker Orange.jpg
    702327  @379090797   Descent Scans/Marker/Herausforderungsmarker Feuerteufel.png
    697538  @379788902   Descent Scans/Marker/Herausforderungsmarker Geistesgegenwart.png
    699321  @380482106   Descent Scans/Marker/Herausforderungsmarker Goblinschütze.png
    712351  @381177154   Descent Scans/Marker/Herausforderungsmarker Harpye.png
    703922  @381885318   Descent Scans/Marker/Herausforderungsmarker Höhlenspinne.png
    696156  @382585033   Descent Scans/Marker/Herausforderungsmarker Stärke.png
    708333  @383276837   Descent Scans/Marker/Herausforderungsmarker Willenskraft.png
    693360  @383980853   Descent Scans/Marker/Herausforderungsmarker Wissen.png
    700526  @384669820   Descent Scans/Marker/Herausforderungsmarker Zombie.png
    136295  @385365761   Descent Scans/Marker/Herz.png
   4681474  @385502150   Descent Scans/Marker/Inaktivmarker für Monster.png
    356836  @390176793   Descent Scans/Marker/Klasse Apothecarius Elixiermarker.jpg
    401705  @390513383   Descent Scans/Marker/Klasse Barde Harmoniemarker.jpg
    367657  @390894527   Descent Scans/Marker/Klasse Barde Melodiemarker.jpg
    452294  @391241931   Descent Scans/Marker/Klasse Beschwörer Trugbildmarker.jpg
    373169  @391673484   Descent Scans/Marker/Klasse Champion Ruhmmarker.jpg
    318344  @392026306   Descent Scans/Marker/Klasse Fallensteller Fallenmarker.jpg
    391894  @392324726   Descent Scans/Marker/Klasse Kopfgeldjäger Anversiert-Marker.jpg
    377280  @392696256   Descent Scans/Marker/Klasse Prophet Erleuchtungsmarker.jpg
    446552  @393053458   Descent Scans/Marker/Klasse Schwarzmagier Geiselmarker.jpg
    226175  @393479092   Descent Scans/Marker/Overlord Dienermarker Geissel.png
    188167  @393705469   Descent Scans/Marker/Overlord Dienermarker Rabenschwarm.png
     99613  @393893833   Descent Scans/Marker/Overlord Verseucher Infektionsmarker.png
     13789  @393993607   Descent Scans/Marker/Personenmarker Frau.jpg
     12825  @394007095   Descent Scans/Marker/Personenmarker Mann.jpg
     90414  @394019623   Descent Scans/Marker/Schicksalsmarker.png
     10488  @394110022   Descent Scans/Marker/Sonnenstein Marker.png
    476851  @394120636   Descent Scans/Marker/Suchmarker.png
    167144  @394590638   Descent Scans/Marker/Vertrautenmarker Belebter Stein.png
    164159  @394757968   Descent Scans/Marker/Vertrautenmarker Leuchtfeuer.png
    164079  @394922308   Descent Scans/Marker/Vertrautenmarker Pico.png
    167333  @395086561   Descent Scans/Marker/Vertrautenmarker Reanimierter.png
    169058  @395254064   Descent Scans/Marker/Vertrautenmarker Schattenseele.png
    183714  @395423285   Descent Scans/Marker/Vertrautenmarker Skye.png
    211837  @395607183   Descent Scans/Marker/Vertrautenmarker Wolf.png
     20305  @395819209   Descent Scans/Marker/Zerfallenes Gelände.png
    104099  @395839638   Descent Scans/Marker/Zustand Betäubt.jpg
     92026  @395939442   Descent Scans/Marker/Zustand blutend.jpg
     99845  @396027512   Descent Scans/Marker/Zustand brennend.jpg
    100740  @396123142   Descent Scans/Marker/Zustand Erkrankt.jpg
    100176  @396219525   Descent Scans/Marker/Zustand Gelähmt.jpg
     98940  @396315385   Descent Scans/Marker/Zustand Geschwächt.jpg
     85932  @396410192   Descent Scans/Marker/Zustand Todgeweiht.jpg
    107055  @396491953   Descent Scans/Marker/Zustand Verflucht.jpg
     98376  @396593378   Descent Scans/Marker/Zustand Vergiftet.jpg
    108862  @396687555   Descent Scans/Marker/Zustand Verängstigt.jpg
         0  @396792351   Descent Scans/Regelbücher PDF/
  20582731  @396792444   Descent Scans/Regelbücher PDF/Community Hausregeln V 1.15.pdf
  13078930  @414667346   Descent Scans/Regelbücher PDF/Die Trollsümpfe.pdf
   9762815  @426353696   Descent Scans/Regelbücher PDF/Hauptmannsets.pdf
  11682572  @435741691   Descent Scans/Regelbücher PDF/Höhle des Lindwurms.pdf
  25669312  @446199811   Descent Scans/Regelbücher PDF/Labyrinth des Verderbens.pdf
   6435691  @469789032   Descent Scans/Regelbücher PDF/Nebel von Belihall.pdf
  21501594  @475557771   Descent Scans/Regelbücher PDF/Questhandbuch - Das Blutvermächtnis Akt 1.pdf
  17390357  @495889484   Descent Scans/Regelbücher PDF/Questhandbuch - Das Blutvermächtnis Akt 2.pdf
  22834467  @511966046   Descent Scans/Regelbücher PDF/Questhandbuch.pdf
  11773697  @533050496   Descent Scans/Regelbücher PDF/Rostende Ketten.pdf
  29987920  @543694872   Descent Scans/Regelbücher PDF/Schatten von Nerekhall.pdf
  14235275  @571549328   Descent Scans/Regelbücher PDF/Schloss Rabenfels.pdf
  19271309  @584935813   Descent Scans/Regelbücher PDF/Spielregeln Grundspiel.pdf
         0  @600090369   Descent Scans/Symbole/
    531867  @600090453   Descent Scans/Symbole/Akt 1.png
    527163  @600615074   Descent Scans/Symbole/Akt 2.png
    312540  @601135131   Descent Scans/Symbole/Archetyp Heiler.jpg
    283922  @601388615   Descent Scans/Symbole/Archetyp Krieger.jpg
    280400  @601614156   Descent Scans/Symbole/Archetyp Kundschafter.jpg
    388879  @601835897   Descent Scans/Symbole/Archetyp Magier.jpg
     31818  @602165156   Descent Scans/Symbole/Merkmal Dunkel.png
     35244  @602197102   Descent Scans/Symbole/Merkmal Gebirge.png
     34015  @602232477   Descent Scans/Symbole/Merkmal Gebäude.png
     35123  @602266623   Descent Scans/Symbole/Merkmal Heiss.png
     36348  @602301871   Descent Scans/Symbole/Merkmal Höhle.png
     35748  @602338348   Descent Scans/Symbole/Merkmal Kalt.png
     35130  @602374224   Descent Scans/Symbole/Merkmal Verflucht.png
     34692  @602409490   Descent Scans/Symbole/Merkmal Wasser.png
     36207  @602444310   Descent Scans/Symbole/Merkmal Wildnis.png
     34769  @602480645   Descent Scans/Symbole/Merkmal Zivilisiert.png
```
