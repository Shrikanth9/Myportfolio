import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
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
      { name: "HTML5 Games", level: "Expert" },
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
    ],
  },
  {
    title: "Tools & Design",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Figma", level: "Advanced" },
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
  const allSkills = Array.from(new Set(skillCategories.flatMap(cat => cat.skills.map(skill => skill.name))));
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technologies I use most often
          </p>
        </div>
        <div className="overflow-x-hidden py-8">
          <motion.div
            className="flex gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.2,
                }
              }
            }}
          >
            {allSkills.map((skill, idx) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                <AnimatedCard className="flex flex-col items-center p-4 bg-background shadow-md">
                  {/* Replace with actual logo imports for each skill if available */}
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xl font-bold">
                    {skill[0]}
                  </div>
                  <span className="text-xs mt-2 text-muted-foreground">{skill}</span>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
