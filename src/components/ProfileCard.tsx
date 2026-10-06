import React from 'react';
import HeroImg from "@/assets/heropg.png"
import DitherVeil from './DitherVeil';

export const ProfileCard = () => {
  return (
    <div className="relative group w-full max-w-md mx-auto rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-violet-500/20 hover:-translate-y-2">
      {/* Decorative gradient blob behind the image */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-violet-500/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Image container using DitherVeil */}
      <div className="w-full h-[380px] relative rounded-t-[2rem] overflow-hidden p-2">
        <div className="w-full h-full relative rounded-t-[1.5rem] overflow-hidden">
          <DitherVeil
            src={HeroImg}
            pattern="floyd"
            pixelSize={2}
            inkColor="#120f17"
            paperColor="#f4f1ea"
            revealRadius={250}
            softness={0.8}
            linger={1.5}
            fit="cover"
            rimColor="#a78bfa"
            palette="duotone"
            levels={3}
            contrast={1.2}
            brightness={0.05}
            rim={0}
            reverse={false}
            wander={true}
            clickBurst={true}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-['Inter']">
              Devansh Dhawade
            </h2>
            <p className="text-violet-300/80 font-medium tracking-wide text-xs mt-1 uppercase">
              Full-Stack Web Dev & Automation Engineer
            </p>
          </div>
          <div className="flex gap-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
        </div>

        <p className="text-white/70 mb-8 leading-relaxed font-light text-[15px]">
          Building seamless digital experiences from front to back. Streamlining complex workflows with intelligent automation. Bridging the gap between beautiful design and robust engineering.
        </p>


      </div>
    </div>
  );
};

export default ProfileCard;
