import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import './Home.css'

const HERO_IMG = 'https://images.unsplash.com/photo-1762889278403-1d1a57d9a587?w=1800&q=80'
const GALLERY_IMGS = [
  { src: 'https://images.unsplash.com/photo-1762889278403-1d1a57d9a587?w=600&q=80', alt: 'Oyster mushrooms growing on farm shelves' },
  { src: 'https://images.unsplash.com/photo-1770429939069-2f649afea536?w=600&q=80', alt: 'Hands harvesting fresh oyster mushrooms' },
  { src: 'https://images.unsplash.com/photo-1770884844724-ac9e36b599e9?w=600&q=80', alt: 'Close-up cluster of oyster mushrooms' },
  { src: 'https://images.unsplash.com/photo-1611281404780-95799250d540?w=600&q=80', alt: 'Fresh mushroom harvest' },
]

const VARIETY_STATIC = [
  { key: 'Blue Oyster', latin: 'Pleurotus ostreatus var. columbinus', img: 'https://images.unsplash.com/photo-1726177973715-9d17703e8d68?w=600&q=80' },
  { key: "Lion's Mane", latin: 'Hericium erinaceus', img: 'https://images.unsplash.com/photo-1625286535466-68a6d71e4568?w=600&q=80' },
  { key: 'King Oyster', latin: 'Pleurotus eryngii', img: 'https://images.unsplash.com/photo-1760108273033-0d789ef53d70?w=600&q=80' },
  { key: 'Shiitake', latin: 'Lentinula edodes', img: 'https://images.unsplash.com/photo-1620582708067-9f6ba1e2fc1c?w=600&q=80' },
  { key: 'Enoki', latin: 'Flammulina velutipes', img: 'https://images.unsplash.com/photo-1681674300478-4a0d546c9829?w=600&q=80' },
]

export default function Home() {
  const { lang } = useLang()
  const t = tr[lang].home
  const tv = tr[lang].varieties

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="hero__overlay" />
        <div className="hero__content container fade-up">
          <p className="hero__eyebrow">{t.eyebrow}</p>
          <h1 className="hero__headline">
            {t.headline1}<br />{t.headline2}
          </h1>
          <p className="hero__sub">{t.sub}</p>
          <Link to="/varieties" className="btn-primary">{t.cta}</Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="pillars section-sm">
        <div className="container">
          <div className="pillars__grid">
            {t.pillars.map(({ icon, title, desc }) => (
              <div key={title} className="pillar">
                <span className="pillar__icon">{icon}</span>
                <h3 className="pillar__title">{title}</h3>
                <p className="pillar__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about section">
        <div className="container about__grid">
          <div className="about__text fade-up">
            <p className="section-label">{t.storyLabel}</p>
            <h2 className="about__heading">{t.storyHeading}</h2>
            <p>{t.storyP1}</p>
            <p>{t.storyP2}</p>
            <div className="about__stats">
              {t.stats.map(({ value, label }) => (
                <div key={label} className="stat">
                  <span className="stat__value">{value}</span>
                  <span className="stat__label">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1770429939069-2f649afea536?w=800&q=80"
              alt="Harvesting fresh oyster mushrooms at JyväSisu Fungi"
              className="about__img"
            />
          </div>
        </div>
      </section>

      {/* Featured Varieties */}
      <section className="featured section" style={{ background: 'var(--spore-white)' }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>{t.varietiesLabel}</p>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>{t.varietiesHeading}</h2>
          <div className="variety-grid">
            {VARIETY_STATIC.map(({ key, latin, img }) => (
              <div key={key} className="variety-card">
                <div className="variety-card__img-wrap">
                  <img src={img} alt={key} />
                </div>
                <div className="variety-card__body">
                  <h3 className="variety-card__name">{tv.mushrooms[key].displayName}</h3>
                  <span className="variety-card__latin">{latin}</span>
                  <p className="variety-card__flavor">{t.varietyFlavors[key]}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/varieties" className="btn-secondary">{t.varietiesCta}</Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery section">
        <div className="container">
          <p className="section-label">{t.galleryLabel}</p>
          <h2 className="section-heading">{t.galleryHeading}</h2>
          <div className="gallery__grid">
            {GALLERY_IMGS.map(({ src, alt }) => (
              <div key={alt} className="gallery__item">
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Find */}
      <section className="find section-sm" style={{ background: 'var(--forest-floor)', color: 'var(--birch-cream)' }}>
        <div className="container find__inner">
          <div>
            <p className="section-label" style={{ color: 'var(--harvest-amber)' }}>{t.findLabel}</p>
            <h2 className="find__heading">{t.findHeading}</h2>
            <p style={{ opacity: 0.75, maxWidth: '420px' }}>{t.findDesc}</p>
          </div>
          <div className="find__markets">
            {['Kauppahalli Jyväskylä', 'Forum Market', 'Prisma Seppälä'].map(m => (
              <div key={m} className="market-tag">{m}</div>
            ))}
          </div>
          <Link to="/where-to-buy" className="btn-primary" style={{ alignSelf: 'center' }}>{t.findCta}</Link>
        </div>
      </section>
    </div>
  )
}
