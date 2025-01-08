import { HoverIcon } from "@/components/hover-icon";
import { Button } from "@/components/ui/button";

export function IntroSection() {
  return (
    <section
      id="#intro"
      className="flex flex-col gap-y-12 items-center justify-center min-h-[calc(100vh-64px)] relative"
    >
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.5"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#2462ea" />
            <stop offset={1} stopColor="#2462ea" />
          </radialGradient>
        </defs>
      </svg>

      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          Web Developer
          <br />
          <span className="text-primary">Full Stack</span>
        </h1>
        <div className="flex items-center gap-2">
          <HoverIcon
            icon="/icons/nextjs.svg"
            title="Next.js"
            content="Framework Front-End com Server Actions e Dynamic Routes"
          />
          <HoverIcon
            icon="/icons/typescript.svg"
            title="Typescript"
            content="Definição de Tipos e Interfaces para Javascript"
          />
          <HoverIcon
            icon="/icons/prisma.svg"
            title="Prisma ORM"
            content="Operação de Banco de Dados com suporte a Typescript"
          />
          <HoverIcon
            icon="/icons/tailwindcss.svg"
            title="Tailwind CSS"
            content="Estilização de componentes por classes CSS"
          />
        </div>
      </div>
      <Button variant="outline" asChild>
        Descobrir
      </Button>
    </section>
  );
}
