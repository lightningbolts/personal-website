'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

export function ProjectsGrid() {
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
            Projects
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            A showcase of my technical work, from AI applications to full-stack systems!
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
