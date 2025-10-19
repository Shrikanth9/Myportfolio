import { CardContent } from "@/components/ui/card";
import React, { useState, useRef, useEffect } from "react";
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
      { name: "TypeScript", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "MobX", level: "Advanced" },
    ],
  },
  {
    title: "Game Engines",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Phaser", level: "Expert" },
      { name: "Three.js", level: "Advanced" },
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
  // Duplicate skills for seamless infinite scroll
  const scrollSkills = [...allSkills, ...allSkills];
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Pause animation when user interacts and track scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let timeout: NodeJS.Timeout | undefined;
    const handleScroll = () => {
      setIsUserScrolling(true);
      // Prevent scrolling too far right
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft > maxScroll - 200) {
        el.scrollLeft = maxScroll - 200;
      }
      setScrollX(el.scrollLeft);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsUserScrolling(false), 1200);
    };
    el.addEventListener('scroll', handleScroll);
    return () => {
      el.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technologies I use most often
          </p>
        </div>
        <div
          className="overflow-x-auto py-8 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent"
          ref={scrollRef}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <motion.div
            className="flex gap-8"
            style={{ width: 'max-content' }}
            animate={isUserScrolling ? { x: -scrollX } : { x: [ -scrollX, -1000 ] }}
            transition={isUserScrolling ? undefined : {
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear"
            }}
          >
            {scrollSkills.map((skill, idx) => (
              <AnimatedCard key={skill + idx} className="flex flex-col items-center p-4 bg-background shadow-md">
                {/* Replace with actual logo imports for each skill if available */}
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xl font-bold">
                  {skill[0]}
                </div>
                <span className="text-xs mt-2 text-muted-foreground">{skill}</span>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
