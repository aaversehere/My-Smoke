import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col md:flex-row w-full px-6 md:px-12 lg:px-24 py-10 gap-8 md:gap-12 lg:gap-20 items-center justify-center min-h-[calc(100vh-80px)] relative overflow-hidden max-w-7xl mx-auto">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Illustration Area */}
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg flex-1 aspect-square rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden z-10 group transition-transform duration-500 hover:scale-[1.02]">
        <div 
          className="absolute inset-0 bg-cover bg-center w-full h-full opacity-85 transition-transform duration-700 group-hover:scale-105 mix-blend-luminosity hover:mix-blend-normal" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxRSwDhupZcgUa5NsF2M8O0aXtS3prMTE7j2UUbr1Ggrptlyu5vfAQdPSgT6x7LiA_f0yyIvUWuwKErLRFidwVx6pAc536wXkSGJv34FOuAF4nEoTI_QHpEeDyMssAPIF_SwPgs6haFbeZKS33Yg-P0gEAogHnrhJ7Z3fV7jTUxM3yNMSqaX_prjpBHehDIVPNQXjWCuJmI6AnN4pfL-4SrUlS1b1kuuV7vgss5_Jin8TH8DZFth0jNQ')" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full max-w-md md:max-w-xl lg:max-w-2xl gap-6 flex-1 mt-6 md:mt-0">
        <div className="flex flex-col gap-3">
          <h1 className="font-['Montserrat'] font-extrabold text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[44px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px] tracking-tight text-zinc-900 dark:text-white">
            Welcome to SmokeFree Quest!
          </h1>
          <p className="font-['Quicksand'] font-medium text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-[290px] md:max-w-md mx-auto md:mx-0 leading-relaxed">
            Ready to discover how strong your plan is to live smoke-free?
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={onStart}
          className="w-full relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 text-black font-['Montserrat'] font-extrabold text-xl py-4 px-8 rounded-full shadow-[0_12px_24px_-8px_rgba(16,185,129,0.35)] transition-all duration-300 active:scale-[0.98] active:shadow-md hover:-translate-y-1 group mt-2 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
            START MY JOURNEY
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 1" }}>
              arrow_forward
            </span>
          </span>
        </button>

        {/* Footer Note */}
        <div className="flex items-center gap-2 text-zinc-500 mt-1">
          <span className="material-symbols-outlined text-sm">schedule</span>
          <span className="font-['Quicksand'] font-medium text-sm">It only takes about 20–30 minutes.</span>
        </div>
      </div>
    </div>
  );
};
