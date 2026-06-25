import { useState, useMemo } from 'react'
import { CONDITIONS } from '../data/conditions'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import ModalOverlay from '../components/ModalOverlay'
import { SearchInput, OwnedToggle, LangToggle, type Lang } from '../components/Filters'
import { renderGameTextInline } from '../components/GameSymbols'
import { conditionCardDeUrl } from '../data/assetUrls'
import type { Condition } from '../types/game'

function ConditionImg({ id, name, className, onClick }: { id: string; name: string; className?: string; onClick?: () => void }) {
  const [err, setErr] = useState(false)
  if (err) return null
  const img = <img src={conditionCardDeUrl(id)} alt={name} className={className ?? 'w-full h-auto'} loading="lazy" onError={() => setErr(true)} />
  return onClick
    ? <button onClick={onClick} className="block shrink-0 w-20 rounded overflow-hidden border border-dungeon-700 hover:border-gold-500 focus:outline-none focus:border-gold-400 transition-colors self-start" title="Karte vergrößern">{img}</button>
    : img
}

export default function ConditionsPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [lang, setLang] = useState<Lang>('de')
  const [lightbox, setLightbox] = useState<Condition | null>(null)

  const expansionMap = useMemo(() => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])), [])

  const filtered = useMemo(() => CONDITIONS.filter((c) => {
    if (onlyOwned && !ownedIds.includes(c.expansionId)) return false
    if (search) {
      const q = search.toLowerCase()
      if (!c.nameDe.toLowerCase().includes(q) && !c.nameEn.toLowerCase().includes(q) && !c.textDe.toLowerCase().includes(q)) return false
    }
    return true
  }), [search, onlyOwned, ownedIds])

  return (
    <div className="space-y-6">
      {lightbox && (
        <ModalOverlay onClose={() => setLightbox(null)} ariaLabel={lightbox.nameDe} backdropClassName="bg-black/85" className="relative max-w-xs w-full">
          <button onClick={() => setLightbox(null)} className="absolute -top-8 right-0 text-gray-400 hover:text-white text-sm">✕ Schließen</button>
          <ConditionImg id={lightbox.id} name={lightbox.nameDe} className="w-full rounded-lg shadow-2xl border border-dungeon-600" />
        </ModalOverlay>
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">🩹 Zustände</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Zustandskarten {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'} · deutsche Original-Karten + Effekttext
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Zustand suchen…" className="w-52" />
        <LangToggle value={lang} onChange={setLang} className="ml-auto" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
      </div>

      {filtered.length === 0 ? (
        <div className="card text-center text-gray-500 py-12">Keine Zustände gefunden. Passe deine Suche oder Sammlung an.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((c) => {
            const exp = expansionMap[c.expansionId]
            return (
              <div key={c.id} className="card flex gap-3 text-sm">
                <ConditionImg id={c.id} name={c.nameDe} onClick={() => setLightbox(c)} />
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-gold-300 font-bold">{lang === 'de' ? c.nameDe : c.nameEn}</h3>
                    <span className="text-[10px] text-gray-500 shrink-0">{lang === 'de' ? c.nameEn : c.nameDe}</span>
                  </div>
                  <p className="text-[11px] text-gray-500">{exp?.nameDe ?? c.expansionId}</p>
                  <div className="text-gray-300 leading-snug">{renderGameTextInline(c.textDe)}</div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
