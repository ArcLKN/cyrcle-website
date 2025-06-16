import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import MainLayout from './components/layout/MainLayout'

import Accueil from './pages/Accueil'
import NosPrestations from './pages/NosPrestations'
import NousDecouvrir from './pages/NousDecouvrir'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/prestations" element={<NosPrestations />} />
          <Route path="/decouvrir" element={<NousDecouvrir />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App