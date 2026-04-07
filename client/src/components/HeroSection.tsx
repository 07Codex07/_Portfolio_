import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, FileText, ArrowDown, BookOpen } from "lucide-react";
import TerminalTyping from "./TerminalTyping";

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
    href: "https://drive.google.com/file/d/11L1q2iIXQKHgW4GizgJFUbx9cMX1LSPx/view?usp=drivesdk",
    label: "Resume",
  },
  {
    icon: BookOpen,
    href: "https://medium.com/@vinayak1672006",
    label: "Medium",
  },
];

const terminalLines = [
  "whoami",
  "Vinayak Sahu",
  "cat role.txt",
  "AI Engineer @ Vidur Research",
  "cat mission.txt",
  "Building Interpretable Intelligence",
];

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <div className="mb-8">
          <TerminalTyping
            lines={terminalLines}
            typingSpeed={40}
            lineDelay={300}
            onComplete={() => setShowContent(true)}
          />
        </div>

        <div
          className={`space-y-6 transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Vinayak Sahu
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              AI Engineer | Building Interpretable Intelligence
            </p>
            <p className="text-muted-foreground">
              Bhubaneswar, Odisha, India
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <Button variant="outline" size="icon" className="group">
                  <link.icon className="w-5 h-5 transition-colors group-hover:text-primary" />
                </Button>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" data-testid="link-view-projects">
              <Button className="gap-2">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </Button>
            </a>
            <a href="#about" data-testid="link-about-me">
              <Button variant="outline">About Me</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section" data-testid="link-scroll-down">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
