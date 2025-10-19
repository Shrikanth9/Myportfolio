
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Shrikanth9",
      type: "external"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shrikanth-m-a-69827020a/",
      type: "external"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:shrikanthbhat30@gmail.com",
      type: "mailto"
    }
  ];
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/work.png";
import { motion } from "framer-motion";

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
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Badge variant="secondary" className="text-sm" data-testid="badge-role">
                  Software Developer
                </Badge>
              </motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Shrikanth
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Software Engineer specialising in 2D HTML5 games, interactive web apps, and scalable content management systems.
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-experience">3+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
                {/* <div className="w-px bg-border" /> */}
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-accent" data-testid="text-projects">3+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                </div> */}
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

            {/* <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  data-testid={`button-${link.label.toLowerCase()}`}
                  onClick={() => {
                    if (link.type === "external") {
                      window.open(link.href, "_blank", "noopener,noreferrer");
                    } else {
                      window.open(link.href);
                    }
                  }}
                  aria-label={link.label}
                >
                  {link.icon}
                </Button>
              ))}
            </div> */}
          </div>

          <motion.div
            className="relative lg:block hidden"
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
              <img
                src={heroImage}
                alt="Developer workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
