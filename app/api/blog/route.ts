import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog'

export async function GET() {
  const posts = await getAllPosts()
  
  // Return only metadata, not full content
  const postsMetadata = posts.map(({ slug, title, date, summary, readingTime }) => ({
    slug,
    title,
    date,
    summary,
    readingTime,
  }))

  return NextResponse.json(postsMetadata)
}
