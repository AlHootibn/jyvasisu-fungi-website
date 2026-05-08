import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import './WhereToBuy.css'

export default function WhereToBuy() {
  const { lang } = useLang()
  const t = tr[lang].whereToBuy

  return (
    <div className="where">
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.pageLabel}</p>
          <h1 className="page-hero__title">{t.pageTitle}</h1>
          <p className="page-hero__sub">{t.pageSub}</p>
        </div>
      </section>

      {/* Markets */}
      <section className="markets section">
        <div className="container">
          <p className="section-label">{t.marketsLabel}</p>
          <h2 className="section-heading">{t.marketsHeading}</h2>
          <div className="markets__grid">
            {t.markets.map(({ name, type, address, hours, note }) => (
              <div key={name} className="market-card">
                <div className="market-card__top">
                  <span className="market-card__type">{type}</span>
                  <h3 className="market-card__name">{name}</h3>
                </div>
                <div className="market-card__body">
                  <div className="market-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{address}</span>
                  </div>
                  <div className="market-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{hours}</span>
                  </div>
                  <p className="market-card__note">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section section-sm" style={{ background: 'var(--spore-white)' }}>
        <div className="container">
          <p className="section-label">{t.mapLabel}</p>
          <h2 className="section-heading">{t.mapHeading}</h2>
          <div className="map-embed">
            <iframe
              title="Jyväskylä map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=25.6490%2C62.2260%2C25.8060%2C62.2660&layer=mapnik"
              style={{ border: 0, width: '100%', height: '400px', borderRadius: '4px' }}
              loading="lazy"
            />
            <p className="map-credit">
              Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors
            </p>
          </div>
        </div>
      </section>

      {/* Direct orders */}
      <section className="direct section">
        <div className="container">
          <div className="direct__grid">
            <div className="direct__card">
              <p className="section-label">{t.deliveryLabel}</p>
              <h2 className="direct__title">{t.deliveryTitle}</h2>
              <p className="direct__desc">{t.deliveryDesc}</p>
              <Link to="/contact" className="btn-primary">{t.deliveryCta}</Link>
            </div>
            <div className="direct__card direct__card--dark">
              <p className="section-label" style={{ color: 'var(--harvest-amber)' }}>{t.wholesaleLabel}</p>
              <h2 className="direct__title" style={{ color: 'var(--birch-cream)' }}>{t.wholesaleTitle}</h2>
              <p className="direct__desc" style={{ color: 'rgba(245,240,232,0.72)' }}>{t.wholesaleDesc}</p>
              <a href="mailto:wholesale@jyväsisufungi.fi" className="btn-primary">
                wholesale@jyväsisufungi.fi
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
