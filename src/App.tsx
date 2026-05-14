import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MapBuilderPage from './pages/MapBuilderPage'
import QuestEditorPage from './pages/QuestEditorPage'
import CollectionPage from './pages/CollectionPage'
import MonstersPage from './pages/MonstersPage'
import HeroesPage from './pages/HeroesPage'

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
      </Route>
    </Routes>
  )
}
