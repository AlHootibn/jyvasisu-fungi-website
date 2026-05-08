import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import { POSTS } from '../data/posts'
import './Blog.css'

export default function Blog() {
  const { lang } = useLang()
  const t = tr[lang].blog
  const [featured, ...rest] = POSTS

  return (
    <div className="blog">
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.pageLabel}</p>
          <h1 className="page-hero__title">{t.pageTitle}</h1>
          <p className="page-hero__sub">{t.pageSub}</p>
        </div>
      </section>

      <section className="blog-main section">
        <div className="container">

          {/* Featured post */}
          <Link to={`/blog/${featured.slug}`} className="blog-featured">
            <div className="blog-featured__img-wrap">
              <img src={featured.img} alt={featured[lang].title} />
            </div>
            <div className="blog-featured__body">
              <div className="blog-meta">
                <span className="blog-category">{featured.category[lang]}</span>
                <span className="blog-date">{new Date(featured.date).toLocaleDateString(lang === 'fi' ? 'fi-FI' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="blog-readtime">{featured.readTime} {t.readTime}</span>
              </div>
              <h2 className="blog-featured__title">{featured[lang].title}</h2>
              <p className="blog-featured__excerpt">{featured[lang].excerpt}</p>
              <span className="blog-read-more">{t.readMore} →</span>
            </div>
          </Link>

          {/* Post grid */}
          <div className="blog-grid">
            {rest.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card__img-wrap">
                  <img src={post.img} alt={post[lang].title} />
                </div>
                <div className="blog-card__body">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category[lang]}</span>
                    <span className="blog-date">{new Date(post.date).toLocaleDateString(lang === 'fi' ? 'fi-FI' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <h3 className="blog-card__title">{post[lang].title}</h3>
                  <p className="blog-card__excerpt">{post[lang].excerpt}</p>
                  <span className="blog-read-more">{t.readMore} →</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
