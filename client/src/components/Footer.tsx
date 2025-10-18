import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Shrikantha M.A. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="text-sm text-primary hover:underline hover-elevate px-3 py-1 rounded-md"
            data-testid="button-back-to-top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
