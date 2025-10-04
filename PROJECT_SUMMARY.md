# 🎨 Kairui Cheng - Personal Website

> A modern, elegant personal portfolio built with Next.js 15, Tailwind CSS, and Framer Motion

## ✨ What's Included

### 📄 Pages
- **Home** - Animated hero with rotating taglines, featured projects, and CTA
- **About** - Education, interests, and goals
- **Projects** - Showcase of technical work with hover animations
- **Blog** - Markdown-powered blog with example post

### 🎯 Features
- ⚡ Next.js 15 App Router for optimal performance
- 🎨 Tailwind CSS with custom design system
- ✨ Framer Motion animations throughout
- 🌙 Dark/light mode with system preference detection
- 📝 MDX blog with reading time calculation
- 🔍 SEO optimized with meta tags and Open Graph
- 📱 Fully responsive design
- ♿ Accessibility focused

### 🛠️ Tech Stack
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS + Typography plugin
- **Animation**: Framer Motion
- **Content**: MDX / next-mdx-remote
- **Language**: TypeScript
- **Theme**: next-themes

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## 📋 Customization Checklist

### Essential Updates
- [ ] `config/site.ts` - Your name, bio, social links
- [ ] `data/projects.ts` - Your projects
- [ ] `content/blog/` - Your blog posts
- [ ] `public/projects/` - Project images
- [ ] `public/` - Favicon and Open Graph image

### Design Customization
- [ ] `tailwind.config.ts` - Color scheme
- [ ] `app/layout.tsx` - Fonts
- [ ] `components/Hero.tsx` - Taglines

## 📁 Project Structure

```
personal-website/
├── app/                    # Next.js pages
│   ├── (pages)/           # Route groups
│   ├── api/               # API endpoints
│   └── layout.tsx         # Root layout
├── components/            # React components
├── content/blog/          # Blog posts (MD)
├── data/                  # Static data
├── lib/                   # Utilities
├── public/                # Static files
└── config/                # Configuration
```

## 📝 Content Management

### Adding Blog Posts

1. Create `content/blog/my-post.md`
2. Add frontmatter:
```markdown
---
title: "Post Title"
date: "2024-10-04"
summary: "Brief description"
---

Your content here...
```

### Adding Projects

Edit `data/projects.ts`:
```typescript
{
  id: 'project-id',
  title: 'Project Name',
  description: 'Short description',
  techStack: ['React', 'Node.js'],
  github: 'https://github.com/...',
  demo: 'https://...',
  featured: true,
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Deploy!

### Build Locally
```bash
npm run build
npm run start
```

## 📚 Documentation

- **README.md** - You are here!
- **SETUP.md** - Detailed setup guide
- **TECHNICAL.md** - Architecture and technical details

## 🎨 Design Philosophy

**Futuristic Minimalism**
- Deep slate backgrounds with gradient accents
- Smooth animations that feel alive but minimal
- Focus on content and clarity
- Generous whitespace and clean typography

**Color Palette**
- Primary: Indigo → Violet gradients
- Background: Slate 50 (light) / 950 (dark)
- Accents: Purple highlights
- Text: High contrast slate tones

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Lint code
```

## 📦 Key Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animations
- `tailwindcss` - Styling
- `next-mdx-remote` - MDX rendering
- `next-themes` - Theme switching
- `gray-matter` - Frontmatter parsing
- `date-fns` - Date formatting

## 🤝 Support & Contact

Questions? Suggestions? Reach out!

- **Email**: kairui@uw.edu
- **GitHub**: github.com/kairuicheng
- **LinkedIn**: linkedin.com/in/kairuicheng

## 📄 License

MIT License - Free to use for your own portfolio!

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

*This is a production-ready portfolio template designed to showcase your work beautifully while maintaining excellent performance and user experience.*
