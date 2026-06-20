# Descent 2. Edition – Alle Helden

**Status:** Vollständige Spielwerte dokumentiert – ✅ Kartenscan-validiert 2026-06-13 (vollständiger Audit-Pass)  
**Quelle:** github.com/any2cards/d2e, src/data/heroes.ts  
**Zuletzt aktualisiert:** 2026-06-13

---

**Hinweis:** Heldennamen sind Eigennamen und wurden von FFG/Asmodee auf Deutsch NICHT übersetzt. Die Archetypen wurden jedoch auf Deutsch lokalisiert.

## Archetypen

| Englisch | Deutsch |
|----------|---------|
| Warrior | Krieger |
| Healer | Heiler |
| Mage | Magier |
| Scout | Späher |

---

## Deutsche Kartenbilder (eingescannt, 2026-06-20)

Die Helden-Übersicht zeigt jetzt die **eingescannten deutschen Heldenkarten** statt
der englischen any2cards-Bilder. Details:

- **Quelle:** vom User eingescannte physische deutsche Karten (Vorderseite), randlos
  freigestellt. Volle Auflösung unter `scans/helden/<Klasse>/<karten-name>.png`
  (nicht in der App), web-optimiert (≈900px WebP) unter `public/heroes/de/<held-id>.webp`.
- **Zuordnung:** `src/data/heroImagesDe.ts` (HeldId → Bild), erzeugt von
  `scripts/build_hero_de_images.py`. **54 von 60** Helden gescannt.
- **Anzeige:** `HeroesPage` nimmt das deutsche Bild, wenn vorhanden, sonst das
  englische `imageUrl` (bleibt in `heroes.ts` erhalten – für die spätere EN-Version).
- **Noch ohne Scan (6):** Serena, Challara, Lyssa, Raythen, Ronan von der Wildnis,
  Vyrah der Falkner → zeigen weiter das englische Bild.

### Offizieller deutscher Kartenstand übernommen (Namen + Texte)

Seit v1.2.5 zeigt die App auch **Namen, Heldenfähigkeit und Heldentat** im Wortlaut
der physischen deutschen Karten:

- **Quelle:** `src/data/heroOfficialDe.ts` (Generator: `scripts/build_hero_official_de.py`,
  liest die Scan-Markdowns). Wird in `heroes.ts` als **Override** über die Basis-Literale
  gelegt (`BASE_HEROES.map(... ⇒ {...h, ...official})`).
- **Alte Community-Übersetzung bleibt erhalten:** Die früheren deutschen Namen/Texte
  stehen weiter als Basis-Literale in `heroes.ts` (nichts gelöscht – Vergleich/EN-Version).
- **16 Namensabweichungen** jetzt am Kartenstand (z. B. „Eine Faust" → **„Einfaust"**,
  „Ältester Mok" → **„Geistersprecher Mok"**, „Stahlhörner" → **„Stahlhorn"**).
  Vollständige Liste: `scans/helden/ABWEICHUNGEN_heroes_ts.md`.
- **Symbole:** `[Herz]`/`[Schub]`/`[Aktion]`-Platzhalter werden zu ❤/⚡/↻;
  `[Ausdauer]`/`[Schild]`/Attribut-Platzhalter als Klartext (korrektes Wort, kein Icon).
- **Offen:** Zahlenwerte stimmen bei allen 54 überein; nur 3 Verteidigungswürfel
  (Orkell/Nanok/Ravaella) sind im Scan grau-ähnlich und ggf. an der Karte zu prüfen.

---

## Grundspiel (8 Helden)

| Held | Archetyp (DE) | Archetyp (EN) |
|------|--------------|--------------|
| Avric Albright | Heiler | Healer |
| Ashrian | Heiler | Healer |
| Leoric of the Book | Magier | Mage |
| Widow Tarha | Magier | Mage |
| Jain Fairwood | Späher | Scout |
| Tomble Burrowell | Späher | Scout |
| Grisban the Thirsty | Krieger | Warrior |
| Syndrael | Krieger | Warrior |

---

## Ashrian

**Archetyp:** Heiler | **Erweiterung:** Grundspiel

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 10 | 4 | Grau | 2 | 2 | 3 | 4 |

**Heldenfähigkeit:** Wenn ein normales Monster zu Beginn seiner Aktivierung an dich angrenzt, wird es betäubt.  
**Heldentat:** Aktion: Wähle ein Monster bis Reichweite 3. Jedes Monster dieser Monstergruppe wird betäubt.

---

## Avric Albright

**Archetyp:** Heiler | **Erweiterung:** Grundspiel

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 4 | Grau | 2 | 3 | 4 | 2 |

**Heldenfähigkeit:** Jeder Held bis Reichweite 3 (einschließlich dir) erhält: „Schub: 1 Herz zurückgewinnen" bei allen Angriffswürfen.  
**Heldentat:** Aktion: Würfle 2 rote Kraftwürfel. Jeder Held bis Reichweite 3 kann Herzen in Höhe der gewürfelten Herzen zurückgewinnen.

---

## Leoric vom Buch

**Archetyp:** Magier | **Erweiterung:** Grundspiel

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 8 | 5 | Grau | 1 | 5 | 2 | 3 |

**Heldenfähigkeit:** Jedes Monster bis Reichweite 3 erhält -1 Herz auf alle Angriffswürfe (Minimum 1).  
**Heldentat:** Aktion: Führe einen Angriff mit einer Magie-Waffe durch. Ignoriert Reichweite; trifft alle angrenzenden Figuren. 1 Wurf, jede Figur verteidigt separat.

---

## Witwe Tarha

**Archetyp:** Magier | **Erweiterung:** Grundspiel

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 2 | 4 | 3 | 2 |

**Heldenfähigkeit:** Einmal pro Runde nach dem Würfeln für einen Angriff darfst du 1 Angriffs- oder Kraftwürfel neu würfeln. Das neue Ergebnis muss behalten werden.  
**Heldentat:** Aktion: Führe einen Angriff gegen 2 verschiedene Monster in Sichtlinie durch. 1 Wurf, jedes Monster verteidigt separat.

---

## Jain Fairwood

