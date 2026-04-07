import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#writing", label: "Writing" },
  { href: "#skills", label: "Skills" },
  { href: "#depth", label: "Expertise" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <a
          href="#hero"
          className="text-lg font-bold text-foreground hover:text-primary transition-colors"
          data-testid="link-logo"
        >
          <span className="text-primary">V</span>inayak
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:vinayak1672006@gmail.com"
            data-testid="nav-contact"
          >
            <Button size="sm">Contact</Button>
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:vinayak1672006@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-nav-contact"
            >
              <Button className="w-full mt-2">Contact</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
