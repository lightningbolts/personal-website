# AI Agent Customization Guide

This guide helps AI coding agents understand the codebase structure, conventions, and patterns used in this Next.js 15 portfolio project.

## Project Overview

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS + Framer Motion animations
- **Content**: MDX-powered blog with markdown files
- **Build/Run**: `npm run dev` (development), `npm run build` (production)

## TypeScript & Type Conventions

### Import Type Declarations
Always use `import type` for importing types and interfaces:

```typescript
import type { Project } from '@/data/projects'
import type { BlogPost } from '@/lib/blog'
import type { Metadata, Viewport } from 'next'
```

### Interface & Type Patterns

Define props interfaces for React components with a `Props` suffix:

```typescript
interface ProjectCardProps {
  project: Project
  index: number
  priority?: boolean
}

interface BlogPostProps {
  post: BlogPost
  featured?: boolean
}
```

Always export domain data types (not component props):

```typescript
// In data/projects.ts
export interface Project {
  id: string
  title: string
  description: string
  // ...
}

// In lib/blog.ts
export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  content: string
  readingTime: string
  tags: string[]
}
```

## Component Conventions

### Named Exports & Client Components

Components use **named exports** and the `'use client'` directive for client-side interactivity:

```typescript
// ✅ Correct pattern
'use client'
import { motion } from 'framer-motion'

export function ProjectCard({ project, index }: ProjectCardProps) {
  return <motion.div>...</motion.div>
}
```

### Component Props Pattern

Keep component props focused and use optional chaining for feature flags:

```typescript
export function Hero({ animate, className }: HeroProps) {
  // Use sensible defaults
  const shouldAnimate = animate ?? true
  // ...
}
```

## Imports & Path Aliases

**Always use the `@/*` path alias** for imports (configured in `tsconfig.json`):

```typescript
// ✅ Correct
import { Navbar } from '@/components/Navbar'
import { siteConfig } from '@/config/site'
import type { Project } from '@/data/projects'

// ❌ Avoid
import { Navbar } from '../../../components/Navbar'
```

### Import Organization Order

1. External packages (`next/*`, `framer-motion`, etc.)
2. `import type { ... } from 'next'`
3. Internal types: `import type { Project } from '@/...'`
4. Internal components/functions: `import { Button } from '@/...'`

Example:

```typescript
import Link from 'next/link'
import type { Metadata } from 'next'
import type { BlogPost } from '@/lib/blog'
import { BlogList } from '@/components/BlogList'
```

## Blog & Content Patterns

### Blog Post Frontmatter

All markdown files in `content/blog/` must include frontmatter:

```markdown
---
title: "My Blog Post"
date: "2024-10-04"
summary: "Brief description of the post."
tags: ["tag1", "tag2"]
---

## Content starts here
```

The frontmatter is parsed by gray-matter and mapped to `BlogPost` interface.

### Blog Utilities

Use `@/lib/blog.ts` for blog operations:

```typescript
import { getAllPosts, getSinglePost } from '@/lib/blog'

// Get all posts (returns BlogPost[] with metadata)
const posts = await getAllPosts()

// Get a single post (returns BlogPost with full content)
const post = await getSinglePost(slug)
```

## API Route Patterns

### REST Endpoint Structure

API routes in `app/api/` follow Next.js conventions with named exports:

```typescript
import { NextResponse } from 'next/server'

export async function GET() {
  // Handle GET requests
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  // Handle POST requests
  const body = await request.json()
  return NextResponse.json(response)
}
```

Example: `app/api/blog/route.ts` returns blog post metadata:

```typescript
const postsMetadata = posts.map(({ slug, title, date, summary, readingTime, tags }) => ({
  slug,
  title,
  date,
  summary,
  readingTime,
  tags,
}))
```

## Data File Patterns

### Static Data in TypeScript

Define domain data as typed arrays in `data/` files:

```typescript
// data/projects.ts
export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  featured: boolean
  // ...
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'My Project',
    // ...
  },
]
```

### Configuration Files

Site-wide config in `config/site.ts`:

```typescript
export const siteConfig = {
  name: 'Kairui Cheng',
  title: 'Kairui Cheng - Full Stack Developer',
  // ...
}
```

Always import and use `siteConfig` for consistent metadata.

## Layout & Metadata Patterns

### Root Layout (`app/layout.tsx`)

Centralized configuration for fonts, metadata, viewport, and providers:

```typescript
import type { Metadata, Viewport } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  // ...
}

export const viewport: Viewport = {
  width: 'device-width',
  // ...
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
```

### Page Metadata

Use `generateMetadata()` for dynamic page titles:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `Blog: ${post.title}`,
    description: post.summary,
  }
}

export default function BlogPost({ params }) {
  // ...
}
```

## Animation Patterns

### Framer Motion Usage

Use Framer Motion for entrance animations and interactions:

```typescript
import { motion, AnimatePresence } from 'framer-motion'

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {project.title}
    </motion.div>
  )
}
```

## Common Patterns Checklist

When creating new components or files, remember:

- ✅ Use `'use client'` for interactive components
- ✅ Define props interfaces with `Props` suffix
- ✅ Use named exports for components
- ✅ Use `import type` for type imports
- ✅ Always use `@/*` path aliases
- ✅ Define data types at source (in `data/` or `lib/`)
- ✅ Use Framer Motion for animations
- ✅ Use TypeScript strict mode (no `any` types)
- ✅ Include proper `Metadata` for pages
- ✅ Format dates using `date-fns`
- ✅ Add `readingTime` calculation for blog posts

## Quick Reference

| Task | Pattern |
|------|---------|
| Create component | Named export + `'use client'` + Props interface |
| Define types | Export from `data/` or `lib/` files |
| Import files | Always use `@/*` path aliases |
| API route | Named `GET`/`POST` exports with `NextResponse` |
| Blog post | Add frontmatter with title, date, summary, tags |
| Metadata | Use `generateMetadata()` for dynamic pages |
| Animations | Use Framer Motion with `motion.*` components |
| Type imports | Use `import type { ... }` syntax |

---

For detailed project structure and setup instructions, see [README.md](README.md).
