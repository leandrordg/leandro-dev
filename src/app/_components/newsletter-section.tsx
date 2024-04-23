import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="flex flex-col gap-y-12 items-center justify-center min-h-[90vh] relative py-24 px-6"
    >
      <div className="flex flex-col text-center gap-6">
        <div className="flex items-center justify-center gap-x-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-accent-foreground">
            Newsletter
          </h1>
          <Badge variant='secondary'>BETA</Badge>
        </div>
        <p className="text-muted-foreground tracking-wide">
          Cadastre-se no meu newsletter e fique por dentro de todas as
          atualizações e conteúdos novos
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center max-w-screen-lg mx-auto w-full">
        <Input type="email" placeholder="email@example.com" />
        <Button size="lg" className="text-white">
          Inscrever-se
        </Button>
      </div>
    </section>
  );
}
