import { createContext, useContext, useState, useEffect } from 'react'
import { POSTS as STATIC_POSTS } from '../data/posts'

const DataContext = createContext(null)

function parseBodyMarkdown(md) {
  if (!md) return []
  return md
    .split(/\n\n+/)
    .map(block => {
      const t = block.trim()
      if (!t) return null
      if (t.startsWith('### ')) return { type: 'h3', text: t.slice(4).trim() }
      return { type: 'p', text: t.replace(/\n/g, ' ') }
    })
    .filter(Boolean)
}

function transformPost(flat) {
  return {
    slug: flat.slug,
    date: flat.date,
    readTime: flat.readTime,
    category: { en: flat.category_en, fi: flat.category_fi },
    img: flat.img,
    en: { title: flat.title_en, excerpt: flat.excerpt_en, body: parseBodyMarkdown(flat.body_en) },
    fi: { title: flat.title_fi, excerpt: flat.excerpt_fi, body: parseBodyMarkdown(flat.body_fi) },
  }
}

function transformPrices(items) {
  return Object.fromEntries(items.map(item => [item.key, { pack: item.pack, price: Number(item.price) }]))
}

export function DataProvider({ children }) {
  const [posts, setPosts] = useState(STATIC_POSTS)
  const [prices, setPrices] = useState(null)

  useEffect(() => {
    fetch('/content/posts.json')
      .then(r => r.json())
      .then(data => { if (data.posts?.length) setPosts(data.posts.map(transformPost)) })
      .catch(() => {})

    fetch('/content/prices.json')
      .then(r => r.json())
      .then(data => { if (data.items?.length) setPrices(transformPrices(data.items)) })
      .catch(() => {})
  }, [])

  return <DataContext.Provider value={{ posts, prices }}>{children}</DataContext.Provider>
}

export function usePosts() {
  return useContext(DataContext).posts
}

export function usePrices() {
  return useContext(DataContext).prices
}
