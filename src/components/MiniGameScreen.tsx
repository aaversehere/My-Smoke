import React, { useState } from 'react';

interface MiniGameScreenProps {
  onComplete: () => void;
}

const POWERS = [
  { id: 'focus', icon: '🧠', label: 'Stay Focused' },
  { id: 'strong', icon: '💪', label: 'Stay Strong' },
  { id: 'healthy', icon: '💖', label: 'Stay Healthy' },
  { id: 'goals', icon: '🎯', label: 'Reach My Goals' },
];

export const MiniGameScreen: React.FC<MiniGameScreenProps> = ({ onComplete }) => {
  const [selectedPower, setSelectedPower] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedPower(id);
    setTimeout(() => {
      setShowResult(true);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="max-w-2xl w-full bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
        
        {!showResult ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-emerald-600 dark:text-emerald-400 mb-2">
              Choose Your Power
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8">
              Which power do you want to strengthen today?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
              {POWERS.map((power) => (
                <button
                  key={power.id}
                  onClick={() => handleSelect(power.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                    selectedPower === power.id
                      ? 'bg-emerald-500/20 border-emerald-500 scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                      : 'bg-zinc-100 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 hover:border-zinc-400 dark:border-zinc-600 hover:scale-[1.02]'
                  }`}
                >
                  <span className="text-3xl">{power.icon}</span>
                  <span className="font-bold text-zinc-900 dark:text-white font-['Quicksand']">{power.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-2 animate-bounce">
              <span className="text-5xl">
                {POWERS.find((p) => p.id === selectedPower)?.icon}
              </span>
            </div>
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white">
              Great choice!
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-md">
              Let's discover your smoke-free strengths.
            </p>
            <button
              onClick={onComplete}
              className="mt-6 bg-emerald-500 hover:bg-emerald-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Start Assessment
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
