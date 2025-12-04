import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Vidur Research",
    parent: "DreamSkrin Subsidiary",
    role: "AI Engineer – Research + Applied Systems",
    startDate: "October 2025",
    location: "Remote",
    description: [
      "Building interpretable AI systems for finance with focus on transparency and context-aware reasoning",
      "Developing data enrichment systems and applied intelligence for financial decisioning",
      "Creating human-like adaptable inference pipelines for complex financial analysis",
      "Pioneering breakthroughs in AI interpretability for the next era of intelligent financial systems",
    ],
    technologies: ["Python", "LLMs", "RAG", "FastAPI", "Vector Search", "NLP"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Experience" 
          subtitle="Building the future of interpretable AI"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-20">
                <div className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 ring-4 ring-background" />
                
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                      <p className="text-muted-foreground text-sm">{exp.parent}</p>
                    </div>
                    <Badge variant="secondary" className="whitespace-nowrap">
                      {exp.role}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.startDate} - Present
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      Full-time
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 text-xs">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
