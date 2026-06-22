# Descent 2. Edition – Alle Monstergruppen

**Status:** Vollständige Spielwerte dokumentiert (Juni 2026)  
**Quelle:** github.com/any2cards/d2e, src/data/monsters.ts  
**Zuletzt aktualisiert:** 2026-06-13  
✅ Kartenscan-validiert 2026-06-13 (vollständiger Audit-Pass, 70+ Korrekturen)  
✅ Gruppengrößen 2026-06-13 von den Kartenrückseiten (`-back.png`) erfasst — alle 56 Gruppen  
✅ **Deutsche Original-Kartentexte (v1.3.1, 2026-06-22):** Alle Fähigkeits-/Energie-/Aktionstexte
aller 56 Monster wortgetreu von den deutschen Original-Karten neu erfasst (ersetzen die früheren
Community-Übersetzungen). Vollständige deutsche Kartenbasis in
[`de-karten/monster.md`](de-karten/monster.md). Kartenbegriffe vereinheitlicht: Verteidigungs-
Parenthese „(nach Verrechnung der Verteidigung)", Durchbohren „ignoriert [bis zu] X Schild des
Verteidigers / … auf den geworfenen Verteidigungswürfeln", Attribut-Symbole → Wort (Faust=Stärke,
Strahlen=Willenskraft, Buch=Wissen, Auge=Gespür). Bilder: `public/cards/de/monsters/<id>-act<1|2>[-back].webp`.

---

**Hinweis:** Monsterfiguren existieren in zwei Typen: Normal (helle Spielfigur) und Meister (dunkle Spielfigur mit verstärkten Werten). Würfelfarben: Grau, Schwarz, Braun, Weiß, Blau, Rot, Gelb, Grün.

**Gruppengrößen:** Jede Monstergruppe gibt an, wie viele Figuren je nach Spieleranzahl
(2 / 3 / 4 Helden) auf das Spielfeld kommen — angegeben als **Diener + Meister**
(normale + Meister-Figuren). Die Werte stehen auf der Kartenrückseite und wurden
am 2026-06-13 direkt aus den any2cards-`-back.png`-Bildern abgelesen. Beispiel:
„2 Sp. 1+1" = bei 2 Helden 1 Diener und 1 Meister. Große Monster (z. B. Elementar,
Ettin, Riese) haben kleinere Gruppen, Schwärme (z. B. Kobold) deutlich größere.

---

## Grundspiel (9 Monstergruppen)

| Englisch | Deutsch |
|----------|---------|
| Barghest | Barghest |
| Cave Spider | Höhlenspinne |
| Elemental | Elementar |
| Ettin | Ettin |
| Flesh Moulder | Fleischformer |
| Goblin Archer | Goblin-Bogenschütze |
| Merriod | Merriod |
| Shadow Dragon | Schattendrache |
| Zombie | Zombie |

---

## Barghest (Barghest)

**Erweiterung:** Grundspiel | **Merkmale:** Wildnis, Dunkel

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau | Blau, Rot |
| Meister | 4 | 6 | Grau | Blau, Rot |

**Normal – Energie:** +1 Herz  
**Normal – Aktion:** Geheul: Alle Helden innerhalb von 3 Feldern zu diesem Monster legen eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Erschöpfung.  
**Meister – Energie:** +2 Herzen  
**Meister – Fähigkeit:** Schemen: Wird dieses Monster von einem nicht benachbarten Helden angegriffen, darf es 1 zusätzlichen braunen Würfel zu seinem Verteidigungswurf hinzufügen.  
**Meister – Aktion:** Geheul: Alle Helden innerhalb von 3 Feldern zu diesem Monster legen eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Erschöpfung.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 6 | Schwarz | Blau, Rot |
| Meister | 4 | 8 | Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** +2 Herzen

---

## Elementar (Elemental)

**Erweiterung:** Grundspiel | **Merkmale:** Kalt, Heiß

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Schwarz | Blau, Rot |
| Meister | 4 | 6 | Schwarz | Blau, Rot |

**Normal – Aktionen:**
- Feuer: Führe einen Angriff aus, der alle zu diesem Monster benachbarten Figuren als Ziel hat. Jede Figur würfelt ihre Verteidigung separat.
- Erde: Jeder zu diesem Monster benachbarte Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, ist bewegungsunfähig.
- Wasser: Jeder zu diesem Monster benachbarte Held legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 2 Erschöpfung.
- Luft: Bis zum Beginn deines nächsten Zuges kann dieses Monster nur von Angriffen benachbarter Figuren betroffen werden.

