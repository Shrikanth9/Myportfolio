import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Songo Studios",
    role: "Software Development Engineer (SDE)",
    period: "Apr 2022 - Present",
    achievements: [
      "Built and deployed game portal for multiple HTML5 games with seamless user experience",
      "Developed promotional games for major brands including Pepsi, achieving 60% improvement in user onboarding",
      "Built reusable CMS template framework to accelerate website creation, reducing average development time",
      "Developed promotional games for Medel and Predator-Rulebook using JavaScript game engines",
      "Created WebGL-based 3D game using Three.js and Cannon.js for enhanced visual experience",
      "Optimized multiplayer game performance for smooth DRMA routing using Next.js and Pusher",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "Phaser", "Three.js", "WebGL"],
  },
  {
    company: "Flipkart",
    role: "SDE Consultant",
    period: "Oct 2023 - Oct 2024",
    achievements: [
      "Improved overall performance by developing a website for the internal Rewards Management System",
      "Reduced configuration time and improved scalability of brands integration",
      "Contributed to brand promotional games such as Shark Tank & 10U machine, and cricket game using Phaser",
      "Developed a reusable game wrapper library to optimize mini-game development and play counts on Flipkart platform",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Phaser", "Game Engines"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="md:ml-20 hover-elevate transition-all duration-300"
                data-testid={`card-experience-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        {exp.company}
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        {exp.role}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
