"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  content: string;
  hrefId: string;
  className?: string;
};

export function NavbarLink({ content, hrefId, className }: Props) {
  const pathname = usePathname();

  return (
    <Button
      variant="link"
      asChild
      className={cn(
        className,
        pathname === hrefId
          ? "text-blue-600"
          : "drop-shadow-md text-accent-foreground"
      )}
    >
      <Link href={`#${hrefId}`} className={className}>
        <li>{content}</li>
      </Link>
    </Button>
  );
}
