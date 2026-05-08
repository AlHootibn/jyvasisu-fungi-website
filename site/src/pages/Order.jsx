import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import { usePrices } from '../context/DataContext'
import './Order.css'

const VARIETY_IMGS = {
  'Blue Oyster': 'https://images.unsplash.com/photo-1726177973715-9d17703e8d68?w=400&q=80',
  "Lion's Mane": 'https://images.unsplash.com/photo-1625286535466-68a6d71e4568?w=400&q=80',
  'King Oyster': 'https://images.unsplash.com/photo-1760108273033-0d789ef53d70?w=400&q=80',
  'Shiitake': 'https://images.unsplash.com/photo-1620582708067-9f6ba1e2fc1c?w=400&q=80',
  'Enoki': 'https://images.unsplash.com/photo-1681674300478-4a0d546c9829?w=400&q=80',
}

const VARIETY_KEYS = ['Blue Oyster', "Lion's Mane", 'King Oyster', 'Shiitake', 'Enoki']
const DELIVERY_FEE = 3.50
const FREE_THRESHOLD = 20
const MIN_ORDER = 10

function getDeliveryDates() {
  const dates = []
  const d = new Date()
  while (dates.length < 8) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() === 3 || d.getDay() === 6) {
      dates.push(new Date(d))
    }
  }
  return dates
}

function formatDate(d, lang) {
  return d.toLocaleDateString(lang === 'fi' ? 'fi-FI' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
}

export default function Order() {
  const { lang } = useLang()
  const t = tr[lang].order
  const tv = tr[lang].varieties
  const dynamicPrices = usePrices()
  const getVarietyInfo = (key) => dynamicPrices ? dynamicPrices[key] : t.varieties[key]

  const [quantities, setQuantities] = useState({})
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ type: 'delivery', date: '', address: '', name: '', email: '', phone: '', notes: '' })
  const [sent, setSent] = useState(false)

  const subtotal = VARIETY_KEYS.reduce((s, k) => s + (quantities[k] || 0) * (getVarietyInfo(k)?.price ?? 0), 0)
  const deliveryFee = form.type === 'delivery' && subtotal > 0 && subtotal < FREE_THRESHOLD ? DELIVERY_FEE : 0
  const total = subtotal + deliveryFee
  const canContinue = subtotal >= MIN_ORDER

  const setQty = (key, delta) => {
    setQuantities(q => ({ ...q, [key]: Math.max(0, (q[key] || 0) + delta) }))
  }

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  const dates = getDeliveryDates()

  const orderItems = VARIETY_KEYS.filter(k => (quantities[k] || 0) > 0)

  if (sent) {
    return (
      <div className="order">
        <section className="order-sent container">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--lichen-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <h2>{t.sentTitle}</h2>
          <p>{t.sentDesc}</p>
        </section>
      </div>
    )
  }

  return (
    <div className="order">
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.pageLabel}</p>
          <h1 className="page-hero__title">{t.pageTitle}</h1>
          <p className="page-hero__sub">{t.pageSub}</p>
        </div>
      </section>

      <section className="order-main section">
        <div className="container order-layout">

          {/* Left: variety selection or details form */}
          <div className="order-left">
            {step === 1 ? (
              <>
                <h2 className="order-section-title">{t.selectHeading}</h2>
                <div className="variety-picker">
                  {VARIETY_KEYS.map(key => {
                    const qty = quantities[key] || 0
                    const info = getVarietyInfo(key)
                    const displayName = tv.mushrooms[key].displayName
                    return (
                      <div key={key} className={`picker-card${qty > 0 ? ' picker-card--selected' : ''}`}>
                        <img src={VARIETY_IMGS[key]} alt={key} className="picker-card__img" />
                        <div className="picker-card__info">
                          <span className="picker-card__name">{displayName}</span>
                          <span className="picker-card__pack">{info.pack} · €{info.price.toFixed(2)} {t.packLabel}</span>
                        </div>
                        <div className="picker-card__qty">
                          <button className="qty-btn" onClick={() => setQty(key, -1)} aria-label="Remove one">−</button>
                          <span className="qty-num">{qty}</span>
                          <button className="qty-btn" onClick={() => setQty(key, 1)} aria-label="Add one">+</button>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <p className="order-note">{t.minOrderNote} · {t.freeDeliveryNote}</p>
              </>
            ) : (
              <>
                <button className="order-back-btn" onClick={() => setStep(1)}>{t.backBtn}</button>
                <form className="order-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>{t.deliveryType}</label>
                    <div className="delivery-toggle">
                      <label className={`delivery-option${form.type === 'delivery' ? ' delivery-option--active' : ''}`}>
                        <input type="radio" name="type" value="delivery" checked={form.type === 'delivery'} onChange={handleChange} />
                        {t.deliveryOption}
                      </label>
                      <label className={`delivery-option${form.type === 'pickup' ? ' delivery-option--active' : ''}`}>
                        <input type="radio" name="type" value="pickup" checked={form.type === 'pickup'} onChange={handleChange} />
                        {t.pickupOption}
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">{t.dateLabel}</label>
                    <select id="date" name="date" value={form.date} onChange={handleChange} required>
                      <option value="">—</option>
                      {dates.map((d, i) => (
                        <option key={i} value={d.toISOString().split('T')[0]}>{formatDate(d, lang)}</option>
                      ))}
                    </select>
                  </div>

                  {form.type === 'delivery' && (
                    <div className="form-group">
                      <label htmlFor="address">{t.addressLabel}</label>
                      <input id="address" name="address" type="text" required value={form.address} onChange={handleChange} placeholder={t.addressPlaceholder} />
                    </div>
                  )}

                  <div className="form-row form-row--2">
                    <div className="form-group">
                      <label htmlFor="name">{t.nameLabel}</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.namePlaceholder} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">{t.phoneLabel}</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={t.phonePlaceholder} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{t.emailLabel}</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.emailPlaceholder} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">{t.notesLabel}</label>
                    <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange} placeholder={t.notesPlaceholder} />
                  </div>

                  <button type="submit" className="btn-primary order-submit">{t.submitBtn}</button>
                </form>
              </>
            )}
          </div>

          {/* Right: sticky order summary */}
          <aside className="order-summary">
            <h3 className="order-summary__title">{t.summaryHeading}</h3>
            {orderItems.length === 0 ? (
              <p className="order-summary__empty">{t.emptyCart}</p>
            ) : (
              <ul className="order-summary__list">
                {orderItems.map(key => (
                  <li key={key} className="order-summary__item">
                    <span className="order-summary__name">{tv.mushrooms[key].displayName}</span>
                    <span className="order-summary__detail">×{quantities[key]} · €{(quantities[key] * (getVarietyInfo(key)?.price ?? 0)).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="order-summary__totals">
              <div className="summary-row">
                <span>{t.subtotal}</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              {form.type === 'delivery' && subtotal > 0 && (
                <div className="summary-row">
                  <span>{t.delivery}</span>
                  <span>{deliveryFee === 0 ? t.deliveryFree : `€${deliveryFee.toFixed(2)}`}</span>
                </div>
              )}
              <div className="summary-row summary-row--total">
                <span>{t.total}</span>
                <span>€{total.toFixed(2)}</span>
              </div>
            </div>
            {step === 1 && (
              <button
                className={`btn-primary order-continue${canContinue ? '' : ' order-continue--disabled'}`}
                onClick={() => canContinue && setStep(2)}
                disabled={!canContinue}
              >
                {t.continueBtn}
              </button>
            )}
          </aside>

        </div>
      </section>
    </div>
  )
}
