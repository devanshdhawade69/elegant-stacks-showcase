import { ArrowRight } from "lucide-react";

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
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <p className="text-sm uppercase tracking-[0.25em] text-foreground/60 mb-6">
          Full-Stack Web Developer · Available for work
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] max-w-5xl">
          Crafting <em className="italic font-normal text-primary">elegant</em>
          <br />
          full-stack solutions.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-foreground/75 leading-relaxed">
          I'm Alex Moreau — I design and build resilient web products end-to-end,
          from interface to infrastructure. Currently shipping with React, Node,
          and Postgres.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
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
    </section>
  );
}
