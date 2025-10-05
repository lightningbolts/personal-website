'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 px-4 py-20 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-900 sm:px-6 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-white sm:mb-8 sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-white/95 sm:mb-12 sm:text-lg lg:text-xl">
            I&apos;m always excited to collaborate on innovative projects and explore new ideas.
            Whether it&apos;s technology, software engineering, music, math, running, or movies — let&apos;s connect!
          </p>
          <div className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4 lg:gap-6">
            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-center font-medium text-indigo-600 shadow-xl shadow-black/20 transition-all hover:scale-105 hover:shadow-2xl sm:w-auto sm:px-8 sm:py-4 lg:px-10"
            >
              <span>Learn More About Me</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="mailto:timberlake2025@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/90 bg-white/10 px-6 py-3 text-center font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4 lg:px-10"
            >
              <span>Get In Touch</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
