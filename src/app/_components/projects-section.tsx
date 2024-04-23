import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-y-12 items-center justify-center min-h-[90vh] relative bg-primary-foreground py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold underline underline-offset-8">
          Projects
        </h1>
        <p className="text-muted-foreground mt-6">
          Alguns dos meus projetos mais recentes
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-screen-lg mx-auto p-6">
        <ProjectCard
          title="CRUD w/Fastify.js"
          description="Um CRUD criado com Fastify e Prisma ORM utilizado para fins de testes e aprendizagem do Node.js"
          src="/images/CRUD.png"
          repositoryLink="https://github.com/leandrordg/crud-fastify"
        />
        <ProjectCard
          title="Social Media"
          description="Um aplicativo de rede social moderno e inovador desenvolvido com Next.js 14, Clerk.js, Prisma ORM e PostgreSQL. Estilização conta com Tailwind CSS e Shadcn/UI."
          src="/images/SOCIAL-MEDIA.png"
          repositoryLink="https://github.com/leandrordg/posts-clerk"
          beta
        />
        <ProjectCard
          title="Authentication Methods"
          description="Uma aplicação front-end que trás um completo layout de telas de login, cadastro, recuperação de senha e otp."
          src="/images/AUTHENTICATION-METHODS.png"
          repositoryLink="https://github.com/leandrordg/authentication-methods"
        />
      </div>
    </section>
  );
}
