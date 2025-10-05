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
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <h1 className="mb-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Blog
          </h1>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl">
            Random thoughts and musings about life!
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
          <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8 lg:space-y-10">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl bg-white p-6 shadow-xl transition-all hover:shadow-2xl dark:bg-slate-800 sm:rounded-3xl sm:p-8 lg:p-10"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 sm:mb-4 sm:gap-3 sm:text-sm">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mb-3 font-serif text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:mb-4 sm:text-2xl lg:text-3xl">
                    {post.title}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                    {post.summary}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 font-medium text-indigo-600 dark:text-indigo-400 sm:mt-6">
                    <span className="text-sm sm:text-base">Read more</span>
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
