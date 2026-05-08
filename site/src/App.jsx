import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Varieties from './pages/Varieties'
import Sustainability from './pages/Sustainability'
import WhereToBuy from './pages/WhereToBuy'
import Contact from './pages/Contact'
import Recipes from './pages/Recipes'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/varieties" element={<Varieties />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/where-to-buy" element={<WhereToBuy />} />
            <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}
