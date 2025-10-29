import { CardContent, CardFooter } from "@/components/ui/card";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import dashboardImage from "@assets/dashboard.png";
interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  featured: boolean;
  liveDemoUrl?: string;
  codeUrl?: string;
  isPreview?: boolean;
}

const projects: Project[] = [
  {
    title: "AI-powered Income-Expense Tracker",
    description:
      "A Next.js app with AI-based receipt scanning and real-time email alerts for budget thresholds.",
    technologies: ["Next.js", "Prisma", "Supabase", "Gemini AI"],
    featured: true,
    liveDemoUrl: "https://budget-tracker-eight-chi.vercel.app",
    codeUrl: "https://github.com/Shrikanth9/budget-tracker",
    isPreview: false
  },
  {
    title: "Food Recipe App",
    description:
      "A Simple next.js food recipe app with PostgreSQL database",
    technologies: ["Next.js", "PostgreSQL"],
    featured: true,
    liveDemoUrl: "https://nextjs-food-app-lyart.vercel.app/",
    codeUrl: "https://github.com/Shrikanth9/nextjs-food-app",
    isPreview: true
  },
];

function ProjectIframe({ url, title }: { url: string; title: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    const iframe = iframeRef.current;
    
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
      
      const timeoutId = setTimeout(() => setIsLoading(false), 3000);
      
      return () => {
        iframe.removeEventListener('load', handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, [url]);

  if (!url) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <p className="text-muted-foreground">No preview available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/80 backdrop-blur-sm z-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={url}
        title={`${title} Preview`}
        className={`w-full h-full border-0 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          transform: 'scale(1)'
        }}
      />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard
              key={index}
              className={`overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted/50 border-b border-border/50">
                {project.isPreview ? (
                  <ProjectIframe 
                    url={project.liveDemoUrl || ''} 
                    title={project.title} 
                  />
                ) : (
                  <img
                    src={dashboardImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                )}
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <AnimatedButton
                  variant="default"
                  onClick={() => {
                    if (project.liveDemoUrl) {
                      window.open(project.liveDemoUrl, "_blank", "noopener,noreferrer");
                    } else {
                      console.log(`No live demo available for ${project.title}`);
                    }
                  }}
                  data-testid={`button-project-live-${index}`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </AnimatedButton>
                <AnimatedButton
                  variant="outline"
                  onClick={() => {
                    if (project.codeUrl) {
                      window.open(project.codeUrl, "_blank", "noopener,noreferrer");
                    } else {
                      console.log(`No code URL available for ${project.title}`);
                    }
                  }}
                  data-testid={`button-project-github-${index}`}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </AnimatedButton>
              </CardFooter>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
