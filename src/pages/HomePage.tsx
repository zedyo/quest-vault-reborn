import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'
import { useSessionStore } from '../store/useSessionStore'
import { HEROES } from '../data/heroes'
import { MONSTERS } from '../data/monsters'
import { HERO_CLASSES } from '../data/heroClasses'
import ReleaseNotesModal from '../components/ReleaseNotesModal'

// Werkzeuge zum Erstellen/Verwalten – mit Beschreibung prominent.
const TOOLS = [
  { icon: '🗺️', title: 'Kartenbauer', description: 'Spielplan-Plättchen platzieren, drehen und mit Overlays kennzeichnen.', href: '/karte' },
  { icon: '📜', title: 'Quest-Editor', description: 'Quests mit Begegnungen, Zielen, Monstern und Erzähltext erstellen.', href: '/quest' },
  { icon: '🎲', title: 'Session-Tracker', description: 'Laufende Kampagne festhalten: Helden, Klassen, Ausrüstung und Overlord-Setup.', href: '/session' },
  { icon: '👜', title: 'Meine Sammlung', description: 'Erweiterungen wählen – alle Werkzeuge passen sich an.', href: '/sammlung' },
]

// Nachschlage-/Datenseiten – kompakte Kacheln (Symbol + Titel).
const OVERVIEWS = [
  { icon: '👹', title: 'Monster', href: '/monster' },
  { icon: '🧙', title: 'Helden', href: '/helden' },
  { icon: '⚔️', title: 'Klassen', href: '/klassen' },
  { icon: '🛒', title: 'Items', href: '/items' },
  { icon: '👑', title: 'Overlord', href: '/overlord' },
  { icon: '🗡️', title: 'Leutnants', href: '/leutnants' },
  { icon: '🎭', title: 'Agenten', href: '/agenten' },
  { icon: '📜', title: 'Plotdecks', href: '/plotdecks' },
  { icon: '🏰', title: 'Kampagnen', href: '/kampagnen' },
  { icon: '🧭', title: 'Reisekarten', href: '/reisekarten' },
  { icon: '🗣️', title: 'Gerüchte', href: '/geruechte' },
  { icon: '🩹', title: 'Zustände', href: '/zustaende' },
  { icon: '📖', title: 'Regeln & Referenz', href: '/regeln' },
  { icon: '📋', title: 'Errata & FAQ', href: '/klarstellungen' },
]