**Archetyp:** Späher | **Erweiterung:** Grundspiel

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 8 | 5 | Grau | 2 | 3 | 2 | 4 |

**Heldenfähigkeit:** Wenn du durch einen Angriff Herzen erleidest, darfst du einige oder alle als Erschöpfung erleiden (max. deine Ausdauer).  
**Heldentat:** Aktion: Bewege die doppelte Bewegungsweite und führe dann einen Angriff durch.

---

## Tomble Burrowell

**Archetyp:** Späher | **Erweiterung:** Grundspiel

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 8 | 5 | Grau | 1 | 2 | 3 | 5 |

**Heldenfähigkeit:** Wenn du angegriffen wirst und an mindestens einem anderen Helden angrenzt, darfst du dessen Verteidigungswürfelpool deinem eigenen hinzufügen.  
**Heldentat:** Aktion: Entferne deine Figur und platziere einen Heldenmarker. Zu Beginn deines nächsten Zuges erscheinst du auf einem freien Feld bis Reichweite 4 des Markers.

---

## Grisban der Durstige

**Archetyp:** Krieger | **Erweiterung:** Grundspiel

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 14 | 4 | Grau | 5 | 2 | 3 | 1 |

**Heldenfähigkeit:** Jedes Mal, wenn du Erschöpfung durch eine Rastenaktion zurückgewinnst, darfst du auch 1 Zustandskarte von dir ablegen.  
**Heldentat:** Verwende während deines Zuges: Führe 1 zusätzliche Angriffsaktion durch (zusätzlich zu den normalen 2 Aktionen).

---

## Syndrael

**Archetyp:** Krieger | **Erweiterung:** Grundspiel

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 4 | Grau | 4 | 3 | 2 | 2 |

**Heldenfähigkeit:** Wenn du dich in diesem Zug nicht bewegt hast, gewinne am Ende deines Zuges 2 Erschöpfung zurück.  
**Heldentat:** Verwende während deines Zuges: Wähle einen Helden bis Reichweite 3. Du und dieser Held führen sofort je eine Bewegungsaktion durch (zusätzlich zu den normalen 2 Aktionen).

---

## Die Höhle des Lindwurms / Lair of the Wyrm (2 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| High Mage Quellen | Magier |
| Reynhart the Worthy | Krieger |

---

## Hochmagier Quellen

**Archetyp:** Magier | **Erweiterung:** Die Höhle des Lindwurms

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 1 | 5 | 3 | 2 |

**Heldenfähigkeit:** Zu Beginn deines Zuges darfst du einen anderen Helden bis Reichweite 3 wählen. Hat der gewählte Held mindestens 1 Erschöpfungsmarker auf seinem Heldenbogen, gewinnst du 1 Erschöpfung zurück. Hat er Erschöpfungsmarker in Höhe seiner Ausdauer, gewinnst du 2 Erschöpfung zurück.  
**Heldentat:** Verwende zu Beginn deines Zuges, um deine Ausdauer für den Rest dieses Zuges um 4 zu erhöhen. Am Ende deines Zuges gewinnst du alle Erschöpfung zurück.

---

## Reynhart der Würdige

**Archetyp:** Krieger | **Erweiterung:** Die Höhle des Lindwurms

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 4 | Grau | 3 | 1 | 4 | 3 |

**Heldenfähigkeit:** Wenn du beim Angriffswurf ein X würfelst, darfst du 1 Erschöpfung erleiden, um 1 Angriffswürfel neu zu würfeln. Höchstens einmal pro Angriff.  
**Heldentat:** Verwende nach dem Würfeln eines X beim Angriffswurf, um alle Erschöpfung zurückzugewinnen und beliebige oder alle Würfel deines Angriffspools neu zu würfeln.

---

## Labyrinth des Verderbens / Labyrinth of Ruin (6 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Serena | Heiler |
| Ulma Grimstone | Heiler |
| Dezra the Vile | Magier |
| Logan Lashley | Späher |
| Raythen | Späher |
| Pathfinder Durik | Krieger |

---

## Serena

**Archetyp:** Heiler | **Erweiterung:** Labyrinth des Verderbens

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 8 | 6 | Braun | 1 | 3 | 5 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn du von einem Angriff als Ziel gewählt wirst, darf ein an dich angrenzender Held 1 Erschöpfung erleiden, um sich selbst als Ziel des Angriffs zu deklarieren. Reichweite und Sichtlinie werden weiterhin zu deinem Feld gemessen.  
**Heldentat:** Aktion: Teste Willenskraft und Wissen. Für jeden bestandenen Test gewinnt jeder Held bis Reichweite 3 von dir 3 Herzen und 1 Erschöpfung zurück.

---

## Ulma Grimstone

**Archetyp:** Heiler | **Erweiterung:** Labyrinth des Verderbens

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 8 | 5 | Grau | 2 | 4 | 3 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn ein Held bis Reichweite 3 von dir (einschließlich dir selbst) eine Suchkarte ziehen würde, darf er stattdessen Suchkarten aufdecken, bis er einen Trank findet. Er darf diese Karte nehmen und den Rest zurück ins Deck mischen.  
**Heldentat:** Verwende während deines Zuges, um eine deiner verdeckten Trank-Suchkarten offen umzudrehen. Außerdem darf jeder an dich angrenzende Held ebenfalls eine seiner verdeckten Trank-Suchkarten offen umzudrehen.

---

## Dezra die Grausame

**Archetyp:** Magier | **Erweiterung:** Labyrinth des Verderbens

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 8 | 4 | Grau | 2 | 4 | 2 | 3 |

**Heldenfähigkeit:** Zu Beginn deines Zuges darfst du für jede an dich angrenzende Monsterfigur 1 Herz oder 1 Erschöpfung zurückgewinnen.  
**Heldentat:** Verwende, wenn der Overlord eine an dich angrenzende Monsterfigur zur Aktivierung auswählt, bevor er Aktionen ausführt. Alle an dich angrenzenden Monster werden bewegungsunfähig gemacht.

---

## Logan Lashley

**Archetyp:** Späher | **Erweiterung:** Labyrinth des Verderbens

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 3 | 2 | 2 | 4 |

