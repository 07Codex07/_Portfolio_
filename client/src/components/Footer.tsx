import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, FileText, Mail, ArrowUp, BookOpen } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/07Codex07",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vinayak-sahu-8999a9259",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/Vinayak97386184",
    label: "Twitter",
  },
  {
    icon: FileText,
    href: "https://drive.google.com/file/d/1uv8fuN5jCMnnZcWKFRjQJGxPmmvy_-4k/view",
    label: "Resume",
  },
  {
    icon: Mail,
    href: "mailto:vinayak1672006@gmail.com",
    label: "Email",
  },
  {
    icon: BookOpen,
    href: "https://medium.com/@vinayak1672006",
    label: "Medium",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#writing", label: "Writing" },
  { href: "#skills", label: "Skills" },
  { href: "#depth", label: "Expertise" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                data-testid={`footer-link-${link.label.toLowerCase()}`}
              >
                <Button variant="ghost" size="icon" className="group">
                  <link.icon className="w-5 h-5 transition-colors group-hover:text-primary" />
                </Button>
              </a>
            ))}
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid={`footer-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm">
              Built with passion for AI and clean code
            </p>
            <p className="text-muted-foreground/60 text-xs">
              © {new Date().getFullYear()} Vinayak Sahu. All rights reserved.
            </p>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="group"
            aria-label="Scroll to top"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="w-4 h-4 transition-colors group-hover:text-primary" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
