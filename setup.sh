#!/bin/bash

# Personal Website Setup Script
# This script helps you get started with your new portfolio

echo "🚀 Setting up Kairui Cheng's Personal Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'.' -f1 | sed 's/v//')
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required."
    echo "   Your version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Create content directories if they don't exist
echo "📁 Creating content directories..."
mkdir -p content/blog
mkdir -p public/projects

echo "✅ Directories created"
echo ""

# Check if example blog post exists
if [ ! -f "content/blog/building-ai-for-nutrack.md" ]; then
    echo "⚠️  Example blog post not found"
else
    echo "✅ Example blog post ready"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo ""
echo "   1. Customize your site:"
echo "      - Edit config/site.ts with your information"
echo "      - Edit data/projects.ts with your projects"
echo ""
echo "   2. Start development server:"
echo "      npm run dev"
echo ""
echo "   3. Open your browser:"
echo "      http://localhost:3000"
echo ""
echo "   4. Read the guides:"
echo "      - README.md - Complete documentation"
echo "      - SETUP.md - Quick start guide"
echo "      - TECHNICAL.md - Technical details"
echo ""
echo "🚀 Ready to build something amazing!"
