import Link from "next/link";

import { NavbarLink } from "./navbar-link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="h-16 sticky top-0 px-4 !z-50 transition ease-in backdrop-blur-sm">
      <nav className="flex items-center justify-between h-full">
        <Link
          href="#intro"
          className="font-bold text-xl hover:underline underline-offset-4"
        >
          leandro-dev
        </Link>

        <ul className="hidden md:flex items-center gap-x-4">
          <NavbarLink content="About me" hrefId="about-me" />
          <NavbarLink content="Tech Stack" hrefId="tech-stack" />
          <NavbarLink content="Projects" hrefId="projects" />
          <NavbarLink content="Newsletter" hrefId="newsletter" />
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