**Heldenfähigkeit:** Du kannst nicht bewegungsunfähig gemacht werden. Außerdem darfst du dich unmittelbar nach einem Angriff mit einer Exotischen Waffe 1 Feld bewegen.  
**Heldentat:** Verwende, nachdem einer deiner Angriffe mindestens 1 Herz verursacht hat (nach dem Würfeln der Verteidigungswürfel). Du darfst dich bis zu deiner Bewegungsweite bewegen und einen Angriff durchführen. Dies erfordert keine Aktion; der Angriff darf vor, nach oder während dieser Bewegung durchgeführt werden.

---

## Raythen

**Archetyp:** Späher | **Erweiterung:** Labyrinth des Verderbens

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 14 | 4 | Braun | 3 | 2 | 1 | 5 |

**Heldenfähigkeit:** Einmal pro Zug darfst du 1 Erschöpfung erleiden, damit 1 Held auf dem gleichen Kartenplättchen wie du einen Eigenschaftstest neu würfeln darf. Er darf für den erneuten Wurf deinen Eigenschaftswert verwenden.  
**Heldentat:** Verwende während deines Zuges, um einen Suchmarker zu durchsuchen, der an einen anderen Helden angrenzt. Dies ist zusätzlich zu deinen 2 Aktionen.

---

## Pfadfinder Durik

**Archetyp:** Krieger | **Erweiterung:** Labyrinth des Verderbens

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 10 | 4 | Grau | 3 | 2 | 2 | 4 |

**Heldenfähigkeit:** Während jeder deiner Bewegungsaktionen darfst du durch Felder mit Monstern ziehen, indem du 1 zusätzlichen Bewegungspunkt für jedes belegte Feld ausgibst.  
**Heldentat:** Verwende, wenn du ein Feld mit einem Monster verlässt, um sofort einen Angriff durchzuführen, der dieses Monster als Ziel hat. Dieser Angriff erfordert keine Aktion und erhält: Schub: Durchdringen 3

---

## Die Trollsümpfe / The Trollfens (2 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Augur Grisom | Heiler |
| Roganna the Shade | Späher |

---

## Augur Grisom

**Archetyp:** Heiler | **Erweiterung:** Die Trollsümpfe

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 12 | 5 | Grau | 4 | 2 | 3 | 2 |

**Heldenfähigkeit:** Jeder andere Held bis Reichweite 3 von dir erhält: Jedes Mal, wenn ein Monster bei einem Angriff, der dich als Ziel hat, verfehlt oder keinen Herzschaden verursacht, gewinnst du 1 Herz zurück.  
**Heldentat:** Verwende während deines Zuges. Jeder Held in deiner Sichtlinie gewinnt 2 Herzen und 2 Erschöpfung zurück.

---

## Roganna der Schatten

**Archetyp:** Späher | **Erweiterung:** Die Trollsümpfe

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 10 | 4 | Grau | 2 | 2 | 4 | 3 |

**Heldenfähigkeit:** Jeder deiner Angriffe, der ein Monster trifft, das an keinem anderen Helden angrenzt, erhält +1 Herz.  
**Heldentat:** Verwende am Ende deines Zuges. Bis zum Beginn deines nächsten Zuges darf jeder Held bis Reichweite 3 von dir nur dann von einem Angriff als Ziel gewählt werden, wenn das angreifende Monster an den Zielhelden angrenzt.

---

## Schatten von Nerekhall / Shadow of Nerekhall (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Rendiel | Heiler |
| Ravaella Lightfoot | Magier |
| Tinashi the Wanderer | Späher |
| Orkell the Swift | Krieger |

---

## Rendiel

**Archetyp:** Heiler | **Erweiterung:** Schatten von Nerekhall

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 10 | 4 | Grau | 2 | 3 | 5 | 1 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Helden wiederbelebst, gewinnst du 2 Herzen und 2 Erschöpfung zurück.  
**Heldentat:** Aktion: Belebe einen angrenzenden, kampfunfähigen Helden wieder. Anstatt 2 rote Kraftwürfel zu würfeln, gewinnt dieser Held alle Herzen und Erschöpfung zurück.

---

## Ravaella Leichtfuß

**Archetyp:** Magier | **Erweiterung:** Schatten von Nerekhall

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 8 | 5 | Schwarz | 1 | 4 | 2 | 4 |

> ✅ **Kartenscan-validiert 2026-06-12:** Bewegung war fälschlich als 5 erfasst,
> das Kartenbild zeigt eindeutig 4 (vom User gemeldet, per Bildanalyse bestätigt).

**Heldenfähigkeit:** Wenn du beim Würfeln der Verteidigungswürfel 1 oder mehr Leerfelder würfelst, füge 1 Schild zu deinen Verteidigungsergebnissen hinzu.  
**Heldentat:** Verwende, wenn du angegriffen wirst, nachdem du Verteidigungswürfel geworfen hast, um Wissen und Gespür zu testen. Für jeden bestandenen Test füge 3 Schilde zu deinen Verteidigungsergebnissen hinzu.

---

## Tinashi die Wanderin

**Archetyp:** Späher | **Erweiterung:** Schatten von Nerekhall

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 4 | Grau | 3 | 2 | 3 | 3 |

**Heldenfähigkeit:** Jedes Mal, wenn du ein Monster besiegst, gewinnst du 1 Erschöpfung zurück.  
**Heldentat:** Verwende während deines Zuges, um ein leeres Feld bis Reichweite 3 deiner Figur zu wählen. Entferne deine Figur vom Spielfeld und platziere sie auf dem gewählten Feld.

---

## Orkell der Flinke

**Archetyp:** Krieger | **Erweiterung:** Schatten von Nerekhall

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 10 | 5 | Braun | 4 | 1 | 2 | 4 |

**Heldenfähigkeit:** Jedes Mal, wenn du von einem Monster angegriffen wirst und mindestens 1 Herz erleidest, darfst du dich nach dem Angriff 1 Feld bewegen.  
**Heldentat:** Verwende während deines Zuges, während du kampfunfähig bist, um eine Aufstehenaktion durchzuführen. Dann darfst du entweder alle Herzen zurückgewinnen oder jedes an deine Figur angrenzende Monster 1 Feld bewegen. Du kannst in diesem Zug trotzdem 2 Aktionen durchführen.

