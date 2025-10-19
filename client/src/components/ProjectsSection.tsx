import { CardContent, CardFooter } from "@/components/ui/card";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ExternalLink, Github } from "lucide-react";
import dashboardImage from "@assets/dashboard.png";
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  liveDemoUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "AI-powered Income-Expense Tracker",
    description:
      "A Next.js app with AI-based receipt scanning and real-time email alerts for budget thresholds.",
    image: dashboardImage,
    technologies: ["Next.js", "Prisma", "Supabase", "Gemini AI"],
    featured: true,
    liveDemoUrl: "https://budget-tracker-eight-chi.vercel.app",
    codeUrl: "https://github.com/Shrikanth9/budget-tracker",
  },
];

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
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.featured && (
                  <Badge
                    className="absolute top-4 right-4 bg-primary text-primary-foreground"
                  >
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
