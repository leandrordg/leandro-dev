import Link from "next/link";
import { NavbarLink } from "@/components/navbar-link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 max-w-screen-lg mx-auto gap-6 py-12 px-6">
          <Link
            href="#intro"
            className="font-bold text-xl hover:underline underline-offset-4"
          >
            leandro-dev
          </Link>
          <ul className="flex flex-col items-start">
            <h2 className="ml-4 text-lg text-muted-foreground">Navigation</h2>
            <NavbarLink content="About me" hrefId="about-me" />
            <NavbarLink content="Tech Stack" hrefId="tech-stack" />
          </ul>
          <ul className="flex flex-col items-start">
            <h2 className="ml-4 text-lg text-muted-foreground">Navigation</h2>
            <NavbarLink content="Projects" hrefId="projects" />
            <NavbarLink content="Newsletter" hrefId="newsletter" />
          </ul>
          <div className="flex items-start gap-4">
            <Button variant="outline" asChild>
              <Link target="_blank" href="https://github.com/leandrordg">
                <GitHubLogoIcon />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/leandro-rodrigues-8aaa19221/"
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
        </div>
        <div className="py-4 bg-primary w-full text-center text-xs text-white">
          {new Date().getFullYear()} &copy; leandro-dev. All rights reserved |
          Developed by Leandro Rodrigues
        </div>
      </div>
    </footer>
  );
}
