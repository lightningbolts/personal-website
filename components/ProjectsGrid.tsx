'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

export function ProjectsGrid() {
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
            Projects
          </h1>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl">
            A showcase of my technical work, from AI applications to full-stack systems!
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
