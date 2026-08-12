import React, { useState } from 'react';

interface BeatCravingGameProps {
  onComplete: () => void;
}

export const BeatCravingGame: React.FC<BeatCravingGameProps> = ({ onComplete }) => {
  const [level, setLevel] = useState(1);
  const [l1Choice, setL1Choice] = useState<string | null>(null);
  const [l2Choices, setL2Choices] = useState<string[]>([]);
  const [showL1Feedback, setShowL1Feedback] = useState(false);
  const [showL2Feedback, setShowL2Feedback] = useState(false);

  const handleL1Choice = (choice: string) => {
    setL1Choice(choice);
    setShowL1Feedback(true);
  };

  const handleL2Choice = (choice: string) => {
    if (l2Choices.includes(choice)) {
      setL2Choices(l2Choices.filter((c) => c !== choice));
    } else {
      setL2Choices([...l2Choices, choice]);
    }
  };

  const submitL2 = () => {
    setShowL2Feedback(true);
  };

  const nextLevel = () => {
    setLevel(level + 1);
  };

  const renderLevel1 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-green-600 dark:text-green-400 mb-6 text-center">
        Game: Beat the Craving
      </h2>
      <div className="text-zinc-600 dark:text-zinc-400 uppercase tracking-widest font-bold mb-4">LEVEL 1</div>
      
      <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 w-full max-w-lg mb-8 text-center">
        <p className="text-zinc-900 dark:text-white text-lg md:text-xl font-medium">
          You are hanging out with friends.<br/>
          Someone offers you a cigarette.
        </p>
      </div>

      {!showL1Feedback ? (
        <div className="flex flex-col gap-3 w-full max-w-md">
          {[
            { id: 'A', text: 'Take it immediately' },
            { id: 'B', text: 'Say no and change the activity', isCorrect: true },
            { id: 'C', text: 'Stay silent and wait' },
            { id: 'D', text: 'Smoke because everyone else is smoking' },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleL1Choice(opt.id)}
              className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-green-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-200 py-4 px-6 rounded-xl font-medium text-left transition-all hover:scale-[1.02]"
            >
              <span className="font-bold text-green-500 mr-3">{opt.id}.</span>
              {opt.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center animate-in zoom-in duration-300">
          {l1Choice === 'B' ? (
            <>
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Great choice!</h3>
              <p className="text-green-600 dark:text-green-400 text-lg mb-8">You prepared a healthier response.</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">❌</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Not quite!</h3>
              <p className="text-red-400 text-lg mb-8 text-center max-w-sm">Saying no and changing the activity is the best way to avoid the temptation.</p>
            </>
          )}
          <button
            onClick={nextLevel}
            className="bg-green-500 hover:bg-green-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2"
          >
            Next Level <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );

  const renderLevel2 = () => {
    const options = [
      { id: 'water', icon: '💧', text: 'Drink water' },
      { id: 'music', icon: '🎧', text: 'Listen to music' },
      { id: 'walk', icon: '🚶', text: 'Take a short walk' },
      { id: 'smoke', icon: '🚬', text: 'Smoke' },
    ];

    const hasGoodChoices = l2Choices.length > 0 && !l2Choices.includes('smoke');
    const hasBadChoice = l2Choices.includes('smoke');

    return (
      <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
        <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-green-600 dark:text-green-400 mb-4 text-center">
          Game: Beat the Craving
        </h2>
        <div className="text-zinc-600 dark:text-zinc-400 uppercase tracking-widest font-bold mb-4">LEVEL 2</div>
        
        <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 w-full max-w-lg mb-6 text-center">
          <p className="text-zinc-900 dark:text-white text-lg md:text-xl font-medium">
            You feel stressed after an exam and suddenly want to smoke.
          </p>
        </div>

        {!showL2Feedback ? (
          <>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm font-bold uppercase tracking-wider">Select one or more healthy options:</p>
            <div className="flex flex-col gap-3 w-full max-w-md mb-8">
              {options.map((opt) => {
                const isSelected = l2Choices.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleL2Choice(opt.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                      isSelected
                        ? 'bg-green-500/20 border-green-500 scale-[1.02] shadow-[0_0_15px_rgba(34,197,94,0.2)]'
                        : 'bg-zinc-100 dark:bg-zinc-800/80 border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 hover:bg-zinc-100 dark:bg-zinc-800'
                    }`}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="text-zinc-900 dark:text-white font-bold">{opt.text}</span>
                    {isSelected && (
                      <span className="material-symbols-outlined ml-auto text-green-500">check_circle</span>
                    )}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={submitL2}
              disabled={l2Choices.length === 0}
              className={`font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center gap-2 ${
                l2Choices.length > 0
                  ? 'bg-green-500 hover:bg-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
              }`}
            >
              Confirm Choice
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center animate-in zoom-in duration-300 w-full max-w-md">
            {hasGoodChoices && !hasBadChoice ? (
              <>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Excellent!</h3>
                <p className="text-green-600 dark:text-green-400 text-lg mb-8 text-center">Replacing smoking with healthier habits helps beat stress effectively.</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Careful!</h3>
                <p className="text-red-400 text-lg mb-8 text-center max-w-sm">Smoking might seem to relieve stress temporarily, but the healthier choices are much better for your long-term wellbeing.</p>
              </>
            )}
            <button
              onClick={nextLevel}
              className="bg-green-500 hover:bg-green-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2"
            >
              Continue <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderLevel3 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-500 w-full">
      <h2 className="font-['Montserrat'] font-black text-4xl md:text-5xl text-green-600 dark:text-green-400 mb-8 flex items-center gap-3">
        4D POWER <span className="text-5xl">⚡</span>
      </h2>
      
      <div className="flex flex-col gap-4 w-full max-w-sm mb-10 text-left">
        <div className="bg-zinc-100 dark:bg-zinc-800/80 p-5 rounded-2xl border-l-4 border-green-500">
          <h3 className="text-zinc-900 dark:text-white font-bold text-xl">Delay</h3>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-800/80 p-5 rounded-2xl border-l-4 border-green-500">
          <h3 className="text-zinc-900 dark:text-white font-bold text-xl">Deep Breathing</h3>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-800/80 p-5 rounded-2xl border-l-4 border-green-500">
          <h3 className="text-zinc-900 dark:text-white font-bold text-xl">Drink Water</h3>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-800/80 p-5 rounded-2xl border-l-4 border-green-500">
          <h3 className="text-zinc-900 dark:text-white font-bold text-xl">Do Something Else</h3>
        </div>
      </div>

      <button
        onClick={onComplete}
        className="bg-green-500 hover:bg-green-400 text-black font-['Montserrat'] font-bold text-lg py-4 px-12 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2"
      >
        Start Assessment <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="w-full max-w-2xl">
        {/* Progress indicator */}
        <div className="mb-6 flex justify-center gap-2">
          {[1, 2, 3].map((m) => (
            <div 
              key={m} 
              className={`h-2 rounded-full transition-all duration-300 ${
                m === level ? 'w-10 bg-green-400' : m < level ? 'w-3 bg-green-500/50' : 'w-3 bg-zinc-100 dark:bg-zinc-800'
              }`}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-6 md:p-10 text-center shadow-2xl relative overflow-hidden">
          {level === 1 && renderLevel1()}
          {level === 2 && renderLevel2()}
          {level === 3 && renderLevel3()}
        </div>
      </div>
    </div>
  );
};
