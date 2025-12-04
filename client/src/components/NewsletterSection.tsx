import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Rss, Brain, Sparkles, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Rss,
    title: "Automated Scraping",
    description: "RSS feeds from top AI/ML sources",
  },
  {
    icon: Brain,
    title: "LLM Summarization",
    description: "Smart content distillation",
  },
  {
    icon: Sparkles,
    title: "Daily Digests",
    description: "Curated AI news & insights",
  },
];

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="The Vector Daily" 
          subtitle="An automated AI newsletter keeping you updated with the latest in machine learning"
        />

        <Card className="relative p-8 md:p-12 bg-gradient-to-br from-card via-card to-primary/5 border-card-border overflow-visible">
          <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Newspaper className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">The Vector Daily</h3>
                <Badge variant="secondary" className="mt-1">AI Newsletter</Badge>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Stay ahead of the curve with automated, LLM-powered summaries of the latest AI/ML 
              developments. From breakthrough papers to industry news, delivered in a digestible format.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-4 rounded-lg bg-background/50 border border-border"
                >
                  <feature.icon className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://the-vector-daily.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-newsletter-live"
              >
                <Button className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Read the Latest Issue
                </Button>
              </a>
              <a 
                href="https://github.com/07Codex07/vector-daily-api" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-newsletter-repo"
              >
                <Button variant="outline" className="gap-2">
                  View Source Code
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
