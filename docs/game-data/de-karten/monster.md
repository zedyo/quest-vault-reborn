# Monster – Deutsche Originalkarten

> **Quelle:** Hochauflösende Scans der deutschen Original-Monsterkarten (Descent 2. Edition).
> Namen, Werte und **Fähigkeitstexte** (Diener/Meister, Akt 1 + 2) sind **1:1 von den Karten**
> abgelesen (Montagen aus den Rückseiten, visuelle Kontrolle) und ersetzen die früheren
> Community-Übersetzungen. Kartenbilder: `public/cards/de/monsters/<id>-act<1|2>[-back].webp`.

**Bestand:** 56 Monstergruppen.

## Vereinheitlichte Kartenbegriffe (kartenwörtlich)

- **Verteidigungs-Parenthese:** durchgängig „(nach Verrechnung der Verteidigung)“ – auf den Karten das Schild-Symbol.
- **Durchbohren:** „ignoriert [bis zu] X Schild des Verteidigers“ bzw. „… auf den geworfenen Verteidigungswürfeln“ (je nach Karte wörtlich übernommen).
- **Attribut-Proben:** Symbol → Wort: Faust = Stärke, Sonnen-/Strahlensymbol = Willenskraft, Buch = Wissen, Auge = Gespür.
- **Begriffe der Karten:** „normales Monster“ (Diener), „Elite-Monster“ (Meister), „niedergestreckt“, „Aufrappeln“, „gelähmt“, „erkrankt“, „verängstigt“.


## Zwei Druckversionen (Errata-Nachdrucke) — 2026-07-18

Von einigen Descent-2e-Karten gibt es **zwei physische Druckauflagen**: einen älteren
**Erstdruck** (Original-Text) und einen späteren **Nachdruck**, der die offiziellen
**FFG-Errata/FAQ direkt auf die Karte** übernommen hat (FFG korrigierte den Kartentext
bei Neuauflagen so, dass er der FAQ entspricht). Manche unserer DE-Scans sind der
**Errata-Nachdruck**. **Wir folgen dem vorliegenden Scan** (Kartentext = höchste
Priorität) — das ist gewollt, kein Fehler. Der Errata-Hinweis bleibt zusätzlich als
ErrataBox.

**Monster, deren Rückseiten-Fähigkeitstext = die Errata-Fassung ist** (unser Scan ist
also der Errata-Nachdruck):

| Monster | Fähigkeit | Kartentext (= Errata-Nachdruck, im Projekt) | Erstdruck-Original (nur zur Info, NICHT im Projekt) |
|---|---|---|---|
| Schattendrache | Schatten | „Sobald ein Held, der benachbart zu diesem Monster ist, einen Angriff ansagt, muss er 1 Schub einsetzen oder der Angriff schlägt fehl.“ | „Wenn ein Held dieses Monster von einem Nachbarfeld aus angreift, muss er 1 Schub einsetzen oder der Angriff schlägt fehl.“ |
| Goblin-Schamane | Verzaubern | „Bewege jeden Verfluchten Helden auf Nachbarfeldern dieses Monsters um bis zu 2 Felder in beliebiger Richtung.“ | (Erstdruck-Wortlaut nicht belegt) |

**Alle übrigen Monster-Text-Errata halten den Erstdruck** (Scan ≠ Errata-Korrektur),
u. a.: Krähenhexe/Todesomen, Riese (UK)/Rundumschlag + Troll (UK)/Rundumschlag („alle
**anderen** Figuren“), Elementar/Luft, Höllenkoloss/Sturmangriff („Beginn seines
**Zuges**“), Wechselbalg/Höhnisches Lachen („(mindestens 1)“ statt „(bis zu einem
Minimum von 1)“).

**Hintergrund/Quellen:** FFG pflegt ein offizielles Errata-&-FAQ-Dokument (bis v1.6) mit
Kartentext-Änderungen; bei Neuauflagen wurden die Karten entsprechend nachgedruckt. Die
Fandom-/BGG-Community dokumentiert für den Schattendrachen genau die Errata-Fassung
(„A hero adjacent to this monster that declares an attack must spend 1 [surge] …“).
Belege: FFG FAQ v1.6 (fantasyflightgames.com), BGG-Threads „New Printings and Errata“ /
„FAQ 1.6 – Errata Card changes“, Descent-Community CRRG, descent2e.fandom.com.


## Grundspiel

### Barghest  *(EN: Barghest)* · `barghest`
**Eigenschaften:** Wildnis, Dunkel · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Geheul: Alle Helden innerhalb von 3 Feldern zu diesem Monster legen eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Erschöpfung.
- Schemen: Gegen einen Angriff von einem nicht benachbarten Feld darf dieses Monster 1 zusätzlichen braunen Verteidigungswürfel werfen.

### Höhlenspinne  *(EN: Cave Spider)* · `cave-spider`
**Eigenschaften:** Wildnis, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [2, 1], p3: [3, 1], p4: [4, 1]
- Gift: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel vergiftet.
- Netz: Um sich von einem Nachbarfeld dieses Monsters weg zu bewegen, muss ein Held 1 Erschöpfung erleiden (zusätzlich zu anderer Erschöpfung, die der Held für Bewegungspunkte erleidet).

