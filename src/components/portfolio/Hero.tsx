import { ArrowRight } from "lucide-react";
import portrait from "@/assets/alex-portrait.png.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.86 0.06 245 / 0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-20 md:pb-32">
        {/* Header strip */}
        <div className="animate-fade-in flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-foreground/5 px-6 py-4">
          <p className="text-xs uppercase tracking-[0.25em] text-foreground/70">
            Full-Stack Web Developer
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-foreground/60">
            Available for work · 2026
          </p>
        </div>

        {/* Central image */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-foreground/5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70 animate-[hero-glow_0.9s_ease-out_0.4s_both]"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, oklch(0.86 0.06 245 / 0.35), transparent 70%)",
            }}
          />
          <div className="relative flex items-end justify-center min-h-[380px] md:min-h-[520px] opacity-0 animate-[hero-portrait_0.9s_ease-out_0.2s_forwards]">
            <img
              src={portrait.url}
              alt="Portrait of Alex Moreau"
              className="h-[360px] md:h-[500px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Two text blocks below */}
        <div className="mt-8 grid gap-6 md:grid-cols-[1.6fr_1fr] animate-fade-in">
          <div className="rounded-2xl border border-border bg-foreground/5 p-8">
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[0.95]">
              Crafting <em className="italic font-normal text-primary">elegant</em> full-stack solutions.
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-foreground/5 p-8 md:self-end">
            <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
              I'm Alex Moreau — I design and build resilient web products end-to-end,
              from interface to infrastructure. Currently shipping with React, Node, and Postgres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
