# Quick Start Guide

## Initial Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Visit http://localhost:3000

## Next Steps

### 1. Customize Site Information

Edit `config/site.ts`:
- Update your name, title, and description
- Add your social media links
- Update contact email

### 2. Add Your Projects

Edit `data/projects.ts`:
- Replace example projects with your own
- Add project images to `public/projects/`
- Update GitHub and demo links

### 3. Write Blog Posts

Create markdown files in `content/blog/`:
```bash
# Example
touch content/blog/my-first-post.md
```

See README.md for markdown format details.

### 4. Customize Design

- **Colors**: Edit `tailwind.config.ts`
- **Fonts**: Change in `app/layout.tsx`
- **Hero taglines**: Edit `components/Hero.tsx`

### 5. Add Favicon & Images

- Generate favicons (see `public/README-FAVICON.md`)
- Add project images to `public/projects/`
- Add Open Graph image as `public/og.jpg`

### 6. Deploy

Push to GitHub and deploy on Vercel:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

Then import your repo in Vercel.

## Common Tasks

### Adding a new page
Create a new folder in `app/` with a `page.tsx` file.

### Updating navigation
Edit the `navItems` array in `components/Navbar.tsx`.

### Changing color scheme
Edit the `extend.colors` section in `tailwind.config.ts`.

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Dependencies issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