### Elementar  *(EN: Elemental)* · `elemental`
**Eigenschaften:** Kalt, Heiß · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Feuer: Führe einen Angriff gegen alle zu diesem Monster benachbarten Figuren durch. Jede Figur wirft ihre eigenen Verteidigungswürfel.
- Erde: Alle zu diesem Monster benachbarten Helden legen eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, wird gelähmt.
- Wasser: Alle zu diesem Monster benachbarten Helden legen eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 2 Erschöpfung.
- Luft: Bis zum Beginn deines nächsten Zuges kann dieses Monster nur durch Angriffe von Figuren auf benachbarten Feldern betroffen werden.

### Ettin  *(EN: Ettin)* · `ettin`
**Eigenschaften:** Gebirge, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Weitreichend: Dieses Monster kann mit einem Nahkampfangriff bis zu 2 Felder weit angreifen.
- Werfen: Wähle einen benachbarten Helden. Der Held legt eine Stärke-Probe ab. Wenn sie misslingt, nimm ihn vom Spielplan und stelle ihn auf ein leeres Feld innerhalb von 3 Feldern seines ursprünglichen Felds. Der Held betritt dieses Feld. Dann erleidet der Held 1 Herz.

### Sarkomant  *(EN: Flesh Moulder)* · `flesh-moulder`
**Eigenschaften:** Verflucht, Zivilisiert · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Nachwachsen 1: Dieses Monster gewinnt 1 Herz zurück.
- Nachwachsen 2: Dieses Monster gewinnt 2 Herzen zurück.
- Heilen: Wähle ein Monster innerhalb von 3 Feldern zu diesem Monster und wirf einen roten Machtwürfel. Das gewählte Monster gewinnt die gewürfelten Herzen zurück.
- Nachwachsen 3: Dieses Monster gewinnt 3 Herzen zurück.

### Goblin-Bogenschütze  *(EN: Goblin Archer)* · `goblin-archer`
**Eigenschaften:** Gebäude, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [2, 1], p3: [3, 1], p4: [4, 1]
- Wendig: Dieses Monster kann sich durch Felder bewegen, auf denen Helden stehen.
- Feige: Dieses Monster kann Energie nur dann einsetzen, wenn es innerhalb von 3 Feldern zu einem beliebigen Elite-Monster oder Hauptmann steht.

### Merriod  *(EN: Merriod)* · `merriod`
**Eigenschaften:** Wildnis, Wasser · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Lähmung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel gelähmt.
- Weitreichend: Dieses Monster kann mit einem Nahkampfangriff bis zu 2 Felder weit angreifen.
- Peitscharme: Dieses Monster kann mit einem Angriff 2 verschiedene Helden angreifen. Das Monster macht nur einen Angriffswurf, aber jeder Held seinen eigenen Verteidigungswurf.

### Schattendrache  *(EN: Shadow Dragon)* · `shadow-dragon`
**Eigenschaften:** Dunkel, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Schatten: Sobald ein Held, der benachbart zu diesem Monster ist, einen Angriff ansagt, muss er 1 Schub einsetzen oder der Angriff schlägt fehl. *(Text vom vorliegenden DE-Scan = Errata-Nachdruck; ältere Erstdruck-Karten drucken „Wenn ein Held dieses Monster von einem Nachbarfeld aus angreift …". Wir folgen dem Scan — Kartentext = höchste Priorität. Siehe „Zwei Druckversionen" unten.)*
- Feuerodem: Ziehe vom Zielfeld aus einen Pfad von 4 Feldern in beliebiger Richtung. Alle Figuren auf diesen 4 Feldern sind vom Angriff betroffen. Jede Figur wirft ihre eigenen Verteidigungswürfel.

### Zombie  *(EN: Zombie)* · `zombie`
**Eigenschaften:** Verflucht, Gebäude · **Gruppengrößen [Diener,Meister]:** p2: [2, 1], p3: [3, 1], p4: [4, 1]
- Krankheit: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), erkrankt das Ziel.
- Behäbig: Dieses Monster kann höchstens 1 Bewegungsaktion pro Zug ausführen.
- Würgegriff: Wähle einen benachbarten Helden. Der Held legt eine Stärke-Probe ab. Wenn sie misslingt, wird er gelähmt.


## Hort des Lindwurms

### Feuerteufel  *(EN: Fire Imps)* · `fire-imps`
**Eigenschaften:** Heiß, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [2, 1], p3: [3, 1], p4: [3, 2]
- Verbrennen: Verursacht dieser Angriff mindestens 1 Herz (nach Verrechnung der Verteidigung), brennt das Ziel.
- Flammenwesen: Dieses Monster ignoriert alle Effekte von Lava. Beendet es seinen Zug auf einem Lavafeld, heilt es 1 Herz. Außerdem brennt dieses Monster nie.
- Flammenwesen: Dieses Monster ignoriert alle Effekte von Lava. Beendet es seinen Zug auf einem Lavafeld, heilt es 1 Herz. Außerdem erleidet dieses Monster nie Herzen durch Brennen.
- Brennbar: Wird dieses Monster besiegt, erleidet jeder zu ihm benachbarte Held 1 Herz.

### Halbdrachenkrieger  *(EN: Hybrid Sentinel)* · `hybrid-sentinel`
**Eigenschaften:** Gebirge, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Fliegen: Dieses Monster kann während der Bewegung feindliche Figuren und Terrain ignorieren. Es muss seine Bewegung nach den normalen Regeln auf einem leeren Feld beenden.
- Sie sollen leiden: Jeder Angriff dieses Monsters auf einen Helden mit höchstens 2 Stärke erhält +1 Herz.
- Feuerodem: Ziehe vom Zielfeld aus einen Pfad von 4 Feldern (inklusive Zielfeld) in beliebiger Richtung. Alle Figuren auf diesen 4 Feldern sind vom Angriff betroffen. Jede Figur wirft ihre eigenen Verteidigungswürfel.


