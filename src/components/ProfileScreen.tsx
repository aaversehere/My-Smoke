import React, { useState } from 'react';

interface ProfileScreenProps {
  onComplete: () => void;
  respondentId: string;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onComplete, respondentId }) => {
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
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-green-600 dark:text-green-400 mb-4">
              Tell Us About Yourself 👋
            </h2>
            <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-6 mb-8 w-full border border-zinc-300 dark:border-zinc-700">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-1 uppercase tracking-wider font-bold">Your Participant Code</p>
              <p className="text-zinc-900 dark:text-white text-2xl font-mono tracking-wider">{respondentId}</p>
            </div>
            <button
              onClick={nextStep}
              className="bg-green-500 hover:bg-green-400 text-black font-['Montserrat'] font-bold text-lg py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2"
            >
              Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">
              How old are you?
            </h2>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {['15', '16', '17', '18', 'Other'].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-green-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
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
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">
              Gender
            </h2>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {['Male', 'Female', 'Prefer not to say', 'Other'].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-green-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
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
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">
              School Grade
            </h2>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {['Grade 10', 'Grade 11', 'Grade 12'].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-green-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
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
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">
              Do you currently smoke cigarettes?
            </h2>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {['Every day', 'Some days', 'Rarely', 'I have stopped smoking'].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-green-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
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
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6 text-center">
              How many cigarettes do you usually smoke per day?
            </h2>
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {['1–5', '6–10', '11–20', 'More than 20'].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-green-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-200 p-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
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
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6 text-center">
              At what age did you first try smoking?
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <input 
                type="number"
                value={smokeAgeInput}
                onChange={(e) => setSmokeAgeInput(e.target.value)}
                className="bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 focus:border-green-500 rounded-xl px-4 py-3 text-zinc-900 dark:text-white text-xl text-center w-24 outline-none transition-colors"
                placeholder="Age"
                min="5"
                max="30"
              />
              <span className="text-zinc-600 dark:text-zinc-400 text-lg">years</span>
            </div>
            <button
              onClick={nextStep}
              disabled={!smokeAgeInput}
              className={`font-['Montserrat'] font-bold text-lg py-3 px-10 rounded-full transition-all flex items-center gap-2 ${
                smokeAgeInput 
                  ? 'bg-green-500 hover:bg-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
              }`}
            >
              Next
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white mb-6">
              Have you ever tried to quit smoking?
            </h2>
            <div className="flex gap-4 w-full max-w-xs">
              {['Yes', 'No'].map((opt) => (
                <button
                  key={opt}
                  onClick={handleChoice}
                  className="flex-1 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 hover:border-green-500 hover:bg-zinc-100 dark:bg-zinc-800 text-zinc-200 py-6 rounded-xl font-bold text-xl transition-all hover:scale-[1.02]"
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
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-green-600 dark:text-green-400 mb-4 flex items-center gap-3">
              <span className="text-4xl">🎉</span> Profile Complete!
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg md:text-xl mb-8 text-center max-w-md">
              Now let's learn how you can prepare yourself for a smoke-free future.
            </p>
            <div className="w-full max-w-sm bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-6 mb-8 border border-zinc-300 dark:border-zinc-700">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2 uppercase tracking-wider font-bold">Progress:</p>
              <p className="text-green-600 dark:text-green-400 text-2xl font-bold font-['Montserrat']">20% COMPLETE</p>
            </div>
            <button
              onClick={nextStep}
              className="bg-green-500 hover:bg-green-400 text-black font-['Montserrat'] font-bold text-lg py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2"
            >
              START THE MODULE
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
                  s === step ? 'w-8 bg-green-400' : s < step ? 'w-2 bg-green-500/50' : 'w-2 bg-zinc-100 dark:bg-zinc-800'
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
