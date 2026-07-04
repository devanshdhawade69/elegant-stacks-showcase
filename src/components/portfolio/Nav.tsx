import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          dev<span className="text-primary">.d</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-foreground/80 hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="md:hidden text-sm text-primary font-medium">
          Contact
        </a>
      </nav>
    </header>
  );
}
