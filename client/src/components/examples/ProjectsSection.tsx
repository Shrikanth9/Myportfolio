import { ProjectsSection } from "../ProjectsSection";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function ProjectsSectionExample() {
  return (
    <ThemeProvider>
      <ProjectsSection />
    </ThemeProvider>
  );
}