---

## Schloss Rabenfels / Manor of Ravens (2 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Thaiden Mistpeak | Späher |
| Alys Raine | Krieger |

---

## Thaiden Nebelgipfel

**Archetyp:** Späher | **Erweiterung:** Schloss Rabenfels

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 5 | Grau | 3 | 1 | 2 | 5 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Angriff deklarierst, darfst du nach dem Würfeln der Würfel den Angriff abbrechen und sofort einen angrenzenden Suchmarker durchsuchen.  
**Heldentat:** Verwende, wenn ein Monster ein leeres, an dich angrenzendes Feld betritt. Dieses Monster wird bewegungsunfähig gemacht, und du bewegst dich sofort bis zu 3 Felder.

---

## Alys Raine

**Archetyp:** Krieger | **Erweiterung:** Schloss Rabenfels

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 4 | Grau | 3 | 4 | 3 | 1 |

**Heldenfähigkeit:** Jedes Mal, wenn ein an dich angrenzender Held durch einen Angriff 1 oder mehr Herzen erleidet, gewinnst du 1 Erschöpfung zurück.  
**Heldentat:** Verwende während des Zuges eines Spielers, um alle erschöpften Karten in deinem Spielbereich aufzufrischen und 2 Erschöpfung zurückzugewinnen.

---

## Schwur der Verbannten / Oath of the Outcast (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Elder Mok | Heiler |
| Shiver | Magier |
| Laurel of Bloodwood | Späher |
| Trenloe the Strong | Krieger |

---

## Ältester Mok

**Archetyp:** Heiler | **Erweiterung:** Schwur der Verbannten

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 2 | 3 | 4 | 2 |

**Heldenfähigkeit:** Einmal pro Zug, wenn ein anderer Held bis Reichweite 3 von dir 1 oder mehr Herzen oder Erschöpfung zurückgewinnt, darfst du 1 Herz oder 1 Erschöpfung zurückgewinnen.  
**Heldentat:** Verwende zu Beginn deines Zuges, um die Handkarten des Overlords anzusehen. Der Overlord wirft eine Karte deiner Wahl ab.

---

## Shiver

**Archetyp:** Magier | **Erweiterung:** Schwur der Verbannten

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 2 | 3 | 3 | 3 |

**Heldenfähigkeit:** Monster müssen 1 zusätzlichen Bewegungspunkt aufwenden, um ein an dich angrenzendes Feld zu betreten.  
**Heldentat:** Aktion: Jede an dich angrenzende Figur wird bewegungsunfähig gemacht.

---

## Laurel von Blutholz

**Archetyp:** Späher | **Erweiterung:** Schwur der Verbannten

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 8 | 5 | Grau | 2 | 3 | 2 | 4 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Fernkampfangriff durchführst und das Gesamtreichweitenergebnis die Entfernung zum Ziel überschreitet, erhält dieser Angriff +1 Herz.  
**Heldentat:** Aktion: Führe einen Angriff mit einer Fernkampfwaffe durch. Wenn du ein X würfelst, behandle es als Leerfeld. Dieser Angriff erhält +10 Reichweite und fügt 1 Schub zu den Ergebnissen hinzu.

---

## Trenloe der Starke

**Archetyp:** Krieger | **Erweiterung:** Schwur der Verbannten

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 12 | 3 | Grau | 4 | 1 | 4 | 2 |

**Heldenfähigkeit:** Jeder deiner Angriffe erhält +1 Herz. Jedes Mal, wenn du von einem Angriff betroffen wirst, füge 1 Schild zu deinen Verteidigungsergebnissen hinzu.  
**Heldentat:** Verwende, wenn du einen Angriff durchführst, bevor Würfel geworfen werden. Wähle und entferne 1 Verteidigungswürfel aus dem Verteidigungspool deines Ziels.

---

## Krone des Schicksals / Crown of Destiny (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Brother Gherinn | Heiler |
| Jaes the Exile | Magier |
| Lindel | Späher |
| Corbin | Krieger |

---

## Bruder Gherinn

**Archetyp:** Heiler | **Erweiterung:** Krone des Schicksals

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 12 | 4 | Grau | 1 | 4 | 4 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Angriff durchführst, darfst du nach dem Würfeln der Würfel 1 Herz erleiden, um +1 Herz zu den Ergebnissen hinzuzufügen. Höchstens einmal pro Angriff.  
**Heldentat:** Verwende, nachdem du ein Monster besiegt hast. Würfle 2 rote Kraftwürfel. Du und jeder Held bis Reichweite 3 von dir dürfen Herzen in Höhe der gewürfelten Herzen zurückgewinnen.

---

## Jaes der Verbannte

**Archetyp:** Magier | **Erweiterung:** Krone des Schicksals

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 3 | Grau | 3 | 4 | 2 | 2 |

**Heldenfähigkeit:** Deine Rüstung verliert alle Texte, die dich vom Ausrüsten von Runen abhalten. Erhöhe deine Ausdauer um 1 für jede ausgerüstete Rune.  
**Heldentat:** Aktion: Führe 1 Angriff mit einer Magiewaffe durch. Dieser Angriff erhält Durchdringen 3. Wenn du diesen Angriff mit einer Runenwaffe durchführst, füge 1 Schub zu den Ergebnissen hinzu.

---

## Lindel

**Archetyp:** Späher | **Erweiterung:** Krone des Schicksals

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 10 | 5 | Grau | 3 | 3 | 3 | 3 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Eigenschaftstest durchführst, würfle 2 graue Verteidigungswürfel anstatt 1 grauen und 1 schwarzen Verteidigungswürfel.  
**Heldentat:** Aktion: Führe einen Angriff durch. Nachdem du die Angriffswürfel geworfen hast, darfst du einen Angriffswürfel auf ein anderes Ergebnis deiner Wahl ändern.

---

## Corbin

