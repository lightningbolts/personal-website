import type { Metadata } from 'next'
import { BlogList } from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on AI, software development, and creative technology.',
}

export default function BlogPage() {
  return <BlogList />
}
