import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MapBuilderPage from './pages/MapBuilderPage'
import QuestEditorPage from './pages/QuestEditorPage'
import CollectionPage from './pages/CollectionPage'
import MonstersPage from './pages/MonstersPage'
import HeroesPage from './pages/HeroesPage'
import ClassesPage from './pages/ClassesPage'
import ItemsPage from './pages/ItemsPage'
import OverlordPage from './pages/OverlordPage'
import LieutenantsPage from './pages/LieutenantsPage'
import AgentsPage from './pages/AgentsPage'
import PlotDecksPage from './pages/PlotDecksPage'
import CampaignsPage from './pages/CampaignsPage'
import TravelCardsPage from './pages/TravelCardsPage'
import RumorsPage from './pages/RumorsPage'
import ConditionsPage from './pages/ConditionsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="karte" element={<MapBuilderPage />} />
        <Route path="quest" element={<QuestEditorPage />} />
        <Route path="sammlung" element={<CollectionPage />} />
        <Route path="monster" element={<MonstersPage />} />
        <Route path="helden" element={<HeroesPage />} />
        <Route path="klassen" element={<ClassesPage />} />
        <Route path="items" element={<ItemsPage />} />
        <Route path="overlord" element={<OverlordPage />} />
        <Route path="leutnants" element={<LieutenantsPage />} />
        <Route path="agenten" element={<AgentsPage />} />
        <Route path="plotdecks" element={<PlotDecksPage />} />
        <Route path="kampagnen" element={<CampaignsPage />} />
        <Route path="reisekarten" element={<TravelCardsPage />} />
        <Route path="geruechte" element={<RumorsPage />} />
        <Route path="zustaende" element={<ConditionsPage />} />
      </Route>
    </Routes>
  )
}
