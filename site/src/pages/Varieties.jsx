import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import './Varieties.css'

const VARIETY_STATIC = [
  { key: 'Blue Oyster', latin: 'Pleurotus ostreatus var. columbinus', img: 'https://images.unsplash.com/photo-1726177973715-9d17703e8d68?w=800&q=80' },
  { key: "Lion's Mane", latin: 'Hericium erinaceus', img: 'https://images.unsplash.com/photo-1625286535466-68a6d71e4568?w=800&q=80' },
  { key: 'King Oyster', latin: 'Pleurotus eryngii', img: 'https://images.unsplash.com/photo-1760108273033-0d789ef53d70?w=800&q=80' },
  { key: 'Shiitake', latin: 'Lentinula edodes', img: 'https://images.unsplash.com/photo-1620582708067-9f6ba1e2fc1c?w=800&q=80' },
  { key: 'Enoki', latin: 'Flammulina velutipes', img: 'https://images.unsplash.com/photo-1681674300478-4a0d546c9829?w=800&q=80' },
]

export default function Varieties() {
  const { lang } = useLang()
  const t = tr[lang].varieties

  return (
    <div className="varieties">
      {/* Page header */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.pageLabel}</p>
          <h1 className="page-hero__title">{t.pageTitle}</h1>
          <p className="page-hero__sub">{t.pageSub}</p>
        </div>
      </section>

      {/* Variety detail sections */}
      <section className="variety-list section">
        <div className="container">
          {VARIETY_STATIC.map(({ key, latin, img }, i) => {
            const m = t.mushrooms[key]
            return (
              <div key={key} className={`variety-detail${i % 2 !== 0 ? ' variety-detail--reverse' : ''}`}>
                <div className="variety-detail__img-wrap">
                  <img src={img} alt={m.displayName} />
                  <span className="availability-badge availability-badge--year">{t.yearRound}</span>
                </div>
                <div className="variety-detail__info">
                  <p className="variety-detail__finnish">{lang === 'fi' ? key : m.displayName === key ? '' : key}</p>
                  <h2 className="variety-detail__name">{m.displayName}</h2>
                  <p className="variety-detail__latin">{latin}</p>
                  <p className="variety-detail__desc">{m.description}</p>
                  <div className="variety-detail__meta">
                    <div className="meta-row">
                      <span className="meta-label">{t.flavorLabel}</span>
                      <span className="meta-value">{m.flavor}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">{t.textureLabel}</span>
                      <span className="meta-value">{m.texture}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">{t.usesLabel}</span>
                      <div className="use-tags">
                        {m.uses.map(u => <span key={u} className="use-tag">{u}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section className="process section" style={{ background: 'var(--forest-floor)', color: 'var(--birch-cream)' }}>
        <div className="container">
          <p className="section-label" style={{ color: 'var(--harvest-amber)' }}>{t.processLabel}</p>
          <h2 className="section-heading" style={{ color: 'var(--birch-cream)' }}>{t.processHeading}</h2>
          <div className="process-steps">
            {t.processSteps.map(({ step, title, desc }) => (
              <div key={step} className="process-step">
                <span className="process-step__num">{step}</span>
                <h3 className="process-step__title">{title}</h3>
                <p className="process-step__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
