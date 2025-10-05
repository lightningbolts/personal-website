'use client'

import { motion } from 'framer-motion'

const education = [
  {
    institution: 'University of Washington',
    degree: 'B.S. in Computer Science, D.A. to Paul G. Allen School',
    period: '2025 - 2029',
    location: 'Seattle, WA',
  },
  {
    institution: 'Inglemoor High School',
    degree: 'SAT: 1570; IB Diploma (38/45); graduated with Summa Cum Laude honors; National Merit Finalist.',
    period: '2021 - 2025',
    location: 'Kenmore, WA',
  }
]

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
  'Visiting all seven continents and experiencing diverse cultures',
  'Building human-centered systems that enhance creativity and productivity',
  'Performing an Alto Saxophone concerto live with a full orchestra',
  'Exploring the intersection of computational creativity and machine learning',
  'Connecting with diverse friends and colleagues who share my passions',
  'Developing scalable, impactful software that solves real-world problems',
  'Learning Chinese and German to fluency'
]

export function AboutContent() {
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
            About Me
          </h1>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl">
            Computer Science student passionate about creating technology
            that makes a difference.
          </p>
        </motion.div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="mb-8 font-serif text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:mb-10 sm:text-3xl lg:text-4xl">
            Education
          </h2>
          {education.map((edu, idx) => (
            <div
              key={edu.institution + edu.period + idx}
              className="mb-4 rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800 sm:mb-6 sm:rounded-3xl sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl lg:text-3xl">
                    {edu.institution}
                  </h3>
                  <p className="mt-2 text-base text-indigo-600 dark:text-indigo-400 sm:mt-3 sm:text-lg lg:text-xl">
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 sm:mt-2 sm:text-base lg:text-lg">
                    {edu.location}
                  </p>
                </div>
                <div className="text-base font-medium text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl">
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Interests */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="mb-8 font-serif text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:mb-10 sm:text-3xl lg:text-4xl">
            Interests & Passions!
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-xl transition-all hover:shadow-2xl dark:bg-slate-800 sm:rounded-3xl sm:p-8"
              >
                <div className="mb-4 text-4xl sm:mb-5 sm:text-5xl">{interest.icon}</div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-slate-900 dark:text-slate-100 sm:mb-3 sm:text-xl lg:text-2xl">
                  {interest.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
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
          <h2 className="mb-8 font-serif text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:mb-10 sm:text-3xl lg:text-4xl">
            Goals & Aspirations
          </h2>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 p-6 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
            <ul className="space-y-4 sm:space-y-6">
              {goals.map((goal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start text-white"
                >
                  <svg
                    className="mr-3 h-5 w-5 flex-shrink-0 text-white/90 sm:mr-4 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
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
                  <span className="text-sm leading-relaxed sm:text-base lg:text-lg xl:text-xl">{goal}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
