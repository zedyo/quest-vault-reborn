import type { RuleClarification } from '../types/game'

// ── CRRG Teil 1 – Referenz-Regel-Guide (Regelklärungen, alphabetisch) ─────────
//
// Quelle: „Community Rules Reference Guide (CRRG) V1.15" (deutsche Ausgabe),
// crrg.descent-community.org – frei verfügbare, von der Community erstellte
// Regelklärungs-Sammlung (offizielle FFG-Errata/FAQ + inoffizielle FAQs).
// AUTOMATISCH GENERIERT aus dem CRRG-PDF (Teil 1). Nicht von Hand editieren –
// stattdessen den Generator erneut laufen lassen. Additive Zusatzinfo; ersetzt
// keine Original-Spielregeln. Symbole sind als Wörter (Herz/Schub/Erschöpfung …)
// hinterlegt und werden über GameSymbols als Icons gerendert.

export const CRRG_SOURCE = 'Community Rules Reference Guide (CRRG) V1.15'
export const CRRG_URL = 'https://crrg.descent-community.org'

export const RULE_CLARIFICATIONS: RuleClarification[] = [
  {
    "id": "abenteuer",
    "term": "Abenteuer",
    "groups": [
      {
        "label": null,
        "points": [
          "Jedes Abenteuer ist ein taktisches Kampfspiel, das auf einen modularen Spielbrett ausgetragen wird und individuelle Regeln besitzt.",
          "Abenteuerbeschreibungen enthalten Informationen über den Spielaufbau, ein Diagramm des Spielplans, Sonderregeln und Aufgaben für jedes Abenteuer.",
          "Abenteuer bestehen aus einem oder mehreren Teilen, die als Szenen bezeichnet werden. Die Seite (Helden oder Overlord), die die Siegbedingungen der letzten Szene erfüllt, gewinnt das gesamte Abenteuer.",
          "Im Kampagnenspiel sind mehrere Abenteuer zu einer epischen Geschichte verknüpft."
        ]
      },
      {
        "label": "Questhandbuch",
        "points": [
          "Das Questhandbuch ist ein Buch, welches mehrere Abenteuer enthält, die entweder einzeln, als Mini-Kampagne oder als Kampagne gespielt werden können.",
          "Bestimmte Abenteuer können in Form von Gerüchteabenteuern in eine Kampagne eingebaut werden (siehe \"MiniKampagne\" auf Seite 25 und \"Abenteuerkarten\" auf Seite 19)."
        ]
      },
      {
        "label": "Abenteuervorbereitung",
        "points": [
          "Siehe \"Spielvorbereitungen\" auf Seite 35."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Hauptabenteuer",
          "Hauptabenteuer bringen die Kampagne voran und werden durch ein Banner dargestellt, auf dem “Beginnt in X Wochen” steht. Nebenabenteuers",
          "Nebenabenteuer bringen keine EP, aber dafür Einkommen und Ruhm für die Helden.",
          "Ein Nebenabenteuer zu spielen, bringt die Kampagne um eine Woche voran.",
          "Welche Nebenabenteuer verfügbar sind, wird durch die App per Zufall entschieden und hängt von verfügbaren Erweiterungen und von gekauften App-Inhalten ab. Verwandte Themen: Gerüchtekarten, Kampagnen, Spielvorbereitungen, Szenen"
        ]
      }
    ],
    "related": [],
    "page": 3
  },
  {
    "id": "ablegen-von-spielmaterial",
    "term": "Ablegen von Spielmaterial",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Text auf dem Spielmaterial weist die Spieler manchmal an, Karten oder Marker abzulegen. Abgelegte Marker werden wieder in den Vorrat gelegt; abgelegte Karten werden auf den entsprechenden Ablagestapel gelegt.",
          "Abgelegte Komponenten können zu einem späteren Zeitpunkt wieder ins Spiel kommen. Im Gegensatz dazu werden Komponenten, die in die Spielschachtel zurückgelegt werden, bis zum Ende des Abenteuers (im Einzelspiel) oder bis zum Ende der Kampagne (im Kampagnenspiel) nicht mehr benutzt, es sei denn, es ist etwas anderes angegeben"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Zurücklegen von Spielmaterial"
    ],
    "page": 3
  },
  {
    "id": "addiere-oder-subtrahiere-x",
    "term": "Addiere oder subtrahiere X",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Würfelwurf modifizieren\" auf Seite 43."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 3
  },
  {
    "id": "akte",
    "term": "Akte",
    "groups": [
      {
        "label": null,
        "points": [
          "Bestimmte Spielkomponenten (Abenteuer, Anführerkarten, Hauptmannkarten, Gerüchtekarten, Marktkarten und Monsterkarten) beziehen sich entweder auf Akt I oder Akt II, was durch ein Schlüsselwort im Kampagnenbogen (für Abenteuer) oder durch eine römische Zahl (für Karten) angezeigt wird.",
          "Im Kampagnenspiel beginnen die Spieler mit Akt I und benutzen die Akt I-Komponenten. Nach dem Übergang zu Akt II (nach dem Intermezzo) werden die Akt IIKomponenten verwendet.",
          "Wird ein einzelnes Abenteuer (ohne Kampagne) gespielt, kann dieses Abenteuer entweder mit den Komponenten aus Akt I oder Akt II gespielt werden, wobei jedoch empfohlen wird, die Akt II-Komponenten nur für Akt II-Abenteuer zu verwenden. In der epischen Variante auf Stufe Experten, sollten, hinsichtlich der Spielbalance, für alle Abenteuer Akt II-Komponenten verwendet werden."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Die App zeigt an, wann Akt I-Komponenten durch die dazugehörigen Akt II-Komponenten ersetzt werden. Verwandte Themen: Epische Variante, Kampagnen"
        ]
      }
    ],
    "related": [],
    "page": 3
  },
  {
    "id": "aktionen",
    "term": "Aktionen",
    "groups": [
      {
        "label": null,
        "points": [
          "Während ihrer Aktivierung sind die meisten Figuren auf zwei Aktionen beschränkt. Soweit nichts anderes beschrieben, darf eine Figur dieselbe Aktion mehrfach in ihrer Aktivierung durchführen. Helden: Bewegen, Angreifen, eine Fertigkeit einsetzen, Ausruhen, Suchen, Aufrappeln, einem Helden aufhelfen, Tür öffnen oder schließen und Spezialaktionen. Monster: Bewegen, Angreifen, Monsteraktion, Tür öffnen oder schließen und Spezialaktionen. Gefährten: Bewegen, Angreifen, Gefährtenaktion, einem Helden aufhelfen, Tür öffnen oder schließen und Spezialaktionen.",
          "Helden können beide Aktionen nutzen, um einen Angriff durchzuführen; Monster und Gefährten dürfen pro Zug nur eine Aktion durchführen, die einen Angriff beinhaltet.",
          "Fertigkeitsaktionen und Spezialaktionen sind auf den Spielkomponenten mit dem Aktion Symbol oder dem Text „als Aktion“ markiert. Auch wenn eine solche Aktion mehrere Angriffe oder eine Bewegung und einen Angriff beinhaltet, wird hierfür nur eine Aktion benötigt.",
          "Vertraute: dürfen eine Bewegungsaktion und eine andere Aktion durchführen, die auf der Vertrautenkarte abgedruckt ist. Zusätzlich können Vertraute eine ihrer Aktionen nutzen um: –– eine Aktion durchzuführen, welche auf einer Zustandskarte beschrieben ist (Blutend, Betäubt oder Brennend) –– aus einer Grube zu klettern",
          "Mit Ausnahme von Bewegungsaktionen dürfen Aktionen nicht freiwillig unterbrochen werden und müssen komplett durchgeführt werden, bevor die Figur die nächste Aktion durchführt.",
          "Eine Figur muss weder beide Aktionen noch überhaupt eine Aktion ausführen.",
          "Zahlreiche Spieleffekte erlauben es den Figuren anzugreifen, zu interagieren oder sich zu bewegen ohne eine Aktion auszuführen."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Das Aktivierungsfenster führt mögliche Aktionen für Monster auf. Verwandte Themen: Aktivierung, Aktivierungsfenster, Bewegung, Heldenspielzug, Runden, Spielzug, Unterbrechung"
        ]
      }
    ],
    "related": [],
    "page": 3
  },
  {
    "id": "aktivierung",
    "term": "Aktivierung",
    "groups": [
      {
        "label": null,
        "points": [
          "Eine Figur oder ein Marker muss aktiviert werden, bevor die meisten Aktionen durchgeführt werden können. Solange nicht anders beschrieben, wird eine Figur oder ein Marker bei Aktionen, die außerhalb der normalen Zugreihenfolge stattfinden, nicht aktiviert (siehe „Heldenspielzug“ und „\"Overlordspielzug\" auf Seite 36), z.B. bei Aktionen, welche Aktionen anderer Figuren unterbrechen oder bei bestimmten Abenteuer-spezifischen Aktionen.",
          "Jede Figur darf in der Regel nur einmal pro Runde aktiviert werden. –– Für Helden umfasst Schritt 3. „Aktionen durchführen“ des Heldenzugs die Aktivierung (siehe „\"Heldenspielzug\" auf Seite 36“). –– Für Helden, Gefährten und Figuren, die wie Helden behandelt werden, umfasst die Aktivierung den Zeitraum, in dem sie ihre Standardaktionen ausführen können. –– Vertraute werden direkt vor oder nach Schritt 3.II des Helden aktiviert, welcher den Vertrauten kontrolliert. Solange nicht anders beschrieben, darf keine Aktivierung zwischen den Heldenaktionen erfolgen. (Siehe \"Vertraute\" auf Seite 42).",
          "Monster werden als Gruppe aktiviert. Alle Monster einer Gruppe müssen aktiviert werden, bevor ein Monster einer anderen Gruppe aktiviert werden darf. In einigen Fällen wird das als „aktiviere eine Monstergruppe“ bezeichnet, obwohl jedes Monster in der aktivierten Gruppe einzeln aktiviert wird. (Siehe \"Overlordspielzug\" auf Seite 36).",
          "Der Overlordspieler muss alle Monstergruppen in seinem Zug aktivieren, auch wenn sie keine Aktionen durchführen.",
          "Der Begriff „beim Aktivieren“ bezeichnet den gesamten Zeitraum während der Aktivierung einer Figur.",
          "In einigen Abenteuern werden Nicht-Spieler Charaktere „zu Beginn“ oder „am Ende“ eines Heldenzuges aktiviert, was immer noch Teil des Heldenzuges ist. In einigen Abenteuern werden Charaktere „vor“ oder „nach“ dem Heldenzug aktiviert, was kein Teil eines Zuges ist."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Helden und Monstergruppen wechseln sich mit ihrem Zug und ihrer Aktivierung ab.",
          "Details zur Monsteraktivierung werden im Aktivierungsfenster genannt (siehe rechts).",
          "Nachdem ein Held oder alle Monster einer Gruppe aktiviert wurden, wählen die Spieler „Zug beenden“ vom Heldenportrait beziehungsweise den Button am unteren Ende des Aktivierungsfensters. Verwandte Themen: Akte, Runden, Spielzug, Vertraute"
        ]
      }
    ],
    "related": [],
    "page": 4
  },
  {
    "id": "aktivierungsfenster",
    "term": "Aktivierungsfenster",
    "groups": [
      {
        "label": null,
        "points": [
          "Das Aktivierungsfenster in Wege zum Ruhm ist ein Bereich auf dem Bildschirm, in welchem Details zur Monsteraktivierung angezeigt werden."
        ]
      },
      {
        "label": "Spezialeffekt",
        "points": [
          "Der obere Teil des Aktivierungsfensters zeigt Effekte an, welche Vorteile bieten oder ein bestimmtes Verhalten der Monstergruppe beschreiben.",
          "Der aufgeführte Effekt hat Vorrang gegenüber allen Regeln, die ihn verbieten würden. Zum Beispiel dürfen Monster zwei Angriffsaktionen durchführen (auch ohne Aggressiv) und Monster mit Behäbig dürfen zwei Bewegungsaktionen durchführen."
        ]
      },
      {
        "label": "Aktionsliste",
        "points": [
          "Die Aktionsliste zeigt an, welcher Monstertyp (Elite oder Normal) zuerst aktiviert wird, gefolgt von einer Liste möglicher Aktionen (alle mit dem Aktion Symbol markiert).",
          "Für jedes Monster des angezeigten Typs müssen die Spieler die Liste von oben nach unten abhandeln. Alle Aktionen, die ein Monster nicht durchführen kann, werden übersprungen (siehe unten). Sobald die Spieler am Ende der Liste angelangt sind, wird von vorne begonnen, bis die Monsteraktivierung endet. Die Monsteraktivierung endet, nachdem das Monster zwei Aktionen durchgeführt hat oder wenn es keine der aufgeführten Aktionen mehr durchführen kann."
        ]
      },
      {
        "label": "Aktionen überspringen",
        "points": [
          "Die meisten Monster können nicht mehr als einmal pro Aktivierung angreifen und jede Aktion, die einen Angriff beinhaltet, wird übersprungen, wenn dadurch das Angriffslimit des Monsters überschritten wird.",
          "Andere Aktionen werden übersprungen, –– wenn eine Aktion ein Monster anweist sich an einen bestimmten Platz zu bewegen, aber das Monster bereits an diesem Platz ist. –– wenn eine Aktion ein Monster anweist, einen Helden in einer bestimmten Reichweite anzugreifen, sich aber innerhalb dieser Reichweite keine Helden befinden. –– wenn eine Aktion ein Monster besiegen würde, bevor es einen Helden beeinflussen kann. –– wenn ein Held eine Fertigkeit oder Fähigkeit hat, welche eine Aktion unterbrechen oder stoppen würde und diese Fertigkeit oder Fähigkeit bereits aktiv ist. Jedoch führt das Monster diese Aktion aus, wenn der Held die Fertigkeit oder Fähigkeit erst aktivieren muss.",
          "Zurückziehen ist nie erforderlich. Wenn ein Monster sich nicht zurückziehen kann, aber ein anderer Teil der Aktion durchgeführt werden kann, wird die Aktion nicht übersprungen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Akte",
      "Monster",
      "Rückzug",
      "Runden"
    ],
    "page": 4
  },
  {
    "id": "alte-wand",
    "term": "Alte Wand",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Türen und Tür-ähnliche Objekte\" auf Seite 40"
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 4
  },
  {
    "id": "anfuehrer",
    "term": "Anführer",
    "groups": [
      {
        "label": null,
        "points": [
          "Mit einigen Handlungskarten kann der Overlord eine Hauptmannfigur als Anführer in einer offenen Monstergruppe ins Spiel bringen.",
          "Auf der Anführerkarte des aktuellen Akts sind sämtliche Werte und Fähigkeiten des Anführers angegeben.",
          "Anführer gelten als Elite-Monster.",
          "Oft weisen Handlungskarten, mit denen ein Anführer beschworen werden kann, den Overlord an, nach dem Aufbau einer Szene normale oder Elite-Monster in einer offenen Gruppe durch den Anführer zu ersetzen. Hierdurch wird die Gruppengröße der offenen Gruppe um",
          "die Anzahl der normalen und/oder Elite-Monster reduziert, welche auf der Handlungskarte stehen. Hierbei ist zu beachten, dass die Monster sich nicht auf dem Spielplan befinden müssen, wenn sie ersetzt werden (z.B. normale Kobolde mit „Brut“).",
          "Wenn der Overlord die Voraussetzungen für das Ersetzen auf Grund der Gruppengröße nicht erfüllen kann, ersetzt der Anführer die komplette offene Gruppe.",
          "Solange der Anführer auf dem Spielplan ist, kann der Overlord die Monsterfigur(en), die er ersetzt, nicht als Verstärkung ins Spiel bringen (unabhängig von den Regeln des Abenteuers).",
          "Anführer gelten immer als Mitglied der offenen Gruppe, inklusive der Monstermerkmale, mit folgenden Ausnahmen: –– Ein Anführer kann nicht als Verstärkung ins Spiel gebracht werden, unabhängig von den Regeln des Abenteuers. –– Wird ein Anführer besiegt, muss der Overlord die Handlungskarte, mit der er den Anführer beschworen hat, zurück in sein Handlungsdeck legen. Er kann die Karte später erneut erwerben.",
          "Anführer können keine Relikte tragen.",
          "Weder im Intermezzo noch im Finale kann der Overlord einen Anführer beschwören.",
          "Der Overlord kann den Anführer nicht in einem Abenteuer beschwören, in dem der Hauptmann, der Held oder der Gefährte desselben Namens vorkommt. Außerdem kann der Overlord bestimmte Anführer in bestimmten Kampagnen nicht beschwören. (Details hierzu sind auf der Handlungskarte oder in der Abenteuerbeschreibung genannt): –– Baron Zachareth - Die Schattenrune (gesamte Kampagne) und Das Blutvermächtnis (nachdem der Overlord die Hauptmannversion des Barons geopfert hat) –– Eliza Farrow - Das Blutvermächtnis (gesamte Kampagne) –– Splig - Das Blutvermächtnis (nachdem der Overlord die Hauptmannversion Spligs geopfert hat) –– Belthir - Das Blutvermächtnis (nachdem der Overlord die Hauptmannversion Belthirs geopfert hat) –– Königin Ariad - Labyrinth des Verderbens (gesamte Kampagne) –– Rylan Olliven - Schatten von Nerekhall (gesamte Kampagne) –– Tristayne Olliven - Schatten von Nerekhall (gesamte Kampagne) –– Sinistrael - Schatten von Nerekhall (gesamte Kampagne)"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Handlungskarten",
      "Hauptmänner",
      "Verstärkung"
    ],
    "page": 4
  },
  {
    "id": "angriffe",
    "term": "Angriffe",
    "groups": [
      {
        "label": "Allgemein",
        "points": [
          "Wenn eine Figur einen Angriff durchführt, werden eine Reihe von spezifischen Schritten nacheinander durchgeführt (siehe Kasten \"Schritte im Kampf\" auf Seite 6).",
          "Schaden austeilen oder Angriffs- oder Verteidigungswürfel werfen, stellen selbst keinen Angriff dar.",
          "Wenn der Angreifer besiegt wird, während er einen Angriff durchführt, werden alle weiteren Schritte übersprungen und der Angriff wird sofort abgebrochchen. Wenn eine Figur einen zusätzlichen Angriff (z.B. Vorrücken,",
          "Kampfrausch, Zerfleischen) oder eine Angriffsaktion (z.B. Wutausbruch) durch einen Spieleffekt erhält, darf nur ein normaler Angriff durchgeführt werden und kein Angriff, der Teil einer Aktion ist."
        ]
      },
      {
        "label": "Nahkampfangriffe",
        "points": [
          "Nahkampfangriffe können von Figuren oder Markern mit dem -Symbol auf den Gegenstands-, Verbündeten-, Vertrautenoder Monsterkarten oder in der Abenteuerbeschreibung durchgeführt werden.",
          "Ein Held kann einen Nahkampfangriff mit bloßen Händen durchführen (selbst wenn er mit einer Waffe ausgerüstet ist); für diesen Angriff wirft er nur einen blauen Kampfwürfel.",
          "Figuren oder Marker, die einen Nahkampfangriff durchführen, können nur ein benachbartes Feld angreifen, es sei denn, eine Fähigkeit wie Weitreichend oder Ausgedehnt erlaubt spezifisch das Angreifen von weiter entfernten Feldern.",
          "Nahkampfangriffe (selbst solche mit Weitreichend oder Ausgedehnt) benötigen keine Reichweite und können normalerweise nicht wegen ungenügender Reichweite fehlschlagen, z.B. wenn sich das Ziel wegbewegt, nachdem ein gültiger Angriff erklärt wurde. Jedoch können bestimmte Effekte Reichweitevoraussetzungen hinzufügen (z.B. Tarnung).",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92 für Beispiele."
        ]
      },
      {
        "label": "Fernkampfangriffe",
        "points": [
          "Fernkampfangriffe können von Figuren oder Markern mit dem -Symbol auf den Gegenstands-, Verbündeten-, Vertrautenoder Monsterkarten oder in der Abenteuerbeschreibung durchgeführt werden.",
          "Figuren oder Marker, die einen Fernkampfangriff durchführen, können jede Figur in Sichtweite angreifen, unabhängig von der Entfernung.",
          "Nach dem Werfen der Würfel wird die gesamte Reichweite des Angreifers bestimmt, indem alle gewürfelten Ziffern und alle Reichweiten-Modifikatoren zusammengezählt werden, die durch Fähigkeiten in Schritt 3 des Angriffs (Reichweite prüfen) erhalten werden.",
          "Die Entfernung zwischen dem Angreifer und dem Ziel wird durch Zählen der Felder bestimmt. Wenn die gesamte Reichweite nicht gleich oder höher ist als die Distanz, so gilt der Angriff als Fehlschlag. Siehe \"Grosse Figuren\" auf Seite 20 für spezifische Regeln für Fernkampfangriffe für große Monster.",
          "Wenn eine benachbarte Figur per Fernkampf angegriffen wird, benötigt der Angreifer mindestens eine Reichweite von 1.",
          "Wenn ein Effekt eine Figur während der Schritte 1-3 eines Fernkampfangriffes bewegt, dann muss die neue Reichweite in Schritt 3 erreicht werden. Wenn das Ziel nach Schritt 3 bewegt wird, kann der Angriff nicht wegen ungenügender Reichweite fehlschlagen."
        ]
      },
      {
        "label": "Angriffe auf Objekte",
        "points": [
          "Wenn es explizit in der Abenteuerbeschreibung steht, können Objekte (z.B. Türen, Aufgabenmarker, usw.) als Ziel ausgewählt und/oder angegriffen werden, als wären sie"
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 5
  },
  {
    "id": "schritte-im-kampf",
    "term": "Schritte im Kampf",
    "groups": [
      {
        "label": null,
        "points": [
          "1. Waffe und Ziel wählen",
          "Angriffsart auf der Gegenstands-, Monster- oder Vertrautenkarte abgedruckt. Helden können eine ausgerüstete Waffe für den Angriff wählen. Alternativ können Helden mit den bloßen Händen angreifen oder eine Waffen-Suchkarte verwenden.",
          "Die meisten Fähigkeiten und Effekte auf Waffenkarten können nur genutzt werden, wenn mit dieser Waffe ein Angriff durchgeführt wird. Ausnahmen siehe Appendix.",
          "Ein Angriff wird auf ein gültiges und besetztes Zielfeld angesagt. Felder mit verbündeten Figuren oder leere Felder können nicht angegriffen werden. Einige Angriffe können mehrere Felder als Ziel haben.",
          "Voraussetzungen für Fähigkeiten mit Auslöserbedingungen, wie z.B. „beim Ziel wählen“ oder „beim Angriff “ werden in diesem Schritt ausgewertet (z.B. Jenseitig, Innere Fäulnis)",
          "In speziellen Fällen haben Angriffe kein Ziel, betreffen aber eine Anzahl von Feldern, welche in diesem Schritt angesagt werden müssen. 2. Würfeln",
          "Angriffs- und Verteidigungswürfel werden gleichzeitig geworfen. Wenn mehrere Figuren von einem Angriff betroffen sind, werden deren Verteidigungswürfel separat geworfen.",
          "Fähigkeiten mit „vor einem Würfelwurf “ und „nach einem Würfelwurf “ dürfen nur in diesem Schritt angewendet werden. Zusätzlich müssen Fähigkeiten mit „beim Angreifen“ nach dem Würfeln in diesem Schritt ausgeführt werden.",
          "Die gewürfelte Summe von Reichweite, Herz, und Schub ist das Angriffsergebnis. Die Summe der gewürfelten Verteidigung ist das Verteidigungsergebnis.",
          "Wenn mit dem Kampfwürfel ein X gewürfelt wird, gilt der Angriff als Fehlschlag und der Angriff ist beendet. 3. Reichweite prüfen",
          "Wenn ein Angriff wegen zu geringer Reichweite fehlschlägt, kann der Angreifer Fähigkeiten nutzen, um die Reichweite zu erhöhen. Andere Schub -Fähigkeiten dürfen zu diesem Zeitpunkt nicht benutzt werden.",
          "Wenn ein Angriff aufgrund fehlender Reichweite fehlschlägt, werden keine weiteren Schritte durchgeführt und der Angriff ist beendet. 4. Energie einsetzen",
          "Der Angreifer kann gewürfelte Schub einsetzen, um verschiedene Schub -Fähigkeiten in beliebiger Reihenfolge auszulösen. Jedes einzelne Schub -Symbol, das beim Angriffswurf gewürfelt wurde, kann einmal eingesetzt werden, um eine Schub -Fähigkeit auszulösen.",
          "Jede Schub -Fähigkeit kann nur einmal pro Angriff ausgelöst werden. Wenn jedoch zwei Schub -Fähigkeiten mit demselben Effekt zur Verfügung stehen, können beide einmal ausgelöst werden, wenn genug Schub gewürfelt wurden. Schub -Fähigkeiten beeinflussen den gesamten Angriff und werden",
          "auf alle vom Angriff betroffene Figuren angewendet.",
          "Zusätzliche Herz oder Verteidigung von Fähigkeiten werden entsprechend auf den Angriffs- oder Verteidigungswurf angerechnet.",
          "Sollten durch eine Schub -Fähigkeit zusätzliche Felder vom Angriff betroffen sein, welche nicht in Schritt 1 angesagt worden sind, würfeln die jetzt betroffenen Figuren ihre Verteidigungswürfel und können ihre „vor“ und „nach dem Würfeln“ Fähigkeiten in diesem Schritt nutzen.",
          "Ein angreifender Held kann maximal ein nicht eingesetztes Schub einsetzten, um 1 Erschöpfung pro Angriff zurückzugewinnen. Das zurückgewonnene Erschöpfung kann für entsprechende Fähigkeiten in diesem Angriff eingesetzt werden. 5. Schaden zufügen",
          "Jedes Verteidigung wehrt einen Herz des Angriffs ab.",
          "„Zugefügter Schaden“ entspricht dem Angriffsergebnis minus dem Verteidigungsergebnis. Wenn kein Schaden zugefügt wurde, bedeutet es nicht, dass der Angriff fehlgeschlagen ist.",
          "Wenn mehreren Figuren Schaden zugefügt wurde, darf der aktive Spieler entscheiden, in welcher Reihenfolge der Schaden zugeteilt wird.",
          "„Erlittener Schaden“ wird festgelegt, nachdem der Schaden zugefügt wurde. Es legt die Anzahl an Herz fest, die eine Figur neben sich oder auf ihrer Karte ablegen muss. Oft ist dies gleich mit dem “zugefügten Schaden”, jedoch kann der „erlittene Schaden“ durch bestimmte Fähigkeiten (z.B. Jaine Fairwoods Heldenfähigkeit) modifiziert werden.",
          "Nur die in diesem Schritt erlittenen oder zugefügten Herz zählen als im Angriff erlittene oder zugefügte Herz.",
          "Nachdem der Schaden allen vom Angriff betroffenen Figuren zugefügt wurde und diese gegebenenfalls besiegt wurden, ist der Angriff abgehandelt. Fähigkeiten, die benutzt werden können, bevor eine Figur oder ein Token besiegt wird, werden in diesem Schritt des Kampfes ausgelöst."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Ziel wählen",
          "Die App liefert normalerweise Prioritäten für die Wahl des Ziels für Monsterangriffe (z.B. der Held mit dem höchsten Willenskraft -Wert oder den meisten erlittenen Herz ). Wenn es bei der Wahl des Ziels zu einem Gleichstand kommt, wird das nächste Ziel ausgewählt. Wenn dabei immer noch Gleichstand herrscht, können die Spieler entscheiden. Energie einsetzen",
          "Priorität mit der Monster Schub einzusetzen wird im Infopanel angezeigt. Wenn das Monster weitere Schub hat, die es einsetzen kann, wechselt es zum Beginn der Liste der Schub -Fähigkeiten.",
          "Nur wenn eine Schub -Fähigkeit sowohl erforderlich, als auch effektiv ist, nutzt das Monster diese Fähigkeit.",
          "Die Figur versucht immer Schub einzusetzen, um zu verhindern, dass ein Angriff fehlschlägt oder um einen Helden zu besiegen, wenn möglich.",
          "Die Figur gibt kein Schub aus, wenn die Schub -Fähigkeit keinen Auswirkungen hat.",
          "Wenn eine Figur kein Infopanel für die Schub -Reihenfolge besitzt und gezwungen wird, einen Angriff durchzuführen, versucht es unter Beachtung der anderen Anweisungen dieses Abschnittes, den höchstmöglichen Schaden zuzufügen. Schaden zufügen",
          "Für Angriffe, die mehrere Monster betreffen, werden folgende Schritte durchgeführt: –– Wähle eines der als Ziel gewählten Monster aus und füge ihm Herz wie üblich zu. Bei Angriffen, die nicht auf Monster zielen (z.B. Eine Bresche schlagen) wird ein betroffenes Monster gewählt. –– Füge die Hälfte der Herz des Angriffswurfes (aufgerundet) allen betroffenen Figuren (gegnerischen und befreundeten) zu, ziehe dann das Verteidigungsergebnis ab und beende den Schritt.",
          "Diese Regel gilt für alle Angriffe die mehrere Monster betreffen (Explosion, Wirbelwind, Armee des Todes, Leoric und Witwe Tarhas Heldentat, etc). feindliche Figuren. Diese Objekte können nicht von Figuren, die als Held behandelt werden, angegriffen werden, es sei denn, es ist im Text erwähnt.",
          "Wenn ein Objekt als Ziel ausgewählt wird oder von einem Angriff betroffen ist, dann wird es bis zum Ende des Angriffs in Schritt 5 (Schaden zuweisen) als feindliche Figur behandelt (siehe \"Schritte im Kampf\" auf Seite 6).",
          "Während das Objekt wie eine feindliche Figur behandelt wird, kann es durch jeden Spieleffekt als Ziel gewählt werden oder betroffen sein, als wäre es eine feindliche Figur. Dies beinhaltet Heldenfähigkeiten, Schub -Fähigkeiten, Overlordkarten, usw.",
          "Zustände, die das Objekt während des Angriffs erhält, werden nicht automatisch abgelegt, wenn der Angriff beendet wird. Verwandte Themen: Akte, Betroffen, Energie, Fehlschlag, Felder zählen, Grosse Figuren, Reichweite, Schaden, Sichten, Weitreichend und Ausgedehnt, Würfel, Ziel, Zustände"
        ]
      }
    ],
    "related": [],
    "page": 6
  },
  {
    "id": "anvisiert-marker",
    "term": "Anvisiert-Marker",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Klasse des Kopfgeldjägers hat mehrere Fertigkeiten, die den Anvisiert-Marker verwenden. Es gibt nur einen Anvisiert-Marker.",
          "Jedes Mal, wenn der Kopfgeldjäger ein Monster anvisiert, nimmt er den Anvisiert-Marker und legt ihn auf die anvisierte Figur.",
          "Jedes Mal, wenn ein anvisiertes Monster besiegt wird, legt der Spieler des Kopfgeldjägers den Anvisiert-Marker wieder vor sich hin.",
          "Der Anvisiert-Marker bleibt auf dem anvisierten Monster, selbst wenn der Kopfgeldjäger besiegt wird"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Besiegt",
      "Klassenmarker"
    ],
    "page": 7
  },
  {
    "id": "archetypen",
    "term": "Archetypen",
    "groups": [
      {
        "label": null,
        "points": [
          "Auf jedem Heldenbogen ist ein Archetypsymbol aufgedruckt. Der Archetyp eines Helden bestimmt, welche Klassen er wählen kann. Krieger Kundschafter Magier Heiler"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Helden",
      "Klassen"
    ],
    "page": 7
  },
  {
    "id": "attribute",
    "term": "Attribute",
    "groups": [
      {
        "label": null,
        "points": [
          "Attribute sind Eigenschaften von Figuren oder Markern, die auf den Heldenbögen, Hauptmannkarten und der Abenteuerbeschreibung angegeben sind.",
          "Es gibt vier Attribute: Stärke (Stärke ), Wissen (Wissen ), Willenskraft (Willenskraft ) und Geistesgegenwart (Gespür ).",
          "Für Figuren und Marker ohne Attributswert, ist der Wert undefiniert, er ist nicht Null."
        ]
      },
      {
        "label": "Attributsproben",
        "points": [
          "Bei einer Attributsprobe wirft der Spieler einen grauen und einen schwarzen Verteidigungswürfel. Damit die Probe gelingt, darf der Spieler höchstens so viele Verteidigung würfeln, wie sein Attributwert angibt.",
          "Wenn eine Figur ohne Attributswert eine Attributsprobe ablegen muss, mißlingt diese automatisch."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein Monster ein Ziel basierend auf einem Attributswert auswählt, das Ziel (z.B. ein Vertrauter oder ein Marker) dieses Attribut aber nicht besitzt, wird es vorübergehend behandelt, als hätte es einen Attributswert von 0. Verwandte Themen: Hauptmänner, Heldenspielzug, Würfel"
        ]
      }
    ],
    "related": [],
    "page": 7
  },
  {
    "id": "aufgabenmarker",
    "term": "Aufgabenmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Aufgabenmarker kennzeichnen spezielle Aufgaben oder Objekte, die im Abenteuertext beschrieben sind.",
          "Sofern nicht anders beschrieben, gelten folgende Regeln: –– Eine Figur kann einen Aufgabenmarker als Aktion von demselben oder einem Nachbarfeld aus aufnehmen. („von demselben Feld” wurde in der deutschen Übersetzung vergessen). –– In jedem Abenteuer sollte angegeben sein, ob eine Figur mehr als einen Aufgabenmarker gleichzeitig tragen kann. Wenn nichts angegeben ist, gibt es normalerweise keine Begrenzung. –– Figuren können keinen Aufgabenmarker aufnehmen, der von einer anderen Figur getragen wird. Aufgabenmarker können nicht getauscht werden. –– Figuren können einen Aufgabenmarker als Aktion auf einem Nachbarfeld ablegen. –– Wenn eine Figur, die einen Aufgabenmarker trägt, besiegt wird, wird der Aufgabenmarker auf das Feld gelegt, auf dem die Figur zuletzt stand.",
          "Die Anzahl der Aufgabenmarker ist begrenzt. Wenn die Beschreibung eines Abenteuers den Helden vorgibt, Aufgabenmarker bis zur Begrenzung einzusetzen oder „alle Aufgabenmarker“, bezieht sich dies auf die Anzahl der Aufgabenmarker aus dem Grundspiel plus der Anzahl aus der Erweiterung, die dieses Abenteuer enthält. Tabelle der Aufgabenmarker pro Erweiterung: Erweiterung Blau Grün Rot Weiß Grundspiel 4 1 4 1 Labyrinth des Verderbens 1 3 0 3 Schatten von Nerekhall 0 3 0 3 Schloss Rabenfels 0 0 0 1 Rostende Ketten 0 1 0 0"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Akte",
      "Besiegt",
      "Weitergeben"
    ],
    "page": 7
  },
  {
    "id": "aufhelfen",
    "term": "Aufhelfen",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Held kann als Aktion einem niedergestreckten Helden aufhelfen, dessen Heldenmarker auf einem Nachbarfeld liegt. Eine Aufhelfen-Aktion kann nicht durchgeführt werden, wenn der Held sich auf demselben Feld wie der Heldenmarker befindet.",
          "Wenn einem Helden aufgeholfen wird, führt sein Spieler die folgenden Schritte in dieser Reihenfolge aus: 1. Zwei rote Machtwürfel werfen und Lebenskraft entsprechend der gewürfelten Herz und Erschöpfung entsprechend der gewürfelten Schub zurückgewinnen. 2. Ersetze den Heldenmarker mit der entsprechenden Figur. Wenn eine andere Figur auf dem Feld mit seinem Heldenmarker steht, darf der Heldenspieler seine Figur auf das nächste Feld seiner Wahl stellen. Der Spieler darf ein Feld auf der anderen Seite einer Höhenlinie wählen.",
          "Bei Effekten, die in Schritt 1 ausgelöst werden (z.B. \"wenn ein Held Herz zurückgewinnt\"), werden die Felder zu dem Heldenmarker gezählt (und nicht zu dem Feld, auf das die Heldenfigur in Schritt 2 gestellt wird).",
          "Helden, die Herz durch etwas anderes als durch eine AufhelfenAktion zurückgewinnen (Heiltrank, Gebet der Heilung, usw.) gelten nicht als aufgeholfen.",
          "Monster können keine Aufhelfen-Aktion durchführen (z.B. bei einem niedergestreckten Hauptmann)"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Akte",
      "Befleckt",
      "Erschöpfung",
      "Höhenunterschied",
      "Schaden"
    ],
    "page": 8
  },
  {
    "id": "aufrappeln",
    "term": "Aufrappeln",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein niedergestreckter Held kann in seinem Zug nur eine Aktion ausführen, und zwar Aufrappeln. Zudem darf diese Aktion nur von niedergestreckten Helden ausgeführt werden.",
          "Wenn sich ein Held aufrappelt, wirft er zwei rote Machtwürfel und gewinnt so viel Lebenskraft zurück, wie er Herz gewürfelt hat, und so viel Erschöpfung, wie er Schub gewürfelt hat. Dann tauscht er seinen Heldenmarker auf dem Spielplan wieder gegen seine Figur aus und dreht seine Aktivierungskarte auf die Rückseite. Sein Zug endet sofort.\" Er darf auch keine nicht-Aktionen ausführen.",
          "Wenn auf dem Feld mit dem Heldenmarker eine andere Figur steht, darf der Heldenspieler seine Figur auf das nächste leere Feld seiner Wahl stellen. Der Spieler darf ein Feld auf der anderen Seite einer Höhenlinie wählen.",
          "Ein niedergestreckter Held (dargestellt durch seinen Heldenmarker) gilt als auf dem Spielplan, sobald er eine AufrappelnAktion durchführt. Für Fähigkeiten oder Effekte, die ausgelöst werden, wenn eine Figur Herz oder Erschöpfung zurückgewinnt, werden die Felder zu dem Heldenmarker gezählt, bevor die dazugehörige Figur auf den Spielplan gestellt wird.",
          "Zwischen zwei Szenen eines Abenteuers kann sich ein niedergestreckter Held kostenlos aufrappeln und erhält zusätzlich seine gesamte Ausdauer zurück"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Akte",
      "Aufhelfen",
      "Besiegt"
    ],
    "page": 8
  },
  {
    "id": "ausdauer",
    "term": "Ausdauer",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Charakteristika\" auf Seite 12."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 8
  },
  {
    "id": "ausgang",
    "term": "Ausgang",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Eingang und Ausgang\" auf Seite 13."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 8
  },
  {
    "id": "ausgedehnt",
    "term": "Ausgedehnt",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Weitreichend und Ausgedehnt\" auf Seite 43."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 8
  },
  {
    "id": "ausloeser",
    "term": "Auslöser",
    "groups": [
      {
        "label": null,
        "points": [
          "Auslöser oder Auslösebedingungen geben die Voraussetzungen für eine Fähigkeit an, bei denen sie aktiviert oder benutzt werden kann.",
          "Wenn eine Fähigkeit keinen expliziten Auslöser hat, dann heißt das, dass die Auslösebedingung immer „während deines Spielzuges“ lautet.",
          "Beispiele für Auslöser sind: –– Ein Schritt im Spielzug eines aktiven Spielers, z.B. „zu Beginn deines Spielzugs“. –– Das Auflösen einer anderen Fähigkeit oder Aktion. –– Erlittener Schaden oder Ausdauer. –– Mit einem Zustand belegt sein oder einen anderen Status in Verbindung mit einem Objekt.",
          "Einige Effekte, die andere Effekte auslösen, würden zu einer Endlosschleife führen. In solchen Situationen werden beide Effekte nur einmal durch den anderen Effekt ausgelöst, z.B. kann eine Abenteuerregel, die besagt erleide 1 Herz für 1 (oder mehr) erlittene Erschöpfung, Worte der Qual nur einmal auslösen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Fähigkeiten"
    ],
    "page": 8
  },
  {
    "id": "ausruhen",
    "term": "Ausruhen",
    "groups": [
      {
        "label": null,
        "points": [
          "Während eines Abenteuers kann ein Held sich als Aktion ausruhen.",
          "Am Ende seines Zuges (Schritt 4 des Heldenspielzuges), in welchem der Held sich ausgeruht hat, werden alle Erschöpfung von seinem Heldenbogen entfernt (siehe \"Heldenspielzug\" auf Seite 36). Helden erhalten keine Herz zurück, wenn sie sich ausruhen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Akte",
      "Ausdauer",
      "Erschöpfung"
    ],
    "page": 8
  },
  {
    "id": "ausruestung",
    "term": "Ausrüstung",
    "groups": [
      {
        "label": null,
        "points": [
          "Ausrüstung umfasst die Gegenstände unter den Klassenkarten, Marktkarten, Relikte und Suchkarten.",
          "Ausrüstungskarten können nur benutzt werden, wenn sie ausgerüstet sind; Ausnahme: Suchkarten.",
          "Mit den folgenden Ausrüstungssymbolen sind einige Beschränkungen verbunden: Hände Rüstung Andere –– Jeder Held hat zwei Hände. Die Gegenstände, mit denen er ausgerüstet ist, dürfen also in Summe nicht mehr als zwei Handsymbole zeigen. –– Jeder Held kann mit 1 Rüstung ausgerüstet sein. –– Jeder Held kann mit bis zu 2 sonstigen Gegenständen ausgerüstet sein.",
          "Karten, die keines dieser Symbole zeigen, können uneingeschränkt in die Ausrüstung aufgenommen werden. Jedoch gelten Beschränkungen basierend auf Gegenstandsmerkmalen weiterhin (siehe \"Marktkarten\" auf Seite 26)",
          "Helden können Gegenstände nur in Schritt 2 des Heldenzuges (Gegenstände ausrüsten) anlegen oder ablegen (siehe \"Heldenspielzug\" auf Seite 36)"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Marktkarten",
      "Marktkarten und Einkaufen",
      "Merkmale",
      "Runden",
      "Suchkarten"
    ],
    "page": 8
  },
  {
    "id": "bedrohung",
    "term": "Bedrohung",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Handlungskarten\" auf Seite 21."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 9
  },
  {
    "id": "befleckt",
    "term": "Befleckt",
    "groups": [
      {
        "label": null,
        "points": [
          "Befleckt-Karten sind neue Karten aus den Erweiterungen Nebel von Bilehall und Rostende Ketten.",
          "Zu Beginn jedes Abenteuers mischt der Overlord die BeflecktKarten und teilt jedem Helden 1 Karte zu, indem er sie verdeckt neben den Heldenbogen jedes Helden legt. Kein Spieler sollte wissen, welche Karte welchem Helden zugeteilt worden ist.",
          "Solange ein Held eine Befleckt-Karte in seinem Spielbereich hat, steigt seine Lebenskraft um 2 Punkte.",
          "Sobald ein Held mit einer verdeckten Befleckt-Karte besiegt worden ist, dreht er diese Karte um. Diese Karte betrifft diesen Helden jetzt bis zum Ende des Abenteuers oder bis sie durch einen Spieleffekt wieder auf ihre verdeckte Seite umgedreht wird.",
          "Alle Befleckt-Karten enthalten den allgemeinen Effekt: „Du bist befleckt. Solange du niedergestreckt bist, kannst du nur durch unbefleckte Helden oder Heldentaten Herz zurückgewinnen“. Dies verhindert: –– Dass ein befleckter Held sich aufrappelt. –– Dass ein befleckter Held einem anderen befleckten Helden aufhilft. –– Dass ein befleckter Held irgendeine Fähigkeit benutzt, die einem niedergestreckten, befleckten Helden Herz zurückgibt"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Aufhelfen",
      "Besiegt"
    ],
    "page": 9
  },
  {
    "id": "benachbart",
    "term": "Benachbart",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Feld ist zu einem anderen Feld benachbart, wenn sie eine Kante oder eine Ecke teilen. Zwei Felder, die einen Spielplanrand (schwarz), eine geschlossene Tür, eine Mauer oder eine alte Mauer teilen, gelten als nicht benachbart.",
          "Ein Feld ist nicht mit sich selbst benachbart. Eine große Figur ist nicht mit sich selbst benachbart. Avric ist zu den rot markierten Feldern benachbart. Angrenzende Felder, die durch eine Mauer (1 ) oder einer Tür (2 ) getrennt sind, sind nicht benachbart. Felder die durch eine Höhenlinie getrennt sind, zählen als benachbart (3 ).",
          "Benachbarte Felder haben eine Entfernung von genau 1.",
          "Ein Feld mit einem Hindernis ist nicht mit Feldern benachbart, mit denen es eine Kante oder Ecke teilt.",
          "Zwei Figuren die in benachbarten Feldern stehen, sind benachbarte Figuren"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Reichweite",
      "Sichten"
    ],
    "page": 9
  },
  {
    "id": "besiegt",
    "term": "Besiegt",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn eine Figur mindestens so viel Herz erlitten hat, wie ihre Lebenskraft angibt, ist sie besiegt. In diesem Zusammenhang haben Herz erleiden und das Reduzieren der Lebenskraft einer Figur den gleichen Effekt.",
          "Wenn ein Monster besiegt wird, wird es vom Spielplan genommen.",
          "Wenn ein Held besiegt wird, wird er niedergestreckt."
        ]
      },
      {
        "label": "Einen Held niederstrecken",
        "points": [
          "Die folgenden Schritte geben die Reihenfolge beim Niederstrecken an: 1. Der Held hat genauso viele Schadensmarker auf seinem Heldenbogen wie seine aktuelle Lebenskraft beträgt. 2. Der Held ist als direkte Konsequenz von Schritt 1 oder durch einen direkten Effekt besiegt. 3. Der Held ist besiegt: –– Er erleidet Herz und Erschöpfung in Höhe seiner Lebenskraft und Ausdauer. –– Seine Heldenfigur wird durch den Heldenmarker ersetzt. Wenn ein Held in einer Geheimkammer niedergestreckt wird, wird sein Heldenmarker auf das Feld mit dem Geheimgangsmarker gelegt. Das Feld mit dem Heldenmarker gilt als leer. –– Er wirft alle Zustandskarten ab. –– Sein Zug endet sofort. –– Der Overlord kann eine Overlordkarte ziehen oder bekommt einen Drohmarker, wenn er mit einem Handlungsdeck spielt.",
          "Jeder Schritt enthält einzelne Auslösebedingungen für bestimmte Spieleffekte (wie z.B. Death Siphon, Unbeugsam, usw.).",
          "Bei niedergestreckten Helden kann der Overlord nur einmal pro Held und pro Abenteuer Drohmarker erhalten. Er bekommt keine Overlordkarten oder Drohmarker, wenn eine Figur, die als Held behandelt wird, besiegt wird.",
          "Wenn ein niedergestreckter Held mindestens 1 Herz heilt, ersetzt er sofort seinen Marker mit seiner Figur und kann in seinem nächsten Zug ganz normal seine Aktionen durchführen.",
          "Andere Figuren können von passiven Fähigkeiten niedergestrecker Helden profitieren. Diese Fähigkeiten dürfen vom niedergestreckten Helden nicht erfordern, dass er „diese Karte benutzt“, „diese Karte erschöpft“, Erschöpfung bezahlt, und sie dürfen nicht vorraussetzen, dass sich der Held auf dem Spielplan befindet."
        ]
      },
      {
        "label": "Was ein niedergestreckter Held nicht darf",
        "points": [
          "Er kann keine Fähigkeiten benutzen oder von passiven Fähigkeiten profitieren, es sei denn, es ist ausdrücklich erlaubt.",
          "Er kann nicht mit anderen Helden tauschen.",
          "Er kann keine Zustandskarten bekommen; er ist immun gegenüber allen Angriffen.",
          "Er kann weder Erschöpfung über seine Ausdauer hinaus, noch Herz über seine Lebenskraft hinaus erleiden.",
          "Er kann keine Erschöpfung wiedererlangen, es sei denn er erlangt gleichzeitig Herz wieder.",
          "Er kann keine Elixirmarker abwerfen.",
          "Er kann nicht das Ziel von Fähigkeiten sein (es sei denn Heilungsfähigkeiten; siehe unten), da er sich nicht auf dem Spielplan befindet und Felder nicht bis zu ihm gezählt werden können."
        ]
      },
      {
        "label": "Was ein niedergestreckter Held darf",
        "points": [
          "Er kann eine Aufrappeln-Aktion in seinem nächsten Zug durchführen, allerdings ist er dazu nicht gezwungen.",
          "Er kann eine kostenlose Aufrappeln-Aktion durchführen, nachdem eine Szene beendet wurde und alle Erschöpfung wiedererlangen.",
          "Er kann Gegenstände ausrüsten.",
          "Er kann seinen Vertrauten aktivieren (nicht in dem Zug in dem er besiegt wurde oder nachdem er eine Aufrappeln-Aktion durchgeführt hat).",
          "Er kann als Ziel von Fähigkeiten und Effekten gewählt werden, deren primärer Effekt das Heilen ist (z.B. Gebet der Heilung). Beachtet, dass Heilende Erleuchtung des Propheten keinen niedergestreckten Helden zum Ziel haben kann, da dessen primärer Effekt darin besteht, einen Erleuchtungsmarker zu bekommen und das Heilen ein Resultat dessen ist. Wenn ein Held von einem Effekt betroffen ist, dessen primäre Konsequenz das Zurückgewinnen von ist, führt sein Spieler die folgenden Schritte in Reihenfolge aus: Herz zurückgewinnen (und Erschöpfung, abhängig vom Effekt). 1. 2. Ersetzen des Heldenmarkers mit der entsprechenden Figur.",
          "Bei Effekten, die in Schritt 1 ausgelöst werden (z.B. \"wenn ein Held Herz zurückgewinnt\"), werden die Felder zu dem Heldenmarker gezählt (und nicht zu dem Feld, auf das die Heldenfigur in Schritt 2 gestellt wird)."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein Held niedergestreckt wird, müssen die Spieler die App informieren, indem sie sein Heldenportrait auswählen und den „KO“ Knopf drücken.",
          "Ein niedergestreckter Held senkt die Moral um 1. Verwandte Themen: Aufrappeln, Befleckt, Lebenskraft, Moral, Schaden"
        ]
      }
    ],
    "related": [],
    "page": 9
  },
  {
    "id": "betaeubt",
    "term": "Betäubt",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 10
  },
  {
    "id": "betreten-eines-feldes",
    "term": "Betreten eines Feldes",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Bewegung\" auf Seite 10."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 10
  },
  {
    "id": "betroffen",
    "term": "Betroffen",
    "groups": [
      {
        "label": null,
        "points": [
          "Eine Figur, die Ziel eines Angriffes ist, gilt als betroffen vom Angriff. Zusätzlich können bestimmte Fähigkeiten Figuren betreffen, die nicht Ziel eines Angriffs sind (z.B. bei Explosion).",
          "Figuren gelten ab Schritt 1 („Wähle Waffe und Ziel“) als Ziel eines Angriffs, bis der Angriff abgeschlossen wurde, unabhängig davon ob der Angriff in späteren Schritten fehlschlägt. Weitere Figuren, die durch Energiefähigkeiten vom Angriff betroffen sind, gelten ab Schritt 4 („Energie ausgeben“) als betroffen, bis der Angriff abgeschlossen wurde. Siehe \"Schritte im Kampf \" auf Seite 6.",
          "Betroffene Figuren sind nicht automatisch Ziel des Angriffs.",
          "Figuren, die durch einen Angriff betroffen wurden, erhalten den Schaden und sämtliche Effekte im Zusammenhang mit diesem Angriff.",
          "Betroffene Figuren können ihre Verteidigungswürfel nutzen, um Schaden zu verringern und andere Effekte zu vermeiden.",
          "In der Regel kann keine Figur mehr als einmal von einem einzelnen Angriff betroffen sein.",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Schritte im Kampf",
      "Ziel"
    ],
    "page": 10
  },
  {
    "id": "bewegung",
    "term": "Bewegung",
    "groups": [
      {
        "label": null,
        "points": [
          "Jedes Mal, wenn eine Figur oder ein anderes Objekt seine Position von einem Feld zu einem anderen Feld auf der Karte verändert, so gilt dies als Bewegung.",
          "Eine Figur darf sich durch verbündete Figuren hindurch bewegen, aber nicht durch andere besetzte Felder (solche mit einer feindlichen Figur oder einem Hindernis). Eine Figur darf ihre Bewegung nicht auf einem besetzten Feld beenden.",
          "Üblicherweise trifft der aktive Spieler alle Entscheidungen hinsichtlich der Bewegung. Wird eine Figur jedoch durch eine Fähigkeit bewegt, trifft der Spieler, der diese Fähigkeit benutzt, alle Entscheidungen hinsichtlich der Bewegung.",
          "Wenn eine Figur während des Spielzuges eines anderen Spielers bewegt wird oder Bewegungspunkte erhält (als Effekt einer Unterbrechungsfähigkeit), kann sich die Figur bewegen, bevor der aktive Spieler mit seinem Zug fortfährt oder überhaupt nicht.",
          "Es gibt verschiedene Arten von Bewegung, die mit spezifischen Schlüsselwörtern auf dem Spielmaterial verknüpft sind. Jede Art von Bewegung folgt ihren eigenen Regeln. (siehe \"Arten der Bewegung\" auf Seite 11).",
          "Die Bewegung von großen Monstern folgt zusätzlichen Regeln und Beschränkungen (siehe \"Grosse Figuren\" auf Seite 20).",
          "Visuelle Beispiele für die Bewegung sind unter \"3.3. Bewegungsbeispiele\" auf Seite 90 gezeigt."
        ]
      },
      {
        "label": "Ein Feld betreten und verlassen",
        "points": [
          "Wenn eine Figur ihre Position von einem Feld der Karte auf ein anderes Feld auf der Karte wechselt, so wird dies als Verlassen ihres aktuellen Feldes und als Betreten eines anderen Feldes betrachtet.",
          "Wenn ein Figur von außerhalb des Spielplans auf ein Feld platziert wird, so wird dies nicht als Betreten eines Feldes betrachtet. Dies schließt das Aufhelfen eines Helden oder Aufrappeln, Monster Verstärkungen, Vertraute beschwören usw. mit ein.",
          "Wenn ein großes Monster sich nach der Bewegung wieder \"ausdehnt\", betritt es die Felder, in die es sich \"ausdehnt\", nicht."
        ]
      },
      {
        "label": "Sich in ein Feld und aus einem Feld bewegen",
        "points": [
          "Wenn eine Figur seine Position aufgrund eines Effektes ändert, der das Schlüsselwort „bewegen“ enthält, bewegt sie sich aus dem aktuellen Feld und bewegt sich in ein anderes Feld. Eine Figur die „platziert“ wird, bewegt sich nicht in ein Feld.",
          "Wenn ein großes Monster sich nach der Bewegung wieder \"ausdehnt\", bewegt es sich nicht in die Felder, in die es sich \"ausdehnt\"."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 10
  },
  {
    "id": "arten-der-bewegung",
    "term": "Arten der Bewegung",
    "groups": [
      {
        "label": "Bewegungsaktion",
        "points": [
          "Wenn eine Figur eine Bewegungsaktion ausführt, erhält sie Bewegungspunkte entsprechend ihrer Geschwindigkeit.",
          "Eine Bewegungsaktion kann auf einem leeren Feld unterbrochen werden, um eine andere Aktion auszuführen. Die Bewegungsaktion kann nach der Unterbechungsaktion fortgesetzt werden. Andere Aktionen können nicht freiwillig unterbrochen werden.",
          "Eine Bewegungsaktion kann durch eine andere Aktion oder eine Bewegungsaktion unterbrochen werden, selbst bevor der erste Bewegungspunkt der ersten Bewegungsaktion ausgegeben wurde.",
          "Phasen einer Bewegungsaktion (bislang noch nicht offiziell bestätigt): –– Eine Bewegungsaktion beginnt, wenn der Spieler eine Bewegungsaktion erklärt und Bewegungspunkte bekommt. –– Eine Bewegungsaktion wird unterbrochen während ein anderer Spieleffekt abgehandelt wird oder eine Figur Bewegungspunkte aus einer anderen Quelle ausgibt. –– Eine Bewegungsaktion wird fortgesetzt sobald ein Bewegungspunkt aus seiner Bewegungsaktion nach einer Unterbrechung ausgegeben wird. –– Eine Bewegungsaktion endet, wenn a) Ein Effekt eintritt, der eine Bewegungsaktion unterbricht, aber keine Bewegungspunkte mehr übrig sind. b) Ein Spieleffekt explizit die Bewegungsaktion beendet. c) Der Zug des aktiven Spielers endet.",
          "Wenn ein Effekt eine Bewegungsaktion beendet (z.B. eine Overlordkarte), sind alle Bewegungspunkte im Bewegungspunktevorrat sofort verloren."
        ]
      },
      {
        "label": "Bewegungspunkte",
        "points": [
          "Figuren erhalten Bewegungspunkte durch Spieleffekte wie z.B. durch Bewegungsaktionen, Erleiden von Erschöpfung, Fertigkeiten. Die Summe der aktuellen Bewegungspunkte einer Figur stellt ihren Bewegungspunktevorrat dar.",
          "Helden können Bewegungspunkte in Schritt 3.II (Helden Aktionen durchführen) ihres Zuges ausgeben. Monster können Bewegungspunkte in Schritt 2.II (Die Monster einer Gruppe",
          "aktivieren) ihrer Aktivierung ausgeben. Siehe \"Heldenspielzug\" auf Seite 36.",
          "Wenn eine Figur bewegt wird oder Bewegungspunkte während des Zuges eines anderen Spielers bekommt (als Effekt einer Unterbrechungsfähigkeit), kann die Figur bewegt werden, bevor der aktive Spieler seinen Zug fortsetzt oder überhaupt nicht.",
          "Die Bewegung auf ein Nachbarfeld kostet 1 Bewegungspunkt, der danach aus dem Bewegungspunktevorrat abgezogen wird. Terraineffekte können diese Kosten erhöhen."
        ]
      },
      {
        "label": "Bewegung durch Erschöpfung",
        "points": [
          "Während seines Zuges (Schritt 3.II) kann ein Held Erschöpfung erleiden, um zusätzliche Bewegungspunkte zu erhalten. Für jeden Erschöpfung, den ein Held so erleidet, erhält er einen Bewegungspunkt. Er kann das entweder als Unterbrechung während einer Bewegungsaktion oder vor oder nach einer Aktion tun.",
          "Es gibt außer der Ausdauer des Helden, keine Beschränkung, wie viel Erschöpfung er erleidet, um zusätzliche Bewegungspunkte zu erhalten."
        ]
      },
      {
        "label": "„Bewege dich gemäß deiner Geschwindigkeit“ und",
        "points": []
      },
      {
        "label": "„Bewege dich X Felder weit“",
        "points": [
          "Die Figur darf sich eine Anzahl an Feldern bewegen, die gleich ihrer Geschwindigkeit oder gleich X ist. Die neue Position wird durch Abzählen der Felder bestimmt; es werden keine Bewegungspunkte erhalten oder ausgegeben.",
          "Diese Art der Bewegung gilt nicht als Bewegungsaktion. Sie kann nicht freiwillig unterbrochen werden.",
          "Da keine Bewegungspunkte beteiligt sind, hat Terrain, welches die Kosten an Bewegungspunkten erhöht, keinen Effekt. Andere Regeln, die sich nicht explizit auf Bewegungspunkte beziehen, treffen jedoch zu."
        ]
      },
      {
        "label": "„Entfernen und Platzieren“ und „Platzieren“",
        "points": [
          "Die Figur wird von ihrer aktuellen Position auf dem Spielplan entfernt und auf ein anderes Feld platziert. Geeignete Zielfelder werden durch den Effekt selbst definiert (z.B. „innerhalb von 3 Feldern“ oder „im nächsten Feld benachbart zum Monster“). Die neue Position wird durch Abzählen der Felder bestimmt; es werden keine Bewegungspunkte erhalten oder ausgegeben.",
          "Diese Art der Bewegung gilt nicht als Bewegungsaktion. Die Figur bewegt sich nicht in ein Feld oder aus einem Feld heraus und betritt lediglich das Zielfeld. Die Bewegung kann nicht unterbrochen werden.",
          "Da keine Bewegungspunkte beteiligt sind, hat Terrain, welches die Kosten an Bewegungspunkten erhöht, keinen Effekt. Andere Regeln, die sicht nicht explizit auf Bewegungspunkte beziehen, treffen jedoch zu.",
          "Wenn der Bewegungspunktevorrat Bewegungspunkte von unterschiedlichen Quellen beinhaltet, muss der Spieler die Quelle angeben, wenn er Bewegungspunkte ausgibt.",
          "Am Ende der Aktivierung einer Figur verfallen die übriggebliebenen Bewegungspunkte"
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn die Anweisungen der App für eine Bewegung abgehandelt werden, treffen folgende Regeln zu: –– Eine Figur nimmt immer den Weg zum Zielfeld, der am wenigsten Bewegungspunkte kostet. –– Wenn eine große Figur ihre Bewegung beendet, „dehnt“ sie sich entsprechend der Bewegungsrichtung aus (entweder in Richtung des Ziels oder von ihm weg). –– Monster vermeiden immer Gruben und bewegen sich nicht durch gefährliches Gelände oder Lava, wenn sie dadurch Schaden erleiden würden. –– Monster bewegen sich nur dann durch Wasser oder schlammiges Gelände, wenn sie dadurch weniger Bewegungspunkte benötigen, und Monster vermeiden es wenn möglich immer, ihre Bewegung in einem schlammigen Gelände zu beenden. Wenn Helden gezwungen werden, sich so zu bewegen, gibt es keine solchen Beschränkungen."
        ]
      }
    ],
    "related": [
      "Akte",
      "Aktivierung",
      "Ausdauer",
      "Erschöpfung",
      "Terrain"
    ],
    "page": 11
  },
  {
    "id": "blockierte-felder",
    "term": "Blockierte Felder",
    "groups": [
      {
        "label": null,
        "points": [
          "Blockierte Felder sind Felder, die entweder die Sichtlinie oder die Bewegung einer Figur blockieren.",
          "Figuren ist es erlaubt durch blockierte Felder zu ziehen, wenn diese von befreundeten Figuren besetzt sind, dürfen ihre Bewegung auf solchen Feldern aber nicht beenden"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Figuren",
      "Hindernis"
    ],
    "page": 12
  },
  {
    "id": "blosse-haende",
    "term": "Blosse Hände",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Held kann einen Angriff mit bloßen Händen in Schritt 1 (Waffe und Ziel deklarieren) eines Angriffs erklären, selbst wenn er über eine oder mehrere Waffen verfügt.",
          "Ein Angriff mit bloßen Händen hat einen blauenKampfwürfel und zählt als Nahkampfangriff. Zusätzliche Herz aus Fähigkeiten (z.B. Gräber, Stahlhorns Heldenfähigkeit) und andere Effekte werden wie gewohnt zu den Angriffsergebnissen hinzuaddiert."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 12
  },
  {
    "id": "blutend",
    "term": "Blutend",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 12
  },
  {
    "id": "brennend",
    "term": "Brennend",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 12
  },
  {
    "id": "charakteristika",
    "term": "Charakteristika",
    "groups": [
      {
        "label": null,
        "points": [
          "Charakteristika beschreiben bestimmte Eigenschaften einer Figur.",
          "Charakteristika sind auf den Heldenbögen, Verbündeten-, Vertrauten- und Monsterkarten aufgeführt oder werden in der Abenteuerbeschreibung erwähnt.",
          "Bestimmte Effekte können den Wert eines Charakteristikums verändern. Effekte, die ein Charakteristikum auf einen bestimmten Wert ändern, werden vor Modifikatoren für dieses Charakteristikum angewendet (z.B. zuerst wird die Geschwindigkeit einer Figur auf X verändert, dann werden +/- Geschwindigkeitsmodifikatoren angewendet."
        ]
      },
      {
        "label": "Geschwindigkeit",
        "points": [
          "Geschwindigkeit (Bewegung ) gibt an, wieviele Bewegungspunkte eine Figur erhält, wenn sie eine Bewegungsaktion ausführt."
        ]
      },
      {
        "label": "Lebenskraft",
        "points": [
          "Lebenskraft (Herz ) gibt die Gesamtzahl an Herz an, die eine Figur erleiden kann, bevor sie besiegt ist.",
          "Keine Figur kann mehr Herz haben, als ihre Lebenskraft angibt.",
          "Verbleibende Lebenskraft ist definiert als die Lebenskraft einer Figur minus der Menge an erlittenem Schaden."
        ]
      },
      {
        "label": "Ausdauer",
        "points": [
          "Ausdauer (Erschöpfung ) gibt das Maximum an Erschöpfung an, die eine Figur erleiden kann.",
          "Eine Figur kann freiwillig nicht mehr Erschöpfung erleiden, als ihr Ausdauerwert angibt.",
          "Wenn irgendein anderer Spieleffekt eine Figur dazu zwingt, mehr Erschöpfung zu erleiden, als der Ausdauerwert angibt, so wird der Überschuss an Erschöpfung in Herz erlitten.",
          "Figuren die keinen Ausdauerwert haben, erleiden Herz anstatt Erschöpfung."
        ]
      },
      {
        "label": "Verteidigung",
        "points": [
          "Der Verteidigungswert (Verteidigung ) zeigt den Basisverteidigungswürfel, den eine Figur während eines Kampfes wirft.",
          "Durch Spieleffekte können weitere Würfel zur Verteidigung hinzukommen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Angriffe",
      "Ausruhen",
      "Bewegung",
      "Schaden"
    ],
    "page": 12
  },
  {
    "id": "dickicht",
    "term": "Dickicht",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Türen und Tür-ähnliche Objekte\" auf Seite 40."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 12
  },
  {
    "id": "diener",
    "term": "Diener",
    "groups": [
      {
        "label": null,
        "points": [
          "Diener sind Monster, die der Overlord durch besondere Beschwörungskarten auf den Spielplan stellen darf.",
          "Zur Zeit sind zwei Diener verfügbar: der Rabenschwarm (Schloss Rabenfels) und Geissel (Rostende Ketten)."
        ]
      },
      {
        "label": "Beschwörungskarten",
        "points": [
          "Beschwörungskarten sind Teil des Klassendecks des Overlords und können ganz normal im Schritt 5 (Erfahrungspunkte ausgeben) einer Kampagnenphase gekauft werden (siehe \"Kampagnenphase\" auf Seite 24).",
          "Anders als andere Overlordkarten werden Beschwörungskarten jedoch nicht in sein Deck gemischt, sondern vor ihm abgelegt.",
          "Beschwörungskarten zählen weder zu den Karten in seinem Deck noch werden sie berücksichtigt, wenn er Karten einer höheren Stufe kaufen will.",
          "Jedes Mal, wenn der Overlord die Beschwörungskarte einsetzt, nimmt er den Dienermarker und platziert ihn wie auf der Dienerkarte angegeben auf den Spielplan. Jedes Mal, wenn die Beschwörungskarte benutzt wird, wird ein neuer Diener platziert (und alle Herz und Zustände werden abgelegt).",
          "Wenn sich der Dienermarker bereits auf dem Spielplan befindet, wird er entfernt und ein neuer Diener wird auf das Zielfeld gestellt. Der vorhergehende Diener wird nicht als besiegt betrachtet. Dies betrifft Overlordkarten wie z.B. Böses Omen, Schmaus.",
          "Der Diener gilt als normales Monster einer eigenen Gruppe. Für ihn gelten außer den Regeln auf seiner Karte alle üblichen Regeln für Monster."
        ]
      },
      {
        "label": "Rabenschwarm",
        "points": [
          "Der Rabenschwarm wird durch die Beschwörungskarte Ruf der Raben beschworen.",
          "Ruf der Raben kann nicht auf einen Rabenschwarm gespielt werden, der bereits auf dem Spielplan ist.",
          "Ruf der Raben kann auf Monster gespielt werden, die immun gegen das Erleiden von Herz sind."
        ]
      },
      {
        "label": "Geissel",
        "points": [
          "Geissel wird durch die Beschwörungskarte Fesselnde Bande beschworen."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 12
  },
  {
    "id": "durchbohren",
    "term": "Durchbohren",
    "groups": [
      {
        "label": null,
        "points": [
          "Durchbohren erlaubt es einer Figur die angegebene Anzahl an Verteidigung des Verteidigers während eines Angriffs zu ignorieren. Beispielsweise erlaubt es „Durchbohren 2“ dem Angreifer bis zu 2 Verteidigung zu ignorieren.",
          "Wenn die Anzahl der Verteidigung weniger ist, als der Durchbohren-Wert, so hat der Überschuss an Durchbohren keinen Effekt.",
          "Wenn mehrere Durchbohren Fähigkeiten während eines Angriffs genutzt werden, werden ihre Werte addiert"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Angriffe"
    ],
    "page": 13
  },
  {
    "id": "ebenen",
    "term": "Ebenen",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Anderswelt besteht aus einer Reihe von verschiedenen Ebenen. Jede Ebene ist ein kleiner, abgeschlossener Satz von Spielplanteilen mit Monstern, Sonderregeln und Siegbedingungen.",
          "Nachdem die Helden ein Portal benutzt haben, um die Ebene zu verlassen, wird die gesamte Karte abgeräumt und alle Helden, Vertraute, Monster, Kartenteile und Marker werden entfernt. Tapferkeits-, Erleuchtungs- und Elixirmarker bleiben auf den Heldenbögen. Suchkarten werden nicht ins Suchkartendeck gemischt.",
          "Wenn es von der App nicht explizit gesagt wird, gewinnen die Helden keine Herz oder Erschöpfung zwischen den Ebenen zurück; Karten werden nicht spielbereit gemacht und umgedrehte Heldenbögen werden nicht automatisch wieder umgedreht.",
          "Nach jeder Ebene gibt es eine Upgrade-Phase; wenn die Helden die dritte Ebene absolviert haben, erfolgt der Übergang in Akt II.",
          "Wenn die Helden sechs dieser Ebenen gemeistert haben, gewinnen sie Die Anderswelt."
        ]
      },
      {
        "label": "Upgrade Phase",
        "points": [
          "Die Helden bekommen EP, welche sie sofort ausgeben oder behalten können.",
          "Die Helden ziehen eine bestimmte Anzahl an Marktkarten und behalten davon die angegeben Anzahl.",
          "Die Anzahl an gezogenen Karten hängt davon ab, wie gut die Helden die vorherigen Ebene bewältigt haben: –– Als Basis erhalten die Helden 7 Karten. –– Die Helden ziehen 1 Karte weniger für jede Runde nach Runde 1, die vergangen ist, bevor die Ebene absolviert wurde. –– Die Helden ziehen 1 Karte zusätzlich, für jeden untersuchten Suchmarker. –– Die Helden behalten 1 Karte zusätzlich, wenn der Monstertracker leer ist, wenn sie die Ebene absolviert haben.",
          "Die Helden können ihre Ausrüstung (außer Startausrüstung) untereinander tauschen.",
          "Das Ausgeben von EP und die Wahl, welche Gegenstände behalten werden, kann in beliebiger Reihenfolge geschehen."
        ]
      },
      {
        "label": "Übergang zu Akt II",
        "points": [
          "Die Helden ersetzen die Akt-I-Marktkarten, die Monsterkarten und Hauptmannkarten durch die entsprechenden Akt-IIKarten.",
          "Die Helden geben ihre Suchkarten zurück und mischen den Stapel der Suchkarten.",
          "Die Helden drehen ihre Heldenbögen auf die Vorderseite.",
          "Die Helden bekommen 1 Moral"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Akte",
      "Ausrüstung",
      "Erfahrungspunkte",
      "Hauptmänner",
      "Marktkarten und Einkaufen",
      "Moral",
      "Portale",
      "Stürmen"
    ],
    "page": 13
  },
  {
    "id": "einfluss",
    "term": "Einfluss",
    "groups": [
      {
        "label": null,
        "points": [
          "Einflusseffekte und Einflussmarker sind spezifisch für die Schatten von Nerekhall Kampagne.",
          "Ein Abenteuer kann bis zu 3 verschiedene Einflusseffekte haben. Die Einflusseffekte sind in der Einflusstabelle des Abenteuers aufgeführt.",
          "Je nachdem, welcher Einflussmarker zu Beginn des Abenteuers gewählt wurde, gilt der Einflusseffekt mit demselben Symbol für dieses Abenteuer."
        ]
      },
      {
        "label": "Einflussmarker",
        "points": [
          "Sofern nichts anderes angegeben ist, muss der Overlord während des Aufbaus einiger Szenen einen Einflusseffekt wählen. Dazu wählt er geheim einen Effekt aus der Einflusstabelle aus und legt den entsprechenden Einflussmarker verdeckt vor sich ab.",
          "Wenn ein Abenteuer nur zwei Einflusseffekte hat, wird der Marker, der keinen dazugehörigen Einflusseffekt aufweist, beiseitegelegt.",
          "Kein Held sollte die Farbe irgendeines Einflussmarkers kennen.",
          "Der Overlord enthüllt den vor sich liegenden Einflussmarker und handelt den Effekt ab, wenn er durch die Abenteuerregeln dazu aufgefordert wird"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Spielvorbereitungen"
    ],
    "page": 13
  },
  {
    "id": "eingang-und-ausgang",
    "term": "Eingang und Ausgang",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Eingang und der Ausgang sind spezielle Kartenteile, die es den Figuren oftmals erlauben, den Spielplan zu betreten oder zu verlassen. Genaue Regeln werden in den Abenteuerbeschreibungen gegeben.",
          "Um den Spielplan zu verlassen, muss eine Figur eines der Randfelder (unten rot markiert) eines Ein- oder Ausgangsteils betreten und dann einen Bewegungspunkt ausgeben oder eine Fähigkeit benutzen, die es der Figur erlaubt, sich 1 Feld zu bewegen (wie „Bewege dich gemäß deiner Geschwindigkeit“ und „Bewege dich X Felder weit“). Randfelder des Eingangs und Ausgangs",
          "Wenn ein Spieler angewiesen wird, eine Figur auf dem Eingang oder Ausgang zu platzieren, dort aber nicht genügend freie Felder verfügbar sind, so wird die Figur auf die nächsten freien Felder gestellt.",
          "Große Monster müssen, wenn möglich, komplett auf das Spielplanteil gestellt werden, welches in der Abenteuerbeschreibung beschrieben ist"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Klassen",
      "Verstärkung"
    ],
    "page": 13
  },
  {
    "id": "elixirmarker",
    "term": "Elixirmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Klasse des Apothecarius hat mehrere Fertigkeiten, die Elixiermarker verwenden.",
          "Elixiermarker sind auf 8 Stück begrenzt.",
          "Jedes Mal, wenn ein Spieler einen Elixiermarker erhält, nimmt er sich einen Marker aus dem Vorrat und legt ihn auf seinen Heldenbogen. Jedes Mal, wenn ein Spieler einen Elixiermarker abwirft, legt er ihn von seinem Heldenbogen zurück in den Vorrat.",
          "Elixiermarker bleiben zwischen Szenen eines Abenteuers auf den Heldenbögen, werden aber am Ende des Abenteuers abgeworfen.",
          "Die Anzahl an Elixiermarkern, die ein Held auf seinem Heldenbogen haben kann, ist nur durch die mitgelieferte Anzahl an Markern begrenzt.",
          "Ein Held kann einen Elixiermarker jederzeit während des eigenen Zuges von seinem Heldenbogen abwerfen, um Lebenskraft zurückzugewinnen. Diese Fähigkeit steht auch auf der Klassenkarte „Elixier brauen“. Wenn ein Held einen Elixiermarker abwirft, wirft er 1 roten Machtwürfel und gewinnt die gewürfelten Herz zurück.",
          "Elixiermarker verbleiben auf dem Heldenbogen wenn ein Held niedergestreckt wird. Ein niedergestreckter Held kann jedoch in seinem Zug keinen Elixiermarker abwerfen.",
          "Helden dürfen Elixiermarker nach den üblichen Regeln weitergeben.",
          "Figuren, die als Helden betrachtet werden (inklusive Verbündeter) können wie Helden Elixiermarker erhalten und abwerfen, um Lebenskraft zurückzugewinnen. Jedoch werfen sie alle Elixiermarker ab, wenn sie besiegt werden, wenn sie erneut beschworen werden und am Ende der Szene"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Gefährten",
      "Klassenmarker",
      "Vertraute",
      "Weitergeben"
    ],
    "page": 14
  },
  {
    "id": "energie",
    "term": "Energie",
    "groups": [
      {
        "label": null,
        "points": [
          "Energie ist das Ergebnis eines Würfelwurfes und wird durch das Schub Symbol dargestellt. Sie wird während eines Angriffs erhalten und kann ausgegeben werden, um bestimmte Fähigkeiten auszulösen.",
          "Jede Fähigkeit, die mindestens 1 Schub kostet, ist eine Schub -Fähigkeit. Schub -Fähigkeiten können während 4. (Energie einsetzen) eines",
          "Angriffs eingesetzt werden; nur Schub -Fähigkeiten, die die Reichweite erhöhen, können in 3. (Reichweite prüfen) eines Angriffs (siehe \"Schritte im Kampf \" auf Seite 6) verwendet werden.",
          "Der aktive Spieler kann Energie in der Reihenfolge ausgeben, wie er will.",
          "Jede Schub -Fähigkeit kann pro Angriff nur einmal ausgelöst werden. Schub -Fähigkeiten, die zwei oder mehr Effekte aufweisen, fügen",
          "dem Angriff alle aufgeführten Effekte hinzu.",
          "Jedes nicht ausgegebene Schub während des Angriffs ist verloren. Jedes gewürfelte Schub bei einem fehlgeschlagenem Angriff ist verloren.",
          "Ein angreifender Held kann maximal 1 nicht eingesetztes Schub einsetzen, um 1 Erschöpfung zurückzugewinnen. Dies kann immer geschehen, egal ob der Held Erschöpfung erlitten hat oder nicht (wird so ein Schub verschwendet). Da Erschöpfung Zurückgewinnen während 4. (Energie einsetzen) geschieht, kann der Held so zurück gewonnene Erschöpfung einsetzen, um weitere Fähigkeiten bei diesem Angriff auszulösen (siehe \"Schritte im Kampf \" auf Seite 6)."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Siehe \"Schritte im Kampf \" auf Seite 6 um zu sehen, wie Monster während eines Angriffs Schub ausgeben. Verwandte Themen: Angriffe, Auslöser, Erschöpfung, Fähigkeiten, Reichweite"
        ]
      }
    ],
    "related": [],
    "page": 14
  },
  {
    "id": "epische-variante",
    "term": "Epische Variante",
    "groups": [
      {
        "label": null,
        "points": [
          "In der epischen Spielvariante können die Spieler mächtigere Fertigkeiten, Gegenstände und Overlordkarten verwenden.",
          "Folgende Varianten sind möglich:"
        ]
      },
      {
        "label": "Einsteiger",
        "points": [
          "–– Es gelten die Grundregeln."
        ]
      },
      {
        "label": "Fortgeschrittene",
        "points": [
          "–– Jeder Held erhält 3 EP für Klassenkarten und 150 Goldstücke. Die Helden können beliebige Akt-I-Marktkarten kaufen und ihr Gold auch zusammenwerfen. –– Die Helden können ihre Startausrüstung für je 25 Gold vor dem Spiel verkaufen. –– Der Overlord kann 4 EP für Overlordkarten ausgeben."
        ]
      },
      {
        "label": "Experten",
        "points": [
          "–– Jeder Held erhält 6 EP für Klassenkarten und 250 Goldstücke. Die Helden können beliebige Marktkarten kaufen (Akt I und II) und ihr Gold auch zusammenwerfen. –– Die Helden können ihre Startausrüstung für je 25 Gold vor dem Spiel verkaufen. –– Der Overlord kann 8 EP für Overlordkarten ausgeben. –– Der Overlord benutzt die Akt-II-Karten für sämtliche Monster und Hauptmänner.",
          "EP müssen nach den allgemeinen Regeln ausgegeben werden.",
          "Wenn ein Akt-II-Abenteuer außerhalb einer Kampagne gespielt wird, so wird empfohlen, dass die Spieler die Regeln der Epischen Variante auf dem Experten-Level verwenden, um sicherzugehen, dass das Spiel ausgewogen ist."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Es gibt keine Einsteiger und keine Epische Variante. Spieler spielen Wege zum Ruhm nur als Teil einer Kampagne, welche aus mehreren Geschichten und Side-Quests besteht oder im Modus Die Anderswelt. Verwandte Themen: Akte, Erfahrungspunkte, Kampagnen, Klassenkarten, Marktkarten, Overlordkarten"
        ]
      }
    ],
    "related": [],
    "page": 14
  },
  {
    "id": "erfahrungspunkte",
    "term": "Erfahrungspunkte",
    "groups": [
      {
        "label": null,
        "points": [
          "Während einer Kampagne und während den Spielvorbereitungen der Epischen Variante bekommen die Spieler Erfahrungspunkte (EP), die sie benutzen können, um das Spielgeschehen anzupassen.",
          "EP können nicht zwischen den Spielern getauscht werden und die Spieler sind nicht gezwungen alle (oder überhaupt einen) EP auszugeben."
        ]
      },
      {
        "label": "Erfahrungspunkte erhalten",
        "points": [
          "EP werden üblicherweise am Ende eines Abenteuers vergeben, was ausführlich im Abschnitt Belohnung der Abenteuerbeschreibung aufgeführt ist. Beachtet, dass Gerüchteabenteuer, die als Teil einer Kampagne gespielt werden, keine EP geben.",
          "Mini-Kampagnen können zusätzliche Abenteuerbelohnungen bieten, die nicht im Abschnitt Belohnungen der Abenteuerbeschreibung aufgeführt sind. Einzelheiten werden im Regelbuch der jeweiligen Erweiterung mit Mini-Kampagnen beschrieben (siehe \"Mini-Kampagne\" auf Seite 25)."
        ]
      },
      {
        "label": "Erfahrungspunkte ausgeben",
        "points": [
          "Spieler können EP während Schritt 5 der Kampagnenphase und während den Spielvorbereitungen für die Epische Variante und der Mini-Kampagne ausgeben.",
          "Helden können Erfahrungspunkte ausgeben um neue Fertigkeiten aus ihren Klassendeck zu lernen. Die EP Kosten sind auf den Klassenkarten in der oberen rechten Ecke angegeben.",
          "Der Overlord kann sich mit seinen Erfahrungspunkten neue Overlordkarten für sein Deck kaufen. Anders als die Helden, kann der Overlord Karten aus verschiedenen Klassen kaufen.",
          "Universelle Karten und Overlordklassenkarten, die 1 EP kosten (Stufe 1), können ohne weitere Beschränkungen gekauft werden.",
          "Der Overlord kann höherstufige Overlordklassenkarten nur kaufen, wenn er schon eine bestimmte Anzahl Karten derselben Klasse in seinem Deck hat: –– Um eine Stufe 2 Karte (2 EP) zu kaufen, muss der Overlord bereits zwei Karten dieser Klasse in seinem Deck haben. –– Um eine Stufe 3 Karte (3 EP) zu kaufen, muss der Overlord bereits drei Karten dieser Klasse in seinem Deck haben. –– Overlordkarten, die Diener beschwören (Ruf des Raben, Fesselnde Bande) werden beim Kauf von Overlordkarten einer höheren Stufe nicht berücksichtigt.",
          "Wenn der Overlord während der Kampagne ein Handlungskartendeck benutzt, so kann er beliebig viele EP ausgeben, um pro EP 3 Drohmarker zu erhalten."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Im Kampagnenmodus und in Der Anderswelt können",
          "Helden EP während der Kampagnen- oder der UpgradePhase ausgeben. In Trials of Frostgate können Helden EP ausgeben, wann immer sie EP bekommen.",
          "Obwohl die Klassenfertigkeiten aktiviert und deaktiviert werden können, können die Helden einmal getroffene Entscheidungen nicht mehr rückgängig machen, es sei denn ein Spieleffekt erlaubt dies ausdrücklich. Verwandte Themen: Epische Variante, Gerüchtekarten, Handlungskarten, Kampagnen, Klassenkarten, Overlordkarten, Stadtaktionen"
        ]
      }
    ],
    "related": [],
    "page": 15
  },
  {
    "id": "erkrankt",
    "term": "Erkrankt",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 15
  },
  {
    "id": "erleuchtungsmarker",
    "term": "Erleuchtungsmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Klasse des Propheten hat mehrere Fertigkeiten, die den Erleuchtungsmarker verwenden.",
          "Es gibt nur einen Erleuchtungsmarker. Während des Spiels befindet er sich entweder vor dem Prophetenspieler oder auf einem Heldenbogen.",
          "Jedes Mal, wenn ein Spieler den Erleuchtungsmarker erhält, nimmt er sich den Marker (egal, wo er liegt) und legt ihn auf seinen Heldenbogen.",
          "Jedes Mal, wenn der Erleuchtungsmarker abgeworfen wird (normalerweise, um eine Fertigkeit des Propheten auszulösen), wird er vom jeweiligen Heldenbogen herunter genommen und wieder vor den Prophetenspieler gelegt.",
          "Der Erleuchtungsmarker bleibt zwischen den Szenen und wenn der Held niedergestreckt wird auf dem Heldenbogen. Zwischen zwei Abenteuern wird er entfernt.",
          "Figuren, die als Helden gelten, können den Erleuchtungsmarker bekommen. Er wird abgelegt, wenn sie niedergestreckt oder erneut beschworen werden und am Ende jeder Szene"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Klassenmarker"
    ],
    "page": 15
  },
  {
    "id": "erneut-wuerfeln",
    "term": "Erneut Würfeln",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Würfelwurf modifizieren\" auf Seite 43."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 15
  },
  {
    "id": "erschoepfen",
    "term": "Erschöpfen",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn ein Spieler eine Karte erschöpft, dreht er sie einfach um 90 Grad, um das Benutzen der Fähigkeit zu kennzeichnen.",
          "Während Schritt 1.II des Spielzuges (1. Beginn des Spielzugs, II. Karten auffrischen; siehe \"Heldenspielzug\" auf Seite 36) macht er alle seine erschöpften Karten wieder spielbereit, indem er sie wieder senkrecht ausrichtet.",
          "Erschöpfte Karten können erst wieder benutzt werden, wenn sie wieder spielbereit sind.",
          "Es ist zu beachten, dass in bestimmten Situationen Marktkarten mehr als einmal pro Runde erschöpft werden können. Z.b. kann ein Held Mana-Geflecht während eines Angriffs in seinem Zug erschöpfen und dann eine Bewegungsaktion durchführen, um den Gegenstand einem anderen Helden zu übergeben. In dessen 1. Schritt wird ManaGeflecht wieder spielbereit gemacht und kann erneut erschöpft werden"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Spielbereit machen",
      "Spielzug"
    ],
    "page": 15
  },
  {
    "id": "erschoepfung",
    "term": "Erschöpfung",
    "groups": [
      {
        "label": null,
        "points": [
          "Erschöpfung ist eine Einheit der Ausdauer eines Helden, dargestellt durch den Erschöpfung Marker."
        ]
      },
      {
        "label": "Erschöpfung erleiden",
        "points": [
          "Helden besitzen viele Fähigkeiten, die Erschöpfung Kosten haben. Diese Fähigkeiten erfordern, dass der Held Erschöpfung erleidet, um diese Fähigkeit nutzen zu können.",
          "Während seines Zuges (in Schritt 3.II Aktionen ausführen; siehe \"Heldenspielzug\" auf Seite 36) kann der Held Erschöpfung erleiden, um einen Bewegungspunkt pro erlittenem Erschöpfung zu bekommen. Dies ist während einer Bewegungsaktion oder bevor oder nachdem eine andere Aktion ausgeführt wird möglich.",
          "Freiwillig kann ein Held nicht mehr Erschöpfung erleiden als sein Ausdauerwert angibt. Wenn ein Held durch einen anderen Effekt gezwungen wird, mehr Erschöpfung zu erleiden, als er noch Ausdauer hat, erleidet er 1 Herz pro überschüssigem Erschöpfung.",
          "Wenn eine Figur ohne Ausdauerwert (z.B. Monster oder Vertraute) Erschöpfung erleidet, erleidet sie stattdessen Herz.",
          "Wenn Figuren Herz statt Erschöpfung erleiden, können Effekte, die sich auf „wenn Erschöpfung erleiden“ oder „wenn Herz erleiden“ beziehen, trotzdem ausgelöst werden.",
          "Wenn ein Held jemals mehr Erschöpfung Marker auf seinem Heldenbogen hat als sein Ausdauerwert angibt (z.B. wenn seine Ausdauer durch einen Spieleffekt reduziert wurde), verbleiben die überschüssigen Erschöpfung Marker auf seinem Heldenbogen, bis sie entfernt werden.",
          "Wenn sich ein Spieleffekt auf die Anzahl an Erschöpfung bezieht, die ein Held „erlitten hat“, bezieht es sich auf die gesamte Anzahl von Erschöpfung Markern, die aktuell auf dem Heldenbogen liegen."
        ]
      },
      {
        "label": "Erschöpfung zurückgewinnen",
        "points": [
          "Wenn ein Held Erschöpfung zurückgewinnt, entfernt er den entsprechenden Betrag von Erschöpfung Markern von der Figur oder dem Heldenbogen.",
          "Helden gewinnen Erschöpfung zurück, wenn sie eine Aktion Ausruhen durchführen. Zudem kann während eines Kampfes, einmal pro Angriff, 1 Schub benutzt werden, um 1 Erschöpfung zurückzugewinnen. Dies kann auch dann durchgeführt werden, wenn der Held keine Erschöpfung Marker auf seinem Heldenbogen hat (was effektiv bedeutet, dass der Schub verschwendet wurde).",
          "Zurückgewonnene Erschöpfung durch Schub kann benutzt werden, um in demselben Angriff entsprechende Fähigkeiten auszulösen.",
          "Andere Spieleffekte können es Figuren ebenso erlauben Erschöpfung zurückzugewinnen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Ausdauer",
      "Ausruhen",
      "Energie",
      "Lebenskraft"
    ],
    "page": 15
  },
  {
    "id": "explosion",
    "term": "Explosion",
    "groups": [
      {
        "label": null,
        "points": [
          "Bei einem Angriff mit Explosion sind auch alle Nachbarfelder des Zielfelds vom Angriff betroffen. Explosion betrifft sowohl befreundete als auch feindliche Figuren.",
          "Der Angreifer muss Sichtlinie und genügend Reichweite besitzen, um das Ziel zu treffen, so dass Figuren oder Marker von Explosion betroffen werden können.",
          "Bei Angriffen auf mehrere Ziele gilt, dass Explosion jede Figur benachbart zu jedem Ziel betrifft. Jede Figur kann aber nur einmal von einem Angriff mit Explosion betroffen werden.",
          "Figuren werden von Explosion entweder in Schritt 1 des Angriffs (Ziel erklären) von einer angeborenen ExplosionsFähigkeit betroffen, oder in Schritt 4 des Angriffs (Energie ausgeben), durch das Hinzufügen von Schub -Effekten. Eine Figur bleibt weiterhin Ziel oder betroffen von dem Angriff, selbst wenn die Figur später während des Angriffs wegbewegt wird.",
          "Die Ergebnisse des Angriffswurfs gelten für jede betroffene Figur, aber jede betroffene Figur wirft ihre eigenen Verteidigungswürfel. Sofern nicht anders angegeben, betreffen Schub -Effekte jede Figur, die als Ziel der Explosion gewählt wurde oder die von der Explosion betroffen ist.",
          "Figuren, die in Schritt 4 des Angriffs betroffen sind, werfen die Verteidigungswürfel sofort nachdem Schub ausgegeben wurde, um dem Angriff Explosion hinzuzufügen. Der aktive Spieler kann wie üblich weitere Schub ausgeben.",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn mehrere Monster durch eine Explosion betroffen sind, wird ein Monster ausgewählt, das Herz wie üblich erhält, während andere Figuren (Monster und Helden) den halben Herz (aufgerundet) bekommen, bevor Verteidigung berücksichtig wird. Verwandte Themen: Akte, Betroffen, Felder zählen, Ziel"
        ]
      }
    ],
    "related": [],
    "page": 16
  },
  {
    "id": "faehigkeiten",
    "term": "Fähigkeiten",
    "groups": [
      {
        "label": null,
        "points": [
          "Alle Texte auf Karten und Heldenbögen werden als Fähigkeiten bezeichnet.",
          "Fähigkeiten haben gewöhnlich eine oder mehrere Voraussetzungen und spezielle Auslösebedingungen. Wenn die Voraussetzungen oder die Auslösebedingungen nicht zutreffen, kann die Fähigkeit nicht benutzt werden.",
          "Eine Fähigkeit kann in jeder Runde mehrmals verwendet werden. Fähigkeiten, die den Text „jedes Mal“ enthalten, geben an, dass die Fähigkeit nur einmal pro Auslöseereignis benutzt werden kann.",
          "Einige Fähigkeiten haben Kosten, welche vor der Nutzung beglichen werden müssen: –– Aktion: Diese Fähigkeiten werden als Aktion ausgeführt. –– Schub: Für diese Fähigkeit muss ein Energiesymbol (Schub ) ausgegeben werden –– Erschöpfung: Der Held muss die aufgeführte Menge an Erschöpfung (Erschöpfung ) erleiden, um diese Fähigkeit nutzen zu können. –– Erschöpfen: Der Spieler muss die Karte erschöpfen, um diese Fähigkeit zu nutzen. Soweit nichts anderes angegeben, können Fähigkeiten oder Effekte dieser Karte nicht benutzt werden, bis die Karte wieder spielbereit gemacht wurde. –– Marker ablegen: Der Spieler muss einen klassenspezifischen Marker von seinem Heldenbogen ablegen, um die Fähigkeit zu benutzen. –– Bewegungspunkte ausgeben: Der Spieler muss einen Bewegungspunkt ausgeben, um diese Fähigkeit zu benutzen.",
          "Eine Fähigkeit, die bewirkt, dass eine oder mehrere Figuren Schaden Herz erleiden, ohne eine Angriff durchzuführen zählt nicht bezüglich der Angriffsbeschränkung einer Figur"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Auslöser",
      "Bewegung",
      "Energie",
      "Erschöpfen",
      "Erschöpfung",
      "Heldenspielzug",
      "Spielzug"
    ],
    "page": 16
  },
  {
    "id": "fallenmarker",
    "term": "Fallenmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Klasse des Fallenstellers hat mehrere Fertigkeiten, die Fallenmarker verwenden. Fallenmarker sind auf die mitgelieferte Anzahl von 6 begrenzt.",
          "Jedes Mal, wenn der Fallensteller eine Fähigkeit einsetzt, durch die ein Fallenmarker ins Spiel kommt, nimmt der Spieler sich einen Fallenmarker und legt ihn gemäß der Fähigkeit auf den Spielplan.",
          "Fallenmarker blockieren weder die Sichtlinie noch die Bewegung, und pro Feld darf höchstens 1 Fallenmarker liegen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Klassenmarker"
    ],
    "page": 16
  },
  {
    "id": "fallgitter",
    "term": "Fallgitter",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Türen und Tür-ähnliche Objekte\" auf Seite 40."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 17
  },
  {
    "id": "fehlschlag",
    "term": "Fehlschlag",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Angriff schlägt fehl wenn: –– In Schritt 2 (Würfel werfen) des Angriffs ein X gewürfelt wird (\"Schritte im Kampf \" auf Seite 6). –– Das Ergebnis des Angriffes ungenügende Reichweite nach Schritt 3 (Reichweite überprüfen) hat. –– Das Ergebnis des Angriffes zu wenig Schub hat, wenn der Angreifer in Schritt 4 (Energie ausgeben) neben einem Monster mit Schatten steht.",
          "Wenn ein Angriff fehlschlägt, wird er sofort abgebrochen, ohne die weiteren Schritte durchzuführen.",
          "Wenn in Schritt 5 eines Angriffs kein Schaden verursacht wird, so zählt der Angriff nicht als Fehlschlag"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Angriffe",
      "Felder zählen",
      "Reichweite"
    ],
    "page": 17
  },
  {
    "id": "felder-zaehlen",
    "term": "Felder zählen",
    "groups": [
      {
        "label": null,
        "points": [
          "Viele Effekte verlangen von den Spielern, dass sie die Distanz zwischen zwei Feldern bestimmen. Felder werden wie folgt abgezählt: Wählt das Feld, von dem aus gezählt werden soll 1. (Startfeld). Bei großen Monstern wählt der aktive Spieler ein Feld, das von dem Monster besetzt ist. Beginnt mit dem Zählen bei 0. 2. Wählt das Feld, zu dem gezählt werden soll (Zielfeld). Wie in Schritt 1 wird bei großen Monstern nur ein einziges besetztes Feld gewählt. 3. Wählt, ausgehend vom Startfeld ein benachbartes Feld. Wiederholt dies, bis das Zielfeld ausgewählt wird. Für jedes ausgewählte Feld wird der Zähler um 1 erhöht. 4. Stellt sicher, dass der Weg so kurz wie möglich ist. Der Wert des Zählers ist die Distanz zwischen dem Start- und dem Zielfeld.",
          "Beachtet, dass das Abzählen von Feldern erfordert, dass die Felder benachbart sind. Dementsprechend beeinflussen Objekte und Terrain, die die Nachbarschaft beeinflussen, auch das Abzählen von Feldern. Objekte, die die Nachbarschaft blockieren und durch die somit nicht hindurchgezählt werden kann, sind: Geschlossene Türen, Hindernisse, Kartenränder, Wände und Alte Mauern"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Benachbart",
      "Hindernis",
      "Klassen",
      "Terrain",
      "Türen und Tür-ähnliche Objekte"
    ],
    "page": 17
  },
  {
    "id": "fernkampfangriffe",
    "term": "Fernkampfangriffe",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Angriffe\" auf Seite 5."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 17
  },
  {
    "id": "fertigkeit",
    "term": "Fertigkeit",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Klassenkarten\" auf Seite 25."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 17
  },
  {
    "id": "figuren",
    "term": "Figuren",
    "groups": [
      {
        "label": null,
        "points": [
          "Alle Helden, Verbündete, Monster, einige Vertraute und einige Abenteuer-spezifische Charaktere sind Figuren. Die meisten Figuren dürfen Aktionen durchführen.",
          "Eine Figur blockiert die Sichtlinie und die Bewegung.",
          "Eine Figur darf sich durch Felder, auf denen sich verbündete Figuren befinden, bewegen, aber darf die Bewegung nur auf einem leeren Feld unterbrechen oder beenden.",
          "Helden sind mit anderen Helden, Vertrauten, die als Figuren gelten und Abenteuer-spezifische Charakteren (z.B. Figuren, die als Held gelten) verbündet.",
          "Monster sind mit anderen Monstern verbündet.",
          "Felder dürfen durch Figuren hindurch gezählt werden.",
          "Sofern nicht anders beschrieben, können Figuren Zustandskarten erhalten und von feindlichen Figuren als Ziel ausgewählt werden und von Angriffen betroffen sein"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Sichten",
      "Vertraute"
    ],
    "page": 17
  },
  {
    "id": "finale",
    "term": "Finale",
    "groups": [
      {
        "label": null,
        "points": [
          "Das Finale ist ein besonderes Abenteuer am Ende der Kampagne.",
          "Das Finale wird wie ein Akt-II-Abenteuer behandelt und kann aus einer oder mehreren Szenen bestehen.",
          "Wer das Finale gewinnt, gewinnt die gesamte Kampagne.",
          "Das Finale (und das Intermezzo) können nur als Teil einer Kampagne gespielt werden und sind als Solo-Abenteuer ungeeignet"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Akte",
      "Intermezzo",
      "Kampagnen"
    ],
    "page": 17
  },
  {
    "id": "gefahreneffekte",
    "term": "Gefahreneffekte",
    "groups": [
      {
        "label": null,
        "points": [
          "Gefahreneffekte kommen nur in Wege zum Ruhm vor.",
          "Gefahreneffekte können am Ende einer Runde auftreten, nachdem die Helden eine gewisse Zeit in einem Abenteuer oder Stage verbracht haben.",
          "Gefahreneffekte können Monster herbeirufen, Schaden zufügen oder generell zum Nachteil für die Helden sein.",
          "Gefahreneffekte betreffen nur Helden und nicht Figuren, die als Held gelten (wie z.B. Vertraute und Marker).",
          "Gefahreneffekte können dazu führen, dass Monstergruppen herbeigerufen werden, die bereits auf der Karte sind. Wenn dies passiert, werden keine Monster von der Karte entfernt und so viele Monster wie möglich auf das angezeigte Feld gestellt, wobei die Gruppengröße einzuhalten ist"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Platzieren von Monstern",
      "Vertraute"
    ],
    "page": 17
  },
  {
    "id": "gefaehrliches-gelaende",
    "term": "Gefährliches Gelände",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Terrain\" auf Seite 38."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 17
  },
  {
    "id": "gefaehrten",
    "term": "Gefährten",
    "groups": [
      {
        "label": null,
        "points": [
          "Gefährten sind spezielle Charaktere, welche durch die Heldenspieler kontrolliert werden.",
          "In einigen Abenteuern erhalten die Helden einen Gefährten als Belohnung.",
          "Gefährten gelten für Heldenfähigkeiten, Monsterfähigkeiten, Angriffe und Overlordkarten als Heldenfiguren.",
          "Auf den Gefährtenkarten stehen sämtliche Attribute, Fähigkeiten, Eigenschaften des Gefährten sowie die Würfel, die dieser bei Angriff und Verteidigung wirft."
        ]
      },
      {
        "label": "Gefährtenfertigkeiten",
        "points": [
          "Die Helden können ihren Gefährten durch GefährtenFertigkeitskarten neue Fertigkeiten erlernen lassen. Diese werden i.d.R. als Abenteuerbelohnung erworben.",
          "Die Fertigkeitskarten der Gefährten funktionieren ähnlich wie Klassenkarten und geben dem Gefährten neue Fähigkeiten und/oder gewähren ihm neue Aktionen."
        ]
      },
      {
        "label": "Gefährten kontrollieren",
        "points": [
          "Im Abschnitt „Aufbau“ eines Abenteuers steht beschrieben, welche Gefährten durch die Helden kontrolliert werden. „Die Helden steuern ihren Gefährten“ bedeutet, dass die Helden denjenigen Gefährten steuern, den sie im Laufe der Kampagne erhalten haben. Wenn ein Abenteuer außerhalb der Kampagne gespielt wird, können sich die Helden einen Gefährten aussuchen.",
          "Der Gefährtenmarker wird zu Beginn des Abenteuers benachbart zu einem Helden platziert, nachdem die Helden platziert wurden.",
          "Der Gefährte muss entweder vor oder nach einem Heldenzug aktiviert werden. Der Gefährte kann nicht während eines Heldenzuges aktiviert werden.",
          "Gefährten dürfen während ihrer Aktivierung bis zu 2 Aktionen ausführen: –– Bewegen –– Angreifen –– Gefährtenaktion (gekennzeichnet mit einem Aktion auf der Gefährten- oder Gefährtenfertigkeitskarte) –– Einem Helden aufhelfen –– Eine Tür öffnen oder schließen –– Spezial",
          "Ähnlich wie Monster können Gefährten nur ein Mal pro Aktivierung angreifen.",
          "Gefährten können Schaden erleiden und sind von Zuständen betroffen.",
          "Gefährten gewinnen nach jeder Szene ihre volle Lebenskraft zurück.",
          "Wenn ein Gefährte besiegt ist, ist er für den Rest der Szene aus dem Spiel.",
          "Wenn ein Gefährte besessen ist (z.B. im Labyrinth des Verderbens Abenteuer „Der Brunnen der Erkenntnis“), wird dieser wie ein vom Overlord kontrollierter Hauptmann behandelt. Solange der Gefährte besessen ist, wird die entsprechende Hauptmannkarte verwendet (Gefährtenkarten und –fertigkeiten sind nicht anwendbar)"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Akte",
      "Klassenkarten"
    ],
    "page": 17
  },
  {
    "id": "geheimkammern",
    "term": "Geheimkammern",
    "groups": [
      {
        "label": null,
        "points": [
          "Geheimkammern sind in den Erweiterungen Höhle des Lindwurms und Die Trollsümpfe enthalten und erlauben es den Helden unbekannte Kammern mit wertvollen Belohnungen zu erkunden.",
          "Wenn mit Geheimkammern gespielt wird, wird die „Nichts“ Suchkarte durch eine „Geheimgang“ Suchkarte ersetzt."
        ]
      },
      {
        "label": "Spielvorbereitung",
        "points": [
          "Wenn ein Held während einer Szene die Suchkarte „Geheimgang“ zieht, legt er den Geheimgangmarker auf sein Feld. Der Held kann sofort die Geheimkammer erkunden, ohne einen Bewegungspunkte auszugeben.",
          "Wird die Suchkarte „Geheimgang“ gezogen, wenn kein Held auf dem Spielplan steht (z.B. während des Reiseschritts in der Kampgnenphase), ziehen die Spieler eine Ersatzkarte und mischen die Suchkarte „Geheimgang“ wieder in den Stapel.",
          "Wenn der Held, der den „Geheimgang“ gezogen hat, nicht sofort die Geheimkammer erkundet, kann jeder Held, der auf dem Geheimgangmarker steht 1 Bewegungspunkt ausgeben, um die Geheimkammer zu erkunden.",
          "Wenn ein Held eine Geheimkammer erkundet, werden folgende Schritte absolviert: 1. Geheimkammerkarte ziehen: Der Held zieht eine Geheimkammerkarte und befolgt die Sonderregeln auf der Karte. 2. Geheimkammer auslegen: Der Held legt das Spielplanteil mit dem auf der Karte genannten Code neben den Spielplan, verbindet es aber nicht mit dem Spielplan. 3. Held bewegen: Der Held stellt seine Figur auf das Eingangsfeld der Geheimkammer. 4. Herausforderungsmarker auslegen: Der Overlord zieht unbesehen so viele Herausforderungsmarker, wie Helden mitspielen, und legt jeden verdeckt in die Geheimkammer.",
          "Ein Held kann keine Geheimkammer erkunden, wenn bereits eine Geheimkammer im Spiel ist."
        ]
      },
      {
        "label": "Eine Geheimkammer betreten und verlassen",
        "points": [
          "Wenn sich ein Held auf einem Geheimgangfeld befindet, kann er 1 Bewegungspunkt ausgeben, um auf ein beliebiges anderes Geheimgangfeld zu ziehen. Diese Felder gelten nicht als benachbart. Helden können sich aber von einem zum anderen bewegen, als wären sie benachbart.",
          "Wenn ein Spieler eine Figur von einem Geheimgangfeld auf ein anderes Geheimgangfeld bewegt, das besetzt ist, stellt er sie auf das nächste leere Feld seiner Wahl.",
          "Monster können Geheimgänge nicht benutzen."
        ]
      },
      {
        "label": "Herausforderungsmarker",
        "points": [
          "Wenn ein Held auf einem Feld mit einem verdeckt liegenden Herausforderungsmarker oder auf einem Nachbarfeld steht, kann er eine Suchaktion ausführen, um den Marker aufzudecken. Die Vorderseite des Markers zeigt entweder ein Monster oder ein Attributsymbol. Zeigt sie ein Monster, wird der Marker auf das",
          "nächste leere Feld (nach Wahl des Overlords) gelegt und gilt als normales (weißes) Monster des dargestellten Typs. Dieses Monster wird für die erlaubte Gruppengröße nicht mitgezählt. Es gelten alle Werte und Fähigkeiten auf der Monsterkarte des aktuellen Aktes. Wenn diese Monstergruppe bereits auf dem Spielbrett steht, wird der Marker Teil dieser Monstergruppe und wird zusammen mit der Monstergruppe aktiviert. Unabhäning von allen Spieleffekten, inklusive Abenteuerbeschreibungen und Handlungskarten, wird er als Monster betrachtet.",
          "Zeigt der Marker ein Attributsymbol, muss der Held sofort eine entsprechende Probe ablegen. Wenn sie gelingt, wirft er den Marker ab und zieht sofort eine Suchkarte. Wenn die Probe misslingt, wirft er den Marker auch ab, zieht aber keine Suchkarte.",
          "Herausforderungsmarker gelten nicht als Suchmarker.",
          "Wenn eine Geheimkammerkarte die Helden anweist „1 Herausforderungsmarker aufdecken“ (wie z.B. Ort des Friedens oder Die Waffenkammer), brauchen die Helden nicht auf dessen Feld oder benachbart zu ihm zu sein.",
          "Solange mindestens ein Held in der Geheimkammer steht, darf der Overlord zu Beginn seines Zuges einen beliebigen Herausforderungs- oder Monstermarker vom GeheimkammerSpielplan nehmen. Dass muss er tun (oder auch nicht), bevor er seine Overlordkarte zieht. Er wirft die Marker immer unbesehen ab."
        ]
      },
      {
        "label": "Belohnung der Geheimkammer",
        "points": [
          "Sobald keine Herausforderungsmarker und Monster mehr in der Geheimkammer sind, werden folgende Schritte abgehandelt: 1. Der aktive Spieler unterbricht seinen Zug. 2. Die auf der Geheimkammerkarte angegebene Belohnung wird verteilt. Wenn mehrere Helden in der Geheimkammer sind, wählen die Spieler, welcher Held die Belohnung erhält. 3. Die Spieler nehmen ihre Helden aus der Geheimkammer und stellen sie auf die nächstgelegenen, leeren Felder, ausgehend vom Geheimgangmarker. 4. Die Geheimkammer und der Geheimgangmarker werden abgeworfen. 5. Der aktive Spieler setzt seinen Zug fort.",
          "Der Overlord kann Spieleffekte nutzen, um zusätzliche Monsterfiguren in einer Geheimkammer aufzustellen (z.B. durch Gunst der Lindwurmkönigin). Die Belohnung wird erst dann verteilt, wenn alle Monster besiegt und alle Herausforderungsmarker abgelegt wurden.",
          "Die Helden behalten die Belohnungen aus den Geheimkammern, es sei denn, es ist etwas anderes angegeben.",
          "Am Ende der Szene werden alle Geheimkammerkarten, deren Belohnung nicht verteilt wurde, abgeworfen.",
          "Am Ende eines jeden Abenteuers, werden alle abgeworfenen Geheimkammerkarten zurück in den Stapel gemischt."
        ]
      },
      {
        "label": "In einer Geheimkammer niedergestreckt werden",
        "points": [
          "Wenn ein Held in einer Geheimkammer niedergestreckt wird, gelten alle normalen Regeln für niedergestreckte Helden, bis auf eine Ausnahme: der Heldenspieler legt seinen Heldenmarker auf das Feld des Geheimgangmarkers, selbst wenn das Feld nicht leer ist."
        ]
      },
      {
        "label": "Gefährten und Geheimkammern",
        "points": [
          "Gefährten werden in Bezug auf Geheimkammern wie Helden behandelt, sie können entsprechend Geheimkammern untersuchen, betreten, verlassen und Attributsproben ablegen.",
          "Wenn sich ein Gefährte alleine in einer Geheimkammer befindet und diese komplettiert ist, wird der Gefährte auf den Geheimgangmarker gestellt und die Belohnung erhält der nächste Held"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Gefährten",
      "Reise",
      "Stürmen"
    ],
    "page": 18
  },
  {
    "id": "geisselmarker",
    "term": "Geisselmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Klasse des Schwarzmagiers hat mehrere Fertigkeiten, die Geißelmarker verwenden.",
          "Die Anzahl der Geißelmarker ist auf 20 begrenzt.",
          "Wenn ein Monster durch eine Klassenkarte gegeißelt wird, legt der Spieler einen Geißelmarker neben das Monster.",
          "Ein Monster mit mindestens einem Geißelmarker, ist ein gegeißeltes Monster. Jedes Mal, wenn ein Monster einen Geißelmarker bekommt (selbst wenn es schon einen hat), wird es gegeißelt.",
          "Ein Held, der mit einem Angriff auf ein gegeißeltes Monster zielt, kann nach dem Angriffswurf beliebig viele Geißelmarker von diesem Monster abwerfen. Pro abgeworfenem Geißelmarker fügt der Angriff dem Ziel 1 Herz mehr zu. Diese Fähigkeit steht auch auf der Klassenkarte Geißel der Schwäche"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Angriffe",
      "Klassenkarten"
    ],
    "page": 19
  },
  {
    "id": "gelaehmt",
    "term": "Gelähmt",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 19
  },
  {
    "id": "geruechtekarten",
    "term": "Gerüchtekarten",
    "groups": [
      {
        "label": null,
        "points": [
          "Gerüchtekarten versorgen den Overlord mit besonderen Fähigkeiten im Kampagnenspiel und sind ein Weg, zusätzliche Abenteuer in eine Kampagne zu bringen."
        ]
      },
      {
        "label": "Gerüchtedeck",
        "points": [
          "Im Gerüchtedeck befinden sich alle Gerüchtekarten aus allen Erweiterungen, zu denen die Spieler Zugang haben. Beachtet, dass Zusatzabenteuerkarten kein Teil des Gerüchtedecks sind.",
          "Vor Beginn der Kampagne mischt der Overlord die Gerüchtekarten und zieht 3 davon.",
          "Wenn der Overlord eine Gerüchtekarte ziehen dürfte, aber das Deck aufgebraucht ist, zieht er keine. Wenn das Gerüchtedeck aufgebraucht ist, wird es nicht neu gemischt."
        ]
      },
      {
        "label": "Gerüchtekarten spielen",
        "points": [
          "Auf jeder Gerüchtekarte steht genau, in welchem Schritt der Kampagnenphase der Overlord eine bestimmte Gerüchtekarte spielen kann. Einige Gerüchtekarten können nur in bestimmten Akten gespielt werden (siehe Aktionssymbol in der oberen linken Ecke).",
          "Der Overlord kann höchstens eine Gerüchtekarte pro Kampagnenphase spielen.",
          "Die Helden müssen sofort den Text auf einer gespielten Gerüchtekarte befolgen.",
          "Zu Beginn von Akt II muss der Overlord alle Gerüchtekarten (auch Abenteuerkarten) abwerfen, die nur in Akt I gespielt werden können. Abgeworfene Gerüchtekarten werden nicht zurück ins Gerüchtedeck gemischt.",
          "Gerüchtekarten können, wenn sie gespielt werden, Abenteuer beinhalten."
        ]
      },
      {
        "label": "Abenteuerkarten",
        "points": [
          "Es gibt zwei Arten von Abenteuerkarten: Zusatzabenteuerkarten und Gerüchtekarten mit einem Abenteuer (auch Gerüchteabenteuerkarten genannt).",
          "Einige Abenteuerkarten tragen in der linken oberen Ecke das Symbol für Akt I bzw. Akt II.",
          "Wenn der Overlord eine Abenteuerkarte spielt, legt er sie vor sich aus und bekommt 1 Bedrohungsmarker.",
          "Immer wenn ein Spieler (Held oder Overlord) in Schritt 6 (Wähle nächstes Abenteuer) einer Kampagnenphase (siehe \"Kampagnen\" auf Seite 23) das nächste Abenteuer aussucht, kann er entweder eines vom Kampagnenbogen oder eines von einer Abenteuerkarte wählen, die im Spiel ist.",
          "Der Reiseschritt vor einem solchen Abenteuer wird normal ausgeführt, nur dass keine Reisesymbole von der Landkarte verwendet werden, sondern die auf der Abenteuerkarte abgebildeten. Die Reisesymbole werden von links nach rechts abgehandelt.",
          "Abenteuerkarten bleiben solange im Spiel, bis das Abenteuer gespielt wurde oder die Karte durch einen Effekt abgeworfen wird.",
          "Errata: Helden müssen nicht eine im Spiel befindliche Abenteuerkarte spielen bevor sie zum Intermezzo übergehen. Die entsprechende Regel aus der Erweiterungen Höhle des Lindwurms und Die Trollsümpfe wurde widerrufen."
        ]
      },
      {
        "label": "Abenteuer von Abenteuerkarten absolvieren",
        "points": [
          "Im Quest-Handbuch stehen alle Belohnungen für diese Abenteuer.",
          "Die „Zusätzlichen Abenteuerbelohnungen“ sind nur für Mini-Kampagnen relevant und nicht für Abenteuer, die durch Abenteuerkarten gespielt werden.",
          "Abenteuer von Abenteuerkarten zählen nicht zur erforderlichen Zahl der Abenteuer pro Akt. Abenteuer von Abenteuerkarten werden immer zusätzlich zu den erforderlichen Abenteuern pro Akt absolviert. Sie müssen aber auch nicht absolviert werden, um die Kampagne zu Ende zu bringen. Ebenso werden Abenteuer von Abenteuerkarten nicht mitgezählt, wenn bestimmt wird, welche Seite wie viele Abenteuer in einem Akt gewonnen hat."
        ]
      },
      {
        "label": "Zusatzabenteuerkarten",
        "points": [
          "Zusatzabenteuerkarten sind spezielle Abenteuerkarten für Akt II. Sie kommen durch bestimmte Effekte, üblicherweise als Belohnungen einer Akt I Abenteuerkarte ins Spiel.",
          "Zusatzabenteuerkarten können während der Kampagnenphase nach dem Absolvieren des Intermezzos oder jedem anderen Akt II Abenteuer ins Spiel gebracht werden.",
          "Sowohl der Overlord als auch die Helden dürfen sich jederzeit beide Seiten einer Zusatzabenteuerkarte ansehen.",
          "Auf der Rückseite einer Zusatzabenteuerkarte stehen die Belohnungen, die der Overlord bzw. die Helden erhalten, wenn sie das Abenteuer gewinnen und wann die Belohnung genutzt werden kann.",
          "Wann welche Seite die Belohnung erhält, steht im Abschnitt „Belohnungen“ im Quest-Handbuch"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Akte",
      "Kampagnen"
    ],
    "page": 19
  },
  {
    "id": "geschwaecht",
    "term": "Geschwächt",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 20
  },
  {
    "id": "grosse-figuren",
    "term": "Grosse Figuren",
    "groups": [
      {
        "label": "Figurengröße",
        "points": [
          "Kleine Figuren besetzen ein Feld. Mittlere Figuren besetzen zwei Felder. Riesige Figuren besetzen vier Felder. Gewaltige Figuren besetzen sechs Felder.",
          "Figuren, die mehr als ein Feld besetzen, werden große Figuren genannt."
        ]
      },
      {
        "label": "Einen Angriff ausführen",
        "points": [
          "Wie jede andere Figur auch, muss eine große Figur sowohl Sichtlinie (wird in Schritt 1 eines Kampfes überprüft) als auch Reichweite (wird in Schritt 3 eines Kampfes überprüft) auf ein Zielsfeld erfüllen (siehe \"Schritte im Kampf \" auf Seite 6).",
          "Eine große Figur, die einen Angriff ausführt, kann Sichtlinie und Reichweite von unterschiedlichen Feldern aus messen. Während die Sichtlinie nicht durch blockierte Felder gezogen werden kann, hat die Reichweite keine solchen Beschränkungen (siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92)."
        ]
      },
      {
        "label": "Eine Bewegung ausführen",
        "points": [
          "Der aktive Spieler wählt ein Feld, dass die große Figur besetzt (lässt sie „schrumpfen“) und zählt dann die Felder für Bewegung von diesem Feld aus. Eine Figur kann zwei Bewegungsaktionen hintereinander ausführen, und erhält entsprechend doppelt so viele Bewegungspunkte wie seine Geschwindigkeit.",
          "Wenn eine große Figur durch einen Spieleffekt bewegt wird, welcher ein Feld zum Ziel hat (z.B. durch einen Angriff), „schrumpft“ die Figur auf dieses Zielfeld und der aktive Spieler führt die Bewegung aus.",
          "Große Figuren betreten alle Felder, die bei der Bewegung gezählt werden.",
          "Wenn eine große Figur ein Feld mit Terrain betritt, wird sie dadurch genauso wie kleine Figuren betroffen. Ausnahmen: eine große Figur ist von einer Grube nur betroffen, wenn ihre Bewegung endet oder unterbrochen wird und ihre gesamte Basis Grubenfelder besetzt, nachdem sie wieder auf das Spielbrett gesetzt wird."
        ]
      },
      {
        "label": "Eine Bewegung beenden oder unterbrechen",
        "points": [
          "Wenn eine Bewegung beendet oder unterbrochen wird, platziert der aktive Spieler die Figur so, dass das letzte Feld bei der Bewegung besetzt ist, wenn die Figur sich „ausdehnt“. Dies ändert oft die Orientierung der Figur relativ zu ihrem Startpunkt. Dies ist selbst vor dem Ausgeben des ersten Bewegungspunktes einer Bewegungsaktion möglich.",
          "Wenn die Bewegung einer großen Figur für eine Aktion unterbrochen wird (oder für eine Nicht-Aktion, die als Unterbrechung gilt), muss der aktive Spieler in der Lage sein, diese Aktion durchzuführen, bevor er die Figur „wachsen“ lässt. Die gilt auch für eine Bewegung außerhalb einer Bewegungsaktion, z.B. wenn Bewegungspunkte von Blitzschnell benutzt werden. Wenn die Bewegung für einen Angriff unterbrochen wird, kann die große Figur nach dem „wachsen“ weitere Ziele wählen.",
          "Eine große Figur, die sich „ausdehnt“, betritt nicht die Felder oder bewegt sich nicht auf die Felder, in die sie sich „ausdehnt“.",
          "Wenn das Monster sich nicht mit seiner gesamten Basis auf der Karte „ausdehnen“ kann, kann es seine Bewegung auf diesem Feld nicht unterbrechen. Jeder Spieleffekt, der die Bewegung auf diesem Feld unterbricht, wird nicht ausgelöst.",
          "Wenn große Monster sich auf Terrain „ausdehnen“, welches sie nicht durchqueren können, lest die Regeln für dieses Terrain, um zu prüfen, was passiert.",
          "siehe \"3.3. Bewegungsbeispiele\" auf Seite 90 für visuelle Beispiele"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Angriffe",
      "Bewegung",
      "Figuren",
      "Terrain",
      "Unterbrechung",
      "Ziel"
    ],
    "page": 20
  },
  {
    "id": "grube",
    "term": "Grube",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Terrain\" auf Seite 38."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 21
  },
  {
    "id": "handlungskarten",
    "term": "Handlungskarten",
    "groups": [
      {
        "label": null,
        "points": [
          "Zu Beginn einer Kampagne kann der Overlord ein Handlungsdeck wählen. Der Overlord benutzt dieses Deck während der gesamten Kampagne. Handlungsdecks können nur im Kampagnenspiel benutzt werden.",
          "Nachdem der Overlord sich für ein Handlungsdeck entschieden hat, legt er die Hauptkarte dieses Decks (die Karte ohne Anschaffungskosten in der rechten oberen Ecke) offen vor sich ab.",
          "Die restlichen Karten des Handlungsdecks sind Verbesserungen, die der Overlord während der Kampagne kaufen kann.",
          "Beachtet, dass Handlungskarten anders funktionieren als Overlordkarten: Der Overlord mischt sie nicht in sein Overlorddeck und sie werden auf andere Weise erworben.",
          "Siehe \"3.1. Überblick über erhältliche Erweiterungen\" auf Seite 86 für eine Liste aller Handlungsdecks."
        ]
      },
      {
        "label": "Bedrohung",
        "points": [
          "Im Laufe der Kampagne erhält der Overlord Bedrohung in Form von Drohmarkern.",
          "Jedes Mal, wenn ein Held während einer Szene besiegt wird, kann der Overlord einen Drohmarker erhalten anstatt eine Overlordkarte zu ziehen. Auf diese Weise kann der Overlord nur einen Drohmarker pro Held pro Abenteuer erhalten.",
          "Am Ende jedes Abenteuers erhält der Overlord einen Drohmarker. Hat er das Abenteuer gewonnen, erhält er 1 zusätzlichen Drohmarker.",
          "Im Schritt 5 („Erfahrungspunkte ausgeben“) der Kampagnenphase kann der Overlord beliebig viele EP ausgeben, um pro EP 3 Drohmarker zu erhalten.",
          "Für jede Gerüchteabenteuerkarte, die der Overlord spielt, erhält er 1 Drohmarker.",
          "Es gibt keine Beschränkung für die Anzahl an Drohmarkern."
        ]
      },
      {
        "label": "Handlungskarten erwerben",
        "points": [
          "Während Schritt 5 („Erfahrungspunkte ausgeben“) der Kampagnenphase kann der Overlord beliebig viele Handlungskarten seiner Wahl erwerben, solange er die Anschaffungskosten (oben rechts) bezahlen kann.",
          "Erworbene Handlungskarten legt er offen vor sich ab. Er kann sie in allen kommenden Abenteuern dieser Kampagne nutzen.",
          "Handlungskarten, die zurück in die Spielschachtel gelegt wurden, können nicht erneut gekauft werden (z.B. Hinterlistiger Schriftgelehrter aus dem Verdorbene Seelen Handlungsdeck)."
        ]
      },
      {
        "label": "Handlungskarten einsetzen",
        "points": [
          "Jedes Mal, wenn der Overlord die Fähigkeit einer Handlungskarte nutzt, für die er die Karte „erschöpfen“ oder „einsetzen“ muss, muss er die auf der Karte angegebenen Einsatzkosten (unten rechts) in Drohmarkern bezahlen.",
          "Jedes Mal, wenn der Overlord einen Drohmarker ausgibt, um eine Handlungskarte einzusetzen, legt er ihn mit der weißen Seite nach oben auf den Heldenbogen desjenigen Helden, der zurzeit die wenigsten Schicksalsmarker hat. Bei Gleichstand entscheiden die Helden, wer den Schicksalsmarker bekommt. Gibt der Overlord mehrere Drohmarker gleichzeitig aus, verteilt er sie einzeln an die Helden.",
          "Handlungskarten können nicht auf Verbündete, Vertraute und Figuren, die als Helden gelten, angewendet werden."
        ]
      },
      {
        "label": "Schicksal",
        "points": [
          "Helden können Schicksalsmarker ausgeben, um einen der folgenden Effekte zu nutzen: –– 1 Schicksalsmarker: In seinem Zug kann ein Held 1 Erschöpfung zurückgewinnen. –– 1 Schicksalsmarker: Ein Held kann 1 seiner Würfel neu werfen. Beachtet, dass ein Held einen Schicksalsmarker einsetzen darf, den er gerade bekommen hat, eine fehlgeschlagene Attributsprobe, der durch eine Handlungskarte ausgelöst wurde, die der Overlord mit diesem Bedrohungsmarker bezahlt hat, erneut zu würfeln. –– 2 Schicksalsmarker: Nach seinen zwei normalen Aktionen kann ein Held eine zusätzliche Aktion ausführen. Höchstens ein Mal pro Held pro Runde. –– 2 Schicksalsmarker: Im Schritt 4 („Einkaufen“) der Kampagnenphase können die Helden 1 zusätzliche Marktkarte ziehen. Hierfür dürfen Schicksalsmarker verschiedener Helden kombiniert werden.",
          "Wenn ein Held einen Schicksalsmarker ausgibt, legt er ihn zurück in den Drohmarkervorrat.",
          "Helden können Schicksalsmarker nicht untereinander tauschen.",
          "Nach Schritt 4 („Einkaufen“) der Kampagnenphase legen alle Helden alle ihre Schicksalsmarker zurück in den Drohmarkervorrat"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Kampagnen",
      "Overlordkarten"
    ],
    "page": 21
  },
  {
    "id": "hauptmaenner",
    "term": "Hauptmänner",
    "groups": [
      {
        "label": null,
        "points": [
          "Hauptmänner sind mächtige Kreaturen, die dem Overlord unterstehen. In den Regeln eines Abenteuers ist jeweils angeben, ob und welcher Hauptmann verwendet wird und welche Sonderregeln evtl. für ihn gelten.",
          "Hauptmänner werden auf dem Spielplan durch ihre Hauptmannmarker bzw. -figuren dargestellt, gelten aber in jeder Hinsicht als Monsterfiguren, es sei denn, es ist ausdrücklich anders angegeben. Hauptmänner sind weder normale noch Elitemonster.",
          "Hauptmänner können die Overlordversion von Relikten tragen. Dies ist die einzige Möglichkeit, wie die Fähigkeiten von normalen Relikten vom Overlord benutzt werden können.",
          "Jeder Hauptmann kann nur ein Relikt tragen (siehe \"Sonnensteinmarker\" auf Seite 33 für Sonderregeln)."
        ]
      },
      {
        "label": "Hauptmannkarten",
        "points": [
          "Informationen über den Hauptmann sind auf der entsprechenden Karte wiedergegeben. Für jeden Hauptmann gibt es eigene Karten für Akt I und Akt II.",
          "Die Hauptmannkarten geben die Attribute (siehe unten) und die Angriffswürfel wieder, die beim Angriff verwendet werden.",
          "In einem speziellen Bereich der Hauptmannkarte sind die Charakteristika des Hauptmanns wiedergegeben (Geschwindigkeit, Lebendkraft und Verteidigung), welche je nach Anzahl der Helden (dargestellt als graue Silhouetten) unterschiedlich sein kann.",
          "In bestimmten Abenteuern werden Hauptmänner von den Helden kontrolliert. In diesen Fällen wird die Hauptmannkarte des aktuellen Aktes benutzt und die Charakteristika des Hauptmannes werden an der Anzahl der Helden angepasst."
        ]
      },
      {
        "label": "Niedergestreckte Hauptmänner",
        "points": [
          "Solange es nirgendwo anders beschrieben ist, wird ein besiegter Hauptmann wie jedes andere Monster vom Spielplan genommen.",
          "Einige Abenteuer geben an, dass ein Hauptmann genauso wie ein Held niedergestreckt wird. In diesen Fällen werden alle Zustände abgelegt und der Hauptmann von Spielplan entfernt. In seiner nächsten Aktivierung kann er eine Aufrappeln Aktion durchführen. Anders als beim Aufrappeln von Helden, kann der Hauptmann danach eine zweite Aktion ausführen.",
          "Andere Monster können einem niedergestreckten Hauptmann nicht aufhelfen. Ein niedergestreckter Hauptmann kann das Ziel von Fähigkeiten anderer Monster oder Overlordkarten sein, die dem Hauptmann erlauben, Lebenskraft zurückzugewinnen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Akte",
      "Aufhelfen",
      "Aufrappeln",
      "Besiegt",
      "Hauptmänner",
      "Relikte"
    ],
    "page": 21
  },
  {
    "id": "helden",
    "term": "Helden",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Held ist der Gegenspieler des Overlords. Während der Spielvorbereitung wählt jeder Heldenspieler mindestens einen Helden, den er kontrolliert.",
          "Siehe \"3.1. Überblick über erhältliche Erweiterungen\" auf Seite 86 für eine Liste aller Helden."
        ]
      },
      {
        "label": "Heldenbogen",
        "points": [
          "Der Heldenbogen enthält alle Informationen zu einem Helden: –– Name und Archetyp –– Charakteristika: Geschwindigkeit (Bewegung ), Lebenskraft (Herz ), Ausdauer (Erschöpfung ) und Verteidigung (Verteidigung ). –– Attribute: Stärke (Stärke ), Wissen (Wissen ), Willenskraft (Willenskraft ) und Geistesgegenwart (Gespür ). –– Heldenfähigkeit und Heldentat. –– Symbol der Erweiterung"
        ]
      },
      {
        "label": "Heldenfähigkeit",
        "points": [
          "Jeder Held hat eine besondere Fähigkeit, deren Effekt auf dem Heldenbogen beschrieben wird (oben rechts).",
          "Eine einzigartige Heldenfähigkeit gilt nicht als Fertigkeit. Jedoch wird sie öfters mit dem Ausdruck „Heldenfähigkeit“ verwechselt, der sich im Allgemeinen auf Klassen-, Such- oder Marktkarten eines Helden bezieht."
        ]
      },
      {
        "label": "Heldentat",
        "points": [
          "Eine Heldentat ist eine mächtige Fähigkeit, die auf dem Heldenbogen eines jeden Helden beschrieben ist (unten rechts).",
          "Heldentaten können einmal pro Szene benutzt werden. Wenn ein Held seine Heldentat benutzt, dreht er seinen Heldenbogen auf die Rückseite. Nach der Szene wird der Heldenbogen wieder auf die Vorderseite gedreht.",
          "Heldentaten gelten nicht als Fertigkeiten."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Heldentat",
          "Im Kampagnenspiel in Wege zum Ruhm werden die Heldenbögen nach jeder Szene wieder auf die Vorderseite gedreht.",
          "In Die Anderswelt werden die Heldenbögen nur wieder auf die Vorderseite gedreht, wenn die App einen anweist, dies zu tun. Heldenmarker",
          "Heldenmarker haben keinen eigenen Spieleffekt. Sie werden benutzt, um wichtige Informationen durch Regeln oder Karteneffekte im Auge zu behalten (z.B. Anzeige der letzten Position eines Helden, der sich im Moment nicht auf dem Spielplan befindet). Heldenspielzug Siehe \"Heldenspielzug\" auf Seite 36. Figuren, die als Helden behandelt werden",
          "Zusätzlich zu bestimmten Vertrauten werden einige Charaktere laut den Abenteuerbeschreibungen als „Heldenfiguren behandelt“ oder als „Helden behandelt“.",
          "Diese Figuren: –– sind betroffen durch Angriffe, Monsteraktionen, Heldenfähigkeiten, Heldentaten, Fähigkeiten von Gegenständen, Relikten, Suchkarten und Overlordkarten, die sich auf Helden beziehen und allen Effekten, die sich auf Figuren beziehen. –– sind nicht betroffen von allen Fähigkeiten, Abenteuerregeln, Handlungskarten, Reiseereignissen, Gerüchtekarten und allen anderen Spieleffekten, die sich auf Helden beziehen, es sei denn, es ist etwas anderes angegeben. –– können spezielle Aktionendurchführen, die in der Abenteuerbeschreibung angegeben sind. –– können keine Gegenstände mit Helden tauschen, es sei denn es ist explizit erlaubt. –– werden als verbündete Figuren gegenüber Helden angesehen und befolgen die gleichen Regeln hinsichtlich Bewegung auf Terrain wie Helden. –– können von Zuständen betroffen sein und versagen automatisch bei Attributsproben. –– können eine Aktion verwenden, um eine Aktion von einer Zustandskarte durchzuführen (z.B. um Betäubt, Blutend und Brennend abzuwerfen) oder um aus einem Grubenfeld zu klettern. –– blockieren die Sichtlinie und die Bewegung. Verbündete Figuren können durch Felder ziehen, die von Figuren, die als Held behandelt werden, besetzt sind. –– können Erleuchtungs-, Elixier- und Tapferkeitsmarker bekommen.",
          "Üblicherweise sind in den Abenteuerbeschreibungen weitere Regeln angegeben."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Figuren, die als Held behandelt werden, sind immun gegenüber Gefahreneffekten.",
          "Wenn ein Monster angewiesen wird, auf einen Helden zu zielen, werden Figuren, die als Helden behandelt werden, und angreifbare Marker auch als mögliche Ziele aufgenommen.",
          "Für das Zielen gilt, wenn eine Figur, die als Held behandelt wird, oder ein angreifbarer Marker nicht über das Attribut verfügt, auf welches das Monster zielt, so wird angenommen, dass es einen Wert von 0 hat. Verwandte Themen: Attribute, Spielzug, Szenen"
        ]
      }
    ],
    "related": [],
    "page": 22
  },
  {
    "id": "herausforderungsmarker",
    "term": "Herausforderungsmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Geheimkammern\" auf Seite 18."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 23
  },
  {
    "id": "hindernis",
    "term": "Hindernis",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Terrain\" auf Seite 38."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 23
  },
  {
    "id": "hoehenlinie",
    "term": "Höhenlinie",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Terrain\" auf Seite 38."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 23
  },
  {
    "id": "inaktive-monster",
    "term": "Inaktive Monster",
    "groups": [
      {
        "label": null,
        "points": [
          "In einigen Abenteuern werden Monstergruppen als inaktiv bezeichnet und der Overlord legt den Marker für inaktive Monster auf die entsprechende Monsterkarte.",
          "Der Overlord kann inaktive Monster nicht aktivieren oder sie durch Overlord- oder Handlungskarten beeinflussen, es sei denn, es ist in der Abenteuerbeschreibung ausdrücklich erlaubt.",
          "Wenn eine Monstergruppe inaktiv ist, sind alle Figuren dieser Monstergruppe inaktiv. Inaktive Monster blockieren die Sichtlinie und die Bewegung.",
          "Inaktive Monster können Ziel eines Angriffs sein oder von einem Angriff durch feindliche Figuren betroffen sein - der Overlordspieler würfelt ganz normal die Verteidigungswürfel.",
          "Solange es nicht anders angegeben ist, entfernt der Overlord sofort den Marker für inaktive Monster von der Monsterkarte, wenn ein inaktives Monster Herz erleidet und diese Monstergruppe ist nicht länger inaktiv.",
          "Beachtet, dass die offene Gruppe, die in \"Die Kammer der Schatten\" (Die Schattenrune Kampagne) auf das Flussufer gestellt wird, nicht als inaktive Monstergruppe definiert wird und somit nicht den oben beschriebenen Regeln folgt"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Zustände"
    ],
    "page": 23
  },
  {
    "id": "infektionsmarker",
    "term": "Infektionsmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Infektionsmarker haben keinen eigenen Spieleffekt. Die Overlordklasse Verseucher hat einige Karten, die Infektionsmarker verwenden.",
          "Die Anzahl der Infektionsmarker ist auf 16 begrenzt.",
          "Wenn eine Figur durch einen Effekt einer VerseucherOverlordkarte infiziert wird, wird ein Infektionsmarker aus dem Vorrat auf den Heldenbogen, die Vertrautenkarte oder nahe der Figur gelegt.",
          "Ein Held mit mindestens einem Infektionsmarker auf seinem Heldenbogen ist ein infizierter Held. Jedes Mal, wenn ein Held einen Infektionsmarker bekommt (selbst wenn er schon einen hat), wird er infiziert.",
          "Die Anzahl an Infektionsmarkern, die ein Held auf seinem Heldenbogen haben kann, ist nur durch die mitgelieferte Anzahl begrenzt.",
          "Ein niedergestreckter Held behält seine Infektionsmarker. Zwischen zwei Szenen desselben Abenteuers bleiben Infektionsmarker auf Heldenbögen liegen, werden jedoch am Ende eines Abenteuers abgeworfen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Overlordkarten"
    ],
    "page": 23
  },
  {
    "id": "intermezzo",
    "term": "Intermezzo",
    "groups": [
      {
        "label": null,
        "points": [
          "Das Intermezzo ist ein besonderes Abenteuer, das in der Kampagne den Übergang von Akt I zu Akt II markiert. Das Intermezzo wird wie ein Akt-I-Abenteuer behandelt und besteht aus einer oder mehreren Szenen.",
          "Die Kampagnphase nach dem Intermezzo enthält zwei spezielle Schritte (3a, 3b), welche den normalen Schritt (3) ersetzen: 3a) Statt eines normalen Einkaufsschrittes können die Spieler nun eine beliebige Anzahl an Akt-I-Marktkarten kaufen. Alle verbliebenen Akt-I-Marktkarten werden offen ausgelegt. 3b) Nun werden alle nicht gekauften Akt-I-Marktkarten, Akt-I-Monsterkarten und Akt-I-Hauptmannkarten zurück in die Schachtel gelegt. Ab jetzt werden nur noch die entsprechenden Akt-II-Karten verwendet.",
          "Akt-I-Marktkarten, die während Akt II verkauft werden, kommen direkt in die Schachtel zurück.",
          "Intermezzo (und Finale) können nur als Teil einer Kampagne gespielt werden und sind als Solo-Abenteuer ungeeignet"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Akte",
      "Kampagnen"
    ],
    "page": 23
  },
  {
    "id": "inventar",
    "term": "Inventar",
    "groups": [
      {
        "label": null,
        "points": [
          "Das Inventar ist nur in Wege zum Ruhm",
          "verfügbar und kann durch das Drücken des Inventar-Knopfes aufgerufen werden.",
          "Es zeigt die Ausrüstung und den Goldbetrag, den die Helden im Moment besitzen.",
          "Es kann von den Spielern beim Laden eines gespeicherten Spielstandes während einer Kampagne benutzt werden, um sich an die physischen Komponenten erinnern zu lassen. Spieler können hier dem Inventar keine Sachen hinzufügen oder entfernen; es dient nur als Erinnerung"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Ausrüstung",
      "Marktkarten"
    ],
    "page": 23
  },
  {
    "id": "kampagnen",
    "term": "Kampagnen",
    "groups": [
      {
        "label": null,
        "points": [
          "Eine Kampagne ist eine Reihe von Abenteuern, die hintereinander gespielt werden. Sie beginnt üblicherweise mit dem Auftakt, gefolgt von drei Akt-I-Abenteuern, einem Intermezzo, drei Akt-II-Abenteuern und einem Finale.",
          "Abhängig vom Veröffentlichungszeitpunkt enthält das Basisspiel entweder die Kampagne Das Blutvermächtnis (von Januar 2016 an) oder Die Schattenrune (Juli 2012 bis Dezember 2015). Labyrinth des Verderbens und Schatten von Nerekhall beinhalten ihre eigenen Kampagnen. Die MiniKampagnen aus Nebel von Bilehal und Rostende Ketten können zu einer kompletten Kampagne kombiniert werden.",
          "Mini-Kampagnen, die in den anderen Erweiterungen enthalten sind, sind kürzer und enthalten weniger Abenteuer (siehe „Mini-Kampagnen“ weiter unten)."
        ]
      },
      {
        "label": "Eine Kampagne starten",
        "points": [
          "Siehe \"Spielvorbereitungen\" auf Seite 35."
        ]
      },
      {
        "label": "Die Abenteuer einer Kampagne",
        "points": [
          "Die Abenteuer in einer Kampagne werden in einer spezifischen Reihenfolge gespielt; Details sind im dazugehörigen Abenteuerhandbuch zu finden (oder im Quest-Handbuch für Das Blutvermächtnis und Die Schattenrune).",
          "Die Questhandbücher beinhalten eine Landkarte, die benutzt wird, um die Reiseereignisse zu bestimmen, die beim Reisen zum nächsten Abenteuer auftreten können. Vor dem Auftakt treten keine Reiseereignisse auf.",
          "Abenteuer von Abenteuerkarten zählen nicht zur Anzahl der benötigten Abenteuer und zur Anzahl der gewonnenen Abenteuer von Helden oder Overlord hinzu, um den aktuellen Akt zu beenden (siehe \"Gerüchtekarten\" auf Seite 19).",
          "Da der Verlauf von Das Blutvermächtnis und Die Schattenrune im Grundspiel in verschiedenen Versionen abgedruckt ist, werden weiter unten die Details noch einmal wiedergegeben. Der Verlauf der anderen Kampagnen steht in den jeweiligen Abenteuerhandbüchern. Verlauf in Die Schattenrune –– Die Spieler beginnen mit dem Auftakt Abenteuer „Erstes Blut“. –– Nachdem der Auftakt gespielt wurde, sind alle Akt-IAbenteuer verfügbar. Der Gewinner eines Abenteuers (Helden oder Overlord) darf das nächste zu spielende Abenteuer aussuchen. –– Nachdem der Auftakt und drei Akt-I-Abenteuer gespielt wurden und die Helden mindestens zwei Akt-I-Abenteuer gewonnen haben, wird „Die Kammer der Schatten“ als Intermezzo gespielt. Andernfalls wird „Der wahre Overlord“ als Intermezzo gespielt. –– Das Ergebnis der Akt-I Abenteuer bestimmt, welche Abenteuer in Akt II verfügbar sind: Die Akt-II-Abenteuer, die auf der linken Seite des Abenteuerbaumes stehen, sind verfügbar, wenn die Helden das korrespondierende Abenteuer in Akt I gewonnen haben. Die Akt-II-Abenteuer, die auf der rechten Seite des Abenteuerbaumes stehen, sind verfügbar, wenn der Overlord das Abenteuer in Akt I gewonnen hat. Alle Abenteuer, die in Akt I nicht gespielt wurden, gelten hinsichtlich der Wahl des korrespondierenden Akt-II-Abenteuers als vom Overlord gewonnen. –– Nachdem drei Akt-II-Abenteuer gespielt wurden und die Helden mindestens zwei davon gewonnen haben, wird „Gryvorns Wiedergeburt“ als Finale gespielt. Andernfalls wird „Der Mann, der König sein wollte“ als Finale gespielt. Verlauf in Das Blutvermächtnis –– Die Spieler beginnen mit dem Auftakt Abenteuer „Der Novize“. –– Der Abschnitt Belohnungen gibt an, welche Abenteuer als nächstes zur Auswahl stehen. –– Nachdem der Auftakt und drei Akt-I-Abenteuer gespielt wurden, wird von den Helden ein Intermezzo-Abenteuer gewählt, wenn sie mindestens zwei Akt-I-Abenteuer gewonnen haben, oder vom Overlord, wenn er mindestens zwei Akt-I-Abenteuer gewonnen hat."
        ]
      },
      {
        "label": "Kampagnenphase",
        "points": [
          "Nach jedem Abenteuer einer Kampagne folgt die Kampagnenphase, in der die folgenden Schritte durchgeführt werden: 1. Suchkarten verkaufen: Die Helden bekommen so viele Goldstücke, wie alle ihre Suchkarten zusammen angeben (auch wenn die Suchkarten bereits benutzt wurden). Dann werden alle Suchkarten wieder in den Suchstapel gemischt (auch solche, welche die Helden noch nicht benutzt haben). 2. Aufräumen: Die Helden gewinnen alle Herz und Erschöpfung zurück, alle Zustandskarten werden abgeworfen, alle Klassenmarker und Heldenmarker werden in den Vorrat zurückgelegt. Der Overlord mischt seine Handkarten und seinen Ablagestapel zurück in das Overlorddeck. 3. Belohnungen erhalten: Jeder Spieler (Held wie Overlord) erhält 1 Erfahrungspunkt, egal wer das Abenteuer gewonnen hat (wie im Quest-Handbuch angegeben). Wenn der Overlord ein Handlungskartendeck benutzt, bekommt er einen Drohmarker, wenn er verloren hat, und zwei Drohmarker, wenn er gewonnen hat (siehe \"Handlungskarten\" auf Seite 21). 4. Einkaufen: Die Heldenspieler können gesammeltes Gold für neue Marktkarten ausgeben (siehe \"Marktkarten\" auf Seite 26). 5. Erfahrungspunkte ausgeben: Jetzt kann jeder Spieler die bisher gesammelten EP ausgeben, die Helden für neue Fertigkeiten, der Overlord für neue Overlordkarten. Zusätzlich kann der Overlord mit Drohmarkern Handlungskarten kaufen (siehe \"Erfahrungspunkte\" auf Seite 15 und \"Handlungskarten\" auf Seite 21). 6. Nächstes Abenteuer aussuchen: Details zur Auswahl des nächsten Abenteuers sind im Quest-Handbuch und im beigefügten Kampagnenbogen aufgeführt. 7. Abenteuer vorbereiten: Die Spieler bauen das nächste Abenteuer nach den normalen Regeln auf (siehe \"Spielvorbereitungen\" auf Seite 35). Dabei sollte der Overlord daran denken, sein Deck, inklusive der neu erworbenen Karten, zu mischen, bevor er seine Startkarten auf die Hand nimmt. 8. Reise: Die Helden reisen zum nächsten Abenteuer. Auf dem Weg dorthin treten eventuell unvorhergesehene Ereignisse ein (siehe \"Reise\" auf Seite 31)."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Die Schritte 1, 2, 3, 7 und 8 der Kampagnenphase werden von der App durchgeführt.",
          "Einkaufen und Stadtaktionen finden in der Stadt statt, EP können ausgegeben werden, während sich die Helden auf der Karte oder in der Stadt befinden.",
          "Verfügbare Abenteuer und Städte werden auf der Kampagnenkarte gezeigt. Mini-Kampagne",
          "Anders als bei kompletten Kampagnen, bestehen MiniKampagnen nur aus vier bis fünf Abenteuern. MiniKampagnen folgen den Standardregeln für komplette Kampagnen mit den folgenden Ausnahmen: –– Spieler können keine Gerüchtekarten verwenden. –– Helden- und Overlordspieler dürfen oft eine gewisse Menge an EP und Gold während eines „Einkaufens“-Schrittes und eines „Erfahrung ausgeben“-Schrittes ausgeben, bevor das erste Abenteuer gespielt wird. Die Spieler können nicht ausgegebene EP und Gold für den weiteren Verlauf der Kampagne aufsparen. –– In den Mini-Kampagnen aus Höhle des Lindwurms, Die Trollsümpfe und Schloss Rabenfels führen die Helden direkt vor dem Finale zwei „Einkaufsschritte“ anstatt nur einem durch. Einen während Schritt „8. Übergang zu Akt II“ (jeder Akt-I-Gegenstand ist jetzt zum Kaufen verfügbar), und einen weiteren direkt danach in Schritt „9. Kampagnenphase“ (5 Akt II Marktkarten sind zum Kaufen verfügbar). –– Zusätzliche Abenteuerbelohnungen, die nicht im Abschnitt Belohnungen der Mini-Kampagnen Abenteuer aus Höhle des Lindwurms, Die Trollsümpfe und Schloss Rabenfels stehen, gibt es am Ende jedes Abenteuers: Jeder Spieler erhält 1 EP. Wenn die Helden gewonnen haben, erhalten sie eine zufällige Marktkarte des entsprechenden Aktes; wenn der Overlord gewonnen hat, bekommt er zusätzlich 1 EP. –– Wenn die Belohnung eines Abenteuers ein Relikt ist und die Seite (Helden oder Overlord), die sich die Belohnung verdient hat, dieses Relikt schon besitzt, so bekommt jeder Spieler dieser Seite stattdessen 1 EP. Wenn ein Spieler der anderen Seite dieses Relikt besitzt, nimmt der Spieler, der die Belohnung bekommt, es sich von der anderen Seite.",
          "Die Abenteuer aus Nebel von Bilehall und Rostende Ketten können als einzelne Mini-Kampagnen oder als komplette Kampagne gespielt werden. Nebel von Bilehall enthält Akt I Abenteuer und ein Finale, dass als Intermezzo dient. Rostende Ketten enthält Akt II Abenteuer und das Finale. Siehe die entsprechenden Regeln und Quest-Handbücher für Details. Im Gegensatz zu anderen Mini-Kampagnen, können die Abenteuer aus Nebel von Bilehall und Rostende Ketten nicht in andere Kampagnen über Gerüchtekarten integriert werden. Verwandte Themen: Akte, Erfahrungspunkte, Handlungskarten, Marktkarten, Marktkarten und Einkaufen, Overlordkarten, Reise, Spielvorbereitungen, Suchkarten"
        ]
      }
    ],
    "related": [],
    "page": 23
  },
  {
    "id": "klassen",
    "term": "Klassen",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn ein Spieler eine Klasse für seinen Helden wählt, nimmt er sich den Kartenstapel dieser Klasse (Klassenstapel).",
          "Ein Spieler kann keine Klasse wählen, die nicht mit dem Archetypensymbol seines Heldenbogens übereinstimmt. Jedoch erlauben Hybridklassen zusätzliche Klassenstapel von unterschiedlichen Archetypen zu wählen.",
          "Ein Spieler kann keine Klasse wählen, die ein anderer Spieler bereits gewählt hat.",
          "Verfügbare Klassen sind: –– Krieger: Berserker, Champion, Plänkler, Ritter, Seneschall, Stahlmagier, Tierbändiger –– Heiler: Apothecarius, Barde, Geistersprecher, Geweihter, Prophet, Wächter –– Magier: Beschwörer, Geomant, Kampfmagier, Nekromant, Runenmeister, Schwarzmagier –– Kundschafter: Dieb, Fallensteller, Kopfgeldjäger, Mönch, Schattenwandler, Schatzjäger, Waldläufer",
          "Siehe \"3.1. Überblick über erhältliche Erweiterungen\" auf Seite 86 um zu sehen, welche Klasse mit welcher Erweiterung erschienen ist."
        ]
      },
      {
        "label": "Mischklassen",
        "points": [
          "Mischklassen haben ihr eigenes Mischklassendeck, erlauben es Spielern aber ein zusätzliches Standarddeck, welches zu einem anderen Archetypen gehört, zu wählen.",
          "Die Startfertigkeitskarte eines Mischklassendecks gibt an, welches Standardklassendeck gewählt werden kann. Der Spieler kann kein anderes Mischklassendeck als sein Standardklassendeck wählen. Die folgenden Klassenkombinationen sind verfügbar: Hybridklassen Archetyp Archetyp des Standardklassendecks Bewahrer Magier Heiler Gauner Kundschafter Magier Heretiker Heiler Magier Kampfmagier Magier Krieger Kreuzritter Heiler Krieger Mönch Kundschafter Heiler Plünderer Krieger Kundschafter Rächer Krieger Heiler Stahlmagier Krieger Magier Verwüster Kundschafter Krieger Wächter Heiler Kundschafter Wahrsager Magier Kundschafter",
          "Nachdem das Standardklassendeck gewählt wurde, erhält der Spieler die Grundfertigkeiten und die Startausrüstung dieser Klasse.",
          "Wenn EP ausgegeben werden, kann der Spieler Klassenkarten vom Hybridklassendeck oder dem Standardklassendeck wählen. Jedoch darf er keine Karten vom Standardklassendeck kaufen, die 3 EP kosten.",
          "Das Wählen einer Mischklasse ändert nicht den Archetyp eines Helden, der auf dem Heldenbogen abgedruckt ist"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Archetypen",
      "Klassenkarten"
    ],
    "page": 25
  },
  {
    "id": "klassenkarten",
    "term": "Klassenkarten",
    "groups": [
      {
        "label": null,
        "points": [
          "Klassenkarten zeigen die Startausrüstung und die Startfähigkeiten, die spezifisch für eine bestimmte Heldenklasse sind. Diese Fähigkeiten werden Fertigkeiten genannt.",
          "Alle Klassenkarten einer gegebenen Klasse bilden das Klassendeck.",
          "Die Rückseite der Klassenkarten zeigt das Archetypsymbol und den Namen der Klasse, die Vorderseite zeigt den Namen der Fertigkeit, die EP-Kosten, die Regeln und oft die Erschöpfung -Kosten der Fertigkeit."
        ]
      },
      {
        "label": "Fertigkeiten benutzen",
        "points": [
          "Viele Fertigkeiten kosten Erschöpfung, wenn sie benutzt werden. Fertigkeiten ohne Erschöpfung -Kostensymbol, können ohne das Erleiden von Erschöpfung benutzt werden.",
          "Zusätzlich zu den Erschöpfung -Kosten benötigen manche Fertigkeitskarten eine Aktion (zu erkennen am Aktion -Symbol) oder müssen erschöpft werden, um sie zu benutzen.",
          "Fertigkeiten werden durch das Befolgen der Regeln auf der Fertigkeitskarte benutzt."
        ]
      },
      {
        "label": "Fertigkeitskarten erwerben",
        "points": [
          "Während Startfertigkeiten immer kostenlos sind (kein Erfahrungssymbol), können fortgeschrittene Fertigkeiten mit EP gekauft werden.",
          "Ein Spieler kann während einer Kampagnenphase so viele Fertigkeiten kaufen wie er will, solange er die nötigen EP hat. Im Gegensatz zu Overlordkarten, gibt es keine zusätzlichen Beschränkungen beim Kauf von Karten, die 2 oder 3 EP kosten (siehe \"Erfahrungspunkte ausgeben\" auf Seite 15)"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Kampagnen"
    ],
    "page": 25
  },
  {
    "id": "klassenmarker",
    "term": "Klassenmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Klassenmarker sind Marker, die in Verbindung mit bestimmten Fertigkeitskarten benutzt werden.",
          "Alle Klassenmarker sind auf die entsprechende Anzahl begrenzt. Die folgenden Klassenmarker sind verfügbar (die Anzahl der verfügbaren Marker und Klassen steht in Klammern): Vertrautenmarker: Belebter Stein (3; Geomant), Untoter Diener (1; Nekromant), Schattenseele (1; Schattenwandler), Wolf (1; Tierbändiger). Andere: Elixirmarker (8; Apothecarius), Geißelmarker (20; Schwarzmagier), Erleuchtungsmarker (1; Prophet), Trugbildmarker (4; Beschwörer), Liedmarker (1 Melodiemarker & 1 Akkordmarker; Barde), Anvisiert-Marker (1; Kopfgeldjäger), Fallenmarker (6; Fallensteller), Tapferkeitsmarker (12; Champion)"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Anvisiert-Marker",
      "Elixirmarker",
      "Erleuchtungsmarker",
      "Fallenmarker",
      "Heldenspielzug",
      "Liedmarker",
      "Tapferkeitsmarker",
      "Trugbildmarker"
    ],
    "page": 26
  },
  {
    "id": "korrumpierte",
    "term": "Korrumpierte",
    "groups": [
      {
        "label": null,
        "points": [
          "Korrumpierte sind Charaktere, die der Overlord in Schatten von Nerekhall kontrollieren kann. Korrumpierte kommen durch Wechselbälger ins Spiel."
        ]
      },
      {
        "label": "Korrumpierte erhalten",
        "points": [
          "Der Overlord erhält Korrumpierte als Belohnung, wenn er bestimmte Abenteuer gewinnt."
        ]
      },
      {
        "label": "Korrumpierten-Karten spielen",
        "points": [
          "Wenn ein Elite-Wechselbalg auf den Spielplan gestellt wird (während den Spielvorbereitungen oder als Verstärkung), kann der Overlord eine Korrumpierten-Karte spielen und der EliteWechselbalg erhält zusätzlich zu seinen normalen Werten und Fähigkeiten sämtliche Effekte der Korrumpierten-Karte.",
          "Es kann nur eine Korrumpierten-Karte gleichzeitig im Spiel sein.",
          "Wenn ein Elite-Wechselbalg mit einer Korrumpierten-Karte während einer Szene nicht besiegt wird, legt der Overlord die Korrumpierten-Karte am Ende der Szene wieder vor sich.",
          "Wird ein Elite-Wechselbalg mit einer Korrumpierten-Karte besiegt, legt der Overlord die Korrumpierten-Karte zurück in die Schachtel. Er kann sie in dieser Kampagne nicht wieder spielen.",
          "Eine Korrumpierten-Karte kann nicht auf einen Anführer gespielt werden, der einen Elite-Wechselbalg ersetzt"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Besiegt"
    ],
    "page": 26
  },
  {
    "id": "lava",
    "term": "Lava",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Terrain\" auf Seite 38."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 26
  },
  {
    "id": "lebenskraft",
    "term": "Lebenskraft",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Charakteristika\" auf Seite 12."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 26
  },
  {
    "id": "leere-felder",
    "term": "Leere Felder",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein leeres Feld ist ein Feld, das keine Figuren enthält und die Sichtlinie und die Bewegung einer Figur auf der Karte nicht blockiert.",
          "Sofern nicht anders angegeben, werden Felder, die Marker enthalten, als leere Felder betrachtet"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Blockierte Felder",
      "Sichten"
    ],
    "page": 26
  },
  {
    "id": "liedmarker",
    "term": "Liedmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Klasse des Barden hat mehrere Fertigkeiten, die Liedmarker verwenden. Es gibt zwei verschiedene Liedmarker: einen Melodiemarker und einen Akkordmarker. Melodie",
          "Bestimmte Fertigkeiten erlauben es marker dem Barden, einen Liedmarker auf eine Klassenkarte zu legen. Üblicherweise erleidet der Barde dadurch Erschöpfung.",
          "Nur wenn ein Liedmarker auf einer Klassenkarte mit passendem Liedeffekt liegt, ist der entsprechende Effekt, wie auf der Karte Akkord beschrieben, aktiv. Es entstehen keine weiteren marker Kosten.",
          "Wird ein Barde niedergestreckt, bleiben die Liedmarker, wo sie sind, doch sind sie und ihre entsprechenden Liedeffekte nicht aktiv.",
          "Am Ende einer Szene nimmt der Barde alle Liedmarker und legt sie wieder vor sich ab"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Klassenkarten",
      "Klassenmarker"
    ],
    "page": 26
  },
  {
    "id": "marktkarten",
    "term": "Marktkarten",
    "groups": [
      {
        "label": null,
        "points": [
          "Marktkarten umfassen Waffen, Rüstungen, Relikte und andere Ausrüstung.",
          "Waffen lassen sich anhand eines Angriffssymbols auf den Karten identifizieren. Das Symbol zeigt entweder oder. Waffen werden benutzt, um Angriffe durchzuführen; andere Marktkarten werden benutzt, wie auf ihnen beschrieben.",
          "Fähigkeiten und Effekte bei Waffenkarten sind inaktiv und können nicht außerhalb eines Angriffs mit dieser Waffe benutzt werden (z.B. wird die Sichtlinie eines Helden durch den Ulmen-Kriegsbogen nicht betroffen, wenn man nicht mit ihm angreift).",
          "Klassenkarten, die Gegenstände darstellen, werden Startausrüstung genannt.",
          "Das „Du“ auf Marktkarten bezieht sich auf den Helden, der den Gegenstand besitzt, nicht den Spieler, der den Helden kontrolliert. Folglich können Fähigkeiten auf Marktkarten, die der Held besitzt, nicht benutzt werden, um beispielsweise die Würfel eines Vertrauten, unter der Kontrolle des Spielers, erneut zu würfeln.",
          "Helden können Marktkarten mit anderen Helden tauschen (außer Startausrüstung)."
        ]
      },
      {
        "label": "Gegenstandsmerkmale",
        "points": [
          "Gegenstandsmerkmale auf Gegenstandskarten spezifizieren den Typ des Gegenstandes (z.B. Trank, Rune, Gürtel, Magie).",
          "Oft beziehen sich Fertigkeitskarten auf die Gegenstandsmerkmale, indem eine bestimmte Fertigkeit nur in Kombination mit einem speziellen Gegenstand erlaubt ist (z.B. ist Macht der Runen beschränkt auf Magie- oder Runen-Waffen).",
          "Helden können auf die Anzahl von angelegten Gegenständen mit spezifischen Merkmalen beschränkt sein (z.B. Helme, Gürtel, Schuhe, usw.). Diese Beschränkungen werden auf der Gegenstandskarte aufgeführt"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Angriffe",
      "Kampagnen",
      "Marktkarten und Einkaufen",
      "Relikte",
      "Stürmen",
      "Weitergeben"
    ],
    "page": 26
  },
  {
    "id": "marktkarten-und-einkaufen",
    "term": "Marktkarten und Einkaufen",
    "groups": [
      {
        "label": "Marktkarten",
        "points": [
          "Marktkarten können die Helden entweder während Schritt 4 (Einkaufen) der Kampagnenphase, während der Spielvorbereitungen des epischen Spiels oder durch andere Spieleffekte bekommen. Marktkarten sind in zwei aktspezifische Stapel geteilt: –– Der Marktkartenstapel für Akt I wird während der Kampagne für alle Akt I Abenteuer, nach der Einführung und dem Intermezzo verwendet. –– Der Marktkartenstapel für Akt II wird während der Kampagne für alle Akt II Abenteuer verwendet. Akt II Marktkarten können nicht gekauft werden, solange noch kein Akt II Abenteuer beendet ist."
        ]
      },
      {
        "label": "Einkaufsschritt",
        "points": [
          "Die Helden bekommen Gold durch Suchkarten, Abenteuerbelohnungen oder den Verkauf von Gegenständen. Alles Gold fließt in eine gemeinsame Kasse, aus der neue Gegenstände gekauft werden können.",
          "5 zufällige Marktkarten werden vom aktuellen Marktkartenstapel aufgedeckt. Wenn mit Handlungskarten gespielt wird, können die Spieler 2 Schicksalsmarker ausgeben, um eine weitere Marktkarte zu ziehen. Dann können die Spieler beliebig viele (oder gar keine) der aufgedeckten Marktkarten kaufen, solange sie sich diese leisten können.",
          "Beim Einkaufen können die Heldenspieler auch Gegenstände verkaufen. Für jeden verkauften Gegenstand erhalten die Helden die Hälfte des aufgedruckten Wertes in Goldstücken, auf das nächste Vielfache von 25 abgerundet. Startausrüstungsgegenstände können für jeweils 25 Goldstücke verkauft werden. Relikte können nicht verkauft werden.",
          "In dieser Kampagnenphase erhaltenes Gold muss nicht sofort ausgegeben werden, sondern kann aufgespart und in einer späteren Kampagnenphase ausgegeben werden.",
          "Wenn die Helden nichts (mehr) kaufen möchten, werden die (restlichen) aufgedeckten Marktkarten wieder in den Stapel gemischt."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Der Einkaufsschritt wird in der Stadt durchgeführt.",
          "Spieler können Gegenstände aus der Auswahl kaufen und aus ihrem Gepäck verkaufen und zwar beides für die angezeigten Goldmünzen. Der Goldwert auf den Karten kann von dem auf dem Bildschirm abweichen.",
          "Verfügbare Gegenstände sind bei jedem Besuch in der Stadt zufällig, abhängig von verschiedenen Faktoren, wie der Stadt, die die Spieler besuchen, dem Ruhm und dem Fortschritt in der Kampagne.",
          "Sowohl Akt-I als auch Akt-II Gegenstände sind verfügbar, oft auch gleichzeitig.",
          "Anders als im Grundspiel können Spieler ihre Gegenstände zum vollen Preis verkaufen. Suchkarten können nicht verkauft werden, sondern werden am Schluss jedes Abenteuers abgelegt. Verwandte Themen: Akte, Kampagnen, Marktkarten"
        ]
      }
    ],
    "related": [],
    "page": 27
  },
  {
    "id": "merkmale",
    "term": "Merkmale",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Monster\" auf Seite 27 und \"Marktkarten\" auf Seite 26 für Details zu Monster- und Kartenmerkmalen"
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 27
  },
  {
    "id": "mini-kampagne",
    "term": "Mini-Kampagne",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Kampagnen\" auf Seite 23."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 27
  },
  {
    "id": "monster",
    "term": "Monster",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Monster ist eine Figur eines spezifischen Monstertyps (Zombie, Goblin-Bogenschütze), welches vom Overlord kontrolliert wird.",
          "Standard-Monster sind entweder normale Monster (weiße Figuren) oder Elite-Monster (rote Figuren).",
          "Hauptmänner und Anführer werden als Monster betrachtet, wobei jeder Hauptmann/Anführer sein eigener Monstertyp ist. Anführer sind Elite-Monster, während Hauptmänner weder normale noch Elite-Monster sind.",
          "Monster sind mit allen anderen Monstern verbündet."
        ]
      },
      {
        "label": "Monsterkarten",
        "points": [
          "Von jedem Monstertyp gibt es Monsterkarten für Akt I und Akt II.",
          "Für Standard-Monster sind die Eigenschaften der normalen Monster oben auf der Monsterkarte angegeben, die Eigenschaften der Elite-Monster unten.",
          "Monsterkarten geben die folgenden Eigenschaften wieder: –– Monstername (Monstertyp) –– Monstereigenschaften (Geschwindigkeit, Lebenskraft und Verteidigung) –– Regeln der Monsterfähigkeiten (Kartenrückseite). –– Angriffswürfel und Angriffsart: Nahkampf () oder Fernkampf (). –– Akt-Symbol, Monster-Merkmalsymbole. –– Monster-Gruppengröße (Kartenrückseite).",
          "Monsterkarten für Hauptmänner und Anführer führen Characteristika abhängig von der Anzahl der Helden auf. Zusätzlich zeigen Hauptmannkarten die Attribute des Hauptmannes."
        ]
      },
      {
        "label": "Monstermerkmale",
        "points": [
          "Monstermerkmale sind Eigenschaften, die sich auf spezielle Symbole auf den Monsterkarten beziehen.",
          "Jedes Standard-Monster hat zwei von zehn möglichen Monstermerkmalen (siehe Kasten).",
          "Hauptmänner und Diener haben keine Monstermerkmale. Anführer, die zu einer Monstergruppe beschworen werden, besitzen die Monstermerkmale dieser Gruppe. MonsterMerkmale Zivilisiert Berge Verflucht Dunkelheit Kälte Höhle Gebäude Wasser Wildnis Hitze"
        ]
      },
      {
        "label": "Monstergruppen",
        "points": [
          "Die Größe einer Monstergruppe (Gruppengröße) hängt von der Anzahl der Helden ab und ist auf der Rückseite der Monsterkarte angegeben. Wenn Spieleffekte die Spieler anweisen, die Gruppengröße zu ignorieren, ist die Anzahl der Monster durch die Anzahl der vorhandenen Plastikfiguren limitiert. 2-Helden 3-Helden 4-Helden Gruppengröße Gruppengröße Gruppengröße",
          "Mitglieder einer Monstergruppe werden direkt nacheinander aktiviert.",
          "Jeder Hauptmann wird wie eine eigene Monstergruppe behandelt.",
          "Abenteuerbeschreibungen geben üblicherweise die Monstergruppen per Namen an, bekannt als feste Gruppen, ebenso eine gewisse Anzahl an offenen Monstergruppen.",
          "Für jede offene Monstergruppe kann der Overlord jeden nicht benutzten Monstertyp wählen, bei dem ein Monstermerkmal mit denen der Abenteuerbeschreibung übereinstimmt."
        ]
      },
      {
        "label": "Monsteraktionen",
        "points": [
          "Eine Monsteraktion ist eine Fähigkeit, die auf der Monsterkarte mit Aktion gekennzeichnet ist.",
          "Angriffe, die Teil einer Monsteraktion sind, zählen gegen das Angriffslimit eines Monsters pro Aktivierung (einer für die meisten Monster, zwei für Monster mit Aggressiv).",
          "Wenn ein Spieleffekt sich auf eine „Angriffsaktion“ bezieht, so ist damit eine normale Angriffsaktion gemeint und nicht eine Monsteraktion, die einen Angriff beinhaltet."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Einzigartige Monster",
          "Einzigartige Monster haben meistens zusätzliche Lebenskraft (angezeigt unten links im Portrait) und Sonderregeln (angezeigt während des Platzierens des Monsters und im Info-Bildschirm).",
          "Ein einzigartiges Monster kann als Teil einer Gruppe platziert werden. Es wird mit der Gruppe aktiviert, aber die Spieler müssen die App informieren, wenn das einzigartige Monster besiegt ist (selbst wenn andere Monster dieser Gruppe noch anwesend sind), indem sie den „Defeat Unique“ Knopf des Portraits auswählen.",
          "Das Auswählen des „Defeat Group“ Knopfes für eine Gruppe mit einem einzigartigen Monster entfernt die gesamte Gruppe, das einzigartige Monster eingeschlossen. Verwandte Themen: Akte, Aktivierung, Anführer, Angriffe, Attribute, Diener, Hauptmänner"
        ]
      }
    ],
    "related": [],
    "page": 27
  },
  {
    "id": "monsterleiste",
    "term": "MonsterLeiste",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Monsterleiste ist eine Komponente aus Wege zum Ruhm, die Informationen hinsichtlich jeder Monstergruppe, die sich gerade auf dem Spielplan befindet, wiedergibt.",
          "Wenn ein Monsterportrait auf dem Tracker ausgewählt wird, gibt es die folgenden Optionen wider: –– Monstergruppe besiegt: Sobald das letzte Monster aus einer Gruppe besiegt wurde, müssen die Spieler diese Option wählen, um die App darüber zu informieren. Dadurch wird die Gruppe aus der Leiste entfernt. –– Aktivierung erzwingen: Diese Option kann ausgewählt werden, wenn die App die Spieler auffordert, bestimmte Monster manuell zu aktivieren oder wenn Spieler vergessen haben, eine bestimmte Monstergruppe zu aktivieren. –– Information: Spieler wählen dies aus, um das Informationsfeld zu öffnen, welches Klarstellungen zu den Fertigkeiten eines Monsters gibt sowie alle notwendigen Informationen, wie das Monster während eines Angriffs Energie einsetzt"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Aktivierung",
      "Besiegt"
    ],
    "page": 28
  },
  {
    "id": "moral",
    "term": "Moral",
    "groups": [
      {
        "label": null,
        "points": [
          "Moral ist ein Konzept in Wege zum Ruhm, welches die Bereitschaft eines Helden darstellt, den überwältigenden Widrigkeiten eines Abenteuers zu trotzen.",
          "Moral beginnt normalerweise mit einem Wert in Höhe der Anzahl der Helden und verringert sich jedes Mal um 1, wenn ein Held niedergestreckt wird.",
          "Sobald ein Held niedergestreckt wird, müssen die Spieler die App darüber informieren, indem sie das Portrait dieses Helden und dann „Niedergestreckt“ wählen.",
          "Falls während eines Abenteuers die Moral auf 0 sinkt (durch einen Totenkopf auf dem Moralzähler angezeigt) und dann ein Held niedergestreckt wird, fliehen die Helden automatisch und haben das Abenteuer verloren und ein Held niedergestreckt wird, verlieren die Helden das Abenteuer.",
          "Die normale Methode, die Moral wieder zu verbessern, besteht für die Spieler darin, während der Kampagnenphase eine Stadt zu besuchen, aber auch andere Spieleffekte können die Moral stärken oder schwächen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Kampagnen"
    ],
    "page": 28
  },
  {
    "id": "nahkampfangriffe",
    "term": "Nahkampfangriffe",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Angriffe\" auf Seite 5."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 29
  },
  {
    "id": "niedergestreckt",
    "term": "Niedergestreckt",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Besiegt\" auf Seite 9."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 29
  },
  {
    "id": "offene-gruppen",
    "term": "Offene Gruppen",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Monster\" auf Seite 27."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 29
  },
  {
    "id": "overlord",
    "term": "Overlord",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Spieler übernimmt die Rolle des Overlords, eines bösen Antagonisten der Helden.",
          "Der Overlord kontrolliert alle Monster und den Großteil seines Zuges verbringt er damit, sie zu aktivieren.",
          "Er benutzt Overlordkarten um verschiedene Fähigkeiten auszuführen, wie z.B. Monster verstärken oder Fallen legen. Zusätzlich kann der Overlord Handlungs- und Gerüchtekarten benutzen, um seine Pläne voranzutreiben und die Helden zur Strecke zu bringen."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Die App übernimmt die Rolle des Overlords. Verwandte Themen: Gerüchtekarten, Handlungskarten, Overlordkarten, Spielzug"
        ]
      }
    ],
    "related": [],
    "page": 29
  },
  {
    "id": "overlordkarten",
    "term": "Overlordkarten",
    "groups": [
      {
        "label": null,
        "points": [
          "Das Overlorddeck besteht aus mindestens 15 Overlordkarten. Während eines einfachen Spiels oder zu Beginn einer Kampagne kann sich der Overlordspieler zwischen dem Deck Arsenal (aus dem Grundspiel) und dem Deck Arsenal II (aus der Erweiterung Labyrinth des Verderbens) entscheiden.",
          "Jede Overlordkarte besteht aus (von oben nach unten): Typ, Effekt und Auslösebedingungen, Klasse (links) und EP-Kosten (rechts).",
          "Der Typ der Overlordkarte (Ereignis, Falle oder Magie) hat selbst keinen Spieleffekt; andere Komponenten können sich jedoch darauf beziehen (wie z.B. andere Overlordkarten).",
          "In der epischen Variante oder einer Kampagne kann der Overlord sein Deck mit verbesserten Karten modifizieren (siehe \"Erfahrungspunkte ausgeben\" auf Seite 15). Die EP-Kosten stehen unten rechts auf der Overlordkarte. Basis Overlordkarten haben Kosten von 0 EP.",
          "Zusätzlich zu den Basis-Overlordkarten gibt es drei Kategorien von Overlordkarten: universelle, Overlordklassen- und Overlordbelohnungskarten (siehe unten)."
        ]
      },
      {
        "label": "Overlordkarten erhalten",
        "points": [
          "Während der Spielvorbereitungen zieht der Overlord so viele Overlordkarten, wie Helden im Spiel sind und nimmt sie auf die Hand. Overlordkarten werden vor den Heldenspielern geheim gehalten.",
          "Zu Beginn eines jeden seiner Züge zieht der Overlord eine Overlordkarte.",
          "Jedes Mal, wenn ein Held niedergestreckt wird, kann der Overlord eine zusätzliche Overlordkarte ziehen. Niedergestreckte Figuren, die als Helden gelten, wie z.B. Vertraute, bringen dem Overlord keine Overlordkarte."
        ]
      },
      {
        "label": "Overlordkarten spielen",
        "points": [
          "Es gibt keine Kosten, um eine Overlordkarte zu spielen und es gibt keine Beschränkung, wie viele Karten der Overlordspieler aus seiner Hand in jedem Spielzug spielen darf.",
          "Auf jeder Karte steht, wann sie gespielt werden darf.",
          "Zwei Overlordkarten mit demselben Namen –– die kein klar definiertes Ziel haben, können nicht als Antwort auf den gleichen Auslöser gespielt werden (z.B. \"Spiele diese Karte zu Beginn deines Spielzugs\"). –– die ein klar definiertes Ziel haben (Held, Monster, Monstergruppe usw), können nicht als Antwort auf den gleichen Auslöser auf dasselbe Ziel gespielt werden. Jedes einzelne Feld, das eine Figur betritt und jeder einzelne Angriff, den eine Figur durchführt wir als einzelne Auslösebedingung angesehen.",
          "Nachdem die Effekte der Karte abgehandelt wurden, wird sie offen auf den Ablagestapel gelegt.",
          "Der Overlord kann beliebig viele Karten auf der Hand halten. Wenn der Overlord die letzte Karte vom Overlorddeck zieht, mischt er einfach den Ablagestapel und legt ihn wieder als verdeckten Stapel bereit.",
          "Wenn der Overlord das gesamte Deck in seiner Hand hält, kann er keine weitere Overlordkarte ziehen. Die erste Karte, die der Overlord in solch einer Situation spielt, bildet sofort das neue Overlorddeck. Daher ist es beispielsweise möglich in einer Runde zweimal Dunkle Bezauberung (auf verschiedene Ziele) zu spielen."
        ]
      },
      {
        "label": "Universelle Karten",
        "points": [
          "Universelle Karten stellen verbesserte Overlordkarten dar, die ohne Einschränkungen, außer den EP-Kosten, gekauft werden können (siehe \"Erfahrungspunkte\" auf Seite 15). Aktuell verfügbare Universelle Karten: –– Grundspiel: 2 x Vorausplanen, 1 x Finstere Pläne, 1 x Dunkle Heilkraft –– Labyrinth des Verderbens: 2 x Dunkles Heilmittel –– Schatten von Nerekhall: 1 x Placebo, 1 x Solidarität, 1 x Vielseitigkeit, 1 x Neuanfang, 1 x Alternative"
        ]
      },
      {
        "label": "Overlordklassenkarten",
        "points": [
          "Overlordklassenkarten sind verbesserte Overlordkarten, die das Overlordklassendeck bilden.",
          "Stufe 1 Overlordklassenkarten (1 EP) können ohne Einschränkungen, außer den EP-Kosten, gekauft werden.",
          "Karten einer höheren Stufe können aber nur gekauft werden, wenn der Overlord schon eine bestimmte Anzahl an Overlordkarten derselben Klasse in seinem Deck hat: –– Um eine Karte der Stufe 2 (2 EP) zu kaufen, muss der Overlord aktuell mindestens 2 Karten der Stufe 1 dieser Klasse besitzen. –– Um eine Karte der Stufe 3 (3 EP) zu kaufen, muss der Overlord aktuell mindestens 3 Karten dieser Klasse (egal welcher Stufe) besitzen.",
          "Im Gegensatz zu Helden kann der Overlord sich Karten unterschiedlicher Klassen kaufen. Overlordkarten für \"Alle Klassen\" kann er sich immer kaufen.​ Aktuell verfügbare Overlordklassendecks: –– Heermeister (Grundspiel) –– Schurke (Grundspiel) –– Hexer (Grundspiel) –– Vergelter (Höhle des Lindwurms) –– Verseucher (Die Trollsümpfe) –– Schattenmagier (Schatten von Nerekhall) –– Verzauberer (Schloss Rabenfels) –– Gebieter (Schloss Rabenfels) –– Seelenbinder (Rostende Ketten)"
        ]
      },
      {
        "label": "Overlordbelohnungskarten",
        "points": [
          "Overlordbelohnungskarten werden erhalten, wenn spezifische Abenteuer gewonnen werden.",
          "Overlordbelohnungskarten können ganz normal ins Overlorddeck integriert werden"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Auslöser",
      "Erfahrungspunkte",
      "Kampagnen",
      "Spielzug"
    ],
    "page": 29
  },
  {
    "id": "personenmarker",
    "term": "Personenmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Personenmarker stellen verschiedene Personen dar, denen die Helden in den Abenteuern begegnen können. Das können z. B. Dorfbewohner, Wachleute oder andere wichtige Personen im Abenteuer sein.",
          "Alle Sonderregeln hinsichtlich dieser Marker sind der Abenteuerbeschreibung zu entnehmen."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 30
  },
  {
    "id": "platzieren-von-monstern",
    "term": "Platzieren von Monstern",
    "groups": [
      {
        "label": null,
        "points": [
          "Monster werden während der Spielvorbereitung, als Verstärkung oder durch andere Spieleffekte gemäß folgender Regeln, auf dem Spielplan platziert: –– Einzelne Monster oder Monstergruppen müssen so platziert werden, dass sie die Regeln aus der Abenteuerbeschreibung für ihre Platzierung, so weit möglich, erfüllen. –– Große Monster müssen, falls möglich, komplett auf dem Kartenteil stehen, welches in der Abenteuerbeschreibung beschrieben ist. –– Wenn Monster nicht wie beschrieben platziert werden können, weil nicht genug freie Felder vorhanden sind, werden sie stattdessen auf das nächste freie Feld gestellt. Wenn mehrere Monster auf das nächste freie Feld gestellt werden müssen, werden sie so platziert, dass alle Monster so nah wie möglich zu dem angegebenen Kartenteil stehen. –– Wenn ein Monster als Verstärkung an zwei Positionen ins Spiel kommen kann, aber eine dieser Positionen blockiert ist, kann der Overlord dennoch die blockierte Position wählen und das Monster auf das nächste leere Feld stellen, sofern nichts anderes angegeben ist."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Die App weist die Spieler auf zwei mögliche Arten an, wie Monster platziert werden: –– Ein Symbol oder Symbole der Monster werden auf der Karte an exakt der Stelle angezeigt, wo Elite-Monster (rote Kanten) und normale Monster platziert werden sollten. Wenn irgendeines der Felder nicht leer ist, wird das Monster stattdessen auf das nächste Feld gestellt. –– Ein spezifisches Feld ist mit einem pulsierenden Kreis hervorgehoben. Monster werden in dem hervorgehobenen Feld und so nah wie möglich darum herum platziert. EliteMonster werden zuerst platziert.",
          "Wenn ein einzelnes Monster platziert werden soll, gibt die App üblicherweise an, ob es ein Elite- oder ein normales Monster ist. Ansonsten wird ein Elite-Monster platziert, wenn es die Gruppengröße zulässt.",
          "Immer die Gruppengröße beachten, es sei denn die App gibt an, dies zu ignorieren. Verwandte Themen: Eingang und Ausgang, Verstärkung"
        ]
      }
    ],
    "related": [],
    "page": 30
  },
  {
    "id": "portale",
    "term": "Portale",
    "groups": [
      {
        "label": null,
        "points": [
          "Portale, die durch den weißen Aufgabenmarker dargestellt werden, tauchen nur in Die Anderswelt in Wege zum Ruhm auf.",
          "Jede Stage enthält ein Portal, das die Helden zum Verlassen dieser Stage und zum Betreten der nächsten Stage benutzen können.",
          "Portale können offen (weiße Seite) oder geschlossen (Fragezeichen) sein.",
          "Geschlossene Portale müssen geöffnet werden, bevor die Helden in der Lage sind, zur nächsten Stage zu gelangen. Dies wird üblicherweise durch das Erfüllen von Aufgaben erledigt. Spieler können sich immer das Log anschauen, um sich über die aktuelle Aufgabe zu informieren.",
          "Am Ende jeder Runde, wenn das Portal offen ist, erscheint eine Meldung in der App, die fragt, ob sich alle Helden benachbart zu dem Portal befinden und ob sie diese Stage verlassen möchten.",
          "Nachdem die Helden ein Portal benutzt haben, um die Stage zu verlassen, wird die gesamte Spielplan aufgeräumt und alle Helden, Vertraute, Monster, Spielplanteile und Marker werden beiseite gelegt. Tapferkeits-, Erleuchtungs- und Elixirmarker bleiben auf den Heldenbögen. Suchkarten werden nicht wieder ins Suchkartendeck gemischt. Als Ausnahme wird Leuchtfeuer neben Challara platziert, wenn die Helden auf den Spielplan einer neuen Stage platziert werden.",
          "Wenn es durch die App nicht ausdrücklich verlangt wird, entfernen die Helden weder Herz noch Erschöpfung oder irgendwelche Zustände zwischen den Stages. Fertigkeitskarten werden nicht wieder spielbereit gemacht und umgedrehte Heldenbögen werden nicht automatisch wieder auf die Vorderseite gedreht"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Aufgabenmarker",
      "Benachbart",
      "Runden",
      "Stürmen"
    ],
    "page": 30
  },
  {
    "id": "reichweite",
    "term": "Reichweite",
    "groups": [
      {
        "label": null,
        "points": [
          "Reichweite ist die kleinste Summe von benachbarten Feldern zwischen zwei Objekten. Sie wird durch Abzählen der Felder bestimmt.",
          "Während des Kampfes wird die komplette Reichweite des Angreifers durch die Summe der Zahlen auf den Angriffswürfeln und dem Hinzurechnen der Reichweitemodifikatoren durch Fähigkeiten gebildet.",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92."
        ]
      },
      {
        "label": "Schlüsselwörter in Verbindung mit Reichweite",
        "points": [
          "„Innerhalb von X Feldern“ oder „bis zu X Feldern“ bedeutet eine Reichweite von weniger oder gleich X.",
          "„X oder mehr Felder“ bedeutet, eine Reichweite gleich oder größer als X"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Angriffe",
      "Fehlschlag",
      "Felder zählen",
      "Sichten"
    ],
    "page": 31
  },
  {
    "id": "reise",
    "term": "Reise",
    "groups": [
      {
        "label": null,
        "points": [
          "Um das nächste Abenteuer der Kampagne anzugehen, müssen die Helden immer erst zum entsprechenden Ort reisen. Dazu wird die Landkarte auf der letzten Seite des Quest-Handbuchs des aktuellen Aktes verwendet.",
          "Obwohl es der Intuition widerspricht, wird der Reise-Schritt erst nach dem Abenteueraufbau durchgeführt, wenn die Helden schon auf der Karte stehen.",
          "Es gibt keinen Reiseschritt vor der Einführung und zwischen den Szenen eines Abenteuers.",
          "Die Helden beginnen die Reise immer von der selben Startposition (z.B. von Arhynn in der Die Schattenrune oder von Ruinen von Kethiri in Das Blutvermächtnis) und müssen den aufgezeichneten Wegen zum Ort ihres nächsten Abenteuers folgen. Die Reisesymbole auf den Abenteuerkarten werden von links nach rechts abgehandelt.",
          "Für jedes Reisesymbol, an dem die Helden anhalten, zieht der Overlord eine Reiseereigniskarte (oder Stadtereigniskarte in Schatten vo Nerekhall). Wenn die Karte für das aktuelle Reisesymbol kein Ereignis aufführt, wird die Karte einfach abgeworfen und die Helden setzen ihre Reise zum nächsten Symbol bzw. zum Ort des Abenteuers fort. Wenn es für das aktuelle Reisesymbol aber ein Ereignis gibt, wird es erst abgehandelt, bevor die Helden die Reise fortsetzen.",
          "Das Deck der Reiseereigniskarten besteht aus allen Reiseereigniskarten aus allen verfügbaren Erweiterungen. Das Deck der Stadtereigniskarten besteht aus allen Stadtereigniskarten aus allen verfügbaren Erweiterungen (im Moment nur Schatten von Nerekhall).",
          "Zustände, Schaden und Erschöpfung, welche die Helden während der Reise erleiden, behalten sie für das kommende Abenteuer.",
          "Reiseereignis- oder Stadtereigniskarten werden am Ende der Kampagnenphasewieder in das entsprechende Deck gemischt, außer, es ist etwas anderes angegeben (z.B. die Karte Herausforderung des einsamen Ritters)."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Das Reisen und die Reiseereignisse werden von der App verwaltet. Verwandte Themen: Abenteuer, Kampagnen, Klassen, Overlordkarten, Spielvorbereitungen, Szenen"
        ]
      }
    ],
    "related": [],
    "page": 31
  },
  {
    "id": "relikte",
    "term": "Relikte",
    "groups": [
      {
        "label": null,
        "points": [
          "Relikte sind besonders mächtige Gegenstände, die Spieler finden bzw. gewinnen können.",
          "Relikte gibt es oft als Abenteuerbelohnung und sie können nicht ge- und verkauft werden."
        ]
      },
      {
        "label": "Standardrelikte",
        "points": [
          "Standardreliktkarten haben zwei Seiten, eine mit der Heldenund die andere mit der Overlordversion.",
          "Die Heldenversion des Relikts funktioniert wie jede andere Gegenstandskarte (außer, dass sie nicht verkauft werden kann).",
          "Die Overlordversion eines Standardrelikts kann nur von einem Hauptmann verwendet und nicht anderweitig benutzt werden.",
          "Während des Aufbauschrittes einer Szene kann sich der Overlord entscheiden, welches Relikt jeder seiner Hauptmänner trägt. Ein Hauptmann trägt das ausgewählte Relikt dann in allen Szenen des Abenteuers. Sofern nichts anderes angegeben ist, kann jeder Hauptmann nur ein Relikt tragen (das Relikt Zorn der Sonne ist eine Ausnahme von dieser Regel).",
          "Der Overlord kann einem Hauptmann ein Relikt zuweisen, wenn die dazugehörige Hauptmannkarte in der Szene vorkommt (wie im Aufbau der Abenteuerbeschreibung angegeben), selbst wenn während des Aufbaus der Hauptmann selbst nicht auf den Spielplan gestellt wird oder wenn er überhaupt nicht auf den Spielplan gestellt wird. (z.B. Eliza Farrow in „Blut und Verrat“, Szene 2B).",
          "Wenn ein Hauptmann, der ein Relikt trägt, besiegt wird, werden die Fähigkeiten des Relikts für den Rest des Abenteuers ignoriert (selbst wenn dieser Hauptmann per Sonderregel als Verstärkung gewählt werden darf oder in einer anderen Szene dieses Abenteuers erneut auftaucht). Jedoch lässt der Overlord das Relikt vor sich liegen. In diesem Abenteuer kann dieser Hauptmann kein weiteres Relikt tragen. Wenn es die Regeln des Abenteuers explizit angeben, dass der Hauptmann nicht besiegt ist, wenn er so viele Herz erleidet wie es seiner Lebenskraft entspricht, bleibt das Relikt verfügbar.",
          "Ein Relikt, welches nicht von einem Hauptmann getragen wird, bleibt vor dem Overlord liegen, wird aber während dieses Abenteuers ignoriert."
        ]
      },
      {
        "label": "Monsterrelikte",
        "points": [
          "Monsterrelikte sind spezielle Relikte mit einem eigenen Symbol unten links auf der Reliktkarte.",
          "Monsterrelikte werden von Monstergruppen genauso getragen wie normale Relikte von Hauptmännern. Jede Monstergruppe kann nur ein Monsterrelikt tragen. Monsterrelikte haben keinen Effekt, wenn sie nicht von einer Monstergruppe getragen werden.",
          "Zu Beginn jeder Szene wählt der Overlord, welche Relikte (wenn überhaupt) jede seiner Monstergruppen trägt.",
          "Das Monsterrelikt bleibt bis zum Ende der Szene dort, selbst wenn alle Monster dieser Gruppe besiegt worden sind."
        ]
      },
      {
        "label": "Universelle Relikte",
        "points": [
          "Universelle Relikte sind spezielle Relikte mit einem eigenen Symbol unten links auf der Reliktkarte.",
          "Universelle Relikte werden nicht getragen. Wenn der Overlord ein universelles Relikt erhält, legt er es dauerhaft, für den Rest der Kampagne, vor sich ab.",
          "Der Overlord kann das Relikt nutzen, wie auf der Karte beschrieben"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Hauptmänner",
      "Marktkarten",
      "Spielvorbereitungen"
    ],
    "page": 31
  },
  {
    "id": "richtung",
    "term": "Richtung",
    "groups": [
      {
        "label": null,
        "points": [
          "Einige Fähigkeiten beziehen sich auf eine Richtung, in die sich eine Figur bezüglich einer anderen Figur bewegen muss.",
          "Zu...hin: Eine Figur versucht die Distanz zwischen sich und dem Ziel zu verringern. Während der Bewegung kann die Figur die Distanz erhöhen, solange sie nach der Bewegung näher am Ziel steht als hätte sie es nicht getan.",
          "Von...weg: Eine Figur versucht die Distanz zwischen sich und dem Ziel zu erhöhen. Während der Bewegung kann die Figur die Distanz verringern, solange sie nach der Bewegung weiter weg vom Ziel steht als hätte sie es nicht getan.",
          "Entferntest: Das Ziel ist die größte Anzahl an Feldern von der Figur entfernt.",
          "Nächste: Das Ziel ist die kleinste Anzahl an Feldern von der Figur entfernt"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Felder zählen"
    ],
    "page": 32
  },
  {
    "id": "rueckzug",
    "term": "Rückzug",
    "groups": [
      {
        "label": null,
        "points": [
          "Rückzug ist ein Begriff aus Wege zum Ruhm, der die Bewegung",
          "von Figuren beschreibt.",
          "Wenn eine Figur den Rückzug antritt, dann gibt sie alle verbleibenden Bewegungspunkte aus, um sich so weit wie möglich von der nächsten feindlichen Figur wegzubewegen.",
          "Wenn eine Figur keine Bewegungspunkte hat, kann sie sich nicht zurückziehen. Rückzug bedeutet nicht, dass eine Figur eine Aktion durchführt, um Bewegungspunkte zu bekommen.",
          "Während der Bewegung, kann die Figur die Distanz zur nächsten feindlichen Figur verkürzen, wenn sie dadurch am Ende weiter von dieser Figur entfernt steht"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Richtung",
      "Sichten",
      "Stürmen"
    ],
    "page": 32
  },
  {
    "id": "ruhm",
    "term": "Ruhm",
    "groups": [
      {
        "label": null,
        "points": [
          "Ruhm ist ein Konzept aus Wege zum Ruhm, dass das Ausmaß der Bekanntheit der Heldengruppe angibt, was unterhalb der Heldenportraits auf dem Logscreen angezeigt wird.",
          "Ruhm beeinflusst Gegenstände, die in der Stadt gekauft werden können.",
          "Ruhm kann bestimmte Optionen während Reisebegegnungen oder Abenteuern freischalten"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Marktkarten und Einkaufen"
    ],
    "page": 32
  },
  {
    "id": "runden",
    "term": "Runden",
    "groups": [
      {
        "label": null,
        "points": [
          "Eine Runde besteht aus den Zügen aller Spieler, beginnend mit einem der Helden. Jeder Spieler beendet seinen Zug, bevor der nächste seinen Zug beginnen kann.",
          "In jeder Runde können die Heldenspieler frei entscheiden, in welcher Reihenfolge sie ihre Züge ausführen möchten. Diese Reihenfolge kann sich während der Runde ändern und kann jede Runde anders sein.",
          "Nachdem jeder Heldenspieler einen Zug ausgeführt hat, ist der Overlord an der Reihe.",
          "Nach dem Zug des Overlords ist die Runde zu Ende und die nächste Runde beginnt wieder mit einem Heldenzug."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Die Züge der Helden und die Aktivierungen der Monstergruppen wechseln sich ab.",
          "Wenn ein Held seinen Zug beendet hat, wählt die App zufällig eine Monstergruppe aus und zeigt die Aktivierungsbefehle an.",
          "Nachdem alle Helden ihre Züge beendet haben und alle Monstergruppen aktiviert wurden, beginnt die nächste Runde. Verwandte Themen: Aktivierung, Helden, Spielzug"
        ]
      }
    ],
    "related": [],
    "page": 32
  },
  {
    "id": "schaden",
    "term": "Schaden",
    "groups": [
      {
        "label": null,
        "points": [
          "Schaden ist die Einheit der Lebenskraft, dargestellt durch den Herz -Marker. Angriffe, Fertigkeiten und Fähigkeiten können einer Figur Schaden zufügen.",
          "Das Maximum an Schaden, das eine Figur erleiden kann, ist gleich seiner Lebenskraft.",
          "Sobald eine Figur mindestens so viel Schaden erlitten hat, wie ihre Lebenskraft beträgt, ist sie besiegt. Schaden, der über die Lebenskraft hinausgeht, wird ignoriert"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Besiegt",
      "Lebenskraft"
    ],
    "page": 32
  },
  {
    "id": "schicksal",
    "term": "Schicksal",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Handlungskarten\" auf Seite 21."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 32
  },
  {
    "id": "schlammiges-gelaende",
    "term": "Schlammiges Gelände",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Terrain\" auf Seite 38."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 32
  },
  {
    "id": "schwierigkeit",
    "term": "Schwierigkeit",
    "groups": [
      {
        "label": null,
        "points": [
          "Das Anpassen der Schwierigkeit ist nur während der Spielvorbereitungen zum Kampagnenspiel für Wege zum Ruhm und Die Anderswelt verfügbar und kann später im Spiel nicht mehr geändert werden."
        ]
      },
      {
        "label": "Normal",
        "points": [
          "Im Kampagnenspiel erhöhen sich Perils allmählich und die Helden starten mit 50 Gold pro Held.",
          "In Die Anderswelt starten die Helden mit 1 EP, heilen eine kleine Menge an Herz, Zustände werden zwischen den Ebenen abgelegt und die Helden haben die normale Zeit, um die Ebene zu absolvieren."
        ]
      },
      {
        "label": "Hart",
        "points": [
          "Im Kampagnenspiel erhöhen sich Perils schneller und die Helden starten ohne Gold.",
          "In Die Anderswelt bekommen die Helden zu Beginn des Spiels keine EP. Weiterhin bekommen die Helden zwischen den Ebenen keine Herz -Erholung, Zustände werden nicht abgelegt und die Zeit, um die Ebene zu absolvieren, ist reduziert"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Personenmarker",
      "Zustände"
    ],
    "page": 32
  },
  {
    "id": "sichten",
    "term": "Sichten",
    "groups": [
      {
        "label": null,
        "points": [
          "Sichten ist ein Begriff, der die Bewegung von Figuren in Wege zum Ruhm beschreibt",
          "Beim Sichten macht eine Figur eine Bewegungsaktion und bewegt sich zum nächsten Feld, welches sich innerhalb von 3 Feldern zum Ziel befindet und dazu Sichtlinie besitzt. Sie stoppt, wenn sie dieses Feld erreicht oder wenn sie keine Bewegungspunkte mehr hat.",
          "Wenn ein Monster nicht genug Bewegungspunkte hat, um auf ein Feld innerhalb von 3 Feldern und Sichtlinie zu kommen, beendet es die Bewegung auf einem Feld, welches nächstmöglich zum Ziel ist, aber immer noch in Sichtlinie (wenn möglich)"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Richtung",
      "Sichten",
      "Stürmen"
    ],
    "page": 33
  },
  {
    "id": "sichtlinie",
    "term": "Sichtlinie",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Feld ist dann in der Sichtlinie einer Figur, wenn eine ununterbrochene gerade Linie von einer beliebigen (zugewandten) Ecke des Feldes der Figur zu einer beliebigen (zugewandten) Ecke des Zielfeldes gezogen werden kann.",
          "Ein Feld hat immer Sichtlinie zu sich selbst. Zwischen zwei benachbarten Feldern besteht immer Sichtlinie (Ausnahme: Dickicht).",
          "Sichtlinie hat keine Beschränkungen hinsichtlich Reichweite.",
          "Siehe \"3.4. Sichtlinienbeispiele\" auf Seite 91 für visuelle Beispiele der Sichtlinienbestimmung)."
        ]
      },
      {
        "label": "Sichtlinie ist gegeben",
        "points": [
          "wenn die gezogene Linie die Ecke eines blockierten Feldes oder den Rand eines Spielplanteils berührt."
        ]
      },
      {
        "label": "Sichtlinie ist blockiert",
        "points": [
          "wenn die gezogene Linie durch blockierte Felder, den Rand eines Spielplanteils, eine Tür, eine alte Mauer oder ein Dickicht geht. wenn die gezogene Linie entlang einer Kante eines besetzten",
          "Feldes oder des Kartenrandes verläuft.",
          "Die Sichtlinie kann nicht durch Felder gezogen werden, die die Figuren besetzen, von denen oder zu denen Sichtlinie gezogen wird."
        ]
      },
      {
        "label": "Sichtlinie ist gegenseitig",
        "points": [
          "Sichtlinie ist gegenseitig. Wenn Feld A Sichtlinie zu Feld B hat, dann hat auch Feld B Sichtlinie zu Feld A. Jedoch können bestimmte Fähigkeiten dieses Prinzip verletzen. Details sind bei der entsprechenden Fähigkeit angegeben. Beispielsweise Adlerauge (Fähigkeit des Waldläufers), Geschmeidig (Fähigkeit des Knochenschreckens) und Seherin Kels Heldenfähigkeit."
        ]
      },
      {
        "label": "Große Figuren",
        "points": [
          "Die Sichtlinie zu und von großen Figuren wird genauso bestimmt wie bei kleinen Figuren. Sie kann von und zu jedem Feld, welches eine große Figur einnimmt, gezogen werden, aber nicht durch die Figur."
        ]
      },
      {
        "label": "Gruben",
        "points": [
          "Figuren auf Grubenfeldern haben nur Sichtlinie zu benachbarten Feldern (inklusive benachbarter Grubenfelder).",
          "Ebenso haben nur Figuren, die sich benachbart zu einem Grubenfeld befinden, Sichtlinie zu Figuren auf einem Grubenfeld.",
          "Figuren auf einem Grubenfeld blockieren nicht die Sichtlinie für Figuren, die sich außerhalb von Grubenfeldern befinden"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Benachbart",
      "Blockierte Felder",
      "Grosse Figuren",
      "Klassen",
      "Terrain"
    ],
    "page": 33
  },
  {
    "id": "sonnensteinmarker",
    "term": "Sonnensteinmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Sonnenstein ist ein mächtiges Relikt, das nur in der Erweiterung Labyrinth des Verderbens vorkommt. Der Sonnenstein wird durch einen Marker und die passende Reliktkarte dargestellt.",
          "Wird der Held, der den Sonnenstein ausgerüstet hat, besiegt, legt er den Marker auf sein Feld und die Reliktkarte „Sonnenstein“ beiseite.",
          "Als Aktion kann ein Held oder Monster den Sonnenstein in demselben oder von einem benachbarten Feld aufnehmen. –– Im Falle eines Helden, wird der Marker auf den Heldenbogen gelegt und der Held nimmt sich die Reliktkarte. –– Im Falle eines Monsters, wird der Sonnensteinmarker unter die Basis des Monsters gelegt. Wird ein Monster, das den Sonnenstein trägt, besiegt, wird der Sonnensteinmarker auf das Feld des Monsters gelegt (bei großen Monstern nach Wahl des Overlords).",
          "Wenn am Ende einer Szene ein Monster den Sonnenstein besitzt, kommt der Marker zurück in die Schachtel, und der Overlord erhält die Reliktkarte „Zorn der Sonne“.",
          "Wenn die Szene endet, der Sonnensteinmarker fallen gelassen wurde und weder ein Held noch ein Monster den Marker trägt, gewinnen die Helden das Relikt zurück.",
          "Jeder Hauptmann kann das Relikt „Zorn der Sonne“ zusätzlich zu anderen Relikten tragen. Dies ist eine Ausnahme zur üblichen Regel für Relikte, nach der jeder Hauptmann nur 1 Relikt gleichzeitig tragen kann.",
          "Wird der Hauptmann, der das Relikt „Zorn der Sonne“ trägt, besiegt, lässt er es nicht fallen"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Besiegt",
      "Hauptmänner",
      "Relikte"
    ],
    "page": 33
  },
  {
    "id": "speichern-und-laden",
    "term": "Speichern und Laden",
    "groups": [
      {
        "label": null,
        "points": [
          "In Wege zum Ruhm speichert die App automatisch an",
          "mehreren Schlüsselpositionen während des Spiels: –– Zu Beginn jedes Abenteuers –– Zu Beginn jeder Runde des Abenteuers –– Am Ende jedes Abenteuers –– Jedes Mal, wenn man die Stadt verlässt",
          "Die App speichert nicht den Status von physikalischen Komponenten; wenn die Spieler mitten im Abenteuer entscheiden, aufzuhören, dann müssen sie diese Informationen selbst aufschreiben"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Runden"
    ],
    "page": 33
  },
  {
    "id": "spielbereit-machen",
    "term": "Spielbereit machen",
    "groups": [
      {
        "label": null,
        "points": [
          "Wenn eine erschöpfte Karte spielbereit gemacht wird, wird sie wieder senkrecht ausgerichtet.",
          "Karten werden während Schritt 1.II des aktiven Spielers spielbereit gemacht (siehe \"Heldenspielzug\" auf Seite 36) oder durch Spieleffekte.",
          "Umgedrehte Karten (z.B. Suchkarten oder Heldenbögen) werden nicht wieder spielbereit gemacht"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Erschöpfen",
      "Spielzug"
    ],
    "page": 34
  },
  {
    "id": "spielplan",
    "term": "Spielplan",
    "groups": [
      {
        "label": "Spielpläne",
        "points": [
          "Spielpläne zeigen den Aufbau eines vorgegebenen Abenteuers und sind damit ein integraler Bestandteil der Abenteuerbeschreibung.",
          "Spielpläne bestehen aus einer Kombination von Spielplanteilen, Endstücken, Verlängerungen, Übergängen, Markern, Türen und weiteren Spielkomponenten.",
          "Spielplanteile sind einzelne, große puzzleartige Kartenstücke, die zusammengesetzt werden können und die die Gegend in einem vorgegebenen Abenteuer darstellen.",
          "Große Spielplanteile besitzen zur besseren Identifikation einen einzigartigen Code. Jeder Code besteht aus einer Nummer und einem Buchstaben, der die Voder- bzw. Rückseite des Spielplanteils angibt.",
          "Ein Spielplanteil besteht aus mehreren quadratischen Feldern. Einige Felder können spezielle Regeln haben, abhängig von ihrem Aussehen (siehe \"Terrain\" auf Seite 38).",
          "Grenzen oder Ränder der Spielpläne besitzen schwarze Linien entlang der Grenzen des Spielplanteils. Wände sind schwarze Linien zwischen Feldern des Spielplanteiles. Beide blockieren sowohl die Bewegung als auch die Sichtlinie.",
          "Eingänge und Ausgänge besitzen spezielle Regeln hinsichtlich der Kartengrenzen (siehe \"Eingang und Ausgang\" auf Seite 13).",
          "Abenteuerbeschreibungen können die Namen von bestimmten Spielplanteilen enthalten um Gebiete von besonderer Bedeutung für das Abenteuer anzuzeigen (z.B. Lavahöhle oder Wilder Garten). Endstücke und Verlängerungen gehören nicht zu diesen Gebieten. 1 Spielplanteil 4 Kartengrenze 7 Endstück 2 Code 5 Eingang 8 Übergang 3 Terrainfeld 6 Verlängerung"
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Abenteuer beginnen nicht mit einer vollständig bekannten Spielplan. Wenn Spieler den Spielplan erkunden und Türen öffnen, werden weitere Abenteuerregeln, Spielplanteile, Marker und Monster enthüllt. Kampagnenkarten",
          "Die Rückseite des Quest-Handbuches zeigt üblicherweise eine Karte des Landes, in dem die Kampagne oder Mini-Kampagne spielt.",
          "Die Abenteuerorte auf der Karte sind mit Wegen verbunden, die die Helden zum Reisen benutzen. Jeder Weg hat eine Reihe von Symbolen, die anzeigen, was für überraschende Ereignisse auf diesem Weg eventuell auftreten können (siehe \"Reise\" auf Seite 31)."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Nachdem ein Abenteuer der Kampagne abgeschlossen ist, werden die Spieler zur Kampagnenkarte transferiert.",
          "Die Abenteuerorte auf der Karte sind mit Wegen verbunden, die die Helden zum Reisen benutzen. Jeder Weg hat eine Reihe von Symbolen, die anzeigen, was für überraschende Ereignisse auf diesem Weg eventuell auftreten können (siehe \"Reise\" auf Seite 31). Verwandte Themen: Abenteuer, Eingang und Ausgang, Klassenkarten, Kampagnen, Reise"
        ]
      }
    ],
    "related": [],
    "page": 34
  },
  {
    "id": "spielplan-verlassen",
    "term": "Spielplan verlassen",
    "groups": [
      {
        "label": null,
        "points": [
          "Bestimmte Effekte, Fähigkeiten oder Sonderregeln in Abenteuern können es den Helden erlauben, den Spielplan zu verlassen (z.B. die Helden verlassen freiwillig den Spielplan durch den Ausgang, Helden werden besiegt oder Tomble Burrowells Heldentat).",
          "Helden, die den Spielplan verlassen haben, dürfen keine Fähigkeit benutzen, die eine aktive Entscheidung des Spielers voraussetzt, üblicherweise angezeigt durch „Benutze diese Karte“, „Erschöpfe diese Karte“ oder durch Erschöpfung -Kosten.",
          "Andere Figuren können von Helden profitieren, die den Spielplan verlassen haben. Diese Fähigkeiten dürfen den Helden, der den Spielplan verlassen hat, nicht dazu zwingen, \"diese Karte zu benutzen\", \"diese Karte zu erschöpfen\", Erschöpfung zu bezahlen und dürfen nicht bedeuten, dass der Held auf der Karte ist"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Besiegt",
      "Eingang und Ausgang",
      "Spielplan"
    ],
    "page": 34
  },
  {
    "id": "spielplanteil",
    "term": "Spielplanteil",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Spielplan\" auf Seite 34."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 35
  },
  {
    "id": "spielvorbereitungen",
    "term": "Spielvorbereitungen",
    "groups": [
      {
        "label": "Allgemeine Spielvorbereitungen",
        "points": [
          "1. Abenteuer aussuchen: Die Spieler suchen sich ein Abenteuer aus den verfügbaren Abenteuern aus. 2. Spielplan zusammensetzen: Die Spieler setzen den Spielplan von Szene 1 des gewählten Abenteuers anhand der Abenteuerbeschreibung zusammen. 3. Rollen wählen: Ein Spieler übernimmt die Rolle des Overlords und die anderen Spieler übernehmen einen (oder mehrere) Helden. 4. Marker bereitlegen: Alle Schadens-, Erschöpfungs-, Heldenund Zustandsmarker werden in getrennten Haufen bereit gelegt. 5. Such- und Zustandskarten bereitlegen: Die 12 Suchkarten des Grundspiels werden gemischt. Wenn mit Geheimkammern gespielt wird, wird die „Nichts“ Suchkarte durch eine „Geheimgang“ Suchkarte ersetzt. Die Zustandskarten werden nach Typ sortiert in einzelnen Stapeln bereit gelegt. 6. Jeder Held nimmt sich eine Aktivierungskarte und die zugehörigen Heldenmarker. 7. Helden aussuchen: Jeder Heldenspieler nimmt sich einen Heldenbogen und die passende Figur. 8. Klassen aussuchen: Jeder Heldenspieler nimmt sich ein Klassendeck, dessen Symbol zum Archetypsymbol seines Heldenbogens passt. 9. Fertigkeiten aussuchen: In der epischen Variante können jetzt die EP, die die Helden zu Beginn erhalten haben, ausgegeben werden, um neuer Fertigkeiten zu kaufen. 10. Helden aufstellen: Jeder Spieler stellt seinen Helden auf den Spielplan, wie im Quest-Handbuch vorgegeben. Die Helden werden vor dem Gefährten platziert. 11. Overlorddeck wählen: Der Overlord kann zwischen Arsenal I und Arsenal II wählen. Die beiden Stapel dürfen nicht gemischt werden. 12. Monster aussuchen: Die Quest-Handbücher geben für das gewählte Abenteuer an, welche Monster und Hauptmänner dem Overlord zur Verfügung stehen. Akt-I Monster für Einsteiger und Fortgeschrittene im epischen Spiel; Akt-II Monster für Experten im epischen Spiel. 13. Aufbau des Abenteuers: Der Overlord führt die Schritte aus, die beim gewählten Abenteuer unter „Aufbau“ stehen. 14. Overlorddeck zusammenstellen: Der Overlord mischt mindestens 15 Karten seiner Overlordkarten zu seinem Overlordstapel. Dies wird im Geheimen getan, damit die Helden nicht wissen, welche Karten der Overlord entfernt hat. 15. Overlordkarten ziehen: Der Overlord zieht so viele Overlordkarten, wie Helden im Spiel sind, und nimmt sie auf die Hand."
        ]
      },
      {
        "label": "Spielvorbereitungen für das Kampagnenspiel",
        "points": [
          "Die Spielvorbereitungen für das Kampagnenspiel sind identisch mit den allgemeinen Spielvorbereitungen mit folgenden Ausnahmen:",
          "Die Rolle des Overlords und der Helden bleibt für die gesamte Kampagne gleich.",
          "Eine neue Kampagne beginnt immer auf der Stufe Einsteiger.",
          "Der Overlord kann sich ein Handlungsdeck aussuchen, das er während der Kampagne benutzt.",
          "Die Stapel der Reiseereignis-, Stadtereignis-, Markt- sowie Gerüchtekarten besteht aus allen Karten aller verfügbaren Erweiterungen.",
          "Monster-, Hauptmann- und Marktkarten werden in zwei Stapel, einen für Akt I und einen für Akt II, aufgeteilt."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "1. Nachschub vorbereiten: Würfel, Zustands- und Suchkarten, Lebenskraft-, Ausdauer- und Zustandsmarker. Die „Nichts“, „Geheimgang“- und „Schatztruhe“-Suchkarte entfernen. 2. Weitere Komponenten vorbereiten: Monster- und Anführerfiguren, Hauptmänner, Dorfbewohner, Ziel- und Suchmarker; Anführer-, Hauptmänner-, Monster-, Marktund Reliktkarten. Kartenteile und Türen. 3. Startet die App und wählt den Spieltyp 4. Abenteuergruppe zusammenstellen: Die Helden und die Klassen werden gewählt (siehe Allgemeine Spielvorbereitungen 7 & 8). Verwandte Themen: Abenteuer, Akte, Gerüchtekarten, Handlungskarten, Helden, Kampagnen, Klassenkarten, Marktkarten und Einkaufen, Overlordkarten, Reise, Suchkarten, Szenen, Zustände"
        ]
      }
    ],
    "related": [],
    "page": 35
  },
  {
    "id": "spielzug",
    "term": "Spielzug",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Spielzug ist die Zeit, in der der aktive Spieler die meisten seiner Spielaktionen durchgeführt.",
          "Ein Spielzug besteht aus allen Schritten, die auf den Übersichtskarten für den Helden- und den Overlordspielzug abgedruckt sind.",
          "Ein Spieler kann seinen Spielzug nicht freiwillig auslassen."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 35
  },
  {
    "id": "heldenspielzug",
    "term": "Heldenspielzug",
    "groups": [
      {
        "label": "1.",
        "points": [
          "Beginn des Spielzuges I. Fertigkeiten zum Beginn des Spielzuges",
          "Alle Effekte, die den aktiven Helden betreffen und „bis zum Beginn deines nächsten Zuges“ andauern, verlieren jetzt ihre Wirkung.",
          "Der Held kann jetzt Fähigkeiten einsetzen, die „zu Beginn deines Zuges“ eingesetzt werden können. II. Karten auffrischen",
          "Der Heldenspieler muss erschöpfte Karten spielbereit machen."
        ]
      },
      {
        "label": "2.",
        "points": [
          "Gegenstände ausrüsten",
          "Der Held kann sich mit so vielen Gegenständen ausrüsten, wie er möchte (Ausrüstungsbeschränkungen beachten!). Alle Gegenstände, die nicht ausgerüstet sind, werden auf die Rückseite gedreht."
        ]
      },
      {
        "label": "3.",
        "points": [
          "Aktionen ausführen I. Vertraute aktivieren (optional)",
          "Jeder Vertraute kann jetzt aktiviert werden (Vertraute desselben Typs werden als Gruppe aktiviert).",
          "Jeder Vertraute kann 1 Bewegungsaktion und 1 Aktion, die auf seiner Karte steht, durchführen (sofern vorhanden; für Details siehe \"Vertraute\" auf Seite 42).",
          "Andere Aktionen, außer Bewegungsaktionen, können nicht freiwillig ohne einen speziellen Auslöser unterbrochen werden.",
          "„Zu Beginn deines Zuges“ und „am Ende deines Zuges“ Effekte von Zuständen, die der Vertraute hat, werden zu Beginn und zum Ende der Aktivierung jedes Vertrauten ausgelöst. II. Helden Aktionen durchführen",
          "Der Held kann bis zu zwei Standardaktionen ausführen.",
          "„Während deines Spielzuges“ Effekte und Fähigkeiten ohne spezifischen Zeitpunkt können ausgelöst werden.",
          "Andere Aktionen außer Bewegungsaktionen können nicht freiwillig durch Fähigkeiten ohne einen speziellen Auslöser unterbrochen werden. III. Vertraute aktivieren (optional)",
          "Wie in 3.I, aber nur Vertraute, die in diesem Spielzug noch nicht aktiviert wurden."
        ]
      },
      {
        "label": "4.",
        "points": [
          "Ende des Spielzuges",
          "„Am Ende deines Zuges“ Effekte werden ausgelöst.",
          "Der Held dreht seine Aktivierungskarte um."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Helden wählen den „Zug Beenden“ Schalter anstatt ihre Übersichtskarte am Ende ihres Zuges umzudrehen."
        ]
      }
    ],
    "related": [],
    "page": 36
  },
  {
    "id": "overlordspielzug",
    "term": "Overlordspielzug",
    "groups": [
      {
        "label": "1.",
        "points": [
          "Beginn des Spielzuges I. 1 Overlordkarte ziehen und Beginn des ZugesFähigkeiten",
          "Der Overlord zieht 1 Overlordkarte.",
          "Der Overlord kann jetzt Fähigkeiten einsetzen, die „zu Beginn deines Zuges“ eingesetzt werden können. II. Karten auffrischen",
          "Der Overlordspieler muss erschöpfte Karten spielbereit machen."
        ]
      },
      {
        "label": "2.",
        "points": [
          "Monster aktivieren I. Monstergruppe auswählen II. Die Monster einer Gruppe aktivieren",
          "Jedes Monster wird aktiviert und kann bis zu zwei Aktionen ausführen. Monster können üblicherweise nur ein Mal pro Aktivierung angreifen.",
          "Andere Aktionen außer Bewegungsaktionen können nicht freiwillig durch Fähigkeiten ohne einen speziellen Auslöser unterbrochen werden.",
          "„Wenn eine Monstergruppe aktiviert wird“ Effekte werden ausgelöst.",
          "„Während deines Spielzuges“ oder „wenn ein Monster aktiviert wird“ Effekte können vor oder nach einer Aktion oder während einer Bewegungsaktion ausgelöst werden.",
          "„Zu Beginn deines Zuges“ und „am Ende deines Zuges“ Effekte von Zuständen, die das Monster hat, werden zu Beginn und zum Ende der Aktivierung jedes Monsters ausgelöst. III. Wiederhole Schritt I und II für jede verbleibende Monstergruppe"
        ]
      },
      {
        "label": "3.",
        "points": [
          "Ende der Runde",
          "„Am Ende des Spielzuges“ und „am Ende der Runde“ Effekte werden ausgelöst.",
          "Der Overlordspieler dreht seine Übersichtskarte um."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "In Wege zum Ruhm ersetzen die Monsteraktivierungen den Spielzug des Overlords. Monster Aktivierung I. Aktivierung einer Monstergruppe",
          "Die App bestimmt, welches Monster aktiviert wird.",
          "Monster können bis zu zwei Aktionen aus der Aktionenliste ausführen. Die meisten Monster können nur eine Aktion durchführen, die einen Angriff beinhaltet.",
          "„Zu Beginn deines Zuges“ und „am Ende deines Zuges“ Effekte von Zuständen, die das Monster hat, werden zu Beginn und zum Ende der Aktivierung jedes Monsters ausgelöst.",
          "„Einmal pro Spielzug“ Effekte werden nicht ausgelöst, da eine Monsteraktivierung kein Overlordspielzug ist. II. Wiederhole Schritt I für jedes verbleibende Monster dieser Gruppe III. Der Schalter unter dem Aktivierungsfenster wird gedrückt",
          "„Vor dem Spielzug“ oder „nach dem Spielzug“ sind nicht Teil des Spielzugs (z.B. ist die Aktivierung eines Gefährten nicht Teil des Heldenspielzugs).",
          "Siehe Box auf Seite 36 für Details des Helden- und OverlordSpielzuges –– In dieser Box meint das Wort „Auslöser“, dass die Auslösebedingungen erfüllt sind und ein Effekt automatisch oder durch den Spieler abgehandelt wird (abhängig von der Beschreibung des Effekts). –– Beachtet, dass die Schritte 3.I, 3.II und 3.III des Heldenspielzugs nicht in den offiziellen Regeln stehen und nur eingefügt worden sind, um die Reihenfolge bei Aktivierung von Vertrauten zu klären. Verwandte Themen: Runden"
        ]
      }
    ],
    "related": [],
    "page": 36
  },
  {
    "id": "stadtaktionen",
    "term": "Stadtaktionen",
    "groups": [
      {
        "label": null,
        "points": [
          "Stadtaktionen sind nur im Kampagnenspiel von Wege zum",
          "Ruhm verfügbar und können durchgeführt werden, wenn die Helden sich in einer Stadt aufhalten.",
          "Jede Stadt besitzt eine einzigartige Stadtaktion"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Erfahrungspunkte",
      "Woche"
    ],
    "page": 37
  },
  {
    "id": "stadtereigniskarten",
    "term": "Stadtereigniskarten",
    "groups": [
      {
        "label": null,
        "points": [
          "Stadtereigniskarten ersetzen in der Schatten von Nerekhall Kampagne die Reiseereigniskarten.",
          "Für Stadtereigniskarten gelten dieselben Regeln wie für Reiseereigniskarten.",
          "Wenn ein Abenteuer auf einer Abenteuerkarte gewählt wird, während die Schatten von Nerekhall Kampagne gespielt wird, werden Reiseereigniskarten für diesen Reiseschritt benutzt.",
          "Stadtereigniskarten dürfen nicht mit Reiseereigniskarten gemischt werden"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Kampagnen",
      "Reise"
    ],
    "page": 37
  },
  {
    "id": "stuermen",
    "term": "Stürmen",
    "groups": [
      {
        "label": null,
        "points": [
          "Stürmen ist ein Begriff, der benutzt wird, um die Bewegung von Figuren in Wege zum Ruhm zu beschreiben.",
          "Wenn eine Figur stürmt, führt sie eine Bewegungsaktion aus, bewegt sich auf das Ziel zu und stoppt, wenn sie zu dem Ziel benachbart ist oder ihr die Bewegungspunkte ausgehen."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn sich ein Monster nicht bewegen würde, wenn es diese Aktion ausführt, so wird diese Aktion übersprungen. Verwandte Themen: Akte, Bewegung, Richtung"
        ]
      }
    ],
    "related": [],
    "page": 37
  },
  {
    "id": "suchen",
    "term": "Suchen",
    "groups": [
      {
        "label": null,
        "points": [
          "Helden benutzen eine Suchaktion um Suchmarker oder Herausforderungsmarker zu untersuchen oder zusätzliche Spieleffekte auszulösen, die im Quest-Handbuch beschrieben sind."
        ]
      },
      {
        "label": "Suchmarker",
        "points": [
          "Suchmarker markieren Felder auf dem Spielplan, auf denen Helden nach Gegenständen, Tränken und Questgegenständen suchen können.",
          "Wenn der besondere Suchmarker in einem Abenteuer benutzt wird (siehe Bild rechts), legt ihn der Overlord verdeckt auf eines der mit „*“ markierten Felder des Spielplans, sofern nicht anderes angegeben ist.",
          "Ein Suchmarker wird nach einer erfolgreichen Suchaktion umgedreht und abgelegt. Wenn es nicht der besondere Suchmarker ist, zieht der Spieler die oberste Karte vom Suchstapel.",
          "Wenn der Held den besonderen Suchmarker aufdeckt, zieht er keine Suchkarte, sondern findet etwas, was im QuestHandbuch beschrieben steht.",
          "Herausforderungsmarker (siehe \"Geheimkammern\" auf Seite 18) gelten nicht als Suchmarker."
        ]
      },
      {
        "label": "Suchaktion",
        "points": [
          "Ein Held kann eine Suchaktion durchführen, wenn er auf einem Feld oder auf einem Nachbarfeld von einem Objekt steht, dass durchsucht werden kann.",
          "Wenn ein Held während einer Suchaktion besiegt wird, ist die Suchaktion dennoch abgeschlossen und der Held erhält die Suchkarte, nachdem er besiegt wurde.",
          "Effekte von Fähigkeiten, die es einem Helden erlauben zu „suchen“, werden als Suchaktion betrachtet, selbst wenn der Effekt ohne das Ausführen einer Aktion ausgelöst wird wurden (z.B. Thaiden Nebelspitzes Heldenfähigkeit)."
        ]
      },
      {
        "label": "Suchkarten",
        "points": [
          "Der Suchkartenstapel wird während der Spielvorbereitungen",
          "zusammengestellt. Wird mit Geheinmkammern gespielt, wird die „Nichts“ Suchkarte durch eine „Geheimgang“ Suchkarte ersetzt.",
          "Der Suchkartenstapel wird zwischen den Szenen eines Abenteuers oder wenn er verbraucht ist nicht gemischt.",
          "Suchkarten, die einen Gegenstand zeigen, können nur einmal benutzt werden, folgen aber den anderen Regeln von Gegenständen. Diese Suchkarten können wie angezeigt benutzt werden. Anschließend dreht der Spieler sie auf die Rückseite, lässt sie aber vor sich liegen.",
          "Suchkarten müssen zum Benutzen nicht ausgerüstet werden.",
          "Im Kampagnenspiel werden die Helden mit dem Betrag an Gold belohnt, der unten rechts auf der Suchkarte steht (auch wenn die Suchkarte bereits benutzt wurde). Für Details siehe \"Marktkarten und Einkaufen\" auf Seite 27."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Während der Spievorbereitungen werden die „Nichts“, die „Geheimgang“ und die \"Schatztruhe“ Suchkarten aus dem Suchkartenstapel entfernt.",
          "Die App informiert die Spieler über das Ergebnis der Suche. Verwandte Themen: Abenteuer, Akte, Benachbart, Geheimkammern, Kampagnen, Marktkarten, Szenen"
        ]
      }
    ],
    "related": [],
    "page": 37
  },
  {
    "id": "szenen",
    "term": "Szenen",
    "groups": [
      {
        "label": null,
        "points": [
          "Eine Szene ist ein Teil eines Abenteuers mit eigenem Spielplan, eigenen Regeln und Zielen. Wenn die Spieler von einer Szene eines Abenteuers zu einer anderen wechseln, führen sie folgende Schritte aus:",
          "Die Helden behalten alle bereits erlittenen Schadenspunkte, Zustände, Heldenmarker auf Klassenkarten, Tapferkeits-, Elixier und Erleuchtungsmarker, die sie am Ende der vorangegangenen Szene hatten.",
          "Die Helden gewinnen ihre komplette Ausdauer zurück.",
          "Jeder niedergestreckte Held kann eine kostenlose Aktion Aufrappeln ausführen und gewinnt dann seine komplette Erschöpfung zurück.",
          "Die Heldenspieler drehen die Heldenbögen wieder auf die Vorderseite.",
          "Alle Suchkarten bleiben vor den Helden liegen, wie sie sind (Vorder- oder Rückseite).",
          "Die Helden entfernen alle Liedmarker von ihren Klassenkarten.",
          "Der Overlord behält seine Handkarten. Während des Übergangs von einer Szene eines Abenteuers zu einer anderen zieht der Overlord keine Overlordkarten entsprechend der Anzahl der Helden."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Alle Abenteuer besitzen nur eine einzige Szene. Verwandte Themen: Abenteuer, Spielvorbereitungen"
        ]
      }
    ],
    "related": [],
    "page": 37
  },
  {
    "id": "tapferkeitsmarker",
    "term": "Tapferkeitsmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Klasse des Champions hat mehrere Fertigkeiten, die Tapferkeitsmarker verwenden. Die Anzahl der Tapferkeitsmarker ist auf die mitgelieferten Marker (12 Stück) beschränkt.",
          "Jedes Mal, wenn ein Spieler einen Tapferkeitsmarker erhält, nimmt er sich einen Marker aus dem Vorrat und legt ihn auf seinen Heldenbogen.",
          "Jedes Mal, wenn ein Spieler einen Tapferkeitsmarker ausgibt (meist um einen Effekt einer Champion-Fertigkeit auszulösen), legt er ihn von seinem Heldenbogen zurück in den Vorrat.",
          "Tapferkeitsmarker bleiben zwischen den Szenen eines Abenteuers und wenn der Held besiegt wird auf dem Heldenbogen, werden aber am Ende des Abenteuers abgeworfen.",
          "Figuren, die als Helden gelten (inklusive Gefähretn) können genauso wie Helden Tapferkeitsmarker erhalten und ausgeben, um einen Effekt einer Champion-Fertigkeit auszulösen. Jedoch legen sie alle Tapferkeitsmarker ab, wenn sie besiegt werden, wenn sie freiwillig vom Spielplan entfernt werden und am Ende eines jeden Abenteuers.",
          "Ein Trugbildmarker kann Tapferkeitsmarker erhalten und ausgeben. Wenn er Tapferkeitsmarker ausgibt, kann er eine Champion-Fertigkeit wie z.B. Kampfeslust (1 Verteidigung beim Verteidigen hinzurechnen) oder Keine Gnade (einen Angriff durchführen) auslösen. Da Trugbildmarker jedoch keine Angriffswürfel haben, wäre das Ergebnis des Angriffs 0, wenn keine Herz oder Würfel durch andere Effekte hinzugefügt werden"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Besiegt",
      "Klassenmarker"
    ],
    "page": 38
  },
  {
    "id": "terrain",
    "term": "Terrain",
    "groups": [
      {
        "label": null,
        "points": [
          "Einige Felder auf dem Spielplan zeichnen sich durch besonderes Terrain aus, welches durch eine farbige Umrandung des Feldes bzw. der Felder markiert wird. Zusätzlich können bestimmte Marker auf der Karte spezielle Typen von Terrain angeben.",
          "Terrainfelder haben Effekte auf das Spiel, wie unten angegeben:"
        ]
      },
      {
        "label": "Gefahrenfelder",
        "points": [
          "Jedes Feld mit gelber Umrandung ist ein Gefahrenfeld.",
          "Für Gefahrenfelder gelten dieselben Regeln wie für Lavafelder (siehe unten)."
        ]
      },
      {
        "label": "Grube",
        "points": [
          "Grubenfelder haben eine grüne Umrandung.",
          "Jedes Mal wenn eine Figur ein Grubenfeld betritt, erleidet diese Figur 2 Herz.",
          "Eine Figur auf einem Grubenfeld kann keine Bewegungspunkte ausgeben. Andere Spieleffekte, die eine Figur um eine bestimmte Anzahl Felder bewegen lassen, oder die eine Figur auf ein anderes Feld platzieren, ohne Bewegungspunkte auszugeben, können verwendet werden, um das Grubenfeld zu verlassen.",
          "Eine Figur auf einem Grubenfeld hat nur zu Figuren auf ihren Nachbarfeldern Sichtlinie und nur Figuren auf Nachbarfeldern zu einem Grubenfeld haben Sichtlinie zu einer Figur auf diesem Grubenfeld.",
          "Eine Figur auf einem Grubenfeld blockiert nicht die Sichtlinie für Figuren, die sich nicht auf einem Grubenfeld befinden. Siehe \"3.4. Sichtlinienbeispiele\" auf Seite 91 für visuelle Beispiele zur Bestimmung der Sichtlinie und Gruben.",
          "Als Spezialaktion kann eine Figur aus einer Grube klettern: –– Die Figur wird vom Spielplan entfernt und auf ein leeres benachbartes Feld gestellt. Falls es kein leeres benachbartes Feld gibt, kann die Figur diese Aktion nicht durchführen. –– Wenn eine Figur aus einer Grube klettert, kann sie nicht auf die andere Seite einer Höhenlinie platziert werden. –– Figuren, die als Held betrachtet werden, können eine beliebige ihrer Aktionen verwenden, um aus der Grube zu klettern.",
          "Große Monster sind von Grubenfeldern nur betroffen, wenn ihre Bewegung auf einem Grubenfeld endet oder unterbrochen wird und sie dabei ausschließlich Felder besetzen, die Grubenfelder sind.",
          "Vertraute, die wie Hindernisse behandelt werden, behandeln Grubenfelder wie Wasserfelder und können sich frei von Grubenfeldern weg bewegen."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Monster vermeiden immer das Betreten von Grubenfeldern. Große Monster bewegen sich in und durch ein Grubenfeld, solange sie am Ende der Bewegung nicht von Effekten von Grubenfeldern betroffen sind.",
          "Wenn es den Helden gelingt, ein Monster auf ein Grubenfeld zu steuern, gibt es seine nächste Aktion für das Herausklettern aus und stellt sich auf das nächste freie Feld, welches kein Grubenfeld ist. Hindernis",
          "Hindernisse haben eine rote Umrandung.",
          "Hindernisse gelten als besetzte Felder, d. h. sie blockieren die Bewegung und die Sichtlinie.",
          "Durch Hindernisse kann nicht gezählt werden.",
          "Fliegende Figuren können Hindernisse ignorieren, wenn sie Felder für Bewegung zählen. Höhenunterschied",
          "Höhenunterschiede werden durch gestrichelte rote Linien (auch Höhenlinien genannt) entlang der Kante von Feldern dargestellt.",
          "Höhenunterschiede blockieren die Bewegung, aber nicht die Sichtlinie.",
          "Benachbarte Felder, die durch eine Höhenlinie voneinander getrennt sind, gelten weiterhin als benachbart. Wenn eine Figur jedoch aus einer Grube klettert, kann sie nicht auf die andere Seite einer Höhenlinie platziert werden.",
          "Wenn an einer Ecke eine Höhenlinie und eine Wand (schwarzer Rand eines Spielplanteils) zusammentreffen, kann sich keine Figur über den Höhenunterschied dieser Ecke bewegen.",
          "Höhenunterschiede blockieren die Bewegung großer Monster. Wenn ein großes Monster aber seine Bewegung unterbricht oder beendet, kann die Figur so platziert werden, dass sie Höhenlinien überdeckt, solange alle von ihr besetzten Felder leer sind.",
          "Eine Figur mit der Fähigkeit „Fliegen“ kann sich ungehindert über Höhenlinien hinweg bewegen.",
          "Wenn eine Figur einen Nahkampfangriff ausführt (ohne weitreichend oder ausgedehnt), der auf ein Feld zielt, das eine gemeinsame Ecke mit zwei Höhenlinien oder einer Höhenlinie und einem Kartenrand oder einer Mauer hat, fügt die verteidigende Figur einen schwarzen Würfel zu ihrem Verteidigungspool hinzu. Wenn das Zielfeld nur eine Ecke mit einer Höhenlinie gemeinsam hat, bekommt die verteidigende Figur keinerlei Bonus.",
          "Wenn eine Figur mit einem Nahkampfangriff auf eine Figur auf der anderen Seite einer Höhenlinie zielt, wirft das Ziel des Angriffs auf der anderen Seite der Höhenlinie einen schwarzen Verteidigungswürfel mehr. Wenn der Angreifer über die Fähigkeit Weitreichend oder Ausgedehnt verfügt, erhält das Ziel diesen Verteidigungsbonus nicht."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Nahkampf Monster greifen Helden über Höhenlinien hinweg an, obwohl sie einen Nachteil haben.",
          "Ein Monster, das auf ein Ziel auf der anderen Seite einer Höhenlinie zustürmt, bewegt sich nicht um die Höhenlinie herum oder von dem Helden weg, um sich auf ein Feld zu bewegen, welches nicht durch eine Höhenlinie vom Feld des Helden getrennt ist. Es beendet seine Bewegung ganz normal, als sobald es sich in ein benachbartes Feld bewegt. Lava",
          "Lavafelder haben eine gelbe Umrandung.",
          "Wenn eine Figur ein Lavafeld betritt, erhält sie sofort 1 Herz.",
          "Helden oder Monster, die ihren Zug oder ihre Aktivierung auf einem Lavafeld beenden, sind sofort besiegt. Wenn ein Held auf diese Weise besiegt wird, legt der Heldenspieler den Heldenmarker auf das nächste leere Feld seiner Wahl, das kein Lavafeld ist.",
          "Ein großes Monster wird auf diese Weise nur besiegt, wenn alle von ihm besetzten Felder Lavafelder sind."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Monster vermeiden immer das Betreten von Lavafeldern (oder Gefahrenfeldern), es sei denn, sie erleiden für das Betreten keine Herz.",
          "Wenn das Monster noch Bewegungspunkte übrig hat, sich aber nicht weiter auf das Ziel zu bewegen kann ohne sich durch ein Lavafeld zu bewegen, bewegt es sich nicht. Schlammiges Gelände",
          "Schlammfelder haben eine orangefarbene Umrandung.",
          "Eine Figur, die ein Schlammfeld betritt, muss 1 zusätzlichen Bewegungspunkt einsetzen, um das Feld zu betreten.",
          "Wenn eine Figur ihren Zug oder ihre Aktivierung beginnt und jedes Feld, das sie besetzt, ein Schlammfeld ist, beträgt ihre Geschwindigkeit 1 und kann bis zum Ende dieses Zuges oder dieser Aktivierung nicht über 1 hinaus erhöht werden."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Monster bewegen sich nur dann durch Schlammfelder, wenn sie für diesen Weg weniger Bewegungspunkte benötigen, als für andere Wege.",
          "Monster vermeiden das Betreten von Schlammfeldern, sofern dies möglich ist, aber beenden ihre Züge in Schlammfeldern, wenn dies notwendig ist. Wasser",
          "Wasserfelder haben eine blaue Umrandung.",
          "Eine Figur, die ein Wasserfeld betritt, muss 1 zusätzlichen Bewegungspunkt einsetzen um das Feld zu betreten."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Monster bewegen sich nur dann durch Wasserfelder, wenn sie für diesen Weg weniger Bewegungspunkte benötigen, als für andere Wege. Zerfallendes Gelände",
          "Ein Feld, das zerfallendes Gelände enthält, verliert alle anderen Geländearten (selbst solche, die von bestimmten Monstern hinzugefügt wurden), mit Ausnahme von Hindernissen.",
          "Jedes Mal, wenn ein Held ein Feld mit zerfallendem Gelände betritt, darf er eine Probe seiner Wahl auf Wissen oder Gespür ablegen. Falls die Probe misslingt oder er sich entscheidet sie nicht abzulegen, entfernt er den Marker für zerfallendes Gelände vom Spielplan und erleidet die Effekte von anderen Geländearten des Feldes wie üblich.",
          "Falls das aufgedeckte Gelände 1 zusätzlichen Bewegungspunkt zum Betreten erfordert, erleidet dieser Held stattdessen 1 Erschöpfung.",
          "Monster werden von zerfallendem Geländes nicht beeinflusst.",
          "Falls sich eine Figur auf einem Feld befindet, das zerfallendes Gelände enthält, können andere Figuren dieses Feld nicht betreten. Verwandte Themen: Angriffe, Benachbart, Bewegung, Charakteristika, Grosse Figuren, Sichten, Weitreichend und Ausgedehnt, Zustände"
        ]
      }
    ],
    "related": [],
    "page": 38
  },
  {
    "id": "todgeweiht",
    "term": "Todgeweiht",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 40
  },
  {
    "id": "training",
    "term": "Training",
    "groups": [
      {
        "label": null,
        "points": [
          "Training kommt nur in Wege zum Ruhm vor und ersetzt Schritt 5 der Kampagnenphase (Erfahrungspunkte ausgeben).",
          "Jederzeit während der Kampagnenphase können die Spieler das Trainingssymbol auswählen und auf dem Trainingsbildschirm ihre EP ausgeben, um neue Klassenkarten zu kaufen.",
          "Um die EP auszugeben, wählt der Held eine (oder mehrere) der angezeigten Klassenkarten, nimmt sich die entsprechende Karte aus seinem Deck und wählt sie auf dem Bildschirm aus. Dies zieht automatisch den EP-Wert von seinem Vorrat ab.",
          "Der Trainingsbildschirm kann von den Spielern ebenfalls benutzt werden, um die entsprechenden Heldenbögen und Klassenkarten eines gespeicherten Spiels anzuzeigen.",
          "Helden können keine der erworbenen Klassenkarten austauschen, es sei denn, ein Spieleffekt erlaubt dies"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Erfahrungspunkte",
      "Kampagnen",
      "Klassenkarten"
    ],
    "page": 40
  },
  {
    "id": "trugbildmarker",
    "term": "Trugbildmarker",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Klasse des Beschwörers hat mehrere Fertigkeiten, die Trugbildmarker verwenden. Die Anzahl der Trugbildmarker ist auf 4 begrenzt.",
          "Jeder Trugbildmarker gilt als Heldenfigur mit den Attributswerten des Beschwörers und wirft 1 grauen Verteidigungswürfel. Trugbildmarker haben keine Angriffswürfel (nicht einmal einen blauen).",
          "Sobald ein Trugbild Herz oder Erschöpfung erleidet, wird es vom Spielplan genommen und der Beschwörer erleidet 1 Herz und 1 Erschöpfung.",
          "Trugbildmarker können Zustandskarten erhalten, da sie jedoch keine Aktionen oder Angriffe haben, ist der einzige Zustand, der sie beeinflusst Geschwächt.",
          "Es dürfen höchstens so viele Trugbilder gleichzeitig auf dem Spielplan sein, wie Trugbildmarker enthalten sind (also 4).",
          "Zu beliebigen Zeitpunkten seines Zuges darf der Beschwörer Trugbilder vom Spielplan nehmen und zurück in seinen Vorrat legen.",
          "Trugbildmarker verbleiben auf dem Spielplan, selbst wenn der Beschwörer besiegt wird"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Klassenkarten",
      "Klassenmarker",
      "Zustände"
    ],
    "page": 40
  },
  {
    "id": "tuer-oeffnen-oder-schliessen",
    "term": "Tür öffnen oder schliessen",
    "groups": [
      {
        "label": null,
        "points": [
          "Figuren können als Aktion von einem benachbarten Feld aus eine Tür öffnen; diese wird entfernt und neben den Spielplan gestellt.",
          "Wenn eine Figur als Aktion die Tür schließt, wird sie wieder an ihre ursprüngliche Position auf dem Spielplan gestellt.",
          "Geschlossene Türen blockieren die Sichtlinie und die Bewegung.",
          "Felder, die durch eine geschlossene Tür voneinander getrennt sind, gelten nicht als benachbart. Felder können nicht durch eine geschlossene Tür gezählt werden.",
          "Weiterhin können Fallgitter und Dickicht durch eine Aktion geöffnet bzw. entfernt werden."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Türen können nicht geschlossen werden. Verwandte Themen: Akte, Felder zählen, Sichten, Türen und Türähnliche Objekte"
        ]
      }
    ],
    "related": [],
    "page": 40
  },
  {
    "id": "tueren-und-tuer-aehnliche-objekte",
    "term": "Türen und Tür-ähnliche Objekte",
    "groups": [
      {
        "label": null,
        "points": [
          "Türen und Tür-ähnliche Objekte werden durch stehende Pappmarker dargestellt, die wie in der Abenteuerbeschreibung angegeben auf den Spielplan gestellt werden."
        ]
      },
      {
        "label": "Türen",
        "points": [
          "Normale Türen werden auf dem Spielplan in der Abenteuerbeschreibung in gelb dargestellt, verschlossene Türen in rot.",
          "Figuren können sich nicht durch Türen bewegen, Sichtlinie durch Türen ziehen oder Felder durch Türen abzählen. Felder die durch eine Tür getrennt sind, gelten nicht als benachbart.",
          "Wenn eine Figur eine Tür öffnen oder schließen Aktion durchführt, kann sie eine benachbarte Tür öffnen oder schließen.",
          "Wenn eine Tür geöffnet wird, wird sie in die Nähe neben den Spielplan gestellt. Wenn sie später wieder geschlossen wird, wird sie wieder auf ihren ursprünglichen Platz gestellt.",
          "Manche Türen sind verriegelt oder auf sonstige Weise verschlossen, sodass sie nicht normal geöffnet werden können.",
          "Wenn eine große Figur Felder auf beiden Seiten einer Tür besetzt, kann diese Tür nicht geschlossen werden.",
          "Wenn laut Abenteuerbeschreibung eine Attributsprobe nötig ist, um eine verschlossene Tür zu „öffnen“ und sie danach wieder geschlossen wird, so ist zum erneuten Öffnen eine weitere Attributsprobe erforderlich.",
          "Wenn laut Abenteuerbeschreibung eine Tür von der Karte „entfernt“ oder zerstört wird, so kann sie nicht mehr geschlossen werden."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Türen können nicht geschlossen werden. Alte Wände",
          "Alte Wände werden genau wie Türen in einem Abenteuer aufgebaut und sind im Quest-Handbuch von Nebel von Bilehall als blaues Rechteck dargestellt.",
          "Felder, die durch Alte Wände voneinander getrennt sind, gelten nicht als benachbart und es können auch keine Felder durch Alte Wände hindurch gezählt werden.",
          "Alte Wände blockieren die Bewegung und die Sichtlinie.",
          "Alte Wände können nicht wie Türen geöffnet oder geschlossen werden. Dickicht",
          "Dickichte werden im Quest-Handbuch als grüne Türen dargestellt.",
          "Dickichte blockieren die Bewegung nicht.",
          "Felder, die durch Dickichte getrennt sind, gelten als benachbart, und es können Felder durch Dickichte hindurch gezählt werden.",
          "Dickichte blockieren die Sichtlinie und Figuren, die einen Nahkampfangriff ausführen, können keine Ziele angreifen, die auf der anderen Seite des Dickichts stehen. Effekte durch z.B. Explosion und Feueratem können immer noch Figuren durch Dickichte hindurch betreffen.",
          "Große Monster können nicht auf Feldern stehen, die durch ein Dickicht getrennt sind.",
          "Dickichte können von der Karte entfernt werden, wenn eine Figur",
          "eine Aktion Tür öffnen durchführt. Entfernte Dickichte können nicht wieder geschlossen werden. Fallgitter",
          "Fallgitter werden wie Türen aufgebaut und werden im Quest-Handbuch als graue Türen dargestellt.",
          "Fallgitter blockieren nur die Bewegung, aber nicht die Angriffe oder die Sichtlinie. Es ist möglich Felder durch Fallgitter hindurch zu zählen. Felder, die durch ein Fallgitter voneinander getrennt sind, gelten als benachbart.",
          "Eine Figur kann als Aktion ein benachbartes Fallgitter öffnen oder schließen. Dies gilt als Öffnen oder Schließen einer Tür. Verwandte Themen: Benachbart, Bewegung, Felder zählen, Sichten, Tür öffnen oder schliessen"
        ]
      }
    ],
    "related": [],
    "page": 40
  },
  {
    "id": "unterbrechung",
    "term": "Unterbrechung",
    "groups": [
      {
        "label": null,
        "points": [
          "Eine Unterbrechung ist ein Spieleffekt, der ausgelöst wird, während ein anderer Effekt abgehandelt wird. Unterbrechungen sind auf verschiedenen Spielkomponenten, wie z.B. Overlordkarten, Klassenkarten, Heldenbögen usw., verzeichnet.",
          "Unglücklicherweise sind andere Unterbrechungen, als das Unterbrechen einer Bewegungsaktion durch eine Aktion, in den aktuellen Regeln nicht sehr gut definiert und Verantwortliche von FFG scheinen diesbezügliche Regelfragen von Fall zu Fall zu entscheiden. Das folgende fasst zusammen, was über Unterbrechungen bekannt ist:"
        ]
      },
      {
        "label": "Unterbrechungen durch den aktiven Spieler",
        "points": [
          "Im Allgemeinen sind Bewegungsaktionen und Fähigkeiten, die eine Bewegungsaktion beinhalten (wie z.B. Überwältigen), die einzigen Aktionen, die freiwillig unterbrochen werden können.",
          "Eine Figur muss sich auf einem leeren Feld befinden, wenn sie ihre Bewegungsaktion unterbricht.",
          "Zusätzlich können andere Aktionen durch Fähigkeiten unterbrochen werden, wenn eine spezifische Auslösebedingung während einer Aktion eintritt. Beispiele: –– Ein Angriff kann durch einen Effekt unterbrochen werden, der ausgelöst wird, bevor die Angriffswürfel geworfen werden oder nachdem Herz erlitten wurde, aber nicht durch eine Fähigkeit, die während deines Zuges ausgelöst wird. –– Eine Heldentat kann nicht unterbrochen werden, um Bewegungspunkte auszugeben, es sei denn, es ist irgendwo anders beschrieben.",
          "Wenn eine Bewegungsaktion einer großen Figur durch eine andere Aktion unterbrochen wird, dehnt sich die Figur aus und wird erneut auf den Spielplan gestellt.",
          "Wenn der Overlord eine Bewegungsaktion eines großen Monsters unterbricht, um eine andere Aktion auszuführen, muss er in der Lage sein, die Unterbrechungsaktion anzusagen, bevor die Figur des Monsters auf den Spielplan gestellt wird.",
          "Wenn der Effekt der Unterbrechung abgehandelt wurde, kann die Bewegungsaktion fortgesetzt werden; der aktive Spieler wählt ein Feld, auf das die große Figur „schrumpft“ und kann dann die verbleibenden Bewegungspunkte ausgeben."
        ]
      },
      {
        "label": "Unterbrechungen durch einen anderen Spieler oder durch",
        "points": []
      },
      {
        "label": "einen Effekt",
        "points": [
          "Diese Art von Unterbrechung kann nur auftreten, wenn spezifische Auslösebedingungen erfüllt sind.",
          "Details, wie die Unterbrechung abgehandelt wird, sind üblicherweise in dem Text des speziellen Effektes beschrieben.",
          "Bewegungen von großen Monstern können nicht unterbrochen werden (z.B. durch Flink, Widerhaken oder Absichern), wenn es keinen Platz für das Monster zum „ausdehnen“ gibt.",
          "Bei Reihenfolgekonflikten entscheidet der aktive Spieler in welcher Reihenfolge die Effekte abgehandelt werden.",
          "Effekte, die als Unterbrechung gelten und für die spezielle Regeln von FFG existieren, wurden in Sektion 2 dieses Guides eingefügt."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein Held die Aktivierung eines Monsters mit einer Fertigkeit oder Fähigkeit unterbricht, wird die Priorität des Monsters neu bewertet und muss, falls nötig, angepasst werden. Verwandte Themen: Akte, Auslöser, Bewegung, Grosse Figuren"
        ]
      }
    ],
    "related": [],
    "page": 41
  },
  {
    "id": "upgrade-phase",
    "term": "Upgrade Phase",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Stürmen\" auf Seite 37."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 41
  },
  {
    "id": "veraengstigt",
    "term": "Verängstigt",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 41
  },
  {
    "id": "verflucht",
    "term": "Verflucht",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 41
  },
  {
    "id": "vergiftet",
    "term": "Vergiftet",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Zustände\" auf Seite 45."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 41
  },
  {
    "id": "verstaerkung",
    "term": "Verstärkung",
    "groups": [
      {
        "label": null,
        "points": [
          "Verstärkungen sind zusätzliche Monster, die der Overlord während eines Abenteuers bekommen kann. Die Regeln für Verstärkungen sind in der Beschreibung des Abenteuers beschrieben.",
          "Der Overlord entscheidet, ob normale oder Elite-Monster als Verstärkung eingesetzt werden.",
          "Sofern es nicht irgendwo beschrieben ist, muss der Overlord bei Verstärkungen die Gruppengröße einhalten. Wenn ein Spieleffekt Spieler anweist, die Gruppengröße zu ignorieren, ist die Anzahl der Monster durch die Anzahl der Plastikfiguren dieser Monstergruppe limitiert (was der Gruppengröße eines Spiels mit 4 Helden entspricht).",
          "Für zusätzliche Regeln hinsichtlich des Platzierens von Monstern siehe \"Platzieren von Monstern\" auf Seite 30"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer",
      "Eingang und Ausgang",
      "Grosse Figuren",
      "Klassen",
      "Monster",
      "Platzieren von Monstern",
      "Spielvorbereitungen"
    ],
    "page": 41
  },
  {
    "id": "vertraute",
    "term": "Vertraute",
    "groups": [
      {
        "label": null,
        "points": [
          "Vertraute sind Kreaturen, die von einem Helden kontrolliert werden."
        ]
      },
      {
        "label": "Beschwörung",
        "points": [
          "Vertraute werden auf dem Spielplan platziert, wenn ein Held spezielle Fähigkeiten von seinen Klassenkarten oder seinem Heldenbogen benutzt.",
          "Wenn ein Vertrauter nicht platziert werden kann, da es kein gültiges, leeres Feld gibt, wird er stattdessen auf das nächste, leere Feld gestellt.",
          "Wenn ein Vertrauter beschworen wird, während er sich noch auf dem Spielplan befindet, wird er entfernt und wie angegeben neu platziert. Er gilt dabei nicht als besiegt oder abgeworfen.",
          "Wenn ein Vertrauter besiegt oder freiwillig vom Spielplan entfernt wird, werden alle Zustände und Marker ebenfalls abgeworfen.",
          "Vertraute werden nicht während der Spielvorbereitungen einer Szene auf dem Spielplan platziert, sondern müssen (erneut) beschworen werden, es sei denn, die Spielmechaniken erlauben es."
        ]
      },
      {
        "label": "Aktivierung",
        "points": [
          "Ein Vertrauter wird in Schritt 3.I oder 3.III (Aktionen ausführen) eines Heldenspielzuges aktiviert. Er kann nicht zwischen Heldenaktionen in Schritt 3.II aktiviert werden. Siehe \"Heldenspielzug\" auf Seite 36.",
          "Sofern es nicht anderswo steht, kann ein Vertrauter nur einmal pro Runde aktiviert werden (selbst wenn der Vertraute vom Spielplan entfernt und erneut beschworen wurde).",
          "Mehrere Vertraute der gleichen Art, die von einem Helden kontrolliert werden, werden als Gruppe aktiviert (z.B. mehrere Belebte Steine).",
          "Wenn ein Held zwei verschiedene Vertraute kontrolliert (z.B. Leuchtfeuer and Untoter Diener), kann er sie unabhängig voneinander aktivieren.",
          "Effekte, die „Zu Beginn deines Zuges“ und „am Ende deines Zuges“ ausgelöst werden (wie z.B. Effekte von Zustände und das Verlieren aller Bewegungspunkte), werden zum Beginn und am Ende der Aktivierung jedes einzelnen Vertrauten ausgelöst.",
          "Vertraute sind nicht automatisch besiegt, wenn der sie kontrollierende Held besiegt wird."
        ]
      },
      {
        "label": "Typen von Vertrauten",
        "points": [
          "1. Vertraute, die nicht als Figuren, Helden oder Hindernisse behandelt werden",
          "können nicht Ziel eines Angriffs sein oder von einem Angriff oder einem Spieleffekt betroffen werden, es sei denn, es ist ausdrücklich im Text des Effekts angegeben.",
          "können eine einzige Bewegungsaktion während ihrer Aktivierung durchführen.",
          "behandeln jedes spezielle Terrain, welches kein Hindernis ist, als Wasserfeld.",
          "können eine einzige weitere Aktion während ihrer Aktivierung durchführen, wenn eine solche auf der Vertrautenkarte angegeben ist.",
          "behindern nicht die Bewegung oder Sichtlinie, können ihre Bewegung auf Feldern, die Figuren enthalten, unterbrechen oder beenden.",
          "Vertraute dieses Typs: Skye, Pico, Schattenseele 2. Vertraute, die als Figuren/Helden behandelt werden",
          "werden als Helden betrachtet hinsichtlich von Angriffen, Monsteraktionen, Heldenfähigkeiten und -taten, Heldenfertigkeiten, Fähigkeiten von Gegenständen, Relikten, Suchkarten und Overlordkarten.",
          "werden nicht als Helden betrachtet hinsichtlich aller Fertigkeiten, Abenteuerregeln, Handlungskarten, Reiseereignisse, Gerüchtekarten und alle anderen Spieleffekten, es sei denn, es ist irgendwo anders explizit angegeben.",
          "können eine einzige Bewegungsaktion während ihrer Aktivierung durchführen.",
          "können keine Ausrüstung mit Helden tauschen.",
          "behindern die Bewegung und die Sichtlinie und gelten gegenüber Helden als verbündete Figuren.",
          "folgen hinsichtlich Terrain denselben Regeln wie Helden. können eine einzige weitere Aktion während",
          "ihrer Aktivierung durchführen, wenn eine auf der Vertrautenkarte steht.",
          "können von Zuständen betroffen sein und versagen automatisch bei Attributsproben.",
          "können eine Aktion verwenden, um eine Aktion auf einer Zustandskarte durchzuführen (z.B. um Betäubt, Blutend und Brennend abzuwerfen) oder um aus einem Grubenfeld zu klettern.",
          "können Erleuchtungs-, Elixier- und Tapferkeitsmarker erhalten.",
          "Vertraute dieses Typs: Leuchtfeuer, Untoter Diener, Wolf 3. Vertraute, die als Hindernisse behandelt werden",
          "gelten nicht als Helden oder Figuren.",
          "können Ziel eines Angriffs oder von dem Angriff eines Monsters oder Helden betroffen sein.",
          "können von Zuständen betroffen sein, versagen automatisch bei Attributsproben und können ihre Aktion verwenden um eine Aktion auf einer Zustandskarte durchzuführen (z.B. um Betäubt, Blutend und Brennend abzuwerfen.",
          "es können keine Felder durch sie hindurch gezählt werden, außer wenn sie das Ziel eines Angriffs sind oder von einem Angriff betroffen sind.",
          "blockieren Bewegung.",
          "können eine einzige Bewegungsaktion während ihrer Aktivierung durchführen.",
          "können sich nicht durch blockierte Felder bewegen (z.B. durch feindliche Figuren besetzt), außer durch Felder, die von verbündeten Figuren besetzt sind.",
          "behandeln jedes spezielle Terrain, welches kein Hindernis ist, als Wasserfeld, sind nicht von gefährlichem Gelände/ Lava am Ende ihrer Aktivierung betroffen und können sich frei aus Grubenfeldern heraus bewegen.",
          "Vertraute dieses Typs: Belebte Steine"
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Vertraute sind von Perils nicht betroffen.",
          "Wenn ein Monster angewiesen wird, einen Helden als Ziel zu wählen, sind angreifbare Marker und Vertraute, die als Held oder als Hindernis behandelt werden, gültige Ziele.",
          "Falls ein Vertrauter oder ein angreifbarer Marker nicht die Statistiken aufweisen, die das Monster zur Zielwahl für seinen Angriff verwendet, so haben der Vertraute oder der angreifbare Marker den Wert 0 für die entsprechende Statistik.",
          "Vertraute werden zwischen den Stages in Die Anderswelt vom Spielplan entfernt, außer Leuchtfeuer, der neben Challara platziert wird, wenn die Heldin auf dem Spielplan einer neuen Stage platziert wird. Verwandte Themen: Aktivierung, Bewegung, Spielzug, Stürmen, Terrain, Ziel"
        ]
      }
    ],
    "related": [],
    "page": 42
  },
  {
    "id": "von-weg",
    "term": "Von...weg",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Richtung\" auf Seite 32."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 43
  },
  {
    "id": "wasser",
    "term": "Wasser",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Terrain\" auf Seite 38."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 43
  },
  {
    "id": "weitergeben",
    "term": "Weitergeben",
    "groups": [
      {
        "label": null,
        "points": [
          "Helden können Markt-, Relikt- und Suchkarten untereinander nach folgenden Regeln tauschen:",
          "In der Kampagnenphase können die Helden beliebig viele erlaubte Karten untereinander austauschen. Das können sie zu einem beliebigen Zeitpunkt vor dem Reiseschritt tun.",
          "Nachdem der Held eine Bewegungsaktion während seines Zuges durchführt, kann er zu jeder Zeit in diesem Zug Ausrüstung mit einem benachbarten Helden tauschen. Weitergeben benötigt keine weitere Aktion.",
          "Startausrüstung kann nicht weitergegeben werden.",
          "Erschöpfte Karten und umgedrehte Suchkarten können auch weitergegeben werden.",
          "Mit den so erhaltenen Gegenständen kann sich ein Held aber erst zu Beginn seines nächsten Zuges ausrüsten"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Bewegung",
      "Kampagnen",
      "Marktkarten",
      "Marktkarten und Einkaufen",
      "Relikte",
      "Suchkarten"
    ],
    "page": 43
  },
  {
    "id": "weitreichend-und-ausgedehnt",
    "term": "Weitreichend und Ausgedehnt",
    "groups": [
      {
        "label": null,
        "points": [
          "Die Fähigkeiten Weitreichend und Ausgedehnt modifizieren Nahkampfangriffe.",
          "Während es normale Nahkampfangriffe einer Figur nur erlauben, ein benachbartes Feld anzugreifen, erlaubt es Weitreichend und Ausgedehnt einer Figur, ein Ziel im Abstand von 2 oder 3 Feldern anzugreifen. Das Zielfeld muss in Sichtlinie sein.",
          "Der Angreifer muss sowohl die Distanz als auch die Sichtlinie zu seinem Zielfeld erfüllen.",
          "Wie die normalen Nahkampfangriffe benötigen Angriffe mit Weitreichend und Ausgedehnt keine Reichweite und der Angriff kann auch nicht wegen fehlender Reichweite fehlschlagen. Wenn sich das Ziel wegbewegt, nachdem ein gültiger Angriff erklärt wurde, so wird es dennoch getroffen. Jedoch gibt es spezielle Effekte, die eine Reichweitenvorraussetzung für Nahkampfangriffe hinzufügen (z.B. Tarnung).",
          "Im Falle eines großen Monsters kann die Distanz und die Sichtlinie von unterschiedlichen Feldern bestimmt werden, solange beide zum gleichen Zielfeld führen (siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92)."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein Monster mit Weitreichend oder Ausgedehnt angewiesen wird, auf einen Helden zu zustürmen, versucht es sich auf ein benachbartes Feld des Helden zu bewegen. Verwandte Themen: Angriffe, Felder zählen, Reichweite, Sichten"
        ]
      }
    ],
    "related": [],
    "page": 43
  },
  {
    "id": "woche",
    "term": "Woche",
    "groups": [
      {
        "label": null,
        "points": [
          "Während des Kampagnenspiels in Wege zum Ruhm lassen",
          "bestimmte Aktivitäten die Kampagne um eine Woche oder mehr fortschreiten. Wenn Spieler an diesen Aktivitäten teilnehmen, verringert sich die Anzahl an Wochen, bis ein verfügbares Hauptabenteuer gestartet werden muss.",
          "Wenn ein Hauptabenteuer keine Wochen mehr hat, müssen die Spieler es als nächstes spielen, und können nichts anderes unternehmen, was eine Woche oder länger dauert"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Abenteuer"
    ],
    "page": 43
  },
  {
    "id": "wuerfel",
    "term": "Würfel",
    "groups": [
      {
        "label": null,
        "points": [
          "Es gibt im Spiel drei verschiedene Arten von Würfeln: Kampfwürfel (blau), Machtwürfel (rot, gelb, grün) und Verteidigungswürfel (grau, schwarz, braun).",
          "Würfel werden gemeinsam geworfen. Im Kampf gelten alle Würfel, die der Angreifer wirft als Angriffswürfel, jene des Verteidigers als Verteidigungswürfel.",
          "Für Attributsproben werden 1 grauer und 1 schwarzer Würfel geworfen (es sei denn, ein Spieleffekt ändert die Würfel)"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Angriffe",
      "Charakteristika",
      "Würfelwurf modifizieren"
    ],
    "page": 43
  },
  {
    "id": "wuerfelresultat-ersetzen",
    "term": "Würfelresultat ersetzen",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Würfelwurf modifizieren\" auf Seite 43."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 43
  },
  {
    "id": "wuerfelresultat-veraendern",
    "term": "Würfelresultat verändern",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Würfelwurf modifizieren\" auf Seite 43."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 43
  },
  {
    "id": "wuerfelwurf-modifizieren",
    "term": "Würfelwurf modifizieren",
    "groups": [
      {
        "label": null,
        "points": [
          "Fähigkeiten oder andere Spieleffekte können es Spielern erlauben, erneut zu würfeln, Ergebnisse von einem oder mehreren Würfeln zu \"verändern\" oder zu \"ersetzen\". Zusätzlich modifizieren bestimmte Fähigkeiten und Effekte das Ergebnis eines Wurfes, indem sie Verteidigung, Herz oder Erschöpfung zum Ergebnis addieren oder subtrahieren.",
          "Sofern der Effekt nicht ausdrücklich etwas anderes besagt, wird das neue Ergebnis beibehalten.",
          "Modifikationen von Würfeln sind in der Regel auf bestimmte Situationen beschränkt (z.B. gilt das erneute Würfeln von \"Verteidigungswürfeln\" nur für Verteidigungswürfel, die im Rahmen eines Angriffs gewürfelt werden und kann nicht zur Wiederholung eines Attributtests verwendet werden).",
          "Wenn eine Fähigkeit benutzt wird, die es erlaubt, erneut zu Würfeln oder das Ergebnis zu verändern, als Reaktion auf eine Fähigkeit benutzt wird, die es erlaubt, erneut zu Würfeln oder das Ergebnis zu verändern, werden die Effekte in der Reihenfolge angewendet, in der die Fähigkeiten verwendet werden (der aktive Spieler entscheidet nicht über die Reihenfolge)."
        ]
      },
      {
        "label": "Fähigkeiten, die ein erneutes Würfeln erlauben",
        "points": [
          "Fähigkeiten, die ein erneutes Würfeln erlauben (z.B. \"würfle 1 Verteidigungswürfel neu\" oder \"würfle einen Attributtest neu\") sind die häufigsten Fähigkeiten, um Würfelwürfe zu modifizieren. Diese Gruppe beinhaltet Fähigkeiten wie Dunkles Karma, Glücksbringer, Generalprobe (Barde), und Stab der Schatten.",
          "Das erneute Würfeln erzeugt keine neue Instanz einer Attributsprobe. Eine Attributsprobe, die mehrere erneute Würfelwürfe oder \"Ergebnis verändern\"-Fähigkeiten beinhaltet, ist immer noch eine einzige Probe.",
          "Bestimmte Fähigkeiten, die ein erneutes Würfeln erlauben, beziehen sich auf die Angriffswürfel anstatt auf den Angriffspool. In diesen Fällen bezeichnet \"der Angriffswürfel\" (Singular) den blauen Würfel und \"die Angriffswürfel\" (Plural) den Angriffspool."
        ]
      },
      {
        "label": "Fähigkeiten, die erlauben, das \"Ergebnis zu verändern\"",
        "points": [
          "Fähigkeiten dieser Gruppe können verwendet werden, um das Ergebnis eines oder mehrerer Würfel zu ändern (z.B. \"Du kannst den Angriffswürfel in ein anderes Ergebnis ändern\" oder \"jedes X in ein anderes Ergebnis deiner Wahl ändern\"). Dies erlaubt es dem Spieler, den oder die Würfel auf das Ergebnis seiner Wahl zu drehen. Fähigkeiten dieser Art finden sich auf Flügelklinge, Heldentaten (Lindel, Tatianna), Gelübde der Freiheit (Mönch) und Des eigenen Glückes Schmied (Gespaltene Loyalität)."
        ]
      },
      {
        "label": "Fähigkeiten, die addieren/subtrahieren erlauben",
        "points": [
          "Diese Gruppe umfasst Fähigkeiten, die die Ergebnisse der Würfelwürfe durch Addition oder Subtraktion von Verteidigung, Herz oder Erschöpfung verändern (z.B. \"füge 1 Verteidigung zu dem Ergebnis hinzu\"). Beispiele sind Geisterrüstung, Manageflecht, Runenbeherrschung, oder Unheimlicher Einfluss (Saat des Verrats). Diese Fähigkeiten werden auf das Ergebnis des Wurfes angewendet, unabhängig von bereits ausgeführten Fähigkeiten, die ein erneutes Würfeln oder das Ändern eines Wurfes erlauben. Wenn zwei oder mehr Fähigkeiten dieser Gruppe gespielt werden, werden diese nacheinander angewendet (z.B. Schwerer Umhang kann verwendet werden, nachdem der Overlord Dunkle Macht zu einem Monsterangriff hinzugefügt hat)."
        ]
      },
      {
        "label": "Fähigkeiten, die erlauben, \"das Ergebnis zu ersetzen\"",
        "points": [
          "Diese Gruppe beinhaltet Fähigkeiten, die das Ergebnis von Würfeln ersetzen (z.B. \"ersetzen Sie die Ergebnisse durch eine Anzahl von Verteidigung, die Ihrem Gespür entspricht\"). Diese Gruppe umfasst Fähigkeiten von Elfenumhang, Runenverzierte Robe und Krutzbecks Heldentat.",
          "Werden Fähigkeiten, die \"addieren/subtrahieren\" erlauben, als Antwort auf eine Fähigkeit, die das \"Ersetzen eines Ergebnisses\" erlaubt, gespielt, so werden erstere wie üblich angewendet.",
          "Im aktuellen Regelwerk ist nicht klar, ob Fähigkeiten, die ein erneutes Würfeln und \"Verändern des Ergebnisses\" erlauben, als Antwort auf Fähigkeiten gespielt werden können, die das Ersetzen eines Ergebnisses erlauben. Es ist auch nicht klar, wie Fähigkeiten, die das \"Ersetzen des Ergebnisses\" erlauben, das Ergebnis eines Wurfes verändern, wenn sie als Antwort auf Fähigkeiten gespielt werden, die das \"addieren/subtrahieren\" erlauben"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Fähigkeiten",
      "Marktkarten",
      "Würfel"
    ],
    "page": 43
  },
  {
    "id": "zerfallendes-gelaende",
    "term": "Zerfallendes Gelände",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Terrain\" auf Seite 38."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 44
  },
  {
    "id": "ziel",
    "term": "Ziel",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Ziel gibt ein Feld, eine Figur oder ein Objekt an, welches von einem Angriff oder einem Effekt betroffen werden kann."
        ]
      },
      {
        "label": "Ziele eines Angriffs",
        "points": [
          "Ein Angriff zielt oder betrifft immer ein oder mehrere einzelne Felder, auf denen feindliche Figuren stehen. Wenn das Ziel ein großes Monster ist, zielt und betrifft der Angriff nur ein Feld.",
          "Eine Figur, die zum Ziel eines Angriffs wird, gilt als betroffen durch den Angriff. Jedoch sind Figuren, die durch einen Angriff betroffen sind, nicht automatisch Ziel des Angriffs.",
          "Im Allgemeinen wird während eines Angriffs, der mehrere Figuren betrifft, keine Figur mehr als einmal betroffen. Die einzige Ausnahme zu dieser Regel ist, wenn eine Figur einen solchen Angriff auf sich selbst umlenkt, während sie durch denselben Angriff betroffen ist. In einem solch seltenen Fall muss sich die Figur gegen jeden Angriff einzeln verteidigen. Fähigkeiten, die zu solch einer Situation führen sind Verteidigen und Beschützen.",
          "Ein Effekt, der das Ziel oder den Angreifer während des Angriffs bewegt, kann das Ergebnis des Angriffs beeinflussen: –– Nahkampfangriffe (selbst solche mit Weitreichend und Ausgedehnt) können nicht wegen einer Erhöhung der Distanz zwischen dem Angreifer und dem Ziel fehlschlagen, nachdem ein gültiges Ziel in Schritt 1 (Waffe und Ziel wählen) des Angriffs gewählt wurde. –– Fernkampfangriffe können fehlschlagen, wenn die Distanz zwischen Angreifer und Ziel während den Schritten 1-3 geändert wird, da die Reichweite erst in Schritt 3 (Reichweite prüfen) des Kampfes bestimmt wird. Wenn der Angreifer oder das Ziel nach Schritt 3 bewegt werden, so hat die veränderte Distanz keinen Effekt und der Angriff kann nicht aufgrund ungenügende Reichweite fehlschlagen.",
          "Siehe \"3.5. Spezielle Situationen im Kampf \" auf Seite 92 für visuelle Beispiele."
        ]
      },
      {
        "label": "Ziele eines Effekts",
        "points": [
          "Die Auswahl von Zielen für Effekte, die nicht in Zusammenhang mit Angriffen stehen, ist weniger restriktiv.",
          "Ähnlich wie Angriffe zielen Effekte auf ein oder mehrere einzelne Felder. Jedoch beziehen sich Effekte, die „Ziel“ enthalten, auf eine komplette Figur und somit auf alle Felder, die eine Figur einnimmt (z.B. der zweite Effekt von Pestwolke oder der Effekt von Brandpfeile). In diesem Zusammenhang ist „Zielmonster“ oder „Zielfigur“ genauer.",
          "Sonderregeln und Details, die mit Effekten verbunden sind, sind auf den dazugehörigen Spielmaterialien abgedruckt."
        ]
      },
      {
        "label": "Auf Objekte zielen",
        "points": [
          "In einigen Abenteuern können Türen oder andere Objekte von Angreifern als Ziel bestimmt werden, als wären sie Monster. Siehe \"Angriffe\" auf Seite 5 für Details."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Die App liefert üblicherweise Prioritäten für die Auswahl von Zielen für Angriffe und Effekte (wie z.B. den Held mit der höchsten Willenskraft oder mit den wenigsten Herz ). Wenn es hierbei einen Gleichstand gibt, dann wird das nächste Ziel anvisiert. Wenn es dabei immer noch einen Gleichstand gibt, dann dürfen die Spieler nach eigenem Ermessen entscheiden. Verwandte Themen: Angriffe, Betroffen, Fähigkeiten, Grosse Figuren"
        ]
      }
    ],
    "related": [],
    "page": 44
  },
  {
    "id": "zuruecklegen-von-spielmaterial",
    "term": "Zurücklegen von Spielmaterial",
    "groups": [
      {
        "label": null,
        "points": [
          "Der Text auf dem Spielmaterial weist die Spieler manchmal an, Karten oder Marker abzuwerfen.",
          "Komponenten, die in ihren Vorrat zurückgelegt oder abgeworfen werden, können zu einem späteren Zeitpunkt wieder im Spiel verwendet werden. Im Gegensatz dazu können Komponenten, die in die Schachtel zurückgelegt werden, nicht wieder im Abenteuer (einfaches Spiel) oder in der Kampagne (Kampagnenspiel) verwendet werden, es sei denn, es ist etwas anders angegeben"
        ]
      }
    ],
    "notes": [],
    "related": [
      "Ablegen von Spielmaterial"
    ],
    "page": 44
  },
  {
    "id": "zusatzabenteuerkarten",
    "term": "Zusatzabenteuerkarten",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Gerüchtekarten\" auf Seite 19."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 45
  },
  {
    "id": "zu-hin",
    "term": "Zu...hin",
    "groups": [
      {
        "label": null,
        "points": [
          "Siehe \"Richtung\" auf Seite 32."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 45
  },
  {
    "id": "zustaende",
    "term": "Zustände",
    "groups": [
      {
        "label": null,
        "points": [
          "Ein Zustand ist ein Status, der durch eine Zustandskarte hervorgerufen wird. Zustände können zugefügt werden: 1. Durch Schub -Fähigkeiten, wenn mindestens 1 Herz in Schritt 5 (Schaden zufügen) des Angriffs zugefügt wurde (siehe \"Schritte im Kampf \" auf Seite 6). Zustände werden normalerweise in diesem Schritt zugefügt. Beachtet, dass Figuren, die durch einen Angriff betroffen sind (aber nicht notwendigerweise Ziel eines Angriff sind), auch Zustände bekommen können, auch wenn die Schub -Fähigkeit auf der Monsterkarte das Schlüsselwort „Ziel“ enthält. 2. Andere Fähigkeiten und Effekte können Zustände zufügen, unabhängig davon, ob Schaden in Schritt 5 des Angriffs zugefügt worden ist. Die Auslösebedingungen und Voraussetzungen, um erfolgreich einen Zustand zuzufügen (z.B. eine misslungene Attributsprobe) sind bei der Fähigkeit oder dem Effekt beschrieben. Fähigkeiten und Effekte, die Zustände zufügen, resultieren",
          "üblicherweise darin, dass einer Figur ein Zustand zugewiesen wird, was durch die zugehörige Zustandskarte und den Marker für Helden uns Monster angezeigt wird. Wenn eine Fähigkeit oder ein Effekt einer Figur einen Zustand zufügt, die bereits diese Zustandskarte oder-marker besitzt, kann eine weitere Instanz dieses Zustandes nicht zugefügt werden und dieser neue Zustand hat keinen Effekt. Entfernen von Zuständen: 1. Wenn eine Figur besiegt wird, werden alle Zustände abgeworfen. 2. Während des Schritts Aufräumen einer Kampagne werden alle Zustände abgeworfen. 3. Aktionen auf Zustandskarten, Fähigkeiten (z.B. Gesundung) und andere Spieleffekte erlauben das Abwerfen von Zuständen. Voraussetzungen, um erfolgreich einen Zustand abzuwerfen, sind bei der Fähigkeit oder dem Effekt beschrieben.",
          "Effekte von Zustandskarten beziehen sich oft auf den Zug einer Figur. Für Monster, Vertraute, Gefährten und andere Figuren, die keinen eigenen Zug haben, sollte „Zug“ besser als „Aktivierung“ gelesen werden.",
          "Eine Figur, die anderweitig begrenzte Aktionen hat (z.B. Vertraute, Figuren, die als Helden behandelt werden), kann eine ihrer Aktionen nutzen, um eine Aktion durchzuführen, die auf der Zustandskarte abgedruckt ist. Aktuell sind solche Aktionen bei den Zuständen Blutend, Brennend und Betäubt möglich.",
          "Zustandskarten und Marker sind nicht auf den Vorrat begrenzt."
        ]
      },
      {
        "label": "Betäubt",
        "points": [
          "Kartentext: Aktion: Wirf diese Karte bzw. diesen Marker ab. Dies muss deine nächste Aktion in deinem Zug sein, solange du diese Karte bzw. diesen Marker hast.",
          "„Betäubt“ kann durch eine einzige Aktion entfernt werden und die Figur kann verbleibende Aktionen ohne Beschränkungen einsetzen.",
          "„Betäubt“ betrifft Fähigkeiten, die keine Aktionen sind, nicht.",
          "„Betäubt“ werden unterbricht oder beendet keine laufende Bewegungsaktion (oder irgendeine andere Aktion)."
        ]
      }
    ],
    "notes": [
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein betäubtes Monster seine Aktivierung beginnt, benutzt es seine erste Aktion um „Betäubt“ abwerfen und fährt dann mit der ersten Aktion auf der Aktionsliste fort.",
          "Wenn ein Monster in der Mitte seiner Aktivierung betäubt wird, beendet es seine aktuelle Aktion; wenn es dann noch eine Aktion übrig hat, wirft es „Betäubt“ ab. Blutend Kartentext: Aktion: Wirf diese Karte bzw. diesen Marker ab. Solange du diese Karte bzw. diesen Marker hast, erleidest du für jede andere Aktion, die du ausführst, 1 Erschöpfung."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein Blutendes Monster keine andere Aktion durchführen kann, führt es die spezielle Aktion aus, um „Blutend“ abzuwerfen. Brennend Kartentext: Du oder eine zu dir benachbarte Figur können eine Aktion ausführen, um diese Karte bzw. diesen Marker abzuwerfen. Am Ende deines Zuges erleiden du und alle zu dir benachbarten Verbündeten 1 Herz.",
          "Wenn der Zustand Brennend vor dem Ende des Zuges einer Figur abgelegt wird, erleidet die brennende Figur keinen Schaden.",
          "Figuren, die als Helden behandelt werden, können die spezielle Aktion durchführen, um Brennend von sich selbst oder einem benachbarten Helden abzuwerfen."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein Brennendes Monster keine andere Aktion durchführen kann, führt es die spezielle Aktion aus, um „Brennend“ von sich selbst oder einem benachbarten Monster abzuwerfen.",
          "Wenn zu dem Monster mehrere Monster benachbart sind, von denen es „Brennend“ abwerfen kann, dann wählt es das Monster, mit den geringsten Lebenspunkten. Erkrankt Kartentext: Lege zu Beginn deines Zuges eine Willenskraft -Probe ab. Wenn sie gelingt, wirf diese Karte bzw. Marker ab. Wenn sie misslingt, erleidest du 1 Erschöpfung und behältst diese Karte bzw. diesen Marker. Gelähmt Kartentext: Du kannst keine Bewegungsaktionen ausführen und keine Erschöpfung erleiden, um Bewegungspunkte zu erhalten. Wirf diese Karte bzw. diesen Marker am Ende deines Zuges ab.",
          "Wenn eine Figur gelähmt wird, sind alle Bewegungspunkte, egal aus welcher Quelle, verloren.",
          "Jede Fähigkeit, die keine Bewegungsaktion ist, kann benutzt werden, wenn eine Figur gelähmt ist. Dies beinhaltet Fähigkeiten, die Figuren von dem Spielplan entfernen und in ein anderes Feld platzieren, Fähigkeiten, die es einer Figur erlauben, sich eine Anzahl an Feldern basierend auf ihrer Geschwindigkeit zu bewegen und Fähigkeiten, die es einer Figur erlauben, Bewegungspunkte zu erhalten.",
          "Errata (GER): Das aktuelle Errata gibt an, dass gelähmte Helden Erschöpfung erleiden können, um Bewegungspunkte zu bekommen. Dies ist falsch und wird in den nächsten offiziellen Errata geändert."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Ein gelähmtes Monster überspringt alle Aktionen, die eine Bewegungsaktion erfordern.",
          "Am Ende jeder Aktivierung von gelähmten Monstern wird dieser Zustand abgeworfen. Geschwächt Kartentext: Du erhältst -1 Verteidigung auf deine Verteidigungswürfe und -1 Herz auf alle deine Angriffswürfe. Wenn du eine Ausruhaktion ausführst, wirfst du diese Karte bzw. diesen Marker ab.",
          "Figuren, die als Held behandelt werden, können sich nicht ausruhen, um Geschwächt zu entfernen, es sei denn, etwas anderes ist angegeben. Todgeweiht Kartentext: Jedes Mal, wenn du Herz erleidest, erleidest du 1 Herz zusätzlich. Jeder deiner Angriffe hat: Schub: Wirf diese Karte bzw. diesen Marker ab.",
          "Zustände werden in Schritt 5 des Kampfes hinzugefügt, wenn der Schaden zugefügt wird. Da Todgeweiht ausgelöst wird, wenn eine Figur Schaden erleidet (was stattfindet nachdem Schaden zugefügt wird), wird es bereits während des Angriffs ausgelöst, in welchem es zugefügt wurde (siehe \"Schritte im Kampf \" auf Seite 6).",
          "Todgeweiht erhöht den erlittenen Herz durch den Angriff um 1 Herz. Es erzeugt keine weitere Instanz von zugefügtem Schaden."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein Monster einen Angriff durchführt und 1 oder mehrere Schub übrig hat, nachdem es alle Schub ausgegeben hat (Schub die keinen Effekt haben und nicht benötigt werden, werden ignoriert), gibt es 1 Schub aus, um „Todgeweiht“ abzuwerfen. Verängstigt Kartentext: Du kannst keine Schub einsetzen. Wenn sich am Ende deines Zuges keine gegnerischen Figuren in deiner Sichtlinie befinden, lege diese Karte bzw. diesen Marker ab."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Wenn ein verängstigtes Monster sich zurückzieht, beendet es seine Bewegung falls möglich in der Art, dass es sich nicht in Sichtlinie einer feindlichen Figur befindet.",
          "Dies übergeht das Verhalten des Monsters, sich so weit weg wie möglich vom nächsten Helden zu bewegen, wenn es sich somit aus der Sichtlinie von allen Helden bewegen kann. Verflucht Kartentext: Du kannst keine Monsteraktionen oder Aktion -Fertigkeiten ausführen. Zu Beginn deines Zuges legst du eine Wissen -Probe ab. Wenn sie gelingt, wirfst du diese Karte bzw. diesen Marker ab. Wenn sie misslingt, behältst du diese Karte bzw. diesen Marker. Verfluchte Helden können immer noch Heldenfähigkeiten oder Heldentaten, die eine Aktion benötigen, durchführen, da Heldenfertigkeiten definiert sind als Fähigkeiten exklusiv von Klassenkarten."
        ]
      },
      {
        "title": "Wege zum Ruhm",
        "points": [
          "Ein verfluchtes Monster überspringt alle Aktionen, die eine spezielle Monsteraktion auf seiner Monsterkarte benötigen. Vergiftet Kartentext: Lege zu Beginn deines Zuges eine Stärke -Probe ab. Wenn sie gelingt, wirf diese Karte bzw. diesen Marker ab. Wenn sie misslingt, erleidest du 1 Herz und behältst diese Karte bzw. diesen Marker. Verwandte Themen: Aktivierung, Angriffe, Besiegt, Fähigkeiten"
        ]
      }
    ],
    "related": [],
    "page": 45
  },
  {
    "id": "zwei-spieler-spiel",
    "term": "Zwei-Spieler-Spiel",
    "groups": [
      {
        "label": null,
        "points": [
          "In einem Spiel mit zwei Helden, erhalten die Helden einen zusätzlichen Vorteil: –– Während „3. Aktionen ausführen“ im Heldenspielzug (siehe \"Heldenspielzug\" auf Seite 36) darf jeder Held einen zusätzlichen Angriff ausführen, der keine Aktion erfordert. –– Dieser Angriff kann keine Spezialaktion sein, die einen Angriff enthält (z. B. „Kampfrausch“ oder „Explodierende Rune“); der Angriff muss eine normale Aktion Angreifen sein. –– Dieser Angriff kann nur im Schritt „Aktionen ausführen“ des Heldenspielzuges ausgeführt werden. –– Dieser Angriff kann vor oder nach jeder seiner Aktionen ausgeführt werden. –– Falls ein Held in seinem Zug den freien Angriff nicht nutzen konnte oder wollte, darf er stattdessen am Ende seines Heldenspielzuges 2 Herz regenerieren."
        ]
      }
    ],
    "notes": [],
    "related": [],
    "page": 46
  }
]
