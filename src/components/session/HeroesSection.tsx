// ── Screen 4 · Helden (Pergament-Design) ─────────────────────────────────────
//
// Vier Bögen statt Setup-Formular: die offenen XP sind die lauteste Zahl, alles
// andere liest sich darunter. Darunter die gemeinsame Ausrüstung — zugewiesen
// wird per Klick auf ein Heldenkürzel, nicht mehr über ein Dropdown.

import { Link } from 'react-router-dom'
import { useSessionCtx } from './context'
import { CLASS_BY_ID, HERO_BY_ID, heroMono, itemCardUrl, itemRulesText, itemSlotLabel, resolveItemName } from './sessionHelpers'
import ArchetypeIcon from '../ArchetypeIcon'
import CardTile from './ui/CardTile'
import HeroChipRow from './ui/HeroChipRow'
import { Eyebrow, Head, LinkBtn, Micro, ThemeScope } from './ui/controls'

const STRIPES =
  'repeating-linear-gradient(135deg, var(--qv-accent-soft) 0 7px, transparent 7px 14px), radial-gradient(circle at 50% 30%, var(--qv-accent-soft), transparent 72%), var(--qv-surface-2)'

export default function HeroesSection() {
  const { session, live, reassignItemOwner } = useSessionCtx()
  const heroes = session.heroes

  return (
    <ThemeScope theme="heldentum" className="bg-bg min-h-full p-5 sm:px-7 sm:py-6 flex flex-col gap-5">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <Head>Die Partei</Head>
          <p className="mt-1 text-[14px] text-muted">
            {heroes.length} von 4 Helden · {live.partyGold} Gold gemeinsam · {live.heroXpOpenTotal} XP insgesamt noch
            nicht ausgegeben
          </p>
        </div>
        <LinkBtn variant="ghost" size="sm" to={`/session/${session.id}/einrichtung`}>
          Helden verwalten
        </LinkBtn>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        {heroes.map((h) => {
          const data = HERO_BY_ID[h.heroId]
          const cls = h.classId ? CLASS_BY_ID[h.classId] : null
          const hl = live.heroes[h.localId]
          return (
            <div
              key={h.localId}
              className="rounded-card border border-line bg-surface shadow-card overflow-hidden flex flex-col"
            >
              <div
                className="h-[132px] border-b border-line flex items-end justify-between p-2.5 relative overflow-hidden"
                style={{ background: STRIPES }}
              >
                {data?.imageUrl && (
                  <img
                    src={data.imageUrl}
                    alt={data.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'left top' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                <span className="relative w-[34px] h-[34px] rounded-chip bg-surface border border-line inline-flex items-center justify-center font-mono text-[11px] text-accent">
                  {heroMono(h)}
                </span>
                {data && <span className="relative"><ArchetypeIcon archetype={data.archetype} size={26} /></span>}
              </div>

              <div className="p-3.5 flex flex-col gap-3 flex-1">
                <div>
                  <p className="font-head text-[16px] font-bold leading-[1.25] text-fg">{data?.name ?? h.heroId}</p>
                  <p className="mt-0.5 text-[13.5px] text-muted truncate">
                    {[h.playerName.trim() || 'ohne Spieler', cls?.nameDe ?? 'ohne Klasse'].join(' · ')}
                  </p>
                </div>

                <div className="flex items-end gap-2.5 px-3 py-2.5 rounded-control bg-accent-soft border border-accent-line">
                  <span className="font-head text-[30px] font-bold leading-[0.9] text-accent tabular-nums">
                    {hl?.xpAvailable ?? 0}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted pb-0.5 leading-[1.35]">
                    XP offen
                    <br />
                    {hl?.xpEarned ?? 0} verdient
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <Micro>Fähigkeiten</Micro>
                    <span className="font-head text-[14px] font-semibold text-fg">{hl?.ownedSkillIds.length ?? 0}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Micro>Ausrüstung</Micro>
                    <span className="font-head text-[14px] font-semibold text-fg">{hl?.ownedItemRefs.length ?? 0}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <LinkBtn block size="sm" variant="ghost" to={`/session/${session.id}/helden/${h.localId}`}>
                    Bogen öffnen
                  </LinkBtn>
                </div>
              </div>
            </div>
          )
        })}

        {Array.from({ length: Math.max(0, 4 - heroes.length) }, (_, i) => (
          <Link
            key={`empty-${i}`}
            to={`/session/${session.id}/einrichtung`}
            className="rounded-card border border-dashed border-line flex flex-col items-center justify-center gap-2 py-12 text-muted hover:border-accent-line hover:text-fg transition-colors min-h-[18rem]"
          >
            <span className="font-head text-[15px] font-semibold">Held hinzufügen</span>
            <span className="text-[13px] text-faint">{heroes.length} von 4 belegt</span>
          </Link>
        ))}
      </div>

      {/* Gemeinsame Ausrüstung */}
      <div className="rounded-card border border-line bg-surface px-4 py-4 sm:px-[18px]">
        <div className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
          <Eyebrow>Gemeinsame Ausrüstung · noch keinem Helden zugewiesen</Eyebrow>
          <span className="text-[13px] text-muted">Zuweisen per Klick auf ein Heldenkürzel</span>
        </div>
        {live.partyItemRefs.length === 0 ? (
          <p className="text-[13.5px] text-muted">
            Nichts abgelegt. Gegenstände aus Belohnungen und Käufen, die keinem Helden zugewiesen wurden, landen hier.
          </p>
        ) : (
          <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
            {live.partyItemRefs.map((ref) => (
              <div key={ref.refId} className="flex gap-3 px-3 py-3 rounded-control border border-line bg-surface-2">
                <div className="min-w-0 flex-1">
                  <CardTile
                    className="!border-0 !bg-transparent !rounded-none"
                    title={resolveItemName(ref)}
                    rulesText={itemRulesText(ref) || 'Kein Regeltext hinterlegt.'}
                    above={<Micro>{itemSlotLabel(ref)}</Micro>}
                    thumbUrl={itemCardUrl(ref)}
                    thumbSize="sm"
                    dense
                  />
                </div>
                <HeroChipRow
                  heroes={heroes}
                  value={null}
                  onChange={(id) => id && reassignItemOwner(ref.refId, id)}
                  allowShared={false}
                  orientation="col"
                  size={24}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeScope>
  )
}
