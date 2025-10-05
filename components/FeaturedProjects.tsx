'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-900 sm:px-6 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 font-serif text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:mb-6 sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl">
            A selection of my recent work in AI, web development, and creative technology
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center sm:mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <span className="text-base sm:text-lg">View all projects</span>
            <svg
              className="h-5 w-5 transition-transform hover:translate-x-1"
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
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
