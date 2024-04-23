import { TechCard } from "@/components/tech-card";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="flex flex-col justify-center gap-24 items-center min-h-[90vh] relative px-6 py-24"
    >
      <svg
        viewBox="0 0 1024 1024"
        className="absolute right-0 top-0 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-x-1/4 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.2"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#2462ea" />
            <stop offset={1} stopColor="#2462ea" />
          </radialGradient>
        </defs>
      </svg>

      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
        Tech <span className="text-primary">Stack</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg mx-auto gap-6">
        <TechCard
          title="Next.js 14.2"
          description="Next.js é um framework React que permite renderização no lado do servidor e geração de sites estáticos para aplicações web."
          image="/nextjs.svg"
          startedAt="2022"
        />
        <TechCard
          title="Tailwind CSS"
          description="Tailwind CSS é um framework CSS que permite a criação de interfaces de usuário personalizadas, através dos estilos por classes."
          image="/tailwindcss.svg"
          startedAt="2021"
        />
        <TechCard
          title="shadcn/ui"
          description="Uma biblioteca de componentes React que facilita a criação de interfaces de usuário, com componentes prontos e personalizáveis."
          image="/shadcn.svg"
          startedAt="2023"
        />
        <TechCard
          title="Next Auth v5"
          description="Next Auth é uma biblioteca de autenticação para Next.js que permite autenticação de usuários em aplicações web."
          image="/next-auth.png"
          startedAt="2022"
        />
        <TechCard
          title="PostgreSQL"
          description="PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto, que utiliza a linguagem SQL."
          image="/postgresql.svg"
          startedAt="2023"
        />
        <TechCard
          title="Prisma ORM"
          description="Prisma é um ORM (Object-Relational Mapping) com suporte a TypeScript, que facilita a interação com bancos de dados SQL."
          image="/prisma.svg"
          startedAt="2022"
        />
      </div>
    </section>
  );
}
