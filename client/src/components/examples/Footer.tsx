import { Footer } from "../Footer";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function FooterExample() {
  return (
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  );
}
