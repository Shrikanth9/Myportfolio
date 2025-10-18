import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import dashboardImage from "@assets/generated_images/Project_dashboard_screenshot_4766b531.png";
import ecommerceImage from "@assets/generated_images/E-commerce_project_screenshot_e48cf712.png";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics platform with real-time data visualization, customizable widgets, and advanced reporting features. Built with React and D3.js for interactive charts.",
    image: dashboardImage,
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online shopping platform with product management, cart functionality, payment integration, and order tracking. Includes admin dashboard for inventory management.",
    image: ecommerceImage,
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "AWS"],
    featured: true,
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with kanban boards, team collaboration features, and real-time updates. Supports multiple workspaces and custom workflows.",
    image: dashboardImage,
    technologies: ["Vue.js", "Express", "WebSocket", "Redis", "Docker"],
    featured: false,
  },
  {
    title: "Social Media API",
    description:
      "RESTful API for a social networking platform with authentication, post management, comments, likes, and user profiles. Includes comprehensive API documentation.",
    image: ecommerceImage,
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    featured: false,
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
            <Card
              key={index}
              className={`overflow-hidden hover-elevate transition-all duration-300 ${
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
                <Button
                  variant="default"
                  onClick={() => console.log(`View ${project.title} live`)}
                  data-testid={`button-project-live-${index}`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => console.log(`View ${project.title} code`)}
                  data-testid={`button-project-github-${index}`}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
