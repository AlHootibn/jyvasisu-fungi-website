import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import './Sustainability.css'

const ICONS = [
  <svg key="home" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>,
  <svg key="cycle" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>,
  <svg key="box" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>,
]

export default function Sustainability() {
  const { lang } = useLang()
  const t = tr[lang].sustainability

  return (
    <div className="sustainability">
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.pageLabel}</p>
          <h1 className="page-hero__title">{t.pageTitle}</h1>
          <p className="page-hero__sub">{t.pageSub}</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy section">
        <div className="container philosophy__grid">
          <div className="philosophy__text">
            <p className="section-label">{t.philLabel}</p>
            <h2 className="philosophy__heading">{t.philHeading}</h2>
            <p>{t.philP1}</p>
            <p>{t.philP2}</p>
            <p>{t.philP3}</p>
          </div>
          <div className="philosophy__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1762889278403-1d1a57d9a587?w=800&q=80"
              alt="Mushrooms growing on substrate bags at JyväSisu Fungi farm"
            />
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="practices section" style={{ background: 'var(--spore-white)' }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>{t.practicesLabel}</p>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>{t.practicesHeading}</h2>
          <div className="practices__grid">
            {t.practices.map(({ title, desc }, i) => (
              <div key={title} className="practice-card">
                <div className="practice-card__icon">{ICONS[i]}</div>
                <h3 className="practice-card__title">{title}</h3>
                <p className="practice-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="comparison section">
        <div className="container">
          <p className="section-label">{t.compLabel}</p>
          <h2 className="section-heading">{t.compHeading}</h2>
          <div className="comparison-table">
            <div className="comparison-table__head">
              {t.compHeaders.map((h, i) => <div key={i}>{h}</div>)}
            </div>
            {t.comparisons.map(({ label, risk, water, traceability, impact }) => (
              <div key={label} className={`comparison-table__row ${label === t.comparisons[1].label ? 'comparison-table__row--ours' : ''}`}>
                <div className="comparison-table__label">{label}</div>
                <div>{risk}</div>
                <div>{water}</div>
                <div>{traceability}</div>
                <div>{impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local ecosystem */}
      <section className="local-eco section" style={{ background: 'var(--forest-floor)', color: 'var(--birch-cream)' }}>
        <div className="container local-eco__inner">
          <div>
            <p className="section-label" style={{ color: 'var(--harvest-amber)' }}>{t.ecoLabel}</p>
            <h2 className="local-eco__heading">{t.ecoHeading}</h2>
            <p style={{ opacity: 0.75, maxWidth: '480px', lineHeight: 1.7 }}>{t.ecoDesc}</p>
          </div>
          <div className="local-eco__stats">
            {t.ecoStats.map(({ value, label }) => (
              <div key={label} className="local-eco__stat">
                <span className="local-eco__stat-value">{value}</span>
                <span className="local-eco__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
