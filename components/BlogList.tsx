'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface BlogPostMeta {
  slug: string
  title: string
  date: string
  summary: string
  readingTime: string
}

export function BlogList() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch posts from API route
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h1 className="mb-6 font-serif text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-slate-100">
            Blog
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            Thoughts on AI, software development, and creative technology
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-slate-600 dark:text-slate-400">
            Loading posts...
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center text-slate-600 dark:text-slate-400">
            No blog posts yet. Check back soon!
          </div>
        ) : (
          <div className="mx-auto max-w-4xl space-y-10">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-3xl bg-white p-10 shadow-xl transition-all hover:shadow-2xl dark:bg-slate-800"
                >
                  <div className="mb-4 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mb-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
                    {post.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                    {post.summary}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-medium text-indigo-600 dark:text-indigo-400">
                    <span>Read more</span>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
