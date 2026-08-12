import React from 'react';

interface AssessmentIntroScreenProps {
  onStart: () => void;
}

export const AssessmentIntroScreen: React.FC<AssessmentIntroScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden w-full max-w-2xl animate-in fade-in zoom-in duration-500">
        <h2 className="font-['Montserrat'] font-black text-3xl md:text-4xl text-sage-600 dark:text-sage-400 mb-6 flex flex-col items-center gap-3">
          Let’s Discover Your Coping Strength
          <span className="text-4xl">🧠 💪</span>
        </h2>
        
        <div className="flex flex-col gap-4 text-lg md:text-xl text-zinc-700 dark:text-zinc-300 font-medium mb-10">
          <p>Think about yourself honestly.</p>
          <p>There are no right or wrong answers.</p>
        </div>

        <div className="inline-flex items-center gap-2 bg-sage-500/10 border border-sage-500/30 text-sage-600 dark:text-sage-400 px-6 py-3 rounded-full font-bold mb-10">
          <span>36 questions</span>
          <span className="opacity-50">•</span>
          <span>About 7–10 minutes</span>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-left mb-10 w-full max-w-md mx-auto">
          <h3 className="text-zinc-900 dark:text-white font-bold text-lg mb-4 text-center">Answer Scale:</h3>
          <ul className="flex flex-col gap-3 font-medium text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-3"><span className="text-sage-500 font-bold">1</span> — Not true at all</li>
            <li className="flex items-center gap-3"><span className="text-sage-500 font-bold">2</span> — Barely true</li>
            <li className="flex items-center gap-3"><span className="text-sage-500 font-bold">3</span> — Somewhat true</li>
            <li className="flex items-center gap-3"><span className="text-sage-500 font-bold">4</span> — Completely true</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="bg-sage-500 hover:bg-sage-400 text-black font-['Montserrat'] font-bold text-xl py-4 px-16 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(92,131,88,0.3)] inline-flex items-center gap-2"
        >
          START
        </button>
      </div>
    </div>
  );
};
