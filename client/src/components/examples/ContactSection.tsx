import { ContactSection } from "../ContactSection";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function ContactSectionExample() {
  return (
    <ThemeProvider>
      <ContactSection />
    </ThemeProvider>
  );
}
