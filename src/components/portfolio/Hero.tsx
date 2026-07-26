// import portrait from "@/assets/alex-portrait.png.asset.json";
import HeroImg from "@/assets/heropg.png"
import AnimatedText from "../animatedText";

export function Hero() {
  return (
    <section id="home" className="px-3 sm:px-4 pt-20 sm:pt-24 pb-16 md:pb-24 2xl:pt-32">
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
        <div className="relative flex items-end justify-center min-h-[340px] sm:min-h-[460px] md:min-h-[600px] 2xl:min-h-[720px] opacity-0 animate-[hero-portrait_0.9s_ease-out_0.2s_forwards]">
          <img
            src={HeroImg}
            alt="Portrait of DEVANSH DHAWADE"
            className="h-[300px] sm:h-[420px] md:h-[560px] 2xl:h-[680px] w-auto max-w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Bottom overlay content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 sm:px-6 md:px-10 2xl:px-16 pb-6 sm:pb-8 md:pb-10 2xl:pb-16 animate-fade-in">
          <div className="flex items-end justify-between gap-4 sm:gap-6">
            <div className="min-w-0">
              <p className="text-xs md:text-sm 2xl:text-base text-foreground/70 mb-2 md:mb-4">(20)</p>
              <AnimatedText text="DEVANSH" className="font-display font-semibold leading-[0.85] tracking-tight text-foreground text-[11vw] sm:text-[9vw] md:text-[5.5rem] lg:text-[7rem] 2xl:text-[8.5rem]" animationType="letters" staggerDelay={0.08} duration={0.6}/>
              <AnimatedText text="DHAWADE" className="font-display font-semibold leading-[0.85] tracking-tight text-foreground text-[11vw] sm:text-[9vw] md:text-[5.5rem] lg:text-[7rem] 2xl:text-[8.5rem]" animationType="letters" staggerDelay={0.08} duration={0.6}/>
            </div>
            <div className="hidden sm:block text-right shrink-0 pb-4 2xl:pb-8">
              <p className="text-xs md:text-sm 2xl:text-lg text-foreground/80 leading-tight">Full-Stack Web Developer</p>
              <p className="text-xs md:text-sm 2xl:text-lg text-foreground/80 leading-tight">& Automation Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
