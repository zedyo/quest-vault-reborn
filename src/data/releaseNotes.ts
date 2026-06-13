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
