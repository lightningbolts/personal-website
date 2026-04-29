import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'

export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  content: string
  readingTime: string
  tags: string[]
}

function normalizeTags(frontmatterTags: unknown): string[] {
  if (!frontmatterTags) return []
  if (Array.isArray(frontmatterTags)) {
    return frontmatterTags.map((t) => String(t).trim()).filter(Boolean)
  }
  if (typeof frontmatterTags === 'string') {
    return frontmatterTags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
  }
  return []
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const dateObj = data.date ? new Date(data.date) : null
      const sortTime =
        dateObj && !Number.isNaN(dateObj.getTime()) ? dateObj.getTime() : 0

      return {
        slug,
        title: data.title || 'Untitled',
        date: dateObj ? format(dateObj, 'MMMM dd, yyyy') : '',
        summary: data.summary || '',
        content,
        readingTime: calculateReadingTime(content),
        tags: normalizeTags(data.tags),
        sortTime,
      }
    })

  return allPostsData
    .sort((a, b) => b.sortTime - a.sortTime)
    .map(({ sortTime: _sortTime, ...post }) => post)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date ? format(new Date(data.date), 'MMMM dd, yyyy') : '',
      summary: data.summary || '',
      content,
      readingTime: calculateReadingTime(content),
      tags: normalizeTags(data.tags),
    }
  } catch (error) {
    return null
  }
}
