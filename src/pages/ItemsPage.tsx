import { useState, useMemo, useEffect } from 'react'
import { SHOP_ITEMS, RELICS } from '../data/items'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import type { ShopItem, Relic, DieColor, ItemEquip } from '../types/game'

const DIE_COLOR: Record<DieColor, string> = {
  blue:   'bg-blue-600',
  red:    'bg-red-600',
  yellow: 'bg-yellow-500',
  green:  'bg-green-600',
  white:  'bg-gray-100',
  gray:   'bg-gray-400',
  brown:  'bg-amber-800',
  black:  'bg-gray-800 border border-gray-600',
  silver: 'bg-gray-300',
}

const EQUIP_DE: Record<ItemEquip, string> = {
  'one-hand':  '1 Hand',
  'two-hands': '2 Hände',
  'armor':     'Rüstung',
  'other':     'Zubehör',
}

function DiceRow({ dice }: { dice: DieColor[] }) {
  if (!dice.length) return null
  return (
    <div className="flex gap-1 items-center flex-wrap">
      {dice.map((d, i) => (
        <span key={i} className={`inline-block w-3.5 h-3.5 rounded-sm ${DIE_COLOR[d] ?? 'bg-gray-500'}`} title={d} />
      ))}
    </div>
  )
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

interface LightboxState { imageUrl: string; name: string }

function ItemLightbox({ imageUrl, name, onClose }: LightboxState & { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-xs w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-gray-400 hover:text-white text-sm"
        >
          ✕ Schließen
        </button>
        <img
          src={imageUrl}
          alt={name}
          className="w-full rounded-lg shadow-2xl border border-dungeon-600"
        />
      </div>
    </div>
  )
}

// ── Item-Karten ───────────────────────────────────────────────────────────────

function ItemThumbnail({ imageUrl, name, onOpen }: { imageUrl?: string; name: string; onOpen: () => void }) {
  const [imgError, setImgError] = useState(false)
  if (!imageUrl || imgError) return null
  return (
    <button
      className="shrink-0 w-14 self-stretch flex items-start rounded overflow-hidden border border-dungeon-700 hover:border-gold-500 transition-colors focus:outline-none focus:border-gold-400"
      onClick={(e) => { e.stopPropagation(); onOpen() }}
      title="Karte vergrößern"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto"
        onError={() => setImgError(true)}
        loading="lazy"
      />
    </button>
  )
}

function ShopCard({ item, onImageOpen }: { item: ShopItem; onImageOpen: () => void }) {
  return (
    <div className="card text-xs space-y-1.5">
      <div className="flex items-stretch gap-2">
        <ItemThumbnail imageUrl={item.imageUrl} name={item.nameEn} onOpen={onImageOpen} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <div className="flex-1 min-w-0">
              <div className="text-gray-100 font-semibold leading-snug">{item.nameEn}</div>
              <div className="text-gray-500 text-[10px]">{item.traits.join(', ')}</div>
            </div>
            <div className="shrink-0 text-right space-y-0.5">
              <div className="text-gold-400 font-semibold">{item.cost}G</div>
              <div className="text-[10px] text-gray-500">Akt {item.act}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[10px] text-gray-500">{EQUIP_DE[item.equip]}</span>
            {item.attack && (
              <span className="text-[10px] text-gray-500">
                {item.attack === 'melee' ? 'Nahkampf' : 'Fernkampf'}
              </span>
            )}
            <DiceRow dice={item.dice} />
          </div>
        </div>
      </div>
      <p className="text-gray-400 leading-snug">{item.rulesEn}</p>
    </div>
  )
}

function RelicCard({ item, onImageOpen }: { item: Relic; onImageOpen: () => void }) {
  return (
    <div className="card text-xs space-y-1.5 border-purple-900/30">
      <div className="flex items-stretch gap-2">
        <ItemThumbnail imageUrl={item.imageUrl} name={item.nameEn} onOpen={onImageOpen} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <div className="flex-1 min-w-0">
              <div className="text-purple-300 font-semibold leading-snug">{item.nameEn}</div>
              <div className="text-gray-500 text-[10px]">{item.traits.join(', ')}</div>
            </div>
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-purple-400 bg-purple-900/40 px-1.5 py-0.5 rounded">
              Relikt
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[10px] text-gray-500">{EQUIP_DE[item.equip]}</span>
            {item.attack && (
              <span className="text-[10px] text-gray-500">
                {item.attack === 'melee' ? 'Nahkampf' : 'Fernkampf'}
              </span>
            )}
            <DiceRow dice={item.dice} />
          </div>
        </div>
      </div>
      <p className="text-gray-400 leading-snug">{item.rulesEn}</p>
    </div>
  )
}

// ── Hauptseite ────────────────────────────────────────────────────────────────

type TabType = 'shop' | 'relics'
type ActFilter = 'all' | '1' | '2'

export default function ItemsPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [tab, setTab] = useState<TabType>('shop')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [search, setSearch] = useState('')
  const [actFilter, setActFilter] = useState<ActFilter>('all')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const expansionMap = useMemo(
    () => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])),
    [],
  )

  const filteredShop = useMemo(() => {
    return SHOP_ITEMS.filter((item) => {
      if (onlyOwned && !ownedIds.includes(item.expansionId)) return false
      if (actFilter !== 'all' && item.act !== Number(actFilter)) return false
      if (search) {
        const q = search.toLowerCase()
        if (!item.nameEn.toLowerCase().includes(q) && !item.traits.join(' ').toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [onlyOwned, ownedIds, search, actFilter])

  const filteredRelics = useMemo(() => {
    return RELICS.filter((item) => {
      if (onlyOwned && !ownedIds.includes(item.expansionId)) return false
      if (search) {
        const q = search.toLowerCase()
        if (!item.nameEn.toLowerCase().includes(q) && !item.traits.join(' ').toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [onlyOwned, ownedIds, search])

  const shopByExpansion = useMemo(() => {
    const map = new Map<string, ShopItem[]>()
    for (const item of filteredShop) {
      const arr = map.get(item.expansionId) ?? []
      arr.push(item)
      map.set(item.expansionId, arr)
    }
    return map
  }, [filteredShop])

  const relicsByExpansion = useMemo(() => {
    const map = new Map<string, Relic[]>()
    for (const item of filteredRelics) {
      const arr = map.get(item.expansionId) ?? []
      arr.push(item)
      map.set(item.expansionId, arr)
    }
    return map
  }, [filteredRelics])

  const totalVisible = tab === 'shop' ? filteredShop.length : filteredRelics.length

  return (
    <div className="space-y-6">
      {lightbox && (
        <ItemLightbox
          imageUrl={lightbox.imageUrl}
          name={lightbox.name}
          onClose={() => setLightbox(null)}
        />
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Ausrüstung</h2>
        <p className="text-gray-400 text-sm">
          {totalVisible} {tab === 'shop' ? 'Shop-Karten' : 'Relikte'}{' '}
          {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'}
          {tab === 'shop' && actFilter !== 'all' && ` · Akt ${actFilter}`}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-0 rounded overflow-hidden border border-dungeon-600 w-fit">
        {([['shop', '🛒 Shop-Karten'], ['relics', '💎 Relikte']] as const).map(([t, label]) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${
              tab === t
                ? 'bg-gold-700 text-gray-900'
                : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          placeholder="Item suchen…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-dungeon-800 border border-dungeon-700 text-gray-100 rounded px-3 py-2 text-sm w-52 focus:outline-none focus:border-gold-500"
        />

        {tab === 'shop' && (
          <div className="flex items-center gap-0 rounded overflow-hidden border border-dungeon-600">
            {([['all', 'Beide Akte'], ['1', 'Akt 1'], ['2', 'Akt 2']] as const).map(([v, label]) => (
              <button
                key={v}
                onClick={() => setActFilter(v)}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  actFilter === v
                    ? 'bg-dungeon-600 text-gray-100'
                    : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer select-none ml-auto">
          <input
            type="checkbox"
            checked={onlyOwned}
            onChange={(e) => setOnlyOwned(e.target.checked)}
            className="accent-gold-500"
          />
          Nur meine Sammlung
        </label>
      </div>

      <p className="text-[11px] text-gray-600 -mt-3">
        Kartentexte auf Englisch – offizielle deutsche Bezeichnungen der FFG-Edition noch nicht erfasst.
        Kartenbilder: Klick auf das Vorschaubild vergrößert die Karte.
      </p>

      {/* Content */}
      {tab === 'shop' && (
        shopByExpansion.size === 0 ? (
          <div className="card text-center text-gray-500 py-12">
            Keine Items gefunden. Passe deine Suche oder Sammlung an.
          </div>
        ) : (
          <div className="space-y-8">
            {Array.from(shopByExpansion.entries()).map(([expId, items]) => {
              const exp = expansionMap[expId]
              const act1 = items.filter((i) => i.act === 1)
              const act2 = items.filter((i) => i.act === 2)
              return (
                <div key={expId}>
                  <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                    {exp?.nameDe ?? expId}
                  </h3>
                  {act1.length > 0 && actFilter !== '2' && (
                    <>
                      <p className="text-xs text-gray-600 mb-2">Akt 1</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                        {act1.map((item) => (
                          <ShopCard
                            key={item.id}
                            item={item}
                            onImageOpen={() => item.imageUrl && setLightbox({ imageUrl: item.imageUrl, name: item.nameEn })}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  {act2.length > 0 && actFilter !== '1' && (
                    <>
                      <p className="text-xs text-gray-600 mb-2">Akt 2</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {act2.map((item) => (
                          <ShopCard
                            key={item.id}
                            item={item}
                            onImageOpen={() => item.imageUrl && setLightbox({ imageUrl: item.imageUrl, name: item.nameEn })}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        )
      )}

      {tab === 'relics' && (
        relicsByExpansion.size === 0 ? (
          <div className="card text-center text-gray-500 py-12">
            Keine Relikte gefunden. Passe deine Suche oder Sammlung an.
          </div>
        ) : (
          <div className="space-y-8">
            {Array.from(relicsByExpansion.entries()).map(([expId, items]) => {
              const exp = expansionMap[expId]
              return (
                <div key={expId}>
                  <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                    {exp?.nameDe ?? expId}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {items.map((item) => (
                      <RelicCard
                        key={item.id}
                        item={item}
                        onImageOpen={() => item.imageUrl && setLightbox({ imageUrl: item.imageUrl, name: item.nameEn })}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )
      )}
    </div>
  )
}