## Labyrinth der Ruine

### Arachyura  *(EN: Arachyura)* · `arachyura`
**Eigenschaften:** Wildnis, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Durchbohren 1: Dieser Angriff ignoriert bis zu 1 Schild des Verteidigers.
- Zangenangriff: Führe einen Angriff gegen bis zu 2 zu diesem Monster benachbarte Helden durch. Du machst nur 1 Angriffswurf, aber jeder Held seinen eigenen Verteidigungswurf. Jeder Held, der durch diesen Angriff mindestens 1 Herz erleidet (nach Verrechnung der Verteidigung), wird gelähmt.
- Durchbohren 2: Dieser Angriff ignoriert bis zu 2 Schild des Verteidigers.
- Todesfluch: Wenn dieses Monster besiegt wird, legen alle Helden auf seinen Nachbarfeldern eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, wird verflucht.
- Durchbohren 3: Dieser Angriff ignoriert bis zu 3 Schild des Verteidigers.

### Aas-Drache  *(EN: Carrion Drake)* · `carrion-drake`
**Eigenschaften:** Wasser, Dunkel · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Krankheit: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), erkrankt das Ziel.
- Fliegen: Dieses Monster kann während der Bewegung feindliche Figuren und Terrain ignorieren. Es muss seine Bewegung nach den normalen Regeln auf einem leeren Feld beenden.
- Verseucht: Wenn ein Held auf einem Nachbarfeld dieses Monsters eine Vergiftet- oder Erkrankt-Zustandskarte abwerfen würde, behält er sie stattdessen.

### Goblin-Schamane  *(EN: Goblin Witcher)* · `goblin-witcher`
**Eigenschaften:** Gebäude, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Fluch: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel verflucht.
- Verzaubern: Bewege jeden verfluchten Helden auf Nachbarfeldern dieses Monsters um bis zu 2 Felder in beliebiger Richtung.

### Volucrix-Jäger  *(EN: Volucrix Reaver)* · `volucrix-reaver`
**Eigenschaften:** Gebäude, Gebirge · **Gruppengrößen [Diener,Meister]:** p2: [2, 0], p3: [2, 1], p4: [3, 1]
- Durchbohren 2: Dieser Angriff ignoriert bis zu 2 Schild des Verteidigers.
- Vorstoß: Dieses Monster kann sich 3 Felder bewegen und dann einen Angriff durchführen.
- Aggressiv: Dieses Monster kann in seinem Zug 2 Aktionen für Angriffe verwenden.
- Durchbohren 3: Dieser Angriff ignoriert bis zu 3 Schild des Verteidigers.


## Die Trollsümpfe

### Harpyie  *(EN: Harpy)* · `harpy`
**Eigenschaften:** Wildnis, Gebirge · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Schwarm: Dieses Monster fügt pro anderem zum Ziel benachbarten Monster +1 Herz zu.
- Fliegen: Dieses Monster kann während der Bewegung feindliche Figuren und Terrain ignorieren. Es muss seine Bewegung nach den normalen Regeln auf einem leeren Feld beenden.
- Pulk: Jedes normale Monster dieser Gruppe innerhalb von 5 Feldern zu diesem Monster darf sich sofort um bis zu 2 Felder bewegen.

### Pestwurm  *(EN: Plague Worm)* · `plague-worm`
**Eigenschaften:** Wasser, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [1, 1], p4: [2, 1]
- Schwächung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel geschwächt.
- Graben: Nimm diese Figur vom Spielplan und stelle sie auf leere oder besetzte Felder in bis zu 3 Feldern Entfernung. Jeder Figur, die auf einem der Zielfelder steht, wird auf das nächste leere Feld deiner Wahl bewegt und erleidet 1 Erschöpfung. Höchstens ein Mal pro Monster pro Zug.
- Pestilenz: Jeder Held, der seinen Zug auf einem Nachbarfeld dieses Monsters beginnt, muss eine Willenskraft-Probe ablegen. Jeder Held, dessen Probe misslingt, erkrankt.


## Herrenhaus der Raben

### Bandit  *(EN: Bandit)* · `bandit`
**Eigenschaften:** Wildnis, Gebäude · **Gruppengrößen [Diener,Meister]:** p2: [2, 1], p3: [3, 1], p4: [4, 1]
- Gift: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel vergiftet.
- Ausrauben: Führe einen Angriff durch, der auf einen benachbarten Helden zielt. Wenn der Held durch diesen Angriff niedergestreckt wird, mischst du 1 seiner Suchkarten zurück in den Suchstapel.
- Schwarzes Gift: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), ist das Ziel todgeweiht und wird vergiftet.

### Geist  *(EN: Wraith)* · `wraith`
**Eigenschaften:** Zivilisiert, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Todeswelle: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), ist das Ziel todgeweiht.
- Todesschrei: Wähle einen Helden innerhalb von 3 Feldern zu diesem Monster. Dieser Held legt eine Willenskraft-Probe ab. Wenn sie misslingt, ist er todgeweiht oder erleidet 1 Herz nach Wahl des Overlords. Höchstens ein Mal pro Runde.
- Schnitter: Wenn ein Held innerhalb von 5 Feldern zu diesem Monster niedergestreckt wird, darf es sich sofort entsprechend seiner Geschwindigkeit bewegen und dann angreifen. Höchstens ein Mal pro Runde.


