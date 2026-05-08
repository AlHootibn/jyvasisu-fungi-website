import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import './Nav.css'

export default function Nav() {
  const { lang, setLang } = useLang()
  const t = tr[lang].nav
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: t.home },
    { to: '/varieties', label: t.varieties },
    { to: '/recipes', label: t.recipes },
    { to: '/blog', label: t.blog },
    { to: '/sustainability', label: t.sustainability },
    { to: '/where-to-buy', label: t.whereToBuy },
    { to: '/contact', label: t.contact },
  ]

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <NavLink to="/" className="nav__logo">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M4 24 Q16 4 28 24" stroke="#B5762A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <line x1="16" y1="24" x2="16" y2="30" stroke="#B5762A" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span>JyväSisu Fungi</span>
        </NavLink>

        <nav className={`nav__links${open ? ' nav__links--open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__right">
          <Link to="/order" className="nav__order-btn">{t.order}</Link>
          <div className="nav__lang">
            <button
              className={`nav__lang-btn${lang === 'en' ? ' nav__lang-btn--active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="nav__lang-divider">|</span>
            <button
              className={`nav__lang-btn${lang === 'fi' ? ' nav__lang-btn--active' : ''}`}
              onClick={() => setLang('fi')}
              aria-label="Vaihda suomeksi"
            >
              FI
            </button>
          </div>

          <button
            className="nav__burger"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
