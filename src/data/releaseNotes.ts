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
