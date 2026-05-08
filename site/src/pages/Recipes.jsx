import { useLang } from '../context/LanguageContext'
import { recipes as recipeData } from '../translations'
import './Recipes.css'

export default function Recipes() {
  const { lang } = useLang()
  const t = recipeData[lang]

  return (
    <div className="recipes">
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.pageLabel}</p>
          <h1 className="page-hero__title">{t.pageTitle}</h1>
          <p className="page-hero__sub">{t.pageSub}</p>
        </div>
      </section>

      <section className="recipes-list section">
        <div className="container">
          {t.items.map(({ mushroom, tag, title, time, serves, difficulty, img, ingredients, steps }, i) => (
            <article key={tag} className={`recipe-card${i % 2 !== 0 ? ' recipe-card--reverse' : ''}`}>
              <div className="recipe-card__img-wrap">
                <img src={img} alt={mushroom} />
                <span className="recipe-card__tag">{tag}</span>
              </div>
              <div className="recipe-card__body">
                <h2 className="recipe-card__title">{title}</h2>
                <div className="recipe-card__meta">
                  <div className="recipe-meta-item">
                    <span className="recipe-meta-label">{t.timeLabel}</span>
                    <span className="recipe-meta-value">{time}</span>
                  </div>
                  <div className="recipe-meta-item">
                    <span className="recipe-meta-label">{t.servesLabel}</span>
                    <span className="recipe-meta-value">{serves}</span>
                  </div>
                  <div className="recipe-meta-item">
                    <span className="recipe-meta-label">{t.difficultyLabel}</span>
                    <span className="recipe-meta-value">{difficulty}</span>
                  </div>
                </div>
                <div className="recipe-card__content">
                  <div className="recipe-ingredients">
                    <h3>{t.ingredientsHeading}</h3>
                    <ul>
                      {ingredients.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="recipe-method">
                    <h3>{t.methodHeading}</h3>
                    <ol>
                      {steps.map((step, j) => <li key={j}>{step}</li>)}
                    </ol>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
