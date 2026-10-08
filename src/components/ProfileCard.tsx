import React from 'react';
import HeroImg from "@/assets/heropg.png"
import RippleDistortion from './RippleDistortion';

export const ProfileCard = () => {
  return (
    <div className="relative group w-full max-w-[320px] sm:max-w-md mx-auto rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-violet-500/20 hover:-translate-y-2">
      {/* Decorative gradient blob behind the image */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-violet-500/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Image container using DitherVeil */}
      <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] relative rounded-t-[1.5rem] sm:rounded-t-[2rem] overflow-hidden p-1.5 sm:p-2">
        <div className="w-full h-full relative rounded-t-[1.25rem] sm:rounded-t-[1.5rem] overflow-hidden">
          
            <RippleDistortion
              src={HeroImg}
              brushSize={150}
              strength={0.2}
              swirl={1}
              rings={4}
              grayscale={false}
              spread={5}
              fade={3}
              spacing={15}
              dispersion={0}
              glint={0}
              tint="#a855f7"
              tintAmount={0.1}
              highlightColor="#ffffff"
              trigger="hover"
              clickStrength={2}
              quality="low"
              enabled
            />
          
        </div>
      </div>

      {/* Content */}
      <div className="px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 relative z-10">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight font-['Inter'] truncate">
              Devansh Dhawade
            </h2>
            <p className="text-violet-300/80 font-medium tracking-wide text-[10px] sm:text-xs mt-1 uppercase truncate">
              Full-Stack Web Dev & Automation Engineer
            </p>
          </div>
          <div className="flex gap-2 shrink-0 ml-2">
            <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
            </span>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed font-light text-[13px] sm:text-[14px] md:text-[15px]">
          Building seamless digital experiences from front to back. Streamlining complex workflows with intelligent automation. Bridging the gap between beautiful design and robust engineering.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
