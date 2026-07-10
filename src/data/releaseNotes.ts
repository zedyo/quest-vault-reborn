/**
 * Öffentliche Release Notes für die Versionsanzeige auf der Startseite.
 *
 * WICHTIG: Hier stehen AUSSCHLIESSLICH für die Allgemeinheit relevante Infos
 * (sichtbare Features, Verbesserungen, Datenpflege). Bewusst NICHT enthalten:
 * interne Projektstrategie, Monetarisierung/Spenden, technische Interna,
 * Sicherheits-Details. Neueste Version steht oben.
 */

export interface ReleaseNote {
  /** Versionsnummer, muss zur package.json passen (siehe __APP_VERSION__) */
  version: string
  /** Veröffentlichungsdatum im Format YYYY-MM-DD */
  date: string
  /** Kurze, öffentlich verständliche Überschrift */
  title: string
  /** Stichpunkte – was für Nutzer:innen neu/besser ist */
  highlights: string[]
}

export const RELEASE_NOTES: ReleaseNote[] = [
  {
    version: '1.6.3',
    date: '2026-07-10',
    title: 'Atmosphäre & Schnellzugriff auf der neuen Startseite',
    highlights: [
      'Stimmungsvolle Hintergrund-Effekte hinter dem Inhalt: aufsteigende Funken (Overlord) bzw. goldene Lichtpunkte (Heldentum) und ein sanft atmender Schein.',
      'Neuer „+ Neue Quest"-Knopf oben in der Kopfzeile – von überall schnell eine Quest starten.',
      'Bewegungseffekte werden bei aktivierter Systemeinstellung „Bewegung reduzieren" automatisch ausgeblendet.',
    ],
  },
  {
    version: '1.6.2',
    date: '2026-07-10',
    title: 'Neue Startseite & Seitenleisten-Navigation',
    highlights: [
      'Die App hat jetzt eine feste Seitenleiste als Kommandozentrale (Werkzeuge + Bibliothek) statt der oberen Menüleiste – auf dem Handy klappt sie über das Menü-Symbol auf.',
      'Die Startseite ist ein echtes Dashboard: „Weiter im Spiel" (deine aktive Session), „Zuletzt bearbeitet" (deine Quests), „Monster des Tages" und Schnellzugriffe.',
      'Neue, schlanke Icons statt Emojis; alles folgt weiterhin dem gewählten Design (Overlord/Heldentum).',
    ],
  },
  {
    version: '1.6.1',
    date: '2026-07-10',
    title: 'Design-System-Seite – der Stil zum Nachschlagen',
    highlights: [
      'Neue Seite „🎨 Design-System" (unter „📚 Daten") zeigt das komplette visuelle System auf einen Blick: Farben, Schriften, Buttons, Karten, Marker, Zustände, Tabellen und mehr.',
      'Beide Designs lassen sich direkt auf der Seite umschalten – alles färbt sich live um.',
      'Eine lebende Vorlage, die exakt den echten Stil der App wiedergibt.',
    ],
  },
  {
    version: '1.6.0',
    date: '2026-07-10',
    title: 'Neues Design – zwei umschaltbare Looks: Overlord & Heldentum',
    highlights: [
      'Komplett überarbeitetes Design mit zwei Stimmungen: „Overlord" (dunkel, blutrot – für den Spielleiter) und „Heldentum" (hell, gold – für die Helden-Spieler).',
      'Umschalten jederzeit über das 🎨-Symbol oben rechts; deine Wahl bleibt gespeichert.',
      'Neue, thematisch passende Schriften – edle Fantasy-Serifen für Überschriften und ein gut lesbarer Fließtext, weiterhin komplett offline.',
      'Beide Designs sind durchgängig auf gute Lesbarkeit abgestimmt und funktionieren auf allen Seiten (Karten, Filter, Session-Tracker, Kartenbauer).',
    ],
  },
  {
    version: '1.5.3',
    date: '2026-07-08',
    title: 'Session-Tracker: Gegenstände verschieben & Kartenbilder vergrößern',
    highlights: [
      'Gemeinsame Ausrüstung, die einem Helden zugewiesen wurde, lässt sich jederzeit wieder in den Partei-Vorrat zurücklegen oder einem anderen Helden geben.',
      'Ein Klick auf ein Item-Kartenbild öffnet die Karte jetzt groß und gut lesbar in einem Fenster.',
      'Die Auswahl-Menüs zum Zuweisen von Gegenständen sind besser lesbar und einheitlich gestaltet.',
    ],
  },
  {
    version: '1.5.2',
    date: '2026-07-08',
    title: 'Session-Tracker: Item-Bilder, XP-Stepper & Feinschliff',
    highlights: [
      'Gekaufte und erhaltene Gegenstände im Szenario zeigen jetzt Name und Kartenbild direkt in der Liste – man erkennt sofort, welches Item es ist.',
      'Erfahrung (Helden- und Overlord-XP) stellst du bequem mit + / − -Schaltflächen ein.',
      'Einheitliche Auswahl-Optik: einzeln und mehrfach vorhandene Karten (z. B. Overlord-Karten) werden jetzt gleich hervorgehoben.',
      'Gemeinsame Ausrüstung: Gegenstände aus dem Partei-Vorrat lassen sich im Helden-Bereich direkt einem Helden zuweisen.',
      'Kartentext-Korrekturen: Friedvolle Rast (Barde), Leichtfüssig und Schnellfeuer (Kopfgeldjäger) zeigen jetzt die richtigen Symbole und Regeltexte.',
    ],
  },
  {
    version: '1.5.1',
    date: '2026-07-06',
    title: 'Session-Tracker: Feinschliff, Marker & Korrekturen',
    highlights: [
      'Held „Stahlhörner" heißt jetzt korrekt „Stahlhorn".',
      'Szenario-Auswahl: Einführung, Zwischenspiel und Finale sind als „Feste Szenarien" klar hervorgehoben – in der Auswahlliste und als Kennzeichnung im Protokoll.',
      'Neue Marker-Zähler: Bedrohungsmarker beim Overlord und ein gemeinsamer Schicksalsmarker der Partei – jederzeit anpassbar und in der Übersicht sichtbar.',
      'Einkauf berücksichtigt jetzt den Akt: In einem Akt-1-Szenario werden nur Akt-1-Gegenstände angeboten, nach dem Zwischenspiel Akt 1 und 2 getrennt, in Akt 2 nur noch Akt-2-Gegenstände.',
      'Overlord-Karten, die es mehrfach gibt, lassen sich jetzt in der richtigen Anzahl (Exemplare) besitzen und kaufen.',
      'Gekaufte und erhaltene Gegenstände erscheinen sofort in der Szenario-Übersicht; der Partei-Vorrat („Gemeinsame Ausrüstung") ist im Helden-Bereich sichtbar.',
      'Helden-Bereich zeigt standardmäßig nur die tatsächlich besessenen Gegenstände; der vollständige Item-/Relikt-Katalog lässt sich per Button einblenden.',
    ],
  },
  {
    version: '1.5.0',
    date: '2026-07-05',
    title: 'Session-Tracker – Szenario-Protokoll (Teil 2)',
    highlights: [
      'Neuer Tab „Szenarien" im Session-Tracker: Halte fest, welches Szenario deine Gruppe gespielt hat – aus einer Titel-Liste je Kampagne (alle 9 offiziellen Kampagnen), aus den Nebenquests/Gerüchten oder als Freitext, jeweils mit Akt und Ausgang.',
      'Pro Szenario trägst du die Belohnungen ein: Erfahrung je Held, Overlord-XP, Partei-Gold sowie erhaltene Gegenstände, Relikte und Overlord-Belohnungskarten.',
      'Einkauf & Ausbildung: gekaufte und verkaufte Gegenstände (auch Startausrüstung), neu gelernte Klassen-Fähigkeiten und vom Overlord gekaufte Klassenkarten.',
      'Alles wird automatisch auf den aktuellen Stand angerechnet – die Übersicht (Akt, Partei-Gold, Overlord-XP, Fähigkeiten/Gegenstände je Held) aktualisiert sich sofort. Ein Szenario löschen macht seine Belohnungen exakt wieder rückgängig.',
      'Nur Szenario-Titel + Akt werden gespeichert (keine Questbuch-Inhalte); der komplette Verlauf bleibt im JSON-Export enthalten.',
    ],
  },
  {
    version: '1.4.0',
    date: '2026-07-05',
    title: 'Session-Tracker – laufende Kampagne festhalten (Teil 1: Setup)',
    highlights: [
      'Neuer Session-Tracker: Lege eine benannte Session zu einer Kampagne an und halte deinen laufenden Spielstand fest.',
      'Helden-Setup: Für jeden Helden Spieler, Klasse, Start-Fähigkeiten und Startausrüstung wählen – Startausrüstung und Begleiter werden automatisch aus der Klasse vorbelegt.',
      'Overlord-Setup: gewählte Decks und besessene Karten, Leutnant mit passendem Plotdeck und Plotkarten, aktive Gerüchte, Overlord-Relikte und Start-XP.',
      'Alles bleibt offline im Browser gespeichert und lässt sich als JSON-Datei sichern und wieder importieren – so geht kein Spielstand verloren.',
      'Als Nächstes folgt das Szenario-Protokoll: XP, Gold, Items und Einkauf pro gespieltem Szenario automatisch mitführen.',
    ],
  },
  {
    version: '1.3.21',
    date: '2026-07-05',
    title: 'Deutsche Kartenbilder für Klassen-Startausrüstung & Begleiter',
    highlights: [
      'Klassenübersicht: Startausrüstung und Begleiter zeigen jetzt die deutschen Original-Kartenbilder (37 Startgegenstände + 4 Begleiter – Wolf, Untoter Diener, Belebter Stein, Schattenseele). Klick vergrößert die Karte.',
      'Einige Startgegenstände tragen jetzt ihren vollständigen Kartennamen (z. B. „Schartige Kriegsaxt" statt „Axt", „Gefiedertes Beil", „Eingeborenen-Umhang", „Grabesstab").',
    ],
  },
  {
    version: '1.3.20',
    date: '2026-07-05',
    title: 'Nahkampf/Fernkampf bei Monstern + Suchfeld-Feinschliff',
    highlights: [
      'Monster-Übersicht: Hinter den Angriffswürfeln zeigt jetzt ein Icon die Angriffsart – eine rote Kriegsaxt für Nahkämpfer, ein grüner Bogen für Fernkämpfer (für alle 56 Monstergruppen, in Diener- und Meister-Werten).',
      'Alle Suchfelder haben nun ein festes Lupen-Icon links im Feld; der Platzhaltertext wird etwas dezenter dargestellt, damit er sich besser vom eingegebenen Text abhebt.',
    ],
  },
  {
    version: '1.3.19',
    date: '2026-07-05',
    title: 'UI-Feinschliff: Begriffe, Filter & Klassenübersicht',
    highlights: [
      'Klassenübersicht: Begleiter und Startausrüstung stehen jetzt oben (vor den Fähigkeitskarten) – jeweils mit dem Kartenbild von Begleiter und Startgegenstand.',
      'Neuer Archetyp-Filter (Krieger/Heiler/Magier/Kundschafter) mit runden Symbol-Icons – jetzt auch in der Klassenübersicht, nicht nur bei den Helden.',
      'Neuer „Grundspiel/Erweiterungen"-Filter bei Monster, Overlord, Leutnants, Agenten, Plotdecks und Reisekarten.',
      'Errata & FAQ: nach Kategorie filterbar; die Kapitelnummern wurden aus den Kategorienamen entfernt.',
      'Begriffe an das Regelbuch angeglichen: „Geistesgegenwart" (statt Gespür), „Kundschafter" (statt Späher), bei Helden „Geschwindigkeit"/„Lebenskraft"; bei Monstern heißen die Spalten jetzt „Diener" und „Meister".',
      'Ausgewählte Umschalter (z. B. Shop-Karten/Relikte) werden jetzt hell hervorgehoben statt abgedunkelt.',
      'Mobil: In der Monster-Übersicht überlappen die Angriffswürfel den Kartenrand nicht mehr.',
    ],
  },
  {
    version: '1.3.18',
    date: '2026-07-05',
    title: 'Errata & FAQ jetzt auch bei Monsterfähigkeiten und Szenarien',
    highlights: [
      'Monsterfähigkeiten-Errata (z. B. Feuerodem, Durchbohren, Netz, Beschützen) erscheinen jetzt direkt am jeweiligen Monster in der Monster-Übersicht – aufklappbar an der Monsterkarte. Zusätzlich gibt es oben auf der Monster-Seite ein durchsuchbares Sammel-Panel mit allen Fähigkeits-Klarstellungen.',
      'Szenario-Errata sind in der Kampagnen-Übersicht bei der jeweiligen Kampagne aufklappbar (mit Szenarionamen) – so gehen sie nicht nur in den Regelklärungen unter.',
      'Der Held Augur Grisom zeigt jetzt korrekt seine Errata (Namensvariante „Augur Grimson" aus dem CRRG verknüpft).',
    ],
  },
  {
    version: '1.3.17',
    date: '2026-07-05',
    title: 'Errata & FAQ aus dem Community Rules Reference Guide',
    highlights: [
      'Neu: An Helden, Klassen, Items/Relikten, Overlord-, Plot- und Monster-Karten, Gerüchten und Kampagnen gibt es jetzt eine aufklappbare „Errata & FAQ"-Box (standardmäßig eingeklappt). Sie zeigt offizielle Errata und Regelklärungen aus dem frei verfügbaren Community Rules Reference Guide (CRRG V1.15) – z. B. wie eine Karte genau gemeint ist oder welche offizielle Anpassung es gab.',
      'Diese Zusatzinfos erweitern die Karten nur als optionale Variante – der Original-Kartentext bleibt unverändert.',
      'Neue Seite „Errata & FAQ": durchsuchbare Regelklärungen (164 Begriffe alphabetisch) und alle komponentenbezogenen Errata/FAQ nach Schlagwort – mit Verweis auf die jeweilige Karte.',
      'Quelle jeweils klar angegeben: Community Rules Reference Guide V1.15 (crrg.descent-community.org).',
    ],
  },
  {
    version: '1.3.16',
    date: '2026-06-29',
    title: 'Verbindungsstücke greifen sauber ineinander',
    highlights: [
      'Die Verbindungsstücke (Korridore, Endkappen, Eingang/Ausgang, Übergang) werden jetzt unverzerrt und im richtigen Seitenverhältnis dargestellt und haken korrekt in die angrenzenden Kartenplättchen ein – die Tabs stehen über und greifen in die Nachbarn.',
      '1×2-Stücke verbinden über die Breite (links/rechts), 2×1-Stücke über die Höhe (oben/unten); per Drehen auf die passende Kante ausrichtbar.',
    ],
  },
  {
    version: '1.3.15',
    date: '2026-06-29',
    title: 'Verbindungsstücke + Geländeleisten im Kartenbauer',
    highlights: [
      'Neu: die unnummerierten Verbindungsstücke (Korridor-/Extension-Stücke, Endkappen, Eingang/Ausgang, Übergang innen↔außen) aus Grundspiel, Schatten von Nerekhall und Nebel über Bilehall – bisher fehlten sie komplett. Sie stehen in einer eigenen „Verbindungsstücke"-Gruppe ganz oben in der Plättchen-Auswahl.',
      'Diese Verbindungsstücke dürfen – anders als die nummerierten Plättchen – mehrfach platziert werden (die Auswahl bleibt nach dem Setzen aktiv).',
      'Überwucherung und Alte Mauer werden jetzt als längliche Leiste (wie eine Tür-Absperrung) auf der Feldkante dargestellt und sind drehbar.',
    ],
  },
  {
    version: '1.3.14',
    date: '2026-06-29',
    title: 'Nummerierte Zielmarker im Kartenbauer',
    highlights: [
      'Ziel- und Suchmarker lassen sich jetzt mit einer Nummer oder einem Zeichen beschriften (z. B. „1"–„4" oder „★") – genau wie die nummerierten Marker auf den Kampagnenbuch-Karten. Klick auf das „#" am Marker setzt die Beschriftung.',
      'Damit lassen sich konkrete Buch-Karten (getestet an einer Karte aus „Schatten von Nerekhall") originalgetreu nachbauen.',
    ],
  },
  {
    version: '1.3.13',
    date: '2026-06-29',
    title: 'Kartenbauer: Karten wie im Buch nachbauen',
    highlights: [
      'Türen, verschlossene Türen und Fallgitter erscheinen jetzt als farbige Absperrung (rot/gelb/grau) auf der Feldkante zwischen zwei Kartenteilen – genau wie auf den Quest-Buch-Diagrammen, statt als Tür-Symbol.',
      'Alle Overlays lassen sich jetzt drehen (↻): Türen auf die richtige Kante (oben/rechts/unten/links), Marker und Figuren frei.',
      'Neue platzierbare Elemente: Helden-Start/Eingang sowie Verbündete und NSC-Figuren (Verbündeter, Dorfbewohnerin, Raythen, Serena, Geißel, Rabenschwarm).',
      'Aufgeräumt: Wasser/Lava/Eis sind als platzierbare Marker entfernt – dieses Gelände ist in Descent auf die Plättchen gedruckt und kommt so nicht als loser Marker auf den Karten vor.',
      'Der Kartenbauer speichert deinen Entwurf jetzt automatisch im Browser – er ist beim nächsten Besuch wieder da.',
    ],
  },
  {
    version: '1.3.12',
    date: '2026-06-26',
    title: 'Regeln & Referenz',
    highlights: [
      'Neue Seite „📖 Regeln & Referenz": ein Schnellnachschlag für die Spielsymbole (Herz, Schub, Erschöpfung, Aktion, Bewegung, Verteidigung), die Angriffs- und Verteidigungswürfel und den Spielablauf.',
      'Dazu ein kleines Begriffs-Glossar (Zustände, Durchsuchen, Bedrohung, Gelände …) mit Verweisen auf die passenden Übersichtsseiten – alles in eigenen, knappen Worten zusammengefasst.',
    ],
  },
  {
    version: '1.3.11',
    date: '2026-06-25',
    title: 'Echte Spielmarker im Kartenbauer',
    highlights: [
      'Die Overlay-Marker im Kartenbauer und Quest-Editor sind jetzt die echten Descent-Token als transparente Original-Bilder – Türen, Fallgitter, Gelände (Wasser, Heiß, Eis, Überwucherung …), Ziel- und Suchmarker sowie Dorfbewohner.',
      'Neuer visueller Token-Auswahldialog: nach Kategorie gruppiert mit Vorschaubildern statt nur Text.',
    ],
  },
  {
    version: '1.3.10',
    date: '2026-06-24',
    title: 'Zustandskarten',
    highlights: [
      'Neue Seite „🩹 Zustände" mit allen 10 Zustandskarten (Betäubt, Blutend, Brennend, Erkrankt, Gelähmt, Geschwächt, Todgeweiht, Verängstigt, Verflucht, Vergiftet) als deutsche Original-Karten.',
      'Pro Zustand der vollständige Effekttext, Erweiterungszuordnung und das deutsche Kartenbild.',
    ],
  },
  {
    version: '1.3.9',
    date: '2026-06-24',
    title: 'Reisekarten mit deutschem Ereignistext',
    highlights: [
      'Alle 41 Reise- und Stadtereignis-Karten zeigen jetzt die deutschen Original-Kartenbilder.',
      'Neu: Der vollständige Ereignistext jeder Karte ist ausgeschrieben – pro Geländetyp ein Abschnitt. Karte anklicken öffnet das Bild samt aufgeschlüsseltem Text.',
    ],
  },
  {
    version: '1.3.8',
    date: '2026-06-24',
    title: 'Hauptmänner (Leutnants) als deutsche Originalkarten',
    highlights: [
      'Alle Leutnant-Formen (Akt I + II) zeigen jetzt die deutschen Original-Hauptmannkarten.',
      'Namen und Fähigkeitstexte wortgetreu von den Karten erfasst – u. a. heißt „Verminous" auf der Karte „Der Rattenkönig" und der Nerekhall-Ettin „Sinistrael"; die vollständigen Fähigkeits-Regeltexte stammen von den Kartenrückseiten.',
    ],
  },
  {
    version: '1.3.7',
    date: '2026-06-23',
    title: 'Overlord-Karten als deutsche Originalkarten',
    highlights: [
      'Alle 105 Overlord-Karten zeigen jetzt die deutschen Original-Kartenbilder (Basis-Deck, alle Klassen, Universal- und Belohnungskarten).',
      'Kartennamen und Regeltexte wurden wortgetreu von den deutschen Karten neu erfasst – u. a. Teuflisches Ritual (statt Unheiliges Ritual), Wiederkehr (statt Wiederauferstehung), Erfahrener Kämpfer, Unheilige Stärke.',
    ],
  },
  {
    version: '1.3.6',
    date: '2026-06-23',
    title: 'Kartenbilder vollständig statt beschnitten',
    highlights: [
      'Die deutschen Kartenbilder (Marktkarten, Relikte und Gerücht-Karten) waren am Rand teils zu knapp zugeschnitten – jetzt wird jede Karte vollständig inklusive Rahmen angezeigt.',
      'In der Gerücht-Übersicht wird die Karte in der Vorschau nicht mehr unten abgeschnitten.',
    ],
  },
  {
    version: '1.3.5',
    date: '2026-06-23',
    title: 'Gerücht-Texte, deutsche Markt-/Reliktbilder & Item-Filter',
    highlights: [
      'Gerücht-Karten zeigen jetzt den deutschen Kartentext. Akt-II-Gerüchte sind doppelseitig: Vorder- und Rückseite werden angezeigt, die Rückseite mit aufgeschlüsselter Overlord- und Helden-Belohnung.',
      'Marktkarten und Relikte erscheinen jetzt als deutsche Original-Kartenbilder (zuvor englisch); Relikte mit Helden- und Overlord-Seite.',
      'Neuer Ausrüstungs-Filter bei Items und Relikten: nach 1 Hand, 2 Hände, Rüstung, Zubehör sowie Nahkampf/Fernkampf – mehrere Filter lassen sich kombinieren.',
    ],
  },
  {
    version: '1.3.4',
    date: '2026-06-23',
    title: 'Gerücht-Karten – deutsche Originalkarten',
    highlights: [
      'Neue Seite „🗣️ Gerüchte" mit allen 41 Gerücht-Karten als deutsche Original-Kartenbilder – Akt I (25) und Akt II (16), umschaltbar und nach Sammlung filterbar.',
      'Pro Karte: deutscher Kartenname, Erweiterung und die Reise-Geländetypen (direkt von den Karten abgelesen). Karte anklicken öffnet das große Bild.',
      'Der Kartentext wird – wie bei Reise- und Kampagnenkarten – nicht abgetippt; das deutsche Kartenbild zeigt ihn vollständig.',
    ],
  },
  {
    version: '1.3.3',
    date: '2026-06-22',
    title: 'Deutsche Original-Marktkarten + Relikte',
    highlights: [
      'Alle 122 Marktkarten (Akt 1 + Akt 2): Namen und Regeltexte wortgetreu von den deutschen Original-Karten neu erfasst – die früheren groben Übersetzungen wurden ersetzt.',
      'Viele Karten heißen jetzt korrekt wie auf der deutschen Karte, u. a. Kettenrüstung (statt Kettenhemd), Feuersturm (statt Flammenopfer), Axt des Wächters, Eiserner Langspeer, Kriegsgeissel, Mantel der Täuschung.',
      'Alle 27 Relikte sind doppelseitig kartengenau erfasst (Helden- und Overlord-Seite), u. a. Armschienen der Macht, Klinge der Morgenröte, Höllenrune, Schild des dunklen Gottes.',
    ],
  },
  {
    version: '1.3.2',
    date: '2026-06-22',
    title: 'Deutsche Original-Klassenkarten + Hybrid-Klassen',
    highlights: [
      'Alle 24 Helden-Klassen: Fertigkeitsnamen und Regeltexte wortgetreu von den deutschen Original-Klassenkarten neu erfasst (ersetzen die bisherigen groben Übersetzungen); zahlreiche Klassennamen an die Karten angepasst, u. a. Apothecarius, Seneschall, Fallensteller, Schwarzmagier, Nekromant, Waldläufer, Geistsprecher.',
      'Neu: Startausrüstung jeder Klasse und die Begleiterkarten (Wolf, Belebter Stein, Schattenseele, Untoter Diener) werden jetzt kartengenau direkt bei der Klasse angezeigt.',
      '12 brandneue Hybrid-Klassen aufgenommen: Wahrsager, Gauner, Häretiker, Kreuzritter, Bewahrer, Rächer, Plünderer, Verwüster (Unsterbliche Legenden) sowie Wächter, Mönch, Kampfmagier, Stahlmagier (Rostende Ketten) – jeweils mit Hinweis, mit welchem Standard-Deck sie kombiniert werden.',
    ],
  },
  {
    version: '1.3.1',
    date: '2026-06-22',
    title: 'Deutsche Original-Monsterkarten',
    highlights: [
      'Alle 56 Monstergruppen zeigen jetzt die deutschen Original-Kartenbilder; mit dem Akt-1/Akt-2-Umschalter lässt sich die passende Kartenseite anzeigen.',
      'Sämtliche Fähigkeits-, Energie- und Aktionstexte aller Monster wurden wortgetreu von den deutschen Karten neu erfasst – die früheren groben Übersetzungen wurden ersetzt.',
      'Kartenbegriffe vereinheitlicht (z. B. „nach Verrechnung der Verteidigung", Durchbohren-Wortlaut) und etliche Fähigkeitsnamen an die Karten angepasst.',
    ],
  },
  {
    version: '1.3.0',
    date: '2026-06-22',
    title: 'Deutsche Original-Heldenkarten',
    highlights: [
      'Alle 60 Helden zeigen jetzt die deutschen Original-Kartenbilder (Vorder- und Rückseite) statt der bisherigen englischen Vorschau.',
      'Heldenfähigkeit und Heldentat aller Helden wortgetreu von den deutschen Karten übernommen – die früheren groben Übersetzungen wurden ersetzt.',
      '16 Heldennamen nach den Karten korrigiert, u. a. „Großmagier Cwellin", „Geistersprecher Mok", „Kundschafter Durik", „Leorik der Gelehrte", „Seherin Kel".',
    ],
  },
  {
    version: '1.2.4',
    date: '2026-06-17',
    title: 'Themes zum Umschalten',
    highlights: [
      'Neuer Design-Umschalter (🎨 oben rechts, auf dem Handy im Menü): wähle zwischen „Verlies" (warm), „Arkanblau" (das frühere Blau) und „Schiefer" (neutral).',
      'Die Auswahl wird gespeichert und gilt beim nächsten Besuch automatisch.',
    ],
  },
  {
    version: '1.2.3',
    date: '2026-06-17',
    title: 'Feinschliff & Tablet-Optimierung',
    highlights: [
      'Letzter Schliff des neuen Designs: zur Optik passende schlanke Scrollleisten, goldene Textauswahl und dezente Bewegungen, die sich abschalten, wenn das System reduzierte Bewegung wünscht.',
      'Layout auf Tablet und Handy geprüft – Menü, Filter und Übersichten passen sich sauber an die Bildschirmgröße an.',
    ],
  },
  {
    version: '1.2.2',
    date: '2026-06-17',
    title: 'Frische Startseite',
    highlights: [
      'Die Startseite zeigt jetzt alle Bereiche übersichtlich: Werkzeuge oben, darunter Kacheln für sämtliche Übersichten (Monster, Helden, Klassen, Items, Overlord, Leutnants, Agenten, Plotdecks, Kampagnen, Reisekarten).',
      'Aktualisierte Inhalte und Zählwerte sowie dezente Hover-Effekte auf den Kacheln.',
    ],
  },
  {
    version: '1.2.1',
    date: '2026-06-17',
    title: 'Aufgeräumte Navigation',
    highlights: [
      'Die Menüleiste ist entrümpelt: Werkzeuge bleiben oben, alle Übersichtsseiten (Monster, Helden, Klassen, Items, Overlord, Leutnants, Agenten, Plotdecks, Kampagnen, Reisekarten) liegen jetzt gebündelt unter „📚 Daten".',
      'Auf Tablet und Handy gibt es ein eigenes Menü (☰) – kein Zeilen-Wirrwarr mehr.',
    ],
  },
  {
    version: '1.2.0',
    date: '2026-06-17',
    title: 'Neues Design – wärmer & atmosphärischer',
    highlights: [
      'Frisches Erscheinungsbild: wärmere, dunklere Dungeon-Farben (Anthrazit/Braun mit Gold- und Pergament-Akzenten) – einheitlicher und stimmungsvoller.',
      'Neue Schriften: edle Fantasy-Überschriften (Cinzel) und gut lesbarer Fließtext (Inter), offline-fähig eingebettet.',
      'Durchgängig sichtbare Tastatur-Fokus-Markierung für bessere Bedienbarkeit. Weitere Design-Verbesserungen folgen.',
    ],
  },
  {
    version: '1.1.32',
    date: '2026-06-17',
    title: 'Overlays im Kartenbauer',
    highlights: [
      'Im Kartenbauer und Quest-Editor lassen sich jetzt Overlays platzieren: Tür, Schatztruhe, Ziel- und Suchmarker sowie Geländefelder (Wasser, Lava, Grube, Schlamm, Trümmer).',
      'Einfach „+ Overlay setzen" wählen und auf ein Feld klicken; im Quest-Editor werden die Overlays mit der Begegnung gespeichert.',
    ],
  },
  {
    version: '1.1.31',
    date: '2026-06-17',
    title: 'Reisekarten-Übersicht',
    highlights: [
      'Neue Seite „🧭 Reisekarten" mit allen 41 Reise- und Stadtereignis-Karten, gruppiert nach Erweiterung – inklusive Kartenbildern.',
      'Pro Karte ist markiert, auf welchen Reise-Geländetypen sie ein Ereignis auslöst. Side-Quests („Nebenszenarien") sind als Advanced Quests auf der Kampagnen-Seite verlinkt.',
    ],
  },
  {
    version: '1.1.30',
    date: '2026-06-16',
    title: 'Kampagnen-Überblick & Advanced Quests',
    highlights: [
      'Neue Seite „🏰 Kampagnen" mit einem Überblick aller offiziellen Kampagnen (Erweiterung, Typ, ob der Szenariobaum verzweigt).',
      'Dazu die 16 eigenständigen „Advanced Quests" der kleinen Packs mit Reise-Geländetypen und Kartenbildern – nach Sammlung filterbar, zweisprachig.',
    ],
  },
  {
    version: '1.1.29',
    date: '2026-06-16',
    title: 'Agenten komplett – 20 Agenten',
    highlights: [
      'Die vier letzten Agenten sind ergänzt: Ardus Ix’Erebus, Kyndrithul, Zarihell und Skarn – jeweils mit Akt I und II.',
      'Ihre Werte und Fähigkeiten wurden direkt anhand der Originalkarten geprüft, da die Rohdaten fehlerhaft waren. Damit sind alle 20 Agenten erfasst und mit ihrem Plotdeck verknüpft.',
    ],
  },
  {
    version: '1.1.28',
    date: '2026-06-16',
    title: 'Leutnants & Plotdecks verknüpft',
    highlights: [
      'Jeder Leutnant zeigt jetzt direkt auf sein zugehöriges Plotdeck – ein Klick springt zur passenden Stelle auf der Plotdecks-Seite und hebt sie hervor.',
      'Umgekehrt verlinkt jedes Plotdeck zurück auf seinen Leutnant, sodass man mühelos zwischen beiden Übersichten wechseln kann.',
    ],
  },
  {
    version: '1.1.27',
    date: '2026-06-16',
    title: 'Plotdecks – jetzt vollständig',
    highlights: [
      'Die letzten fünf Plotdecks sind ergänzt: Erste Legion (Ardus Ix’Erebus) sowie die vier Decks aus Schatten über Nerekhall – Brennender Ehrgeiz (Gargan Mirklace), Innere Verderbnis (Rylan Olliven), Instabile Kräfte (Tristayne Olliven) und Ungesehene Legionen (Verminous).',
      'Damit sind alle 20 Plotdecks mit zusammen 200 Karten erfasst – zweisprachig (Deutsch/Englisch) und durchsuchbar.',
    ],
  },
  {
    version: '1.1.26',
    date: '2026-06-16',
    title: 'Plotdecks – Rabenfels & Bilehall',
    highlights: [
      'Drei weitere Plotdecks: Verworrene Seele (Skarn, Schloss Rabenfels) sowie Lebensessenz (Kyndrithul) und Ewige Qual (Zarihell) aus Nebel von Bilehall – 30 weitere Karten.',
      'Damit sind 150 Plotkarten erfasst, zweisprachig. Die letzten fünf Plotdecks folgen.',
    ],
  },
  {
    version: '1.1.25',
    date: '2026-06-15',
    title: 'Plotdecks – Labyrinth des Verderbens',
    highlights: [
      'Die Plotdecks aus Labyrinth des Verderbens sind jetzt komplett: Verworrenes Netz (Königin Ariad), Gaunerei (Raythen) und Stiller Beschützer (Serena) – 30 weitere Karten.',
      'Damit sind 120 Plotkarten erfasst, zweisprachig. Weitere Erweiterungs-Plotdecks folgen.',
    ],
  },
  {
    version: '1.1.24',
    date: '2026-06-15',
    title: 'Plotdecks – erste Erweiterungen',
    highlights: [
      'Die ersten Erweiterungs-Plotdecks sind da: Gier des Drachen (Valyndra), Wütende Infektion (Bol’Goreth) und Dunkle Illusionen (Ariad) – 30 weitere Karten.',
      'Damit sind 90 Plotkarten erfasst, zweisprachig mit Kauf-/Auslösekosten und Regeltext. Weitere Erweiterungs-Plotdecks folgen.',
    ],
  },
  {
    version: '1.1.23',
    date: '2026-06-14',
    title: 'Plotdecks – Grundspiel komplett',
    highlights: [
      'Alle sechs Grundspiel-Plotdecks sind jetzt erfasst (60 Karten): zusätzlich Von Macht verflucht, Die gefallene Elite und Goblin-Aufstand.',
      'Zweisprachig mit Kauf-/Auslösekosten und Regeltext. Die Erweiterungs-Plotdecks folgen als Nächstes.',
    ],
  },
  {
    version: '1.1.22',
    date: '2026-06-14',
    title: 'Plotdecks (erste Agenten-Karten)',
    highlights: [
      'Neue Seite „📜 Plotdecks": die Karten aus den Plotdecks der Agenten – mit Kauf- und Auslösekosten (Bedrohungsmarker), Regeltext und Kartenbild.',
      'Erste drei Grundspiel-Plotdecks (Saat des Verrats, Hybride Loyalität, Endloser Durst) – zweisprachig. Weitere Plotdecks folgen.',
    ],
  },
  {
    version: '1.1.21',
    date: '2026-06-14',
    title: 'Agenten der Erweiterungen',
    highlights: [
      'Die Agenten-Seite enthält jetzt auch die Erweiterungs-Agenten (u. a. Ariad, Raythen, Valyndra, Gargan Mirklace, Verminous, Bol’Goreth) – insgesamt 16 Agenten mit ihren Plotdecks.',
      'Vier Agenten (Ardus Ix’Erebus, Kyndrithul, Zarihell, Skarn) fehlen vorerst bewusst: Die Quelldaten sind dort fehlerhaft (vertauscht) und werden erst nach Prüfung ergänzt.',
    ],
  },
  {
    version: '1.1.20',
    date: '2026-06-14',
    title: 'Agenten (Grundspiel)',
    highlights: [
      'Neue Seite „🎭 Agenten": die aufgewerteten Leutnant-Versionen aus den Leutnants-Packs (Grundspiel) mit eigenen Fähigkeiten und ihrem Plotdeck-Namen.',
      'Pro Agent: Angriffswürfel, Werte je Spielerzahl und Fähigkeiten mit Regeltext, zweisprachig. Die eigentlichen Plotdeck-Karten folgen als Nächstes.',
    ],
  },
  {
    version: '1.1.19',
    date: '2026-06-14',
    title: 'Leutnants der Erweiterungen',
    highlights: [
      'Die Leutnants-Seite enthält jetzt alle Erweiterungs-Leutnants (u. a. Valyndra, Ariad, Bol’Goreth, Skarn, die Olliven-Brüder, Verminous, Kyndrithul) – insgesamt 21 Leutnants.',
      'Leutnants, deren zweiter Akt aus einer anderen Box stammt (Bilehall → Rostende Ketten), zeigen die jeweilige Erweiterung pro Akt an.',
    ],
  },
  {
    version: '1.1.18',
    date: '2026-06-14',
    title: 'Leutnants (Grundspiel)',
    highlights: [
      'Neue Seite „🗡️ Leutnants": die sechs Grundspiel-Leutnants (Baron Zachareth, Belthir, die Farrows und Splig) mit Werten für Akt I und II.',
      'Pro Leutnant: Angriffswürfel, Attribute, Werte je Spielerzahl (2/3/4) und Fähigkeiten mit Regeltext – zweisprachig (Deutsch/Englisch).',
      'Leutnants der Erweiterungen folgen in einem nächsten Schritt.',
    ],
  },
  {
    version: '1.1.17',
    date: '2026-06-14',
    title: 'Overlord-Belohnungskarten – Kartensatz komplett',
    highlights: [
      'Die Overlord-Seite enthält jetzt auch die Belohnungskarten (Overlord-, Quest- und Gerücht-Belohnungen) aus 13 Erweiterungen.',
      'Damit ist der komplette Overlord-Kartensatz erfasst: 105 Karten, zweisprachig mit Kartenbild, Typ und Regeltext.',
    ],
  },
  {
    version: '1.1.16',
    date: '2026-06-14',
    title: 'Overlord-Klassen der Erweiterungen',
    highlights: [
      'Die Overlord-Seite enthält jetzt alle Erweiterungs-Klassen: Basis II, Peiniger, Seuchenbringer, Verzauberer, Bosheit, Schattenmagier und Seelenbinder – plus die Universal-Karten der Erweiterungen.',
      'Insgesamt 87 Overlord-Karten, zweisprachig (Deutsch/Englisch) mit Kartenbild, Typ, XP-Kosten und Regeltext. Nur noch die Belohnungskarten fehlen.',
    ],
  },
  {
    version: '1.1.15',
    date: '2026-06-14',
    title: 'Overlord-Karten (Grundspiel)',
    highlights: [
      'Neue Seite „👑 Overlord": das Basis-Deck und die drei Grundspiel-Klassen (Magus, Saboteur, Kriegsherr) sowie die Universal-Karten – mit Kartenbild, Typ, XP-Kosten und Regeltext.',
      'Zweisprachig (Deutsch/Englisch) umschaltbar, mit Such- und Sammlungsfilter und den gewohnten Kartensymbolen.',
      'Erweiterungs-Klassen und Belohnungskarten folgen in einem nächsten Schritt.',
    ],
  },
  {
    version: '1.1.14',
    date: '2026-06-14',
    title: 'Sicherheitsabfrage vor dem Löschen',
    highlights: [
      'Beim Löschen einer Quest oder einer Begegnung erscheint jetzt eine Sicherheitsabfrage – so geht durch einen versehentlichen Klick (besonders auf dem iPad) nichts mehr verloren.',
    ],
  },
  {
    version: '1.1.13',
    date: '2026-06-14',
    title: 'Einheitliche Kartenvorschauen',
    highlights: [
      'Alle Karten-Vorschaufenster (Helden, Monster, Items) lassen sich jetzt einheitlich mit der Esc-Taste oder per Klick neben die Karte schließen.',
      'Im Hintergrund laufende Verbesserungen an der Code-Struktur sorgen dafür, dass neue Inhaltsseiten künftig schneller und einheitlicher dazukommen.',
    ],
  },
  {
    version: '1.1.12',
    date: '2026-06-14',
    title: 'Symbol-Hilfe im Quest-Editor',
    highlights: [
      'Im Quest-Editor gibt es an jedem Textfeld jetzt Knöpfe, um die Kartensymbole (❤ Herz, ⚡ Schub, 💧 Erschöpfung, ↻ Aktion) per Klick an der Cursorposition einzufügen.',
      'Ein Hinweis zeigt, welche Wörter in Vorschau und Druckansicht automatisch als Symbole erscheinen.',
    ],
  },
  {
    version: '1.1.11',
    date: '2026-06-14',
    title: 'Aktions-Symbol in Kartentexten',
    highlights: [
      'Das Wort „Aktion" wird in Karten- und Beschreibungstexten jetzt durch das Aktions-Symbol (↻) ersetzt – bei Helden, Klassen, Items, Relikten, Monstern und im Quest-Editor.',
    ],
  },
  {
    version: '1.1.10',
    date: '2026-06-14',
    title: 'Kartensymbole bei Monstern und im Quest-Editor',
    highlights: [
      'Monster-Fähigkeiten sowie Energie- und Aktionstexte zeigen jetzt die Original-Symbole (❤ Herz, ⚡ Schub, 💧 Erschöpfung) statt der Wörter.',
      'Auch Quest-Beschreibungen und Begegnungstexte – inklusive Druckansicht – verwenden die Symbole.',
    ],
  },
  {
    version: '1.1.9',
    date: '2026-06-14',
    title: 'Kartensymbole in Helden- und Klassentexten',
    highlights: [
      'Helden-Fähigkeiten, Heldentaten und die Fähigkeitskarten der Klassen zeigen jetzt die Original-Symbole (❤ Herz, ⚡ Schub, 💧 Erschöpfung) statt der Wörter – wie schon auf der Ausrüstungsseite.',
      'Jede Fähigkeit steht – wie auf den echten Karten – in einer eigenen Zeile.',
    ],
  },
  {
    version: '1.1.8',
    date: '2026-06-14',
    title: 'Bewegungs- und Verteidigungssymbol bei den Werten',
    highlights: [
      'Die neuen Symbole für Bewegung (Stiefel) und Verteidigung (Schild) erscheinen jetzt direkt bei den Helden- und Monsterwerten.',
    ],
  },
  {
    version: '1.1.7',
    date: '2026-06-14',
    title: 'Neue Spielsymbole und Würfelgrafiken',
    highlights: [
      'Würfel werden jetzt als kleine 3D-Würfel in ihrer echten Farbe angezeigt – bei Helden, Monstern und Ausrüstung.',
      'Neue Symbole für Bewegung (Stiefel) und Verteidigung (Schild) sowie überarbeitete Symbole für Aktion, Energie/Schub und Erschöpfung.',
    ],
  },
  {
    version: '1.1.6',
    date: '2026-06-13',
    title: 'Kompatibilitätsfix: Kartentexte auf allen Browsern',
    highlights: [
      'Kartentexte (Symbole und Zeilenumbrüche) funktionieren jetzt auch auf älteren Safari-Versionen (iOS 15 und früher).',
    ],
  },
  {
    version: '1.1.5',
    date: '2026-06-13',
    title: 'Kartensymbole auf der Ausrüstungsseite',
    highlights: [
      'Item- und Reliktkarten zeigen jetzt die Original-Symbole statt Wörter: Herz ❤, Energie/Schub ⚡ und Erschöpfung 💧.',
      'Kartentexte sind wie auf den echten Karten gegliedert – jede Fähigkeit steht in einer eigenen Zeile.',
    ],
  },
  {
    version: '1.1.4',
    date: '2026-06-13',
    title: 'Ausrüstung: Deutsche Texte & doppelseitige Relikte',
    highlights: [
      'Alle Item- und Reliktkarten jetzt mit deutscher Übersetzung – per Schalter zwischen Deutsch und dem englischen Original umschaltbar.',
      'Relikte sind nun vollständig als doppelseitige Karten erfasst: die Helden-Seite und die Overlord-Seite werden getrennt dargestellt und beschriftet.',
      'Deutsche Item-Namen ergänzt; Akt-Zuordnung der Shop-Karten korrigiert (Akt 1 / Akt 2).',
    ],
  },
  {
    version: '1.1.3',
    date: '2026-06-13',
    title: 'Ausrüstung: Shop-Karten & Relikte',
    highlights: [
      'Neu: 122 Shop-Karten (Akt 1 + Akt 2) aus allen Erweiterungen – Waffen, Rüstungen, Zubehör.',
      'Neu: 27 Relikte aus Basis und Erweiterungen – besondere Gegenstände mit einzigartigen Fähigkeiten.',
      'Filtermöglichkeiten: Suche, Akt 1/2, eigene Sammlung. Aufgeteilt in Shop-Karten- und Relikt-Tab.',
    ],
  },
  {
    version: '1.1.2',
    date: '2026-06-13',
    title: 'Helden-Klassen (Erweiterungen)',
    highlights: [
      'Neu: 16 weitere Helden-Klassen aus 6 Erweiterungen – Champion, Geomant, Beastmaster, Apothekerin, Hexer, Schatzjäger, Prophet, Pirscher, Marschall, Kopfgeldjäger, Kämpe, Barde, Beschwörer, Schattenläufer, Seelenernter und Elementalist.',
      'Elementalist-Karten mit Elementarenergie-Mechanik (spezielle Karten ohne XP-Kosten) werden korrekt dargestellt.',
      'Insgesamt 24 Klassen mit 204 Fähigkeitskarten und 3 Begleitern im Spiel.',
    ],
  },
  {
    version: '1.1.1',
    date: '2026-06-13',
    title: 'Helden-Klassen (Grundspiel)',
    highlights: [
      'Neu: Eigene Seite „Klassen" mit allen 8 Grundspiel-Klassen und ihren Fähigkeitskarten – inkl. XP-Kosten, Ausdauer-Kosten und Regeltext.',
      'Kartentexte zweisprachig: deutsche Übersetzung mit Umschaltung auf den englischen Originalwortlaut.',
      'Begleiter des Totenbeschwörers (Reanimierter) mit Werten ergänzt.',
    ],
  },
  {
    version: '1.1.0',
    date: '2026-06-13',
    title: 'Monster-Gruppengrößen & Versionsverlauf',
    highlights: [
      'Neu: Jede Monstergruppe zeigt jetzt, wie viele Figuren du je nach Spieleranzahl (2, 3 oder 4 Helden) aufstellst – getrennt nach Dienern und Meistern.',
      'Neu: Die Versionsnummer auf der Startseite ist anklickbar und öffnet diesen Versionsverlauf.',
    ],
  },
  {
    version: '1.0.3',
    date: '2026-06-13',
    title: 'Großer Daten-Qualitätsdurchgang',
    highlights: [
      'Über 70 Korrekturen an Monster- und Heldenwerten, abgeglichen mit den offiziellen Spielkarten (Würfelfarben, Verteidigung, Angriff, Fähigkeitstexte).',
      'Alle 56 Monstergruppen und 60 Helden vollständig gegen die Kartenbilder geprüft.',
    ],
  },
  {
    version: '1.0.2',
    date: '2026-06-12',
    title: 'Erste kartengeprüfte Korrekturen',
    highlights: [
      'Mehrere Monster- und Heldenwerte anhand der Originalkarten korrigiert.',
      'Verbesserte Archetyp-Anzeige in der Helden-Übersicht.',
    ],
  },
  {
    version: '1.0.1',
    date: '2026-06-12',
    title: 'Stabilität & Qualität',
    highlights: [
      'Robustere Fehlerbehandlung – ein defekter Speicherstand führt nicht mehr zu einer leeren Seite.',
      'Sichere Quest-Importe und automatische Prüfungen der Spieldaten.',
      'Direktlinks auf einzelne Seiten funktionieren jetzt zuverlässig.',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-05-25',
    title: 'Erste Veröffentlichung',
    highlights: [
      'Kartenbauer: Spielplan-Plättchen aus deiner Sammlung platzieren und drehen.',
      'Quest-Editor mit Begegnungen, Siegbedingungen und Erzähltext.',
      'Helden- und Monster-Übersicht mit Filtern.',
      'Sammlungsverwaltung – die App passt sich deinen Erweiterungen an.',
      'Speichern im Browser, JSON-Export und Offline-Nutzung (PWA).',
    ],
  },
]
