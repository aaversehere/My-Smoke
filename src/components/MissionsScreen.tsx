import React, { useState } from 'react';

interface MissionsScreenProps {
  onComplete: () => void;
}

export const MissionsScreen: React.FC<MissionsScreenProps> = ({ onComplete }) => {
  const [mission, setMission] = useState(1);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const nextMission = () => {
    if (mission < 5) {
      setMission(mission + 1);
    } else {
      onComplete();
    }
  };

  const renderMission1 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-emerald-400 mb-6 flex items-center justify-center gap-3">
        Mission 1 — What's Really Inside a Cigarette? <span className="text-3xl">🚬</span>
      </h2>
      <div className="flex justify-center mb-8 w-24 h-24 bg-zinc-800/80 rounded-full items-center">
         <span className="material-symbols-outlined text-5xl text-emerald-500">pulmonology</span>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
          <h3 className="text-white font-bold text-lg mb-1">Nicotine</h3>
          <p className="text-zinc-400">Can make your body dependent on cigarettes.</p>
        </div>
        <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
          <h3 className="text-white font-bold text-lg mb-1">Tar</h3>
          <p className="text-zinc-400">Can damage your lungs.</p>
        </div>
        <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
          <h3 className="text-white font-bold text-lg mb-1">Carbon Monoxide</h3>
          <p className="text-zinc-400">Reduces the oxygen carried in your blood.</p>
        </div>
      </div>
      <button
        onClick={nextMission}
        className="bg-emerald-500 hover:bg-emerald-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
      >
        GOT IT!
      </button>
    </div>
  );

  const renderMission2 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-emerald-400 mb-8 text-center">
        Mission 2 — What Smoking Does to Your Body
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mb-8 text-left">
        <div className="flex gap-4 items-start bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
          <span className="text-3xl mt-1">😮‍💨</span>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Breathing</h3>
            <p className="text-zinc-400 text-sm">Smoking can make breathing harder.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
          <span className="text-3xl mt-1">🫀</span>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Heart</h3>
            <p className="text-zinc-400 text-sm">Smoking increases the risk of heart disease.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
          <span className="text-3xl mt-1">🧠</span>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Focus</h3>
            <p className="text-zinc-400 text-sm">Nicotine dependence can affect concentration.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
          <span className="text-3xl mt-1">🏃</span>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Energy</h3>
            <p className="text-zinc-400 text-sm">Smoking can reduce stamina.</p>
          </div>
        </div>
      </div>
      <button
        onClick={nextMission}
        className="bg-emerald-500 hover:bg-emerald-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2"
      >
        Next <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission3 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-emerald-400 mb-2 text-center">
        Mission 3 — Why Do Teens Smoke?
      </h2>
      <p className="text-white font-bold text-lg mb-6 text-center">
        Which situation feels most familiar to you?
      </p>
      
      <div className="flex flex-col gap-3 w-full max-w-md mb-8">
        {[
          { icon: '👥', text: 'Peer pressure' },
          { icon: '😎', text: 'Wanting to look cool' },
          { icon: '🤔', text: 'Curiosity' },
          { icon: '😫', text: 'Stress' },
          { icon: '📱', text: 'Social environment' },
        ].map((item) => (
          <button
            key={item.text}
            onClick={() => setSelectedReason(item.text)}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
              selectedReason === item.text
                ? 'bg-emerald-500/20 border-emerald-500 scale-[1.02] shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-zinc-800/80 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800'
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-white font-bold">{item.text}</span>
          </button>
        ))}
      </div>
      
      <button
        onClick={nextMission}
        disabled={!selectedReason}
        className={`font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center gap-2 ${
          selectedReason
            ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]'
            : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        Next <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission4 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-emerald-400 mb-8 text-center">
        Mission 4 — Why Quitting Is Worth It
      </h2>
      <div className="relative w-full max-w-lg mb-10 pl-6 text-left">
        {/* Vertical line for timeline */}
        <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-zinc-700"></div>
        
        <div className="flex gap-6 items-start relative mb-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-emerald-500 flex items-center justify-center shrink-0 z-10 text-xl">
            💗
          </div>
          <div className="pt-2">
            <h3 className="text-white font-bold text-lg">20 minutes</h3>
            <p className="text-zinc-400">Your heart begins adjusting.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start relative mb-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-emerald-500 flex items-center justify-center shrink-0 z-10 text-xl">
            🌬️
          </div>
          <div className="pt-2">
            <h3 className="text-white font-bold text-lg">Days–Weeks</h3>
            <p className="text-zinc-400">Breathing and circulation begin improving.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start relative mb-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-emerald-500 flex items-center justify-center shrink-0 z-10 text-xl">
            🏃
          </div>
          <div className="pt-2">
            <h3 className="text-white font-bold text-lg">Weeks–Months</h3>
            <p className="text-zinc-400">You may feel fitter and more energetic.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start relative">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-emerald-500 flex items-center justify-center shrink-0 z-10 text-xl">
            💰
          </div>
          <div className="pt-2">
            <h3 className="text-white font-bold text-lg">Every day</h3>
            <p className="text-zinc-400">You save money.</p>
          </div>
        </div>
      </div>

      <button
        onClick={nextMission}
        className="bg-emerald-500 hover:bg-emerald-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2"
      >
        Next <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission5 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-emerald-400 mb-8 text-center flex flex-col items-center gap-2">
        Proactive Coping
        <span className="text-white text-xl">THINK AHEAD 🧠</span>
      </h2>
      
      <div className="w-full max-w-lg mb-8 text-left bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
        <h3 className="text-emerald-400 font-bold text-lg mb-2">If this happens...</h3>
        <p className="text-white text-xl mb-6">My friends offer me a cigarette.</p>
        
        <h3 className="text-emerald-400 font-bold text-lg mb-4">I will...</h3>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-emerald-500">check_circle</span>
            Say "No, thanks."
          </li>
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-emerald-500">check_circle</span>
            Move away for a while.
          </li>
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-emerald-500">check_circle</span>
            Drink water.
          </li>
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-emerald-500">check_circle</span>
            Talk to a friend.
          </li>
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-emerald-500">check_circle</span>
            Do another activity.
          </li>
        </ul>
      </div>

      <p className="text-zinc-300 text-lg mb-8 text-center max-w-md font-medium">
        Planning before temptation happens is proactive coping.
      </p>

      <button
        onClick={nextMission}
        className="bg-emerald-500 hover:bg-emerald-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2"
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
          {[1, 2, 3, 4, 5].map((m) => (
            <div 
              key={m} 
              className={`h-2 rounded-full transition-all duration-300 ${
                m === mission ? 'w-10 bg-emerald-400' : m < mission ? 'w-3 bg-emerald-500/50' : 'w-3 bg-zinc-800'
              }`}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-zinc-800 p-6 md:p-10 text-center shadow-2xl relative overflow-hidden">
          {mission === 1 && renderMission1()}
          {mission === 2 && renderMission2()}
          {mission === 3 && renderMission3()}
          {mission === 4 && renderMission4()}
          {mission === 5 && renderMission5()}
        </div>
      </div>
    </div>
  );
};