## Schatten von Nerekhall

### Wechselbalg  *(EN: Changeling)* · `changeling`
**Eigenschaften:** Zivilisiert, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Verwelken: Das Ziel erleidet 1 Erschöpfung.
- Blutung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), blutet das Ziel.
- Flüstern: Alle zu diesem Monster benachbarten Helden legen eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, bewegt sich 1 Feld in eine Richtung deiner Wahl.
- Höhnisches Lachen: Jeder Held innerhalb von 3 Feldern zu diesem Monster erhält -1 auf Stärke, Wissen, Willenskraft und Gespür (mindestens 1).

### Eherner Wächter  *(EN: Ironbound)* · `ironbound`
**Eigenschaften:** Zivilisiert, Gebäude · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Weitreichend: Dieses Monster kann mit einem Nahkampfangriff bis zu 2 Felder weit angreifen.
- Eisenhaut: Dieses Monster ist immun gegen Durchbohren und gegen sämtliche Zustände.
- Beschützen: Wenn eine Figur in der Sichtlinie dieses Monsters mit einem Angriff auf ein zu diesem Monster benachbartes Monster zielt, kann dieses Monster vor dem Angriffswurf 1 Herz erleiden, um zum Ziel des Angriffs zu werden. Reichweite und Sichtlinie werden weiterhin zum ursprünglichen Ziel gemessen.

### Rattenschwarm  *(EN: Rat Swarm)* · `rat-swarm`
**Eigenschaften:** Gebäude, Dunkel · **Gruppengrößen [Diener,Meister]:** p2: [2, 0], p3: [2, 1], p4: [3, 1]
- Fressgier: Dieses Monster erhält +X Herz, wobei X gleich der verbleibenden Lebenspunkte dieses Monsters ist.
- Verschmelzen: Wähle 1 Monster derselben Gruppe auf einem Nachbarfeld dieses Monsters. Dieses Monster erleidet alle verbleibenden Herzen, und das gewählte Monster gewinnt ebenso viele Herzen zurück.
- Zerfleischen: Ein benachbarter Held deiner Wahl legt eine Stärke-Probe ab. Wenn sie misslingt, blutet er.
- Heißhunger: Bei Angriffen gegen blutende Helden erhält dieses Monster +1 Energie.

### Höllenkoloss  *(EN: Ynfernael Hulk)* · `ynfernael-hulk`
**Eigenschaften:** Verflucht, Heiß · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Zurückstoßen: Nimm das Ziel vom Spielplan und stelle es auf ein leeres Feld innerhalb von 3 Feldern seines ursprünglichen Felds. Der Held betritt damit dieses Feld.
- Blutgier: Dieses Monster erleidet 1 Herz und erhält 5 Bewegungspunkte. Höchstens ein Mal pro Zug.
- Sturmangriff: Wenn dieses Monster zu Beginn seines Zuges nicht zum Ziel dieses Angriffs benachbart war, hat der Angriff +3 Herzen.


## Schwur des Verstoßenen

### Mörderspinne  *(EN: Bane Spider)* · `bane-spider`
**Eigenschaften:** Dunkel, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Gift: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel vergiftet.
- Durchbohren 1: Dieser Angriff ignoriert bis zu 1 Schild des Verteidigers.
- Durchbohren 2: Dieser Angriff ignoriert bis zu 2 Schild des Verteidigers.
- Kokon: Alle zu diesem Monster benachbarten Helden legen eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, wird gelähmt.
- Durchbohren 3: Dieser Angriff ignoriert bis zu 3 Schild des Verteidigers.

### Tiermensch  *(EN: Beastman)* · `beastman`
**Eigenschaften:** Gebirge, Wildnis · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Aggressiv: Dieses Monster kann in seinem Zug 2 Aktionen für Angriffe verwenden.
- Kommando: Jedes normale Monster innerhalb von 3 Feldern dieses Monsters kann beim Angriff 1 Würfel neu werfen. Jedes normale Monster kann nur einmal pro Angriff von der Fähigkeit Kommando profitieren.

### Rasierklingenflügler  *(EN: Razorwing)* · `razorwing`
**Eigenschaften:** Wildnis, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [2, 1], p3: [3, 1], p4: [4, 1]
- Fliegen: Dieses Monster kann während der Bewegung feindliche Figuren und Terrain ignorieren. Es muss seine Bewegung nach den normalen Regeln auf einem leeren Feld beenden.
- Betäubung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel betäubt.


## Krone des Schicksals

### Chaosbiest  *(EN: Chaos Beast)* · `chaos-beast`
**Eigenschaften:** Dunkel, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Verwandlung: Wenn dieses Monster angreift, nimmt es dazu die Angriffswürfel einer Figur in seiner Sichtlinie (nach Wahl des Overlords). Wenn der Overlord dazu einen Helden wählt, entscheidet er, welche Waffe in der Ausrüstung des Helden er benutzen will. Dieses Monster kann keine sonstige Fähigkeit der gewählten Figur benutzen.
- Hexerei 2: Nach einem seiner Angriffswürfe kann dieses Monster bis zu 2 Reichweite in Herzen oder bis zu 2 Herzen in Reichweite umwandeln.
- Hexerei 3: Nach einem seiner Angriffswürfe kann dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.

