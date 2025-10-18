import { HeroSection } from "../HeroSection";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function HeroSectionExample() {
  return (
    <ThemeProvider>
      <HeroSection />
    </ThemeProvider>
  );
}
