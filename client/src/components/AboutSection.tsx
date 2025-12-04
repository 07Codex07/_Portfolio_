import { Card } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="About" 
          subtitle="The intersection of mathematics and machine intelligence"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm an AI Engineer at Vidur Research, a subsidiary of DreamSkrin, where I focus on 
                  building interpretable AI systems for finance. My work bridges the gap between 
                  cutting-edge machine learning and practical, transparent applications.
                </p>
                <p>
                  I specialize in RAG (Retrieval-Augmented Generation) systems, LLM applications, 
                  and building end-to-end AI pipelines. From hybrid BM25 + FAISS retrieval to 
                  hallucination detection systems, I'm passionate about creating AI that's both 
                  powerful and trustworthy.
                </p>
                <p>
                  Based in Bhubaneswar, India, I'm constantly exploring new ways to apply AI/ML 
                  techniques to solve real-world problems while maintaining interpretability and 
                  transparency.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="text-2xl">∫</span> My Mathematics Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into AI began with an early fascination for calculus. There's something 
                  deeply satisfying about understanding how gradients flow through neural networks, 
                  how probability distributions shape uncertainty, and how linear algebra forms the 
                  backbone of every model I build.
                </p>
                <p>
                  Every day, I explore the mathematical foundations that power modern AI: the chain 
                  rule in backpropagation, optimization landscapes, probability distributions for 
                  generative models, and the elegant geometry of vector spaces that enable semantic 
                  search.
                </p>
                <p>
                  This mathematical intuition isn't just theoretical—it directly informs how I 
                  architect systems, debug models, and push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="mt-6 p-4 border-l-2 border-primary bg-primary/5 rounded-r-lg">
                <p className="italic text-foreground/90">
                  "Mathematics is not just a tool — it's the lens through which I understand intelligence."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
