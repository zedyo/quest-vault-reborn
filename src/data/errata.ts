import type { ErrataEntry } from '../types/game'

// ── CRRG Teil 2 – Errata & FAQ (komponentenbezogen) ──────────────────────────
//
// Quelle: „Community Rules Reference Guide (CRRG) V1.15" (deutsche Ausgabe),
// crrg.descent-community.org – frei verfügbare Community-Sammlung der offiziellen
// FFG-Errata/FAQ + inoffizieller FAQs. AUTOMATISCH GENERIERT aus dem CRRG-PDF
// (Teil 2), seiten- UND bild-verifiziert (je Seite gegen das gerenderte
// Seitenbild geprüft: Wortlaut aus dem Textlayer, Struktur/Zuordnung aus dem Bild).
// Additive Zusatzinfo als optionale Variante – ersetzt NIE den Original-Kartentext.
// Die Zuordnung an konkrete Karten erfolgt zur Laufzeit über den Komponentennamen
// (errataLinks.ts). Symbole sind als Wörter hinterlegt (Herz/Schub/Erschöpfung/
// Aktion/Stärke/Wissen/Willenskraft/Gespür/Bewegung/Verteidigung) und werden als
// Icons gerendert.

export const ERRATA: ErrataEntry[] = [
  {
    "id": "hero-andira-runenhand",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Andira Runenhand",
    "groups": [
      {
        "label": null,
        "points": [
          "Andira Runenhands Heldenfähigkeit wird nur durch Herz ausgelöst, der in Schritt 5 (Schaden zuweisen) eines Angriffs erlitten wurde (\"Schritte im Kampf\" auf Seite 6).",
          "Wenn Andiras Heldenfähigkeit durch einen Angriff ausgelöst wird, der mehrere Figuren betrifft, entscheidet der aktive Spieler über die Reihenfolge, in der die Figuren Herz erleiden. Das angreifende Monster erleidet 1 Herz, für jede Figur, die mindestens 1 Herz von dem Angriff erleidet. Wenn das angreifende Monster besiegt wird, wird der Angriff sofort beendet und die übrigbleibenden Figuren, die vom Angriff betroffen sind, erleiden keine Herz.",
          "Wenn Andira in Schritt eines Angriffs so viele Herz erleidet wie es ihrer Lebenskraft entspricht, entscheidet der aktive Spieler, ob Andiras Heldentat abgehandelt wird, bevor sie niedergestreckt wird.",
          "Mit ihrer Heldentat kann Andira nicht mehr als das Doppelte der restlichen Lebenskraft des angegriffenen Monsters heilen, da die Figuren nur Herz in Höhe ihrer verbleibenden Lebenskraft erleiden können."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-astarra",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Astarra",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Astarra ihre Feldenfähigkeit benutzt und es kein freies Feld benachbart zu dem gewählten Held gibt, wird Astarra stattdessen auf das nächste freie Feld gesetzt.",
          "Astarra kann ihre Heldenfähigkeit während des Zuges eines anderen Spielers benutzen, wenn sie Bewegungspunkte ausgeben kann (z.B. durch Syndraels Heldentat).",
          "Figuren, die mit Astarras Heldentat bewegt werden, sind nicht in der Lage, Plätze zu tauschen, da eine Figur ihre Bewegung erst komplett durchführen muss, bevor eine andere bewegt wird.",
          "Astarra muss alle möglichen Figuren bewegen, wenn sie ihre Heldentat benutzt. Sie kann nicht freiwillig bestimmte Figuren ausschließen."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-augur-grimson",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Augur Grimson",
    "groups": [
      {
        "label": null,
        "points": [
          "Da jedes Feld Sichtlinie zu sich selbst hat, betrifft Augur Grisoms Heldentat auch ihn selbst.",
          "Augur Grisoms Heldentat betrifft auch niedergestreckte Helden."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-aurim-uk",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Aurim (UK)",
    "groups": [
      {
        "label": null,
        "points": [
          "Helden, die sich benachbart zu ihm befinden, bekommen keinen zusätzlichen Vorteil, wenn Aurim einen Krafttrank benutzt."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-carthos-der-verrueckte-uk",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Carthos der Verrückte (UK)",
    "groups": [
      {
        "label": null,
        "points": [
          "Carthos Heldenfähigkeit kann im Zug eines anderen Spielers ausgelöst werden, so lange die Ziel-Fertigkeitskarte benutzt werden kann."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-geistersprecher-mok",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Geistersprecher Mok",
    "groups": [
      {
        "label": null,
        "points": [
          "Geistersprecher Mok kann seine Heldenfähigkeit einmal in jedem Heldenzug benutzen. Wenn ein Held innerhalb von 3 Feldern 1 oder mehr Herz oder Erschöpfung wiederherstellt, stellt Geistersprecher Mok 1 Herz oder 1 Erschöpfung seiner Wahl wieder her.",
          "Geistersprecher Mok stellt nur 1 Herz oder 1 Erschöpfung wieder her, selbst wenn mehrere andere Helden innerhalb von 3 Feldern gleichzeitig seine Heldenfähigkeit auslösen.",
          "Seine Heldenfähigkeit wird auch ausgelöst, wenn ein niedergestreckter Held sich aufrappelt, einem niedergestreckten Held aufgeholfen wird, oder er auf irgendeine andere Weise Lebenskraft erhält. Felder werden zu dem Heldenmarker des niedergestreckten Helden gezählt."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Geistersprecher Moks Heldentat hat keine Auswirkung."
        ]
      }
    ],
    "page": 47
  },
  {
    "id": "hero-grisban-der-durstige",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Grisban der Durstige",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Grisbans Heldenfähigkeit sollte lauten: „Jedes Mal wenn du die Aktion Ausruhen ausführst, darfst du sofort 1 deiner Zustandskarten abwerfen.“",
          "Grisban der Durstige kann seine Heldentat benutzen, wenn er betäubt ist, da dies keine Aktion benötigt."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-grossmagier-cwellin",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Grossmagier Cwellin",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Grossmagier Cwellin seine Heldenfähigkeit benutzt und einen Helden wählt, der genauso viel Erschöpfung erlitten hat, wie seine Ausdauer angibt, so stellt er 2 Erschöpfung wieder her (nicht 3 Erschöpfung )."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-hugo-der-glorreiche-uk",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Hugo der Glorreiche (UK)",
    "groups": [
      {
        "label": null,
        "points": [
          "Hugos Heldentat verdoppelt die gewürfelten Herz auf den Angriffswürfeln bevor andere Effekte das Resultat modifizieren."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-ispher",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Ispher",
    "groups": [
      {
        "label": null,
        "points": [
          "Isphers Heldenfähigkeit wird nicht ausgelöst, wenn er niedergestreckt ist, da ein niedergestreckter Held keine Fähigkeiten oder Boni von passiven Fähigkeiten benutzen kann, es sei denn, es ist explizit erlaubt."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-jain-fairwood",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Jain Fairwood",
    "groups": [
      {
        "label": null,
        "points": [
          "Jain Fairwoods Heldenfähigkeit kann nicht benutzt werden, um um zu verhindern, dass Zustände erhalten werden. Zustände werden in dem Schritt „Schaden zufügen“ des Kampfes zugewiesen (wenn die Summe aller Herz höher ist als die Summe aller Verteidigung ). Jain Fairwoods Heldenfähigkeit wird im Schritt „Schaden erleiden“ ausgelöst (zu einem Zeitpunkt, wenn Zustände bereits zugewiesen worden sind)."
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-ker-der-graue",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Ker der Graue",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Ker der Graue seine Heldenfähigkeit benutzt, um während seines Zuges auszusetzen, bleibt die generelle Struktur seines Zuges intakt. Hierbei verbleiben unverbrauchte Bewegungs-"
        ]
      }
    ],
    "notes": [],
    "page": 47
  },
  {
    "id": "hero-ker",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Ker",
    "groups": [
      {
        "label": null,
        "points": [
          "punkte in seinem Bewegungspunktevorrat und können benutzt werden, wenn Ker seinen Zug fortsetzt"
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Nachdem Kers Zug aufgeschoben wurde, beginnt sofort ein anderer Held mit seinem Zug; Kers „Zug beenden“-Knopf wird dabei nicht ausgewählt.",
          "Kers Zug wird fortgesetzt, nachdem ein anderer Held seinen Zug beendet hat, den „Zug beenden“-Knopf auswählt und die anschließende Monsteraktivierung (wenn möglich) durchführt. Ker schließt dann seinen Zug ab und wählt anschließend den „Zug beenden“-Knopf ganz normal aus."
        ]
      }
    ],
    "page": 48
  },
  {
    "id": "hero-krutzbeck",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Krutzbeck",
    "groups": [
      {
        "label": null,
        "points": [
          "Krutzbecks Heldenfähigkeit kann in Verbindung mit seiner Heldentat benutzt werden. Wenn Krutzbeck mindestens 6 Herz erlitten hat, nachdem er 3 rote Würfel für seine Heldentat geworfen hat, bilden die geworfenen Herz von den roten Würfeln und die 2 Herz von seiner Heldenfähigkeit das Angriffsergebnis."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-kundschafter-durik",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Kundschafter Durik",
    "groups": [
      {
        "label": null,
        "points": [
          "Seine Heldentat erlaubt es Kundschafter Durik ein einzelnes Monster von einem leeren Feld aus anzugreifen, sofort nachdem er von dem Feld des Monster weggezogen ist."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-lachender-buldar-uk",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Lachender Buldar (UK)",
    "groups": [
      {
        "label": null,
        "points": [
          "Da Lachender Buldars Heldentat keine Aktion benötigt, bekommt er 3 Angriffe, selbst wenn er betäubt ist.",
          "Wenn Lachender Buldar mit einer Zweihandwaffe ausgerüstet ist, wird diese hinsichtlich der Interaktion mit anderen Karten (z.B. Doppelhieb) als Einhandwaffe betrachtet."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-laurel-vom-blutwald",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Laurel vom Blutwald",
    "groups": [
      {
        "label": null,
        "points": [
          "Laurel vom Blutwalds Heldenfähigkeit erhöht den Minimalschaden von Schwarzer Pfeil nicht von 3 Herz auf 4 Herz."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-leorik-der-gelehrte",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Leorik der Gelehrte",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Effekt der Heldenfähigkeit von Leorik dem Gelehrten wird nach Schritt 2 (Würfel werfen) des Angriffs hinzugefügt (\"Heldenspielzug\" auf Seite 36), bevor irgendwelche Modifikationen zu dem Angriffsergebnis hinzugefügt werden.",
          "Die Heldenfähigkeit von Leorik dem Gelehrten tritt ein, selbst wenn er verzaubert ist (z.B. Dunkle Verzauberung, Tückische Schatten, usw.) und kann von ihm verursachte Herz reduzieren, wenn er gezwungen ist, sich selbst anzugreifen."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-lindel",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Lindel",
    "groups": [
      {
        "label": null,
        "points": [
          "Lindels Heldentat erlaubt es, den Kampfwürfel (blauer Würfel) auf ein Resultat deiner Wahl zu drehen."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-logan-lashley",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Logan Lashley",
    "groups": [
      {
        "label": null,
        "points": [
          "Logan Lashley kann seine Heldenfähigkeit auch dann benutzen, wenn der ausgeführte Angriff ein Fehlschlag war."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-lord-hawthorne",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Lord Hawthorne",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Lord Hawthorne als Ritter mit seiner Heldentat ein Monster besiegt und hinterher Vorrücken nutzt, kann er sich nur bis zu seiner Geschwindigkeit bewegen. Bewegung durch Heldentat und Vorrücken sind nicht kumulativ."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-okaluk-and-rakash",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Okaluk and Rakash",
    "groups": [
      {
        "label": null,
        "points": [
          "Okaluk und Rakashs Heldentat heilt Okaluk und Rakash, ob sie niedergestreckt sind oder nicht.",
          "Die Heldentat heilt andere Helden, die niedergestreckt sind, hat aber keinen Effekt auf nicht-niedergestreckte Helden."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-raythen-gefaehrte",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Raythen (Gefährte)",
    "groups": [
      {
        "label": null,
        "points": [
          "Raythens Scharfe Augen kann dazu benutzt werden den Goldrausch des Schatzjäger auszulösen, wenn der Schatzjäger der nächste Held ist.",
          "Wenn Raythen Scharfe Augen benutzt und eine „Geheimgang“- Karte aufdeckt, wird der Geheimgangmarker auf das Feld des nächsten Helden gelegt.",
          "Raythen kann Scharfe Augen nicht bei einem Herausforderungsmarker benutzen."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-roganna-der-schemen",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Roganna der Schemen",
    "groups": [],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein Monster angewiesen wird, einen Helden zu “sichten“, der durch Rogannas Heldentat beschützt ist, „stürmt“ es stattdessen auf den Helden zu."
        ]
      }
    ],
    "page": 48
  },
  {
    "id": "hero-ronan-der-wilde",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Ronan der Wilde",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Heldentat von Ronan dem Wilden kann nicht benutzt werden, um Gegenstände zu tauschen, die die Einschränkung „Diese Karte kann nicht zwischen Helden getauscht werden“ haben (z.B. Immunitätselixier)."
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-sahla",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Sahla",
    "groups": [
      {
        "label": null,
        "points": [
          "Sahla kann seine Heldenfähigkeit einmal pro Runde benutzen.",
          "Das „Wähle dann eine Figur innerhalb von 3 Feldern Entfernung zu dir, die diesen Zustand erhält” ist obligatorisch. Wenn Sahla eine Figur wählt, die bereits von diesem Zustand betroffen ist, wird keine weitere Instanz dieses Zustandes hinzugefügt.",
          "Sahlas Heldentat erlaubt es ihm nicht, eine erschöpfte Fertigkeitskarte eines anderen Helden zu benutzen.",
          "Er kann seine Heldentat benutzen, um ein Vertrauten eines anderen Helden zu beschwören. Dies beeinflusst andere Vertraute, die durch diese Karte beschworen wurden, in keiner Weise. Wenn Sahlas Zug vorüber ist, verliert er den Zugang zu dieser Klassenkarte und der Vertraute wird abgelegt. Da Vertraute zu einem einzelnen Helden gehören, haben Klassenkarten, die sich auf “deinen” Vertrauten beziehen (wie z.B. Vampirblut, Macht der Untoten oder Hautwechsler) keinen Effekt auf Vertraute eines anderen Helden.",
          "Wenn die Klassenkarten des Fallenstellers benutzt werden, kann Sahla Fallen mit seiner Heldentat beschwören. Nach"
        ]
      }
    ],
    "notes": [],
    "page": 48
  },
  {
    "id": "hero-seherin-kel",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Seherin Kel",
    "groups": [],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Seherin Kels Heldentat hat keinen Effekt."
        ]
      }
    ],
    "page": 49
  },
  {
    "id": "hero-serena-gefaehrtin",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Serena (Gefährtin)",
    "groups": [
      {
        "label": null,
        "points": [
          "Serenas Balsam für die Seele betrifft weder Vertraute noch Serena selbst, da sie hinsichtlich Fertigkeiten von Verbündeten nicht als Helden gelten."
        ]
      }
    ],
    "notes": [],
    "page": 49
  },
  {
    "id": "hero-syndrael",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Syndrael",
    "groups": [
      {
        "label": null,
        "points": [
          "Syndrael kann ihre Heldenfähigkeit benutzen, um nach dem Aufrappeln 2 Erschöpfung zu bekommen.",
          "Syndrael wird als bewegt betrachtet und kann ihre Heldenfähigkeit nicht benutzen, wenn sie das Feld verlässt, auf dem sie den Zug begonnen hat."
        ]
      }
    ],
    "notes": [],
    "page": 49
  },
  {
    "id": "hero-tetherys",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Tetherys",
    "groups": [
      {
        "label": null,
        "points": [
          "Tetherys kann ihre Heldenfähigkeit benutzen, um ihre Angriffswürfel zu werfen, bevor sie in Schritt 1 (Waffe wählen und Ziel erklären) des Angriffs ein Ziel erklärt hat (siehe \"Schritte im Kampf\" auf Seite 6). Dann würfelt der Verteidiger seine Verteidigungswürfel in Schritt 2. „Vor dem Würfelwurf “ und „Nach dem Würfelwurf “-Fähigkeiten von Tetherys und dem Verteidiger können wie gewohnt in Schritt 2 verwendet werden."
        ]
      }
    ],
    "notes": [],
    "page": 49
  },
  {
    "id": "hero-thaiden-nebelspitze",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Thaiden Nebelspitze",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Thaidens Heldenfähigkeit sollte lauten: „Nach jedem eigenen Angriffswurf kannst du den Angriff für nichtig erklären und stattdessen nach einem Suchmarker innerhalb von 3 Feldern zu dir suchen.“",
          "Thaiden Nebelspitze kann seine Heldenfähigkeit einsetzen, wenn ein Angriff fehlschagen würde.",
          "Einen Suchmarker mit Thaiden Nebelspitzes Heldenfähigkeit aufzudecken, ist eine Suchaktion."
        ]
      }
    ],
    "notes": [],
    "page": 49
  },
  {
    "id": "hero-tomble-burrowell",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Tomble Burrowell",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Tomble Burrowell seine Heldentat benutzt, während er einen Aufgabenmarker trägt, verlässt dieser Marker die Karte mit ihm und kehrt mit ihm auf die Karte zurück."
        ]
      }
    ],
    "notes": [],
    "page": 49
  },
  {
    "id": "hero-witwe-tarha",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Witwe Tarha",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Witwe Tarha mit ihrer Heldentat angreift, werden Reichweite (und Distanz bei Nahkampfangriffen) ganz normal abgezählt. Wenn die Reichweite zu einem Ziel nicht ausreichend ist, schlägt der gesamte Angriff fehl.",
          "Witwe Tarhas Heldentat kann mit Explosion kombiniert werden und würde somit mit dem Angriff auf die zwei gewählten Figuren zielen und betrifft jede Figur, die dazu benachbart ist."
        ]
      }
    ],
    "notes": [],
    "page": 49
  },
  {
    "id": "hero-vyrah-der-falkner",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Vyrah der Falkner",
    "groups": [
      {
        "label": null,
        "points": [
          "Die zusätzliche Reichweite durch Skye wird in Schritt 3 (Reichweite prüfen) des Angriffs hinzugefügt.",
          "Skye kann nach dem Würfeln in Schritt 2 des Angriffs abgelegt werden, das Angriffsergebnis um 1 Herz zu erhöhen.",
          "Wenn Skye in Schritt 3 (Energie ausgeben) eines Fernkampfangriffes benachbart zu einem Monster ist, erhält der Angriff +2 Reichweite."
        ]
      }
    ],
    "notes": [],
    "page": 49
  },
  {
    "id": "hero-zyla",
    "scope": "hero",
    "sectionDe": "2.1 Helden & Verbündete",
    "nameDe": "Zyla",
    "groups": [
      {
        "label": null,
        "points": [
          "Zylas Heldenfähigkeit erlaubt es ihr, sich durch Figuren, Hindernisse und über Höhenlinien zu bewegen. Sie ignoriert Terraineffekte, die ausgelöst werden, wenn eine Figur ein Terrainfeld betritt (z.B. Lava, Grube, Wasser, schlammiges Gelände, zerfallendes Terrain).",
          "Terraineffekte, die ausgelöst werden, während eine Figur sich auf dem Terrain befindet, betreffen Zyla dennoch; z.b. wenn sie ihre Bewegung auf einem entsprechenden Terrain beendet, wird sie besiegt (Lava, gefährliches Gelände), wird ihre Geschwindigkeit auf 1 reduziert (schlammiges Gelände) oder sie wird gezwungen, eine Aktion auszugeben, um aus der Grube zu klettern."
        ]
      }
    ],
    "notes": [],
    "page": 49
  },
  {
    "id": "class-apothecarius",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Apothecarius",
    "groups": [
      {
        "label": "Schutztonikum",
        "points": [
          "Heldenmarker verbleiben zwischen den Szenen auf dem Schutztonikum, werden aber nach dem Abenteuer abgeworfen."
        ]
      },
      {
        "label": "Starkes Gegenmittel",
        "points": [
          "Errata: Der Text sollte lauten: „Wenn ein Held einen Elixiermarker von seinem Heldenbogen abwirft, kann er 1 grünen Machtwürfel mehr werfen, auch wenn diese Karte erschöpft ist. Er gewinnt wie üblich die gewürfelten Herz zurück und zusätzlich so viele Erschöpfung, wie er Schub würfelt. Du kannst diese Karte erschöpfen, um einem Helden auf einem deiner Nachbarfelder aufzuhelfen. Das gilt nicht als Aktion.“"
        ]
      }
    ],
    "notes": [],
    "page": 50
  },
  {
    "id": "class-barde",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Barde",
    "groups": [
      {
        "label": "Dissonanz",
        "points": [
          "Der Akkordeffekt wird für jedes Monster einzeln ausgelöst, nicht wenn die Monstergruppe aktiviert wird."
        ]
      },
      {
        "label": "Zweitbesetzung",
        "points": [
          "Die zusätzlichen Herz oder Erschöpfung, die durch Zweitbesetzung regeneriert werden, werden zu dem ursprünglichen Effekt hinzuaddiert. Zweitbesetzung erzeugt keine zweite Instanz zur Regeneration von Herz oder Erschöpfung.",
          "Wenn neben Zweitbesetzung andere Effekte gleichzeitig ausgelöst werden, die einen Helden Herz oder Erschöpfung regenerieren lassen (z.B. Lebensdurst), entscheidet der aktive Spieler über die Reihenfolge der Effekte."
        ]
      },
      {
        "label": "Konzentration",
        "points": [
          "Der erste Effekt von Konzentration kann benutzt werden, selbst wenn die Karte erschöpft ist.",
          "Die zusätzlichen Herz, die durch den zweiten Effekt von Konzentration regeneriert werden, werden zu dem ursprünglichen Effekt hinzuaddiert. Konzentration erzeugt keine zweite Instanz zur Regeneration von Herz."
        ]
      }
    ],
    "notes": [],
    "page": 50
  },
  {
    "id": "class-berserker",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Berserker",
    "groups": [
      {
        "label": "Gegenangriff",
        "points": [
          "Der Text sollte lauten: „Nachdem ein Monster einen Angriff von einem deiner Nachbarfelder durchgeführt hat, der dich betrifft, kannst du diese Karte erschöpfen, um dieses Monster mit einer Nahkampfwaffe anzugreifen.”"
        ]
      },
      {
        "label": "Waffenbeherrschung",
        "points": [
          "Waffenbeherrschung kann nach dem Würfeln in Schritt 2 (Würfeln) eines Angriffs verwendet werden (siehe \"Schritte im Kampf \" auf Seite 6)"
        ]
      }
    ],
    "notes": [],
    "page": 50
  },
  {
    "id": "class-beschwoerer",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Beschwörer",
    "groups": [
      {
        "label": "Spiegelbild",
        "points": [
          "Errata: Der Text sollte lauten: „Benutze diese Karte in deinem Zug, um so viel Erschöpfung zu erleiden, wie Trugbilder auf dem Spielplan sind.“",
          "Ein Trugbildmarker ist gegen Zustände nicht immun. Jedoch ist Geschwächt der einzige Zustand, der ihn betrifft.",
          "Trugbildmarker haben keine Züge, Aktionen oder Angriffe."
        ]
      },
      {
        "label": "Täuschender Pfad",
        "points": [
          "Die zusätzlichen Bewegungskosten sind nicht kumulativ. Ein Monster, welches ein Feld benachbart zu zwei oder mehr Trugbildmarkern betritt, muss nur 1 zusätzlichen Bewegungspunkt ausgeben.",
          "Zusätzliche Bewegungskosten aus anderen Effekten sind hingegen kumulativ. Z.B. muss ein Monster 2 zusätzliche Bewegungspunkte ausgeben, um ein Feld zu betreten, welches benachbart zu einem Trugbildmarker und dem Helden Shiver ist."
        ]
      }
    ],
    "notes": [],
    "page": 51
  },
  {
    "id": "class-bewahrer",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Bewahrer",
    "groups": [
      {
        "label": "Alles Wissend",
        "points": [
          "Errata: Der Text im zweiten Abschnitt sollte lauten: \"Wähle eine beliebige Anzahl anderer Fertigkeitskarten...\"",
          "Community Errata: Der Text sololte lauten: \"Erhöhe dein Wissen um +1 (bis zu einem Maximum von 6), selbst wenn diese Karte erschöpft ist. Erschöpfe diese Karte, um eine beliebige Anzahl deiner anderen Fertigkeitskarten zu wählen und mache einen Wissen -Test.\""
        ]
      }
    ],
    "notes": [],
    "page": 51
  },
  {
    "id": "class-champion",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Champion",
    "groups": [
      {
        "label": "Heldenmut",
        "points": [
          "Helden können einen Tapferkeitsmarker abwerfen, um 1 Herz zu erhalten, selbst wenn der Champion niedergestreckt ist."
        ]
      },
      {
        "label": "Kampfeslust",
        "points": [
          "Helden können einen Tapferkeitsmarker abwerfen um, 1 Verteidigung zu erhalten, selbst wenn der Champion niedergestreckt ist."
        ]
      },
      {
        "label": "Kühner Streich",
        "points": [
          "Schadensmarker von Kühner Streich verbleiben zwischen den Szenen auf der Karte, werden aber am Ende des Abenteuers abgeworfen."
        ]
      }
    ],
    "notes": [],
    "page": 51
  },
  {
    "id": "class-dieb",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Dieb",
    "groups": [
      {
        "label": "Anpirschen",
        "points": [
          "Anpirschen kann in Schritt 3.II (Helden Aktionen durchführen) des Heldenspielzuges erschöpft werden.",
          "Anpirschen kann verwendet werden, um Türen mit Sonderregeln in Abenteuern zu öffnen, wenn hierzu eine Aktion verwendet werden muss. Wenn Anpirschen benutzt wird, kann der Dieb die Tür öffnen, ohne eine Aktion auszugeben, muss aber trotzdem die anderen Voraussetzungen der Sonderregeln erfüllen (Attributsprobe bestehen, usw.)."
        ]
      },
      {
        "label": "Glückliches Händchen",
        "points": [
          "Der Dieb kann Glückliches Händchen verwenden, nachdem er durch eine Handlungskarte (z.B. Dazwischenfunken) gezwungen wurde, eine neue Suchkarte zu ziehen."
        ]
      }
    ],
    "notes": [
      {
        "title": "Road to Legend",
        "points": [
          "Gute Tarnung",
          "Während Gute Tarnung erschöpft ist, verwendet ein Monster, das den Dieb angreift, den ersten Schub, um einen Fehlschlag zu verhindern."
        ]
      }
    ],
    "page": 52
  },
  {
    "id": "class-elementarmagier",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Elementarmagier",
    "groups": [
      {
        "label": "Sonne und Meer",
        "points": [
          "Sonne und Meer kann nach \"Würfeln\" in Schritt 2 eines Angriffs eingesetzt werden, nachdem Flut oder Feuerlanze angewendet wurden (siehe \"Schritte im Kampf \" auf Seite 6)."
        ]
      }
    ],
    "notes": [],
    "page": 52
  },
  {
    "id": "class-fallensteller",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Fallensteller",
    "groups": [
      {
        "label": "Ausbeuten",
        "points": [
          "Da das Ziel auch geschwächt werden kann, wenn der Angriff keinen Schaden verursacht, wird der Zustand in Schritt 4 (Energie einsetzen) eines Angriffs (siehe \"Schritte im Kampf \" auf Seite 6) zugeteilt und reduziert den Verteidigungswurf gegen den Ausbeuten-Angriff um 1 Verteidigung."
        ]
      },
      {
        "label": "Behelfsfalle",
        "points": [
          "Die Behelfsfalle kann auch durch Geländekundig oder Thaidens Heldenfähigkeit ausgelöst werden."
        ]
      },
      {
        "label": "Falle stellen",
        "points": [
          "Fallen liefern einen +1 Herz Bonus und können abgeworfen werden, selbst wenn Falle stellen erschöpft ist. Ein Fallensteller, der zu mehreren Fallenmarkern benachbart ist, erhält nur +1 Herz für seine Angriffe.",
          "Die Falle wird nicht ausgelöst, wenn ein Monster ein Feld betritt, auf welchem der Fallenmarker liegt.",
          "Das Auslösen einer Falle gilt nicht als Unterbrechung. Große Monster „dehnen“ sich nicht aus, wenn sie Schaden von Falle stellen erleiden."
        ]
      },
      {
        "label": "Hinterhalt",
        "points": [
          "Wenn ein Monster auf ein zu einer Falle benachbartes Feld bewegt, wenn Hinterhalt benutzt wird, werden die Falle und Hinterhalt gleichzeitig ausgelöst."
        ]
      },
      {
        "label": "Zeichen des Jägers",
        "points": [
          "Der Heldenmarker wird von dem Monster entfernt, nachdem ein Held einen Angriff ausgeführt hat, der das markierte Monster betrifft."
        ]
      }
    ],
    "notes": [],
    "page": 53
  },
  {
    "id": "class-geistsprecher",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Geistsprecher",
    "groups": [
      {
        "label": "Steinhaut",
        "points": [
          "Der graue Würfel wird einmal während eines einzelnen Angriffes hinzugefügt.",
          "Der Held, der den zusätzlichen grauen Würfel erhält, muss Ziel des Angriffes in Schritt 1 (Waffe und Ziel wählen) des Angriffs sein (siehe \"Schritte im Kampf \" auf Seite 6)."
        ]
      },
      {
        "label": "Geister der Ahnen",
        "points": [
          "Errata: Der Text sollte lauten: „Wenn mindestens ein Monster durch eine deiner Klassenfertigkeiten Herz erleidet, kannst du diese Karte erschöpfen. Jedes dieser Monster wird vergiftet. Wenn mindestens ein Held durch eine deiner Klassenfertigkeiten Herz oder Erschöpfung zurückgewinnt, kannst du diese Karte erschöpfen. Jeder dieser Helden gewinnt zusätzlich 1 Herz und 1 Erschöpfung zurück.“",
          "Ein Angriff, der, in Verbindung mit Geister der Ahnen, mehreren Monstern Schaden zufügt, vergiftet jedes dieser Monster und jede Fähigkeit, die Regeneration von Herz oder Erschöpfung für mehrere Helden erlaubt, regeneriert 1 zusätzliches Herz und Erschöpfung."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Nebelwolke",
          "Während Nebelwolke erschöpft ist, verwendet ein Monster, das den Geistsprecher innerhalb von 3 Feldern angreift, den ersten Schub um einen Fehlschlag zu verhindern."
        ]
      }
    ],
    "page": 53
  },
  {
    "id": "class-geomant",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Geomant",
    "groups": [
      {
        "label": "Gravitationszauber",
        "points": [
          "Der Geomant muss das Monster derart bewegen, dass die Anzahl der Felder zwischen Monster und belebtem Stein nicht größer wird.",
          "Betroffene Monster dürfen zu anderen belebten Steinen bewegt werden. Monster, die zu einem belebten Stein benachbart sind, dürfen zu einem anderen belebten Stein bewegt werden."
        ]
      },
      {
        "label": "Erdbeben",
        "points": [
          "Errata: Der Text sollte lauten: „Aktion: Führe einen Angriff mit einer Magiewaffe aus. Der Angriff hat: Schub: Jedes Monster innerhalb von 2 Feldern zu einem Belebten Stein legt eine Gespür-Probe ab. Jedes Monster, dessen Probe misslingt, wird betäubt.“"
        ]
      },
      {
        "label": "Steinbeschwörung",
        "points": [
          "Der Geomant darf die Steinbeschwörung erschöpfen, um mit einem belebten Stein anzugreifen, ohne einen neuen belebten Stein zu platzieren."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Belebter Stein",
          "Auch wenn ein Belebter Stein kein Held ist und auch nicht als Held behandelt wird, ist er trotzdem Ziel von Angriffen und Monsteraktionen, so als wäre er ein Held."
        ]
      }
    ],
    "page": 54
  },
  {
    "id": "class-geweihter",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Geweihter",
    "groups": [],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Gebet des Friedens",
          "Während Gebet des Friedens erschöpft ist, betreten Monster nur die Felder, welche nicht zum Geweihten benachbart sind. Mit anderen Worten, wenn möglich, wählen Monster ihr Ziel und bewegen sich so, dass sie nicht durch das Gebet des Friedens betroffen werden."
        ]
      }
    ],
    "page": 54
  },
  {
    "id": "class-kampfmagier",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Kampfmagier",
    "groups": [
      {
        "label": "Todessog",
        "points": [
          "Da Todessog ausgelöst wird, bevor der Kampfmagier besiegt wird, verhindert jeder Effekt, der zur Wiederherstellung von Herz während des Angriffs führt, dass der Battlemage besiegt wird.",
          "Während Todessog erschöpft ist, ist der Effekt im ersten Satz inaktiv und kann nicht benutzt werden."
        ]
      }
    ],
    "notes": [],
    "page": 55
  },
  {
    "id": "class-kopfgeldjaeger",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Kopfgeldjäger",
    "groups": [],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Zahltag",
          "Anstatt dass der Overlord den Suchmarker auswählt, wähle den Suchmarker, der der Figur des Kopfgeldjägers am nächsten ist."
        ]
      }
    ],
    "page": 55
  },
  {
    "id": "class-nekromant",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Nekromant",
    "groups": [
      {
        "label": "Letzter Befehl",
        "points": [
          "Errata: Der Text sollte lauten: „Wenn du oder dein Untoter Diener ein Monster besiegt, kannst du diese Karte erschöpfen und eine Wissen -Probe ablegen. Wenn sie misslingt, gewinnst du 1 Erschöpfung zurück. Wenn sie gelingt, führe folgendes in der angegebenen Reihenfolge aus: Stelle das Monster wieder auf sein Feld. Du kannst es gemäß seiner Geschwindigkeit bewegen und kannst dann einen Angriff mit ihm durchführen. Dann wird das Monster vom Spielplan genommen.“",
          "Wenn mehrere Monster gleichzeitig besiegt werden, wird 1 Monster gewählt, welches von Letzter Befehl betroffen ist."
        ]
      },
      {
        "label": "Vampirblut",
        "points": [
          "Wenn der Nekromant oder der Untote Diener mehrere Monster mit einem Angriff besiegt, erhält der Totenbeschwörer 1 Erschöpfung für jedes besiegtes Monster.",
          "Der Untote Diener erhält den zusätzlichen gelben Würfel, wenn der Nekromant niedergestreckt ist."
        ]
      },
      {
        "label": "Totenbeschwörung",
        "points": [
          "Errata: Der Text sollte lauten: „ Aktion: Lege den Marker deines Untoten Dieners auf eines deiner leeren Nachbarfelder. […]“",
          "Wenn der Nekromant kein leeres, benachbartes Feld hat, wird der Untote Diener auf das nächste leere Feld platziert."
        ]
      }
    ],
    "notes": [],
    "page": 55
  },
  {
    "id": "class-plaenkler",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Plänkler",
    "groups": [
      {
        "label": "Doppelhieb",
        "points": [
          "Doppelhieb kann nur benutzt werden, wenn der Plänkler mit zwei Nahkampfwaffen ausgerüstet ist und einen Angriff mit einer dieser Waffen durchführt.",
          "Nur die Schub -Fähigkeiten von beiden Waffen dürfen eingesetzt werden; zusätzliche Fähigkeiten dürfen nur von der Waffe eingesetzt werden, welche in Schritt 1 (Waffe und Ziel wählen) des Angriffs gewählt wurde (siehe \"Schritte im Kampf \" auf Seite 6)."
        ]
      },
      {
        "label": "Tiefe Wunden",
        "points": [
          "Wenn ein Angriff mehrere Monster zum Ziel hat oder betrifft, wird nur eines dieser Monster durch Tiefe Wunden betroffen. Der Held darf das entsprechende Monster wählen."
        ]
      },
      {
        "label": "Eine Bresche schlagen",
        "points": [
          "Eine Bresche schlagen zielt nicht auf Monster. Es betrifft nur Monster auf Feldern, durch die sich der Plänkler hindurchbewegt hat.",
          "Der Angriff geht von dem Feld aus, auf welchem der Plänkler seine Bewegung beendet.",
          "Wenn der Plänkler besiegt wird, bevor der Angriff durchgeführt wird, endet Eine Bresche schlagen sofort (ohne einen Angriff durchzuführen).",
          "Errata: Der letzte Satz sollte lauten “Am Ende dieser Bewegung führst du einen Angriff durch, der jedes Monster betrifft, durch das du dich bewegt hast.”"
        ]
      },
      {
        "label": "Unerbittlich",
        "points": [
          "Errata: Der Text sollte lauten: „Erschöpfe diese Karte nach einem eigenen Angriff mit einer Nahkampfwaffe mit 1 Handsymbol. Führe einen weiteren Angriff gegen eines der vom vorherigen Angriff betroffenen Monster mit einer anderen Nahkampfwaffe mit 1 Handsymbol aus.",
          "Das Monster, das Unerbittlich zum Ziel hat, muss zuvor Ziel des Angriffes gewesen sein, welcher Auslöser für Unerbittlich war."
        ]
      }
    ],
    "notes": [],
    "page": 56
  },
  {
    "id": "class-prophet",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Prophet",
    "groups": [
      {
        "label": "Allsehend",
        "points": [
          "Beim Verwenden von Allsehend wird der Erleuchtungsmarker auf einen beliebigen Helden gelegt (nach Wahl des Spielers), außer auf den Helden, der den Erleuchtungsmarker abgeworfen hat."
        ]
      },
      {
        "label": "Heilende Erleuchtung",
        "points": [
          "Heilende Erleuchtung kann benutzt werden, um den Erleuchtungsmarker einem Helden zu geben, der den Erleuchtungsmarker derzeit besitzt.",
          "Heilende Erleuchtung kann von und bei einem Helden benutzt werden, der noch keinen Herz erlitten hat.",
          "Heilende Erleuchtung kann nicht benutzt werden, um den Erleuchtungsmarker auf einem niedergestreckten Helden zu platzieren, da der Karteneffekt nicht primär das Ziel hat, zu heilen, sondern den Marker zu platzieren. Niedergestreckte Helden können nur von Fertigkeiten betroffen werden, die primär Herz heilen."
        ]
      },
      {
        "label": "Prophezeiter Sieg",
        "points": [
          "Wenn ein Held mit seinem Angriff auf mehrere Monster zielt oder diese betrifft, wählt der Held eines dieser Monster vor dem Würfeln aus, welches vom Prophezeiter Sieg betroffen wird."
        ]
      },
      {
        "label": "Strahlende Erleuchtung",
        "points": [
          "Ein niedergestreckter Held gewinnt 1 Herz und 1 Erschöpfung zurück, wenn er zu einem Helden benachbart ist, der den Erleuchtungsmarker erhält."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Düsteres Schicksal",
          "Diese Karte hat keinen Effekt."
        ]
      }
    ],
    "page": 56
  },
  {
    "id": "class-ritter",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Ritter",
    "groups": [
      {
        "label": "Absichern",
        "points": [
          "Errata: Der Text sollte lauten: „Wenn ein Monster eines deiner leeren Nachbarfelder betritt, kannst du diese Karte erschöpfen, um die Aktivierung des Monsters zu unterbrechen und einen Angriff mit einer Nahkampfwaffe durchzuführen. Danach kann das Monster seine Aktivierung fortsetzen, wenn es nicht besiegt wurde.“"
        ]
      },
      {
        "label": "Schildschlag",
        "points": [
          "Der Ritter muss keinen Schaden bei dem gewählten Monster verursachen, um die Schub -Fähigkeit des Schildschlags nutzen zu können. Das gewählte Monster wird in Schritt 4 (Energie ausgeben) des Angriffs betäubt (siehe \"Schritte im Kampf \" auf Seite 6)."
        ]
      },
      {
        "label": "Unbeugsam",
        "points": [
          "Unbeugsam kann durch Vorrücken unterbrochen werden, bevor der Ritter durch Unbeugsam besiegt wird."
        ]
      },
      {
        "label": "Ehrenschwur",
        "points": [
          "Der Ritter führt die folgenden Schritte der Reihe nach aus: 1. Wähle einen anderen Helden innerhalb von 3 Feldern, der zu einem Monster benachbart ist. Wähle ein Monster aus, daß zu diesem Helden benachbart ist. 2. Platziere den Ritter auf das nächste leere Feld von seiner Position aus, welches zu dem gwählten Monster benachbart ist. Wenn es kein benachbartes leeres Feld gibt, platziere der Ritter auf ein leeres Feld innerhalb von 2 Feldern von dem gewählten Monster, welches sich am nächsten zu der aktuellen Position des Ritters befindet. 3. Führe einen Angriff gegen dieses Monster durch.",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92."
        ]
      },
      {
        "label": "Schildwache",
        "points": [
          "Ein Ritter darf während desselben Angriffs Schildwache und anschließend den Schild erschöpfen."
        ]
      },
      {
        "label": "Verteidigen",
        "points": [
          "Wenn der Ritter Verteidigen gegen einen Angriff einsetzt, der mehrere benachbarte Helden zum Ziel hat, darf er eine Figur wählen und sich selbst als neues Ziel bestimmen.",
          "Wenn der Ritter Verteidigen einsetzt und selbst Ziel des Angriffes mit mehreren Zielen ist, dann betrifft der Angriff ihn zweimal und er wirft jeden Verteidigungswurf einzeln."
        ]
      },
      {
        "label": "Vorrücken",
        "points": [
          "Der Ritter bewegt sich zuerst und führt dann einen Standardangriff durch.",
          "Der Ritter darf sowohl die Bewegung als auch den Angriff überspringen, wenn er Vorrücken nutzt.",
          "Vorrücken gilt als Unterbrechung.",
          "Die Bewegung kann nicht ohne einen speziellen Auslöser durch eine Aktion unterbrochen werden, da es sich um keine Bewegungsaktion handelt.",
          "Siehe \"3.5. Spezielle Situationen im Kampf\" auf Seite 92."
        ]
      },
      {
        "label": "Zweikampf",
        "points": [
          "Zweikampf kann nur während des Zuges des Ritters erschöpft werden.",
          "Wenn ein Monster auf Grund von Zweikampf einen Heldenmarker hat und der Ritter Zweikampf für ein anderes Monster benutzt, nimmt er den Heldenmarker des ersten Monsters und legt ihn auf das zweite Monster."
        ]
      }
    ],
    "notes": [],
    "page": 57
  },
  {
    "id": "class-runenmeister",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Runenmeister",
    "groups": [
      {
        "label": "Geisterrüstung",
        "points": [
          "Geisterrüstung darf mehrere Male während Schritt 2 (Würfeln) eines Angriffs benutzt werden. (siehe \"Schritte im Kampf \" auf Seite 6)."
        ]
      },
      {
        "label": "Rune brechen",
        "points": [
          "Errata: Der Text sollte lauten, „Führe einen Angriff mit einer Runenwaffe durch. Dieser Angriff ignoriert Reichweite und zielt auf jede andere Figur in deiner Sichtlinie und innerhalb von drei Feldern von dir. Jede Figur wirft ihre eigenen Verteidigungswürfel.\"",
          "Der letzte Satz der Karte wurde durch das Errata gelöscht, so dass Rune brechen jetzt mit Explosion kombiniert werden kann."
        ]
      },
      {
        "label": "Runengravur",
        "points": [
          "Wenn ein Held einen Gegenstand ausgerüstet hat, der Runen untersagt, würde Runengravur den Helden daran hindern, eine Waffe auszurüsten."
        ]
      },
      {
        "label": "Macht der Runen",
        "points": [
          "Ein Runenmeister kann diese Fähigkeit selbst bei voller Erschöpfung nutzen und dadurch 1 Herz erleiden. In diesem speziellen Fall stellt Schub die Kosten dar, und das Erleiden von Erschöpfung ein unfreiwilliges Resultat, das nicht Teil der Kosten ist."
        ]
      },
      {
        "label": "Runenbeherrschung",
        "points": [
          "Runenbeherrschung darf nach dem Würfeln in Schritt 2 (Würfeln) eines Angriffes erschöpft werden. (siehe \"Schritte im Kampf \" auf Seite 6)"
        ]
      },
      {
        "label": "Runenhexerei",
        "points": [
          "Der gewählte Zustand von Runenhexerei wird nur dem Ziel des Angriffes zugewiesen. Im Gegensatz zu Zuständen von Schub -Fähigkeiten, werden Zustände durch Runenhexerei nicht anderen Figuren zugewiesen, die von dem Angriff betroffen sind."
        ]
      },
      {
        "label": "Schnelles Zaubern",
        "points": [
          "Durch Schnelles Zaubern kann der Runenmeister einen zusätzlichen Standardangriff durchführen; es kann nicht für eine Fertigkeit benutzt werden, die einen Angriff beinhaltet.",
          "Schnelles Zaubern kann benutzt werden, selbst wenn der erste Angriff ein Fehlschlag war"
        ]
      }
    ],
    "notes": [],
    "page": 58
  },
  {
    "id": "class-schattenwandler",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Schattenwandler",
    "groups": [
      {
        "label": "Schattenseele",
        "points": [
          "Errata: Der erste Satz sollte lauten: „Die Schattenseele kann Felder mit Terrain oder Figuren besetzen.“",
          "Die Schattenseele erhöht die erlittenen Herz in Schritt 5 um 1. Sie rzeugt keine weitere Instanz von zugefügtem Schaden."
        ]
      },
      {
        "label": "Treuer Freund",
        "points": [
          "Wenn die Schattenseele bereits auf dem Spielfeld ist, wird sie von ihrem aktuellen Feld entfernt und auf einem Feld innerhalb von 3 Feldern zu dem Schattenwandler platziert."
        ]
      },
      {
        "label": "Seelenverwandt",
        "points": [
          "Wenn die Schattenseele bereits auf dem Spielfeld ist, wird sie von ihrem aktuellen Feld entfernt und auf einem benachbarten Feld zum Ziel platziert.",
          "Die Schattenseele beeinflusst den Angriff, der benutzt wurde, um sie platzieren. Sie wird sofort platziert, nachdem der letzte Schritt im Kampf abgehandelt wurde, der dazu führen kann, dass der Angriff fehlschlägt."
        ]
      }
    ],
    "notes": [],
    "page": 59
  },
  {
    "id": "class-schatzjaeger",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Schatzjäger",
    "groups": [
      {
        "label": "Gräber",
        "points": [
          "Vertraute, die als Figuren behandelt werden, welche zum Schatzjäger benachbart sind, negieren den +1 Herz Bonus von Gräber."
        ]
      },
      {
        "label": "Spur der Reichtümer",
        "points": [
          "Spur der Reichtümer gilt als Suchaktion."
        ]
      },
      {
        "label": "Kunstgriff",
        "points": [
          "Durchbohren 2 gilt für alle Angriffe, solange eine Exotische oder Bogen-Waffe ausgerüstet ist, selbst wenn der Angriff mit einer anderen ausgerüsteten Waffe durchgeführt wird."
        ]
      }
    ],
    "notes": [],
    "page": 59
  },
  {
    "id": "class-schwarzmagier",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Schwarzmagier",
    "groups": [
      {
        "label": "Geißel der Schwäche",
        "points": [
          "Geißel der Schwäche benötigt keinen zugefügten Schaden um ein Ziel zu geißeln.",
          "Der Schwarzmagier kann das Ziel des Angriffes selbst geißeln.",
          "In Verbindung mit einem Angriff gegen mehrere Monster, kann der Geißelmarker auf 1 Monster innerhalb von 3 Feldern zu einem der Ziele gelegt werden.",
          "Das Abwerfen eines Geißelmarkers von einem Monster, auf das während eines Angriffs, der mehrere Ziele betrifft, gezielt wurde, erhöht den Schaden für jedes Ziel."
        ]
      },
      {
        "label": "Pestwolke",
        "points": [
          "Bevor Würfel geworfen werden, zielt Pestwolke rekursiv auf Monster: 1) Gegeißelte Monster in Sichtlinie werden als Ziel ausgewählt. 2) Monster, die benachbart zu Zielen sind, werden gegeißelt. 3) Die Schritte 1 und 2 werden wiederholt, bis kein neues Monster mehr gegeißelt wird.",
          "Geißel der Schwäche kann genutzt werden, um Geißelmarker von Zielen zu entfernen.",
          "In Verbindung mit Explosion sind alle Monster, die sich benachbart zu allen Zielen befinden, durch die Explosion betroffen.",
          "Pestwolke löst Innere Fäulnis aus.",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92."
        ]
      }
    ],
    "notes": [],
    "page": 60
  },
  {
    "id": "class-seelenschnitter",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Seelenschnitter",
    "groups": [
      {
        "label": "Unheiliges Band",
        "points": [
          "Community Errata: Diese Karte sollte lauten: \"Jedes Mal, wenn ein Monster innerhalb von 3 Feldern einen Angriff durchführt, darfst du 1 Essenz ausgeben, um den Overlord zu zwingen, 1 Angriffs- oder Machtwürfel neu zu würfeln.\""
        ]
      },
      {
        "label": "Verderbter Entzug",
        "points": [
          "Community Errata: Diese Karte sollte lauten: \"Jedes Mal, wenn du Lebensstrom benutzt, darf der gewählte Held auch 1 Zustand ablegen. Wenn ein anderer Held aufgrund dieses Effektes einen Zustand ablegt, darft du jenen Zustand erhalten und 2 Schadensmarker auf Essenzernte legen\"."
        ]
      }
    ],
    "notes": [],
    "page": 60
  },
  {
    "id": "class-seneschall",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Seneschall",
    "groups": [
      {
        "label": "Ich bin das Gesetz",
        "points": [
          "Der Seneschall kann Ich bin das Gesetz selbst dann benutzen, wenn er bis Erschöpfung zu seiner Ausdauer erlitten hat, und stattdessen Herz erleiden. Das Erschöpfen der Karte sind die Kosten für das Benutzen der Karte, das Erleiden von Erschöpfung ist eine Konsequenz und nicht Teil der Kosten."
        ]
      },
      {
        "label": "Letztes Gefecht",
        "points": [
          "Wenn das Feld mit dem Heldenmarker des niedergestreckten Helden nicht leer ist, wird der Seneschall auf das nächste freie Feld platziert und kann den Angriff durchführen. Jedoch kann er nur einem niedergestreckten Helden mit Letztes Gefecht aufhelfen, wenn er sich auf demselben Feld wie der niedergestreckte Held befindet wenn Letztes Gefecht spielbereit gemacht wird."
        ]
      },
      {
        "label": "Vergeltung",
        "points": [
          "Errata: Der Text sollte lauten: \"Erschöpfe diese Karte nachdem ein Monster, welches sich innerhalb von 2 Feldern zu dir befindet, einen Angriff durchführt, der einen anderen Helden betrifft. Dieses Monster erleidet 2 Herz.\"",
          "Die Distanz um Vergeltung auszulösen wird zum angreifenden Monster gezählt, nicht zum betroffenen Helden."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Feuereifer",
          "Diese Karte hat keinen Effekt.."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Gerechter Lohn",
          "Diese Karte hat keinen Effekt.."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Nach Vorschrift: Diese Karte hat keinen Effekt."
        ]
      }
    ],
    "page": 60
  },
  {
    "id": "class-tierbaendiger",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Tierbändiger",
    "groups": [
      {
        "label": "Fährtenleser",
        "points": [
          "Wenn ein Angriff auf mehrere Ziele eine genaue Anzahl an Zielen angibt (z.B. Peitscharme) und diese Anzahl durch Helden anstelle des Wolfes erfüllt werden kann, muss der Angriff auf die Helden zielen.",
          "Wenn bei dem Angriff nicht genug Helden als Ziel zur Verfügung stehen, es aber weitere Figuren gibt, auf die der Angriff zielen kann, dann kann auch der Wolf als Ziel gewählt werden.",
          "Wenn ein Angriff so viele Ziele wie möglich hat (z.B. Feuer oder Verfluchter Sturm), gilt der Wolf ebenfalls als Ziel."
        ]
      },
      {
        "label": "Raubtier",
        "points": [
          "Errata: Die letzte Schub -Fähigkeit sollte lauten: „ Schub: Du gewinnst 1 Erschöpfung zurück.“"
        ]
      },
      {
        "label": "Wilde Rage",
        "points": [
          "Der Wolf gilt als Heldenfigur und mit 1 zusätzlichen grünen Würfel, wenn er ein benachbartes Monster angreift (selbst wenn kein anderer Held zu dem Monster benachbart ist), wenn Wilde Rage erschöpft ist."
        ]
      },
      {
        "label": "Gemeinsamer Angriff",
        "points": [
          "Da der Wolf als Heldenfigur zählt, würfelt er 1 zusätzlichen grünen Würfel, wenn er ein Monster angreift, das zu ihm selbst benachbart ist (selbst wenn kein weiterer Held zu dem Monster benachbart ist)."
        ]
      },
      {
        "label": "Hautwechsler",
        "points": [
          "Hautwechsler darf auch ohne mögliches Ziel in Reichweite des Wolfes erschöpft werden, um den Bonus der erschöpften Karte zu erhalten.",
          "Wenn ein Tierbändiger mit Hautwechsler einen Angriff durchführt, kann er den zusätzlichen grünen Würfel des Gemeinsamen Angriffs verwenden, wenn das Ziel zu dem Wolf benachbart ist.",
          "Ein bezauberter Tierbändiger bekommt immer noch den Bonus einer erschöpften Hautwechsler-Karte."
        ]
      },
      {
        "label": "Schattenjäger",
        "points": [
          "Schattenjäger kann nur direkt vor der Aktivierung des Wolfes in Schritt 3.I oder direkt vor Schritt 3.III benutzt werden (siehe \"Heldenspielzug\" auf Seite 36). Er kann nicht benutzt werden, nachdem der Wolf in derselben Runde aktiviert wurde.",
          "Während eines Zuges kann der Wolf normal beschworen werden, nachdem Schattenjäger benutzt wurde und kann normal aktiviert werden, nachdem der Tierbändiger den Schritt 3.II beendet hat.",
          "Der Angriff des Schattenjägers erhält die Boni von Gemeinsamer Angriff und/oder eines erschöpften Hautwechslers.",
          "Wenn der Tierbändiger den besonderen Angriff des Wolfes durch Schattenjäger ausführt, gilt dies nicht als Aktivierung des Wolfes für diese Runde."
        ]
      }
    ],
    "notes": [],
    "page": 61
  },
  {
    "id": "class-waldlaeufer",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Waldläufer",
    "groups": [
      {
        "label": "Erstschlag",
        "points": [
          "Erstschlag kann in Kombination mit Schuss aus dem Lauf verwendet werden. Der Waldläufer muss die Bewegungspunkte von Schuss aus dem Lauf (während des Overlord Zuges erhalten) sofort ausgeben."
        ]
      },
      {
        "label": "Schuss aus dem Lauf",
        "points": [
          "Errata: Der Text sollte lauten: \"Wenn du mit einem Bogen angreifst, kannst du dich vor oder nach der Durchführung des Angriffs zwei Felder bewegen. Wenn du mit einer Schweren Rüstung ausgerüstet bist, kannst du dich nur 1 Feld bewegen.\"",
          "Schuss aus dem Lauf kann in Verbindung mit Erstschlag verwendet werden. Der Waldläufer muss seine Figur bewegen, bevor der Overlord mit seinem Zug fortfährt."
        ]
      },
      {
        "label": "Flink",
        "points": [
          "Flink kann nur benutzt werden, wenn sich ein Monster auf ein leeres Nachbarfeld des Waldläufers bewegt. Es wird als Unterbrechung betrachtet.",
          "Flink kann nur einmal pro Auslösebedingung benutzt werden.",
          "Ein großes Monster, welches sich auf ein leeres Nachbarfeld des Waldläufers bewegt, muss sich zuerst “ausdehnen” bevor der Waldläufer sich 1 Feld bewegen darf. Flink kann nicht benutzt werden, wenn sich ein großes Monster nicht “ausdehnen” kann.."
        ]
      },
      {
        "label": "Schwarzer Pfeil",
        "points": [
          "Schwarzer Pfeil wird in Schritt 5 (Schaden zufügen) eines Angriffs ausgeführt. Die aktuellen Angriffs- und Verteidigungsergebnisse, die Schub-Fähigkeiten beinhalten, sind zu beachten."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Gespür: Diese Karte hat keinen Effekt."
        ]
      }
    ],
    "page": 62
  },
  {
    "id": "class-waechter",
    "scope": "class",
    "sectionDe": "2.2 Klassenkarten",
    "nameDe": "Wächter",
    "groups": [
      {
        "label": "Schnelle Erholung",
        "points": [
          "Errata: Der erste Satz sollte lauten: \"Benutze diese Karten jedes Mal, wenn ein Held...\"."
        ]
      }
    ],
    "notes": [],
    "page": 62
  },
  {
    "id": "item-armbrust",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Armbrust",
    "groups": [
      {
        "label": null,
        "points": [
          "Beim Benutzen der Schub -Fähigkeit „1 Herz und bewege das Ziel um 1 Feld“ muss der Held das Monster bewegen, es sei denn es ist nicht möglich. Nur wenn das Monster komplett umringt oder unbeweglich ist, kann die Schadenskomponente benutzt werden, ohne das Monster zu bewegen.",
          "Große Monster werden entsprechend ihrer Bewegungsregeln bewegt.",
          "Das Monster wird bewegt, auch wenn bei dem Angriff kein Schaden verursacht wurde."
        ]
      }
    ],
    "notes": [],
    "page": 63
  },
  {
    "id": "item-blutdolch",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Blutdolch",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Held kann die Fähigkeit von Blutdolch nicht nutzen, um während eines Angriffs den Zustand Blutend zu bekommen."
        ]
      }
    ],
    "notes": [],
    "page": 63
  },
  {
    "id": "item-brandpfeile",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Brandpfeile",
    "groups": [
      {
        "label": null,
        "points": [
          "Figuren, die zu irgendeiner Zielfigur benachbart sind (nicht das Zielfeld) erleiden 1 Herz. Bei einem Angriff, der auf mehrere Ziele zielt, erleiden Figuren, die zu anderen Zielen benachbart sind, 1 Herz. Jede Figur kann nur einmal durch Brandpfeile betroffen sein.",
          "Der Schaden durch Brandpfeile wird erlitten, sobald bestimmt wurde, dass der Angriff kein Fehlschlag ist; üblicherweise in Schritt 3 (Reichweite überprüfen) eines Fernkampfangriffs (siehe \"Schritte im Kampf \" auf Seite 6).",
          "Der Schaden, der durch Brandpfeile erlitten wird, gilt nicht als erlittener Schaden eines Angriffs und führt nicht dazu, dass Monster als Ziel ausgewählt oder durch den Angriff betroffen werden.",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92 für visuelle Beispiele."
        ]
      }
    ],
    "notes": [],
    "page": 63
  },
  {
    "id": "item-die-schattenrune",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Die Schattenrune",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Held regeneriert 1 Erschöpfung für jedes Monster, das mit dieser Waffe besiegt wird.",
          "Nur Baron Zachareth darf die Overlordversion der Schattenrune tragen."
        ]
      }
    ],
    "notes": [],
    "page": 63
  },
  {
    "id": "item-eherne-rune",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Eherne Rune",
    "groups": [
      {
        "label": null,
        "points": [
          "Eherne Rune kann in Schritt 2 (Würfeln) eines Angriffs erschöpft werden (siehe \"Schritte im Kampf \" auf Seite 6), obwohl Fähigkeiten auf Waffenkarten üblicherweise außerhalb eines erklärten Angriffs mit dieser Waffe nicht aktiv sind."
        ]
      }
    ],
    "notes": [],
    "page": 63
  },
  {
    "id": "item-eherner-schild",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Eherner Schild",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Ersetzte “Bewegung” mit “Geschwindigkeit”."
        ]
      }
    ],
    "notes": [],
    "page": 63
  },
  {
    "id": "item-eiserne-streitaxt",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Eiserne Streitaxt",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Das Herz vor dem Doppelpunkt sollte durch ein Schub ersetzt werden."
        ]
      }
    ],
    "notes": [],
    "page": 63
  },
  {
    "id": "item-fluegelklinge",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Flügelklinge",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Flügelklinge erlaubt es einem Helden das Ergebnis von genau 1 Verteidigungswürfel pro Angriff zu ändern, selbst wenn mehrere Monster als Ziel gewählt werden oder betroffen sind und die Verteidigungswürfel separat geworfen werden."
        ]
      }
    ],
    "notes": [],
    "page": 63
  },
  {
    "id": "item-glaefe",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Gläfe",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Angreifer muss mindestens eine nicht benachbarte Figur als Ziel wählen, um einen roten Machtwürfel zusätzlich werfen zu können."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-gluecksbringer",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Glücksbringer",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Glücksbringer kann während des Reiseschrittes benutzt werden. In diesem Fall wird er sofort erschöpft und in Schritt 1.II (Karten auffrischen) des Heldenspielzuges in der nächsten Szene erschöpft und aufgefrischt werden."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-herzsucher",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Herzsucher",
    "groups": [
      {
        "label": null,
        "points": [
          "Da Herzsucher keine Sichtlinienbedingungen hat und die Reichweite durch das Abzählen der Felder bestimmt wird, kann man damit durch andere Figuren hindurch schießen. Man kann damit nicht durch Felder oder Objekte, die das Abzählen blockieren (wie z.B. Hindernisse, Türen, Alte Wände), auf feindliche Figuren zielen."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-kettenruestung",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Kettenrüstung",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Ersetze “Bewegung” mit “Geschwindigkeit”."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-knochenstab",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Knochenstab",
    "groups": [
      {
        "label": null,
        "points": [
          "Die oberste Eigenschaft des Knochenstabs darf außerhalb eines Kampfes angewendet werden, obwohl Fähigkeit auf Waffenkarten normalerweise nur während eines erklärten Angriffs aktiv sind."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-lampe-des-dschinns",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Lampe des Dschinns",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Held kann die Lampe des Dschinns in Akt II nutzen, obwohl die Marktkarten des Akt I zu diesem Zeitpunkt in die Box zurückgelegt wurden. Der Text auf der Karte hat Vorrang vor dem Text im Regelbuch."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-leichter-kriegshammer",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Leichter Kriegshammer",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Das Herz vor dem Doppelpunkt sollte durch ein Schub ersetzt werden."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-lichtschild",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Lichtschild",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Held kann den Lichtschild erschöpfen, um während eines fehlgeschlagenen Angriffs 1 Herz wiederzuerlangen, da der Schild den Auslöser „nach dem Werfen der Verteidigungswürfel“ hat und somit benutzt werden kann, bevor der Angriff auf Grund eines Fehlschlags abgebrochen wird."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-knochengeborener-bogen",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Knochengeborener Bogen",
    "groups": [
      {
        "label": null,
        "points": [
          "Die oberste Eigenschaft des Knochengeborenen Bogens darf außerhalb eines Kampfes angewendet werden, obwohl Fähigkeit auf Waffenkarten normalerweise nur während eines erklärten Angriffs aktiv sind."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-plattenruestung",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Plattenrüstung",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Ersetzte “Bewegung” mit “Geschwindigkeit”."
        ]
      }
    ],
    "notes": [],
    "page": 64
  },
  {
    "id": "item-schild-des-ablenkens",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Schild des Ablenkens",
    "groups": [
      {
        "label": null,
        "points": [
          "Eine benachbarte Figur erleidet in Schritt 2 (Würfeln) des Angriffes Herz. Sie ist nicht das Ziel des abgelenkten Angriffs noch ist sie davon betroffen."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "item-schild-des-dunklen-gottes",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Schild des dunklen Gottes",
    "groups": [
      {
        "label": null,
        "points": [
          "Das gesamte Verteidigungsergebnis aus Schritt 2 (Würfeln) des Angriffs wird benutzt, um zu bestimmen, ob das Resultat des erneuten Würfelns besser ist, als das des ursprünglichen Wurfes."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "item-schlangendolch",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Schlangendolch",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Fähigkeit „Wenn das Ziel vergiftet ist, hat dieser Angriff +2 Herz “ wird in Schritt 1 (Waffe und Ziel wählen) des Angriffs angewendet (siehe \"Schritte im Kampf\" auf Seite 6). Wenn das Ziel in diesem Schritt nicht vergiftet wird, wird der Bonusschaden nicht zu dem Ergebnis des Angriffes addiert."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "item-seelengebundenes-schwert",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Seelengebundenes Schwert",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Held, der mit dem Seelengebundenem Schwert ausgerüstet ist, muss zu Beginn seines Zugs einen Willenskraft -Test machen, obwohl Fähigkeit auf Waffenkarten normalerweise außerhalb eines erklärten Angriffs inaktiv sind."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "item-steinruestung",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Steinrüstung",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Ersetzte “Bewegung” mit “Geschwindigkeit”."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "item-ulmen-kriegsbogen",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Ulmen-Kriegsbogen",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Das Herz vor dem Doppelpunkt sollte durch ein Schub ersetzt werden."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "item-untoter-schaedel",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Untoter Schädel",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Untote Schädel verhindert, dass Helden die allgemeine Fähigkeit einmal pro Angriff für 1 Erschöpfung 1 Schub zu bekommen, einsetzen können. Er beeinflusst nicht andere Fähigkeiten wie z.B. Neue Kraft."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "item-zauberstab",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Zauberstab",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Schub -Fähigkeit sollte lauten: “Ein anderes Monster innerhalb von 3 Feldern zum Ziel erleidet 1 Herz “.",
          "Der Schaden der Schub -Fähigkeit wird in Schritt 4 (Energie ausgeben) des Angriffs erlitten (siehe \"Schritte im Kampf \" auf Seite 6).",
          "Der Schaden, der durch die Schub -Fähigkeit erlitten wird, gilt nicht als erlittener Schaden eines Angriffs und führt nicht dazu, dass Monster als Ziel ausgewählt oder durch den Angriff betroffen wurden."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "item-zorn-der-sonne",
    "scope": "item",
    "sectionDe": "2.3 Markt- & Reliktkarten",
    "nameDe": "Zorn der Sonne",
    "groups": [
      {
        "label": null,
        "points": [
          "Als Ausnahme kann ein Hauptmann das Relikt Zorn der Sonne zusätzlich zu jedem anderen Relikt, welches er trägt, tragen."
        ]
      }
    ],
    "notes": [],
    "page": 65
  },
  {
    "id": "overlord-adaptive-ansteckung",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Adaptive Ansteckung",
    "groups": [
      {
        "label": null,
        "points": [
          "Adaptive Ansteckung kann nicht benutzt werden, um einen Infektionsmarker auf eine Figur zu legen, die bereits Erkrankt, Vergifet oder immun gegenüber dem zuzufügenden Zustand ist."
        ]
      }
    ],
    "notes": [],
    "page": 66
  },
  {
    "id": "overlord-auge-um-auge",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Auge um Auge",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn der angreifende Held nicht 2 Erschöpfung erleidet, wird Auge um Auge nach folgenden Schritten abgehandelt: 1. Der Held addiert alle Herz seines Angriffsresultat nach Schritt 4 (Energie ausgeben). 2. Der Held würfelt mit seinen Verteidigungswürfeln und subtrahiert 1 Herz für jedes gewürfelte Verteidigung von seinem Angriffsergebnis. Anschließend erleidet er die restlichen Herz.",
          "Keine anderen Effekte des Angriffs, wie z.B. Zustände, werden bei dem Helden angewendet.",
          "Wenn der Angriff fehlschlägt, hat Auge um Auge keinen Effekt."
        ]
      }
    ],
    "notes": [],
    "page": 66
  },
  {
    "id": "overlord-blitzschnell",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Blitzschnell",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn ein Krieger bei beiden Attributsproben versagt, erhält das Monster 6 Bewegungspunkte."
        ]
      }
    ],
    "notes": [],
    "page": 66
  },
  {
    "id": "overlord-blutdurst",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Blutdurst",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Die Karte sollte lauten: „Spiele diese Karte, wenn ein Held niedergestreckt wurde. Ziehe 2 Overlordkarten zusätzlich zu der Karte, die du sowieso für einen besiegten Helden ziehen darfst.”",
          "Blutdurst kann nicht gespielt werden, nachdem eine Figur, die als Held behandelt wird, besiegt wird, da diese Figuren nicht niedergestreckt werden.",
          "Wenn der Overlord einen Helden niederstreckt und die gezogene Karte Blutdurst ist, darf er sie sofort auf diesen Helden spielen, um zwei Overlordkarten zu ziehen."
        ]
      }
    ],
    "notes": [],
    "page": 66
  },
  {
    "id": "overlord-blutrausch",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Blutrausch",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Overlord kann Blutrausch auf ein Monster spielen, nachdem es am Ende des Overlordspielzuges als Verstärkung ins Spiel gekommen ist.",
          "Der Overlord kann Blutrausch auf ein Monster spielen, bevor ein Monster derselben Gruppe am Ende des Overlordspielzuges als Verstärkung ins Spiel kommt.",
          "Die beiden Angriffe erzeugen separate Auslösebedingungen (z.B. kann Harte Bandagen zweimal gespielt werden, einmal auf jeden Angriff ).",
          "Zerfleischen kann nach jedem der beiden Angriffe von Blutrausch benutzt werden, bevor das Monster besiegt wird."
        ]
      }
    ],
    "notes": [],
    "page": 66
  },
  {
    "id": "overlord-denkfehler",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Denkfehler",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Denkfehler bei einem Angriff gespielt wird, der auf mehrere Helden zielt oder betrifft, muss jeder Held eine Wissen -Probe durchführen und der gesamte Angriff bekommt +2 Herz für jeden Helden, dessen Probe fehlschlägt. Der Angriff bekommt ebenso 1 Schub für jeden Krieger, dem die Wissen -Probe misslingt."
        ]
      }
    ],
    "notes": [],
    "page": 66
  },
  {
    "id": "overlord-drachenbein-amulett",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Drachenbein-Amulett",
    "groups": [
      {
        "label": null,
        "points": [
          "Drachenbein-Amulett kann auf eine Monstergruppe gespielt werden, die sich im Moment noch nicht auf dem Spielplan befindet."
        ]
      }
    ],
    "notes": [],
    "page": 66
  },
  {
    "id": "overlord-explodierende-runen",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Explodierende Runen",
    "groups": [
      {
        "label": null,
        "points": [
          "Figuren ohne Attributswerte, wie z.B. Vertraute, erleiden durch Explodierende Runen keinen Schaden, da nicht für eine Attributsprobe gewürfelt wird."
        ]
      }
    ],
    "notes": [],
    "page": 66
  },
  {
    "id": "overlord-dunkle-bezauberung-dunkler-wirt-aus-der-dunkelheit-einer-von-uns-tueckische-schatten-besitzergreifend-und-bezaubern",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Dunkle Bezauberung, Dunkler Wirt, Aus der Dunkelheit, Einer von Uns, Tückische Schatten, Besitzergreifend und Bezaubern",
    "groups": [
      {
        "label": null,
        "points": [
          "Dunkle Bezauberung, Dunkler Wirt, Aus der Dunkelheit, Einer von Uns und Tückische Schatten haben vergleichbare Mechaniken. Helden, die unter einen dieser Effekte fallen, werden als bezaubert betrachtet.",
          "Nur Helden, die sich aktuell auf dem Spielplan befinden, können bezaubert werden. Solange es nicht anderswo angegeben ist, muss der Effekt der Karte, die zum Bezaubern des Helden benutzt wurde, sofort abgehandelt werden. Bei Dunkler Wirt wird der Effekt in Schritt 2 (\"Monster aktivieren\") der Overlordspielzugs ausgeführt.",
          "Für die Dauer des Effektes wird der Held als Monster betrachtet, nicht länger als Held. Bei Dunkler Wirt wird der Held nur während der Bewegungs- und Angriffsaktion als Monster betrachtet. Bei Einer von Uns und Besitzergreifend wird der Held nur während der Angriffsaktion als Monster betrachtet. Eine Aktion mit einem bezauberten Helden durchzuführen, wird nicht als Aktivierung betrachtet."
        ]
      },
      {
        "label": "Overlordspieler – Overlordkarten",
        "points": [
          "Overlord- und Handlungskarten, die einen Helden zum Ziel haben, können nicht auf einen bezauberten Helden gespielt werden, da er, solange er bezaubert ist, als Monster gilt.",
          "Overlord- und Handlungskarten, die sich auf eine Aktivierung eines Monsters beziehen, können nicht gespielt werden."
        ]
      },
      {
        "label": "Overlordspieler – Bewegung",
        "points": [
          "Ein bezauberter Held befolgt dieselben Bewegungsregeln wie Monster. Von daher kann er sich nicht durch Felder bewegen, die Heldenfiguren enthalten, aber er kann sich durch Felder mit Monsterfiguren bewegen."
        ]
      },
      {
        "label": "Overlordspieler – Kampf",
        "points": [
          "Wenn der Overlord einen bezauberten Helden zwingt anzugreifen, kann der Overlord Schub -Fähigkeiten des bezauberten Helden nutzen.",
          "Der Overlord kann einen bezauberten Helden weder zwingen, Gegenstände auszurüsten oder abzulegen, noch kann er ihn zwingen Suchkarten zu benutzen.",
          "Der Overlord kann einen bezauberten Helden nicht zwingen Erschöpfung zu erleiden oder Karten zu erschöpfen. Weiterhin kann er den bezauberten Helden nicht zwingen, Fähigkeiten zu benutzen, welche eine Wahl beinhalten (angezeigt durch „darf/kann“, „benutze diese Karte“ ect.). Passive Effekte oder Fähigkeiten, die keine Wahl beinhalten, sind weiterhin aktiv."
        ]
      },
      {
        "label": "Overlordspieler – Spezialfälle",
        "points": [
          "Macht der Runen kann weiterhin während eines Angriffs mit einem bezauberten Helden benutzt werden, da der Overlord den Helden nicht zwingt Erschöpfung zu erleiden. Stattdessen gibt er einen Schub für eine Fähigkeit aus, was darin resultiert, dass der Held 1 Erschöpfung erleidet.",
          "Blutend führt dazu, dass ein bezauberter Held für jede Aktion, die er ausführt, 1 Erschöpfung erleidet. Ein bezauberter, betäubter Held kann weiterhin in den Zügen eines anderen Spielers (z.B. des Overlords) Aktionen durchführen.",
          "Ein bezauberter Vertrauter profitiert nicht von Klassenkarten eines Helden, die sich auf “dein” Vertrauter beziehen (wie z.B. Vampirblut), denn wenn er bezaubert ist, ist er ein Monster des Overlords."
        ]
      },
      {
        "label": "Heldenspieler – Kampf",
        "points": [
          "Ein bezauberter Held, der gezwungen wird, sich selber anzugreifen, kann Effekte nutzen, die „vor“ oder „nach“ dem Würfeln in Schritt 2 (Würfeln) des Angriffes ausgelöst werden, z.B. seine Angriffswürfel erneut werfen, um das Angriffsergebnis zu modifizieren.",
          "Ein bezauberter Held kann Gegenstände, Fähigkeiten, Heldentaten und Klassenfertigkeiten nutzen, die das Verteidigungsergebnis modifizieren (z.B. zusätzliche Verteidigungswürfel hinzunehmen oder Verteidigung zum Verteidigungsresultat addieren), solange nicht angegeben ist, dass diese nur von einem „Helden“ verwendet werden dürfen (z.B. Kampfeslust)"
        ]
      },
      {
        "label": "Heldenspieler – Spezialfälle",
        "points": [
          "Die Heldenfähigkeit eines bezauberten Leoric ist weiterhin aktiv, was den Schaden seines eigenen Angriffs um 1 Herz reduziert.",
          "Wenn ein bezauberter Held sich selbst besiegt, können Effekte ausgelöst werden, die beim Besiegen eines Monsters ausgelöst werden (z.B. Schnittersense). Der aktive Spieler entscheidet, was zuerst passiert: das Abhandeln des Angriffs oder des Effekts."
        ]
      }
    ],
    "notes": [],
    "page": 67
  },
  {
    "id": "overlord-haemisches-gelaechter",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Hämisches Gelächter",
    "groups": [
      {
        "label": null,
        "points": [
          "Das Attribut des Helden wird für alle nachfolgenden erneuten Würfe auf dieses Attribut behandelt, als wäre es um 1 geringer. Dies betrifft z.B. Glücksbringer, Dissonanz, Verwirren usw.",
          "Der Effekt von Hämisches Gelächter wird nicht als erneutes Würfeln betrachtet, stattdessen erschafft es eine neue Instanz der Attributsprobe."
        ]
      }
    ],
    "notes": [],
    "page": 68
  },
  {
    "id": "overlord-keine-atempause",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Keine Atempause",
    "groups": [
      {
        "label": null,
        "points": [
          "Spiele diese Karte, wenn ein Held 1 Erschöpfung erleidet um einen zusätzlichen Bewegungspunkt zu bekommen und wähle 1 Monster. Nachdem der Held diesen Bewegungspunkt ausgegeben hat, bewege dieses Monster sofort um ein Feld. Bis zum Start deines Zuges kannst du jedes Mal ein Monster wählen und es 1 Feld bewegen, wenn ein Held einen Bewegungspunkt ausgibt, den er durch Erleiden von Erschöpfung erhalten hat. In Kombination mit Leichtfüssig kann der Overlord pro aus-",
          "gegebenem Erschöpfung nur 1 Monster ein Feld bewegen. Der Overlord kann das Monster bewegen, nachdem der Held den ersten Bewegungspunkt ausgegeben hat oder nach dem zweiten Bewegungspunkt, den der Held durch Leichtfüssig erhalten hat."
        ]
      }
    ],
    "notes": [],
    "page": 68
  },
  {
    "id": "overlord-kontaminiert",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Kontaminiert",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Kontaminiert benutzt wird, um einen Infektionsmarker von einem Helden während eines Angriffes, der mehrere Ziele betrifft, abzulegen, erhält der gesamte Angriff +1 Herz.",
          "Da der Angriff die Auslösebedingung ist, kann pro Angriff nur 1 Infektionsmarker abgelegt werden, selbst wenn der Angriff auf mehrere Ziele zielt."
        ]
      }
    ],
    "notes": [],
    "page": 68
  },
  {
    "id": "overlord-mimikry",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Mimikry",
    "groups": [
      {
        "label": null,
        "points": [
          "Mimikry kann nur gespielt werden, wenn ein Held sucht, um einen Suchmarker aufzudecken, nicht wenn er einen Herausforderungsmarker usw. aufdeckt."
        ]
      }
    ],
    "notes": [],
    "page": 68
  },
  {
    "id": "overlord-misstrauen",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Misstrauen",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Held, der ein Feld betritt, das zu mehr als einem Helden benachbart ist, erleidet immer noch 1 Erschöpfung, da die Auslösebedingung von Misstrauen nur einmal erfüllt wurde."
        ]
      }
    ],
    "notes": [],
    "page": 68
  },
  {
    "id": "overlord-pestwolke",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Pestwolke",
    "groups": [
      {
        "label": null,
        "points": [
          "Pestwolke kann auf eine Monstergruppe gespielt werden, die sich im Moment noch nicht auf dem Spielplan befindet.",
          "Infektionsmarker können nur auf Helden gelegt werden, die das Ziel eines Angriffs waren.",
          "Wenn Pestwolke benutzt wird, um einen Infektionsmarker von einem Helden abzuwerfen, der einen Angriff ausführt, der mehrere Ziele zum Ziel hat oder mehrere Figuren betrifft, erhält jede betroffene Figur 1 Verteidigung"
        ]
      }
    ],
    "notes": [],
    "page": 68
  },
  {
    "id": "overlord-phoenixrune",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Phönixrune",
    "groups": [
      {
        "label": null,
        "points": [
          "Phönixrune kann auf eine Monstergruppe gespielt werden, die sich im Moment noch nicht auf dem Spielplan befindet.",
          "Wenn die Herz Anzahl, welcher einer Figure zugefügt wurde, gleich oder größer seiner Lebenskraft ist, erleidet die Figur Herz in Höhe seiner Lebenskraft. Überzähliger Herz wird ignoriert. Phönixrune kann abgeworfen werden, wenn ein Monster Herz Marker in Höhe seiner Lebenskraft hat, um 5 Herz zu heilen."
        ]
      }
    ],
    "notes": [],
    "page": 68
  },
  {
    "id": "overlord-rennen",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Rennen",
    "groups": [
      {
        "label": null,
        "points": [
          "Rennen kann auf Monster gespielt werden, die nur eine Bewegungsaktion pro Aktivierung haben, wie z.B. Monster mit Behäbig.",
          "Rennen gibt Monstern, die pro Aktivierung nur eine Aktion haben, keine zusätzliche Bewegungsaktion."
        ]
      }
    ],
    "notes": [],
    "page": 68
  },
  {
    "id": "overlord-ruf-der-raben",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Ruf der Raben",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn der Overlord Ruf des Raben erschöpft, kann er nicht den Rabenschwarm auf dem Spielplan wählen, um die Herz zu erleiden und ihn dann auf ein benachbartes Feld platzieren.",
          "Ruf der Raben kann auf Monster gespielt werden, die immun gegen das Erleiden von Herz sind.",
          "Siehe \"Diener\" auf Seite 12."
        ]
      }
    ],
    "notes": [],
    "page": 69
  },
  {
    "id": "overlord-rutschiger-boden",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Rutschiger Boden",
    "groups": [
      {
        "label": null,
        "points": [
          "Rutschiger Boden kann benutzt werden, um einen Helden durch verbündete Figuren zu bewegen, solange seine Bewegung auf einem leeren Feld endet.",
          "Wenn der Held seine Bewegung auf einem Feld beendet, dass von einer verbündeten Figur besetzt ist, kann er sich nicht auf das Feld bewegen und erleidet stattdessen 1 Herz oder Erschöpfung.",
          "Rutschiger Boden gilt als Unterbrechung und die unterbrochene Aktion oder Fähigkeit wird fortgesetzt (wenn möglich), nachdem Rutschiger Boden abgehandelt wurde."
        ]
      }
    ],
    "notes": [],
    "page": 69
  },
  {
    "id": "overlord-schmerzensbande",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Schmerzensbande",
    "groups": [
      {
        "label": null,
        "points": [
          "Schmerzensbande kann auf einen niedergestreckten Helden gespielt werden, der Herz regeneriert.",
          "Wird Schmerzensbande ausgelöst, wenn ein niedergestreckter Held Herz regeneriert, werden die Felder zu dem Heldenmarker gezählt bevor die dazugehörige Heldenfigur auf den Spielplan gestellt wird."
        ]
      }
    ],
    "notes": [],
    "page": 69
  },
  {
    "id": "overlord-solidaritaet",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Solidarität",
    "groups": [
      {
        "label": null,
        "points": [
          "Solidarität weist den Helden an, die Werte des gewählten Heldenbogens zu benutzen, nicht die durch einen anderen Spieleffekt modifizierten Werte. Somit hat z.B. Hämisches Gelächter keinen Effekt auf die Attributsproben, wenn Solidarität im Spiel ist."
        ]
      }
    ],
    "notes": [],
    "page": 69
  },
  {
    "id": "overlord-spligs-rache",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Spligs Rache",
    "groups": [
      {
        "label": "(Overlord-Belohnungs Karte)",
        "points": [
          "Splig wird ohne Marker oder Zustände des Monsters, das er ersetzt, auf dem Spielplan platziert."
        ]
      }
    ],
    "notes": [],
    "page": 69
  },
  {
    "id": "overlord-steinelixier",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Steinelixier",
    "groups": [
      {
        "label": null,
        "points": [
          "Steinelixier kann auf eine Monstergruppe gespielt werden, die sich im Moment noch nicht auf dem Spielplan befindet."
        ]
      }
    ],
    "notes": [],
    "page": 69
  },
  {
    "id": "overlord-stolperdraht",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Stolperdraht",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn Stolperdraht gespielt wird und der betroffene Held bei seiner Gespür -Probe versagt, endet seine Bewegungsaktion. Alle Bewegungspunkte aus seinem Bewegungspunktepool sind verloren (egal woher sie stammen)."
        ]
      }
    ],
    "notes": [],
    "page": 69
  },
  {
    "id": "overlord-teuflisches-ritual",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Teuflisches Ritual",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Der Text sollte lauten: „Spiele diese Karte zu Beginn deines Zuges. Wähle eine Monstergruppe dieses Abenteuers und ziehe so viele Overlordkarten, wie Figuren dieses Typs auf dem Spielplan stehen. Nimm davon 2 Karten auf die Hand und wirf die anderen ab. Jedes Monster dieser Gruppe führt in diesem Zug eine Aktion weniger aus.”"
        ]
      }
    ],
    "notes": [],
    "page": 69
  },
  {
    "id": "overlord-ungezuegelte-kraft",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Ungezügelte Kraft",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Overlord entscheidet, welche Schub -Fähigkeiten benutzt werden und in welcher Reihenfolge diese abgehandelt werden. Jedoch muss er zuerst Schub -Fähigkeiten verwenden, um einen Fehlschlag zu vermeiden (z.B. auf die Schattenfähigkeit eines Monsters oder um die Reichweite zu erhöhen).",
          "1 Schub ausgeben um 1 Erschöpfung zu regenerieren ist in diesem Zusammenhang eine allgemeine Schub -Fähigkeit. Sie kann benutzt werden, selbst wenn der Held keine Erschöpfung Marker auf seinem Heldenbogen hat."
        ]
      }
    ],
    "notes": [],
    "page": 70
  },
  {
    "id": "overlord-vergessene-hexerei",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Vergessene Hexerei",
    "groups": [
      {
        "label": "(Overlord-Belohnungs Karte)",
        "points": [
          "Hexerei-Fähigkeiten sind additiv, wenn Vergessene Hexerei Monster mit dieser Fähigkeit betrifft.",
          "Wenn ein Nahkampfmonster (z.B. ein Anführer) Teil der gewählten Monstergruppe ist, erhält es ebenfalls Hexerei 2."
        ]
      }
    ],
    "notes": [],
    "page": 70
  },
  {
    "id": "overlord-verstaerkung-rufen",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Verstärkung Rufen",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Der Text sollte lauten: “Spiele diese Karte am Ende deines Zuges und wähle ein Elitemonster auf der Karte. Du kannst sofort so viele normale Monster dieses Typs auf den Spielplan stellen, wie die Gruppengröße erlaubt. Diese Monster dürfen auf beliebige leere Felder, aber nicht innerhalb von 3 Feldern zu einem Helden, gestellt werden.\""
        ]
      }
    ],
    "notes": [],
    "page": 70
  },
  {
    "id": "overlord-verwirren",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Verwirren",
    "groups": [
      {
        "label": null,
        "points": [
          "Die 1 Verteidigung wird auf alle erneuten Würfelergebnisse dieser Attributsprobe addiert."
        ]
      }
    ],
    "notes": [],
    "page": 70
  },
  {
    "id": "overlord-vielseitigkeit",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Vielseitigkeit",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Der Text sollte lauten: „Spiele diese Karte, wenn ein Monster angegriffen wurde aber nach allen Würfelwürfen. Zeige den Helden beliebig viele Overlordkarten auf deiner Hand. Pro Nicht-Arsenal-Karte, die du zeigst, gewinnt das Monster 1 Herz zurück und erhält +1 Verteidigung.”"
        ]
      }
    ],
    "notes": [],
    "page": 70
  },
  {
    "id": "overlord-wiederkehr",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Wiederkehr",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein großes Monster muss so aufgestellt werden, dass es so viele Felder wie möglich besetzt, die innerhalb von 5 Feldern zu dem Ort liegen, an dem es besiegt wurde."
        ]
      }
    ],
    "notes": [],
    "page": 70
  },
  {
    "id": "overlord-windarmbaender",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Windarmbänder",
    "groups": [
      {
        "label": null,
        "points": [
          "Windarmbänder kann auf eine Monstergruppe gespielt werden, die sich im Moment noch nicht auf dem Spielplan befindet."
        ]
      }
    ],
    "notes": [],
    "page": 70
  },
  {
    "id": "overlord-worte-der-qual",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Worte der Qual",
    "groups": [
      {
        "label": null,
        "points": [
          "Worte der Qual bewirkt, dass ein Held jedes Mal 1 Erschöpfung erleidet, wenn er eine beliebige Menge an Schaden erleidet.",
          "Worte der Qual wird nicht erneut ausgelöst, wenn ein Herz anstatt von Erschöpfung durch Worte der Qual erlitten wird.",
          "Worte der Qual wird während Schritt 3 (Ende der Runde) des Overlordspielzuges abgeworfen (siehe \"Overlordspielzug\" auf Seite 36)."
        ]
      }
    ],
    "notes": [],
    "page": 70
  },
  {
    "id": "overlord-wutausbruch",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Wutausbruch",
    "groups": [
      {
        "label": null,
        "points": [
          "Wutausbruch gewährt eine zusätzliche Angriffsaktion und kann nicht für eine spezielle Monsteraktion benutzt werden, die einen Angriff beinhaltet (z.B. Vorstoß oder Rundumschlag).",
          "Der zusätzliche Angriff zählt nicht gegen das Limit für Monster hinsichtlich der Anzahl der Angriffe pro Aktivierung.",
          "Wutausbruch hat keinen Effekt auf Monster, die pro Aktivierung nur eine Aktion haben."
        ]
      }
    ],
    "notes": [],
    "page": 71
  },
  {
    "id": "overlord-zauber-des-friedens",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Zauber des Friedens",
    "groups": [
      {
        "label": null,
        "points": [
          "Zauber des Friedens kann auf eine Monstergruppe gespielt werden, die sich im Moment noch nicht auf dem Spielplan befindet."
        ]
      }
    ],
    "notes": [],
    "page": 71
  },
  {
    "id": "overlord-zeichen-der-schwaeche",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Zeichen der Schwäche",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Der Text sollte lauten: „Heiler: Wenn seine Probe misslingt, wird er zusätzlich verflucht.“"
        ]
      }
    ],
    "notes": [],
    "page": 71
  },
  {
    "id": "overlord-zeichen-des-letzten-zenits",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Zeichen des letzten Zenits",
    "groups": [
      {
        "label": null,
        "points": [
          "Zeichen des letzten Zenits kann auf eine Monstergruppe gespielt werden, die sich im Moment noch nicht auf dem Spielplan befindet.",
          "Selbst wenn das letzte Monster der gewählten Monstergruppe besiegt wurde, bleiben die Effekte von Zeichen des letzten Zenits erhalten, andere abgelegte Verzauberer-Karten auf diese Gruppe zu spielen und jedes Mal, wenn dies passiert, eine Overlordkarte zu ziehen."
        ]
      }
    ],
    "notes": [],
    "page": 71
  },
  {
    "id": "overlord-zerfleischen",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Zerfleischen",
    "groups": [
      {
        "label": null,
        "points": [
          "Zerfleischen gewährt eine zusätzliche Angriffsaktion und kann nicht für eine spezielle Monsteraktion benutzt werden, die einen Angriff beinhaltet (z.B. Vorstoß oder Rundumschlag).",
          "Der zusätzliche Angriff zählt nicht gegen das Limit für Monster hinsichtlich der Anzahl der Angriffe pro Aktivierung.",
          "Zerfleischen hat keinen Effekt auf Monster, die pro Aktivierung nur eine Aktion haben."
        ]
      }
    ],
    "notes": [],
    "page": 71
  },
  {
    "id": "overlord-zhol-alam-ringe",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Zhol'alam-Ringe",
    "groups": [
      {
        "label": null,
        "points": [
          "Zhol'alam-Ringe kann auf eine Monstergruppe gespielt werden, die sich im Moment noch nicht auf dem Spielplan befindet."
        ]
      }
    ],
    "notes": [],
    "page": 71
  },
  {
    "id": "overlord-zwillingsseele",
    "scope": "overlord",
    "sectionDe": "2.4 Overlordkarten",
    "nameDe": "Zwillingsseele",
    "groups": [
      {
        "label": "(Overlord-Belohnungs Karte)",
        "points": [
          "Sir Alric Farrow wird ohne Marker oder Zustände von Lord Merick Farrow, den er ersetzt, auf dem Spielplan platziert."
        ]
      }
    ],
    "notes": [],
    "page": 71
  },
  {
    "id": "plot-ariad-dunkle-illusionen",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Ariad - Dunkle Illusionen",
    "groups": [
      {
        "label": "Irreführung",
        "points": [
          "Das Monster, das den Angriff ausgeführt hat, kann sich 1 Feld bewegen, wenn es in Schritt 5 (Schaden zufügen) des Angriffs mindestens 1 Herz zugefügt hat."
        ]
      },
      {
        "label": "Phantasma",
        "points": [
          "Mehrere Effekte, die die Reichweitevorraussetzungen der gleichen Figur betreffen, sind additiv (z.B. Phantasma und Tarnung)."
        ]
      }
    ],
    "notes": [],
    "page": 72
  },
  {
    "id": "plot-baron-zachareth-saat-der-zwietracht",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Baron Zachareth - Saat der Zwietracht",
    "groups": [
      {
        "label": "Alles auf Sieg?",
        "points": [
          "„Erste Szene” bezieht sich auf die erste Szene jedes Abenteuers."
        ]
      },
      {
        "label": "Falsche Freunde",
        "points": [
          "„Erste Szene” bezieht sich auf die erste Szene jedes Abenteuers."
        ]
      },
      {
        "label": "Gefährliche Wege",
        "points": [
          "Der Overlord kann für jeden Helden eine andere Attributsprobe wählen."
        ]
      }
    ],
    "notes": [],
    "page": 72
  },
  {
    "id": "plot-der-rattenkoenig-legionen-der-unterstadt",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Der Rattenkönig - Legionen der Unterstadt",
    "groups": [
      {
        "label": "In die Schatten",
        "points": [
          "Monster, die auf In die Schatten platziert werden, werden am Ende der Szene abgelegt, wenn ein Held bis dahin keine Aktion Ausruhen ausgeführt hat."
        ]
      },
      {
        "label": "Schändliches Opfer",
        "points": [
          "Errata: Der letzte Satz sollte lauten: “Dieses Monster erleidet den gesamten Schaden, den alle betroffenen Monster dieser Gruppe zusammen durch diesen Angriff erleiden würden.”",
          "Der Overlord kann diese Karte benutzen, wenn der Angreifer sagt, dass mehrere Monster einer Monstergruppe durch den Angriff betroffen werden. Dies wird üblicherweise in Schritt 1 (Waffe und Ziel wählen) des Angriffs getan. Zusätzlich können Figuren auch in Schritt 4 (Energie ausgeben) des Angriffs als betroffen erklärt werden."
        ]
      }
    ],
    "notes": [],
    "page": 72
  },
  {
    "id": "plot-lady-eliza-farrow-unstillbarer-durst",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Lady Eliza Farrow - Unstillbarer Durst",
    "groups": [
      {
        "label": "Blutsbande",
        "points": [
          "Ein Monster mit weniger als 2 Lebenspunkten kann nicht gewählt werden, um 2 Herz zu erleiden."
        ]
      }
    ],
    "notes": [],
    "page": 72
  },
  {
    "id": "plot-unstillbarer-durst",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Unstillbarer Durst",
    "groups": [
      {
        "label": "Nächtliche Jagd",
        "points": [
          "Nächtliche Jagd fügt einen Würfel nur zum Angriffs- oder Verteidigungspool hinzu für den Angriff, der benutzt wurde, um Nächtliche Jagd auszulösen."
        ]
      }
    ],
    "notes": [],
    "page": 73
  },
  {
    "id": "plot-lord-merrick-farrow-der-fluch-der-macht",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Lord Merrick Farrow - Der Fluch der Macht",
    "groups": [
      {
        "label": "Kabale",
        "points": [
          "Wenn ein Monster die AufseherFähigkeit während eines Angriffs benutzt, der mehrere Figuren zum Ziel hat oder betrifft, addiert jedes andere Monster seiner Gruppe, das sich innerhalb von 3 Feldern zu jeder betroffenen Figur befindet, 1 Herz, zu dem Angriff hinzu."
        ]
      },
      {
        "label": "Mystische Stärke",
        "points": [
          "Der Overlord kann diese Karte mehrmals in Schritt 2 (Würfeln) eines Angriffs benutzen."
        ]
      }
    ],
    "notes": [],
    "page": 73
  },
  {
    "id": "plot-raythen-gaunerei",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Raythen - Gaunerei",
    "groups": [
      {
        "label": "Diebstahl",
        "points": [
          "Wenn ein Spieleffekt dazu führt, dass ein Monster, das einen Suchmarker trägt, nicht länger als Monster gilt, wird der Suchmarker auf das Feld gelegt, welches das Monster besetzt hatte, bevor es aufhörte, als Monster zu gelten."
        ]
      }
    ],
    "notes": [],
    "page": 73
  },
  {
    "id": "plot-rylan-olliven-verdorbene-seelen",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Rylan Olliven - Verdorbene Seelen",
    "groups": [
      {
        "label": "Einer von Uns",
        "points": [
          "Einer von Uns wird als Unterbrechung behandelt, wenn es nach einer misslungenen Willenskraft -Probe während eines Angriffs benutzt wird. Es kann dazu führen, dass der Held die Distanz zum Ziel des Angriffs vergrößern muss. Jedoch schlägt ein Nahkampfangriff dadurch nicht fehl, da das Ziel in Schritt 1 (Waffe und Ziel wählen) des Angriffs ein gültiges Ziel war. Reichweite für einen Fernkampfangriff ist nur betroffen, wenn Einer von Uns vor Schritt 3 (Reichweite prüfen) des Angriffs gespielt wurde (siehe \"Schritte im Kampf \" auf Seite 6)."
        ]
      }
    ],
    "notes": [],
    "page": 73
  },
  {
    "id": "plot-serena-stumme-beschuetzerin",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Serena - Stumme Beschützerin",
    "groups": [
      {
        "label": "Brüder im Geiste",
        "points": [
          "Brüder im Geiste erlaubt es einem Monster nicht, einen zusätzlichen Angriff auszuführen, wenn dies die zulässige Anzahl an Angriffen pro Aktivierung übersteigt."
        ]
      },
      {
        "label": "Geteilte Last",
        "points": [
          "Wenn ein Monster X Herz erleidet, kann Geteilte Last benutzt werden, um den Schaden um den Betrag zwischen 1 Herz und X-1 Herz zu verringern."
        ]
      },
      {
        "label": "Schweigegelübde",
        "points": [
          "Ein Monster, das unter dem Effekt von Schweigegelübde steht, kann nur eine Bewegungsaktion durchführen. Es kann keine anderen Aktionen durchführen (inklusive Aktionen auf Zustandskarten, aus einer Grube klettern, Spezialaktionen aus Abenteuerregeln, usw.)."
        ]
      }
    ],
    "notes": [],
    "page": 73
  },
  {
    "id": "plot-sinistrael-hoellenfeuer",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Sinistrael - Höllenfeuer",
    "groups": [
      {
        "label": "Tektonik",
        "points": [
          "Der Overlord kann für jeden Helden eine andere Attributsprobe wählen."
        ]
      }
    ],
    "notes": [],
    "page": 74
  },
  {
    "id": "plot-skarn-entstellte-seele",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Skarn - Entstellte Seele",
    "groups": [
      {
        "label": "Krachender Fall",
        "points": [
          "Diese Karte kann benutzt werden, wenn ein riesiges oder gewaltiges Monster Herz -Marker gleich seiner Lebenskraft hat und besiegt ist."
        ]
      }
    ],
    "notes": [],
    "page": 74
  },
  {
    "id": "plot-tristayne-olliven-unstete-kraefte",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Tristayne Olliven - Unstete Kräfte",
    "groups": [
      {
        "label": "Der Wahnsinn greift um sich",
        "points": [
          "Der Overlord kann für jeden Helden eine andere Attributsprobe wählen."
        ]
      },
      {
        "label": "Seelenfalle",
        "points": [
          "Der niedergestreckte Held, der Herz regeneriert, erleidet auch 1 Herz durch Seelenfalle."
        ]
      }
    ],
    "notes": [],
    "page": 74
  },
  {
    "id": "plot-valyndra-drachenhafte-gier",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Valyndra - Drachenhafte Gier",
    "groups": [
      {
        "label": "Kolossale Wucht",
        "points": [
          "Kolossale Wucht kann nicht erschöpft werden, wenn ein Monster durch eine Heldenfähigkeit bewegt wird (z.B. Armbrust, Lederpeitsche)."
        ]
      },
      {
        "label": "Rasende Habsucht",
        "points": [
          "Wenn das gewählte Monster einen Angriff gegen mehrere Ziele durchführt, können weitere Ziele in Schritt 1 (Waffe und Ziel wählen) des Angriffs gewählt werden."
        ]
      },
      {
        "label": "Schwäche wird bestraft",
        "points": [
          "Wenn ein Monster während eines Angriffs auf mehrere Ziele Zerquetschen benutzt, fügt jeder ZielHeld Herz, basierend auf seiner Stärke zu dem gesamten Angriff hinzu."
        ]
      }
    ],
    "notes": [],
    "page": 74
  },
  {
    "id": "plot-zarihell-ewige-folter",
    "scope": "plot",
    "sectionDe": "2.5 Handlungskarten",
    "nameDe": "Zarihell - Ewige Folter",
    "groups": [
      {
        "label": "Gebrandmarkt",
        "points": [
          "Bedrohungsmarker auf Heldenbögen werden zwischen den Szenen behalten und werden zwischen Abenteuern abgelegt."
        ]
      }
    ],
    "notes": [],
    "page": 74
  },
  {
    "id": "monster-elementar",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Elementar",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Luft sollte lauten: „Bis zum Beginn deines nächsten Zuges wird dieses Monster nur von Angriffen von benachbarten Figuren betroffen.”"
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-goblin-schamane",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Goblin-Schamane",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Verzaubern: Der Text sollte lauten: „Bewege jeden Verfluchten Helden auf Nachbarfeldern dieses Monsters um bis zu 2 Felder in beliebiger Richtung.“"
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-hoellenkoloss",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Höllenkoloss",
    "groups": [
      {
        "label": null,
        "points": [
          "Sturmangriff: „Beginn seines Zuges“ sollte stattdessen „Beginn seiner Aktivierung“ lauten."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-kobold",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Kobold",
    "groups": [
      {
        "label": null,
        "points": [
          "Brut verhindert das Platzieren von StandardMonstern nur während des Aufbaus einer Szene. Wenn eine Monstergruppe während einer Szene verstärkt wird, werden Standardund Elite-Monster platziert."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Brutmeister platziert Standardmonster zu Beginn der Aktivierung der Kobolde. Der normale Kobold wird auf ein Nachbarfeld gestellt, das sich am nächsten zum nächsten Helden befindet.",
          "Brut: Diese Monster werden beim Aufbau eines neuen Gebites nicht aufgestellt. Wenn jedoch eine Gruppe außerhalb der Spielvorbereitung (z.B. am Ende einer Runde oder nach dem Interagieren mit einem Element der Karte) aufgestellt wird, wird das Monster platziert."
        ]
      }
    ],
    "page": 75
  },
  {
    "id": "monster-kraehenhexe",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Krähenhexe",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Todesomen sollte lauten: „Dieser Held kann wählen, 2. Herz zu erleiden. Wenn er das nicht tut, dann erleidet er einen Zustand deiner Wahl.“"
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-riese-uk",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Riese (UK)",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Rundumschlag, erster Satz sollte lauten: „Führe einen Angriff durch. Dieser Angriff betrifft alle Figuren, die innerhalb von 2 Feldern in der Sichtlinie dieses Monsters stehen.“",
          "Errata: Rundumschlag erfordert ein Aktion anstatt eines Schub."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-schattendrache",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Schattendrache",
    "groups": [
      {
        "label": null,
        "points": [
          "Schatten: Die „Schatten“ Fähigkeit sollte lauten: „Sobald ein Held, der benachbart zu diesem Monster ist, einen Angriff ansagt, muss er 1 Schub einsetzen oder der Angriff schlägt fehl.“"
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-tristayne-olliven-anfuehrer",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Tristayne Olliven (Anführer)",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Akt II: Angriffsart sollte Fernkampf, nicht Nahkampf, sein."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-troll-uk",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Troll (UK)",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Rundumschlag, erster Satz sollte lauten: „Führe einen Angriff durch. Dieser Angriff betrifft alle Figuren, die innerhalb von 2 Feldern in der Sichtlinie dieses Monsters stehen.“"
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-wechselbalg",
    "scope": "monster",
    "sectionDe": "2.6 Monster",
    "nameDe": "Wechselbalg",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Akt II Höhnisches Lachen sollte lauten: “(bis zu einem Minimum von 1).”"
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-ability-aggressiv",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Aggressiv",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Aggressiv: Dieses Monster kann in seinem Zug 2 Aktionen für Angriffe verwenden.“",
          "Aggressiv erhöht das Limit für Angriffe pro Aktivierung um 1. Monster mit Aggressiv können bis zu 2 Standardangriffsaktionen oder bis zu 2 Monsteraktionen, die einen Angriff enthalten (z.B. Vorstoß) durchführen."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-ability-aura",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Aura",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Aura X: Jedes Mal wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet dieser Held X Herz.”",
          "Aura-Fähigkeiten verschiedener Monster, die dasselbe Feld betreffen, sind kumulativ."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-ability-befoerderung",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Beförderung",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Beförderung: Splig legt eine Willenskraft -Probe ab. Wenn sie gelingt, kann er ein normales Monster auf einem Nachbarfeld durch ein Elite-Monster desselben Typs aus dem Vorrat ersetzen. Dabei muss die Gruppengröße eingehalten werden.“",
          "Das Zielmonster wird durch ein Elite-Monster ersetzt, das keine Marker, Zustände usw. besitzt."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-ability-behaebig",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Behäbig",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Behäbig: Dieses Monster kann höchstens 1 Bewegungsaktion pro Zug durchführen.“",
          "Monster mit Behäbig können Bewegungsaktion von anderen Effekten (z.B. Rennen) zusätzlich zu der einen erlaubten Bewegungsaktion durch Behäbig durchführen."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-ability-beherrschung",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Beherrschung",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Baron Zachareth legt eine. Willenskraft -Probe ab. Wenn sie gelingt, kann er einen Helden in seiner Sichtlinie beliebig bis zu 2 Felder weit bewegen. Danach legt der Held eine Willenskraft -Probe ab. Wenn sie misslingt, ist der Held gelähmt“",
          "Errata: Der vorletzte Satz sollte lauten: \"Nach der Bewegung legt der Held eine Willenskraft -Probe ab\"."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-ability-beschuetzen",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Beschützen",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Beschützen: Wenn eine Figur in der Sichtlinie dieses Monsters mit einem Angriff auf ein zu diesem Monster benachbartes Monster zielt, kann diese Monster vor dem Angriffswurf 1 Herz erleiden, um zum Ziel dieses Angriffs zu werden. Reichweite und Sichtlinie werden weiterhin zum ursprünglichen Ziel gemessen.“",
          "Wenn ein Monster mit 1 Lebenspunkt Beschützen benutzt, wird dieses Monster in Schritt 1 (Waffe und Ziel wählen) des Angriffs besiegt und der Angriff ist damit beendet."
        ]
      }
    ],
    "notes": [],
    "page": 75
  },
  {
    "id": "monster-ability-bezaubern",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Bezaubern",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Bezaubern: Zu Beginn von Kyndrithuls Aktivierung darfst du eine beliebige Anzahl Helden in seiner Sichtline auswählen, die eine Willenskraft -Probe ablegen. Wenn keinem dieser Helden die Probe gelingt, führe einen Angriff mit jedem dieser Helden aus, als ob sie Monster wären.“",
          "Bezaubern bewirkt, dass Helden bezaubert werden (Siehe \"Dunkle Bezauberung, Dunkler Wirt, Aus der Dunkelheit, Einer von Uns, Tückische Schatten und Bezaubern\" auf Seite 67)."
        ]
      }
    ],
    "notes": [],
    "page": 76
  },
  {
    "id": "monster-ability-brut",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Brut",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Brut: Dieses Monster wird während des Aufbaus nicht aufgestellt“",
          "Brut verhindert das Platzieren von Standardmonstern nur während des Aufaus einer Szene. Wenn eine Monstergruppe während einer Szene verstärkt wird, werden Standardund EliteMonster platziert"
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Diese Monster werden beim Aufbau eines neuen Gebites nicht aufgestellt. Wenn jedoch eine Gruppe außerhalb der Spielvorbereitung (z.B. am Ende einer Runde oder nach dem Interagieren mit einem Element der Karte) aufgestellt wird, wird das Monster platziert."
        ]
      }
    ],
    "page": 76
  },
  {
    "id": "monster-ability-brutmeister",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Brutmeister",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Brutmeister: Zu Beginn jedes eigenen Spielzuges stellt der Overlord 1 normalen Kobold auf ein zu diesem Monster benachbartes Feld (Gruppengröße einhalten).“"
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Brutmeister platziert Standardmonster zu Beginn der Aktivierung der Kobolde. Der normale Kobold wird auf ein Nachbarfeld gestellt, das sich am nächsten zum nächsten Helden befindet."
        ]
      }
    ],
    "page": 76
  },
  {
    "id": "monster-ability-durchbohren",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Durchbohren",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Durchbohren X: Dieser Angriff ignoriert X Verteidigung des Verteidigers.“",
          "Wenn die Anzahl der Verteidigung geringer ist als der Durchbohrenwert, hat der überschüssige Durchbohrenwert keinen Effekt.",
          "Wenn mehrere Durchbohreneffekte denselben Angriff betreffen, so sind diese additiv."
        ]
      }
    ],
    "notes": [],
    "page": 76
  },
  {
    "id": "monster-ability-eiskalt",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Eiskalt",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Eiskalt: Jedes Mal wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet dieser 1 Erschöpfung.”",
          "Eiskalt-Fähigkeiten von verschiedenen Monstern, die dasselbe Feld betreffen, sind kumulativ."
        ]
      }
    ],
    "notes": [],
    "page": 76
  },
  {
    "id": "monster-ability-feuerodem",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Feuerodem",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Schub Feuerodem: Ziehe vom Zielfeld aus einen Pfad von 4 Feldern in beliebiger Richtung. Alle Figuren auf diesen 4 Feldern sind vom Angriff betroffen. Jede Figur wirft ihren eigenen Verteidigungswürfel.”",
          "Feuerodem betrifft insgesamt 4 Felder: das Zielfeld und 3 zusätzliche Felder.",
          "Der Pfad von Feuerodem wird durch das Abzählen der Felder bestimmt. Diese Felder müssen nicht auf einer geraden Linie liegen.",
          "Ein Feld kann auch zweimal gezählt werden, jedoch können Figuren nur einmal von Feuerodem betroffen werden.",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92 für visuelle Beispiele."
        ]
      }
    ],
    "notes": [],
    "page": 76
  },
  {
    "id": "monster-ability-fliegen",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Fliegen",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Fliegen: Dieses Monster kann während der Bewegung feindliche Figuren und Terrain ignorieren. Es muss seine Bewegung nach den normalen Regeln auf einem leeren Feld beenden.“",
          "„Kann feindliche Figuren ignorieren” bedeutet in diesem Zusammenhang „kann durch feindliche Figuren hindurchbewegen“.",
          "Während der Bewegung betritt eine fliegende Figur die Felder ganz normal. Folglich kann die Bewegung durch Effekte wie z.B. Flink, Widerhaken oder Absichern unterbrochen werden.",
          "Eine fliegende Figur muss keinen zusätzlichen Bewegungspunkt ausgeben oder Herz erleiden, wenn sie ein spezielles Terrainfeld (inklusive Grube) betritt.",
          "Sekundär Effekte, die basierend auf anderen Faktoren ausgelöst werden, welche nicht in Zusammenhang mit der Bewegung stehen, betreffen fliegende Monster weiterhin (z.B. Beenden der Aktivierung auf einem Lavafeld oder in einer Grube).",
          "Hindernisse gelten in Hinsicht auf Bewegung als Terrain. Da fliegende Monster, wenn sie sich bewegen, Terraineffekte ignorieren, können sie während der Bewegung Hindernisse ignorieren."
        ]
      }
    ],
    "notes": [],
    "page": 76
  },
  {
    "id": "monster-ability-flugangriff",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Flugangriff",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Flugangriff: Belthir führt eine Bewegungsaktion und dann eine Angriffsaktion aus. Der Angriff zielt auf alle Figuren, durch die er sich mit dieser Aktion bewegt.“",
          "Belthir kann Flugangriff nicht unterbrechen, um eine andere Aktion durchzuführen.",
          "Hat Belthir noch nicht ausgegebene Bewegungspunkte, wenn er Flugangriff durchführt, muss der die Bewegungspunkte von Flugangriff als erstes ausgeben. Nur Figuren, durch die mit diesen Bewegungspunkten hindurchbewegt wurde, sind das Ziel von Flugangriff. Nachdem Flugangriff abgehandelt worden ist, kann Belthir seine verbleibenden Bewegungspunkte ausgeben."
        ]
      }
    ],
    "notes": [],
    "page": 76
  },
  {
    "id": "monster-ability-furcht-einfloessen",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Furcht einflössen",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Furcht einflößen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held muss eine Willenskraft -Probe ablegen. Falls sie misslingt, wird er 2 Felder in gerader Richtung von diesem Monster wegbewegt und ist gelähmt.”",
          "Der aktive Spieler bewegt den Helden. Er kann die Richtung wechseln, nachdem der Held 1 Feld bewegt wurde. Jedoch muss sich die Entfernung zu dem Monster mit jeder Bewegung erhöhen, wenn möglich."
        ]
      }
    ],
    "notes": [],
    "page": 76
  },
  {
    "id": "monster-ability-graben",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Graben",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Graben: Nimm diese Figur vom Spielplan und stelle sie auf leere oder besetzte Felder in bis zu 3 Feldern Entfernung. Jede Figur, die auf einem der Zielfelder steht, wird auf das nächste leere Feld deiner Wahl bewegt und erleidet 1 Erschöpfung. Höchstens ein Mal pro Monster pro Zug.”",
          "1 Feld innerhalb von 3 Feldern des Monsters wird gewählt, dann „dehnt“ sich das Monster von dort aus."
        ]
      }
    ],
    "notes": [],
    "page": 76
  },
  {
    "id": "monster-ability-habsucht",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Habsucht",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: Habsucht: Wenn ein Held eine Suchaktion ausführt, kann Valyndra eine Gespür -Probe ablegen. Wenn sie gelingt, kann sie sich sofort um bis zu 2 Felder bewegen. Dann setzt der Held seinen Zug fort.”",
          "Habsucht wird ausgelöst, wenn ein Held eine Suchaktion durchführt um einen Herausforderungsmarker zu enthüllen."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-lebensdurst",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Lebensdurst",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Lebensdurst X: Jedes Mal wenn ein Held innerhalb von 5 Feldern Entfernung zu diesem Monstern mindestens 1 Herz zurückgewinnt, reduziert dieser Held die Anzahl der zurückgewonnenen Herz um X (bis zu einem Minimum von 0).”",
          "Lebensdurst betrifft jede Fähigkeit, die es den Helden erlaubt, Herz zu regenerieren. Wenn ein Effekt einem Helden erlaubt, alle Herz zu regenerieren, reduziert Lebensdurst die regenerierte Menge um X.",
          "Lebensdurst reduziert die Menge an Schaden, die ein niedergestreckter Held regeneriert um X. Felder werden zu dem Heldenmarker des niedergestreckten Helden gezählt.",
          "Lebensdurst-Fähigkeiten von verschiedenen Monstern, die denselben Helden betreffen, sind additiv."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-luft",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Luft",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Kartentext: „ Aktion Luft: Bis zum Beginn deines nächsten Zuges kann dieses Monster nur durch Angriffe von Figuren auf benachbarten Feldern betroffen werden.”"
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-manoever",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Manöver",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Manöver: Wähle 1 normales Monster, das zu diesem Monster benachbart ist. Das gewählte Monster erhält 2 Bewegungspunkte.”",
          "Da das gewählte normale Monster Bewegungspunkte während der Aktivierung eines anderen Monsters erhält, muss es diese als Unterbrechungsaktion direkt verbrauchen, bevor der Wiederbelebte, der Manöver ausgeführt hat, seine Aktivierung fortsetzen kann. Nicht sofort genutzte Bewegungspunkte gehen verloren."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-netz",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Netz",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Netz: Um sich von einem Nachbarfeld dieses Monsters weg zu bewegen, muss ein Held 1 Erschöpfung erleiden (zusätzlich zu den anderen Erschöpfung, die der Held für Bewegungspunkte erleidet).",
          "Wenn ein Held keine Erschöpfung mehr erleiden kann, erleidet er stattdessen Herz, wenn er sich von einem Nachbarfeld eines Monsters mit Netz wegbewegt (oder wegbewegt wird)."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-opfer",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Opfer",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Opfer: Lady Eliza fügt einem benachbarten Monster bis zu 5 Herz zu, um ebenso viele Herz zurückzugewinnen.“",
          "Lady Eliza Farrow kann nicht mehr Herz zurückgewinnen, als das Monster Lebenspunkte hat.",
          "Lady Eliza Farrow muss keine Herz erlitten haben, um Opfer zu benutzen."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-rundumschlag-uk",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Rundumschlag (UK)",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Kartentext: „ Aktion Rundumschlag: Führe einen Angriff durch. Dieser Angriff betrifft alle Figuren, die innerhalb von 2 Feldern in der Sichtlinie dieses Monsters stehen. Jede Figur wirft ihre eigenen Verteidigungswürfel.“",
          "Wenn Rundumschlag zusammen mit der Betäuben- Schub -Fähigkeit benutzt wird, können Figuren, die durch Rundumschlag betroffen sind, betäubt werden, wenn mindestens 1 Herz zugefügt wurde."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-schatten",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Schatten",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Kartentext: „Schatten: Sobald ein Held, der benachbart zu diesem Monster ist, einen Angriff ansagt, muss er 1 Schub einsetzen oder der Angriff schlägt fehl.“",
          "Der Angreifer kann für Schatten einen Schub in Schritt 4 (Energie ausgeben) des Angriffs ausgeben. Der Angreifer kann keine anderen Schub -Fähigkeiten benutzen (oder 1 Schub für 1 Erschöpfung ausgeben), bevor er nicht einen Schub für Schatten ausgegeben hat.",
          "Helden, die sich benachbart zu einem Monster mit Schatten befinden, sind selbst dann von Schatten betroffen, wenn sie auf andere Monster (ohne Schatten) zielen.",
          "Schatten-Fähigkeiten von verschiedenen Monstern, die dasselbe Feld betreffen sind nicht additiv (z.B. muss ein Held, der benachbart zu zwei Schattendrachen ist, nur 1 Schub ausgeben, um einen Fehlschlag zu vermeiden).",
          "Schatten betrifft Figuren, die als Hindernisse behandelt werden, nicht (Belebte Steine, die mit Erdbeben angreifen).",
          "Fähigkeiten, die einem Helden erlauben, einen Angriff von einem anderen Feld, das von einer Figur oder einem Marker besetzt ist, durchzuführen (Kataklysmus, Glutlawine, Qual der Steine, Hautwechsler) sind nicht von Schatten betroffen, wenn der Held, der den Angriff durchführt, selbst nicht benachbart zu einem Monster mit Schatten ist."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-sie-sollen-leiden",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Sie sollen leiden",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Sie sollen leiden: Jeder Angriff dieses Monsters auf einen Helden mit höchstens 2 Stärke erhält +1 Herz.”",
          "Sie sollen Leiden verändert den Angriff als Ganzes. Zusätzliche Herz erleiden allen Figuren, die von dem Angriff betroffen sind.",
          "Sie sollen leiden hat auf Figuren ohne Attribute keine Auswirkung (z.B. Vertraute, die als Helden gelten)."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-sprungangriff",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Sprungangriff",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Sprungangriff: Dieses Monster bewegt sich bis zu seiner Geschwindigkeit. Dabei kann es sich durch Felder mit gegnerischen Figuren bewegen. Dann führt es einen Angriff aus, der jede Figur betrifft5, durch die es sich während dieser Aktion bewegt hat.”",
          "Der Overlord kann das Monster auch bewegen ohne irgendeine Figur anzugreifen."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-tarnung",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Tarnung",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Tarnung: Jeder Angriff, der auf dieses Monster zielt, muss 3 Reichweite mehr haben als normal; sonst gilt er als Fehlschlag.“",
          "Tarnung hat keinen Effekt, wenn nicht auf das Monster gezielt wurde, es aber von einem Angriff betroffen ist.",
          "Tarnung bewirkt, dass bei Nahkampfangriffen mindestens eine Reichweite von 3 gewürfelt wird, damit der Angriff trifft.",
          "Wenn ein Angriff auf mehrere Ziele – sowohl auf ein Monster mit Tarnung als auch auf andere Monster – zielt, so ist der gesamte Angriff von Tarnung betroffen.",
          "Mehrere Effekte, die die Reichweitevoraussetzungen für eine Figur betreffen, sind additiv (z.B. Tarnung und die Handlungskarte Phantasma)."
        ]
      }
    ],
    "notes": [],
    "page": 77
  },
  {
    "id": "monster-ability-tobsucht",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Tobsucht",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Tobsucht: Bol’Goreth führt eine Bewegungsaktion und anschließend eine Angriffsaktion aus. Dieser Angriff betrifft jede Figur innerhalb von 2 Feldern jedes Feldes, das er während dieser Bewegung betritt. Nach diesem Angriff ist Bol’Goreth betäubt und geschwächt.”",
          "Der Angriff, der Teil von Tobsucht ist, betrifft Bol’Goreth selbst nicht."
        ]
      }
    ],
    "notes": [],
    "page": 78
  },
  {
    "id": "monster-ability-ueberwaeltigen-ueberrennen",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Überwältigen/Überrennen",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Überwältigen: Sir Alric Farrow führt eine Bewegungsaktion aus. Jedes Mal, wenn er ein Nachbarfeld eines Helden betritt, kann er eine Stärke -Probe ablegen. Wenn sie gelingt, kann er mit dem Helden den Platz tauschen; wenn er das tut, erleidet der Held 1 Erschöpfung.”",
          "Da Überwältigen eine Bewegungsaktion ist, kann sie freiwillig unterbrochen werden. Der Overlord muss angeben, wenn er Bewegungspunkte von Überwältigen/Überrennen ausgibt. Nur diese Bewegungspunkte haben den Spezialeffekt.",
          "Wenn Sir Alric Farrow ein Grubenfeld betritt, kann er mit einem benachbarten Helden die Plätze tauschen und ihn in die Grube stoßen. Da der Overlord der aktive Spieler ist, kann er über die Reihenfolge entscheiden, in der die Effekte abgehandelt werden. Angenommen er wählt, dass zuerst der Effekt von Überwältigen/Überrennen vor dem Effekt des Grubenfeldes abgehandelt wird, passiert folgendes: 1. Sir Alric Farrow prüft Stärke. Wenn es gelingt, tauscht er mit dem Helden den Platz und der Held erleidet 1 Erschöpfung. 2. Der Held erleidet 2 Herz, da er in die Grube fällt. 3. Sir Alric Farrow erleidet 2 Herz, da er den Effekt für das Betreten des Grubenfeldes abhandeln muss (selbst wenn er nicht mehr auf dem Grubenfeld steht). 4. Sir Alric Farrow kann sein Überwältigen/Überrennen fortsetzen."
        ]
      }
    ],
    "notes": [],
    "page": 78
  },
  {
    "id": "monster-ability-verschlingen-uk",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Verschlingen (UK)",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Wenn ein Held von diesem Monster besiegt wird, wird sein Heldenmarker nicht auf sein Feld, sondern auf die Basis dieser Figur gelegt. Der Held kann erst wiederbelebt werden, wenn dieses Monster besiegt ist. Dann legt er den Heldenmarker auf ein Feld des Monsters seiner Wahl.“",
          "Verschlingen verhindert nur Aufhelfen-Aktionen; der Held kann sich immer noch aufrappeln. Ein verschlungener Held, der sich aufrappelt, wird auf ein leeres Feld benachbart zu dem Monster mit Verschlingen platziert."
        ]
      }
    ],
    "notes": [],
    "page": 78
  },
  {
    "id": "monster-ability-verwandlung",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Verwandlung",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „Verwandlung: Wenn dieses Monster angreift, nimmt es dazu die Angriffswürfel einer Figur in seiner Sichtlinie (nach Wahl des Overlords). Wenn der Overlord dazu einen Helden wählt, entscheidet er, welche Waffe in der Ausrüstung des Helden er benutzen will. Dieses Monster kann keine sonstigen Fähigkeiten der gewählten Figur benutzen.”",
          "Die Verwandlung-Fähigkeit benutzt nur die Würfel, die auf der Karte oder Waffe der gewählten Figur gedruckt sind. Jeder Spieleffekt, der Würfel zum Angriffspool der gewählten Figur hinzufügt, fügt dem Angriffspool von Monstern mit der Verwandlung-Fähigkeit keine Würfel hinzu."
        ]
      }
    ],
    "notes": [],
    "page": 78
  },
  {
    "id": "monster-ability-verwelken",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Verwelken",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Schub Verwelken: Das Ziel erleidet 1 Erschöpfung.“",
          "Der Verteidiger erleidet 1 Erschöpfung in Schritt 4 (Energie ausgeben) des Angriffs. Wenn der Verteidiger keine Erschöpfung mehr erleiden kann, erleidet er in diesem Schritt stattdessen 1 Herz."
        ]
      }
    ],
    "notes": [],
    "page": 78
  },
  {
    "id": "monster-ability-verzaubern",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Verzaubern",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Kartentext: „ Aktion Verzaubern: Bewege jeden Verfluchten Helden auf Nachbarfeldern dieses Monsters um bis zu 2 Felder in beliebiger Richtung.”",
          "Die Richtung kann gewechselt werden, nachdem der Held 1 Feld bewegt wurde."
        ]
      }
    ],
    "notes": [],
    "page": 78
  },
  {
    "id": "monster-ability-vorstoss",
    "scope": "monster-ability",
    "sectionDe": "2.7 Monsterfähigkeiten",
    "nameDe": "Vorstoss",
    "groups": [
      {
        "label": null,
        "points": [
          "Kartentext: „ Aktion Vorstoß: Dieses Monster kann sich 3 Felder bewegen und dann einen Angriff durchführen.“",
          "Da keine Bewegungspunkte im Spiel sind, haben Terraineffekte, die Bewegungspunkte kosten, keinen Effekt auf Vorstoß."
        ]
      }
    ],
    "notes": [],
    "page": 78
  },
  {
    "id": "adventure-ein-fetter-goblin",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Ein fetter Goblin",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 2",
          "Splig kann, ebenso wie alle andere Goblins, Gefangene aufnehmen und tragen. Er muss allerdings in der Folterkammer sein, um sie zu befragen."
        ]
      }
    ],
    "notes": [],
    "page": 78,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-schloss-daerion",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Schloss Daerion",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Sonderregeln: Die Lebenskraft der Dorfbewohner sollte 8 betragen anstatt 6. Szene 2",
          "Errata: Aufbau: Sollte heißen: „Alle überlebenden Dorfbewohner aus Szene 1 werden auf den Eingang oder die nächsten leeren Felder gestellt (am Ende des letzten Heldenzugs der ersten Runde).“",
          "Die Dorfbewohner aus Szene 1 und die Milizsoldaten aus Szene 2 sind zwei verschiedene Gruppen von Figuren. Marker, Zustände usw. werden nicht von den Dorfbewohnern auf die Milizsoldaten übertragen.",
          "Die Milizionäre können aktiviert werden, nachdem sie am Ende des ersten Spielzugs des letzten Heldenspielers platziert wurden.",
          "Errata: Sonderregeln: Der letzte Satz sollte lauten: „Nachdem Sir Palamon die Gespür -Probe abgelegt hat, kann er 1 Bewegungsaktion durchführen.“",
          "Errata: Sonderregeln: Außerdem sollte Sir Palamon zwei graue Verteidigungswürfel (statt eines grauen, bzw. eines grauen und eines braunen) würfeln. Seine Geschwindigkeit sollte 4 (statt 0) betragen."
        ]
      }
    ],
    "notes": [],
    "page": 78,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-der-kardinal-in-not",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Der Kardinal in Not",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Sonderregeln: Der Satz sollte lauten: „Einmal pro Zug kann Lord Merick Farrow als Aktion von einem Nachbarfeld eines Grabsteins aus versuchen...“"
        ]
      }
    ],
    "notes": [],
    "page": 78,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-die-not-des-kardinals",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Not des Kardinals",
    "groups": [
      {
        "label": "Szene 2",
        "points": [
          "Errata: Sonderregeln: „„Die zweite Welle“ wird ausgelöst, sobald ein Held zum ersten Mal die Tür zur Bibliothek öffnet.”",
          "Kardinal Koth kann Herz nur von Zombieangriffen und von anderen Effekten, die keine Angriffe sind, erleiden.",
          "Kardinal Koth wird nicht aktiviert, bevor die Tür zur Bibliothek geöffnet wurde.",
          "Kardinal Koth kann Zustände erhalten. Die entsprechenden Attributsproben werden während seiner Aktivierung durchgeführt."
        ]
      }
    ],
    "notes": [],
    "page": 79,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-der-maskenball",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Der Maskenball",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Errata: Siegbedingungen: „Die Szene kann nicht enden. bevor alle Marker aufgedeckt wurden. Nachdem alle Marker aufgedeckt wurden und keine Gäste oder Monster mehr übrig sind, endet die Szene.”",
          "Errata: Siegbedingungen: Das Vorgehen beim Würfelwurf, um zu bestimmen ob Lord Theodir gerettet wurde, wird wie folgt geändert: „In einem Spiel mit zwei Helden wird ein brauner, im Spiel mit drei Helden ein grauer und bei vier Helden ein schwarzer Würfel benutzt. Haben die Helden nicht einen einzigen Gast gerettet, wurde Lord Theodir (unabhängig vom Würfelwurf ) nicht gerettet. [...]”",
          "Errata: Gäste demaskieren: „Der Gast kann dann von dem Helden oder Monster, das ihn demaskiert hat, „hinausbegleitet“ werden.“",
          "Der Overlord kann das Relikt Stab der Schatten nutzen, um einen Helden zu zwingen, den Würfelwurf zu wiederholen, der bestimmt, ob Lord Theodir gerettet wird oder nicht. Er kann Dunkles Karma nicht nutzen, da es nur für die Würfel des Overlords gilt."
        ]
      },
      {
        "label": "Szene 2",
        "points": [
          "Jede Figur kann nur einmal pro Zug versuchen, eine Tür zu öffnen. Eine Figur kann nicht zwei Aktionen benutzen, um zu versuchen, zwei unterschiedliche Türen zu öffnen.",
          "Damit die Helden das Abenteuer gewinnen, muss sich jeder Held durch den Ausgang vom Spielplan bewegen."
        ]
      }
    ],
    "notes": [],
    "page": 79,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-fluegel-des-todes",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Flügel des Todes",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Der Overlord gewinnt die Szene, wenn alle 10 Aufgabenmarker aus dem Grundspiel zur gleichen Zeit auf dem Spielplan sind."
        ]
      }
    ],
    "notes": [],
    "page": 79,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-die-kammer-der-schatten",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Kammer der Schatten",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn eine Figur das nächstliegende Wasserfeld des Baches zum Flussufer blockiert, wird eine Figur, die vom Bach zum Flussufer schwimmt, auf das nächste leere Feld platziert.",
          "Wenn Baron Zachareth besiegt wird, werden all seine Marker und Zustände abgelegt und er wird auf den Eingang gestellt.",
          "Baron Zachareth verhindert, dass die Helden die Treppen benutzen können, wenn er auf dem roten Aufgabenmarker auf Spielplanteil 30B steht."
        ]
      }
    ],
    "notes": [],
    "page": 79,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-die-schatzkammer-der-monster",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Schatzkammer der Monster",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "In dieser Szene verbietet die Verstärkungsregel das Einsetzen von Monstern, die mehr als 4 Felder besetzen (gewaltige Monster), als offene Gruppe.",
          "Wenn der Eingang durch andere Figuren, die das Aufstellen der Verstärkung auf den Feldern des Einganges verhindern, besetzt ist, werden die Verstärkungen stattdessen auf die nächsten freien Felder platziert."
        ]
      },
      {
        "label": "Szene 2",
        "points": [
          "Figuren ist es erlaubt, sich von einer Glyphe zu einer anderen Glyphe in Sichtlinie zu bewegen, selbst wenn sich eine verbündete Figur auf den Feldern der Glyphen befindet. Jedoch dürfen Figuren ihre Bewegung nicht auf besetzten Feldern beenden (z.B. Glyphen-Felder mit einer verbündeten Figur).",
          "Figuren ist es erlaubt, sich von Glyphe A zu B und zu C zu bewegen (Ausgeben von 2 Bewegungspunkten), wenn B von einer verbündeten Figur besetzt ist."
        ]
      }
    ],
    "notes": [],
    "page": 79,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-die-frostzinne",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Frostzinne",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Ruin kann die Helden angreifen.",
          "Ruin befolgt nicht die Bewegungsregeln für große Monster; er „schrumpft“ und „dehnt“ sich nicht aus, sondern bewegt sich jedes Mal 1 Feld, indem er entlang der Steinbrücke rutscht.",
          "Ruin kann Zustände erleiden."
        ]
      },
      {
        "label": "Szene 2",
        "points": [
          "Wenn die Tür zum Gefängnis geöffnet ist, wird Frederick wie ein Monster unter der Kontrolle des Overlords behandelt. Der Overlord kann Frederick gemäß seiner Geschwindigkeit bewegen und einen Angriff durchführen."
        ]
      }
    ],
    "notes": [],
    "page": 79,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-die-klinge-der-morgenroete",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Klinge der Morgenröte",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Der Overlord darf eine Overlordkarte ziehen und Fähigkeiten benutzen, die zu Beginn des Overlordspielzuges ausgelöst werden, bevor der Sonnenstrahl bewegt wird."
        ]
      },
      {
        "label": "Szene 2",
        "points": [
          "In diesem Abenteuer stellt der blaue Aufgabenmarker lediglich einen Zielgegenstand dar. Das Tragen des blauen Aufgabenmarkers, der die Klinge der Morgenröte/ Klinge der Abendröte darstellt, gibt keinen Zugriff auf die Reliktkarte. Er zählt nicht gegen das Reliktlimit von Sir Alric Farrow."
        ]
      }
    ],
    "notes": [],
    "page": 79,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-das-entweihte-grabmal",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Das entweihte Grabmal",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Die Beschränkungen bezüglich der Verstärkung von Zombies auf bestimmte Spielplanteile gilt lediglich für neu plazierte Zombies. Zombies, die sich bereits auf dem Spielplan befinden werden ignoriert. Die Distanzbeschränkung betrifft alle Zombies auf dem Spielplan. Wenn die Distanzbeschränkung nicht erfüllt werden kann, wird sie ignoriert."
        ]
      },
      {
        "label": "Szene 2",
        "points": [
          "In diesem Abenteuer stellt der blaue Aufgabenmarker lediglich einen Zielgegenstand dar. Das Tragen des"
        ]
      }
    ],
    "notes": [],
    "page": 79,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-das-ritual-der-schatten",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Das Ritual der Schatten",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Der Overlord kann während dieser Szene den Stab der Schatten benutzen."
        ]
      },
      {
        "label": "Szene 2",
        "points": [
          "Errata: Siegbedingungen: „Wenn Lord Merick Farrow Schaden nimmt oder besiegt wird, liest der Overlord folgenden Text vor: [...]“",
          "Errata: Die Tür zwischen Teil 17B und der Verlängerung sollte eine rote Tür sein. Zu Beginn der Szene ist die erste Tür (die gelbe Tür, die am nächsten zum Ausgang ist) offen, die beiden anderen Türen sind geschlossen.",
          "Sarkomanten erhalten in dieser Szene keine Verstärkung, Sarkomanten aus Szene 1 bleiben auf dem Spielplan. Marker und Zustände werden abgeworfen.",
          "Alle Marker und Zustände von Lord Merick Farrow werden beim Spielaufbau von Szene 2 abgeworfen.",
          "Wenn Lord Merick Farrow auf dem Ausgang von Helden umgeben ist, kann er sich während den Spielvorbereitungen durch feindliche Figuren hindurch bewegen.",
          "Der Overlord kann den Stab der Schatten während dieser Szene benutzen, jedoch erhält er die entsprechende Reliktkarte nicht, falls er die Szene gewinnt.",
          "Wenn die Helden das Abenteuer gewinnen, erhalten sie den Stab der Schatten, selbst wenn er sich vorher im Besitz des Overlords befand (falls der Overlord das Abenteuer „Der Kardinal in Not” gewonnen hat).",
          "Nachdem der Overlord dieses Abenteuer gewonnen hat, kann er Overlordkarten eines niedrigen Stufe zum Pool verfügbarer Karten zurückgeben, während er Karten eines höheren Stufe desselben Overlordklassendecks behält. Die Voraussetzung, eine bestimmte Anzahl an Overlordkarten einer niedrigeren Stufe zu besitzen, ist nur für den Kauf der Overlordkarten einer höheren Stufe relevant, nicht um sie zu behalten."
        ]
      }
    ],
    "notes": [],
    "page": 80,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-die-zwillingsstatuen",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Zwillingsstatuen",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Wenn ein Monster, das die Statue der Schädel trägt, betäubt ist, muss es seine Aktionen benutzen, um die Betäubung abzulegen (und seine Aktivierung beenden), bevor es im nächsten Zug eine Aktion durchführen kann.",
          "Das Monster, das die Statue der Schädel trägt, kann nicht durch Overlord- oder Handlungskarten (wie z.B. Rennen, Wutausbruch) zusätzliche Aktionen bekommen.",
          "Die Siegbedingungen für den Overlord schreiben vor, dass ein Monster die Statue der Schädel auf ein bestimmtes Feld legen muss. Diese Siegbedingung ist nicht erfüllt, falls die Statue der Schädel auf ein solches Feld gelegt wird, weil das Monster, das sie trägt, besiegt wird."
        ]
      }
    ],
    "notes": [],
    "page": 80,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-des-drachen-umkehr",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Des Drachen Umkehr",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Obwohl Belthir in dieser Szene als Held gilt, so ist er dennoch auf Aktionen beschränkt, die er als Monster ausführen darf, z.B. kann er nicht suchen oder Helden aushelfen. Belthir ist auf eine Bewegungsaktion pro Aktivierung beschränkt, aber er kann pro Aktivierung zweimal angreifen. Da Flugangriff eine Bewegungsaktion beinhaltet, kann er ihn nur einmal pro Aktivierung benutzen."
        ]
      }
    ],
    "notes": [],
    "page": 80,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-gryvorns-wiedergeburt",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Gryvorns Wiedergeburt",
    "groups": [
      {
        "label": "Szene 2",
        "points": [
          "Wenn Drachenlord Gryvorn Baron Zachareth verschlingt, regeneriert er 3 Herz pro Held in der Kampagne, ob lebend oder tot.",
          "Wenn Blutrausch auf Drachenlord Gryvorn gespielt wird, um den letzten Helden niederzustrecken, gewinnt der Overlord das Abenteuer."
        ]
      }
    ],
    "notes": [],
    "page": 80,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-der-mann-der-koenig-sein-wollte",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Der Mann, der König sein wollte",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Errata: Splig sollte das Abenteuer auf dem rechten Nachbarfeld der ersten Tür auf der den Helden abgewandten Seite (Spielplanteil 28B) beginnen, wie auf diesem Bild gezeigt:"
        ]
      }
    ],
    "notes": [],
    "page": 80,
    "subgroupDe": "Die Schattenrune"
  },
  {
    "id": "adventure-der-novize",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Der Novize",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Aufgabenmarker bleibt auf dem Heldenbogen, wenn der Held niedergestreckt ist. Er kann nicht fallen gelassen werden."
        ]
      }
    ],
    "notes": [],
    "page": 80,
    "subgroupDe": "Das Blutvermächtnis"
  },
  {
    "id": "adventure-die-belagerung-der-himmelsfeste",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Belagerung der Himmelsfeste",
    "groups": [
      {
        "label": "Szene 1",
        "points": [
          "Wenn Belthir kein Monster trägt, wird er nicht betäubt, nachdem er fliegt und auf ein besonderes Feld platziert wird."
        ]
      }
    ],
    "notes": [],
    "page": 80,
    "subgroupDe": "Das Blutvermächtnis"
  },
  {
    "id": "adventure-urkho-wird-kommen",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Urkho wird kommen",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Lord Merik Farrow kann die Gefangenen nicht von der anderen Seite der verschlossenen Tür in die Grube werfen."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Das Blutvermächtnis"
  },
  {
    "id": "adventure-der-lockvogel",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Der Lockvogel",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Der Overlord kann die Reihenfolge der Effekte am Ende seines Spielzuges wählen (z.B. 1 Merriod als Verstärkung bringen, bevor es den Trick beendet)."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Das Blutvermächtnis"
  },
  {
    "id": "adventure-die-tiefen-des-klosters",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Tiefen des Klosters",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Wenn ein Spielplanteil mit dem Geheimgangmarker von Sir Alric Farrow zerstört wird, wird jeder Held auf zerstörten Spielplanteil und auf dem Geheimkammer-Spielplanteil beiseite gestellt - sie fallen. Alle Marker auf diesen beiden Spielplanteilen werden abgeworfen; die Geheimkammer gilt als nicht gelöst und die Helden bekommen keine Belohnung."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Das Blutvermächtnis"
  },
  {
    "id": "adventure-die-schattenspitze",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Schattenspitze",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 2",
          "Diener vollziehen den Übergang zu Szene 2 wie alle anderen Monster."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Das Blutvermächtnis"
  },
  {
    "id": "adventure-allumfassende-dunkelheit",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Allumfassende Dunkelheit",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Vertraute können auf den besonderen grünen Feldern beschworen werden. Das Blockieren aller grüner Felder verhindert, dass die Goblin-Bogenschützen Verstärkung erhalten."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Das Blutvermächtnis"
  },
  {
    "id": "adventure-gute-miene-zum-boesen-spiel",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Gute Miene zum bösen Spiel",
    "groups": [
      {
        "label": null,
        "points": [
          "Jorem Tolk ist nicht von Fähigkeiten oder Effekten betroffen, die auf Helden oder Monster zielen. Jedoch ist er von Fähigkeiten betroffen, die auf Figuren im Allgemeinen zielen (z.B. die Graben-Fähigkeit des Pestwurms).",
          "Jorem Tolk kann von Zuständen betroffen werden; Vergiftet und Erkrankt würde dem Overlord Kontrolle über ihn jeweils zu Beginn des Overlordspielzuges geben."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Höhle des Lindwurms"
  },
  {
    "id": "adventure-die-waffenschmiede",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Waffenschmiede",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Die Schattendrachen können nicht durch einen Spieleffekt bewegt werden, der es ihnen erlaubt, sich zusätzliche Schritte zu bewegen. Das beinhaltet die Effekte von Armbrust, Lederpeitsche und des Relikts Meisterbogen.",
          "Szene 2",
          "Der Overlord kann Schattendrachen als offene Gruppe wählen, wenn kein Schattendrache in Szene 1 den Spielplan verlassen hat.",
          "Die Overlordkarte Verstärkung rufen kann nicht auf die Schattendrachen gespielt werden, die auf dem Spielplan sind, weil sie in Szene 1 den Spielplan verlassen haben."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Höhle des Lindwurms"
  },
  {
    "id": "adventure-bis-an-die-zaehne-bewaffnet",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Bis an die Zähne bewaffnet",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 2",
          "Jeder Halbdrachenkrieger kann einmal pro Aktivierung die Spezialaktion ausführen, um die Truppen mit Aurim-Waffen auszurüsten."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Höhle des Lindwurms"
  },
  {
    "id": "adventure-verderbliches-gefluester",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Verderbliches Geflüster",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Massenpanik: „Wenn ein Reisender aktiviert wird, entscheidet der aktive Spieler die Richtung und bewegt den Reisenden 2 Felder in diese Richtung.“",
          "Reisende können sich nicht in Felder mit Figuren bewegen."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-geweissagtes-zusammentreffen",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Geweissagtes Zusammentreffen",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Der Overlord kann wählen, ob er den Effekt „lege 2 Schadensmarker vor dir ab“ auslöst, bevor Serena von den Helden am Ende desselben Overlordspielzuges gerettet wird."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-ganovenehre",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Ganovenehre",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Den Code knacken sollte lauten: „Einmal pro Spielrunde kann 1 Held versuchen, die korrekte Reihenfolge der Marker zu erraten [...]“. Zusätzlich haben die Helden einen letzten Versuch (selbst wenn ein Held in dieser Runde schon einen Versuch unternommen hat), wenn der Overlord 6 Erschöpfung -Marker vor sich liegen hat.“",
          "Szene 2",
          "Erschöpfung -Marker aus Szene 1 werden nicht übernommen.",
          "Wenn ein grüner Aufgabenmarker aufgedeckt wird, kann der Overlord die Overlordkarte Mimikry spielen. Der grüne Aufgabenmarker wird dann als Volucrix-Jäger behandelt. Der Held, der den Volucrix-Jäger besiegt, wirft den grünen Aufgabenmarker ab und zieht eine Suchkarte.",
          "Wenn Raythen den grünen Aufgabenmarker aufdeckt, zieht der nächste Held eine Suchkarte.",
          "Wenn Raythen einen Aufgabenmarker aufdeckt, kann der Overlord keine Karte abwerfen, um statt eines gelben einen grünen Würfel zu werfen.",
          "Wenn der Alarm erklingt und es weniger Aufgabenmarker gibt, als es der Gruppengröße der Volucrix-Jäger entspricht, platziert der Overlord die restlichen Volucrix-Jäger bis zur Gruppengröße auf das nächste Feld zu einem nicht aufgedeckten Aufgabenmarker seiner Wahl."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-rueckeroberung",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Rückeroberung",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Sonderregeln, erster Satz: Der erste Satz sollte lauten: „Die Dickichte in diesem Abenteuer sind extrem verworren und schwierig zu passieren.“",
          "Szene 2",
          "Monster, die durch Herausforderungsmarker ins Spiel kamen und besiegt wurden, zählen gegen die Abenteueraufgabe."
        ]
      }
    ],
    "notes": [],
    "page": 81,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-tief-im-nebel",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Tief im Nebel",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Sonderregeln, zweiter Absatz: „Sobald ein anderer Held oder Gefährte oder der Irrwisch in Sichtlinie und innerhalb von drei Feldern zu dem verirrten Helden oder Gefährten ist, ist dieser Held oder Gefährte nicht länger verirrt.“"
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-hugins-huegelgrab",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Hugins Hügelgrab",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 2",
          "Errata: Aufbau: Füge hinzu: „Die Ettins werden auf die Lavagrube gestellt.“"
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-geheimnisse-in-stein",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Geheimnisse in Stein",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 2",
          "Der Zustand „Verflucht“ von einem beständigen Fluch kann bis zum Ende der Runde des Helden nicht entfernt werden. Nach dem Ende der Runde ist der Held immer noch verflucht, kann ihn aber nun mit normalen Mitteln abwerfen.",
          "Wenn ein verfluchter Held von einem beständigen Fluch betroffen ist, ist der frühere Fluch nun anhaltend. Der Held erhält keinen neuen Zustand „Verflucht“; der aktuelle Zustand des Helden wird stattdessen modifiziert."
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-die-wut-des-sturmes",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Die Wut des Sturmes",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Spligs Aktivierung endet nicht, wenn er sich aufrappelt. Er kann während seiner Aktivierung eine zweite Aktion durchführen."
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-auferstanden-von-den-toten",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Auferstanden von den Toten",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 2",
          "Errata: Sonderregeln, erster Absatz: Füge hinzu: „Dickichte können nicht auf normale Art und Weise entfernt werden.“",
          "Wenn der Overlord einen Helden zwingt, sich durch eines der besonderen Dickichte zu bewegen, wird das besondere Dickicht als normales Dickicht behandelt.",
          "Die Effekte der Marker, die sich vor dem Overlord befinden, sind additiv.",
          "Hulldyr wird nicht als Figur behandelt. Er blockiert nicht die Bewegung oder die Sichtlinie."
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-pilgerreise",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Pilgerreise",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn ein Held auf einem Nachbarfeld eines Wächters die besondere Aktion Ausruhen ausführt, werden immer noch alle Effekte ausgelöst, die auch bei normalen AusruhenAktionen ausgelöst werden.",
          "Aktive Wächter bleiben aktiv, bis sie deaktiviert (weiß oder grün) oder zerstört (blau und rot) werden, selbst wenn sie mehr als 5 Schadensmarker haben."
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-ruhm-und-reichtum",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Ruhm und Reichtum",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Siegbedingungen, erster Satz: Der Satz sollte lauten: „Sobald der Held, der die Gefangene trägt, den Spielplan über den Ausgang verlassen hat, [...]“",
          "Szene 2",
          "Errata: Der Geheimgang: Füge hinzu: „Türen können nicht auf normale Art und Weise geöffnet oder geschlossen werden.“",
          "Der Geheimgang kann angegriffen werden, als wäre er ein Monster. Siehe \"Angriffe auf Objekte\" auf Seite 5.",
          "Als Aktion kann ein Held einen Gefangenen aufnehmen, wenn er benachbart zu oder auf einem Personenmarker steht."
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-im-herzen-der-wildnis",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Im Herzen der Wildnis",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Zombies können in jeder Aktivierung beide Aktionen benutzen, um zu klettern.",
          "Für Zombies ist die Beschränkung der Gruppengröße aufgehoben.",
          "Szene 2",
          "Errata: Geschändeter Boden, erster Satz: Der Satz sollte lauten: „Wenn es im Wildgarten ist, kann sich ein Monster mit dem Monstermerkmal Verflucht als Aktion selbst opfern.“",
          "Figuren, die als Helden gelten, provozieren die umsichschlagenden Tentakel und können von ihnen als Ziel ausgewählt werden."
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-lasst-die-wahrheit-begraben-bleiben",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Lasst die Wahrheit begraben bleiben",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Die Kette, erster Satz des zweiten Absatzes: Der Satz sollte lauten: „Kettenglieder blockieren die Sichtlinie nicht, immer wenn eine andere Figur als Splig, ein Feld mit einem Kettenglied betritt, endet ihr Zug sofort.“",
          "Szene 2",
          "Errata: Sonderregeln, Vernünftig mit Splig sprechen: Der erste Satz sollte sein: „Solange er sich unter der Kontrolle des Overlords befindet, kann Splig keine Herz erleiden oder besiegt werden.“",
          "Errata: Sonderregeln, letzter Satz des dritten Absatzes: Der Satz muss lauten: „Solange Splig von den Helden kontrolliert wird, kann er den Spielplan jederzeit über den Ausgang verlassen. Wird er vom Overlord kontrolliert, darf er den Spielplan über den Ausgang verlassen wenn sich drei Aufgabenmarker auf seiner Hauptmannkarte befinden.“",
          "Wenn Splig unter der Kontrolle der Helden ist und eine Bewegungsaktion durchführt, bekommt er 3 Bewegungspunkte.",
          "Vertraute, Verbündete und Splig können in dieser Szene nicht fallen."
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-der-brunnen-der-erkenntnis",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Der Brunnen der Erkenntnis",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Besessene Gefährten, letzter Satz des ersten Absatzes: Der Satz muss lauten: „Der Overlord kann nur 1 besessenen Gefährten steuern. Außerdem kann er keinen Gefährten steuern, der geheilt wurde.“"
        ]
      }
    ],
    "notes": [],
    "page": 82,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-das-zuenglein-an-der-waage",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Das Zünglein an der Waage",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Sonderregeln, erster Satz: Der Satz sollte lauten: „Wenn er benachbart zu einem offen liegenden Aufgabenmarker ist, kann ein Held ihn als Aktion aufnehmen. Jeder Held kann nur 1 Gewicht tragen.“",
          "Errata: Verstärkung, letzter Satz des dritten Absatzes: Der Satz sollte lauten: „Der Overlord kann bis zu 2 Monster als Verstärkung aufstellen (Gruppengröße einhalten).“",
          "In diesem Abenteuer werden die Aufgabenmarker aus dem aus dem Grundspiel und der Erweiterung Labyrinth des Verderbens verwendet: 5 blaue, 4 grüne, 4 weiße und 4 rote."
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-im-netz-der-macht",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Im Netz der Macht",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Sonderregeln, erster Satz des dritten Absatzes: Der Satz sollte lauten: „Solange mindestens 1 Erschöpfungsmarker auf Ariads Hauptmannkarte liegt, kann sie sich nicht bewegen, nicht bewegt und nicht aktiviert werden.“ Ferner sollte hinzugefügt werden: „Außerdem ist Ariad, solange mindestens 1 Erschöpfungsmarker auf ihrer Hauptmannkarte liegt, immun gegen alle Zustände.“"
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-ein-hoffnungsschimmer",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Ein Hoffnungsschimmer",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Monster: Die Aufzählung sollte lauten: „Ariad. Lord Merick Farrow. Splig. Serena oder Raythen. Zombies. 4 offene Gruppen.“",
          "Errata: Aufbau, vierter Absatz: Der Text sollte lauten: „Nehmt je einen roten, blauen, grünen und weißen Aufgabenmarker und platziert je einen davon offen auf jeder Monsterkarte der offenen Monstergruppen.“",
          "Errata: Magische Zeichen, dritter Absatz: Der Text sollte lauten: „Falls keine Aufgabenmarker mehr auf dem Spielplan liegen, legt der Overlord zum Ende jedes eigenen Zuges einen Erschöpfungsmarker in seinen Spielbereich.“",
          "Beim Spielaufbau eines Spiels mit 4 Helden wird der Verbündete auf das nächste leere Feld zum Eingang platziert, auf der anderen Seite der Tür."
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Labyrinth des Verderbens"
  },
  {
    "id": "adventure-vogelfrei",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Vogelfrei",
    "groups": [
      {
        "label": null,
        "points": [
          "Skarn kann in seiner Aktivierung nur 1 Bewegungsaktion durchführen. Rennen kann in diesem Abenteuer nicht benutzt werden, um ihm eine zweite Bewegungsaktion zu geben, da den Goldenen Regeln zufolge die Abenteuerregeln Vorrang vor den Karten haben."
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Schloss Rabenfels"
  },
  {
    "id": "adventure-herzensangelegenheit",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Herzensangelegenheit",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Verstärkung, zweiter Absatz: Der Text sollte lauten: „Wenn am Ende eines Overlordzuges Skarn nicht auf dem Spielplan und mind. 1 Elite-Monster im Keller ist, kann [...]“"
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Schloss Rabenfels"
  },
  {
    "id": "adventure-der-herr-des-hauses",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Der Herr des Hauses",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Belohnungen, dritter Absatz: Der Text sollte lauten: „Wenn Skarn in dieser Szene nicht bewusstlos war, erhält der Overlord die Overlordkarte „Endlose Vorräte“.",
          "Wenn ein Held die Attributsprobe für eine verzauberte Tür (gelb) besteht, kann er eine Seite irgendeiner verzauberten Tür wählen. Er stellt seine Figur so nah wie möglich auf die Seite der gewählten verzauberten Tür."
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Schloss Rabenfels"
  },
  {
    "id": "adventure-tief-unterm-schloss",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Tief unterm Schloss",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Siegbedingungen, erster Absatz: Ersetze: „[…] b) Skarn den Spielplan verlässt und der Overlord keinen Aufgabenmarker vor sich liegen hat […]“, durch, „[…] b) Skarn den Spielplan verlässt und der Overlord keinen blauen Aufgabenmarker vor sich liegen hat […]“"
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Schloss Rabenfels"
  },
  {
    "id": "adventure-eine-demonstration",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Eine Demonstration",
    "groups": [
      {
        "label": null,
        "points": [
          "Am Ende des Abenteuers bekommen die Helden 25 Gold für jeden Personenmarker auf dem Spielplan, egal, ob dieser Marker einen Bürger oder einen korrumpierten Bürger darstellt."
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Schatten von Nerekhall"
  },
  {
    "id": "adventure-buergerkrieg",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Bürgerkrieg",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Spielplan: Beim Auslegen der Such- und Personenmarker, sollte je einer der Marker, wie unten abgebildet, auf Spielplanteil 61A gelegt werden."
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Schatten von Nerekhall"
  },
  {
    "id": "adventure-der-rattenkoenig",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Der Rattenkönig",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Wenn eine große Figur (wie ein Rattenschwarm) ein Grubenfeld auf Spielplanteil 4B betritt, erleidet es 2 Herz und wird auf Spielplanteil 26B platziert. Sämtliche verbleibenden Bewegungspunkte können normal ausgegeben werden.",
          "Szene 2",
          "Ixzhod wird als Objekt betrachtet, das von einem Monster angegriffen werden kann (siehe \"Angriffe auf Objekte\" auf Seite 5)."
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Schatten von Nerekhall"
  },
  {
    "id": "adventure-ein-ehrwuerdiger-buerger",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Ein ehrwürdiger Bürger",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Fähigkeiten, die Herz zu Angiffen hinzuaddieren (z.B. Gräber, Doppelhieb, Stahlhorns Heldenfähigkeit) können benutzt werden, wenn Bertram mit bloßen Händen angegriffen wird.",
          "Da Bertram gegen alle Spieleffekte immun ist, kann ein Eherner Wächter Beschützen nicht einsetzen, um Angriffe auf sich zu ziehen, die auf Bertram zielen."
        ]
      }
    ],
    "notes": [],
    "page": 83,
    "subgroupDe": "Schatten von Nerekhall"
  },
  {
    "id": "adventure-verraeter-in-unserer-mitte",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Verräter in unserer Mitte",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Tristayne kann 3 Herz erleiden, um einen Höllenkoloss zu beschwören, selbst wenn ihn das besiegen würde. Tristanye darf seine Chaosenergie Fähigkeit nicht einsetzen, um den erhaltenen Herz auf den Höllenkoloss zu übertragen, da dieser sich zu diesem Zeitpunkt nicht auf der Karte befindet."
        ]
      }
    ],
    "notes": [],
    "page": 84,
    "subgroupDe": "Schatten von Nerekhall"
  },
  {
    "id": "adventure-erhebt-euch-meine-freunde",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Erhebt euch, meine Freunde",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 1",
          "Errata: Spielplan: Der „Steinige Pfad“ ist Spielplanteil 20A und nicht 6A."
        ]
      }
    ],
    "notes": [],
    "page": 84,
    "subgroupDe": "Schatten von Nerekhall"
  },
  {
    "id": "adventure-massenpanik",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Massenpanik",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 2",
          "Errata: Spielvorbereitung: Ersetze „6 Personenmarker“ durch „5 Personenmarker“",
          "Errata: Siegbedingungen: Der Text sollte lauten: Wenn die Helden 5 Erschöpfungsmarker haben [...]“"
        ]
      }
    ],
    "notes": [],
    "page": 84,
    "subgroupDe": "Schatten von Nerekhall"
  },
  {
    "id": "adventure-geisterstadt",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Geisterstadt",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Helden können einen kontaminierten erschlagenen Dorfbewohner durchsuchen, um dessen Ersetzuen durch einen Sarkomanten zu verhindern."
        ]
      }
    ],
    "notes": [],
    "page": 84,
    "subgroupDe": "Die Trollsümpfe"
  },
  {
    "id": "adventure-quell-der-krankheit",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Quell der Krankheit",
    "groups": [
      {
        "label": null,
        "points": [
          "In einer Kampagne mit 2 oder 3 Helden befolgen die Pestwürmer als Verstärkung nicht die Regeln bezüglich der Beschränkung der Gruppengröße.",
          "Der Overlord bekommt nur für das Ablegen von Bürgermarkern Erschöpfungsmarker, wie es im Abschnitt Befall beschrieben ist. Durch das Verwandeln von verseuchten Bürgern in Pestwürmer erhält der Overlord keine Erschöpfungsmarker."
        ]
      }
    ],
    "notes": [],
    "page": 84,
    "subgroupDe": "Die Trollsümpfe"
  },
  {
    "id": "adventure-feurige-ernte",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Feurige Ernte",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Gier ist etwas Schändliches: Der zweite Absatz sollte lauten: „Hat er 4 Aufgabenmarker vor sich liegen, kann Mughin über den Eingang oder Ausgang den Spielplan verlassen.“"
        ]
      }
    ],
    "notes": [],
    "page": 84,
    "subgroupDe": "Krone des Schicksals"
  },
  {
    "id": "adventure-heiligendes-feuer",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Heiligendes Feuer",
    "groups": [
      {
        "label": null,
        "points": [
          "Szene 2B",
          "Errata: Das Kartenteil Heiligtum sollte die Nummer 8B haben (nicht82B)."
        ]
      }
    ],
    "notes": [],
    "page": 84,
    "subgroupDe": "Nebel von Bilehall"
  },
  {
    "id": "adventure-zuchtmeister",
    "scope": "adventure",
    "sectionDe": "2.8 Abenteuer",
    "nameDe": "Zuchtmeister",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Aufbau: Füge hinzu: \"Die schlurfende Kolosse werden in die Halle der Statuen gestellt.\""
        ]
      }
    ],
    "notes": [],
    "page": 84,
    "subgroupDe": "Rostende Ketten"
  },
  {
    "id": "rumor-ein-vergrabener-schatz",
    "scope": "rumor",
    "sectionDe": "2.9 Gerüchtekarten",
    "nameDe": "Ein vergrabener Schatz",
    "groups": [
      {
        "label": null,
        "points": [
          "Errata: Der letzte Satz muß lauten: „Dann wird diese Geheimkammerkarte und der Geheimgangmarker abgeworfen.“"
        ]
      }
    ],
    "notes": [],
    "page": 84
  },
  {
    "id": "rumor-hunger-und-not",
    "scope": "rumor",
    "sectionDe": "2.9 Gerüchtekarten",
    "nameDe": "Hunger und Not",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn diese Karte während der Reise zum Intermezzo gespielt wird, hebt der letzte Satz von Hunger und Not nicht die Bedingung „Du kannst sie nicht spielen, wenn das Intermezzo als nächstes Abenteuer gewählt werden kann“ bestimmter Zusatzabenteuerkarten auf."
        ]
      }
    ],
    "notes": [],
    "page": 84
  },
  {
    "id": "rumor-zweifelhafte-schaetze",
    "scope": "rumor",
    "sectionDe": "2.9 Gerüchtekarten",
    "nameDe": "Zweifelhafte Schätze",
    "groups": [
      {
        "label": null,
        "points": [
          "Zweifelhafte Schätze kann nicht während des speziellen Einkaufschritts zwischen den Akten (nach dem Intermezzo) gespielt werden."
        ]
      }
    ],
    "notes": [],
    "page": 84
  },
  {
    "id": "secret-room-die-waffenkammer",
    "scope": "secret-room",
    "sectionDe": "2.10 Geheimkammerkarten",
    "nameDe": "Die Waffenkammer",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn ein Held einen Herausforderungsmarker aufdeckt, indem er den speziellen Effekt dieser Karte benutzt, wird der Token abgeworfen und es wird keine Suchkarte gezogen."
        ]
      }
    ],
    "notes": [],
    "page": 84
  }
]
