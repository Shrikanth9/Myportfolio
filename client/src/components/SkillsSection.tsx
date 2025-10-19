import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Code2, Database, Cloud, Wrench } from "lucide-react";
import { FaCube, FaNetworkWired } from "react-icons/fa";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMobx,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiVite,
} from "react-icons/si";

const skillIcons: Record<string, JSX.Element> = {
  "TypeScript": <SiTypescript className="w-8 h-8 text-[#3178c6]" />,
  "React": <SiReact className="w-8 h-8 text-[#61dafb]" />,
  "Next.js": <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />,
  "MobX": <SiMobx className="w-8 h-8 text-[#ff9955]" />,
  "Phaser": <FaCube className="w-8 h-8 text-purple-500" />,
  "Three.js": <SiThreedotjs className="w-8 h-8 text-black" />,
  "Node.js": <SiNodedotjs className="w-8 h-8 text-[#3c873a]" />,
  "Express": <SiExpress className="w-8 h-8 text-black" />,
  "MySQL": <SiMysql className="w-8 h-8 text-[#00758f]" />,
  "MongoDB": <SiMongodb className="w-8 h-8 text-[#47a248]" />,
  "PostgreSQL": <SiPostgresql className="w-8 h-8 text-[#336791]" />,
  "Git": <SiGit className="w-8 h-8 text-[#f05032]" />,
  "Figma": <SiFigma className="w-8 h-8 text-[#f24e1e]" />,
  "Vite": <SiVite className="w-8 h-8 text-[#646cff]" />,
  "REST APIs": <FaNetworkWired className="w-8 h-8 text-[#e535ab]" />,
};

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

export function SkillsSection() {
  const allSkills = Array.from(
    new Set(skillCategories.flatMap((cat) => cat.skills.map((skill) => skill.name)))
  );
  const scrollSkills = [...allSkills, ...allSkills];
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;
    const firstSetWidth = scrollRef.current.scrollWidth / 2;
    setScrollWidth(firstSetWidth);
  }, [scrollSkills.length]);

  useEffect(() => {
    if (!scrollWidth) return;

    const animateScroll = () => {
      controls
        .start({
          x: -scrollWidth,
          transition: {
            duration: 18,
            ease: "linear",
          },
        })
        .then(() => {
          controls.set({ x: 0 });
          animateScroll();
        });
    };

    animateScroll();
  }, [scrollWidth, controls]);

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
          className="overflow-hidden py-8"
          style={{ WebkitOverflowScrolling: "touch" }}
          ref={scrollRef}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            style={{ width: "max-content" }}
            animate={controls}
          >
            {scrollSkills.map((skill, idx) => (
              <AnimatedCard
                key={skill + idx}
                className="flex flex-col items-center p-4 bg-background shadow-md inline-block"
              >
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  {skillIcons[skill] || <span className="text-xl font-bold">{skill[0]}</span>}
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

