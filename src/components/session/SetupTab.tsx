// Setup-Tab: Grunddaten der Session – Name, Kampagne, Spielerzahl, Start-Gold.

import type { CampaignSession } from '../../types/session'
import { CAMPAIGNS } from '../../data/campaigns'
import { EXPANSIONS } from '../../data/expansions'
import { SegmentedControl } from '../Filters'
import { FieldLabel, TextInput, NumberInput } from './ui'

const EXP_BY_ID = Object.fromEntries(EXPANSIONS.map((e) => [e.id, e]))

export default function SetupTab({
  session,
  onPatch,
}: {
  session: CampaignSession
  onPatch: (patch: Partial<CampaignSession>) => void
}) {
  const campaign = CAMPAIGNS.find((c) => c.id === session.campaignId)

  return (
    <div className="card space-y-4 max-w-xl">
      <TextInput
        label="Name der Session"
        value={session.name}
        onChange={(v) => onPatch({ name: v })}
        placeholder="z. B. „Dienstagsrunde – Die Schattenrune“"
      />

      <label className="block">
        <FieldLabel>Kampagne</FieldLabel>
        <select
          value={session.campaignId}
          onChange={(e) => onPatch({ campaignId: e.target.value })}
          className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500"
        >
          {CAMPAIGNS.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nameDe} ({c.kind === 'mini' ? 'Mini-Kampagne' : 'Großkampagne'})
            </option>
          ))}
        </select>
        {campaign && (
          <p className="text-gray-500 text-xs mt-1.5">
            Erweiterung: {EXP_BY_ID[campaign.expansionId]?.nameDe ?? campaign.expansionId}
            {campaign.branching ? ' · verzweigter Szenariobaum' : ' · linear'}
          </p>
        )}
      </label>

      <div>
        <FieldLabel>Spielerzahl (Helden)</FieldLabel>
        <SegmentedControl<2 | 3 | 4>
          value={session.playerCount}
          onChange={(v) => onPatch({ playerCount: v })}
          options={[
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
          ]}
        />
      </div>

      <NumberInput
        label="Start-Gold der Partei"
        value={session.startingGold}
        onChange={(v) => onPatch({ startingGold: v })}
        min={0}
        max={100000}
      />

      <p className="text-[11px] text-gray-500 leading-snug border-t border-dungeon-700 pt-3">
        Erfahrung, Gold, Items und der Szenario-Verlauf werden ab dem nächsten Update
        (Szenario-Protokoll) automatisch mitgeführt. Hier legst du zunächst die Rahmendaten
        sowie das Helden- und Overlord-Setup fest.
      </p>
    </div>
  )
}
