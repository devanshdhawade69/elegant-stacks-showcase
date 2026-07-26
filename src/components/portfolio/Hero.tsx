import portrait from "@/assets/alex-portrait.png.asset.json";

export function Hero() {
  return (
    <section id="home" className="px-3 sm:px-4 pt-20 sm:pt-24 pb-16 md:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary/60 border border-border">
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
