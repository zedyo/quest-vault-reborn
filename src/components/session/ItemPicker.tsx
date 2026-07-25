// Geteiltes Item-Picker-Modal: Marktkarten + Helden-Relikte + eigener Gegenstand.
// Genutzt vom Helden-Setup (Startausrüstung) und vom Szenario-Editor
// (erhaltene/gekaufte Gegenstände). Ruft onPick(ItemRef) und schließt danach.

import { useMemo, useState } from 'react'
import type { ItemRef } from '../../types/session'
import { SHOP_ITEMS, RELICS } from '../../data/items'
import ModalOverlay from '../ModalOverlay'
import { SearchInput, OwnedToggle } from '../Filters'
import { ChipToggle, TextInput } from './ui'
import { IconBtn } from './ui/controls'
import { uid } from './sessionHelpers'

export default function ItemPicker({
  ownedExpansionIds,
  onPick,
  onClose,
  title = 'Gegenstand hinzufügen',
  actFilter,
}: {
  ownedExpansionIds: string[]
  onPick: (ref: ItemRef) => void
  onClose: () => void
  title?: string
  /** Kauf-Kontext: nur Items des gewählten Akts (1|2), 'both' = Akt 1+2 getrennt. Ohne = alle. */
  actFilter?: 1 | 2 | 'both'
}) {
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [custom, setCustom] = useState('')
  const q = search.trim().toLowerCase()

  const shop = useMemo(
    () =>
      SHOP_ITEMS.filter(
        (i) =>
          (!onlyOwned || ownedExpansionIds.includes(i.expansionId)) &&
          (actFilter === undefined || actFilter === 'both' || i.act === actFilter) &&
          (!q || i.nameDe.toLowerCase().includes(q) || i.nameEn.toLowerCase().includes(q)),
      ),
    [q, onlyOwned, ownedExpansionIds, actFilter],
  )
  // Relikte kauft man nicht im Markt → nur ohne Akt-Filter (Belohnung/manuell) anbieten.
  const relics = useMemo(
    () =>
      actFilter !== undefined
        ? []
        : RELICS.filter(
            (r) =>
              r.side === 'hero' &&
              (!onlyOwned || ownedExpansionIds.includes(r.expansionId)) &&
              (!q || r.nameDe.toLowerCase().includes(q) || r.nameEn.toLowerCase().includes(q)),
          ),
    [q, onlyOwned, ownedExpansionIds, actFilter],
  )

  const pickShop = (id: string) => {
    onPick({ refId: uid(), source: 'shop', dataId: id })
    onClose()
  }
  const shopGroup = (label: string, items: typeof shop) =>
    items.length > 0 && (
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-600 mb-1.5">{label}</p>
        <div className="flex flex-wrap gap-1.5">
          {items.map((i) => (
            <ChipToggle key={i.id} active={false} title={`${i.nameDe} · Akt ${i.act} · ${i.cost} Gold`} onClick={() => pickShop(i.id)}>
              {i.nameDe} <span className="opacity-60">· {i.cost}G</span>
            </ChipToggle>
          ))}
        </div>
      </div>
    )

  return (
    <ModalOverlay
      onClose={onClose}
      ariaLabel={title}
      className="bg-dungeon-900 border border-dungeon-600 rounded-lg shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col"
    >
      <div className="p-4 border-b border-dungeon-700 flex items-center justify-between gap-3">
        <h3 className="font-display text-lg text-gold-300 font-bold">{title}</h3>
        <IconBtn icon="close" label="Schließen" onClick={onClose} />
      </div>
      <div className="p-4 flex flex-wrap items-center gap-3 border-b border-dungeon-800">
        <SearchInput value={search} onChange={setSearch} className="flex-1 min-w-[10rem]" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
      </div>
      <div className="p-4 overflow-y-auto space-y-4">
        <div className="flex items-end gap-2">
          <TextInput label="Eigener Gegenstand" value={custom} onChange={setCustom} placeholder="Freier Name…" />
          <button
            onClick={() => {
              if (!custom.trim()) return
              onPick({ refId: uid(), source: 'custom', dataId: '', customName: custom.trim() })
              onClose()
            }}
            className="btn-secondary text-sm whitespace-nowrap mb-0.5"
          >
            + Eigen
          </button>
        </div>

        {actFilter === 'both' ? (
          <>
            {shopGroup('Marktkarten · Akt 1', shop.filter((i) => i.act === 1))}
            {shopGroup('Marktkarten · Akt 2', shop.filter((i) => i.act === 2))}
          </>
        ) : (
          shopGroup(actFilter ? `Marktkarten · Akt ${actFilter}` : 'Marktkarten', shop)
        )}

        {relics.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-600 mb-1.5">Relikte (Helden-Seite)</p>
            <div className="flex flex-wrap gap-1.5">
              {relics.map((r) => (
                <ChipToggle
                  key={r.id}
                  active={false}
                  title={r.nameDe}
                  onClick={() => {
                    onPick({ refId: uid(), source: 'relic', dataId: r.id })
                    onClose()
                  }}
                >
                  {r.nameDe}
                </ChipToggle>
              ))}
            </div>
          </div>
        )}

        {shop.length === 0 && relics.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-4">Keine Treffer.</p>
        )}
      </div>
    </ModalOverlay>
  )
}
