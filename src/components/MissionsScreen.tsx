import React, { useState } from 'react';

interface MissionsScreenProps {
  onComplete: () => void;
}

export const MissionsScreen: React.FC<MissionsScreenProps> = ({ onComplete }) => {
  const [mission, setMission] = useState(1);

  // Mission 1 State
  const [mission1Answers, setMission1Answers] = useState<Record<string, boolean | null>>({
    nicotine: null,
    tar: null,
    co: null,
  });
  const handleMission1Answer = (id: string, answer: boolean) => setMission1Answers((prev) => ({ ...prev, [id]: answer }));
  const isMission1Complete = Object.values(mission1Answers).every((a) => a !== null);

  // Mission 2 State
  const [mission2Answers, setMission2Answers] = useState<Record<string, boolean | null>>({
    breathing: null,
    heart: null,
    focus: null,
    energy: null,
  });
  const handleMission2Answer = (id: string, answer: boolean) => setMission2Answers((prev) => ({ ...prev, [id]: answer }));
  const isMission2Complete = Object.values(mission2Answers).every((a) => a !== null);

  // Mission 3 State
  const [mission3Answers, setMission3Answers] = useState<Record<string, boolean | null>>({
    peer: null,
    cool: null,
    curiosity: null,
    stress: null,
    social: null,
  });
  const handleMission3Answer = (id: string, answer: boolean) => setMission3Answers((prev) => ({ ...prev, [id]: answer }));
  const isMission3Complete = Object.values(mission3Answers).every((a) => a !== null);

  // Mission 4 State
  const [mission4Answers, setMission4Answers] = useState<Record<string, boolean | null>>({
    m20: null,
    days: null,
    weeks: null,
    everyday: null,
  });
  const handleMission4Answer = (id: string, answer: boolean) => setMission4Answers((prev) => ({ ...prev, [id]: answer }));
  const isMission4Complete = Object.values(mission4Answers).every((a) => a !== null);


  const nextMission = () => {
    if (mission < 5) {
      setMission(mission + 1);
    } else {
      onComplete();
    }
  };

  const renderQuizCard = (
    q: { id: string; icon?: string; title: string; desc?: string }, 
    answers: Record<string, boolean | null>, 
    handleAnswer: (id: string, ans: boolean) => void
  ) => (
    <div key={q.id} className="bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-300 dark:border-zinc-700">
      <div className="flex items-center gap-3 mb-2">
        {q.icon && <span className="text-2xl">{q.icon}</span>}
        <h3 className="text-zinc-900 dark:text-white font-bold text-lg">{q.title}</h3>
      </div>
      {q.desc && <p className="text-zinc-600 dark:text-zinc-400 mb-4">{q.desc}</p>}
      
      <div className="flex gap-2 mb-2">
        <button 
          onClick={() => handleAnswer(q.id, true)}
          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
            answers[q.id] === true 
              ? 'bg-green-500 text-black shadow-[0_0_10px_rgba(34,197,94,0.5)]' 
              : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-600'
          }`}
        >
          True
        </button>
        <button 
          onClick={() => handleAnswer(q.id, false)}
          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
            answers[q.id] === false 
              ? 'bg-red-500 text-zinc-900 dark:text-white shadow-[0_0_10px_rgba(239,68,68,0.5)]' 
              : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-600'
          }`}
        >
          False
        </button>
      </div>
      
      {answers[q.id] !== null && (
        <div className={`text-sm font-bold animate-in fade-in ${answers[q.id] === true ? 'text-green-600 dark:text-green-400' : 'text-amber-400'}`}>
          {answers[q.id] === true 
            ? '✅ Correct! This is true.' 
            : '❌ Actually, this is True!'}
        </div>
      )}
    </div>
  );

  const renderMission1 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-green-600 dark:text-green-400 mb-6 flex items-center justify-center gap-3 text-center">
        Mission 1 — What's Really Inside a Cigarette? <span className="text-3xl">🚬</span>
      </h2>
      <div className="flex justify-center mb-6 w-24 h-24 bg-zinc-100 dark:bg-zinc-800/80 rounded-full items-center">
         <span className="material-symbols-outlined text-5xl text-green-500">pulmonology</span>
      </div>
      <p className="text-zinc-900 dark:text-white mb-6 font-bold text-lg">True or False?</p>
      
      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        {[
          { id: 'nicotine', title: 'Nicotine', desc: 'Can make your body dependent on cigarettes.' },
          { id: 'tar', title: 'Tar', desc: 'Can damage your lungs.' },
          { id: 'co', title: 'Carbon Monoxide', desc: 'Reduces the oxygen carried in your blood.' },
        ].map(q => renderQuizCard(q, mission1Answers, handleMission1Answer))}
      </div>
      
      <button
        onClick={nextMission}
        disabled={!isMission1Complete}
        className={`font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center justify-center gap-2 ${
          isMission1Complete
            ? 'bg-green-500 hover:bg-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        GOT IT! <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission2 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-green-600 dark:text-green-400 mb-6 text-center">
        Mission 2 — What Smoking Does to Your Body
      </h2>
      <p className="text-zinc-900 dark:text-white mb-6 font-bold text-lg">True or False?</p>
      
      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        {[
          { id: 'breathing', icon: '😮‍💨', title: 'Breathing', desc: 'Smoking can make breathing harder.' },
          { id: 'heart', icon: '🫀', title: 'Heart', desc: 'Smoking increases the risk of heart disease.' },
          { id: 'focus', icon: '🧠', title: 'Focus', desc: 'Nicotine dependence can affect concentration.' },
          { id: 'energy', icon: '🏃', title: 'Energy', desc: 'Smoking can reduce stamina.' },
        ].map(q => renderQuizCard(q, mission2Answers, handleMission2Answer))}
      </div>
      
      <button
        onClick={nextMission}
        disabled={!isMission2Complete}
        className={`bg-green-500 hover:bg-green-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center gap-2 ${
          isMission2Complete
            ? 'shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        Next <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission3 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-green-600 dark:text-green-400 mb-6 text-center">
        Mission 3 — Why Do Teens Smoke?
      </h2>
      <p className="text-zinc-900 dark:text-white font-bold text-lg mb-6 text-center">
        Are these common reasons teens smoke? (True or False)
      </p>
      
      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        {[
          { id: 'peer', icon: '👥', title: 'Peer pressure' },
          { id: 'cool', icon: '😎', title: 'Wanting to look cool' },
          { id: 'curiosity', icon: '🤔', title: 'Curiosity' },
          { id: 'stress', icon: '😫', title: 'Stress' },
          { id: 'social', icon: '📱', title: 'Social environment' },
        ].map(q => renderQuizCard(q, mission3Answers, handleMission3Answer))}
      </div>
      
      <button
        onClick={nextMission}
        disabled={!isMission3Complete}
        className={`font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center gap-2 ${
          isMission3Complete
            ? 'bg-green-500 hover:bg-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        Next <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission4 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-green-600 dark:text-green-400 mb-6 text-center">
        Mission 4 — Why Quitting Is Worth It
      </h2>
      <p className="text-zinc-900 dark:text-white font-bold text-lg mb-6 text-center">
        Is it True or False?
      </p>

      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        {[
          { id: 'm20', icon: '💗', title: 'After 20 minutes', desc: 'Your heart begins adjusting.' },
          { id: 'days', icon: '🌬️', title: 'Days to Weeks', desc: 'Breathing and circulation begin improving.' },
          { id: 'weeks', icon: '🏃', title: 'Weeks to Months', desc: 'You may feel fitter and more energetic.' },
          { id: 'everyday', icon: '💰', title: 'Every day', desc: 'You save money.' },
        ].map(q => renderQuizCard(q, mission4Answers, handleMission4Answer))}
      </div>

      <button
        onClick={nextMission}
        disabled={!isMission4Complete}
        className={`font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all flex items-center gap-2 ${
          isMission4Complete
            ? 'bg-green-500 hover:bg-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        Next <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission5 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-green-600 dark:text-green-400 mb-8 text-center flex flex-col items-center gap-2">
        Proactive Coping
        <span className="text-zinc-900 dark:text-white text-xl">THINK AHEAD 🧠</span>
      </h2>
      
      <div className="w-full max-w-lg mb-8 text-left bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700">
        <h3 className="text-green-600 dark:text-green-400 font-bold text-lg mb-2">If this happens...</h3>
        <p className="text-zinc-900 dark:text-white text-xl mb-6">My friends offer me a cigarette.</p>
        
        <h3 className="text-green-600 dark:text-green-400 font-bold text-lg mb-4">I will...</h3>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            Say "No, thanks."
          </li>
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            Move away for a while.
          </li>
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            Drink water.
          </li>
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            Talk to a friend.
          </li>
          <li className="flex items-center gap-3 text-zinc-200">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            Do another activity.
          </li>
        </ul>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8 text-center max-w-md font-medium">
        Planning before temptation happens is proactive coping.
      </p>

      <button
        onClick={nextMission}
        className="bg-green-500 hover:bg-green-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2"
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
                m === mission ? 'w-10 bg-green-400' : m < mission ? 'w-3 bg-green-500/50' : 'w-3 bg-zinc-100 dark:bg-zinc-800'
              }`}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-6 md:p-10 text-center shadow-2xl relative overflow-hidden">
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

