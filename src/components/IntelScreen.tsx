import React, { useState } from 'react';

interface IntelScreenProps {
  onComplete: () => void;
  userXp: number;
}

export const IntelScreen: React.FC<IntelScreenProps> = ({ onComplete, userXp }) => {
  const [completed, setCompleted] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleGotIt = () => {
    setCompleted(true);
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full gap-8 relative z-10 pb-16 pt-2 px-6 md:px-12 lg:px-24 min-h-[calc(100vh-80px)]">
      {/* Mission Header */}
      <div className="flex flex-col gap-2 items-center text-center mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full shadow-sm mb-2">
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            science
          </span>
          <span className="font-['Montserrat'] font-bold text-xs uppercase tracking-wider">
            Intel Gathered
          </span>
        </div>

        <h1 className="font-['Montserrat'] font-extrabold text-[26px] sm:text-[30px] text-zinc-900 dark:text-white">
          What's Actually in There?
        </h1>

        <p className="font-['Quicksand'] font-medium text-base text-zinc-600 dark:text-zinc-400 max-w-[300px]">
          It's not just dried leaves. Here's a quick look at the top three troublemakers hiding inside.
        </p>
      </div>

      {/* Interactive Cards Grid */}
      <div className="flex flex-col gap-4 w-full" id="mission-cards">
        {/* Card 1: Nicotine */}
        <div 
          onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
          className={`mission-card relative bg-white dark:bg-zinc-900 rounded-xl p-5 shadow-lg transform transition-all duration-300 active:scale-95 cursor-pointer border-t-4 border-emerald-500 border-x border-b border-zinc-200 dark:border-zinc-800 ${
            expandedCard === 1 ? 'ring-2 ring-emerald-500' : ''
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                link
              </span>
            </div>
            <div className="flex flex-col pr-6">
              <h2 className="font-['Montserrat'] font-bold text-xl text-zinc-900 dark:text-white">Nicotine</h2>
              <p className="font-['Quicksand'] font-medium text-zinc-600 dark:text-zinc-400 mt-1 text-sm leading-relaxed">
                The hook. It rewires your brain to constantly crave more, making you feel anxious until your next fix.
              </p>

              {expandedCard === 1 && (
                <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs text-emerald-300 font-['Quicksand'] font-bold bg-zinc-100 dark:bg-zinc-800/80 p-2.5 rounded-lg animate-fadeIn">
                  💡 <strong>Smart Counter-move:</strong> Oral substitutes like mints, sugar-free gum, or deep breathing delay cravings by 10 minutes until nicotine spikes pass.
                </div>
              )}
            </div>
          </div>

          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-70 hover:opacity-100">
            <span className="material-symbols-outlined text-[18px] text-zinc-700 dark:text-zinc-300">
              {expandedCard === 1 ? 'unfold_less' : 'touch_app'}
            </span>
          </div>
        </div>

        {/* Card 2: Tar */}
        <div 
          onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
          className={`mission-card relative bg-white dark:bg-zinc-900 rounded-xl p-5 shadow-lg transform transition-all duration-300 active:scale-95 cursor-pointer border-t-4 border-amber-500 border-x border-b border-zinc-200 dark:border-zinc-800 ${
            expandedCard === 2 ? 'ring-2 ring-amber-500' : ''
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-amber-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                file_copy
              </span>
            </div>
            <div className="flex flex-col pr-6">
              <h2 className="font-['Montserrat'] font-bold text-xl text-zinc-900 dark:text-white">Tar</h2>
              <p className="font-['Quicksand'] font-medium text-zinc-600 dark:text-zinc-400 mt-1 text-sm leading-relaxed">
                The sticky stuff. It coats your lungs like paving a road, paralyzing the tiny hairs that keep them clean.
              </p>

              {expandedCard === 2 && (
                <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs text-amber-300 font-['Quicksand'] font-bold bg-zinc-100 dark:bg-zinc-800/80 p-2.5 rounded-lg animate-fadeIn">
                  🌱 <strong>Lung Recovery:</strong> Within 1 to 9 months smoke-free, cilia hairs in your lungs regenerate to sweep away mucus and clean your airway!
                </div>
              )}
            </div>
          </div>

          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-70 hover:opacity-100">
            <span className="material-symbols-outlined text-[18px] text-zinc-700 dark:text-zinc-300">
              {expandedCard === 2 ? 'unfold_less' : 'touch_app'}
            </span>
          </div>
        </div>

        {/* Card 3: Carbon Monoxide */}
        <div 
          onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)}
          className={`mission-card relative bg-white dark:bg-zinc-900 rounded-xl p-5 shadow-lg transform transition-all duration-300 active:scale-95 cursor-pointer border-t-4 border-red-500 border-x border-b border-zinc-200 dark:border-zinc-800 ${
            expandedCard === 3 ? 'ring-2 ring-red-500' : ''
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-red-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                air
              </span>
            </div>
            <div className="flex flex-col pr-6">
              <h2 className="font-['Montserrat'] font-bold text-xl text-zinc-900 dark:text-white">Carbon Monoxide</h2>
              <p className="font-['Quicksand'] font-medium text-zinc-600 dark:text-zinc-400 mt-1 text-sm leading-relaxed">
                The oxygen thief. It replaces oxygen in your blood, making your heart work overtime just to keep up.
              </p>

              {expandedCard === 3 && (
                <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs text-red-300 font-['Quicksand'] font-bold bg-zinc-100 dark:bg-zinc-800/80 p-2.5 rounded-lg animate-fadeIn">
                  🫀 <strong>Quick Health Win:</strong> In just 12 hours after stopping, carbon monoxide level in your blood drops back to normal!
                </div>
              )}
            </div>
          </div>

          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-70 hover:opacity-100">
            <span className="material-symbols-outlined text-[18px] text-zinc-700 dark:text-zinc-300">
              {expandedCard === 3 ? 'unfold_less' : 'touch_app'}
            </span>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="mt-4 flex flex-col gap-3 items-center w-full">
        <button
          onClick={handleGotIt}
          disabled={completed}
          className={`w-full max-w-sm h-14 font-['Montserrat'] font-extrabold text-lg rounded-full shadow-[0_8px_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 transform transition-all duration-300 active:scale-95 overflow-hidden relative cursor-pointer ${
            completed
              ? 'bg-emerald-400 text-black shadow-sm'
              : 'bg-emerald-500 text-black hover:bg-emerald-400'
          }`}
        >
          {completed ? (
            <>
              <span className="font-['Montserrat'] font-extrabold">MISSION COMPLETE! 🎉</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </>
          ) : (
            <>
              <span className="relative z-10">GOT IT!</span>
              <span className="material-symbols-outlined relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
                task_alt
              </span>
            </>
          )}
        </button>

        <p className="font-['Quicksand'] font-bold text-zinc-600 dark:text-zinc-400 text-sm text-center flex items-center justify-center gap-1">
          <span>Knowledge is power.</span>
          <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full text-xs font-['Montserrat'] font-bold">
            +50 XP
          </span>
        </p>
      </div>
    </div>
  );
};
