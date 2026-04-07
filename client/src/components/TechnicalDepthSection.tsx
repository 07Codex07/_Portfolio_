import { Cpu, FlaskConical, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";

const competencies = [
  {
    icon: Cpu,
    title: "LLMOps",
    items: [
      "Prompt versioning and evaluation",
      "Hallucination detection pipelines",
      "Token cost optimization",
      "Retrieval quality metrics (MRR, NDCG)",
      "Context window management",
    ],
  },
  {
    icon: FlaskConical,
    title: "MLOps Foundations",
    items: [
      "Experiment tracking concepts",
      "Model serving patterns (REST, streaming)",
      "Vector index management (FAISS, flat vs IVF)",
      "Pipeline orchestration",
      "Evaluation datasets and benchmarking",
    ],
  },
  {
    icon: Layers,
    title: "System Design",
    items: [
      "Hybrid retrieval architectures (BM25 + dense)",
      "Worker/Checker LLM patterns",
      "Human-in-the-loop workflows",
      "Async job queues for AI pipelines",
      "RAG vs fine-tuning tradeoff reasoning",
    ],
  },
];

export default function TechnicalDepthSection() {
  return (
    <section id="depth" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Depth"
          subtitle="Beyond building — understanding the systems underneath"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {competencies.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-card-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
