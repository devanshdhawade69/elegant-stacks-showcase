import portrait from "@/assets/alex-portrait.png.asset.json";

export function Hero() {
  return (
    <section id="home" className="px-4 pt-4 pb-16 md:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary/60 border border-border">
        {/* Top nav strip inside hero */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 md:px-10 py-5">
          <a href="#home" className="font-display text-lg md:text-xl font-semibold tracking-tight text-foreground">
            dev<span className="text-primary">.d</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-foreground/80">
            <a href="#home" className="hover:text-foreground">Home</a>
            <span className="text-foreground/30">/</span>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <span className="text-foreground/30">/</span>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <span className="text-foreground/30">/</span>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary text-primary-foreground px-4 md:px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity"
          >
            Book a call
          </a>
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
        <div className="relative flex items-end justify-center min-h-[520px] md:min-h-[680px] opacity-0 animate-[hero-portrait_0.9s_ease-out_0.2s_forwards]">
          <img
            src={portrait.url}
            alt="Portrait of Alex Moreau"
            className="h-[480px] md:h-[640px] w-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Bottom overlay content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-10 pb-8 md:pb-10 animate-fade-in">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs md:text-sm text-foreground/70 mb-2 md:mb-4">(26)</p>
              <h1 className="font-display font-semibold leading-[0.85] tracking-tight text-foreground text-[15vw] md:text-[9rem] lg:text-[11rem]">
                ALEX
                <br />
                MOREAU
              </h1>
            </div>
            <div className="hidden md:block text-right shrink-0 pb-4">
              <p className="text-sm text-foreground/80 leading-tight">Full-Stack</p>
              <p className="text-sm text-foreground/80 leading-tight">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
