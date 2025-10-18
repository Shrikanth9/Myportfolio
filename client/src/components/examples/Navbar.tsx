import { Navbar } from "../Navbar";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}