**Archetyp:** Krieger | **Erweiterung:** Krone des Schicksals

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 12 | 5 | Grau | 5 | 2 | 2 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn du 2 oder mehr Herzen erleidest, verringere die erlittenen Herzen um 1.  
**Heldentat:** Verwende, wenn du angegriffen wirst, bevor du Verteidigungswürfel wirfst. Nachdem du Verteidigungswürfel geworfen hast, darfst du jeden Verteidigungswürfel auf ein anderes Ergebnis deiner Wahl ändern.

---

## Kreuzzug der Vergessenen / Crusade of the Forgotten (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Andira Runehand | Heiler |
| Astarra | Magier |
| Tetherys | Späher |
| Tahlia | Krieger |

---

## Andira Runenhand

**Archetyp:** Heiler | **Erweiterung:** Kreuzzug der Vergessenen

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 4 | Grau | 2 | 3 | 4 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn ein Held bis Reichweite 3 von dir 1 oder mehr Herzen von einem Angriff erleidet, erleidet die Figur, die den Angriff durchgeführt hat, 1 Herz.  
**Heldentat:** Aktion: Wähle 1 Helden bis Reichweite 3 von dir. Führe dann einen Angriff durch, der ein Monster bis Reichweite 3 von dir als Ziel hat. Der gewählte Held gewinnt Herzen in Höhe des Doppelten der Herzen zurück, die das Zielmonster durch diesen Angriff erleidet.

---

## Astarra

**Archetyp:** Magier | **Erweiterung:** Kreuzzug der Vergessenen

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 5 | Grau | 1 | 4 | 4 | 2 |

**Heldenfähigkeit:** Einmal pro Runde darfst du 1 Bewegungspunkt ausgeben, um deine Figur vom Spielfeld zu entfernen und sie auf einem leeren Feld neben einem Helden zu platzieren, der bis Reichweite 3 von dir ist.  
**Heldentat:** Verwende zu Beginn deines Zuges, um jede andere Figur bis Reichweite 3 von dir 1 Feld zu bewegen.

---

## Tetherys

**Archetyp:** Späher | **Erweiterung:** Kreuzzug der Vergessenen

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 3 | 2 | 1 | 5 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Angriff durchführst, darfst du deine Angriffswürfel würfeln, bevor du das Ziel deklarierst. Wenn nach der Deklaration des Ziels Angriffswürfel hinzugefügt werden, würfle diese Würfel im Schritt „Würfel werfen".  
**Heldentat:** Verwende nach dem Würfeln der Angriffswürfel, um 2 weitere gültige Ziele für diesen Angriff zu wählen. Jedes Ziel würfelt seine Verteidigungswürfel separat.

---

## Tahlia

**Archetyp:** Krieger | **Erweiterung:** Kreuzzug der Vergessenen

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 14 | 4 | Grau | 3 | 2 | 3 | 3 |

**Heldenfähigkeit:** Jedes Mal, wenn du ein Monster besiegst, erhältst du 2 Bewegungspunkte.  
**Heldentat:** Verwende, wenn ein Monster seine Aktivierung beginnt oder sich auf ein an deine Figur angrenzendes Feld bewegt. Führe sofort einen Angriff durch, der dieses Monster als Ziel hat. Nachdem der Angriff aufgelöst ist, wird die Aktivierung des Monsters fortgesetzt.

---

## Wächter von Deephall / Guardians of Deephall (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Sahla | Heiler |
| Silhouette | Späher |
| Lord Hawthorne | Krieger |
| Mordrog | Krieger |

---

## Sahla

**Archetyp:** Heiler | **Erweiterung:** Wächter von Deephall

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 2 | 3 | 3 | 3 |

**Heldenfähigkeit:** Zu Beginn deines Zuges darfst du Willenskraft testen. Wenn du bestehst, lege 1 Zustand von 1 Figur bis Reichweite 3 von dir ab. Wähle dann 1 Figur bis Reichweite 3 von dir, die diesen Zustand erhält.  
**Heldentat:** Verwende zu Beginn deines Zuges und wähle 1 Helden in deiner Sichtlinie. Bis zum Ende deines Zuges darfst du 1 der Fähigkeiten dieses Helden so verwenden, als wäre es deine eigene.

---

## Silhouette

**Archetyp:** Späher | **Erweiterung:** Wächter von Deephall

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 10 | 4 | Grau | 3 | 2 | 1 | 5 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Angriff durchführst und ein X würfelst, wähle 1 an dich angrenzendes Monster. Dieses Monster erleidet Herzen in Höhe von 1 plus der Anzahl deiner ausgerüsteten Waffen.  
**Heldentat:** Aktion: Du darfst dich mit der doppelten Bewegungsweite bewegen. Jedes Mal, wenn du während dieser Bewegung ein Feld mit einem Suchmarker betrittst, darfst du 1 Erschöpfung erleiden, um diesen Suchmarker zu durchsuchen.

---

## Lord Hawthorne

**Archetyp:** Krieger | **Erweiterung:** Wächter von Deephall

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 3 | Grau | 4 | 3 | 2 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Angriff mit einer Nahkampfwaffe durchführst, erhält dieser Angriff Reichweite.  
**Heldentat:** Aktion: Führe einen Angriff durch. Dann darfst du dich bis zu 2 Felder bewegen und einen weiteren Angriff gegen ein anderes Ziel durchführen.

---

## Mordrog

**Archetyp:** Krieger | **Erweiterung:** Wächter von Deephall

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 14 | 4 | Grau | 5 | 1 | 3 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn du 1 oder mehr Herzen erleidest, darfst du 1 Erschöpfung zurückgewinnen.  
**Heldentat:** Verwende, nachdem du einen Angriff durchgeführt hast, der das Ziel nicht besiegt. Führe einen zusätzlichen Angriff durch, verwende dasselbe Ziel. Dieser Angriff fügt 1 Schub zu den Ergebnissen hinzu.

---

## Prophezeiung eines neuen Anfangs / Visions of Dawn (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Ispher | Heiler |
| Master Thorn | Magier |
| Nara the Fang | Krieger |
| Sir Valadir | Krieger |

---

## Ispher

**Archetyp:** Heiler | **Erweiterung:** Prophezeiung eines neuen Anfangs

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 2 | 3 | 3 | 3 |

