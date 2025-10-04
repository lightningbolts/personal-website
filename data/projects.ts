// Project data for portfolio showcase
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  image: string
  github?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'statepulse',
    title: 'StatePulse',
    description: 'Real-time legislative tracking system',
    longDescription: 'A comprehensive platform for tracking legislative activity across multiple states in real-time. Powered by custom web scrapers, natural language processing, and a robust notification system to keep users informed of policy changes.',
    techStack: ['React', 'Next.js', 'Typescript', 'MongoDB', 'Python', 'Azure', 'Tailwind CSS', 'Vercel', 'Gemini API'],
    image: '/projects/statepulse.png',
    github: 'https://github.com/lightningbolts/state-pulse',
    demo: 'https://statepulse.me',
    featured: true,
  },
  {
    id: 'anor',
    title: 'Anor',
    description: 'Privacy-first URL burner',
    longDescription: 'A secure, privacy-focused URL shortener with self-destructing links. Inspired by the Elvish word for "flame," Anor creates temporary links that expire after a set time or number of uses, ensuring your shared content stays private.',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/anor.png',
    github: 'https://github.com/lightningbolts/anor',
    demo: 'https://anor-mine.vercel.app',
    featured: true,
  }
]
