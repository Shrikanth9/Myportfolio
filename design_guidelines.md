# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Modern Portfolio** - Drawing inspiration from Linear's clean typography, Stripe's sophisticated color palette, and Vercel's minimalist aesthetic. This creates a professional yet striking developer portfolio that stands out while maintaining credibility.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 12 8% 6% (deep charcoal)
- Surface: 12 8% 10% (card backgrounds)
- Primary: 210 100% 65% (vibrant blue for CTAs and highlights)
- Accent: 165 85% 55% (cyan-teal for skill tags and interactive elements)
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

**Light Mode:**
- Background: 0 0% 99%
- Surface: 0 0% 100%
- Primary: 210 100% 50%
- Accent: 165 75% 45%
- Text Primary: 0 0% 10%
- Text Secondary: 0 0% 45%

### B. Typography
- **Headings**: Inter (700-800 weight) - bold, modern, technical
- **Body**: Inter (400-500 weight)
- **Code/Technical**: JetBrains Mono (for tech stacks, code snippets)
- **Sizes**: Hero h1 (text-5xl md:text-7xl), Section h2 (text-3xl md:text-4xl), Card h3 (text-xl md:text-2xl)

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 md:py-32
- Container: max-w-7xl mx-auto px-6
- Card spacing: gap-6 md:gap-8
- Tight spacing: space-y-4, Generous: space-y-12

### D. Component Library

**Hero Section (Full Viewport Impact):**
- Split layout: 60/40 text-to-visual ratio
- Large hero image (right side on desktop): Professional headshot or workspace aesthetic with subtle gradient overlay
- Left side: Name (text-6xl), role tagline, 2-3 key metrics (years experience, projects completed), dual CTAs (primary + outline with backdrop blur)
- Animated gradient background subtle effect behind text
- Social proof badges (GitHub stars, certifications) integrated naturally

**Navigation:**
- Fixed top navbar with blur backdrop
- Logo/name left, nav links center, theme toggle + CTA right
- Smooth scroll to sections with active state indicators
- Mobile: Slide-out menu with full-screen overlay

**About Section:**
- Two-column: Professional photo left (rounded with border accent), rich bio right
- Education cards with institution logos
- Timeline-style presentation with subtle connecting lines
- "Download Resume" CTA with icon

**Experience Timeline:**
- Vertical timeline with alternating left/right cards on desktop
- Each card: Company logo, role title, duration, 3-4 bullet achievements with icons
- Tech stack badges at card bottom
- Hover: Subtle lift and glow effect

**Skills Grid:**
- Category-based organization (Frontend, Backend, DevOps, Tools)
- Skill cards with proficiency indicators (not bars - use pill badges with experience level)
- Icons from popular icon library for each technology
- 3-4 column grid (responsive to 2 then 1)
- Group by expertise level with visual hierarchy

**Projects Showcase:**
- Masonry grid layout (2-3 columns) or bento box arrangement
- Each project card: Screenshot/mockup image, title, brief description, tech stack pills, links (Live + GitHub)
- Feature 1-2 projects as "Featured" with larger cards and more detail
- Filter buttons by technology or category
- Hover: Image zoom and overlay with quick stats

**Contact Section:**
- Center-aligned with professional headshot or geometric pattern background
- Email, LinkedIn, GitHub with large icon buttons
- "Open to opportunities" status indicator
- Location and availability information
- Simple form alternative: Just email CTA with mailto link (avoid overcomplicated forms)

**Footer:**
- Minimal: Copyright, social links, "Built with Next.js" badge
- Back to top button
- Theme and language selector if multilingual

### E. Interactions
- Smooth scroll behavior between sections
- Fade-in-up animations for content as user scrolls (threshold-based, not on every element)
- Button hover: Slight scale + glow
- Card hover: Lift (translate-y-1) + shadow increase
- Theme toggle: Smooth transition with 300ms duration
- NO excessive animations - keep it professional

## Images

**Required Images:**
1. **Hero Image** (Large): Professional workspace setup, coding environment, or creative headshot with depth of field - positioned right side, takes 40-50% width, subtle gradient overlay from background color
2. **About Section Portrait**: Professional headshot, square/rounded, 300-400px
3. **Project Screenshots**: 4-6 high-quality mockups of key projects (can use placeholder services like Unsplash for demo)
4. **Company Logos**: For experience timeline (small, monochrome preferred)
5. **Technology Icons**: Use Devicons or Simple Icons library via CDN

**Image Treatment:**
- Rounded corners (rounded-2xl) for project screenshots
- Subtle border on images in dark mode (border-white/10)
- Lazy loading for performance
- Optimize all images (WebP format, appropriate sizing)

## Special Elements
- Gradient text for hero title using bg-clip-text
- Glass morphism effect on navbar (backdrop-blur-xl + bg-opacity-80)
- Animated typing effect for role/tagline in hero (simple, not distracting)
- Particle.js or subtle geometric background pattern on hero only
- Code block syntax highlighting for any technical snippets using Prism.js
- Cursor following spotlight effect on project cards (subtle)

## Accessibility
- Consistent dark mode across all inputs, forms, and interactive elements
- Proper heading hierarchy (h1 → h2 → h3)
- Sufficient color contrast (WCAG AA minimum)
- Focus states visible for keyboard navigation
- Alt text for all images
- Semantic HTML throughout