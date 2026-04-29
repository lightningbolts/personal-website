'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

const ALL = 'All'

function getUniqueTechnologies(): string[] {
  const set = new Set<string>()
  for (const p of projects) {
    for (const t of p.techStack) {
      set.add(t)
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}

export function ProjectsGrid() {
  const technologies = useMemo(() => getUniqueTechnologies(), [])
  const [selected, setSelected] = useState<string>(ALL)

  const filteredProjects = useMemo(() => {
    if (selected === ALL) return projects
    return projects.filter((p) => p.techStack.includes(selected))
  }, [selected])

  const pills = useMemo(() => [ALL, ...technologies], [technologies])

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

        <div className="mb-10 sm:mb-12">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-left">
            Filter by technology
          </p>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            {pills.map((pill) => {
              const isActive = selected === pill
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setSelected(pill)}
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

        {filteredProjects.length === 0 ? (
          <p className="text-center text-slate-600 dark:text-slate-400">
            No projects match this filter.
          </p>
        ) : (
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                priority={index < 3}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
