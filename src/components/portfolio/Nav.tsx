import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4 2xl:pt-8">
      <div className="mx-auto max-w-7xl rounded-full border border-border bg-background/70 backdrop-blur-md shadow-sm">
        <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 2xl:py-4 lg:flex lg:justify-between">
          <a
            href="#home"
            className="font-display text-lg md:text-xl 2xl:text-2xl font-semibold tracking-tight text-foreground truncate"
          >
            dev<span className="text-primary">.d</span>
          </a>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12 text-xs 2xl:text-sm uppercase tracking-[0.25em] text-foreground/80">
            {links.map((l, i) => (
              <span key={l.href} className="flex items-center gap-6 xl:gap-8">
                {i > 0 && <span className="text-foreground/30">/</span>}
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 2xl:gap-5">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full bg-primary text-primary-foreground px-3 sm:px-4 md:px-5 2xl:px-6 py-2 2xl:py-3 text-[10px] sm:text-xs 2xl:text-sm uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a call
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