### Riese  *(EN: Giant)* · `giant`
**Eigenschaften:** Gebirge, Wildnis · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Betäubung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel betäubt.
- Weitreichend: Dieses Monster kann mit einem Nahkampfangriff bis zu 2 Felder weit angreifen.
- Rundumschlag: Führe einen Angriff durch. Dieser Angriff betrifft alle anderen Figuren, die innerhalb von 2 Feldern in der Sichtlinie dieses Monsters stehen. Jede Figur wirft ihre eigenen Verteidigungswürfel.

### Lavakäfer  *(EN: Lava Beetle)* · `lava-beetle`
**Eigenschaften:** Heiß, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Explosion: Dieser Angriff betrifft auch alle Figuren auf Nachbarfeldern des Ziels.


## Kreuzzug der Vergessenen

### Golem  *(EN: Golem)* · `golem`
**Eigenschaften:** Gebirge, Gebäude · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Eisenhaut: Dieses Monster ist immun gegen Durchbohren und gegen sämtliche Zustände.
- Unbeweglich: Dieses Monster darf alle Spieleffekte ignorieren, die es zwingen sich zu bewegen.

### Medusa  *(EN: Medusa)* · `medusa`
**Eigenschaften:** Verflucht, Gebäude · **Gruppengrößen [Diener,Meister]:** p2: [2, 0], p3: [1, 1], p4: [2, 1]
- Lähmung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel gelähmt.
- Gift: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel vergiftet.
- Betäubung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel betäubt.

### Hexenmeister  *(EN: Sorcerer)* · `sorcerer`
**Eigenschaften:** Zivilisiert, Gebäude · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Hexerei 2: Nach seinem Angriffswurf kann dieses Monster bis zu 2 Reichweite in Herzen umwandeln oder bis zu 2 Herzen in Reichweite.
- Beschwören: Wähle ein normales Monster innerhalb von 3 Feldern Entfernung zu diesem Monster. Setze dann das normale Monster auf ein leeres Feld neben diesem Monster.
- Hexerei 3: Nach seinem Angriffswurf kann dieses Monster bis zu 3 Reichweite in Herzen umwandeln oder bis zu 3 Herzen in Reichweite.
- Todeswunsch: Sobald dieses Elite-Monster besiegt wird, darf der Overlord stattdessen 1 normales Monster derselben Gruppe wählen, das anstelle des Elite-Monsters besiegt wird. Falls er das tut, gewinnt dieses Elite-Monster alle seine Herzen zurück.


## Wächter von Deephall

### Unterweltdrache  *(EN: Crypt Dragon)* · `crypt-dragon`
**Eigenschaften:** Dunkel, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Explosion: Dieser Angriff betrifft alle zum Zielfeld benachbarten Figuren.
- Furcht einflößen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held muss eine Willenskraft-Probe ablegen. Falls sie misslingt, wird er 2 Felder in gerader Richtung von diesem Monster wegbewegt und ist gelähmt.
- Grauenerregend: Jeder Held, der zu mindestens 1 grauenerregenden Monster benachbart ist, verringert seine Willenskraft um 1 (bis zu einem Minimum von 1).

### Dunkler Priester  *(EN: Dark Priest)* · `dark-priest`
**Eigenschaften:** Zivilisiert, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Dunkles Gebet: Wähle einen Helden innerhalb von 5 Feldern Entfernung zu diesem Monster. Dieser Held legt eine Willenskraft-Probe ab. Falls sie misslingt, erleidet er 1 Erschöpfung.
- Heilen: Wähle ein Monster innerhalb von 3 Feldern zu diesem Monster und wirf einen roten Machtwürfel. Das Monster gewinnt die gewürfelten Herzen zurück.
- Grauenerregend: Jeder Held, der zu mindestens 1 grauenerregenden Monster benachbart ist, verringert seine Willenskraft um 1 (bis zu einem Minimum von 1).

### Wendigo  *(EN: Wendigo)* · `wendigo`
**Eigenschaften:** Kalt, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Aggressiv: Dieses Monster kann in seinem Zug 2 Aktionen für Angriffe verwenden.
- Tarnung: Jeder Angriff, der auf dieses Monster zielt, muss 3 Reichweite mehr haben als normal; sonst gilt er als Fehlschlag.
- Eiskalt: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet er 1 Erschöpfung.


## Visionen der Dämmerung

### Mantikor  *(EN: Manticore)* · `manticore`
**Eigenschaften:** Wildnis, Dunkel · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Durchbohren 2: Dieser Angriff ignoriert 2 Schild des Verteidigers.
- Aggressiv: Dieses Monster kann in seinem Zug 2 Aktionen für Angriffe verwenden.
- Durchbohren 3: Dieser Angriff ignoriert 3 Schild des Verteidigers.
- Gift: Wenn dieser Angriff mindestens 1 Herz verursacht (nach Verrechnung der Verteidigung), wird das Ziel vergiftet.
- Durchbohren 4: Dieser Angriff ignoriert 4 Schild des Verteidigers.

### Oger  *(EN: Ogre)* · `ogre`
**Eigenschaften:** Gebäude, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Zurückstoßen: Nimm das Ziel vom Spielplan und stelle es dann auf ein leeres Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Das Ziel betritt dieses Feld.
- Fleischfresser: Lege jedes Mal, wenn ein Held, dessen Heldenmarker nicht auf dieser Karte liegt, durch einen Angriff dieses Monsters mindestens 1 Herz erleidet, 1 seiner Heldenmarker auf diese Karte. Für jeden Heldenmarker auf dieser Karte steigt die Lebenskraft dieses Monsters um +2. Sobald dieses Monster besiegt wird, werden alle Heldenmarker von dieser Karte abgeworfen.

