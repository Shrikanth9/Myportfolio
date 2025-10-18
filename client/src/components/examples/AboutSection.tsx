import { AboutSection } from "../AboutSection";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function AboutSectionExample() {
  return (
    <ThemeProvider>
      <AboutSection />
    </ThemeProvider>
  );
}
