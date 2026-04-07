import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Brain, BookOpen, Newspaper, ShoppingBag, Terminal, Shield, Database } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: typeof Brain;
  tags: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: "subjectiverag",
    title: "SubjectiveRAG",
    shortDescription: "Financial Analysis Agent with Worker + Checker LLM pipeline",
    fullDescription: "A sophisticated RAG pipeline targeted at finance/investment queries. Features a two-stage LLM process with a Worker that produces analysis + claims, and a Checker that verifies those claims against sources. Includes deterministic claim verification with metrics like claim_precision and hallucination_rate.",
    icon: Brain,
    tags: ["AI/ML", "RAG", "LLMs", "Finance"],
    technologies: ["Python", "FastAPI", "SerpAPI", "Groq", "FAISS", "SQLite", "BM25"],
    repoUrl: "https://github.com/07Codex07/SubjectiveRag",
    features: [
      "Worker + Checker LLM pipeline for verified responses",
      "BM25 + FAISS hybrid retrieval system",
      "Hallucination scoring and deterministic claim verification",
      "Web search integration via SerpAPI",
      "Retry/feedback loop with configurable attempt limits",
    ],
  },
  {
    id: "prepgraph",
    title: "PrepGraph",
    shortDescription: "AI Study Assistant with RAG-powered backend",
    fullDescription: "A complete RAG-powered backend for an AI tutor/chat system. Features persistent conversation memory, hybrid document retrieval, and Groq LLM integration. The system auto-downloads academic PDFs, chunks them, and provides contextual answers.",
    icon: BookOpen,
    tags: ["AI/ML", "RAG", "Full Stack", "EdTech"],
    technologies: ["Python", "FastAPI", "LangChain", "FAISS", "BM25", "SQLite", "React"],
    liveUrl: "https://prepgraph.vercel.app/",
    repoUrl: "https://huggingface.co/spaces/07Codex07/PrepGraph-Backend/tree/main",
    features: [
      "Persistent SQLite conversation memory",
      "BM25 + FAISS hybrid document retrieval",
      "400 char chunks with 80 overlap for optimal context",
      "Token trimming using tiktoken",
      "Full CORS support for React frontend",
    ],
  },
  {
    id: "vectordaily",
    title: "Vector Daily",
    shortDescription: "Automated AI Newsletter with RSS scraping",
    fullDescription: "An automated AI newsletter system that scrapes RSS feeds, summarizes content using LLMs, generates polls, and creates digestible newsletters. Built for the AI/ML community to stay updated with the latest developments.",
    icon: Newspaper,
    tags: ["AI/ML", "Automation", "NLP"],
    technologies: ["Python", "FastAPI", "LLMs", "RSS", "React", "Vercel"],
    liveUrl: "https://the-vector-daily.vercel.app/",
    repoUrl: "https://github.com/07Codex07/vector-daily-api",
    features: [
      "Automated RSS feed scraping",
      "LLM-powered content summarization",
      "Poll and digest generation",
      "Clean React frontend",
      "Automated deployment pipeline",
    ],
  },
  {
    id: "reel2retail",
    title: "Reel2Retail",
    shortDescription: "Fashion Matcher using Computer Vision",
    fullDescription: "A computer vision system that matches fashion items from social media reels to retail products. Uses YOLOv8 for detection, CLIP for embeddings, and FAISS for similarity search. Includes vibe classification for style matching.",
    icon: ShoppingBag,
    tags: ["CV", "AI/ML", "E-commerce"],
    technologies: ["YOLOv8", "CLIP", "FAISS", "Python", "Deep Learning"],
    repoUrl: "https://github.com/07Codex07/Reel2Retail",
    features: [
      "YOLOv8 object detection for fashion items",
      "CLIP embeddings for semantic matching",
      "FAISS vector similarity search",
      "Vibe/style classification",
      "Reel to product matching pipeline",
    ],
  },
  {
    id: "linuxassistant",
    title: "Local Linux Smart Assistant",
    shortDescription: "Voice-controlled CLI automation agent",
    fullDescription: "A local voice assistant for Linux that uses Whisper for speech recognition and LLMs for command interpretation. Enables hands-free CLI automation and system control through natural language commands.",
    icon: Terminal,
    tags: ["Agent Systems", "NLP", "Linux"],
    technologies: ["Whisper", "LLMs", "Python", "Linux", "CLI"],
    repoUrl: "https://github.com/07Codex07/local_smart_linux_assistant",
    features: [
      "Whisper speech-to-text integration",
      "LLM command interpretation",
      "CLI automation capabilities",
      "Natural language to command translation",
      "Local processing for privacy",
    ],
  },
  {
    id: "secuflow",
    title: "SecuFlow",
    shortDescription: "AI-powered security automation workflow",
    fullDescription: "An n8n-based security automation system that monitors SSH login attempts, detects suspicious patterns using AI, and implements human-in-the-loop approval before blocking attackers via UFW firewall rules.",
    icon: Shield,
    tags: ["Security", "Automation", "AI/ML"],
    technologies: ["n8n", "Groq LLM", "Telegram API", "SSH", "UFW", "Python"],
    repoUrl: "https://github.com/07Codex07/SecuFlow",
    features: [
      "Real-time SSH log monitoring",
      "AI threat analysis with Groq LLM",
      "Automated threshold detection (>3 failures)",
      "Telegram human-in-loop approval",
      "Automated UFW firewall blocking",
    ],
  },
  {
    id: "hivebigdata",
    title: "Hive Big Data Analytics",
    shortDescription: "MovieLens analysis using Hadoop + Hive",
    fullDescription: "Big data analytics project analyzing the MovieLens dataset to identify popular genres using Apache Hive over Hadoop. Provides insights for streaming platforms like Netflix or Prime for recommendation engines.",
    icon: Database,
    tags: ["Big Data", "Analytics"],
    technologies: ["Apache Hive", "Hadoop HDFS", "Cloudera VM", "Linux", "HiveQL"],
    repoUrl: "https://github.com/07Codex07/HIVE_Big_Data",
    features: [
      "Genre-wise popularity analysis using Hive explode/split",
      "Data stored and queried in HDFS",
      "Business insights for recommendation engines",
      "Visualization charts from output",
      "Complete Hive query documentation",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Projects" 
          subtitle="From RAG systems to security automation — building AI that works"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group p-6 bg-card/50 backdrop-blur-sm border-card-border hover-elevate cursor-pointer transition-all duration-300 relative overflow-visible"
              onClick={() => setSelectedProject(project)}
              data-testid={`card-project-${project.id}`}
            >
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div className="flex gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub repository"
                        data-testid={`link-repo-${project.id}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live demo"
                        data-testid={`link-live-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-primary/20">
            {selectedProject && (
              <>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                <div className="absolute inset-0 rounded-lg border border-primary/20 pointer-events-none" />
                
                <DialogHeader className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <selectedProject.icon className="w-6 h-6" />
                    </div>
                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-base text-muted-foreground">
                    {selectedProject.fullDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="relative space-y-6 mt-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                    {selectedProject.repoUrl && (
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`button-repo-modal-${selectedProject.id}`}
                      >
                        <Button variant="outline" className="gap-2">
                          <Github className="w-4 h-4" />
                          View Repository
                        </Button>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`button-live-modal-${selectedProject.id}`}
                      >
                        <Button className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
