'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'
import type { BlogPost as BlogPostType } from '@/lib/blog'

interface BlogPostProps {
  post: BlogPostType
  children: ReactNode
}

export function BlogPost({ post, children }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <article className="container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 sm:mb-12"
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

          <header className="mb-8 sm:mb-12">
            <h1 className="mb-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 sm:gap-3 sm:text-base lg:text-lg">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
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
          </header>

          <div
            className="prose prose-slate prose-base max-w-none dark:prose-invert sm:prose-lg prose-headings:font-serif prose-headings:tracking-tight prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-indigo-400 prose-img:rounded-xl prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0 prose-code:before:content-none prose-code:after:content-none dark:prose-pre:bg-transparent [&_figure[data-rehype-pretty-code-figure]]:my-6 [&_figure[data-rehype-pretty-code-figure]]:overflow-hidden [&_figure[data-rehype-pretty-code-figure]]:rounded-xl [&_figure[data-rehype-pretty-code-figure]]:border [&_figure[data-rehype-pretty-code-figure]]:border-slate-200 [&_figure[data-rehype-pretty-code-figure]]:bg-slate-50 dark:[&_figure[data-rehype-pretty-code-figure]]:border-slate-700 dark:[&_figure[data-rehype-pretty-code-figure]]:bg-slate-900/80 [&_figure[data-rehype-pretty-code-figure]_pre]:m-0 [&_figure[data-rehype-pretty-code-figure]_pre]:bg-transparent [&_figure[data-rehype-pretty-code-figure]_pre]:p-4 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:text-[length:inherit]"
          >
            {children}
          </div>
        </motion.div>
      </article>
    </div>
  )
}
