import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const article = {
  title: "Why RAG Isn't Enough: Understanding CRAG Architecture",
  url: "https://medium.com/@vinayak1672006/why-rag-isnt-enough-understanding-crag-architecture-532c9bdfdfff",
  description:
    "A deep dive into Corrective RAG — why standard retrieval pipelines hallucinate, and how CRAG's self-assessment loop fixes it. Covers the evaluator model, corrective retrieval triggers, and web search fallback architecture.",
  tags: ["RAG", "LLMs", "Architecture", "NLP"],
};

export default function WritingSection() {
  return (
    <section id="writing" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Writing & Research"
          subtitle="Thoughts on interpretable AI, RAG systems, and the mathematics of intelligence"
        />

        <div className="relative rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm p-6 md:p-8 overflow-hidden group hover:border-primary/50 transition-all duration-300">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                  Featured Post
                </span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {article.title}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              {article.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs border-primary/30 text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Read on Medium
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://medium.com/@vinayak1672006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group"
          >
            More writing on Medium
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
