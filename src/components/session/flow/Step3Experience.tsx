// ── Flow-Schritt 3 · Erfahrung ausgeben ──────────────────────────────────────
//
// Der EINZIGE Ort, an dem nicht gelernte Fähigkeiten erscheinen — mit Regeltext,
// damit die Wahl ohne Kartenstapel möglich ist. Jeder Held hat sein eigenes
// XP-Budget; überzieht eine Auswahl das Budget, wird die Kachel deaktiviert
// (nicht versteckt) und das Restbudget bleibt ≥ 0.

import type { FlowStepProps } from './types'
import { classSkillDeUrl } from '../../../data/assetUrls'
import { CLASS_BY_ID, heroMono, heroShortName, skillCost } from '../sessionHelpers'
import CardTile from '../ui/CardTile'
import { Head, Meta, ThemeScope } from '../ui/controls'

export default function Step3Experience({ session, base, draft, setScenario }: FlowStepProps) {
  const learned = draft.shopping.skillsLearned

  const toggle = (heroLocalId: string, skillId: string, xpCost: number) =>
    setScenario((sc) => {
      const has = sc.shopping.skillsLearned.some((l) => l.heroLocalId === heroLocalId && l.skillId === skillId)
      return {
        ...sc,
        shopping: {
          ...sc.shopping,
          skillsLearned: has
            ? sc.shopping.skillsLearned.filter((l) => !(l.heroLocalId === heroLocalId && l.skillId === skillId))
            : [...sc.shopping.skillsLearned, { heroLocalId, skillId, xpCost }],
        },
      }
    })

  const budgets = session.heroes.map((h) => {
    const available = (base.heroes[h.localId]?.xpAvailable ?? 0) + (draft.rewards.heroXp[h.localId] ?? 0)
    const spent = learned.filter((l) => l.heroLocalId === h.localId).reduce((n, l) => n + l.xpCost, 0)
    return { hero: h, available, spent, left: available - spent }
  })
  const totalAvailable = budgets.reduce((n, b) => n + b.available, 0)
  const totalSpent = budgets.reduce((n, b) => n + b.spent, 0)

  return (
    <ThemeScope theme="heldentum" className="bg-bg px-5 py-6 sm:px-7 flex flex-col gap-[18px]">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <Head>Fähigkeiten lernen</Head>
          <p className="mt-1 text-[14px] text-muted">
            {totalAvailable} XP stehen der Partei zur Verfügung · {totalSpent} XP werden mit dieser Auswahl ausgegeben
          </p>
        </div>
        <Meta>Überspringen ist erlaubt — XP verfallen nicht</Meta>
      </div>

      {budgets.length === 0 ? (
        <p className="text-[13.5px] text-muted">Keine Helden in dieser Kampagne.</p>
      ) : (
        <div className="grid gap-3.5 xl:grid-cols-2">
          {budgets.map(({ hero, available, left }) => {
            const cls = hero.classId ? CLASS_BY_ID[hero.classId] : null
            const owned = new Set(base.heroes[hero.localId]?.ownedSkillIds ?? [])
            const buyable = cls
              ? cls.skills.filter((s) => !owned.has(s.id) && typeof s.xpCost === 'number' && s.xpCost > 0)
              : []
            return (
              <div key={hero.localId} className="rounded-card border border-line bg-surface overflow-hidden">
                <div className="flex items-center gap-3 px-3.5 py-3 border-b border-line bg-surface-2">
                  <span className="w-[30px] h-[30px] shrink-0 rounded-chip bg-accent-soft border border-accent-line inline-flex items-center justify-center font-mono text-[9.5px] text-accent">
                    {heroMono(hero)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-head text-[15px] font-bold text-fg truncate">{heroShortName(hero)}</p>
                    <p className="text-[12.5px] text-muted truncate">
                      {cls?.nameDe ?? 'ohne Klasse'} · {available} XP verfügbar
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-accent-bright whitespace-nowrap">
                    {available === 0 ? 'nichts auszugeben' : `noch ${left} XP übrig`}
                  </span>
                </div>

                <div className="p-3 flex flex-col gap-2.5">
                  {!cls && <p className="text-[13px] text-muted">Ohne Klasse gibt es nichts zu lernen.</p>}
                  {cls && buyable.length === 0 && (
                    <p className="text-[13px] text-muted">Alle Fähigkeiten dieser Klasse sind bereits gelernt.</p>
                  )}
                  {buyable.map((s) => {
                    const cost = skillCost(s)
                    const selected = learned.some((l) => l.heroLocalId === hero.localId && l.skillId === s.id)
                    const tooExpensive = !selected && cost > left
                    return (
                      <CardTile
                        key={s.id}
                        title={s.nameDe}
                        cost={`${cost} XP`}
                        rulesText={s.rulesDe}
                        thumbUrl={classSkillDeUrl(cls!.id, s.id)}
                        thumbSize="xs"
                        dense
                        selected={selected}
                        disabled={tooExpensive}
                        onSelect={() => !tooExpensive && toggle(hero.localId, s.id, cost)}
                        state={tooExpensive ? `Zu teuer — ${left} von ${cost} XP` : undefined}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </ThemeScope>
  )
}
