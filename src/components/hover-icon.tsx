import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

export function HoverIcon({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="icon">
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="size-8"
          />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-row space-x-4 text-left">
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="size-8"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm">{content}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
