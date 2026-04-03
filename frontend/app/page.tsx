import { AboutSection } from "@/components/about-section";
import { AIDemoSection } from "@/components/ai-demo-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AIDemoSection />
      <ContactSection />
    </main>
  );
}
