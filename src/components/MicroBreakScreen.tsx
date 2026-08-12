import React, { useState, useEffect } from 'react';

interface MicroBreakScreenProps {
  onReady: () => void;
}

export const MicroBreakScreen: React.FC<MicroBreakScreenProps> = ({ onReady }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 relative z-10">
      <div className="bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-zinc-800 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden w-full max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h2 className="font-['Montserrat'] font-black text-3xl md:text-4xl text-white mb-4 flex items-center justify-center gap-3">
          <span className="text-4xl">🎉</span> Nice Work!
        </h2>
        
        <p className="font-['Quicksand'] font-medium text-lg text-zinc-300 mb-8">
          You've completed the first assessment.
        </p>

        <div className="bg-zinc-800/50 rounded-2xl p-6 mb-8 border border-zinc-700/50">
          <span className="font-['Montserrat'] font-bold text-sm text-zinc-400 uppercase tracking-wider block mb-2">
            Progress
          </span>
          <div className="font-['Montserrat'] font-black text-2xl text-emerald-400">
            85% COMPLETE
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2 mt-4 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full transition-all duration-1000" style={{ width: '85%' }} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-2">
            <span className="font-['Montserrat'] font-black text-2xl text-emerald-400">
              {timeLeft > 0 ? timeLeft : '✓'}
            </span>
          </div>
          <p className="font-['Quicksand'] font-bold text-lg text-white">
            Take a 10-second micro-break:
          </p>
          <ul className="text-zinc-400 font-medium flex flex-col gap-2">
            <li>🧘‍♂️ Stretch your shoulders.</li>
            <li>😮‍💨 Take a deep breath.</li>
          </ul>
        </div>

        <p className="font-['Montserrat'] font-bold text-white mb-6">
          Ready for the last part?
        </p>

        <button
          onClick={onReady}
          className={`w-full py-4 rounded-full font-['Montserrat'] font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            timeLeft === 0
              ? 'bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
              : 'bg-zinc-800 text-emerald-500 border border-emerald-500/50 hover:bg-emerald-500/10'
          }`}
        >
          I'M READY {timeLeft > 0 && <span className="text-sm opacity-70">({timeLeft}s)</span>}
        </button>
      </div>
    </div>
  );
};
