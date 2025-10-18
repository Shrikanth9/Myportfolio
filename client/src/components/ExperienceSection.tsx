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
    company: "Tech Innovations Inc",
    role: "Senior Software Developer",
    period: "2022 - Present",
    achievements: [
      "Led development of microservices architecture serving 100K+ daily users",
      "Reduced application load time by 40% through optimization",
      "Mentored team of 5 junior developers",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "Digital Solutions Ltd",
    role: "Full Stack Developer",
    period: "2021 - 2022",
    achievements: [
      "Developed responsive web applications using React and TypeScript",
      "Built RESTful APIs with Express.js and MongoDB",
      "Collaborated with UX team to improve user experience",
      "Integrated third-party payment gateways",
    ],
    technologies: ["React", "TypeScript", "Express", "MongoDB", "Stripe"],
  },
  {
    company: "StartUp Ventures",
    role: "Junior Developer",
    period: "2020 - 2021",
    achievements: [
      "Contributed to frontend development using modern frameworks",
      "Fixed bugs and improved application performance",
      "Participated in code reviews and agile ceremonies",
      "Developed reusable component library",
    ],
    technologies: ["JavaScript", "Vue.js", "Node.js", "PostgreSQL"],
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
