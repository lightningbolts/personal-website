import type { Metadata } from 'next'
import { ProjectsGrid } from '@/components/ProjectsGrid'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my technical projects and creative work.',
}

export default function ProjectsPage() {
  return <ProjectsGrid />
}
