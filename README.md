# Kairui Cheng - Personal Website

A modern, performant personal portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant page transitions
- **Blog System**: MDX-powered blog with markdown support
- **Dark Mode**: System-aware theme switching
- **Fully Responsive**: Optimized for all screen sizes
- **SEO Optimized**: Meta tags, Open Graph, and sitemap
- **Performance**: Optimized for Core Web Vitals

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd personal-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
personal-website/
├── app/                   # Next.js App Router pages
│   ├── about/            # About page
│   ├── blog/             # Blog pages
│   │   └── [slug]/       # Dynamic blog post pages
│   ├── projects/         # Projects page
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── ProjectCard.tsx   # Project card component
│   ├── BlogList.tsx      # Blog listing
│   └── ...               # Other components
├── content/              # Content files
│   └── blog/             # Blog posts (Markdown)
├── config/               # Configuration files
│   └── site.ts           # Site-wide config
├── data/                 # Static data
│   └── projects.ts       # Project data
├── lib/                  # Utility functions
│   └── blog.ts           # Blog utilities
├── public/               # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 📝 Adding Blog Posts

Blog posts are stored as Markdown files in the `content/blog/` directory.

### Create a New Post

1. Create a new `.md` file in `content/blog/`:
```bash
touch content/blog/my-new-post.md
```

2. Add frontmatter and content:
```markdown
---
title: "My Awesome Post"
date: "2024-10-04"
summary: "A brief description of what this post is about."
---

# My Awesome Post

Your content goes here...
```

### Frontmatter Fields

- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD format)
- `summary` (required): Brief description for post listing

The blog system automatically:
- Calculates reading time
- Sorts posts by date
- Generates post slugs from filenames

## 🎨 Customization

### Site Configuration

Edit `config/site.ts` to update:
- Site name and title
- Description
- Social media links
- Contact information

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Name - Title',
  description: 'Your description',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your@email.com',
  },
}
```

### Projects

Edit `data/projects.ts` to add or modify projects:

```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description',
  techStack: ['Tech1', 'Tech2', 'Tech3'],
  image: '/projects/image.jpg',
  github: 'https://github.com/...',
  demo: 'https://...',
  featured: true,
}
```

### Styling

- **Colors**: Edit the color scheme in `tailwind.config.ts`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Customize Framer Motion animations in component files

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Environment Variables

No environment variables required for basic functionality.

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Markdown**: [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Typography**: [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Kairui Cheng - [timberlake2025@gmail.com](mailto:timberlake2025@gmail.com)

---

Built with ❤️ using Next.js
