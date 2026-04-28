import type { Metadata } from 'next'
import { AboutContent } from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Kairui Cheng—education, interests from AI to baseball and the outdoors, and goals.',
}

export default function AboutPage() {
  return <AboutContent />
}
