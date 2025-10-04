'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'
import type { BlogPost as BlogPostType } from '@/lib/blog'

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null)

  useEffect(() => {
    serialize(post.content).then(setMdxSource)
  }, [post.content])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <article className="container mx-auto px-4 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <Link
            href="/blog"
            className="mb-12 inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to blog</span>
          </Link>

          <header className="mb-12">
            <h1 className="mb-6 font-serif text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-slate-100">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-lg font-medium text-slate-600 dark:text-slate-400">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          {mdxSource ? (
            <div className="prose prose-slate prose-lg dark:prose-invert max-w-none">
              <MDXRemote {...mdxSource} />
            </div>
          ) : (
            <div className="text-slate-600 dark:text-slate-400">Loading content...</div>
          )}
        </motion.div>
      </article>
    </div>
  )
}
