import { useState, useMemo } from 'react'
import { SHOP_ITEMS, RELICS } from '../data/items'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { renderGameText, DiceSymbol } from '../components/GameSymbols'
import { GameIcon } from '../components/icons/GameIcon'
import ModalOverlay from '../components/ModalOverlay'
import ErrataBox from '../components/ErrataBox'
import { getErrata } from '../data/errataLinks'
import { SearchInput, OwnedToggle, LangToggle, type Lang } from '../components/Filters'
import { itemCardDeUrl, relicCardDeUrl } from '../data/assetUrls'
import type { ShopItem, Relic, DieColor, ItemEquip, RelicSide, AttackType } from '../types/game'

const EQUIP_DE: Record<ItemEquip, string> = {
  'one-hand':  '1 Hand',
  'two-hands': '2 Hände',
  'armor':     'Rüstung',
  'other':     'Zubehör',
}

// Additive Filter: Ausrüstungs-Slot (ODER innerhalb der Gruppe) UND Angriffsart
// (ODER innerhalb der Gruppe). Leere Gruppe = keine Einschränkung.
const SLOT_FILTERS: { value: ItemEquip; label: string }[] = [
  { value: 'one-hand',  label: '1 Hand' },
  { value: 'two-hands', label: '2 Hände' },
  { value: 'armor',     label: 'Rüstung' },
  { value: 'other',     label: 'Zubehör' },
]
const ATTACK_FILTERS: { value: AttackType; label: string }[] = [
  { value: 'melee', label: 'Nahkampf' },
  { value: 'range', label: 'Fernkampf' },
]

const SIDE_LABEL: Record<RelicSide, string> = {
  hero:     'Helden-Seite',
  overlord: 'Overlord-Seite',
}

function DiceRow({ dice }: { dice: DieColor[] }) {
  if (!dice.length) return null
  return (
    <div className="flex gap-1 items-center flex-wrap">
      {dice.map((d, i) => (
        <DiceSymbol key={i} color={d} size={16} />
      ))}
    </div>
  )
}

