import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { DataProvider } from './context/DataContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Varieties from './pages/Varieties'
import Sustainability from './pages/Sustainability'
import WhereToBuy from './pages/WhereToBuy'
import Contact from './pages/Contact'
import Recipes from './pages/Recipes'
import Order from './pages/Order'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <LanguageProvider>
      <DataProvider>
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
          <Route path="/order" element={<Order />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      </DataProvider>
    </LanguageProvider>
  )
}