### Troll  *(EN: Troll)* · `troll`
**Eigenschaften:** Gebirge, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Ausholen: Benutze diese Fähigkeit sofort, nachdem du einen Angriff ausgeführt hast, um eine beliebige Anzahl an Figuren zu wählen, die durch diesen Angriff betroffen sind. Jede dieser Figuren muss eine Willenskraft-Probe ablegen. Falls keine der Figuren die Probe besteht, erleidet jede gewählte Figur 2 Herzen und ist Betäubt.
- Weitreichend: Dieses Monster kann mit einem Nahkampfangriff bis zu zwei Felder weit angreifen.
- Rundumschlag: Führe einen Angriff aus. Dieser Angriff betrifft alle anderen Figuren, die innerhalb von 2 Feldern in der Sichtlinie dieses Monsters stehen. Jede Figur wirft ihre eigenen Verteidigungswürfel.


## Bande der Wildnis

### Tiefenelf  *(EN: Deep Elf)* · `deep-elf`
**Eigenschaften:** Dunkel, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Tarnung: Jeder Angriff, der auf dieses Monster zielt, muss 3 Reichweite mehr haben als normal; sonst gilt er als Fehlschlag.
- Durchbohren 2: Dieser Angriff ignoriert bis zu 2 Schild des Verteidigers.
- Durchbohren 3: Dieser Angriff ignoriert bis zu 3 Schild des Verteidigers.
- Riposte: Jedes Mal wenn eine benachbarte Figur einen Angriff durchführt, der dieses Monster betrifft, erleidet jene Figur Herzen in Höhe des Verteidigungswurfs. Falls der Angriff fehlschlägt, erleidet die Figur stattdessen so viele Herzen wie Herzen gewürfelt wurden.
- Durchbohren 4: Dieser Angriff ignoriert bis zu 4 Schild des Verteidigers.

### Höllenhund  *(EN: Hellhound)* · `hellhound`
**Eigenschaften:** Heiß, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Jagen: Nachdem dieser Angriff durchgeführt worden ist, kannst du das Ziel vom Spielplan nehmen und es auf ein leeres zu diesem Monster benachbartes Feld stellen.
- Durchbohren 2: Dieser Angriff ignoriert 2 Schild auf den geworfenen Verteidigungswürfeln.
- Feuerodem: Ziehe vom Zielfeld aus einen Pfad von 4 Feldern in beliebiger Richtung. Alle Figuren auf diesen 4 Feldern sind vom Angriff betroffen. Jede Figur wirft ihre eigenen Verteidigungswürfel.
- Durchbohren 3: Dieser Angriff ignoriert 3 Schild auf den geworfenen Verteidigungswürfeln.

### Kobold  *(EN: Kobold)* · `kobold`
**Eigenschaften:** Gebäude, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [4, 2], p3: [8, 2], p4: [9, 3]
- Schwarm: Dieses Monster fügt für jedes andere zum Ziel benachbarte Monster +1 Herz zu.
- Wendig: Dieses Monster kann sich durch Felder bewegen, auf denen Helden stehen.
- Brut: Dieses Monster wird während des Aufbaus nicht aufgestellt.
- Brutmeister: Zu Beginn jedes eigenen Spielzuges stellt der Overlord 1 normalen Kobold auf ein zu diesem Monster benachbartes Feld (Gruppengröße einhalten).


## Pakt der Helden

### Krähenhexe  *(EN: Crow Hag)* · `crow-hag`
**Eigenschaften:** Dunkel, Zivilisiert · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Lebensdurst 1: Jedes Mal wenn ein Held innerhalb von 5 Feldern Entfernung zu diesem Monster mindestens 1 Herz zurückgewinnt, reduziert dieser Held die Anzahl der zurückgewonnenen Herzen um 1 (bis zu einem Minimum von 0).
- Todesomen: Wähle 1 Helden in Sichtlinie dieses Monsters. Dieser Held erleidet entweder 2 Herzen oder erhält 1 Zustand deiner Wahl.
- Lebensdurst 2: Jedes Mal wenn ein Held innerhalb von 5 Feldern Entfernung zu diesem Monster mindestens 1 Herz zurückgewinnt, reduziert dieser Held die Anzahl der zurückgewonnenen Herzen um 2 (bis zu einem Minimum von 0).

### Dämonenfürst  *(EN: Demon Lord)* · `demon-lord`
**Eigenschaften:** Heiß, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Verwelken: Das Ziel erleidet 1 Erschöpfung.
- Hexerei 2: Nach seinem Angriffswurf, kann dieses Monster bis zu 2 Reichweite in Herzen umwandeln oder bis zu 2 Herzen in Reichweite.
- Hexerei 3: Nach seinem Angriffswurf, kann dieses Monster bis zu 3 Reichweite in Herzen umwandeln oder bis zu 3 Herzen in Reichweite.
- Aura 1: Jedes Mal wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet dieser Held 1 Herz.

### Skelett-Bogenschütze  *(EN: Skeleton Archer)* · `skeleton-archer`
**Eigenschaften:** Verflucht, Zivilisiert · **Gruppengrößen [Diener,Meister]:** p2: [2, 1], p3: [3, 1], p4: [4, 1]
- Wiederbelebung: Jedes Mal wenn dieses Monster Herzen erleidet und nicht besiegt wird, gewinnt es so viel Herzen zurück wie es dem erlittenen Schaden oder der Anzahl der Monster aus dieser Gruppe innerhalb von 3 Feldern zu ihm entspricht, je nachdem was weniger ist.
- Durchbohren 1: Dieser Angriff ignoriert 1 Schild des Verteidigers.
- Durchbohren 2: Dieser Angriff ignoriert 2 Schild des Verteidigers.


