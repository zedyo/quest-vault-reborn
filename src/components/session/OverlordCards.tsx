// ── Screen 7 · Overlord-Kartendeck ───────────────────────────────────────────
//
// Ersetzt die Chip-Wände in den Aufklappern: ein Kartenraster mit Regeltext,
// Exemplarzahl und Zustand, sortiert nach der eigentlichen Frage — was habe ich,
// was kann ich kaufen. Gekauft wird im Abschluss-Flow (Schritt 5), damit der
// Live-Stand weiterhin allein aus dem Protokoll gefaltet wird.

import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { useSessionCtx } from './context'
import { OVERLORD_DECKS } from '../../data/overlordClasses'
import { overlordCardDeUrl } from '../../data/assetUrls'
import CardTile from './ui/CardTile'
import { Btn, Eyebrow, FilterSearch, LinkBtn, NoteBox, Segmented, Switch, ThemeScope } from './ui/controls'
import { Icon } from '../QvIcons'

const cardKey = (deckId: string, cardId: string) => `${deckId}:${cardId}`

type Rank = 'owned' | 'buyable' | 'locked'

export default function OverlordCards() {
  const { session, live, ownedExpansionIds } = useSessionCtx()
  const [q, setQ] = useState('')
  const [deckFilter, setDeckFilter] = useState('alle')
  const [onlyMine, setOnlyMine] = useState(true)

  const decks = useMemo(() => {
    const mine = new Set(session.overlord.deckIds)
    return OVERLORD_DECKS.filter((d) => {
      if (!ownedExpansionIds.includes(d.expansionId)) return false
      if (onlyMine) return mine.has(d.id) || d.kind === 'reward'
      return true
    })
  }, [session.overlord.deckIds, ownedExpansionIds, onlyMine])

  const deckOptions = useMemo(
    () => [{ value: 'alle', label: 'Alle' }, ...decks.map((d) => ({ value: d.id, label: d.nameDe }))],
    [decks],
  )

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase()
    const out: {
      key: string
      deckName: string
      name: string
      rules: string
      cost: string
      copies: string
      rank: Rank
      state: string
      cardId: string
    }[] = []
    for (const deck of decks) {
      if (deckFilter !== 'alle' && deck.id !== deckFilter) continue
      for (const c of deck.cards) {
        if (needle && !c.nameDe.toLowerCase().includes(needle) && !c.rulesDe.toLowerCase().includes(needle)) continue
        const key = cardKey(deck.id, c.id)
        const ownedCount = live.overlord.ownedCardCounts[key] ?? 0
        const total = Math.max(1, c.count)
        const isReward = c.xpCost === null
        let rank: Rank
        let state: string
        if (ownedCount > 0) {
          rank = 'owned'
          state = c.xpCost === 0 ? 'Im Deck' : isReward ? 'Belohnung erhalten' : 'Gekauft'
        } else if (isReward) {
          rank = 'locked'
          state = 'Nicht erhalten'
        } else if ((c.xpCost ?? 0) === 0) {
          rank = 'locked'
          // Startkarten kommen mit dem Deck ins Spiel — fehlen sie, ist entweder
          // das Deck nicht gewählt oder der Bestand wurde von Hand geleert.
          state = session.overlord.deckIds.includes(deck.id) ? 'Nicht im Bestand erfasst' : 'Deck nicht gewählt'
        } else if ((c.xpCost ?? 0) <= live.overlord.xpAvailable) {
          rank = 'buyable'
          state = 'Kaufbar im Abschluss-Flow'
        } else {
          rank = 'locked'
          state = `Zu teuer — ${live.overlord.xpAvailable} von ${c.xpCost} XP`
        }
        out.push({
          key,
          cardId: c.id,
          deckName: deck.nameDe,
          name: c.nameDe,
          rules: c.rulesDe,
          cost: isReward ? 'Belohnung' : c.xpCost === 0 ? 'Im Deck' : `${c.xpCost} XP`,
          copies: `${ownedCount}/${total}×`,
          rank,
          state,
        })
      }
    }
    const order: Record<Rank, number> = { owned: 0, buyable: 1, locked: 2 }
    return out.sort((a, b) => order[a.rank] - order[b.rank] || a.name.localeCompare(b.name, 'de'))
  }, [decks, deckFilter, q, live.overlord, session.overlord.deckIds])

  return (
    <ThemeScope theme="overlord" className="bg-bg min-h-full p-5 sm:px-7 sm:py-[22px] flex flex-col gap-[18px]">
      <div className="flex items-center gap-3 flex-wrap">
        <Link
          to={`/session/${session.id}/overlord`}
          className="inline-flex items-center gap-2 h-11 sm:h-auto text-[13.5px] text-muted hover:text-fg transition-colors"
        >
          <Icon name="chevron-left" size={15} />
          Overlord
        </Link>
        <span className="text-faint">/</span>
        <span className="font-head text-[14px] font-semibold text-fg">Kartendeck</span>
      </div>

      <div className="flex items-center gap-3.5 flex-wrap">
        <FilterSearch value={q} onChange={setQ} className="w-full sm:w-[264px]" />
        <div className="max-w-full overflow-x-auto">
          <Segmented options={deckOptions} value={deckFilter} onChange={setDeckFilter} />
        </div>
        <span className="inline-flex items-center gap-2.5 text-[13.5px] text-muted sm:ml-auto">
          <Switch checked={onlyMine} onChange={setOnlyMine} label="Nur Decks dieser Kampagne" />
          Nur Decks dieser Kampagne
        </span>
        <LinkBtn variant="ghost" size="sm" to={`/session/${session.id}/einrichtung`}>
          Decks bearbeiten
        </LinkBtn>
      </div>

      <NoteBox>
        <strong className="font-semibold">{live.overlord.xpAvailable} Overlord-XP verfügbar.</strong>{' '}
        <span className="text-muted">
          Käufe werden im Abschluss-Flow eines Szenarios erfasst — hier siehst du nur, was dein Deck kann.
        </span>
      </NoteBox>

      {rows.length === 0 ? (
        <p className="text-[13.5px] text-muted">
          Keine Karten gefunden. {onlyMine && 'Vielleicht hilft „Nur Decks dieser Kampagne" auszuschalten.'}
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {rows.map((r) => (
            <CardTile
              key={r.key}
              eyebrow={r.deckName}
              eyebrowRight={r.cost}
              title={r.name}
              rulesText={r.rules}
              thumbUrl={overlordCardDeUrl(r.cardId)}
              thumbSize="market"
              dense
              copies={r.copies}
              disabled={r.rank === 'locked'}
              footer={
                r.rank === 'owned' ? (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.12em] uppercase text-accent-bright">
                    <Icon name="check" size={12} />
                    {r.state}
                  </span>
                ) : r.rank === 'buyable' ? (
                  <Btn variant="secondary" size="sm" disabled title="Käufe werden im Abschluss-Flow erfasst">
                    Kaufen
                  </Btn>
                ) : (
                  <span className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-faint">{r.state}</span>
                )
              }
            />
          ))}
        </div>
      )}

      <Eyebrow>
        Sortiert nach Zustand: besessen · kaufbar · gesperrt. Die Suche greift auf Name und Regeltext.
      </Eyebrow>
    </ThemeScope>
  )
}
