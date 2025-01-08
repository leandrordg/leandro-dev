import Image from "next/image";

import { CalendarIcon } from "@radix-ui/react-icons";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
  title: string;
  description: string;
  image: string;
  startedAt: string;
};

export function TechCard({ title, description, image, startedAt }: Props) {
  return (
    <Card className="bg-muted/20 min-h-44">
      <CardHeader className="flex-row gap-x-4">
        <Image
          src={image}
          alt={title}
          width={64}
          height={64}
          className="size-12"
        />
        <div className="flex flex-col space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>

          <CardDescription className="flex items-center gap-2">
            <CalendarIcon />
            Iniciou estudos em: {startedAt}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