**Meister – Aktionen:** (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 8 | Schwarz, Braun | Blau, Rot, Gelb |
| Meister | 4 | 10 | Schwarz, Braun | Blau, Rot, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Ettin (Ettin)

**Erweiterung:** Grundspiel | **Merkmale:** Gebirge, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Grau, Grau | Blau, Rot |
| Meister | 3 | 8 | Grau, Grau | Blau, Rot |

**Normal – Energie:** +2 Herzen  
**Normal – Fähigkeit:** Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.  
**Meister – Energie:** +3 Herzen  
**Meister – Fähigkeit:** Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.  
**Meister – Aktion:** Werfen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Misslingt sie, entferne den Helden von der Karte und platziere ihn auf einem beliebigen leeren Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Er gilt als hätte er dieses Feld betreten und erleidet dann 1 Herz.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 7 | Grau, Schwarz | Blau, Rot, Rot |
| Meister | 3 | 9 | Grau, Schwarz | Blau, Rot, Rot |

**Normal – Energie:** +1 Herz  
**Meister – Energie:** +2 Herzen

---

## Fleischformer (Flesh Moulder)

**Erweiterung:** Grundspiel | **Merkmale:** Verflucht, Zivilisiert

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau | Blau, Gelb |
| Meister | 4 | 5 | Grau | Blau, Gelb |

**Normal – Energie:** Flicken 1: Dieses Monster heilt 1 Herz. / +1 Herz  
**Meister – Energie:** Flicken 2: Dieses Monster heilt 2 Herzen. / +1 Herz  
**Meister – Aktion:** Heilen: Wähle ein Monster innerhalb von 3 Feldern zu diesem Monster und würfle 1 roten Machtwürfel. Das gewählte Monster heilt Herzen in Höhe der gewürfelten Herzen.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau, Braun | Blau, Gelb |
| Meister | 4 | 7 | Grau, Braun | Blau, Gelb, Gelb |

**Normal – Energie:** Flicken 2: Dieses Monster heilt 2 Herzen. / +1 Herz  
**Meister – Energie:** Flicken 3: Dieses Monster heilt 3 Herzen. / +2 Herzen

---

## Goblin-Bogenschütze (Goblin Archer)

**Erweiterung:** Grundspiel | **Merkmale:** Gebäude, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 2+1 · 3 Sp. 3+1 · 4 Sp. 4+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 2 | Grau | Blau, Gelb |
| Meister | 5 | 4 | Grau | Blau, Gelb |

**Normal – Energie:** +1 Reichweite / +1 Herz  
**Normal – Fähigkeiten:**
- Wuseln: Dieses Monster darf sich durch Felder mit Helden bewegen.
- Feigling: Dieses Monster darf keine Schübe für Fähigkeiten ausgeben, sofern es nicht innerhalb von 3 Feldern eines Master-Monsters oder Leutnants ist.

**Meister – Energie:** +2 Reichweite / +2 Herzen  
**Meister – Fähigkeit:** Wuseln: Dieses Monster darf sich durch Felder mit Helden bewegen.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 4 | Grau | Blau, Gelb |
| Meister | 5 | 6 | Grau | Blau, Gelb, Gelb |

**Normal – Energie:** +2 Reichweite / +2 Herzen  
**Meister – Energie:** +3 Reichweite / +2 Herzen

---

## Höhlenspinne (Cave Spider)

**Erweiterung:** Grundspiel | **Merkmale:** Wildnis, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 2+1 · 3 Sp. 3+1 · 4 Sp. 4+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 3 | Grau | Blau, Gelb |
| Meister | 4 | 5 | Grau | Blau, Gelb |

**Normal – Energie:** Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet. / +1 Herz  
**Meister – Energie:** Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet. / +2 Herzen  
**Meister – Fähigkeit:** Netz: Jeder zu diesem Monster benachbarte Held muss 1 Erschöpfung erleiden, um sein Feld zu verlassen – zusätzlich zu jeder anderen Erschöpfung für die Bewegung.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau | Blau, Gelb, Gelb |
| Meister | 4 | 7 | Grau | Blau, Gelb, Gelb |

**Normal – Energie:** Vergiften / +2 Herzen  
**Meister – Energie:** Vergiften / +2 Herzen / +1 Herz

---

## Merriod (Merriod)

**Erweiterung:** Grundspiel | **Merkmale:** Wildnis, Wasser

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Schwarz | Blau, Rot |
| Meister | 3 | 7 | Schwarz | Blau, Rot |

**Normal – Energie:** Immobilisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig. / +1 Herz  
**Normal – Fähigkeit:** Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.  
**Meister – Energie:** Immobilisieren / +2 Herzen  
**Meister – Fähigkeiten:**
- Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.
- Dreschflegel: Beim Angriff darf dieses Monster 2 verschiedene Helden als Ziel wählen. Es macht 1 Angriffswurf, jeder Held würfelt seine Verteidigung separat.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 7 | Grau, Grau | Blau, Rot, Gelb |
| Meister | 3 | 9 | Grau, Grau | Blau, Rot, Gelb |

**Normal – Energie:** Immobilisieren / +2 Herzen  
**Meister – Energie:** Immobilisieren / +3 Herzen

---

## Schattendrache (Shadow Dragon)

**Erweiterung:** Grundspiel | **Merkmale:** Dunkel, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 6 | Grau, Grau | Blau, Rot |
| Meister | 3 | 9 | Grau, Grau | Blau, Rot |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Schatten: Ein zu diesem Monster benachbarter Held, der einen Angriff ansagt, muss 1 Schub ausgeben, sonst gilt der Angriff als Fehlschlag.  
**Meister – Energie:** +2 Herzen / Feueratem: Beginnend mit dem Zielfeld ziehe einen Pfad aus 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat.  
**Meister – Fähigkeit:** Schatten (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 8 | Grau, Schwarz | Blau, Rot, Rot |
| Meister | 3 | 10 | Grau, Schwarz | Blau, Rot, Rot |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** +3 Herzen

---

## Zombie (Zombie)

**Erweiterung:** Grundspiel | **Merkmale:** Verflucht, Gebäude

**Gruppengröße (Diener + Meister):** 2 Sp. 2+1 · 3 Sp. 3+1 · 4 Sp. 4+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 3 | Braun | Blau, Gelb |
| Meister | 3 | 6 | Braun | Blau, Gelb |

**Normal – Energie:** Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht. / +1 Herz  
**Normal – Fähigkeit:** Schwerfällig: Dieses Monster darf pro Zug höchstens 1 Bewegungsaktion ausführen.  
**Meister – Energie:** Verseuchen / +1 Herz  
**Meister – Fähigkeit:** Schwerfällig (wie Normal)  
**Meister – Aktion:** Packen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Misslingt sie, ist er bewegungsunfähig.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Braun | Blau, Gelb |
| Meister | 3 | 9 | Braun | Blau, Rot, Gelb |

**Normal – Energie:** Verseuchen / +2 Herzen  
**Meister – Energie:** Verseuchen / +2 Herzen

---

## Die Höhle des Lindwurms / Lair of the Wyrm (2 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Fire Imps | Feuerimps |
| Hybrid Sentinel | Hybridwächter |

---

## Feuerimps (Fire Imps)

**Erweiterung:** Die Höhle des Lindwurms | **Merkmale:** Heiß, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 2+1 · 3 Sp. 3+1 · 4 Sp. 3+2

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 2 | Grau | Blau, Gelb |
| Meister | 5 | 4 | Grau | Blau, Gelb |

**Normal – Energie:** Verbrennen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), brennt das Ziel. / +1 Reichweite  
**Normal – Fähigkeit:** Flammenwesen: Dieses Monster ignoriert alle Effekte von Lava. Beendet es seinen Zug auf einem Lavafeld, heilt es 1 Herz. Außerdem brennt dieses Monster nie.  
**Meister – Energie:** Verbrennen / +1 Herz  
**Meister – Fähigkeiten:**
- Flammenwesen: Dieses Monster ignoriert alle Effekte von Lava. Beendet es seinen Zug auf einem Lavafeld, heilt es 1 Herz. Außerdem erleidet dieses Monster nie Herzen durch Brennen.
- Brennbar: Wird dieses Monster besiegt, erleidet jeder zu ihm benachbarte Held 1 Herz.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 4 | Grau | Blau, Gelb |
| Meister | 5 | 6 | Grau | Blau, Gelb, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Hybridwächter (Hybrid Sentinel)

**Erweiterung:** Die Höhle des Lindwurms | **Merkmale:** Gebirge, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Schwarz | Blau, Rot |
| Meister | 4 | 8 | Schwarz | Blau, Rot |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeiten:**
- Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.
- Schwächejäger: Jeder Angriff dieses Monsters auf einen Helden mit einem Stärke-Wert von 2 oder weniger erhält +1 Herz.

**Meister – Energie:** +1 Herz / Feueratem: Beginnend mit dem Zielfeld ziehe einen Pfad aus 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat.  
**Meister – Fähigkeiten:** Fliegen / Schwächejäger (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 6 | Schwarz, Braun | Blau, Rot |
| Meister | 4 | 9 | Grau, Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** +1 Herz / +1 Herz  
**Meister – Energie:** +2 Herzen

---

## Labyrinth des Verderbens / Labyrinth of Ruin (4 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Arachyura | Arachyura |
| Carrion Drake | Aasdrake |
| Goblin Witcher | Goblin-Hexer |
| Volucrix Reaver | Volucrix-Räuber |

---

## Aasdrake (Carrion Drake)

**Erweiterung:** Labyrinth des Verderbens | **Merkmale:** Wasser, Dunkel

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 6 | Grau | Blau, Gelb |
| Meister | 5 | 8 | Grau | Blau, Gelb |

**Normal – Energie:** Verseuchen / +1 Herz  
**Normal – Fähigkeit:** Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.  
**Meister – Energie:** Verseuchen / +2 Herzen  
**Meister – Fähigkeiten:**
- Fliegen (wie Normal)
- Verpestet: Würde ein zu diesem Monster benachbarter Held eine Vergiftet- oder Verseucht-Zustandskarte ablegen, behält er die Karte stattdessen.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 7 | Grau, Braun | Blau, Gelb, Gelb |
| Meister | 5 | 10 | Grau, Grau | Blau, Gelb, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Arachyura (Arachyura)

**Erweiterung:** Labyrinth des Verderbens | **Merkmale:** Wildnis, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Grau, Braun | Blau, Rot, Grün |
| Meister | 3 | 7 | Grau, Braun | Blau, Rot, Grün |

**Normal – Energie:** Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.  
**Normal – Aktion:** Zangenangriff: Führe einen Angriff auf bis zu 2 zu diesem Monster benachbarte Helden aus. Es wird 1 Angriffswurf gemacht, jeder Held würfelt seine Verteidigung separat. Jedes Ziel, das mindestens 1 Herz erleidet (nach dem Verteidigungswurf), ist bewegungsunfähig.  
**Meister – Energie:** Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.  
**Meister – Fähigkeit:** Nachhallender Fluch: Wird dieses Monster besiegt, legt jeder benachbarte Held eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, ist verflucht.  
**Meister – Aktion:** Zangenangriff (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 7 | Schwarz | Blau, Rot, Grün |
| Meister | 3 | 9 | Schwarz | Blau, Rot, Grün |

**Normal – Energie:** Durchbohren 2  
**Meister – Energie:** Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.

---

## Goblin-Hexer (Goblin Witcher)

**Erweiterung:** Labyrinth des Verderbens | **Merkmale:** Gebäude, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 3 | Grau | Blau, Gelb |
| Meister | 4 | 5 | Grau | Blau, Gelb |

**Normal – Energie:** Verfluchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verflucht. / +1 Reichweite  
**Meister – Energie:** Verfluchen / +2 Reichweite  
**Meister – Aktion:** Verhexen: Bewege jeden benachbarten verfluchten Helden bis zu 2 Felder in eine Richtung deiner Wahl.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 6 | Grau | Blau, Gelb |
| Meister | 4 | 8 | Grau | Blau, Gelb, Gelb |

**Normal – Energie:** Verfluchen / +2 Reichweite / +1 Herz  
**Meister – Energie:** Verfluchen / +2 Reichweite / +2 Herzen

---

## Volucrix-Räuber (Volucrix Reaver)

**Erweiterung:** Labyrinth des Verderbens | **Merkmale:** Gebäude, Gebirge

**Gruppengröße (Diener + Meister):** 2 Sp. 2+0 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 3 | Grau | Blau, Gelb |
| Meister | 4 | 5 | Grau | Blau, Gelb |

**Normal – Energie:** Durchbohren 2  
**Normal – Aktion:** Scharmützel: Dieses Monster darf sich 3 Felder bewegen und dann einen Angriff ausführen.  
**Meister – Energie:** Durchbohren 2 / +1 Herz  
**Meister – Fähigkeit:** Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.  
**Meister – Aktion:** Scharmützel (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau, Braun | Blau, Rot |
| Meister | 4 | 6 | Grau, Braun | Blau, Rot |

**Normal – Energie:** Durchbohren 2  
**Meister – Energie:** Durchbohren 3 / +2 Herzen

---

## Die Trollsümpfe / The Trollfens (2 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Harpy | Harpyie |
| Plague Worm | Seuchenwurm |

---

## Harpyie (Harpy)

**Erweiterung:** Die Trollsümpfe | **Merkmale:** Wildnis, Gebirge

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 3 | Grau | Blau, Grün |
| Meister | 5 | 5 | Grau | Blau, Rot |

**Normal – Energie:** Schwarm: Dieses Monster verursacht +1 Herz für jedes andere Monster, das an das Ziel angrenzt.  
**Normal – Fähigkeit:** Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.  
**Meister – Energie:** Schwarm (wie Normal)  
**Meister – Fähigkeit:** Fliegen (wie Normal)  
**Meister – Aktion:** Schwarmruf: Jedes Minion-Monster dieser Monstergruppe innerhalb von 5 Feldern zu diesem Monster darf sich sofort 2 Felder bewegen.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 4 | Grau | Blau, Gelb, Grün |
| Meister | 5 | 6 | Grau | Blau, Rot, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Seuchenwurm (Plague Worm)

**Erweiterung:** Die Trollsümpfe | **Merkmale:** Wasser, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 2 | 5 | Grau, Braun | Blau, Rot |
| Meister | 2 | 7 | Grau, Braun | Blau, Rot |

**Normal – Energie:** Schwächen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel geschwächt. / +1 Herz  
**Normal – Aktion:** Graben: Entferne diese Figur von der Karte und platziere sie auf einem besetzten Feld bis zu 3 Felder entfernt. Jede Figur auf dem Zielfeld wird auf das nächstgelegene leere Feld deiner Wahl bewegt und erleidet 1 Erschöpfung. Höchstens 1× pro Monster pro Zug.  
**Meister – Energie:** Schwächen / +2 Herzen  
**Meister – Fähigkeit:** Pestilenz: Jeder zu diesem Monster benachbarte Held legt zu Beginn seines Zuges eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, ist verseucht.  
**Meister – Aktion:** Graben (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 2 | 6 | Grau, Grau | Blau, Rot, Grün |
| Meister | 2 | 9 | Grau, Grau | Blau, Rot, Grün |

**Normal – Energie:** Schwächen / +2 Herzen  
**Meister – Energie:** Schwächen / +3 Herzen

---

## Schloss Rabenfels / Manor of Ravens (2 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Bandit | Bandit |
| Wraith | Wraith |

---

## Bandit (Bandit)

**Erweiterung:** Schloss Rabenfels | **Merkmale:** Wildnis, Gebäude

**Gruppengröße (Diener + Meister):** 2 Sp. 2+1 · 3 Sp. 3+1 · 4 Sp. 4+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Braun | Blau, Rot |
| Meister | 4 | 5 | Grau | Blau, Gelb |

**Normal – Energie:** Vergiften / +1 Herz  
**Normal – Aktion:** Plündern: Führe einen Angriff auf einen benachbarten Helden aus. Wird dieser Held durch den Angriff kampfunfähig, wähle 1 seiner Suchkarten und mische sie in den Suchstapel.  
**Meister – Energie:** Schwarzes Gift: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verdammt und vergiftet. / +2 Herzen  
**Meister – Aktion:** Plündern (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 6 | Grau | Blau, Rot |
| Meister | 4 | 7 | Schwarz | Blau, Gelb, Gelb |

**Normal – Energie:** Vergiften / +2 Herzen  
**Meister – Energie:** Schwarzes Gift / +2 Herzen

---

## Wraith (Wraith)

**Erweiterung:** Schloss Rabenfels | **Merkmale:** Zivilisiert, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau | Blau, Gelb |
| Meister | 4 | 7 | Grau | Blau, Gelb |

**Normal – Energie:** Verdammen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verdammt. / +1 Herz  
**Normal – Aktion:** Todesschrei: Wähle 1 Helden innerhalb von 3 Feldern zu diesem Monster. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, ist er verdammt oder erleidet 1 Herz (deine Wahl). Höchstens 1× pro Runde.  
**Meister – Energie:** Verdammen / +2 Herzen  
**Meister – Fähigkeit:** Schnitter: Wird ein Held innerhalb von 5 Feldern zu diesem Monster kampfunfähig, darf sich dieses Monster sofort bis zu seiner Bewegung weit bewegen und dann einen Angriff ausführen. Höchstens 1× pro Runde.  
**Meister – Aktion:** Todesschrei (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 6 | Schwarz | Blau, Gelb |
| Meister | 5 | 8 | Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** Verdammen / +2 Herzen  
**Meister – Energie:** Verdammen / +3 Herzen

---

## Schatten von Nerekhall / Shadow of Nerekhall (4 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Changeling | Wechselbalg |
| Ironbound | Eisengebundener |
| Rat Swarm | Rattenschwarm |
| Ynfernael Hulk | Ynfernael-Koloss |

---

## Eisengebundener (Ironbound)

**Erweiterung:** Schatten von Nerekhall | **Merkmale:** Zivilisiert, Gebäude

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 2 | 8 | Grau, Grau | Blau, Rot |
| Meister | 2 | 10 | Grau, Grau | Blau, Rot |

**Normal – Energie:** +2 Herzen  
**Normal – Fähigkeiten:**
- Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.
- Eisenhaut: Dieses Monster ist immun gegen Durchbohren und gegen alle Zustände.
- Beschützen: Jedes Mal, wenn eine Figur in der Sichtlinie dieses Monsters einen Angriff auf eine zu diesem Monster benachbarte Figur ausführt, darf dieses Monster vor dem Würfeln 1 Herz erleiden, um Ziel des Angriffs zu werden. Reichweite und Sichtlinie werden weiterhin zum ursprünglichen Ziel gemessen.

**Meister – Energie:** +3 Herzen  
**Meister – Fähigkeiten:** Reichweite / Eisenhaut / Beschützen (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 2 | 10 | Grau, Schwarz | Blau, Rot, Grün |
| Meister | 2 | 12 | Grau, Schwarz | Blau, Rot, Grün |

*(Fähigkeiten wie Akt 1)*

---

## Rattenschwarm (Rat Swarm)

**Erweiterung:** Schatten von Nerekhall | **Merkmale:** Gebäude, Dunkel

**Gruppengröße (Diener + Meister):** 2 Sp. 2+0 · 3 Sp. 2+1 · 4 Sp. 3+1

> ✅ **Kartenscan-validiert 2026-06-12** (any2cards `sn-rat-swarm`, Akt 1+2,
> Vorder- und Rückseite): Akt-1-Meister-Verteidigung ist **Braun** (vorher
> fälschlich Grau). Gefräßig gibt laut Karte **+1 Energie** zum Angriffsergebnis,
> nicht +1 Herz. Alle übrigen Werte bestätigt.

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 4 | Braun | Grün |
| Meister | 3 | 5 | Braun | Grün |

**Normal – Energie:** Festmahl: Dieser Angriff erhält +X Herz, wobei X der verbleibenden Lebenspunkte dieses Monsters entspricht.  
**Normal – Aktionen:**
- Verschmelzen: Wähle 1 zu diesem Monster benachbartes Monster derselben Gruppe. Dieses Monster erleidet Herzen in Höhe seiner verbleibenden Lebenspunkte, das gewählte Monster heilt eine entsprechende Anzahl Herzen.
- Zerfleischen: Wähle einen zu diesem Monster benachbarten Helden, der eine Stärke-Probe ablegt. Misslingt sie, blutet er.

**Meister – Energie:** Festmahl (wie Normal)  
**Meister – Fähigkeit:** Gefräßig: Greift dieses Monster einen blutenden Helden an, fügt es seinen Angriffsergebnissen 1 Energie hinzu.  
**Meister – Aktionen:** Verschmelzen / Zerfleischen (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Grau | Grün |
| Meister | 3 | 6 | Grau | Grün |

*(Fähigkeiten wie Akt 1)*

---

## Wechselbalg (Changeling)

**Erweiterung:** Schatten von Nerekhall | **Merkmale:** Zivilisiert, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau, Braun | Blau, Rot |
| Meister | 4 | 6 | Grau, Braun | Blau, Rot |

**Normal – Energie:** Verdorren: Das Ziel erleidet 1 Erschöpfung. / Bluten: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), blutet das Ziel.  
**Normal – Aktion:** Flüstern: Jeder zu diesem Monster benachbarte Held legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, bewegt sich 1 Feld in eine Richtung deiner Wahl.  
**Meister – Energie:** Verdorren / Bluten (wie Normal)  
**Meister – Fähigkeit:** Schauriges Gelächter: Jeder Held innerhalb von 3 Feldern zu diesem Monster wendet -1 auf seine Stärke, sein Wissen, seine Willenskraft und sein Gespür an (Minimum 1).  
**Meister – Aktion:** Flüstern (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 6 | Schwarz, Braun | Blau, Rot |
| Meister | 4 | 8 | Schwarz, Braun | Blau, Rot, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Ynfernael-Koloss (Ynfernael Hulk)

**Erweiterung:** Schatten von Nerekhall | **Merkmale:** Verflucht, Heiß

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 8 | Grau | Blau, Rot |
| Meister | 3 | 9 | Grau | Blau, Rot |

**Normal – Energie:** Rückstoß: Entferne das Ziel von der Karte und platziere es auf einem beliebigen leeren Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Es gilt als hätte es dieses Feld betreten.  
**Normal – Aktion:** Blutrausch: Dieses Monster erleidet 1 Herz und erhält 5 Bewegungspunkte. Höchstens 1× pro Zug.  
**Meister – Energie:** Rückstoß / Ansturm: War dieses Monster zu Beginn seiner Aktivierung nicht zum Ziel benachbart, erhält dieser Angriff +3 Herzen.  
**Meister – Aktion:** Blutrausch (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 9 | Grau | Blau, Rot, Gelb |
| Meister | 3 | 10 | Schwarz | Blau, Rot, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Schwur der Verbannten / Oath of the Outcast (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Bane Spider | Fluchspinne |
| Beastman | Tiermensch |
| Razorwing | Klingenschwinge |

---

## Fluchspinne (Bane Spider)

**Erweiterung:** Schwur der Verbannten | **Merkmale:** Dunkel, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau | Blau, Rot |
| Meister | 4 | 7 | Grau | Blau, Rot |

**Normal – Energie:** Vergiften / Durchbohren 1  
**Meister – Energie:** Vergiften / Durchbohren 2  
**Meister – Aktion:** Einspinnen: Jeder zu diesem Monster benachbarte Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, ist bewegungsunfähig.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 6 | Grau, Braun | Blau, Rot |
| Meister | 4 | 9 | Grau, Braun | Blau, Rot, Gelb |

**Normal – Energie:** Vergiften / Durchbohren 2  
**Meister – Energie:** Vergiften / Durchbohren 3

---

## Klingenschwinge (Razorwing)

**Erweiterung:** Schwur der Verbannten | **Merkmale:** Wildnis, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 2+1 · 3 Sp. 3+1 · 4 Sp. 4+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 4 | Braun | Blau, Gelb |
| Meister | 6 | 6 | Braun | Blau, Gelb |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Fliegen  
**Meister – Energie:** Betäuben: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel betäubt. / +1 Herz  
**Meister – Fähigkeit:** Fliegen (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 7 | Braun | Blau, Gelb |
| Meister | 6 | 9 | Braun | Blau, Gelb, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Tiermensch (Beastman)

**Erweiterung:** Schwur der Verbannten | **Merkmale:** Gebirge, Wildnis

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau | Blau, Gelb |
| Meister | 4 | 5 | Grau | Blau, Rot |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.  
**Meister – Energie:** +2 Herzen  
**Meister – Fähigkeiten:**
- Wüten (wie Normal)
- Befehl: Jedes Minion-Monster innerhalb von 3 Feldern zu diesem Monster darf bei jedem seiner Angriffe 1 Würfel neu würfeln. Jedes Minion kann pro Angriff nur von 1 Monster mit Befehl profitieren.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 5 | Grau | Blau, Rot |
| Meister | 5 | 6 | Grau | Blau, Rot, Gelb |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** +2 Herzen

*(Fähigkeiten wie Akt 1)*

---

## Krone des Schicksals / Crown of Destiny (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Chaos Beast | Chaosbiest |
| Giant | Riese |
| Lava Beetle | Lavakäfer |

---

## Chaosbiest (Chaos Beast)

**Erweiterung:** Krone des Schicksals | **Merkmale:** Dunkel, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Grau | (variabel) |
| Meister | 3 | 6 | Grau | (variabel) |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Wandeln: Wenn dieses Monster angreift, verwendet es die Würfel einer Figur (Wahl des Overlords) in seiner Sichtlinie. Wird ein Held gewählt, darf der Overlord wählen, welche der ausgerüsteten Waffen des Helden verwendet wird. Das Monster kann keine anderen Fähigkeiten der Figur nutzen.  
**Meister – Energie:** +1 Herz  
**Meister – Fähigkeiten:**
- Wandeln (wie Normal)
- Zauberei 2: Nach einem Angriffswurf darf dieses Monster bis zu 2 Reichweite in Herzen oder bis zu 2 Herzen in Reichweite umwandeln.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 7 | Grau | (variabel) |
| Meister | 3 | 10 | Grau | (variabel) |

**Normal – Energie:** +1 Herz  
**Meister – Energie:** +1 Herz  
**Meister – Fähigkeiten:**
- Wandeln (wie Normal)
- Zauberei 3: Nach einem Angriffswurf darf dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.

---

## Lavakäfer (Lava Beetle)

**Erweiterung:** Krone des Schicksals | **Merkmale:** Heiß, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 3 | Grau | Blau, Rot |
| Meister | 3 | 5 | Grau | Blau, Rot |

**Normal – Energie:** Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind. / +1 Herz  
**Meister – Energie:** +2 Herzen  
**Meister – Fähigkeit:** Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Grau | Blau, Rot |
| Meister | 3 | 7 | Grau | Blau, Rot, Gelb |

**Normal – Energie:** Druckwelle / +2 Herzen  
**Meister – Energie:** +2 Herzen / +1 Herz  
**Meister – Fähigkeit:** Druckwelle (wie Akt 1)

---

## Riese (Giant)

**Erweiterung:** Krone des Schicksals | **Merkmale:** Gebirge, Wildnis

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 10 | Schwarz | Blau, Rot |
| Meister | 3 | 12 | Schwarz | Blau, Rot |

**Normal – Energie:** Betäuben  
**Normal – Fähigkeit:** Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.  
**Meister – Energie:** Betäuben  
**Meister – Fähigkeit:** Reichweite (wie Normal)  
**Meister – Aktion:** Rundumschlag: Führe einen Angriff aus. Dieser Angriff betrifft jede andere Figur innerhalb von 2 Feldern und in Sichtlinie dieses Monsters. Jede Figur würfelt ihre Verteidigung separat.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 12 | Schwarz | Blau, Rot, Gelb |
| Meister | 3 | 15 | Schwarz | Blau, Rot, Rot |

*(Fähigkeiten wie Akt 1)*

---

## Kreuzzug der Vergessenen / Crusade of the Forgotten (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Golem | Golem |
| Medusa | Medusa |
| Sorcerer | Zauberer |

---

## Golem (Golem)

**Erweiterung:** Kreuzzug der Vergessenen | **Merkmale:** Gebirge, Gebäude

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 8 | Schwarz | Blau, Rot |
| Meister | 3 | 10 | Schwarz | Blau, Rot |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Eisenhaut: Dieses Monster ist immun gegen Durchbohren und gegen alle Zustände.  
**Meister – Energie:** +2 Herzen  
**Meister – Fähigkeiten:**
- Eisenhaut (wie Normal)
- Unverrückbar: Dieses Monster darf jeden Spieleffekt ignorieren, der es zur Bewegung zwingen würde.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 10 | Grau, Schwarz | Blau, Rot, Rot |
| Meister | 3 | 12 | Grau, Schwarz | Blau, Rot, Rot |

*(Fähigkeiten wie Akt 1)*

---

## Medusa (Medusa)

**Erweiterung:** Kreuzzug der Vergessenen | **Merkmale:** Verflucht, Gebäude

**Gruppengröße (Diener + Meister):** 2 Sp. 2+0 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau | Blau, Gelb |
| Meister | 4 | 6 | Grau | Blau, Gelb |

**Normal – Energie:** Immobilisieren / Vergiften  
**Meister – Energie:** Immobilisieren / Vergiften / Betäuben

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 6 | Grau, Braun | Blau, Gelb, Gelb |
| Meister | 4 | 9 | Grau, Braun | Blau, Gelb, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Zauberer (Sorcerer)

**Erweiterung:** Kreuzzug der Vergessenen | **Merkmale:** Zivilisiert, Gebäude

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 3 | Grau | Blau, Gelb |
| Meister | 4 | 5 | Grau | Blau, Gelb |

**Normal – Fähigkeit:** Zauberei 2: Nach einem Angriffswurf darf dieses Monster bis zu 2 Reichweite in Herzen oder bis zu 2 Herzen in Reichweite umwandeln.  
**Normal – Aktion:** Beschwören: Wähle ein Minion-Monster innerhalb von 3 Feldern zu diesem Monster. Platziere dieses Minion-Monster auf einem leeren Feld benachbart zu diesem Monster.  
**Meister – Fähigkeiten:**
- Zauberei 3: Nach einem Angriffswurf darf dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.
- Todeswunsch: Würde dieses Master-Monster besiegt, darf der Overlord 1 Minion-Monster derselben Gruppe stattdessen besiegen lassen. Tut er das, heilt dieses Master-Monster alle Herzen.

**Meister – Aktion:** Beschwören (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau | Blau, Rot |
| Meister | 4 | 8 | Grau | Blau, Rot |

*(Fähigkeiten wie Akt 1)*

---

## Wächter von Deephall / Guardians of Deephall (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Crypt Dragon | Kryptendrache |
| Dark Priest | Dunkelpriester |
| Wendigo | Wendigo |

---

## Dunkelpriester (Dark Priest)

**Erweiterung:** Wächter von Deephall | **Merkmale:** Zivilisiert, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Braun | Blau, Gelb |
| Meister | 4 | 6 | Braun | Blau, Gelb |

**Normal – Energie:** +1 Herz  
**Normal – Aktion:** Dunkles Gebet: Wähle 1 Helden innerhalb von 5 Feldern zu diesem Monster. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, erleidet er 1 Erschöpfung.  
**Meister – Energie:** +1 Herz  
**Meister – Aktionen:**
- Dunkles Gebet (wie Normal)
- Heilen: Wähle ein Monster innerhalb von 3 Feldern zu diesem Monster und würfle 1 roten Machtwürfel. Dieses Monster heilt Herzen in Höhe der gewürfelten Herzen.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 7 | Braun | Blau, Gelb |
| Meister | 4 | 9 | Braun | Blau, Gelb, Gelb |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** +2 Herzen  
**Meister – Fähigkeit:** Schreckenerregend: Jeder Held, der zu 1 oder mehr Monstern mit Schreckenerregend benachbart ist, wendet -1 auf seine Willenskraft an (Minimum 1).

---

## Kryptendrache (Crypt Dragon)

**Erweiterung:** Wächter von Deephall | **Merkmale:** Dunkel, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Grau, Grau | Blau, Gelb |
| Meister | 3 | 7 | Grau, Grau | Blau, Gelb |

**Normal – Energie:** Druckwelle / +2 Herzen  
**Meister – Energie:** Druckwelle / +2 Herzen  
**Meister – Aktion:** Furcht einflößen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, bewegt er sich 2 Felder direkt von diesem Monster weg und ist bewegungsunfähig.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 7 | Grau, Schwarz | Blau, Rot, Gelb |
| Meister | 3 | 10 | Grau, Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** Druckwelle / +2 Herzen  
**Normal – Fähigkeit:** Schreckenerregend: Jeder Held, der zu 1 oder mehr Monstern mit Schreckenerregend benachbart ist, wendet -1 auf seine Willenskraft an (Minimum 1).  
**Meister – Energie:** Druckwelle / +2 Herzen  
**Meister – Fähigkeit:** Schreckenerregend (wie Normal)  
**Meister – Aktion:** Furcht einflößen (wie Akt 1)

---

## Wendigo (Wendigo)

**Erweiterung:** Wächter von Deephall | **Merkmale:** Kalt, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau | Blau, Rot |
| Meister | 4 | 7 | Grau | Blau, Rot |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeiten:**
- Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.
- Heimlich: Jeder Angriff auf dieses Monster muss 3 zusätzliche Reichweite über die normalerweise nötige hinaus erzielen, sonst ist der Angriff ein Fehlschlag.

**Meister – Energie:** +1 Herz  
**Meister – Fähigkeiten:**
- Wüten / Heimlich (wie Normal)
- Eisig: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet er 1 Erschöpfung.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 7 | Grau | Blau, Rot |
| Meister | 4 | 10 | Grau | Blau, Rot, Gelb |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** +2 Herzen

---

## Prophezeiung eines neuen Anfangs / Visions of Dawn (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Manticore | Manticore |
| Ogre | Oger |
| Troll | Troll |

---

## Manticore (Manticore)

**Erweiterung:** Prophezeiung eines neuen Anfangs | **Merkmale:** Wildnis, Dunkel

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau | Blau, Gelb |
| Meister | 4 | 7 | Grau | Blau, Gelb |

**Normal – Energie:** Durchbohren 2 / +1 Reichweite  
**Normal – Fähigkeit:** Wüten  
**Meister – Energie:** Durchbohren 3 / Vergiften / +1 Reichweite  
**Meister – Fähigkeit:** Wüten (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 7 | Grau | Blau, Gelb, Gelb |
| Meister | 4 | 9 | Grau | Blau, Gelb, Gelb |

**Normal – Energie:** Durchbohren 3 / +2 Reichweite  
**Meister – Energie:** Durchbohren 4 / Vergiften / +2 Reichweite

---

## Oger (Ogre)

**Erweiterung:** Prophezeiung eines neuen Anfangs | **Merkmale:** Gebäude, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 6 | Grau | Blau, Gelb |
| Meister | 3 | 9 | Grau | Blau, Rot |

**Normal – Energie:** Rückstoß / +3 Herzen  
**Meister – Energie:** Rückstoß / +3 Herzen  
**Meister – Fähigkeit:** Fleischhändler: Jedes Mal, wenn ein Held, dessen Heldenmarker nicht auf dieser Karte liegt, 1 oder mehr Herzen durch einen Angriff dieses Monsters erleidet, lege 1 seiner Heldenmarker auf diese Karte. Für jeden Heldenmarker auf dieser Karte erhält dieses Monster +2 Lebenspunkte. Wird dieses Monster besiegt, lege alle Heldenmarker von dieser Karte ab.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 9 | Grau | Blau, Gelb |
| Meister | 3 | 12 | Grau | Blau, Rot, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Troll (Troll)

**Erweiterung:** Prophezeiung eines neuen Anfangs | **Merkmale:** Gebirge, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 8 | Grau | Blau, Rot |
| Meister | 3 | 10 | Grau | Blau, Rot |

**Normal – Fähigkeiten:**
- Rückschwung: Sofort nach einem Angriff einsetzbar: Wähle eine beliebige Anzahl der vom Angriff betroffenen Figuren. Jede dieser Figuren legt eine Stärke-Probe ab. Besteht keine, erleidet jede gewählte Figur 2 Herzen und ist betäubt.
- Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.

**Meister – Fähigkeiten:** Rückschwung / Reichweite (wie Normal)  
**Meister – Aktion:** Rundumschlag: Führe einen Angriff aus. Dieser Angriff betrifft jede andere Figur innerhalb von 2 Feldern und in Sichtlinie dieses Monsters. Jede Figur würfelt ihre Verteidigung separat.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 10 | Grau | Blau, Rot, Rot |
| Meister | 3 | 13 | Grau | Blau, Rot, Rot |

*(Fähigkeiten wie Akt 1)*

---

## Erwachen der Wildnis / Bonds of the Wild (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Deep Elf | Tiefelfe |
| Hellhound | Höllenhund |
| Kobold | Kobold |

---

## Höllenhund (Hellhound)

**Erweiterung:** Erwachen der Wildnis | **Merkmale:** Heiß, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau | Blau, Rot |
| Meister | 4 | 6 | Grau | Blau, Rot |

**Normal – Energie:** Jagen: Nachdem dieser Angriff abgeschlossen ist, darfst du das Ziel von der Karte entfernen und auf einem leeren Feld benachbart zu diesem Monster platzieren. / Durchbohren 2  
**Meister – Energie:** Jagen / Durchbohren 2 / Feueratem: Beginnend mit dem Zielfeld ziehe einen Pfad aus 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 6 | Schwarz | Blau, Rot |
| Meister | 5 | 8 | Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** Jagen / Durchbohren 3  
**Meister – Energie:** Jagen / Durchbohren 3 / Feueratem

---

## Kobold (Kobold)

**Erweiterung:** Erwachen der Wildnis | **Merkmale:** Gebäude, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 4+2 · 3 Sp. 8+2 · 4 Sp. 9+3

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 2 | Braun | Blau |
| Meister | 3 | 5 | Braun | Blau, Gelb |

**Normal – Energie:** Schwarm: Dieses Monster verursacht +1 Herz für jedes andere benachbarte Monster zum Ziel.  
**Normal – Fähigkeiten:**
- Wuseln: Dieses Monster darf sich durch Felder mit Helden bewegen.
- Kleine Anfänge: Platziere dieses Monster nicht beim Aufbau.

**Meister – Energie:** Schwarm (wie Normal)  
**Meister – Fähigkeiten:**
- Wuseln (wie Normal)
- Erschaffer: Platziere zu Beginn jedes Overlord-Zuges 1 Minion-Kobold benachbart zu diesem Monster (unter Beachtung der Gruppengrenzen).

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Braun | Blau |
| Meister | 4 | 7 | Braun | Blau, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Tiefelfe (Deep Elf)

**Erweiterung:** Erwachen der Wildnis | **Merkmale:** Dunkel, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 7 | Braun | Blau, Gelb |
| Meister | 5 | 9 | Braun | Blau, Gelb |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeiten:**
- Heimlich: Jeder Angriff auf dieses Monster muss 3 zusätzliche Reichweite über die normalerweise nötige hinaus erzielen, sonst ist der Angriff ein Fehlschlag.
- Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.

**Meister – Energie:** +1 Herz  
**Meister – Fähigkeiten:**
- Heimlich (wie Normal)
- Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.
- Riposte: Jedes Mal, wenn eine benachbarte Figur einen Angriff abschließt, der dieses Monster betrifft, erleidet diese Figur Herzen in Höhe der gewürfelten Schilde; ist der Angriff ein Fehlschlag, erleidet die Figur stattdessen 1 Herz.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 8 | Grau | Blau, Gelb |
| Meister | 5 | 10 | Grau | Blau, Gelb |

**Normal – Energie:** +2 Herzen  
**Normal – Fähigkeiten:**
- Heimlich (wie Akt 1)
- Durchbohren 2 (wie Akt 1)

**Meister – Energie:** +2 Herzen  
**Meister – Fähigkeiten:**
- Heimlich (wie Akt 1)
- Durchbohren 4: Dieser Angriff ignoriert 4 Schild im Verteidigungswurf.
- Riposte (wie Akt 1)

---

## Kontrakt der Unbesiegten / Treaty of Champions (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Crow Hag | Krähenhexe |
| Demon Lord | Dämonenfürst |
| Skeleton Archer | Skelett-Bogenschütze |

---

## Dämonenfürst (Demon Lord)

**Erweiterung:** Kontrakt der Unbesiegten | **Merkmale:** Heiß, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 6 | Grau, Grau | Blau, Gelb |
| Meister | 3 | 9 | Grau, Grau | Blau, Gelb |

**Normal – Energie:** Verdorren: Das Ziel erleidet 1 Erschöpfung.  
**Normal – Fähigkeit:** Zauberei 2  
**Meister – Energie:** Verdorren  
**Meister – Fähigkeiten:**
- Zauberei 3
- Aura 1: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet er 1 Herz.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 8 | Grau, Grau | Blau, Gelb, Gelb |
| Meister | 3 | 12 | Grau, Grau | Blau, Rot, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Krähenhexe (Crow Hag)

**Erweiterung:** Kontrakt der Unbesiegten | **Merkmale:** Dunkel, Zivilisiert

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau | Blau, Gelb |
| Meister | 4 | 7 | Schwarz | Blau, Gelb |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Lebensdurst 1: Jedes Mal, wenn ein Held innerhalb von 5 Feldern zu diesem Monster 1 oder mehr Herzen heilt, reduziert er die geheilte Anzahl Herzen um 1 (Minimum 0).  
**Meister – Energie:** +1 Herz  
**Meister – Fähigkeit:** Lebensdurst 1 (wie Normal)  
**Meister – Aktion:** Todesomen: Wähle 1 Helden in der Sichtlinie dieses Monsters. Dieser Held darf 2 Herzen erleiden. Tut er das nicht, erleidet er 1 Zustand deiner Wahl.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 7 | Schwarz | Blau, Gelb |
| Meister | 5 | 9 | Grau, Schwarz | Blau, Gelb |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** +2 Herzen  
**Meister – Fähigkeit:** Lebensdurst 2: Jedes Mal, wenn ein Held innerhalb von 5 Feldern zu diesem Monster 1 oder mehr Herzen heilt, reduziert er die geheilte Anzahl Herzen um 2 (Minimum 0).  
**Meister – Aktion:** Todesomen (wie Akt 1)

---

## Skelett-Bogenschütze (Skeleton Archer)

**Erweiterung:** Kontrakt der Unbesiegten | **Merkmale:** Verflucht, Zivilisiert

**Gruppengröße (Diener + Meister):** 2 Sp. 2+1 · 3 Sp. 3+1 · 4 Sp. 4+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 3 | Braun | Blau, Gelb |
| Meister | 4 | 6 | Braun | Blau, Gelb |

**Normal – Energie:** +1 Reichweite  
**Normal – Fähigkeiten:**
- Wiederbelebung: Jedes Mal, wenn dieses Monster Herzen erleidet und nicht besiegt wird, heilt es Herzen in Höhe des erlittenen Schadens oder der Anzahl Monster dieser Gruppe innerhalb von 3 Feldern, je nachdem, was kleiner ist.
- Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.

**Meister – Energie:** +1 Reichweite / +1 Herz  
**Meister – Fähigkeiten:**
- Wiederbelebung (wie Normal)
- Durchbohren 1 (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Braun | Blau, Gelb |
| Meister | 4 | 8 | Braun | Blau, Gelb |

**Normal – Energie:** +2 Reichweite  
**Normal – Fähigkeiten:**
- Wiederbelebung (wie Akt 1)
- Durchbohren 1 (wie Akt 1)

**Meister – Energie:** +2 Reichweite / +2 Herzen  
**Meister – Fähigkeiten:**
- Wiederbelebung (wie Akt 1)
- Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.

---

## Hüter des Geheimnisses / Stewards of the Secret (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Blood Ape | Blutaffe |
| Ferrox | Ferrox |
| Naga | Naga |

---

## Blutaffe (Blood Ape)

**Erweiterung:** Hüter des Geheimnisses | **Merkmale:** Höhle, Heiß

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau | Blau, Rot |
| Meister | 4 | 7 | Grau | Blau, Rot |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Wüten  
**Meister – Energie:** +2 Herzen  
**Meister – Fähigkeit:** Wüten (wie Normal)  
**Meister – Aktion:** Sprungangriff: Dieses Monster bewegt sich bis zu seiner Bewegung weit. Während dieser Bewegung darf es sich durch Felder mit feindlichen Figuren bewegen. Führe dann einen Angriff aus, der jede Figur betrifft, durch die sich dieses Monster bei dieser Aktion bewegt hat.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 7 | Grau | Blau, Rot, Gelb |
| Meister | 4 | 9 | Grau | Blau, Rot, Rot |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** +2 Herzen

---

## Ferrox (Ferrox)

**Erweiterung:** Hüter des Geheimnisses | **Merkmale:** Höhle, Wasser

**Gruppengröße (Diener + Meister):** 2 Sp. 1+1 · 3 Sp. 2+1 · 4 Sp. 3+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 4 | Grau | Blau, Rot |
| Meister | 4 | 5 | Grau | Blau, Rot |

**Normal – Energie:** Verseuchen / Durchbohren 2  
**Meister – Energie:** Verseuchen / Durchbohren 2  
**Meister – Aktion:** Extrahieren: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Misslingt sie, erleidet der Held 2 Erschöpfung und dieses Monster heilt 2 Herzen.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Grau, Braun | Blau, Rot, Gelb |
| Meister | 4 | 8 | Grau, Braun | Blau, Rot, Gelb |

**Normal – Energie:** Verseuchen / Durchbohren 3  
**Meister – Energie:** Verseuchen / Durchbohren 3

---

## Naga (Naga)

**Erweiterung:** Hüter des Geheimnisses | **Merkmale:** Wasser, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 5 | Schwarz | Blau, Rot |
| Meister | 4 | 6 | Schwarz | Blau, Rot |

**Normal – Energie:** Vergiften  
**Normal – Fähigkeit:** Zauberei 1  
**Meister – Energie:** Vergiften  
**Meister – Fähigkeit:** Zauberei 2  
**Meister – Aktion:** Umschlingen: Wähle 1 zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Misslingt sie, ist er bewegungsunfähig; dann darf sich dieses Monster 1 Feld bewegen und du darfst den Helden auf einem leeren Feld benachbart zu diesem Monster platzieren.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 6 | Schwarz | Blau, Rot |
| Meister | 4 | 8 | Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** Vergiften  
**Normal – Fähigkeit:** Zauberei 3  
**Meister – Energie:** Vergiften  
**Meister – Fähigkeit:** Zauberei 3

---

## Scherben von Everdark / Shards of Everdark (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Dark Minotaur | Dunkelminotaurus |
| Ice Wyrm | Eiswurm |
| Shade | Schatten |

---

## Dunkelminotaurus (Dark Minotaur)

**Erweiterung:** Scherben von Everdark | **Merkmale:** Zivilisiert, Dunkel

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 8 | Braun | Blau |
| Meister | 4 | 8 | Schwarz | Blau |

**Normal – Energie:** Durchbohren 1  
**Normal – Fähigkeiten:**
- Sturmangriff: Jedes Mal, wenn dieses Monster ein Feld als Ziel wählt, zu dem es zu Beginn seiner Aktivierung nicht benachbart war, füge 1 roten Machtwürfel zu seinem Angriffspool hinzu.
- Fauliger Schlick: Am Ende der Aktivierung dieses Monsters ist jeder Held innerhalb von 3 Feldern verseucht.
- Eiterbeulen: Jedes Mal, wenn ein verseuchter Held innerhalb von 3 Feldern zu 1 oder mehr Monstern mit Eiterbeulen freiwillig 1 oder mehr Erschöpfung ausgibt, erleidet dieser Held 1 Herz.

**Meister – Energie:** Durchbohren 2  
**Meister – Fähigkeiten:** Sturmangriff / Fauliger Schlick / Eiterbeulen (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 10 | Grau, Braun | Blau, Rot |
| Meister | 4 | 10 | Schwarz, Grau | Blau, Rot |

**Normal – Energie:** Durchbohren 2  
**Meister – Energie:** Durchbohren 4

---

## Eiswurm (Ice Wyrm)

**Erweiterung:** Scherben von Everdark | **Merkmale:** Kalt, Höhle

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 7 | Grau, Grau | Blau, Rot |
| Meister | 4 | 9 | Grau, Grau | Blau, Rot |

**Normal – Fähigkeiten:**
- Begraben: Kampfunfähige Helden innerhalb von 1 Feld zu diesem Monster können Herzen nur durch Aufsteh-Aktionen und Heldentaten heilen.
- Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.

**Meister – Fähigkeiten:**
- Begraben / Reichweite (wie Normal)
- Eisig: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet er 1 Erschöpfung.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 11 | Grau, Grau | Blau, Rot, Rot |
| Meister | 4 | 14 | Grau, Grau | Blau, Rot, Rot |

*(Fähigkeiten wie Akt 1)*

---

## Schatten (Shade)

**Erweiterung:** Scherben von Everdark | **Merkmale:** Verflucht, Kalt

**Gruppengröße (Diener + Meister):** 2 Sp. 2+1 · 3 Sp. 3+1 · 4 Sp. 4+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 4 | 2 | Schwarz | Blau, Gelb |
| Meister | 4 | 5 | Schwarz | Blau, Gelb |

**Normal – Energie:** Durchbohren 1  
**Normal – Fähigkeit:** Seelenfessel 1: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster 1 oder mehr Erschöpfung zurückgewinnt, darf dieses Monster die zurückgewonnene Anzahl Erschöpfung um 1 reduzieren (Minimum 0).  
**Normal – Aktion:** Flackern: Wähle 1 Helden innerhalb von 3 Feldern zu diesem Monster. Entferne dieses Monster von der Karte und platziere es benachbart zu diesem Helden. Hat dieses Monster in dieser Aktivierung noch nicht angegriffen, legt der Held eine Gespür-Probe ab. Misslingt sie, darf dieses Monster dann einen Angriff auf diesen Helden ausführen.  
**Meister – Energie:** Durchbohren 2  
**Meister – Fähigkeit:** Seelenfessel 2: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster 1 oder mehr Erschöpfung zurückgewinnt, darf dieses Monster die zurückgewonnene Anzahl Erschöpfung um 2 reduzieren (Minimum 0).  
**Meister – Aktion:** Flackern (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 4 | Schwarz | Blau, Rot |
| Meister | 5 | 7 | Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** Durchbohren 1  
**Normal – Fähigkeit:** Seelenfessel 1 (wie Akt 1)  
**Meister – Energie:** Durchbohren 2  
**Meister – Fähigkeit:** Seelenfessel 3: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster 1 oder mehr Erschöpfung zurückgewinnt, darf dieses Monster die zurückgewonnene Anzahl Erschöpfung um 3 reduzieren (Minimum 0).

---

## Nebel von Bilehall / Mists of Bilehall (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Bone Horror | Knochenschrecken |
| Broodwalker | Brutläufer |
| Reanimate | Wiederbelebter |

---

## Brutläufer (Broodwalker)

**Erweiterung:** Nebel von Bilehall | **Merkmale:** Dunkel, Gebäude

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 2 | 7 | Braun | Blau, Gelb |
| Meister | 2 | 10 | Braun | Blau, Gelb |

**Normal – Energie:** Verängstigen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel verängstigt. / +1 Herz  
**Normal – Fähigkeit:** Überfluten: Helden behandeln jedes zu diesem Monster benachbarte Feld als Schlamm-Feld.  
**Meister – Energie:** Kolonisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig und verängstigt. / +1 Herz  
**Meister – Fähigkeiten:**
- Überfluten (wie Normal)
- Schwarmverteidigung: Helden behandeln jedes zu diesem Monster benachbarte Feld als Gefahrenfeld.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 2 | 8 | Grau | Blau, Gelb, Gelb |
| Meister | 2 | 12 | Grau | Blau, Rot, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Knochenschrecken (Bone Horror)

**Erweiterung:** Nebel von Bilehall | **Merkmale:** Höhle, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 5 | Grau | Blau, Gelb |
| Meister | 5 | 7 | Grau | Blau, Gelb |

**Normal – Energie:** Durchbohren 1  
**Normal – Fähigkeiten:**
- Ausstrecken: Jedes Mal, wenn dieses Monster angreift, darf es eine Figur bis zu 3 Felder entfernt und in seiner Sichtlinie als Ziel wählen.
- Geschmeidig: Befreundete Figuren blockieren die Sichtlinie dieses Monsters nicht.

**Meister – Energie:** Durchbohren 2 / Peitschen: Nachdem dieser Angriff abgeschlossen ist, platziere das Ziel auf einem leeren Feld bis zu 2 Felder von diesem Monster entfernt.  
**Meister – Fähigkeiten:** Ausstrecken / Geschmeidig (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 6 | Schwarz | Blau, Rot |
| Meister | 5 | 9 | Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** Durchbohren 1  
**Meister – Energie:** Durchbohren 2 / Peitschen

---

## Wiederbelebter (Reanimate)

**Erweiterung:** Nebel von Bilehall | **Merkmale:** Zivilisiert, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 3+1 · 3 Sp. 3+2 · 4 Sp. 4+2

> ✅ **Kartenscan-validiert 2026-06-12** (any2cards `mb-reanimate`, Akt 1+2,
> Vorder- und Rückseite): Verteidigung ist in allen vier Varianten **1× Braun**
> (vorher fälschlich Grau+Schwarz) — konsistent mit dem Phalanx-Text.
> Akt-2-Normal-Angriff nur 1× Gelb ist laut Karte korrekt. Akt-2-Meister-Angriff
> hat **3 Würfel** (Blau, Gelb, Gelb — vorher fehlte 1 Gelber). Schwarm wirkt laut
> Karte für „jedes andere benachbarte Monster", nicht nur Minions.

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 3 | Braun | Blau |
| Meister | 3 | 5 | Braun | Blau, Rot |

**Normal – Energie:** Schwarm: Dieses Monster verursacht +1 Herz für jedes andere zum Ziel benachbarte Monster.  
**Normal – Fähigkeiten:**
- Phalanx: Ist dieses Monster zu einer Figur seiner Monstergruppe benachbart, ersetze seinen braunen Verteidigungswürfel durch 1 grauen Verteidigungswürfel.
- Wiederbelebung: Jedes Mal, wenn dieses Monster Herzen erleidet und nicht besiegt wird, heilt es Herzen in Höhe des erlittenen Schadens oder der Anzahl Monster dieser Gruppe innerhalb von 3 Feldern, je nachdem, was kleiner ist.

**Meister – Energie:** Schwarm (wie Normal)  
**Meister – Fähigkeiten:** Phalanx / Wiederbelebung (wie Normal)  
**Meister – Aktion:** Manövrieren: Wähle 1 zu diesem Monster benachbartes Minion-Monster. Dieses Monster erhält 2 Bewegungspunkte.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Braun | Gelb |
| Meister | 3 | 8 | Braun | Blau, Gelb, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Rostende Ketten / The Chains That Rust (3 Gruppen)

| Englisch | Deutsch |
|----------|---------|
| Marrow Priest | Markpriester |
| Shambling Colossus | Taumelnder Koloss |
| The Dispossessed | Die Besitzlosen |

---

## Die Besitzlosen (The Dispossessed)

**Erweiterung:** Rostende Ketten | **Merkmale:** Zivilisiert, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 2+0 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 2 | 6 | Grau | Blau, Gelb |
| Meister | 2 | 8 | Grau | Blau, Gelb |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Ätherischer Griff: Zu Beginn des Overlord-Zuges darf dieses Monster 1 Heldenmarker von seinem Sockel ablegen. Tut es das, entferne es von der Karte und platziere es innerhalb von 3 Feldern zum entsprechenden Helden.  
**Normal – Aktion:** Furchtmal: Wähle einen Helden in der Sichtlinie dieses Monsters und lege dessen Heldenmarker auf den Sockel dieses Monsters.

**Meister – Energie:** Verängstigen / +1 Herz  
**Meister – Fähigkeit:** Ätherischer Griff (wie Normal)  
**Meister – Aktion:** Furchtmal (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 2 | 8 | Grau, Braun | Blau, Gelb |
| Meister | 2 | 10 | Grau, Braun | Blau, Gelb, Gelb |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** Verängstigen / +2 Herzen

---

## Markpriester (Marrow Priest)

**Erweiterung:** Rostende Ketten | **Merkmale:** Dunkel, Gebäude

**Gruppengröße (Diener + Meister):** 2 Sp. 1+0 · 3 Sp. 0+1 · 4 Sp. 1+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 7 | Grau, Braun | Blau, Gelb |
| Meister | 5 | 9 | Grau, Braun | Blau, Gelb |

**Normal – Energie:** Sterbliche Bindung: Das Ziel legt eine Wissen-Probe ab. Misslingt sie, lege seinen Heldenmarker auf diese Karte. Ein Held, dessen Marker auf dieser Karte liegt, kann keine Herzen heilen. Wird ein Monster dieser Gruppe besiegt oder ein Held kampfunfähig, lege alle Heldenmarker von dieser Karte ab. / +1 Herz  
**Normal – Fähigkeit:** Schattenschritt: Jedes Mal, wenn ein Held einen Angriff auf dieses Monster ausführt, darf er 1 Schub ausgeben. Tut er das nicht, erhält dieses Monster 5 Bewegungspunkte, nachdem der Angriff abgeschlossen ist.  
**Meister – Energie:** Sterbliche Bindung / +1 Herz  
**Meister – Fähigkeit:** Schattenschritt (wie Normal)

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 5 | 8 | Grau, Grau | Blau, Gelb, Gelb |
| Meister | 5 | 10 | Grau, Grau | Blau, Gelb, Gelb |

*(Fähigkeiten wie Akt 1)*

---

## Taumelnder Koloss (Shambling Colossus)

**Erweiterung:** Rostende Ketten | **Merkmale:** Wildnis, Verflucht

**Gruppengröße (Diener + Meister):** 2 Sp. 0+1 · 3 Sp. 1+1 · 4 Sp. 2+1

### Akt 1

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 5 | Schwarz | Blau, Rot |
| Meister | 3 | 8 | Schwarz | Blau, Rot |

**Normal – Energie:** +1 Herz  
**Normal – Fähigkeit:** Durchstoßen: Jeder Angriff dieses Monsters ignoriert 1 Schild für jeden Verteidigungswürfel, den das Ziel des Angriffs würfelt.  
**Meister – Energie:** +1 Herz  
**Meister – Fähigkeiten:**
- Durchstoßen (wie Normal)
- Quälend: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster einen Angriff auf dieses Monster ausführt, legt dieser Held vor dem Würfeln eine Willenskraft-Probe ab. Misslingt sie, ist er verängstigt.

### Akt 2

| Typ | Bewegung | LP | Verteidigung | Angriff |
|-----|----------|-----|-------------|---------|
| Normal | 3 | 7 | Schwarz | Blau, Rot |
| Meister | 3 | 9 | Schwarz | Blau, Rot, Gelb |

**Normal – Energie:** +2 Herzen  
**Meister – Energie:** +2 Herzen

---

## Gesamtanzahl

| Quelle | Gruppen |
|--------|---------|
| Grundspiel | 9 |
| Die Höhle des Lindwurms | 2 |
| Labyrinth des Verderbens | 4 |
| Die Trollsümpfe | 2 |
| Schloss Rabenfels | 2 |
| Schatten von Nerekhall | 4 |
| Schwur der Verbannten | 3 |
| Krone des Schicksals | 3 |
| Kreuzzug der Vergessenen | 3 |
| Wächter von Deephall | 3 |
| Prophezeiung eines neuen Anfangs | 3 |
| Erwachen der Wildnis | 3 |
| Kontrakt der Unbesiegten | 3 |
| Hüter des Geheimnisses | 3 |
| Scherben von Everdark | 3 |
| Nebel von Bilehall | 3 |
| Rostende Ketten | 3 |
| **Gesamt** | **57** |

---

## Overlord-Klassen (Dekks)

| Deck (EN) | Deck (DE) | Erweiterung |
|-----------|-----------|-------------|
| Basic | Basis | Grundspiel |
| Magus | Magus | Grundspiel |
| Saboteur | Saboteur | Grundspiel |
| Warlord | Kriegsherr | Grundspiel |
| Universal | Universal | Grundspiel |
| Punisher | Peiniger | Die Höhle des Lindwurms |
| Basic II | Basis II | Labyrinth des Verderbens |
| Infector | Seuchenbringer | Die Trollsümpfe |
| Enchanter | Verzauberer | Schloss Rabenfels |
| Unkindness | Bosheit | Schloss Rabenfels |
| Shadowmancer | Schattenmagier | Schatten von Nerekhall |
| Soulbinder | Seelenbinder | Rostende Ketten |
