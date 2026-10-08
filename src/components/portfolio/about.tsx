import WarpText from '@/components/WarpText';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-6">
          <WarpText
            text="The Architect Behind the Code"
            color="#f8f5ff"
            warpStrength={0.08}
            warpScale={1.7}
            speed={0.55}
            pointerInfluence={0.42}
            pointerStrength={0.38}
            refraction={0.018}
            ripple
            fontSize={116}
            fontWeight={800}
            className="h-[100px] sm:h-[140px] md:h-[180px]"
            fontFamily="inherit"
            letterSpacing={-0.06}
            lineHeight={0.9}
          />
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full opacity-80" />
        </div>

        <div className="space-y-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed md:leading-loose font-light md:text-justify text-left">
          <p>
            I am <strong className="font-semibold text-foreground">Devansh Dhawade</strong>, a Full-Stack Web Developer and Automation Engineer dedicated to forging digital ecosystems that reside at the precise intersection of aesthetic brilliance and uncompromising performance.
          </p>
          <p>
            My craft is defined by a holistic mastery of the technological spectrum—from the meticulously sculpted pixels and micro-interactions of the client-side to the robust, fault-tolerant architectures of the server-side. I specialize in untangling complex operational paradigms and transmuting them into intelligent, frictionless automated workflows that multiply human leverage.
          </p>
          <p>
            Whether architecting high-concurrency real-time infrastructure, engineering dynamic e-commerce platforms, or pioneering sophisticated developer tooling, my philosophy remains unwavering: <span className="text-foreground italic font-medium">to transcend the conventional boundary between visionary design and profound engineering, creating immersive, end-to-end digital experiences that captivate and endure.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
