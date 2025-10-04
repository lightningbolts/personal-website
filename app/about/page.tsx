import type { Metadata } from 'next'
import { AboutContent } from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Kairui Cheng - education, interests, and goals.',
}

export default function AboutPage() {
  return <AboutContent />
}