**Heldenfähigkeit:** Du kannst nicht vergiftet werden. Zu Beginn deines Zuges gewinnst du 2 Herzen zurück.  
**Heldentat:** Aktion: Wähle dich selbst oder einen angrenzenden Helden. Dieser Held gewinnt 8 Herzen zurück und legt alle Zustände ab.

---

## Meister Thorn

**Archetyp:** Magier | **Erweiterung:** Prophezeiung eines neuen Anfangs

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 8 | 4 | Grau | 1 | 5 | 3 | 2 |

**Heldenfähigkeit:** Jeder deiner Angriffe erhält: Schub: Nachdem dieser Angriff aufgelöst wurde, darfst du ein leeres Feld bis Reichweite 2 von dir wählen und deine Figur auf das gewählte Feld platzieren.  
**Heldentat:** Verwende, wenn du von einem Angriff betroffen wirst und 1 oder mehr Herzen erleidest. Verringere die erlittenen Herzen um bis zu 5 und erhalte eine gleiche Anzahl Bewegungspunkte.

---

## Nara die Reißzahn

**Archetyp:** Krieger | **Erweiterung:** Prophezeiung eines neuen Anfangs

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 10 | 4 | Grau | 4 | 1 | 2 | 4 |

**Heldenfähigkeit:** Einmal pro Runde, nachdem du ein Monster mit einer Nahkampfwaffe besiegt hast, bevor seine Figur vom Spielfeld entfernt wird, darfst du deine Figur auf einem beliebigen leeren Feld neben diesem Monster platzieren.  
**Heldentat:** Aktion: Wähle ein beliebiges leeres Feld bis Reichweite 3 deiner Figur. Entferne deine Figur vom Spielfeld und platziere sie auf dem gewählten Feld. Führe dann einen Angriff durch. Dieser Angriff erhält Durchdringen 2.

---

## Sir Valadir

**Archetyp:** Krieger | **Erweiterung:** Prophezeiung eines neuen Anfangs

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 4 | Grau | 3 | 3 | 4 | 1 |

**Heldenfähigkeit:** Einmal pro Zug darfst du nach dem Würfeln der Würfel 1 Erschöpfung erleiden, um 1 Schub zu deinem Angriffswurf hinzuzufügen.  
**Heldentat:** Aktion: Gewinne Erschöpfung bis zur Höhe deiner Ausdauer zurück. Führe dann einen Angriff durch. Dieser Angriff erhält: Schub: +3 Herzen

---

## Erwachen der Wildnis / Bonds of the Wild (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Challara | Magier |
| Lyssa | Magier |
| Ronan of the Wild | Späher |
| Vyrah the Falconer | Späher |

---

## Challara

**Archetyp:** Magier | **Erweiterung:** Erwachen der Wildnis

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 10 | 4 | Grau | 3 | 4 | 3 | 1 |

**Heldenfähigkeit:** Du hast den Vertrauten Hellflamme. Zu Beginn jeder Begegnung platziere Hellflamme auf dem nächsten leeren Feld zu dir.  
**Heldentat:** Aktion: Wenn Hellflamme nicht auf dem Spielfeld ist, platziere Hellflamme auf einem leeren Feld neben dir. Aktiviere Hellflamme dann sofort. Hellflamme wird in diesem Zug außerdem wie normal aktiviert.

---

## Lyssa

**Archetyp:** Magier | **Erweiterung:** Erwachen der Wildnis

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 8 | 5 | Grau | 2 | 3 | 2 | 4 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Angriff durchführst, der eine an dich angrenzende Figur als Ziel hat, darfst du vor dem Würfeln der Würfel 1 deiner Kraftwürfel durch 1 roten Kraftwürfel ersetzen.  
**Heldentat:** Verwende, nachdem du einen Angriff aufgelöst hast. Führe einen zusätzlichen Angriff durch, der eine an dich angrenzende Figur als Ziel hat. Ersetze 1 blauen Angriffswürfel durch 1 Kraftwürfel deiner Wahl, bevor die Würfel geworfen werden. Dieser Angriff ignoriert die Reichweite.

---

## Ronan von der Wildnis

**Archetyp:** Späher | **Erweiterung:** Erwachen der Wildnis

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 5 | Grau | 3 | 1 | 4 | 3 |

**Heldenfähigkeit:** Du hast den Vertrauten Pico. Beginne jede Begegnung mit dem Pico-Marker auf deinem Heldenbogen. Während deines Zuges darfst du 1 Suchmarker bis Reichweite 3 von dir wählen und Pico auf dessen Feld platzieren.  
**Heldentat:** Verwende zu Beginn des Zuges eines Helden, wenn sich der Pico-Marker auf deinem Heldenbogen befindet. Wähle 1 anderen Helden. Du und dieser Held dürfen sofort beliebige Laden-Gegenstandskarten, Reliquienkarten und Suchkarten tauschen.

---

## Vyrah der Falkner

**Archetyp:** Späher | **Erweiterung:** Erwachen der Wildnis

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 3 | 2 | 2 | 4 |

**Heldenfähigkeit:** Du hast den Vertrauten Skye. Zu Beginn deines Zuges, wenn Skye nicht auf dem Spielfeld ist, platziere ihn auf deinem Feld.  
**Heldentat:** Aktion: Skye führt einen Nahkampfangriff mit einem blauen, roten und gelben Würfel durch. Dieser Angriff erhält: Schub: Betäubung

---

## Kontrakt der Unbesiegten / Treaty of Champions (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Jonas the Kind | Heiler |
| Zyla | Magier |
| Grey Ker | Späher |
| Krutzbeck | Krieger |

---

## Jonas der Gütige

**Archetyp:** Heiler | **Erweiterung:** Kontrakt der Unbesiegten

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 2 | 3 | 4 | 2 |

**Heldenfähigkeit:** Jeder Held bis Reichweite 3 von dir, der in dieser Runde keinen Angriff durchgeführt hat, fügt 1 Schild zu jedem seiner Verteidigungswürfe hinzu.  
**Heldentat:** Aktion: Teste Willenskraft für jedes normale Monster bis Reichweite 3 von dir. Jedes Mal, wenn du bestehst, führe einen Angriff mit diesem Monster durch, der es selbst als Ziel hat.

