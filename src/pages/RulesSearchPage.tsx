import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SEARCH_INDEX, SEARCH_CATEGORIES, type SearchCategory } from '../data/rulesSearchIndex'
import { SearchInput } from '../components/Filters'
import { renderGameText } from '../components/GameSymbols'

// Suchnormalisierung: klein + ß→ss + Umlaut-Faltung, damit „staerke"/„Stärke" und
// Eingaben ohne Umlaute trotzdem treffen.
function norm(s: string): string {
  return s.toLowerCase().replace(/ß/g, 'ss').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
}

// Vorab normalisierter Suchtext je Eintrag (einmalig beim Modul-Laden).
const HAYSTACK = SEARCH_INDEX.map((e) => ({ e, hay: norm(`${e.title} ${e.text}`) }))

const CAP = 200
const MIN = 2

export default function RulesSearchPage() {
  const [query, setQuery] = useState('')
  const [cats, setCats] = useState<Set<SearchCategory>>(new Set())

  const words = useMemo(() => norm(query.trim()).split(/\s+/).filter(Boolean), [query])

  // Treffer OHNE Kategoriefilter (für die Chip-Zähler).
  const matched = useMemo(() => {
    if (query.trim().length < MIN || words.length === 0) return []
    return HAYSTACK.filter(({ hay }) => words.every((w) => hay.includes(w))).map((x) => x.e)
  }, [words, query])

  const counts = useMemo(() => {
    const m = new Map<SearchCategory, number>()
    for (const e of matched) m.set(e.category, (m.get(e.category) ?? 0) + 1)
    return m
  }, [matched])

  const results = useMemo(
    () => (cats.size ? matched.filter((e) => cats.has(e.category)) : matched),
    [matched, cats],
  )

  function toggle(c: SearchCategory) {
    setCats((prev) => {
      const next = new Set(prev)
      next.has(c) ? next.delete(c) : next.add(c)
      return next
    })
  }

  const tooShort = query.trim().length < MIN

  return (
    <div className="space-y-5">
      <header>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">🔎 Regelsuche</h2>
        <p className="text-gray-400 text-sm">
          Durchsucht {SEARCH_INDEX.length.toLocaleString('de-DE')} erfasste Regel- und Kartentexte auf einmal –
          CRRG-Regelklärungen &amp; Errata, die Regel-Referenz sowie alle funktionalen
          Karten-/Fähigkeitstexte. Jeder Treffer verlinkt zur Quellseite.
        </p>
      </header>

      <SearchInput value={query} onChange={setQuery} placeholder="Regel, Karte, Fähigkeit, Zustand …" className="w-full max-w-xl" />

      <div className="flex flex-wrap gap-1.5">
        {SEARCH_CATEGORIES.map((c) => {
          const active = cats.has(c)
          const n = counts.get(c) ?? 0
          const disabled = !tooShort && n === 0 && !active
          return (
            <button
              key={c}
              onClick={() => toggle(c)}
              disabled={disabled}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                active
                  ? 'bg-accent text-onaccent border-accent'
                  : disabled
                    ? 'border-dungeon-700 text-gray-600 cursor-default'
                    : 'border-dungeon-600 text-gray-300 hover:border-gold-500'
              }`}
            >
              {c}
              {!tooShort && <span className="opacity-70"> {n}</span>}
            </button>
          )
        })}
      </div>

      {tooShort ? (
        <p className="text-gray-500 text-sm">Mindestens {MIN} Zeichen eingeben …</p>
      ) : results.length === 0 ? (
        <p className="text-gray-400 text-sm">Keine Treffer für „{query.trim()}".</p>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-gray-500">
            {results.length.toLocaleString('de-DE')} Treffer{results.length > CAP ? ` (zeige erste ${CAP})` : ''}
          </p>
          <div className="space-y-2">
            {results.slice(0, CAP).map((e) => (
              <Link
                key={e.id}
                to={e.link}
                className="block card hover:border-gold-500 transition-colors focus:outline-none focus:border-gold-400"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-gray-100 font-semibold text-sm leading-snug">{e.title}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-wide text-gold-400 bg-dungeon-800 px-1.5 py-0.5 rounded">
                    {e.category}
                  </span>
                </div>
                <div className="text-xs text-gray-400 leading-snug mt-1">{renderGameText(e.text, 12)}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <p className="text-[11px] text-gray-600 border-t border-dungeon-800 pt-3">
        Durchsucht ausschließlich bereits in der App erfasste, IP-sichere Inhalte (eigene
        Zusammenfassungen, Community-Regelreferenz CRRG und funktionale Kartentexte) – kein
        wörtlicher Regelheft- oder Questbuch-Text.
      </p>
    </div>
  )
}
