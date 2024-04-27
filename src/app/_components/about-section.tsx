import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  FileTextIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section
      id="about-me"
      className="flex flex-col justify-center gap-24 min-h-[90vh] items-center px-6 py-24 relative"
    >
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-accent-foreground">
        About me
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-4">
          <h1 className="text-2xl font-bold text-primary">@leandrordg</h1>
          <p className="tracking-wide max-w-lg dark:text-muted-foreground">
            Me chamo Leandro Rodrigues, tenho 19 anos e sou programador na parte
            do Front-End. Comecei os estudos no ano de 2019, e desde então venho
            me aprimorando cada vez mais. Atualmente estou estudando sobre o
            Next.js e Typescript, e estou gostando bastante da experiência. Meu
            objetivo é me tornar um desenvolvedor Full Stack, e para isso estou
            estudando bastante sobre o Back-End.
          </p>

          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link target="_blank" href="https://github.com/leandrordg">
                <GitHubLogoIcon />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/lrbertalhia"
              >
                <LinkedInLogoIcon />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                target="_blank"
                href="https://instagram.com/leandro.rodriguesz"
              >
                <InstagramLogoIcon />
              </Link>
            </Button>
          </div>

          <Button variant="link" asChild className="px-0 text-muted-foreground">
            <Link target="_blank" href="/leandro-dev.pdf" download={true}>
              <FileTextIcon className="mr-1" />
              obter o currículo
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/avatar.jpg"
            alt="Leandro Rodrigues"
            width={500}
            height={500}
            quality={95}
            className="rotate-3 aspect-square object-cover rounded-lg shadow-2xl w-full max-w-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <ArrowDownIcon className="size-8 text-muted-foreground" />
      </div>
    </section>
  );
}
