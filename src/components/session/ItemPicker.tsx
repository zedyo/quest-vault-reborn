// Geteiltes Item-Picker-Modal: Marktkarten + Helden-Relikte + eigener Gegenstand.
// Genutzt vom Helden-Setup (Startausrüstung) und vom Szenario-Editor
// (erhaltene/gekaufte Gegenstände). Ruft onPick(ItemRef) und schließt danach.

import { useMemo, useState } from 'react'
import type { ItemRef } from '../../types/session'
import { SHOP_ITEMS, RELICS } from '../../data/items'
import ModalOverlay from '../ModalOverlay'
import { SearchInput, OwnedToggle } from '../Filters'
import { ChipToggle, TextInput } from './ui'
import { uid } from './sessionHelpers'

export default function ItemPicker({
  ownedExpansionIds,
  onPick,
  onClose,
  title = 'Gegenstand hinzufügen',
}: {
  ownedExpansionIds: string[]
  onPick: (ref: ItemRef) => void
  onClose: () => void
  title?: string
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
          (!q || i.nameDe.toLowerCase().includes(q) || i.nameEn.toLowerCase().includes(q)),
      ),
    [q, onlyOwned, ownedExpansionIds],
  )
  const relics = useMemo(
    () =>
      RELICS.filter(
        (r) =>
          r.side === 'hero' &&
          (!onlyOwned || ownedExpansionIds.includes(r.expansionId)) &&
          (!q || r.nameDe.toLowerCase().includes(q) || r.nameEn.toLowerCase().includes(q)),
      ),
    [q, onlyOwned, ownedExpansionIds],
  )

  return (
    <ModalOverlay
      onClose={onClose}
      ariaLabel={title}
      className="bg-dungeon-900 border border-dungeon-600 rounded-lg shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col"
    >
      <div className="p-4 border-b border-dungeon-700 flex items-center justify-between gap-3">
        <h3 className="font-display text-lg text-gold-300 font-bold">{title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-200 text-xl leading-none">×</button>
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

        {shop.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-600 mb-1.5">Marktkarten</p>
            <div className="flex flex-wrap gap-1.5">
              {shop.map((i) => (
                <ChipToggle
                  key={i.id}
                  active={false}
                  title={`${i.nameDe} · Akt ${i.act} · ${i.cost} Gold`}
                  onClick={() => {
                    onPick({ refId: uid(), source: 'shop', dataId: i.id })
                    onClose()
                  }}
                >
                  {i.nameDe} <span className="opacity-60">· {i.cost}G</span>
                </ChipToggle>
              ))}
            </div>
          </div>
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
