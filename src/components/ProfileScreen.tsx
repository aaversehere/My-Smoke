import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ProfileScreenProps {
  onComplete: () => void;
  respondentId: string;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onComplete, respondentId }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  // We can just keep local state for their choices for now, 
  // or pass them up if the parent needs them later.
  const [ageInput, setAgeInput] = useState('');
  const [smokeAgeInput, setSmokeAgeInput] = useState('');

  const nextStep = () => {
    if (step < 8) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleChoice = () => {
    // For choices, we automatically go to next step
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  const renderCardContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-sage-600 dark:text-sage-400 mb-4">
              {t('profile.s0.title')}
            </h2>
            <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-6 mb-8 w-full border border-zinc-300 dark:border-zinc-700">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-1 uppercase tracking-wider font-bold">{t('profile.s0.codeLabel')}</p>
              <p className="text-zinc-900 dark:text-white text-2xl font-mono tracking-wider">{respondentId}</p>
            </div>
            <button
              onClick={nextStep}
              className="bg-sage-500 hover:bg-sage-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(92,131,88,0.3)] flex items-center gap-2"
            >
              {t('profile.s0.continue')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">
              {t('profile.s1.title')}
            </h2>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {['15', '16', '17', '18', t('profile.s1.other')].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-sage-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">{t('profile.s2.title')}</h2>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {[t('profile.s2.male'), t('profile.s2.female'), t('profile.s2.preferNot'), t('profile.s2.other')].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-sage-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">{t('profile.s3.title')}</h2>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {[t('profile.s3.g10'), t('profile.s3.g11'), t('profile.s3.g12')].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-sage-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">{t('profile.s4.title')}</h2>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {[t('profile.s4.everyday'), t('profile.s4.someDays'), t('profile.s4.rarely'), t('profile.s4.stopped')].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-sage-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6 text-center">{t('profile.s5.title')}</h2>
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {['1–5', '6–10', '11–20', t('profile.s5.moreThan20')].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-sage-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6 text-center">{t('profile.s6.title')}</h2>
            <div className="flex items-center gap-4 mb-8">
              <input 
                type="number"
                value={smokeAgeInput}
                onChange={(e) => setSmokeAgeInput(e.target.value)}
                className="bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 focus:border-sage-500 rounded-xl px-4 py-3 text-zinc-900 dark:text-white text-xl text-center w-24 outline-none transition-colors"
                placeholder={t('profile.s6.agePlaceholder')}
                min="5"
                max="30"
              />
              <span className="text-zinc-600 dark:text-zinc-400 text-lg">{t('profile.s6.years')}</span>
            </div>
            <button
              onClick={nextStep}
              disabled={!smokeAgeInput}
              className={`font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center gap-2 ${
                smokeAgeInput 
                  ? 'bg-sage-500 hover:bg-sage-400 text-black shadow-[0_0_20px_rgba(92,131,88,0.3)]'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
              }`}
            >
              {t('profile.s6.next')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">{t('profile.s7.title')}</h2>
            <div className="flex gap-4 w-full max-w-xs">
              {[t('profile.s7.yes'), t('profile.s7.no')].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="flex-1 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-sage-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 py-6 rounded-xl font-bold text-xl transition-all hover:scale-[1.02]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-500 w-full">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-sage-600 dark:text-sage-400 mb-4 flex items-center gap-3">
              <span className="text-4xl">🎉</span> {t('profile.s8.title')}
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg md:text-xl mb-8 text-center max-w-md">
              {t('profile.s8.desc')}
            </p>
            <div className="w-full max-w-sm bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-6 mb-8 border border-zinc-300 dark:border-zinc-700">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2 uppercase tracking-wider font-bold">{t('profile.s8.progress')}</p>
              <p className="text-sage-600 dark:text-sage-400 text-2xl font-bold font-['Montserrat']">{t('profile.s8.complete')}</p>
            </div>
            <button
              onClick={nextStep}
              className="bg-sage-500 hover:bg-sage-400 text-black font-['Montserrat'] font-bold text-lg py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(92,131,88,0.3)] flex items-center gap-2"
            >
              {t('profile.s8.startModule')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="w-full max-w-xl">
        
        {/* Progress indicator */}
        {step > 0 && step < 8 && (
          <div className="mb-8 flex justify-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s === step ? 'w-8 bg-sage-400' : s < step ? 'w-2 bg-sage-500/50' : 'w-2 bg-zinc-100 dark:bg-zinc-800'
                }`}
              />
            ))}
          </div>
        )}

        {/* Card Container */}
        <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          {renderCardContent()}
        </div>
      </div>
    </div>
  );
};
