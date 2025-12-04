import { Badge } from "@/components/ui/badge";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["Deep Learning", "NLP", "Computer Vision", "RAG Systems", "LLMs", "Vector Search", "Agent Systems"],
  },
  {
    title: "Languages & Frameworks",
    skills: ["Python", "FastAPI", "LangChain", "PyTorch", "JavaScript", "TypeScript", "React"],
  },
  {
    title: "AI/ML Tools",
    skills: ["Groq", "OpenAI", "YOLOv8", "CLIP", "FAISS", "BM25", "Whisper", "HuggingFace"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["PostgreSQL", "SQLite", "Hadoop", "Hive", "HDFS", "Docker", "Linux", "Git"],
  },
  {
    title: "Deployment & DevOps",
    skills: ["Vercel", "HuggingFace Spaces", "n8n", "CI/CD", "REST APIs", "MLOps"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Skills" 
          subtitle="Technologies and tools I work with daily"
        />

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="space-y-3"
              style={{
                animationDelay: `${categoryIndex * 100}ms`,
              }}
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-3 py-1.5 text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-default"
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-card/50 border border-card-border">
          <p className="text-muted-foreground text-center">
            <span className="text-primary font-medium">Always learning:</span>{" "}
            Currently exploring advanced agent architectures, multi-modal AI systems, 
            and reinforcement learning from human feedback (RLHF).
          </p>
        </div>
      </div>
    </section>
  );
}
