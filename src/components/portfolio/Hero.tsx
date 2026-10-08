import { useState, useEffect } from 'react';
import TechText from '../TechText';
import ProfileCard from "../ProfileCard";

function useTheme() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

export function Hero() {
  const isDark = useTheme();
  const techColor = isDark ? "#ffffff" : "#000000";

  return (
    <section id="home" className="px-3 sm:px-4 pt-8 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
        {/* Left Side: Animated Texts */}
        <div className="flex flex-col w-full lg:w-1/2 justify-start -mt-4 sm:-mt-8 lg:-mt-16 -space-y-4 sm:-space-y-8 lg:-space-y-16">
          <div className="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[260px] relative">
            <TechText
              text="Building"
              fontWeight={600}
              fontSize={250}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              fontFamily=""
              color={techColor}
              accentColor={techColor}
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
              align="left"
            />
          </div>

          <div className="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[260px] relative">
            <TechText
              text="Streamlining"
              fontWeight={600}
              fontSize={250}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              fontFamily=""
              color={techColor}
              accentColor={techColor}
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
              align="left"
            />
          </div>

          <div className="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[260px] relative">
            <TechText
              text="Bridging"
              fontWeight={600}
              fontSize={250}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              fontFamily=""
              color={techColor}
              accentColor={techColor}
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
              align="left"
            />
          </div>
        </div>

        {/* Right Side: Profile Card */}
        <div className="w-full sm:w-auto lg:w-1/2 flex justify-center lg:justify-end z-20">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