// Additiver Filter-Chip (an/aus). Mehrere gleichzeitig aktivierbar.
function FilterChip<T extends string>({ value, label, icon, active, onToggle }: {
  value: T; label: string; icon?: React.ReactNode; active: boolean; onToggle: (v: T) => void
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onToggle(value)}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border transition-colors ${
        active
          ? 'bg-accent border-gold-400 text-onaccent font-medium'
          : 'bg-dungeon-800 border-dungeon-600 text-gray-400 hover:text-gray-200 hover:border-dungeon-500'
      }`}
    >
      {icon}
      {label}
    </button>
  )
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

// Bevorzugt das deutsche Kartenbild; fällt bei Ladefehler auf das englische
// any2cards-Bild zurück (srcs in Reihenfolge durchprobieren).
function useFallbackSrc(srcs: string[]): [string | undefined, () => void] {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((i) => i + 1)
  return [srcs[idx], next]
}

interface LightboxState { srcs: string[]; name: string }

function ItemLightbox({ srcs, name, onClose }: LightboxState & { onClose: () => void }) {
  const [src, onError] = useFallbackSrc(srcs)
  return (
    <ModalOverlay
      onClose={onClose}
      ariaLabel={name}
      backdropClassName="bg-black/85"
      className="relative max-w-xs w-full"
    >
      <button
        onClick={onClose}
        className="absolute -top-8 right-0 text-gray-400 hover:text-white text-sm"
      >
        ✕ Schließen
      </button>
      {src && (
        <img
          src={src}
          alt={name}
          onError={onError}
          className="w-full rounded-lg shadow-2xl border border-dungeon-600"
        />
      )}
    </ModalOverlay>
  )
}

// ── Item-Karten ───────────────────────────────────────────────────────────────

function ItemThumbnail({ srcs, name, onOpen }: { srcs: string[]; name: string; onOpen: () => void }) {
  const [src, onError] = useFallbackSrc(srcs)
  if (!src) return null
  return (
    <button
      className="shrink-0 w-14 self-stretch flex items-start rounded overflow-hidden border border-dungeon-700 hover:border-gold-500 transition-colors focus:outline-none focus:border-gold-400"
      onClick={(e) => { e.stopPropagation(); onOpen() }}
      title="Karte vergrößern"
    >
      <img
        src={src}
        alt={name}
        className="w-full h-auto"
        onError={onError}
        loading="lazy"
      />
    </button>
  )
}

function shopImgSrcs(item: ShopItem): string[] {
  return [itemCardDeUrl(item.id), item.imageUrl].filter(Boolean) as string[]
}
function relicImgSrcs(item: Relic): string[] {
  return [relicCardDeUrl(item.id), item.imageUrl].filter(Boolean) as string[]
}

function ShopCard({ item, lang, onImageOpen }: { item: ShopItem; lang: Lang; onImageOpen: () => void }) {
  const name = lang === 'de' ? item.nameDe : item.nameEn
  const subName = lang === 'de' ? item.nameEn : item.nameDe
  const rules = lang === 'de' ? item.rulesDe : item.rulesEn
  return (
    <div className="card text-xs space-y-1.5">
      <div className="flex items-stretch gap-2">
        <ItemThumbnail srcs={shopImgSrcs(item)} name={item.nameDe} onOpen={onImageOpen} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <div className="flex-1 min-w-0">
              <div className="text-gray-100 font-semibold leading-snug">{name}</div>
              <div className="text-gray-600 text-[10px] italic leading-tight">{subName}</div>
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
              <span className="flex items-center gap-1 text-[10px] text-gray-500">
                <GameIcon kind="symbol" name={item.attack === 'melee' ? 'nahkampf' : 'fernkampf'} variant="plain" size={13} className="-my-0.5" />
                {item.attack === 'melee' ? 'Nahkampf' : 'Fernkampf'}
              </span>
            )}
            <DiceRow dice={item.dice} />
          </div>
        </div>
      </div>
      <div className="text-gray-400 leading-snug space-y-0.5">{renderGameText(rules)}</div>
      <ErrataBox entries={getErrata('item', item.id)} />
    </div>
  )
}

function RelicCard({ item, lang, onImageOpen }: { item: Relic; lang: Lang; onImageOpen: () => void }) {
  const name = lang === 'de' ? item.nameDe : item.nameEn
  const subName = lang === 'de' ? item.nameEn : item.nameDe
  const rules = lang === 'de' ? item.rulesDe : item.rulesEn
  const isHero = item.side === 'hero'
  return (
    <div className={`card text-xs space-y-1.5 ${isHero ? 'border-purple-900/30' : 'border-red-900/30'}`}>
      <div className="flex items-stretch gap-2">
        <ItemThumbnail srcs={relicImgSrcs(item)} name={item.nameDe} onOpen={onImageOpen} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <div className="flex-1 min-w-0">
              <div className={`font-semibold leading-snug ${isHero ? 'text-purple-300' : 'text-red-300'}`}>{name}</div>
              <div className="text-gray-600 text-[10px] italic leading-tight">{subName}</div>
              <div className="text-gray-500 text-[10px]">{item.traits.join(', ')}</div>
            </div>
            <span
              className={`shrink-0 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded ${
                isHero
                  ? 'text-purple-300 bg-purple-900/40'
                  : 'text-red-300 bg-red-900/40'
              }`}
            >
              {SIDE_LABEL[item.side]}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[10px] text-gray-500">{EQUIP_DE[item.equip]}</span>
            {item.attack && (
              <span className="flex items-center gap-1 text-[10px] text-gray-500">
                <GameIcon kind="symbol" name={item.attack === 'melee' ? 'nahkampf' : 'fernkampf'} variant="plain" size={13} className="-my-0.5" />
                {item.attack === 'melee' ? 'Nahkampf' : 'Fernkampf'}
              </span>
            )}
            <DiceRow dice={item.dice} />
          </div>
        </div>
      </div>
      <div className="text-gray-400 leading-snug space-y-0.5">{renderGameText(rules)}</div>
      <ErrataBox entries={getErrata('item', item.id)} />
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
  const [slotSel, setSlotSel] = useState<Set<ItemEquip>>(new Set())
  const [atkSel, setAtkSel] = useState<Set<AttackType>>(new Set())
  const [lang, setLang] = useState<Lang>('de')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const toggleSlot = (v: ItemEquip) =>
    setSlotSel((prev) => { const n = new Set(prev); n.has(v) ? n.delete(v) : n.add(v); return n })
  const toggleAtk = (v: AttackType) =>
    setAtkSel((prev) => { const n = new Set(prev); n.has(v) ? n.delete(v) : n.add(v); return n })

  // ODER innerhalb Gruppe, UND zwischen den Gruppen; leere Gruppe = keine Einschränkung.
  const matchesEquip = (item: { equip: ItemEquip; attack?: AttackType }) => {
    if (slotSel.size > 0 && !slotSel.has(item.equip)) return false
    if (atkSel.size > 0 && (!item.attack || !atkSel.has(item.attack))) return false
    return true
  }

  const expansionMap = useMemo(
    () => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])),
    [],
  )

  const matchesSearch = (nameEn: string, nameDe: string, traits: string[]) => {
    if (!search) return true
    const q = search.toLowerCase()
    return (
      nameEn.toLowerCase().includes(q) ||
      nameDe.toLowerCase().includes(q) ||
      traits.join(' ').toLowerCase().includes(q)
    )
  }

  const filteredShop = useMemo(() => {
    return SHOP_ITEMS.filter((item) => {
      if (onlyOwned && !ownedIds.includes(item.expansionId)) return false
      if (actFilter !== 'all' && item.act !== Number(actFilter)) return false
      if (!matchesEquip(item)) return false
      return matchesSearch(item.nameEn, item.nameDe, item.traits)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyOwned, ownedIds, search, actFilter, slotSel, atkSel])

  const filteredRelics = useMemo(() => {
    return RELICS.filter((item) => {
      if (onlyOwned && !ownedIds.includes(item.expansionId)) return false
      if (!matchesEquip(item)) return false
      return matchesSearch(item.nameEn, item.nameDe, item.traits)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyOwned, ownedIds, search, slotSel, atkSel])

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

  const openLightbox = (srcs: string[], name: string) => {
    if (srcs.length) setLightbox({ srcs, name })
  }

  return (
    <div className="space-y-6">
      {lightbox && (
        <ItemLightbox
          srcs={lightbox.srcs}
          name={lightbox.name}
          onClose={() => setLightbox(null)}
        />
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Ausrüstung</h2>
        <p className="text-gray-400 text-sm">
          {totalVisible} {tab === 'shop' ? 'Shop-Karten' : 'Relikt-Seiten'}{' '}
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
                ? 'bg-accent text-onaccent'
                : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Item suchen…" className="w-52" />

        {tab === 'shop' && (
          <div className="flex items-center gap-0 rounded overflow-hidden border border-dungeon-600">
            {([['all', 'Beide Akte'], ['1', 'Akt 1'], ['2', 'Akt 2']] as const).map(([v, label]) => (
              <button
                key={v}
                onClick={() => setActFilter(v)}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  actFilter === v
                    ? 'bg-accent text-onaccent font-medium'
                    : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <LangToggle value={lang} onChange={setLang} className="ml-auto" />

        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
      </div>

      {/* Additive Ausrüstungs-/Angriffsart-Filter (Shop + Relikte) */}
      <div className="flex flex-wrap items-center gap-1.5 -mt-2">
        <span className="text-[11px] text-gray-500 mr-1">Filter:</span>
        {SLOT_FILTERS.map((f) => (
          <FilterChip key={f.value} value={f.value} label={f.label} active={slotSel.has(f.value)} onToggle={toggleSlot} />
        ))}
        <span className="w-px h-4 bg-dungeon-600 mx-1" />
        {ATTACK_FILTERS.map((f) => (
          <FilterChip
            key={f.value}
            value={f.value}
            label={f.label}
            icon={<GameIcon kind="symbol" name={f.value === 'melee' ? 'nahkampf' : 'fernkampf'} variant="plain" size={15} className="-my-1" />}
            active={atkSel.has(f.value)}
            onToggle={toggleAtk}
          />
        ))}
        {(slotSel.size > 0 || atkSel.size > 0) && (
          <button
            type="button"
            onClick={() => { setSlotSel(new Set()); setAtkSel(new Set()) }}
            className="ml-1 text-[11px] text-gray-500 hover:text-gold-400 underline underline-offset-2"
          >
            zurücksetzen
          </button>
        )}
      </div>

      <p className="text-[11px] text-gray-600 -mt-3">
        {lang === 'de'
          ? 'Deutsche Kartentexte sind Community-Übersetzungen (nicht zwingend offizieller FFG-Wortlaut). Original via „English". '
          : 'Originale englische Kartentexte. '}
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
                            lang={lang}
                            onImageOpen={() => openLightbox(shopImgSrcs(item), lang === 'de' ? item.nameDe : item.nameEn)}
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
                            lang={lang}
                            onImageOpen={() => openLightbox(shopImgSrcs(item), lang === 'de' ? item.nameDe : item.nameEn)}
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
        <>
          <p className="text-[11px] text-gray-500 -mt-3 bg-dungeon-800/60 border border-dungeon-700 rounded px-3 py-2">
            💎 Relikte sind <span className="text-gray-300">doppelseitige Karten</span>: Die
            <span className="text-purple-300"> Helden-Seite</span> nutzt ein Held, der das Relikt erbeutet, die
            <span className="text-red-300"> Overlord-Seite</span> nutzt der Overlord, solange ein Leutnant es trägt.
          </p>

          {relicsByExpansion.size === 0 ? (
            <div className="card text-center text-gray-500 py-12">
              Keine Relikte gefunden. Passe deine Suche oder Sammlung an.
            </div>
          ) : (
            <div className="space-y-8">
              {Array.from(relicsByExpansion.entries()).map(([expId, items]) => {
                const exp = expansionMap[expId]
                const heroRelics = items.filter((i) => i.side === 'hero')
                const overlordRelics = items.filter((i) => i.side === 'overlord')
                return (
                  <div key={expId}>
                    <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                      {exp?.nameDe ?? expId}
                    </h3>
                    {heroRelics.length > 0 && (
                      <>
                        <p className="text-xs text-purple-300/80 mb-2">Helden-Seite</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                          {heroRelics.map((item) => (
                            <RelicCard
                              key={item.id}
                              item={item}
                              lang={lang}
                              onImageOpen={() => openLightbox(relicImgSrcs(item), lang === 'de' ? item.nameDe : item.nameEn)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    {overlordRelics.length > 0 && (
                      <>
                        <p className="text-xs text-red-300/80 mb-2">Overlord-Seite</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {overlordRelics.map((item) => (
                            <RelicCard
                              key={item.id}
                              item={item}
                              lang={lang}
                              onImageOpen={() => openLightbox(relicImgSrcs(item), lang === 'de' ? item.nameDe : item.nameEn)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}