## Hüter des Geheimnisses

### Blutaffe  *(EN: Blood Ape)* · `blood-ape`
**Eigenschaften:** Höhle, Heiß · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Aggressiv: Dieses Monster kann in seinem Zug 2 Aktionen für Angriffe verwenden.
- Sprungangriff: Dieses Monster bewegt sich bis zu seiner Geschwindigkeit. Dabei kann es sich durch Felder mit gegnerischen Figuren bewegen. Dann führt es einen Angriff aus, der jede Figur betrifft, durch die es sich während dieser Aktion bewegt hat.

### Ferrox  *(EN: Ferrox)* · `ferrox`
**Eigenschaften:** Höhle, Wasser · **Gruppengrößen [Diener,Meister]:** p2: [1, 1], p3: [2, 1], p4: [3, 1]
- Krankheit: Falls dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), ist das Ziel erkrankt.
- Durchbohren 2: Dieser Angriff ignoriert bis zu 2 Schild des Verteidigers.
- Auslaugen: Wähle 1 zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Falls sie misslingt, erleidet der Held 2 Erschöpfung und dieses Monster gewinnt 2 Herzen zurück.
- Durchbohren 3: Dieser Angriff ignoriert bis zu 3 Schild des Verteidigers.

### Naga  *(EN: Naga)* · `naga`
**Eigenschaften:** Wasser, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Gift: Falls dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), ist das Ziel vergiftet.
- Hexerei 1: Nach einem seiner Angriffswürfe kann dieses Monster bis zu 1 Reichweite in Herzen oder bis zu 1 Herz in Reichweite umwandeln.
- Hexerei 2: Nach einem seiner Angriffswürfe kann dieses Monster bis zu 2 Reichweite in Herzen oder bis zu 2 Herzen in Reichweite umwandeln.
- Einschnüren: Wähle 1 zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Falls sie misslingt, ist er gelähmt, dieses Monster kann sich 1 Feld weit bewegen und dann kannst du den Helden auf ein leeres zu diesem Monster benachbartes Feld stellen.
- Hexerei 3: Nach einem seiner Angriffswürfe kann dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.


## Scherben von Everdark

### Finsterer Minotaurus  *(EN: Dark Minotaur)* · `dark-minotaur`
**Eigenschaften:** Zivilisiert, Dunkel · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Durchbohren 1: Dieser Angriff ignoriert 1 Schild des Verteidigers.
- Stampede: Jedes Mal wenn dieses Monster ein Ziel auf einem Feld angreift, zu dem es zu Beginn seiner Aktivierung nicht benachbart war, wird seinem Angriffswurf 1 roter Machtwürfel hinzugefügt.
- Schmutzige Finsternis: Am Ende der Aktivierung dieses Monsters wird jeder Held innerhalb von 3 Feldern zu diesem Monster erkrankt.
- Pestbeulen: Jedes Mal wenn ein erkrankter Held innerhalb von 3 Feldern zu 1 oder mehr Monstern mit Pestbeulen freiwillig 1 oder mehr Erschöpfung erleidet, erleidet dieser Held 1 Herz.
- Durchbohren 2: Dieser Angriff ignoriert 2 Schild des Verteidigers.
- Durchbohren 4: Dieser Angriff ignoriert 4 Schild des Verteidigers.

### Eiswyrm  *(EN: Ice Wyrm)* · `ice-wyrm`
**Eigenschaften:** Kalt, Höhle · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Eingraben: Niedergestreckte Helden innerhalb von 1 Feld zu diesem Monster können Herzen nur durch die Aktion Aufrappeln und durch Heldentaten zurückgewinnen.
- Weitreichend: Dieses Monster kann bis zu 2 Felder weit entfernte Ziele angreifen.
- Eiskalt: Jedes Mal wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet dieser Held 1 Erschöpfung.

### Schatten  *(EN: Shade)* · `shade`
**Eigenschaften:** Verflucht, Kalt · **Gruppengrößen [Diener,Meister]:** p2: [2, 1], p3: [3, 1], p4: [4, 1]
- Durchbohren 1: Dieser Angriff ignoriert 1 Schild des Verteidigers.
- Seelenfessel 1: Jedes Mal wenn ein Held innerhalb von 3 Feldern Entfernung zu diesem Monster 1 oder mehr Erschöpfung zurückgewinnt, kann dieses Monster 1 Herz erleiden, um die Anzahl zurückgewonnener Erschöpfung um 1 zu reduzieren (bis zu einem Minimum von 0).
- Flimmern: Wähle 1 Helden innerhalb von 3 Feldern Entfernung zu diesem Monster. Nimm das Monster vom Spielplan und stelle es auf ein zu diesem Helden benachbartes Feld. Falls das Monster während dieser Aktivierung keinen Angriff ausgeführt hat, legt der Held eine Gespür-Probe ab. Führe einen Angriff mit diesem Monster gegen diesen Helden aus, wenn die Probe misslingt.
- Durchbohren 2: Dieser Angriff ignoriert 2 Schild des Verteidigers.
- Seelenfessel 2: Jedes Mal wenn ein Held innerhalb von 3 Feldern Entfernung zu diesem Monster 1 oder mehr Erschöpfung zurückgewinnt, kann dieses Monster 2 Herzen erleiden, um die Anzahl zurückgewonnener Erschöpfung um 2 zu reduzieren (bis zu einem Minimum von 0).
- Seelenfessel 3: Jedes Mal wenn ein Held innerhalb von 3 Feldern Entfernung zu diesem Monster 1 oder mehr Erschöpfung zurückgewinnt, kann dieses Monster 3 Herzen erleiden, um die Anzahl zurückgewonnener Erschöpfung um 3 zu reduzieren (bis zu einem Minimum von 0).


