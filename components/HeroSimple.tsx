'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-6 py-32 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Subtle animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 opacity-20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Heading */}
        <h1 className="mb-8 font-serif text-6xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-50 sm:text-7xl lg:text-8xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
            Kairui Cheng
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-16 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300 sm:text-2xl">
          Computer Science student at the University of Washington passionate about AI systems, 
          full-stack development, and creative technology
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-10 py-4 font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40 dark:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30"
          >
            <span>View My Work</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white/80 px-10 py-4 font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            <span>Read My Blog</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
