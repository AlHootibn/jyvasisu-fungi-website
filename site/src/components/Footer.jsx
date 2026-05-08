import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import './Footer.css'

export default function Footer() {
  const { lang } = useLang()
  const t = tr[lang]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo">JyväSisu Fungi</span>
          <p className="footer__tagline">{t.footer.tagline}</p>
          <img src="/keski-laatu.png" alt="Hyvää Suomesta – Finnish quality mark" className="footer__quality-badge" />
        </div>

        <nav className="footer__nav">
          <Link to="/">{t.nav.home}</Link>
          <Link to="/varieties">{t.nav.varieties}</Link>
          <Link to="/sustainability">{t.nav.sustainability}</Link>
          <Link to="/where-to-buy">{t.nav.whereToBuy}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </nav>

        <div className="footer__social">
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
