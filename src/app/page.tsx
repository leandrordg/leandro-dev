import { getRepositories } from "@/hooks/repositories";

import { AboutSection } from "./_components/about-section";
import { IntroSection } from "./_components/intro-section";
import { NewsletterSection } from "./_components/newsletter-section";
import { ProjectsSection } from "./_components/projects-section";
import { TechStackSection } from "./_components/techstack-section";

export default async function HomePage() {
  const repositories = await getRepositories();

  return (
    <main className="flex flex-col overflow-hidden">
      <IntroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection repositories={repositories} />
      <NewsletterSection />
    </main>
  );
}
