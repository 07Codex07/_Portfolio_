import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsletterSection from "@/components/NewsletterSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <NewsletterSection />
        <SkillsSection />
      </main>
      
      <Footer />
    </div>
  );
}