---

## Zyla

**Archetyp:** Magier | **Erweiterung:** Kontrakt der Unbesiegten

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 8 | 5 | Grau | 1 | 4 | 3 | 3 |

**Heldenfähigkeit:** Du darfst versperrte Felder betreten und ignorierst die Effekte von Gelände beim Bewegen. Du kannst deine Bewegung nicht auf einem versperrten Feld beenden.  
**Heldentat:** Verwende, wenn ein Monster aktiviert wird. Entferne deine Figur vom Spielfeld und platziere einen Heldenmarker auf deinem Feld. Zu Beginn deines nächsten Zuges ersetze diesen Heldenmarker durch deine Figur.

---

## Grey Ker

**Archetyp:** Späher | **Erweiterung:** Kontrakt der Unbesiegten

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 5 | Grau | 3 | 2 | 3 | 4 |

**Heldenfähigkeit:** Nachdem du deine erste Aktion in jeder Runde durchgeführt hast, darfst du deinen Zug unterbrechen. Wenn du dies tust, setzt du deinen Zug fort, nachdem ein anderer Held seinen Zug in dieser Runde beendet hat.  
**Heldentat:** Verwende zu Beginn deines Zuges, um in diesem Zug 1 zusätzliche Aktion zu erhalten.

---

## Krutzbeck

**Archetyp:** Krieger | **Erweiterung:** Kontrakt der Unbesiegten

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 3 | 12 | 4 | Grau | 4 | 2 | 3 | 2 |

**Heldenfähigkeit:** Solange du oder ein an dich angrenzender Held 6 oder mehr Schadensmarker auf seinem Heldenbogen hat, erhalten alle deine Angriffe +2 Herzen.  
**Heldentat:** Verwende, wenn du einen Angriff durchführst, nach dem Würfeln der Würfel. Erleide 3 Herzen. Würfle dann 3 rote Kraftwürfel und ersetze die Ergebnisse deines Angriffswurfs durch die Ergebnisse der roten Kraftwürfel.

---

## Hüter des Geheimnisses / Stewards of the Secret (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Okaluk and Rakash | Heiler |
| Seer Kel | Magier |
| Tatianna | Späher |
| Nanok of the Blade | Krieger |

---

## Okaluk und Rakash

**Archetyp:** Heiler | **Erweiterung:** Hüter des Geheimnisses

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 2 | 8 | 3 | Grau | 3 | 2 | 3 | 3 |

**Heldenfähigkeit:** Zu Beginn deines Zuges erhältst du 4 Bewegungspunkte.  
**Heldentat:** Verwende während deines Zuges, auch wenn du kampfunfähig bist. Würfle 2 rote Kraftwürfel. Du und jeder kampfunfähige Held bis Reichweite 3 von dir gewinnt Herzen in Höhe der gewürfelten Herzen zurück.

---

## Seher Kel

**Archetyp:** Magier | **Erweiterung:** Hüter des Geheimnisses

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 1 | 4 | 2 | 4 |

**Heldenfähigkeit:** Figuren und Hindernisse blockieren deine Sichtlinie nicht. Türen blockieren deine Sichtlinie weiterhin wie normal.  
**Heldentat:** Verwende während deines Zuges, um dir die obersten 5 Karten des Overlord-Decks anzusehen. Lege 1 dieser Karten unter das Deck und mische die restlichen Karten zurück auf die oberste Position des Decks.

---

## Tatianna

**Archetyp:** Späher | **Erweiterung:** Hüter des Geheimnisses

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 5 | 12 | 4 | Grau | 2 | 2 | 2 | 5 |

**Heldenfähigkeit:** Jeder deiner Angriffe erhält +1 Reichweite. Jeder Fernkampfangriff, der dich als Ziel hat, benötigt 1 zusätzliche Reichweite.  
**Heldentat:** Verwende, wenn du einen Angriff durchführst, nach dem Würfeln der Würfel. Wähle 1 Verteidigungswürfel deines Ziels und ändere das Ergebnis dieses Würfels auf ein anderes Ergebnis deiner Wahl.

---

## Nanok der Klinge

**Archetyp:** Krieger | **Erweiterung:** Hüter des Geheimnisses

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 12 | 4 | Schwarz | 4 | 2 | 2 | 3 |

**Heldenfähigkeit:** Du kannst keine leichte oder schwere Rüstung ausrüsten. Einmal pro Zug darfst du 1 nicht-großes Monster neben dir wählen. Erleide 1 Herz und bewege dieses Monster 1 Feld.  
**Heldentat:** Verwende, nachdem ein anderer Held einen Angriff durchgeführt hat. Führe sofort einen Angriff mit einer Nahkampfwaffe durch, der 1 der gleichen Monster als Ziel hat. Dann darf dieser Held einen Angriff durchführen, der dasselbe Monster als Ziel hat.

---

## Scherben von Everdark / Shards of Everdark (4 Helden)

| Held | Archetyp (DE) |
|------|--------------|
| Arvel Worldwalker | Späher |
| Karnon | Krieger |
| One Fist | Krieger |
| Steelhorns | Krieger |

---

## Arvel Weltenwanderer

**Archetyp:** Späher | **Erweiterung:** Scherben von Everdark

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 3 | 3 | 3 | 3 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Eigenschaftstest nicht bestehst, darfst du 1 Erschöpfung zurückgewinnen. Einmal pro Runde, wenn du einen Eigenschaftstest nicht bestehst, darfst du diesen Test anstatt 1 Erschöpfung zurückzugewinnen neu würfeln.  
**Heldentat:** Verwende während deines Zuges. Lege bis zu 2 deiner Klassenkarten in dein Klassendeck zurück. Nimm dann beliebige Klassenkarten aus deinem Klassendeck im gleichen Erfahrungspunktwert.

---

## Karnon

