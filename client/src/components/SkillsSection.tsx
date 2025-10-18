import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: string }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
    ],
  },
  {
    title: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
      { name: "Nginx", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "Git", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Figma", level: "Intermediate" },
      { name: "Jira", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Jest", level: "Advanced" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground";
    case "Advanced":
      return "bg-accent text-accent-foreground";
    case "Intermediate":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-skill-category-${index}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-sm text-foreground">
                        {skill.name}
                      </span>
                      <Badge
                        className={`text-xs ${getLevelColor(skill.level)}`}
                        variant="secondary"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
