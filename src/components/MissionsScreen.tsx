import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MissionsScreenProps {
  onComplete: () => void;
}

export const MissionsScreen: React.FC<MissionsScreenProps> = ({ onComplete }) => {
  const { t } = useTranslation();
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
              ? 'bg-sage-500 text-black shadow-[0_0_10px_rgba(92,131,88,0.5)]' 
              : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-600'
          }`}
        >{t('missions.true')}</button>
        <button 
          onClick={() => handleAnswer(q.id, false)}
          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
            answers[q.id] === false 
              ? 'bg-red-500 text-zinc-900 dark:text-white shadow-[0_0_10px_rgba(239,68,68,0.5)]' 
              : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-600'
          }`}
        >{t('missions.false')}</button>
      </div>
      
      {answers[q.id] !== null && (
        <div className={`text-sm font-bold animate-in fade-in ${answers[q.id] === true ? 'text-sage-600 dark:text-sage-400' : 'text-amber-400'}`}>
          {answers[q.id] === true 
            ? t('missions.correct') 
            : t('missions.incorrect')}
        </div>
      )}
    </div>
  );

  const renderMission1 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-sage-600 dark:text-sage-400 mb-6 flex items-center justify-center gap-3 text-center">
        {t('missions.m1.title')} <span className="text-3xl">🚬</span>
      </h2>
      <div className="flex justify-center mb-6 w-24 h-24 bg-zinc-100 dark:bg-zinc-800/80 rounded-full items-center">
         <span className="material-symbols-outlined text-5xl text-sage-500">pulmonology</span>
      </div>
      <p className="text-zinc-900 dark:text-white mb-6 font-bold text-lg">{t('missions.trueOrFalse')}</p>
      
      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        {[
          { id: 'nicotine', title: t('missions.m1.nicotine.title'), desc: t('missions.m1.nicotine.desc') },
          { id: 'tar', title: t('missions.m1.tar.title'), desc: t('missions.m1.tar.desc') },
          { id: 'co', title: t('missions.m1.co.title'), desc: t('missions.m1.co.desc') },
        ].map(q => renderQuizCard(q, mission1Answers, handleMission1Answer))}
      </div>
      
      <button
        onClick={nextMission}
        disabled={!isMission1Complete}
        className={`font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center justify-center gap-2 ${
          isMission1Complete
            ? 'bg-sage-500 hover:bg-sage-400 text-black shadow-[0_0_20px_rgba(92,131,88,0.3)] hover:scale-105'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        {t('missions.gotIt')} <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission2 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-sage-600 dark:text-sage-400 mb-6 text-center">
        {t('missions.m2.title')}
      </h2>
      <p className="text-zinc-900 dark:text-white mb-6 font-bold text-lg">True or False?</p>
      
      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        {[
          { id: 'breathing', icon: '😮‍💨', title: t('missions.m2.breathing.title'), desc: t('missions.m2.breathing.desc') },
          { id: 'heart', icon: '🫀', title: t('missions.m2.heart.title'), desc: t('missions.m2.heart.desc') },
          { id: 'focus', icon: '🧠', title: t('missions.m2.focus.title'), desc: t('missions.m2.focus.desc') },
          { id: 'energy', icon: '🏃', title: t('missions.m2.energy.title'), desc: t('missions.m2.energy.desc') },
        ].map(q => renderQuizCard(q, mission2Answers, handleMission2Answer))}
      </div>
      
      <button
        onClick={nextMission}
        disabled={!isMission2Complete}
        className={`bg-sage-500 hover:bg-sage-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center gap-2 ${
          isMission2Complete
            ? 'shadow-[0_0_20px_rgba(92,131,88,0.3)] hover:scale-105'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        {t('missions.next')} <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission3 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-sage-600 dark:text-sage-400 mb-6 text-center">
        {t('missions.m3.title')}
      </h2>
      <p className="text-zinc-900 dark:text-white font-bold text-lg mb-6 text-center">
        {t('missions.m3.subtitle')}
      </p>
      
      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        {[
          { id: 'peer', icon: '👥', title: t('missions.m3.peer.title') },
          { id: 'cool', icon: '😎', title: t('missions.m3.cool.title') },
          { id: 'curiosity', icon: '🤔', title: t('missions.m3.curiosity.title') },
          { id: 'stress', icon: '😫', title: t('missions.m3.stress.title') },
          { id: 'social', icon: '📱', title: t('missions.m3.social.title') },
        ].map(q => renderQuizCard(q, mission3Answers, handleMission3Answer))}
      </div>
      
      <button
        onClick={nextMission}
        disabled={!isMission3Complete}
        className={`font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center gap-2 ${
          isMission3Complete
            ? 'bg-sage-500 hover:bg-sage-400 text-black shadow-[0_0_20px_rgba(92,131,88,0.3)] hover:scale-105'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        {t('missions.next')} <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission4 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-sage-600 dark:text-sage-400 mb-6 text-center">
        {t('missions.m4.title')}
      </h2>
      <p className="text-zinc-900 dark:text-white font-bold text-lg mb-6 text-center">{t('missions.m4.subtitle')}</p>

      <div className="flex flex-col gap-4 w-full max-w-lg mb-8 text-left">
        {[
          { id: 'm20', icon: '💗', title: t('missions.m4.m20.title'), desc: t('missions.m4.m20.desc') },
          { id: 'days', icon: '🌬️', title: t('missions.m4.days.title'), desc: t('missions.m4.days.desc') },
          { id: 'weeks', icon: '🏃', title: t('missions.m4.weeks.title'), desc: t('missions.m4.weeks.desc') },
          { id: 'everyday', icon: '💰', title: t('missions.m4.everyday.title'), desc: t('missions.m4.everyday.desc') },
        ].map(q => renderQuizCard(q, mission4Answers, handleMission4Answer))}
      </div>

      <button
        onClick={nextMission}
        disabled={!isMission4Complete}
        className={`font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all flex items-center gap-2 ${
          isMission4Complete
            ? 'bg-sage-500 hover:bg-sage-400 text-black shadow-[0_0_20px_rgba(92,131,88,0.3)] hover:scale-105'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        {t('missions.next')} <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );

  const renderMission5 = () => (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-sage-600 dark:text-sage-400 mb-8 text-center flex flex-col items-center gap-2">
        {t('missions.m5.title')}
        <span className="text-zinc-900 dark:text-white text-xl">{t('missions.m5.thinkAhead')}</span>
      </h2>
      
      <div className="w-full max-w-lg mb-8 text-left bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700">
        <h3 className="text-sage-600 dark:text-sage-400 font-bold text-lg mb-2">{t('missions.m5.ifHappens')}</h3>
        <p className="text-zinc-900 dark:text-white text-xl mb-6">{t('missions.m5.situation')}</p>
        
        <h3 className="text-sage-600 dark:text-sage-400 font-bold text-lg mb-4">{t('missions.m5.iWill')}</h3>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
            <span className="material-symbols-outlined text-sage-500">check_circle</span>
            {t('missions.m5.action1')}
          </li>
          <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
            <span className="material-symbols-outlined text-sage-500">check_circle</span>
            {t('missions.m5.action2')}
          </li>
          <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
            <span className="material-symbols-outlined text-sage-500">check_circle</span>
            {t('missions.m5.action3')}
          </li>
          <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
            <span className="material-symbols-outlined text-sage-500">check_circle</span>
            {t('missions.m5.action4')}
          </li>
          <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
            <span className="material-symbols-outlined text-sage-500">check_circle</span>
            {t('missions.m5.action5')}
          </li>
        </ul>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8 text-center max-w-md font-medium">
        {t('missions.m5.conclusion')}
      </p>

      <button
        onClick={nextMission}
        className="bg-sage-500 hover:bg-sage-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(92,131,88,0.3)] flex items-center gap-2"
      >
        {t('missions.m5.startAssessment')} <span className="material-symbols-outlined">arrow_forward</span>
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
                m === mission ? 'w-10 bg-sage-400' : m < mission ? 'w-3 bg-sage-500/50' : 'w-3 bg-zinc-100 dark:bg-zinc-800'
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

