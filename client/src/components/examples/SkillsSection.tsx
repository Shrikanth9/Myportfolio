import { SkillsSection } from "../SkillsSection";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function SkillsSectionExample() {
  return (
    <ThemeProvider>
      <SkillsSection />
    </ThemeProvider>
  );
}
