import { Hero } from '@/components/HeroSimple'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { CTASection } from '@/components/CTASection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProjects />
      <CTASection />
    </div>
  )
}
