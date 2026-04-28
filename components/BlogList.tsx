'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

interface BlogPostMeta {
  slug: string
  title: string
  date: string
  summary: string
  readingTime: string
  tags: string[]
}

const ALL = 'All'

export function BlogList() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTag, setSelectedTag] = useState<string>(ALL)

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data: BlogPostMeta[]) => {
        setPosts(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const allTags = useMemo(() => {
    const set = new Set<string>()
    for (const post of posts) {
      for (const tag of post.tags ?? []) {
        set.add(tag)
      }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [posts])

  const filterPills = useMemo(() => [ALL, ...allTags], [allTags])

  const filteredPosts = useMemo(() => {
    if (selectedTag === ALL) return posts
    return posts.filter((p) => (p.tags ?? []).includes(selectedTag))
  }, [posts, selectedTag])

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
          <>
            <div className="mx-auto mb-10 max-w-4xl sm:mb-12">
              <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-left">
                Filter by tag
              </p>
              <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                {filterPills.map((pill) => {
                  const isActive = selectedTag === pill
                  return (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => setSelectedTag(pill)}
                      className={`shrink-0 rounded-full border-2 px-4 py-2 text-sm font-medium transition-all sm:px-5 sm:py-2.5 sm:text-base ${
                        isActive
                          ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-500/25 dark:border-indigo-500 dark:bg-indigo-600'
                          : 'border-slate-200 bg-white/80 text-slate-700 hover:border-indigo-400 hover:text-indigo-700 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300'
                      }`}
                    >
                      {pill}
                    </button>
                  )
                })}
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center text-slate-600 dark:text-slate-400">
                No posts match this tag.
              </div>
            ) : (
              <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8 lg:space-y-10">
                {filteredPosts.map((post, index) => (
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
                      {(post.tags?.length ?? 0) > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200 sm:text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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
          </>
        )}
      </div>
    </div>
  )
}
