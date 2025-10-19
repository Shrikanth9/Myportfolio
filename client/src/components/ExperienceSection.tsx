import { CardContent } from "@/components/ui/card";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
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
    company: "Juego Studios",
    role: "Software Development Engineer (SDE)",
    period: "Apr 2022 - Present",
    achievements: [
      "Engineered and maintained CMS web applications for multiple HTML5 games, improving database scaling and content update efficiency.",
      "Built a reusable CMS template framework that reduced average development time by ~50%.",
      "Developed promotional games acquired for distribution and implemented DRM video playback frameworks.",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "Phaser"],
  },
  {
    company: "Flipkart",
    role: "SDE Consultant",
    period: "Oct 2023 - Oct 2024",
    achievements: [
      "Designed and implemented the internal Rewards Management System website, improving reward configuration workflows.",
      "Developed promotional games and utilities used during large-scale campaigns, delivering high engagement.",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Phaser"],
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
              <AnimatedCard
                key={index}
                className="md:ml-20"
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
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
