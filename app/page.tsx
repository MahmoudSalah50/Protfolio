import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { About } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TechMarquee />
      <About />
      <SkillsSection />
      <FeaturedProjects />
      <ExperienceTimeline />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
