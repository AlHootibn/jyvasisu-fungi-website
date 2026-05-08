import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import './Contact.css'

export default function Contact() {
  const { lang } = useLang()
  const t = tr[lang].contact
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <div className="contact">
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.pageLabel}</p>
          <h1 className="page-hero__title">{t.pageTitle}</h1>
          <p className="page-hero__sub">{t.pageSub}</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="contact-main section">
        <div className="container contact-main__grid">

          {/* Form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="sent-confirm">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--lichen-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>{t.sentTitle}</h3>
                <p>{t.sentDesc}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row form-row--2">
                  <div className="form-group">
                    <label htmlFor="name">{t.nameLabel}</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.namePlaceholder} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t.emailLabel}</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.emailPlaceholder} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t.subjectLabel}</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                    {t.subjects.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t.messageLabel}</label>
                  <textarea id="message" name="message" rows={6} required value={form.message} onChange={handleChange} placeholder={t.messagePlaceholder} />
                </div>

                <button type="submit" className="btn-primary contact-submit">{t.submitBtn}</button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="contact-info__block">
              <h3 className="contact-info__heading">{t.farmHeading}</h3>
              <div className="contact-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p>Metsäpolku 7</p>
                  <p>40100 Jyväskylä</p>
                  <p>Finland</p>
                </div>
              </div>
              <div className="contact-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                </svg>
                <p>+358 40 123 4567</p>
              </div>
              <div className="contact-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <p>hei@jyväsisufungi.fi</p>
              </div>
            </div>

            <div className="contact-info__block">
              <h3 className="contact-info__heading">{t.hoursHeading}</h3>
              <div className="hours-list">
                {t.hours.map(({ day, time }) => (
                  <div key={day} className="hours-row">
                    <span className="hours-day">{day}</span>
                    <span className="hours-time">{time}</span>
                  </div>
                ))}
              </div>
              <p className="hours-note">{t.hoursNote}</p>
            </div>

            <div className="contact-info__block contact-info__social">
              <h3 className="contact-info__heading">{t.followHeading}</h3>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                  Instagram
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: 'var(--spore-white)', padding: '0 0 80px' }}>
        <div className="container">
          <div className="map-embed">
            <iframe
              title="Farm location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=25.6800%2C62.2350%2C25.7600%2C62.2580&layer=mapnik&marker=62.2420%2C25.7209"
              style={{ border: 0, width: '100%', height: '340px' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