## Nebel von Bilehall

### Knochenschrecken  *(EN: Bone Horror)* · `bone-horror`
**Eigenschaften:** Höhle, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Durchbohren 1: Dieser Angriff ignoriert 1 Schild des Verteidigers.
- Ausgedehnt: Jedes Mal wenn dieses Monster einen Angriff ausführt, darf es eine Figur als Ziel wählen, die bis zu 3 Felder entfernt ist und sich in seiner Sichtlinie befindet.
- Geschmeidig: Befreundete Figuren blockieren die Sichtlinie dieses Monsters nicht.
- Durchbohren 2: Dieser Angriff ignoriert 2 Schild des Verteidigers.
- Peitschenhieb: Nachdem dieser Angriff durchgeführt worden ist, wird das Ziel auf ein leeres Feld gestellt, das bis zu 2 Felder von diesem Monster entfernt ist.

### Gezüchtwandler  *(EN: Broodwalker)* · `broodwalker`
**Eigenschaften:** Dunkel, Gebäude · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Verängstigen: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), ist das Ziel verängstigt.
- Überquellen: Die Helden behandeln jedes zu diesem Monster benachbarte Feld als Schlammfeld.
- Kolonisierung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), ist das Ziel gelähmt und verängstigt.
- Schwarmverteidigung: Die Helden behandeln jedes zu diesem Monster benachbarte Feld als Gefahrenfeld.

### Wiederbelebte  *(EN: Reanimate)* · `reanimate`
**Eigenschaften:** Zivilisiert, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [3, 1], p3: [3, 2], p4: [4, 2]
- Schwarm: Dieses Monster fügt pro anderem zum Ziel benachbarten Monster +1 Herz zu.
- Phalanx: Wenn dieses Monster benachbart zu einer Figur aus seiner Monstergruppe ist, wird sein brauner Verteidigungswürfel durch 1 grauen Verteidigungswürfel ersetzt.
- Wiederbelebung: Jedes Mal wenn dieses Monster Herzen erleidet und nicht besiegt wird, gewinnt es so viel Herzen zurück, wie es dem erlittenen Schaden oder der Anzahl Monster dieser Gruppe innerhalb von 3 Feldern zu ihm entspricht, je nachdem, was weniger ist.
- Manöver: Wähle 1 normales Monster, das zu diesem Monster benachbart ist. Das gewählte Monster erhält 2 Bewegungspunkte.


## Die rostenden Ketten

### Markpriester  *(EN: Marrow Priest)* · `marrow-priest`
**Eigenschaften:** Dunkel, Gebäude · **Gruppengrößen [Diener,Meister]:** p2: [1, 0], p3: [0, 1], p4: [1, 1]
- Tödliche Bindung: Das Ziel legt eine Wissen-Probe ab. Wenn die Probe misslingt, wird sein Heldenmarker auf diese Karte gelegt. Ein Held, dessen Marker sich auf dieser Karte befindet, kann keine Herzen zurückgewinnen, egal wodurch. Sobald ein Monster aus dieser Gruppe besiegt oder ein Held niedergestreckt wird, werden alle Heldenmarker von dieser Karte abgeworfen.
- Schattenschritt: Jedes Mal wenn ein Held einen Angriff ausführt, der dieses Monster zum Ziel hat, darf er 1 Schub ausgeben. Wenn er dies nicht tut, erhält dieses Monster 5 Bewegungspunkte, nachdem der Angriff durchgeführt worden ist.

### Schlurfender Koloss  *(EN: Shambling Colossus)* · `shambling-colossus`
**Eigenschaften:** Wildnis, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [0, 1], p3: [1, 1], p4: [2, 1]
- Durchstoßen: Jeder Angriff dieses Monsters ignoriert 1 Schild für jeden Verteidigungswürfel, den das Ziel dieses Angriffs geworfen hat.
- Quälen: Jedes Mal wenn ein Held innerhalb von 3 Feldern zu diesem Monster einen Angriff ausführt, der dieses Monster zum Ziel hat, legt der Held vor dem Würfeln eine Willenskraft-Probe ab. Wenn die Probe misslingt, wird er verängstigt.

### Die Verlorenen  *(EN: The Dispossessed)* · `the-dispossessed`
**Eigenschaften:** Zivilisiert, Verflucht · **Gruppengrößen [Diener,Meister]:** p2: [2, 0], p3: [1, 1], p4: [2, 1]
- Ätherischer Griff: Zu Beginn jedes Zugs des Overlords darf dieses Monster 1 Heldenmarker von seiner Basis abwerfen. Wenn es dies tut, wird es vom Spielplan entfernt und innerhalb von 3 Feldern zu dem entsprechenden Helden gestellt.
- Mal der Furcht: Wähle einen Helden in der Sichtlinie dieses Monsters und lege den Heldenmarker dieses Helden auf die Basis dieses Monsters.
- Verängstigen: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Verteidigung), wird das Ziel verängstigt.
