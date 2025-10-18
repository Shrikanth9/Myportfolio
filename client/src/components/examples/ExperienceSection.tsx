import { ExperienceSection } from "../ExperienceSection";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function ExperienceSectionExample() {
  return (
    <ThemeProvider>
      <ExperienceSection />
    </ThemeProvider>
  );
}
