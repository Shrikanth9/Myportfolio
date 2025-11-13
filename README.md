# Shrikantha M A - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, and projects as a Software Developer specializing in HTML5 game development.

## 🚀 Live Demo

Visit the live portfolio at: [[Portfolio](https://shrikantha-ma.vercel.app/)]

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Theme toggle for better user experience
- **Smooth Animations** - Subtle transitions and hover effects
- **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- **SEO Optimized** - Meta tags for better search engine visibility
- **Interactive Sections**:
  - Hero section with professional introduction
  - About section with education and summary
  - Experience timeline with achievements
  - Skills with visual progress bars
  - Featured projects showcase
  - Contact information with social links

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Wouter** - Routing
- **Lucide React** - Icons
- **Framer Motion** - Animations (via shadcn/ui)

### Backend
- **Express.js** - Server framework
- **Node.js** - Runtime environment

### UI Components
- **shadcn/ui** - Component library
- **Radix UI** - Accessible primitives

## 📁 Project Structure

```
.
├── client/                          # Frontend application
│   ├── src/
│   │   ├── components/             # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── ui/                 # shadcn/ui components
│   │   ├── contexts/
│   │   │   └── ThemeProvider.tsx   # Theme management
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── not-found.tsx
│   │   ├── lib/
│   │   │   └── queryClient.ts      # React Query setup
│   │   ├── App.tsx                 # Main app component
│   │   ├── main.tsx                # App entry point
│   │   └── index.css               # Global styles
│   └── index.html                  # HTML template
├── server/                          # Backend application
│   ├── routes.ts                   # API routes
│   ├── storage.ts                  # Data storage
│   └── index.ts                    # Server entry point
├── assets/                         # Images and assets
│   └── generated_images/
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
└── package.json                    # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**
   ```bash
   # If downloaded as ZIP, extract it first
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5000`
   - The portfolio should be running!

## 📝 Customization

### Update Personal Information

Edit the following files to customize with your own information:

1. **Hero Section** - `client/src/components/HeroSection.tsx`
   - Name, title, description
   - Years of experience, projects count
   - Social media links

2. **About Section** - `client/src/components/AboutSection.tsx`
   - Professional summary
   - Education details
   - Profile image

3. **Experience** - `client/src/components/ExperienceSection.tsx`
   - Update the `experiences` array with your work history

4. **Skills** - `client/src/components/SkillsSection.tsx`
   - Update the `skillCategories` array with your skills

5. **Projects** - `client/src/components/ProjectsSection.tsx`
   - Update the `projects` array with your projects
   - Replace project images in `attached_assets/`

6. **Contact** - `client/src/components/ContactSection.tsx`
   - Email, phone, location
   - Social media links

### Update Images

Replace images in `attached_assets/generated_images/` with your own:
- Hero background image
- Profile photo
- Project screenshots

Update the import paths in respective component files.

### Change Color Scheme

Edit `client/src/index.css` to modify colors:
- Light mode colors are in `:root`
- Dark mode colors are in `.dark`
- Update HSL values to your preferred colors

## 🎨 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 5000

# Build
npm run build        # Build for production

# Preview
npm run preview      # Preview production build
```

## 🌐 Deployment

### Deploy to Replit

1. Click the **Publish** button in your Replit workspace
2. Choose deployment type (Static for best performance)
3. Your portfolio will be live at `your-app.replit.app`

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

If you prefer to deploy from the Vercel dashboard (recommended):

1. Push your repository to GitHub.
2. On Vercel, choose "New Project" and import your repository.
3. Set the Root Directory to `./client` (if Vercel doesn't autodetect).
4. Build Command: `npm run build` (run from repository root).
5. Output Directory: `dist/public`.
6. Click Deploy.

Note: This repository was converted to a Vite-only static build. The `server/` folder remains for reference but is not required for deployment unless you need server APIs. If you later need server endpoints, deploy them separately (Render/Railway) or convert to Vercel Serverless functions.

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Shrikantha M A**
- Phone: +91 9353889753
- Location: Bangalore, India
- Portfolio: [[Portfolio](https://shrikantha-ma.vercel.app/)]

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Note**: This portfolio was built using React + Vite. All components are reusable and fully customizable. Feel free to modify any section to match your personal brand!