**Archetyp:** Krieger | **Erweiterung:** Scherben von Everdark

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 14 | 3 | Grau | 6 | 1 | 2 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn ein an dich angrenzendes Monster besiegt wird, gewinnst du 1 Erschöpfung zurück.  
**Heldentat:** Verwende, wenn du einen Angriff mit einer Nahkampfwaffe durchführst, der ein normales Monster als Ziel hat, nach dem Würfeln der Würfel. Du darfst das Ergebnis jedes Angriffs- und Kraftwürfels auf ein anderes Ergebnis deiner Wahl ändern.

---

## Eine Faust

**Archetyp:** Krieger | **Erweiterung:** Scherben von Everdark

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 10 | 4 | Grau | 3 | 2 | 3 | 3 |

**Heldenfähigkeit:** Wenn 1 deiner Hände leer ist, füge jedem deiner Nahkampfangriffe 1 gelben Kraftwürfel hinzu.  
**Heldentat:** Verwende, wenn du besiegt wirst, um 1 Nahkampfangriff durchzuführen. Für jedes Monster, das du durch diese Heldentat besiegst, darfst du 1 weiteren Nahkampfangriff durchführen. Dann wirst du kampfunfähig.

---

## Stahlhörner

**Archetyp:** Krieger | **Erweiterung:** Scherben von Everdark

| Bewegung | LP | Ausdauer | Verteidigung | Stärke | Wissen | Willenskraft | Gespür |
|----------|----|----------|-------------|--------|--------|-------------|--------|
| 4 | 14 | 3 | Grau | 5 | 1 | 3 | 2 |

**Heldenfähigkeit:** Jedes Mal, wenn du einen Angriff durchführst, der eine Figur als Ziel hat, die zu Beginn deines Zuges NICHT an dich angrenzte, erhält dieser Angriff +1 Herz.  
**Heldentat:** Verwende während deines Zuges. Würfle 1 Kraftwürfel deiner Wahl. Du und jede an dich angrenzende Figur erleiden Herzen in Höhe der gewürfelten Herzen. Wenn du mindestens 1 Schub würfelst, darfst du jede betroffene Figur bis zu 1 Feld bewegen.

---


## Upgrade-Kit / Conversion Kit (1. Edition Helden – Auswahl)

48 Helden aus der 1. Edition können in der 2. Edition verwendet werden.

**Heiler:** Andira Runehand, Aurim, Brother Gherinn, Brother Glyr, Elder Mok, Ispher, Jonas the Kind, Okaluk and Rakash, Sahla  
**Magier:** Astarra, Challara, Jaes the Exile, Landrec the Wise, Lyssa, Mad Carthos, Master Thorn, Shiver, Truthseer Kel, Zyla  
**Späher:** Arvel Worldwalker, Bogran the Shadow, Grey Ker, Kirga, Laurel of Bloodwood, Lindel, Red Scorpion, Ronan of the Wild, Silhouette, Tatianna, Tetherys, Tobin Farslayer, Vyrah the Falconer  
**Krieger:** Corbin, Eliam, Hugo the Glorious, Karnon, Krutzbeck, Laughin Buldar, Lord Hawthorne, Mordrog, Nanok of the Blade, Nara the Fang, One Fist, Sir Valadir, Steelhorns, Tahlia, Trenloe the Strong, Varikas the Dead  

---

## Gesamtanzahl

| Quelle | Helden |
|--------|--------|
| Grundspiel | 8 |
| Die Höhle des Lindwurms | 2 |
| Labyrinth des Verderbens | 6 |
| Die Trollsümpfe | 2 |
| Schatten von Nerekhall | 4 |
| Schloss Rabenfels | 2 |
| Schwur der Verbannten | 4 |
| Krone des Schicksals | 4 |
| Kreuzzug der Vergessenen | 4 |
| Wächter von Deephall | 4 |
| Prophezeiung eines neuen Anfangs | 4 |
| Erwachen der Wildnis | 4 |
| Kontrakt der Unbesiegten | 4 |
| Hüter des Geheimnisses | 4 |
| Scherben von Everdark | 4 |
| **Gesamt (ohne Conversion Kit)** | **60** |
| **Gesamt (mit Conversion Kit)** | **~108** |

---

## Heldenklassen nach Archetyp

### Krieger-Klassen

| Klasse (EN) | Klasse (DE) | Erweiterung |
|-------------|-------------|-------------|
| Berserker | Berserker | Grundspiel |
| Knight | Ritter | Grundspiel |
| Champion | Kämpfer | Die Höhle des Lindwurms |
| Beastmaster | Tiermeister | Labyrinth des Verderbens |
| Marshal | Marschall | Schloss Rabenfels |
| Skirmisher | Plänkler | Schatten von Nerekhall |

### Heiler-Klassen

| Klasse (EN) | Klasse (DE) | Erweiterung |
|-------------|-------------|-------------|
| Disciple | Jünger | Grundspiel |
| Spiritspeaker | Geisterbeschwörer | Grundspiel |
| Prophet | Prophet | Die Trollsümpfe |
| Apothecary | Apotheker | Labyrinth des Verderbens |
| Bard | Barde | Schatten von Nerekhall |
| Soul Reaper | Seelenernte | Unsterbliche Legenden (Lost Legends) |

### Magier-Klassen

| Klasse (EN) | Klasse (DE) | Erweiterung |
|-------------|-------------|-------------|
| Necromancer | Totenbeschwörer | Grundspiel |
| Runemaster | Runenmeister | Grundspiel |
| Geomancer | Geomant | Die Höhle des Lindwurms |
| Hexer | Hexer | Labyrinth des Verderbens |
| Conjurer | Beschwörer | Schatten von Nerekhall |
| Elementalist | Elementalist | Unsterbliche Legenden (Lost Legends) |

### Späher-Klassen

| Klasse (EN) | Klasse (DE) | Erweiterung |
|-------------|-------------|-------------|
| Thief | Dieb | Grundspiel |
| Wildlander | Wildläufer | Grundspiel |
| Stalker | Jäger | Die Trollsümpfe |
| Treasure Hunter | Schatzjäger | Labyrinth des Verderbens |
| Bounty Hunter | Kopfgeldjäger | Schloss Rabenfels |
| Shadow Walker | Schattengeher | Schatten von Nerekhall |
