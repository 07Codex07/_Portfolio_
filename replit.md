# Vinayak Sahu Portfolio

## Overview
A stunning dark-themed developer portfolio website for Vinayak Sahu, an AI Engineer at Vidur Research. The portfolio showcases projects in AI/ML, RAG systems, and interpretable intelligence.

## Current State
- **Phase**: Frontend Complete
- **Last Updated**: November 2025
- **Status**: Ready for testing

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **3D Effects**: Three.js for particle background
- **Animations**: Framer Motion patterns, CSS animations
- **Routing**: Wouter
- **Build**: Vite

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── CustomCursor.tsx # Cyan glow cursor
│   │   ├── ParticleBackground.tsx # 3D particle effect
│   │   ├── TerminalTyping.tsx # Terminal animation
│   │   ├── Navigation.tsx   # Fixed header nav
│   │   ├── HeroSection.tsx  # Hero with terminal
│   │   ├── AboutSection.tsx # Bio + Math journey
│   │   ├── ExperienceSection.tsx # Work experience
│   │   ├── ProjectsSection.tsx # Project cards + modals
│   │   ├── NewsletterSection.tsx # Vector Daily
│   │   ├── SkillsSection.tsx # Skills cloud
│   │   ├── Footer.tsx       # Social links + nav
│   │   └── SectionHeading.tsx # Reusable heading
│   └── pages/
│       └── Home.tsx         # Main portfolio page
```

## Key Features
1. **Dark Theme**: Deep charcoal (#0A0A0A) with cyan (#00D9FF) accents
2. **3D Particle Background**: Interactive Three.js particles
3. **Terminal Intro**: Typing animation simulating command line
4. **Custom Cursor**: Cyan glow effect following mouse
5. **Project Modals**: Click cards to view full details
6. **Gradient Borders**: Cyan gradient on cards/modals
7. **Responsive Design**: Mobile-first approach
8. **Smooth Scrolling**: CSS scroll-behavior: smooth

## Design System
- **Primary Color**: Deep Cyan (HSL 187 100% 50%)
- **Background**: Near-black (#0A0A0A)
- **Card Background**: Slightly elevated (#111-#161616)
- **Typography**: Inter/Geist for UI, JetBrains Mono for code
- **Border Radius**: Small (0.375rem) for modern look

## Projects Featured
1. SubjectiveRAG - Financial Analysis Agent
2. PrepGraph - AI Study Assistant
3. Vector Daily - Automated AI Newsletter
4. Reel2Retail - Fashion Matcher (CV)
5. Local Linux Smart Assistant
6. SecuFlow - Security Automation
7. Hive Big Data Analytics

## Running the App
The workflow "Start application" runs `npm run dev` which starts:
- Express backend on port 5000
- Vite frontend dev server

## Deployment

### Vercel Deployment
This project is configured for static site deployment on Vercel:

1. Connect your repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`:
   - **Build Command**: `npm run build:vercel`
   - **Output Directory**: `dist/public`
   - **Framework**: Vite
3. SPA routing is handled via rewrites in vercel.json

Note: This deploys as a static site. The Express server is only used for local development.

## User Preferences
- Deep cyan accent color
- 3D particle animations
- Terminal-style intro
- Gradient borders on modals
- Custom cursor glow effect
