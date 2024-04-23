import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Props = {
  title: string;
  description: string;
  src: string;
  repositoryLink: string;
  beta?: boolean;
};

export function ProjectCard({
  title,
  description,
  src,
  repositoryLink,
  beta,
}: Props) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 bg-background hover:bg-background/70 cursor-default items-center group">
      <Image
        alt={title}
        src={src}
        width={500}
        height={500}
        quality={100}
        priority={true}
        className="w-full object-cover"
      />
      <div className="flex flex-col p-4 gap-4 min-h-48">
        {beta ? (
          <div className="flex items-center gap-x-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Badge variant="outline">Beta</Badge>
          </div>
        ) : (
          <h3 className="text-lg font-semibold">{title}</h3>
        )}

        <p className="text-sm text-muted-foreground">{description}</p>

        <Button variant="secondary" asChild className="mt-auto">
          <Link target="_blank" href={repositoryLink}>
            <GitHubLogoIcon className="mr-2" />
            Repository
          </Link>
        </Button>
      </div>
    </div>
  );
}
