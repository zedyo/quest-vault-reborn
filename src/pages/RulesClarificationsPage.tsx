import { useState, useMemo, useRef, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { RULE_CLARIFICATIONS, CRRG_SOURCE, CRRG_URL } from '../data/ruleClarifications'
import { LINKED_ERRATA, type LinkedErrata } from '../data/errataLinks'
import { ErrataEntryBody } from '../components/ErrataBox'
import { SearchInput } from '../components/Filters'
import type { ErrataScope, RuleClarification } from '../types/game'

// ── CRRG – Errata & Regelklärungen (durchsuchbar) ────────────────────────────
//
// Durchsuchbare Sektion für den Community Rules Reference Guide V1.15:
//  • Teil 1 – alphabetische Regelklärungen (nach Schlagwörtern)
//  • Teil 2 – komponentenbezogene Errata & FAQ (nach Abschnitt gruppiert; die
//    Einträge erscheinen zusätzlich als aufklappbare Box direkt an der Karte)

type Tab = 'rules' | 'errata'

const SCOPE_LINK: Record<ErrataScope, { path: string; label: string } | null> = {
  hero: { path: '/helden', label: 'Helden' },
  class: { path: '/klassen', label: 'Klassen' },
  item: { path: '/items', label: 'Items' },
  overlord: { path: '/overlord', label: 'Overlord' },
  plot: { path: '/plotdecks', label: 'Plotdecks' },
  monster: { path: '/monster', label: 'Monster' },
  'monster-ability': null,
  adventure: { path: '/kampagnen', label: 'Kampagnen' },
  rumor: { path: '/geruechte', label: 'Gerüchte' },
  'secret-room': null,
  other: null,
}

function norm(s: string): string {
  return s.toLowerCase().replace(/ß/g, 'ss')
}

// Kapitelnummer („2.1 ") aus der Abschnitts-/Kategorie-Bezeichnung entfernen.
function stripSection(s: string): string {
  return s.replace(/^\d+(?:\.\d+)?\s+/, '')
}
// Nach Kapitelnummer sortieren (2.1, 2.2, … 2.10).
function sectionOrder(s: string): number {
  const m = s.match(/^(\d+)\.(\d+)/)
  return m ? Number(m[1]) * 100 + Number(m[2]) : 999
}

// Sucht in Begriff/Name + allen Aufzählungspunkten + Notizen.
function clarificationMatches(c: RuleClarification, q: string): boolean {
  if (!q) return true
  if (norm(c.term).includes(q)) return true
  for (const g of c.groups) {
    if (g.label && norm(g.label).includes(q)) return true
    if (g.points.some((p) => norm(p).includes(q))) return true
  }
  for (const n of c.notes) if (n.points.some((p) => norm(p).includes(q))) return true
  return false
}
function errataMatches(e: LinkedErrata, q: string): boolean {
  if (!q) return true
  if (norm(e.nameDe).includes(q) || norm(e.sectionDe).includes(q)) return true
  for (const g of e.groups) {
    if (g.label && norm(g.label).includes(q)) return true
    if (g.points.some((p) => norm(p).includes(q))) return true
  }
  for (const n of e.notes) if (n.points.some((p) => norm(p).includes(q))) return true
  return false
}

// Begriff → id für „Verwandte Themen"-Sprünge.
const TERM_TO_ID = new Map(RULE_CLARIFICATIONS.map((c) => [norm(c.term), c.id]))

function RelatedLinks({ related, onJump }: { related: string[]; onJump: (id: string) => void }) {
  if (!related.length) return null
  return (
    <div className="flex flex-wrap items-center gap-1 pt-1">
      <span className="text-[10px] text-gray-600 uppercase tracking-wide">Verwandt:</span>
      {related.map((t, i) => {
        const id = TERM_TO_ID.get(norm(t))
        return id ? (
          <button
            key={i}
            onClick={() => onJump(id)}
            className="text-[10px] text-gold-400/90 hover:text-gold-300 underline decoration-dotted underline-offset-2"
          >
            {t}
          </button>
        ) : (
          <span key={i} className="text-[10px] text-gray-500">{t}</span>
        )
      })}
    </div>
  )
}

function ClarificationCard({
  c,
  highlighted,
  onJump,
}: {
  c: RuleClarification
  highlighted: boolean
  onJump: (id: string) => void
}) {
  return (
    <div
      id={`rc-${c.id}`}
      className={`card scroll-mt-24 space-y-2 transition-shadow ${highlighted ? 'ring-2 ring-gold-400' : ''}`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <h4 className="text-gray-100 font-semibold">{c.term}</h4>
        <span className="shrink-0 text-[10px] text-gray-600">S. {c.page}</span>
      </div>
      <div className="text-xs">
        <ErrataEntryBody entry={{ ...c, id: c.id, scope: 'other', sectionDe: '', nameDe: c.term }} />
      </div>
      <RelatedLinks related={c.related} onJump={onJump} />
    </div>
  )
}

function ErrataCard({ e, highlighted }: { e: LinkedErrata; highlighted?: boolean }) {
  const link = e.targetId ? SCOPE_LINK[e.scope] : null
  const to = link ? (e.scope === 'plot' ? `${link.path}?deck=${e.targetId}` : link.path) : null
  return (
    <div
      id={`err-${e.id}`}
      className={`card space-y-1.5 scroll-mt-24 transition-shadow ${highlighted ? 'ring-2 ring-gold-400' : ''}`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <h4 className="text-gray-100 font-semibold text-sm leading-snug">
          {e.nameDe}
          {e.subgroupDe && <span className="text-gray-500 font-normal text-xs"> · {e.subgroupDe}</span>}
        </h4>
        <span className="shrink-0 text-[10px] text-gray-600">S. {e.page}</span>
      </div>
      <div className="text-xs">
        <ErrataEntryBody entry={e} />
      </div>
      {to && link && (
        <Link
          to={to}
          className="inline-block text-[10px] text-gold-400/90 hover:text-gold-300 underline decoration-dotted underline-offset-2"
        >
          ↗ Auf der {link.label}-Seite ansehen
        </Link>
      )}
    </div>
  )
}

// Alle Errata-Kategorien (Abschnitte) in Kapitelreihenfolge – für den Kategorie-Filter.
const ERRATA_SECTIONS = Array.from(new Set(LINKED_ERRATA.map((e) => e.sectionDe))).sort(
  (a, b) => sectionOrder(a) - sectionOrder(b),
)

export default function RulesClarificationsPage() {
  const [searchParams] = useSearchParams()
  const [tab, setTab] = useState<Tab>('rules')
  const [search, setSearch] = useState('')
  const [sectionFilter, setSectionFilter] = useState<string>('all')
  const [highlightId, setHighlightId] = useState<string | null>(null)
  const [errataHighlightId, setErrataHighlightId] = useState<string | null>(null)
  const [pendingErrataScroll, setPendingErrataScroll] = useState<string | null>(null)
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const errataHighlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const q = norm(search.trim())

  // Deep-Link `/klarstellungen?errata=<id>` (z. B. aus dem „Monster des Tages"-
  // Widget): Errata-Tab öffnen, Filter zurücksetzen, Eintrag hervorheben und zum
  // Scrollen vormerken. Das eigentliche Scrollen passiert in einem separaten
  // Effekt, SOBALD die Errata-Liste im DOM steht (der Tab startet auf „rules",
  // daher existiert das Ziel im ersten Render noch nicht).
  const errataParam = searchParams.get('errata')
  useEffect(() => {
    if (!errataParam) return
    setTab('errata')
    setSectionFilter('all')
    setSearch('')
    setErrataHighlightId(errataParam)
    setPendingErrataScroll(errataParam)
    if (errataHighlightTimer.current) clearTimeout(errataHighlightTimer.current)
    errataHighlightTimer.current = setTimeout(() => setErrataHighlightId(null), 2500)
  }, [errataParam])
  useEffect(() => () => { if (errataHighlightTimer.current) clearTimeout(errataHighlightTimer.current) }, [])

  const clarifications = useMemo(
    () => RULE_CLARIFICATIONS.filter((c) => clarificationMatches(c, q)),
    [q],
  )
  const errataFiltered = useMemo(
    () => LINKED_ERRATA.filter(
      (e) => (sectionFilter === 'all' || e.sectionDe === sectionFilter) && errataMatches(e, q),
    ),
    [q, sectionFilter],
  )
  const errataBySection = useMemo(() => {
    const map = new Map<string, LinkedErrata[]>()
    for (const e of errataFiltered) {
      const arr = map.get(e.sectionDe) ?? []
      arr.push(e)
      map.set(e.sectionDe, arr)
    }
    return map
  }, [errataFiltered])
  const errataCount = errataFiltered.length

  // Scrollt zum vorgemerkten Errata-Eintrag, sobald er tatsächlich gerendert ist
  // (Errata-Tab aktiv + Liste aufgebaut). `errataBySection` als Abhängigkeit sorgt
  // dafür, dass es erneut versucht wird, wenn die Liste (neu) aufgebaut wird.
  useEffect(() => {
    if (!pendingErrataScroll || tab !== 'errata') return
    const el = document.getElementById(`err-${pendingErrataScroll}`)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setPendingErrataScroll(null)
  }, [pendingErrataScroll, tab, errataBySection])

  const jumpTo = (id: string) => {
    setTab('rules')
    setSearch('')
    setHighlightId(id)
    // Nach dem Neu-Rendern (Filter zurückgesetzt) zum Ziel scrollen.
    requestAnimationFrame(() => {
      document.getElementById(`rc-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
    if (highlightTimer.current) clearTimeout(highlightTimer.current)
    highlightTimer.current = setTimeout(() => setHighlightId(null), 2500)
  }
  useEffect(() => () => { if (highlightTimer.current) clearTimeout(highlightTimer.current) }, [])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">📖 Errata &amp; Regelklärungen</h2>
        <p className="text-gray-400 text-sm">
          Nachschlagewerk aus dem{' '}
          <a href={CRRG_URL} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 underline decoration-dotted underline-offset-2">
            {CRRG_SOURCE}
          </a>{' '}
          – offizielle FFG-Errata/FAQ + Community-FAQs. Durchsuchbar nach Schlagwörtern.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-0 rounded overflow-hidden border border-dungeon-600 w-fit">
        {([['rules', `🔎 Regelklärungen (${RULE_CLARIFICATIONS.length})`], ['errata', `📋 Errata & FAQ (${LINKED_ERRATA.length})`]] as const).map(([t, label]) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${
              tab === t ? 'bg-accent text-onaccent' : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder={tab === 'rules' ? 'Regelbegriff suchen… (z. B. Sichtlinie, Betäubt)' : 'Karte/Regel suchen…'}
        className="w-full sm:w-96"
      />

      <p className="text-[11px] text-gray-600 -mt-3">
        Quelle: {CRRG_SOURCE}. Diese Zusatzinfos erweitern die Original-Spieldaten als optionale Variante –
        sie ersetzen die Regelhefte/Karten nicht.
      </p>

      {tab === 'rules' && (
        clarifications.length === 0 ? (
          <div className="card text-center text-gray-500 py-12">Kein Regelbegriff gefunden.</div>
        ) : (
          <>
            <p className="text-xs text-gray-500">{clarifications.length} Begriffe</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 items-start">
              {clarifications.map((c) => (
                <ClarificationCard key={c.id} c={c} highlighted={c.id === highlightId} onJump={jumpTo} />
              ))}
            </div>
          </>
        )
      )}

      {tab === 'errata' && (
        <>
          {/* Kategorie-Filter (ohne Kapitelnummer) */}
          <div className="flex flex-wrap gap-1.5">
            {(['all', ...ERRATA_SECTIONS] as string[]).map((s) => {
              const activeChip = sectionFilter === s
              return (
                <button
                  key={s}
                  onClick={() => setSectionFilter(s)}
                  className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                    activeChip
                      ? 'bg-accent border-gold-400 text-onaccent font-medium'
                      : 'bg-dungeon-800 border-dungeon-600 text-gray-400 hover:text-gray-200 hover:border-dungeon-500'
                  }`}
                >
                  {s === 'all' ? 'Alle Kategorien' : stripSection(s)}
                </button>
              )
            })}
          </div>

          {errataCount === 0 ? (
            <div className="card text-center text-gray-500 py-12">Kein Errata-/FAQ-Eintrag gefunden.</div>
          ) : (
            <div className="space-y-8">
              <p className="text-xs text-gray-500">{errataCount} Einträge</p>
              {Array.from(errataBySection.entries()).map(([section, entries]) => (
                <section key={section}>
                  <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                    {stripSection(section)} <span className="text-gray-600 normal-case">({entries.length})</span>
                  </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 items-start">
                  {entries.map((e) => (
                    <ErrataCard key={e.id} e={e} highlighted={e.id === errataHighlightId} />
                  ))}
                </div>
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
