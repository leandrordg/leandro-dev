import { ProjectCard } from "@/components/project-card";

interface ProjectsSectionProps {
  repositories: Repository[];
}

export function ProjectsSection({ repositories }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="flex flex-col gap-y-12 items-center justify-center min-h-[90vh] relative bg-primary-foreground py-24"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold underline underline-offset-8">
          Projects
        </h1>
        <p className="text-muted-foreground mt-6">
          Alguns dos meus projetos mais recentes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-screen-lg mx-auto p-6">
        {repositories?.map((repository) => (
          <ProjectCard
            key={repository.id}
            name={repository.name}
            description={repository.description}
            url={repository.html_url}
            homepage={repository.homepage}
            forks={repository.forks_count}
            subscribers={repository.stargazers_count}
          />
        ))}
      </div>
    </section>
  );
}
