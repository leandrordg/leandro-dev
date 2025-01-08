import Image from "next/image";
import Link from "next/link";

import {
  getImageFromRepository,
  getLanguagesFromRepository,
} from "@/hooks/repositories";
import { formatRepositoryName } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLinkIcon, GitForkIcon, StarIcon } from "lucide-react";

type Props = {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  forks: number;
  subscribers: number;
};

export async function ProjectCard({
  name,
  description,
  url,
  homepage,
  forks,
  subscribers,
}: Props) {
  const image = await getImageFromRepository(name);
  const languages = await getLanguagesFromRepository(name);

  return (
    <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 bg-background hover:bg-background/70 cursor-default items-center group">
      <Image
        alt={name}
        src={image}
        width={1200}
        height={1200}
        loading="lazy"
        className="w-full max-h-64 object-cover"
      />
      <div className="flex flex-col p-4 gap-4">
        <h3 className="text-lg font-semibold">{formatRepositoryName(name)}</h3>

        <p className="text-sm text-muted-foreground">
          {description ?? "Sem descrição."}
        </p>

        <div className="flex flex-wrap gap-2">
          {Object.keys(languages).map((language) => (
            <Badge key={language} variant="secondary">
              {language}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 *:flex *:items-center *:gap-2">
          <div>
            <GitForkIcon className="size-4" />
            <span className="text-muted-foreground">{forks}</span>
          </div>
          <div>
            <StarIcon className="size-4" />
            <span className="text-muted-foreground">{subscribers}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {homepage && (
            <Button className="w-full" asChild>
              <Link target="_blank" href={homepage}>
                <ExternalLinkIcon className="size-4 mr-2" />
                Acessar
              </Link>
            </Button>
          )}

          <Button className="w-full" variant="secondary" asChild>
            <Link target="_blank" href={url}>
              <GitHubLogoIcon className="size-4 mr-2" />
              Repository
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
