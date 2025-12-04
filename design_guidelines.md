# Design Guidelines: Vinayak Sahu Portfolio Website

## Design Approach
**Reference-Based**: Drawing from modern developer portfolios like Vercel, Apple Developer, and Linear with dark aesthetic and premium interactions.

## Theme & Color System
- **Base**: Pure dark backgrounds (#0A0A0A primary, #111/#161616 secondary)
- **Accent**: Deep cyan (#00D9FF) for buttons, links, hover effects, and interactive elements
- **Glass morphism**: Frosted blur effects for modals and overlays
- **Gradient borders**: Cyan-to-transparent gradients on project cards and modals

## Typography System
- **Primary Font**: Inter or Geist via Google Fonts
- **Hierarchy**:
  - Hero title: 4xl-6xl, bold, gradient text effect (white to cyan)
  - Section headings: 3xl-4xl, semibold
  - Project titles: xl-2xl, medium
  - Body: base-lg, regular, light gray (#B8B8B8)
  - Code/terminal: Monospace (JetBrains Mono), cyan accent

## Layout & Spacing
- **Container**: max-w-7xl, px-4 to px-8
- **Spacing units**: Use 4, 8, 12, 16, 24, 32 (Tailwind units)
- **Section padding**: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- **Vertical rhythm**: Consistent spacing between sections with divider lines or gradient fades

## Core Components

### Hero Section
- Terminal-style typing animation for introduction
- Animated text: "Vinayak Sahu" with magnetic hover effect
- Tagline: "AI Engineer | Building Interpretable Intelligence"
- Floating 3D particle background (Three.js) with subtle motion
- CTA buttons with blur background when over particles
- Custom cursor: Cyan radial glow (20px radius) following mouse

### About + Mathematics Journey
- Two-column layout on desktop (bio left, math journey right)
- Math journey in first-person narrative with quote callout
- Quote styled with italic, border-left accent, larger text
- Smooth fade-in animation on scroll

### Experience Section
- Timeline design with cyan connector line
- Vidur Research card with company logo space, role, start date
- Expandable description of work (interpretable AI, finance systems)
- Subtle hover lift effect

### Projects Showcase
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- **Project cards**:
  - Dark background (#161616) with gradient border
  - Tech stack icons at top
  - Tags as badges (AI/ML, RAG, etc.) with cyan background
  - Hover: lift + glow effect
  - Click: opens modal dialog
  
- **Modal dialogs**:
  - Frosted glass background with backdrop blur
  - Gradient border (cyan to transparent)
  - Full project details: description, tech stack, screenshots placeholder, links
  - Close button with hover state
  - Smooth scale-in animation (Framer Motion)

### Vector Daily Newsletter Section
- Dedicated banner/card showcase
- Hero image placeholder for newsletter banner
- Feature highlights in grid
- CTA button: "Read the Latest Issue" with cyan glow

### Skills Section
- Animated tag cloud or grid
- Tags with dark background, cyan border
- Hover: color flip (cyan background, dark text)
- Staggered fade-in animation

### Social Links & Footer
- Icon buttons with magnetic hover (GitHub, LinkedIn, Twitter, Resume)
- Icons from Heroicons or Font Awesome
- Footer with minimal text, copyright, quick links

## Animations & Interactions
- **Page load**: Terminal typing effect in hero
- **Scroll reveals**: Fade-in + slide-up using Framer Motion
- **Particles**: Slow-moving 3D particles (Three.js) in hero background
- **Hover effects**: 
  - Magnetic pull on name and primary buttons
  - Card lift (translateY -4px) + shadow increase
  - Custom cursor glow follows mouse globally
- **Modal**: Scale from 0.9 to 1.0, opacity 0 to 1, with backdrop blur
- **Button states**: Subtle glow on hover, slight scale on active

## Images
- **Hero**: 3D particle canvas (no static image needed, Three.js renders)
- **Project cards**: Screenshot placeholders with aspect ratio 16:9
- **Newsletter banner**: Full-width banner image at top of section
- **Profile**: Small circular avatar in About section (optional, ask user for URL)

## Responsive Behavior
- **Desktop (lg)**: Full grid layouts, side-by-side sections
- **Tablet (md)**: 2-column grids, stacked sections
- **Mobile (base)**: Single column, full-width cards, reduced padding

## Accessibility
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels for icon buttons
- Focus states with cyan outline
- Reduced motion query respected for animations

This portfolio must feel like a premium, high-end developer showcase with smooth interactions, striking visuals, and professional presentation of AI/ML expertise.