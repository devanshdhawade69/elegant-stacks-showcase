import TechText from '../TechText';
import ProfileCard from "../ProfileCard";


export function Hero() {
  return (
    <section id="home" className="px-3 sm:px-4 pt-8 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* Left Side: Animated Texts */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 md:gap-6 h-[300px] sm:h-[400px] lg:h-[600px] justify-center">
          <div className="w-full h-1/3 relative">
            <TechText
              text="Building"
        fontWeight={600}
        fontSize={150}
        reveal="letter"
        dashLength={4}
        dashGap={2}
        specks={15}
        fontFamily=""
        color="#ffffff"
        accentColor="#ffffff"
        letterSpacing={-0.05}
        reach={200}
        softness={0.7}
        strokeWidth={1.5}
        speed={1}
        lineStyle="dashed"
        selection
        labels
        draggable
              sweep
            />
          </div>

          <div className="w-full h-1/3 relative">
            <TechText
              text="Streamlining"
        fontWeight={600}
        fontSize={150}
        reveal="letter"
        dashLength={4}
        dashGap={2}
        specks={15}
        fontFamily=""
        color="#ffffff"
        accentColor="#ffffff"
        letterSpacing={-0.05}
        reach={200}
        softness={0.7}
        strokeWidth={1.5}
        speed={1}
        lineStyle="dashed"
        selection
        labels
        draggable
              sweep
            />
          </div>

          <div className="w-full h-1/3 relative">
            <TechText
              text="Bridging"
        fontWeight={600}
        fontSize={150}
        reveal="letter"
        dashLength={4}
        dashGap={2}
        specks={15}
        fontFamily=""
        color="#ffffff"
        accentColor="#ffffff"
        letterSpacing={-0.05}
        reach={200}
        softness={0.7}
        strokeWidth={1.5}
        speed={1}
        lineStyle="dashed"
        selection
        labels
        draggable
              sweep
            />
          </div>
        </div>

        {/* Right Side: Profile Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-20 scale-75 md:scale-90 lg:scale-100">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
