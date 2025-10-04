# Personal Website - Technical Documentation

## Architecture Overview

This is a Next.js 15 application using the App Router architecture with TypeScript and Tailwind CSS.

### Key Design Decisions

1. **App Router over Pages Router**
   - Better performance with Server Components
   - Simplified data fetching
   - Improved loading states

2. **Static Generation for Blog**
   - Blog posts pre-rendered at build time
   - Fast page loads
   - SEO friendly

3. **Client Components for Animations**
   - Framer Motion requires client-side rendering
   - Minimal client bundle size
   - Server components for everything else

4. **File-based Blog System**
   - Simple markdown files in `/content/blog`
   - No database required
   - Easy content management
   - Git-based version control

## Component Structure

### Layout Components
- `app/layout.tsx` - Root layout with providers
- `components/Navbar.tsx` - Navigation (client component)
- `components/Footer.tsx` - Footer (server component)

### Page Components
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/projects/page.tsx` - Projects listing
- `app/blog/page.tsx` - Blog index
- `app/blog/[slug]/page.tsx` - Individual blog posts

### Feature Components
- `components/Hero.tsx` - Animated hero section
- `components/ProjectCard.tsx` - Project display card
- `components/BlogList.tsx` - Blog posts listing
- `components/BlogPost.tsx` - Blog post renderer

## Data Flow

### Projects
1. Static data in `data/projects.ts`
2. Imported directly in components
3. Rendered server-side or client-side as needed

### Blog Posts
1. Markdown files in `content/blog/*.md`
2. Parsed with `gray-matter` in `lib/blog.ts`
3. API route at `/api/blog` for client-side fetching
4. MDX rendering with `next-mdx-remote`

## Styling System

### Tailwind Configuration
- Custom color palette (indigo, violet, purple gradients)
- Dark mode support via `next-themes`
- Typography plugin for blog content
- Custom animations

### Design Tokens
```
Primary: Indigo (500-600)
Secondary: Violet (500)
Accent: Purple (500)
Background: Slate (50/950)
Text: Slate (900/100)
```

## Performance Optimizations

1. **Image Optimization**
   - Next.js Image component
   - Automatic WebP conversion
   - Lazy loading

2. **Code Splitting**
   - Automatic route-based splitting
   - Dynamic imports for heavy components

3. **Font Optimization**
   - Self-hosted fonts via next/font
   - Font display swap

4. **Static Generation**
   - Pre-rendered pages
   - Incremental Static Regeneration ready

## SEO Strategy

1. **Metadata**
   - Dynamic metadata per page
   - Open Graph tags
   - Twitter cards

2. **Sitemap**
   - Auto-generated from routes
   - Updated on build

3. **Structured Data**
   - JSON-LD for blog posts
   - Organization schema

## Development Workflow

### Local Development
```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

### Adding Features

1. **New Page**
   ```bash
   mkdir app/new-page
   touch app/new-page/page.tsx
   ```

2. **New Component**
   ```bash
   touch components/NewComponent.tsx
   ```

3. **New Blog Post**
   ```bash
   touch content/blog/post-slug.md
   ```

## Deployment

### Vercel (Recommended)
- Automatic deployments on push
- Preview deployments for PRs
- Edge network distribution
- Analytics included

### Self-Hosting
```bash
npm run build
npm run start
```
- Requires Node.js 18+
- Environment: Production
- Port: 3000 (configurable)

## Future Enhancements

### Potential Features
- [ ] Search functionality
- [ ] Tags/categories for blog
- [ ] RSS feed
- [ ] Newsletter signup
- [ ] Comments system (e.g., Giscus)
- [ ] View counter
- [ ] Related posts
- [ ] Table of contents for blog posts

### Performance
- [ ] Add service worker for offline support
- [ ] Implement image CDN
- [ ] Add loading skeletons
- [ ] Optimize Framer Motion bundle

### Content
- [ ] Add case studies for projects
- [ ] Create a uses page
- [ ] Add speaking engagements
- [ ] Portfolio timeline

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Focus indicators

## License

MIT - Feel free to use as a template!
