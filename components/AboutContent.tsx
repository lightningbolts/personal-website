'use client'

import { motion } from 'framer-motion'

const education = {
  institution: 'University of Washington',
  degree: 'B.S. in Computer Science, D.A. to Paul G. Allen School',
  period: '2025 - 2029',
  location: 'Seattle, WA',
}

const interests = [
  {
    title: 'Artificial Intelligence',
    description: 'Machine learning, computer vision, and Markov decision processes',
    icon: '🤖',
  },
  {
    title: 'Applied Mathematics',
    description: 'Optimization, calculus, and linear algebra',
    icon: '📊',
  },
  {
    title: 'Alto Saxophone',
    description: 'Jazz improvisation and ensemble performance',
    icon: '🎷',
  },
  {
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern, data-driven frameworks',
    icon: '💻',
  },
  {
    title: 'Creative Coding',
    description: 'Generative art and interactive visualizations',
    icon: '🎨',
  },
  {
    title: 'Science Fiction',
    description: 'Exploring futuristic concepts and technologies through literature',
    icon: '📚',
  },
]

const goals = [
  'Contributing to cutting-edge AI research and applications',
  'Building human-centered AI systems that enhance creativity and productivity',
  'Exploring the intersection of computational creativity and machine learning',
  'Developing scalable, impactful software that solves real-world problems',
]

export function AboutContent() {
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
            About Me
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            Computer Science student passionate about creating technology
            that makes a difference.
          </p>
        </motion.div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="mb-10 font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
            Education
          </h2>
          <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-800">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-serif text-3xl font-semibold text-slate-900 dark:text-slate-100">
                  {education.institution}
                </h3>
                <p className="mt-3 text-xl text-indigo-600 dark:text-indigo-400">
                  {education.degree}
                </p>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                  {education.location}
                </p>
              </div>
              <div className="text-xl font-medium text-slate-600 dark:text-slate-400">
                {education.period}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Interests */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="mb-10 font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
            Interests & Passions!
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="rounded-3xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl dark:bg-slate-800"
              >
                <div className="mb-5 text-5xl">{interest.icon}</div>
                <h3 className="mb-3 font-serif text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {interest.title}
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Goals */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-10 font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
            Goals & Aspirations
          </h2>
          <div className="rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 p-10 shadow-xl lg:p-12">
            <ul className="space-y-6">
              {goals.map((goal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start text-white"
                >
                  <svg
                    className="mr-4 h-7 w-7 flex-shrink-0 text-white/90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xl leading-relaxed">{goal}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