export default function HomePage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const questCount = useGameStore((s) => s.quests.length)
  const sessionCount = useSessionStore((s) => s.sessions.length)
  const [showReleaseNotes, setShowReleaseNotes] = useState(false)

  const ownedMonsters = MONSTERS.filter((m) => ownedIds.includes(m.expansionId)).length
  const ownedHeroes = HEROES.filter((h) => ownedIds.includes(h.expansionId)).length

  return (
    <div className="space-y-10">
      {showReleaseNotes && <ReleaseNotesModal onClose={() => setShowReleaseNotes(false)} />}

      <div className="text-center py-6 space-y-3">
        <h2 className="font-display text-4xl text-gold-400 font-bold">Quest Vault Reborn</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Das Community-Tool für{' '}
          <strong className="text-gold-300">Descent – Die Reise ins Dunkel 2. Edition</strong>.
          Erstelle Quests, baue Spielpläne und verwalte deine Kampagne.
        </p>
        <p className="text-gray-600 text-sm">
          Wiedergeburt des originalen Quest Vault von Fantasy Flight Games (2013–2020)
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
        {[
          { label: 'Erweiterungen', value: ownedIds.length },
          { label: 'Monster', value: ownedMonsters },
          { label: 'Helden', value: ownedHeroes },
          { label: 'Quests', value: questCount },
          { label: 'Sessions', value: sessionCount },
        ].map((s) => (
          <div key={s.label} className="card text-center">
            <p className="text-2xl font-bold text-gold-400">{s.value}</p>
            <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Werkzeuge */}
      <div>
        <h3 className="font-display text-lg text-gray-200 font-semibold mb-3">Werkzeuge</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TOOLS.map((f) => (
            <Link
              key={f.href}
              to={f.href}
              className="card hover:border-gold-500 hover:-translate-y-0.5 transition-all duration-150 group"
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <h4 className="text-gold-300 font-semibold group-hover:text-gold-400 transition-colors">
                {f.title}
              </h4>
              <p className="text-gray-400 text-sm mt-1">{f.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Übersichten & Referenz */}
      <div>
        <h3 className="font-display text-lg text-gray-200 font-semibold mb-1">Übersichten &amp; Referenz</h3>
        <p className="text-gray-600 text-xs mb-3">Vollständige Spieldaten – filtern sich nach deiner Sammlung.</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
          {OVERVIEWS.map((o) => (
            <Link
              key={o.href}
              to={o.href}
              className="card flex flex-col items-center justify-center gap-1.5 py-4 text-center hover:border-gold-500 hover:-translate-y-0.5 transition-all duration-150 group"
            >
              <span className="text-2xl">{o.icon}</span>
              <span className="text-xs font-medium text-gray-300 group-hover:text-gold-300 transition-colors">{o.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Projekt-Status für Fans */}
      <div className="rounded-lg border border-dungeon-600 overflow-hidden">
        <div className="bg-dungeon-800 px-4 py-3 flex items-center gap-2 border-b border-dungeon-600">
          <span className="text-lg">🛠️</span>
          <div>
            <p className="text-amber-400 font-semibold text-sm">Hobbyprojekt in aktiver Entwicklung</p>
            <p className="text-gray-500 text-xs mt-0.5">
              Quest Vault Reborn wird von einer einzelnen Person in der Freizeit entwickelt und laufend erweitert.
              Kein kommerzielles Produkt – sondern Leidenschaft für Descent.
            </p>
          </div>
        </div>

        <div className="p-4 grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-gold-400 font-semibold text-sm mb-3 flex items-center gap-1.5">
              <span className="text-green-500">✓</span> Bereits verfügbar
            </h4>
            <ul className="space-y-2">
              {[
                { icon: '🗺️', text: 'Spielplan-Baukasten – Plättchen platzieren, drehen und mit Overlay-Token (Türen, Gelände, Marker, Figuren) markieren' },
                { icon: '📜', text: 'Quest-Editor – eigene Abenteuer erstellen, speichern und exportieren' },
                { icon: '👹', text: `Alle ${MONSTERS.length} Monstergruppen mit vollständigen Spielwerten (Akt 1 & Akt 2)` },
                { icon: '🧙', text: `${HEROES.length} Helden und ${HERO_CLASSES.length} Klassen aus allen Erweiterungen` },
                { icon: '🃏', text: 'Karten-Datenbank: Items & Relikte, Overlord, Leutnants, Agenten und alle Plotdecks' },
                { icon: '🏰', text: 'Kampagnen-Überblick, Advanced Quests und Reisekarten' },
                { icon: '📋', text: 'Errata & FAQ aus dem Community Rules Reference Guide – aufklappbar an jeder Karte + durchsuchbare Regelklärungen' },
                { icon: '💾', text: 'Quests automatisch im Browser speichern – auch offline nutzbar' },
                { icon: '🎲', text: 'Session-Tracker – laufende Kampagne festhalten: Helden mit Klasse, Fähigkeiten und Ausrüstung + Overlord-Setup; als JSON exportier- und importierbar' },
                { icon: '📖', text: 'Szenario-Protokoll im Session-Tracker – je Szenario XP, Gold, Items und Einkauf eintragen; wird automatisch auf den aktuellen Stand angerechnet' },
              ].map((item) => (
                <li key={item.text} className="flex gap-2 text-sm text-gray-400">
                  <span className="shrink-0 text-base leading-5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-semibold text-sm mb-3 flex items-center gap-1.5">
              <span className="text-amber-500">◎</span> Geplant & in Arbeit
            </h4>
            <ul className="space-y-2">
              {[
                { icon: '❤️', text: 'Monster-Lebenspunkte live tracken – kein Plättchen-Chaos mehr auf dem Tisch' },
                { icon: '⚔️', text: 'Overlord-Zentrale – eigenes Deck verwalten, Leutnanten steuern, Helden im Blick behalten' },
                { icon: '🛡️', text: 'Spieler-Ansicht – jeder Held hat seine eigene Übersicht am Tisch' },
                { icon: '🔄', text: 'Geräte-Synchronisation – Overlord und Spieler teilen sich denselben Spielstand' },
              ].map((item) => (
                <li key={item.text} className="flex gap-2 text-sm text-gray-500">
                  <span className="shrink-0 text-base leading-5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-4 py-3 border-t border-dungeon-700 bg-dungeon-900/50 space-y-1.5">
          <p className="text-xs text-gray-500 text-center">
            Da sich das Projekt noch in aktiver Entwicklung befindet, können vereinzelt Fehler auftreten.
            Gemeldete Fehler werden schnellstmöglich behoben.
          </p>
          <p className="text-xs text-gray-600 text-center">
            Fehler gefunden oder einen Feature-Wunsch?{' '}
            <a href="mailto:ze.d@me.com" className="text-gold-600 hover:text-gold-400 transition-colors">
              ze.d@me.com
            </a>
          </p>
          <p className="text-[11px] text-gray-700 text-center pt-1">
            Quest Vault Reborn ·{' '}
            <button
              onClick={() => setShowReleaseNotes(true)}
              className="text-gray-600 hover:text-gold-500 underline decoration-dotted underline-offset-2 transition-colors"
              title="Was ist neu? Versionsverlauf anzeigen"
            >
              Version {__APP_VERSION__}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
