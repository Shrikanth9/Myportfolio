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
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Vue", level: "Advanced" },
      { name: "Redux", level: "Advanced" },
    ],
  },
  {
    title: "Game Engines",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Phaser", level: "Expert" },
      { name: "Three.js", level: "Advanced" },
      { name: "WebGL", level: "Advanced" },
      { name: "HTML5 Games", level: "Expert" },
      { name: "Cannon.js", level: "Intermediate" },
      { name: "2D Graphics", level: "Expert" },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Pusher", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Design",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Figma", level: "Advanced" },
      { name: "NPM", level: "Expert" },
      { name: "Webpack", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
    ],
  },
];

const getLevelPercentage = (level: string) => {
  switch (level) {
    case "Expert":
      return 100;
    case "Advanced":
      return 75;
    case "Intermediate":
      return 50;
    default:
      return 25;
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary";
    case "Advanced":
      return "bg-accent";
    case "Intermediate":
      return "bg-muted-foreground";
    default:
      return "bg-muted";
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

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {getLevelPercentage(skill.level)}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getLevelColor(skill.level)} transition-all duration-500 rounded-full`}
                          style={{ width: `${getLevelPercentage(skill.level)}%` }}
                        />
                      </div>
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
