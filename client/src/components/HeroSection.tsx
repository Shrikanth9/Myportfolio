import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Modern_workspace_hero_image_19ce2878.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm" data-testid="badge-role">
                Full-Stack JavaScript Developer
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Shrikantha M A
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Building 2D HTML5 games, interactive web apps, and scalable CMS systems with React, Next.js, and game engines
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-experience">3+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent" data-testid="text-projects">15+</div>
                  <div className="text-sm text-muted-foreground">Games Built</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                data-testid="button-contact"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                data-testid="button-projects"
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-github"
                onClick={() => console.log("GitHub clicked")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-linkedin"
                onClick={() => console.log("LinkedIn clicked")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-email"
                onClick={() => console.log("Email clicked")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
              <img
                src={heroImage}
                alt="Developer workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
