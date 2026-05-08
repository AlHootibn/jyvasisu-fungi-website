import { Link, useParams, Navigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { tr } from '../translations'
import { POSTS } from '../data/posts'
import './Blog.css'

export default function BlogPost() {
  const { slug } = useParams()
  const { lang } = useLang()
  const t = tr[lang].blog

  const post = POSTS.find(p => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  const content = post[lang]
  const others = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div className="blog">
      {/* Hero image */}
      <div className="post-hero">
        <img src={post.img} alt={content.title} />
        <div className="post-hero__overlay" />
        <div className="post-hero__content container">
          <Link to="/blog" className="post-back">{t.backToBlog}</Link>
          <div className="blog-meta blog-meta--light">
            <span className="blog-category">{post.category[lang]}</span>
            <span className="blog-date">{new Date(post.date).toLocaleDateString(lang === 'fi' ? 'fi-FI' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="blog-readtime">{post.readTime} {t.readTime}</span>
          </div>
          <h1 className="post-hero__title">{content.title}</h1>
        </div>
      </div>

      {/* Body */}
      <section className="post-body section">
        <div className="container post-body__inner">
          <div className="post-content">
            {content.body.map((block, i) => {
              if (block.type === 'p') return <p key={i}>{block.text}</p>
              if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>
              return null
            })}
          </div>
        </div>
      </section>

      {/* More posts */}
      {others.length > 0 && (
        <section className="section" style={{ background: 'var(--spore-white)' }}>
          <div className="container">
            <p className="section-label">{t.pageLabel}</p>
            <div className="blog-grid blog-grid--sm">
              {others.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card">
                  <div className="blog-card__img-wrap">
                    <img src={p.img} alt={p[lang].title} />
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-meta">
                      <span className="blog-category">{p.category[lang]}</span>
                      <span className="blog-date">{new Date(p.date).toLocaleDateString(lang === 'fi' ? 'fi-FI' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <h3 className="blog-card__title">{p[lang].title}</h3>
                    <span className="blog-read-more">{t.readMore} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
