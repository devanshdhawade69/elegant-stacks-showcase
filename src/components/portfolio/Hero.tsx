import portrait from "@/assets/alex-portrait.png.asset.json";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <section id="home" className="px-3 sm:px-4 pt-3 sm:pt-4 pb-16 md:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary/60 border border-border">
        {/* Top nav strip inside hero */}
        <div className="absolute inset-x-0 top-0 z-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 md:px-10 py-4 md:py-5 lg:flex lg:justify-between">
          <a
            href="#home"
            className="font-display text-lg md:text-xl font-semibold tracking-tight text-foreground truncate"
          >
            dev<span className="text-primary">.d</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-[0.25em] text-foreground/80">
            {links.map((l, i) => (
              <span key={l.href} className="flex items-center gap-6 xl:gap-8">
                {i > 0 && <span className="text-foreground/30">/</span>}
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </span>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full bg-primary text-primary-foreground px-3 sm:px-4 md:px-5 py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a call
            </a>
          </div>
        </div>

        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80 animate-[hero-glow_1s_ease-out_0.3s_both]"
          style={{
            background:
              "radial-gradient(65% 55% at 50% 45%, oklch(0.86 0.06 245 / 0.35), transparent 70%)",
          }}
        />

        {/* Portrait */}
        <div className="relative flex items-end justify-center min-h-[380px] sm:min-h-[520px] md:min-h-[680px] opacity-0 animate-[hero-portrait_0.9s_ease-out_0.2s_forwards]">
          <img
            src={portrait.url}
            alt="Portrait of Alex Moreau"
            className="h-[340px] sm:h-[480px] md:h-[640px] w-auto max-w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Bottom overlay content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 md:pb-10 animate-fade-in">
          <div className="flex items-end justify-between gap-4 sm:gap-6">
            <div className="min-w-0">
              <p className="text-xs md:text-sm text-foreground/70 mb-2 md:mb-4">(26)</p>
              <h1 className="font-display font-semibold leading-[0.85] tracking-tight text-foreground text-[16vw] sm:text-[13vw] md:text-[9rem] lg:text-[11rem]">
                ALEX
                <br />
                MOREAU
              </h1>
            </div>
            <div className="hidden sm:block text-right shrink-0 pb-4">
              <p className="text-xs md:text-sm text-foreground/80 leading-tight">Full-Stack</p>
              <p className="text-xs md:text-sm text-foreground/80 leading-tight">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
