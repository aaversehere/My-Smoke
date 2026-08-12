import React, { useState, useEffect } from 'react';
import { SELF_EFFICACY_QUESTIONS } from '../data/selfEfficacyQuestions';

interface SelfEfficacyScreenProps {
  onComplete: (selfEfficacyAnswers: Record<number, number>) => void;
}

export const SelfEfficacyScreen: React.FC<SelfEfficacyScreenProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [localSelected, setLocalSelected] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const currentQuestion = SELF_EFFICACY_QUESTIONS[currentQuestionIndex];
  
  useEffect(() => {
    setLocalSelected(answers[currentQuestion.id] || null);
  }, [currentQuestion.id, answers]);

  const handleSelect = (val: number) => {
    setLocalSelected(val);
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }));
  };

  const handleNext = () => {
    if (!localSelected) return;
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      if (currentQuestionIndex >= SELF_EFFICACY_QUESTIONS.length - 1) {
        onComplete(answers);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 300);
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const progressCount = currentQuestionIndex + 1;
  const totalCount = SELF_EFFICACY_QUESTIONS.length;
  const progressPercent = Math.round((progressCount / totalCount) * 100);

  return (
    <div className="flex flex-col w-full relative pt-2 px-6 md:px-12 lg:px-24 pb-24 min-h-[calc(100vh-80px)]">
      {/* Top Header info */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-['Montserrat'] font-bold text-blue-400 text-sm tracking-wider uppercase">
              Self-Efficacy Assessment
            </span>
          </div>
          <span className="font-['Quicksand'] font-medium text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            {currentQuestion.category}
          </span>
        </div>
        <span className="font-['Quicksand'] font-bold text-zinc-600 dark:text-zinc-400">
          {progressCount} / {totalCount}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2.5 mb-8 overflow-hidden flex relative border border-zinc-300 dark:border-zinc-700/50">
        <div 
          className="bg-blue-500 h-full rounded-full transition-all duration-[600ms] ease-out shadow-[0_0_12px_rgba(59,130,246,0.5)]" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Center Question Card */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10 w-full">
        <div className="absolute inset-0 bg-blue-500/10 rounded-[32px] -z-10 blur-2xl opacity-60 pointer-events-none" />
        
        <div className="bg-white dark:bg-zinc-900 rounded-[32px] shadow-2xl w-full p-6 transition-transform duration-300 transform scale-100 mb-4 relative overflow-hidden border border-zinc-200 dark:border-zinc-800">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500" />
          
          {/* Question Title */}
          <h2 className="font-['Montserrat'] font-bold text-[22px] sm:text-[26px] text-zinc-900 dark:text-white mb-8 leading-tight mt-4">
            {currentQuestion.text}
          </h2>

          {/* Vertical Options */}
          <div className="flex flex-col gap-3 w-full">
            {[
              { val: 1, text: "Not at all sure" },
              { val: 2, text: "Not very sure" },
              { val: 3, text: "More or less sure" },
              { val: 4, text: "Fairly sure" },
              { val: 5, text: "Absolutely sure" }
            ].map((opt) => (
              <button
                key={opt.val}
                onClick={() => handleSelect(opt.val)}
                className={`relative flex items-center justify-between p-4 rounded-xl transition-all duration-200 active:scale-[0.98] focus:outline-none cursor-pointer border ${
                  localSelected === opt.val
                    ? 'bg-blue-500/20 border-blue-500 shadow-md scale-[1.01] z-10 ring-1 ring-blue-500/40'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700/60 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    localSelected === opt.val ? 'bg-blue-500 text-black' : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    {opt.val}
                  </div>
                  <span className={`font-['Quicksand'] font-bold ${localSelected === opt.val ? 'text-blue-300' : 'text-zinc-700 dark:text-zinc-300'}`}>
                    {opt.text}
                  </span>
                </div>
                {localSelected === opt.val && (
                  <span className="material-symbols-outlined text-blue-400">check_circle</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Question Navigation bar */}
        <div className="flex items-center justify-start w-full px-2 mb-4 text-xs font-['Montserrat'] font-bold text-zinc-600 dark:text-zinc-400">
          <button 
            disabled={currentQuestionIndex === 0}
            onClick={handlePrev}
            className="flex items-center gap-1 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Previous
          </button>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-auto w-full sticky bottom-0 pb-safe z-20">
        <button
          onClick={handleNext}
          disabled={!localSelected || isSaving}
          className={`w-full h-14 font-['Montserrat'] font-bold text-base rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
            localSelected && !isSaving
              ? 'bg-blue-500 text-black font-extrabold shadow-[0_8px_20px_rgba(59,130,246,0.3)] hover:bg-blue-400 hover:scale-[0.99] active:scale-95 cursor-pointer'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 opacity-60 cursor-not-allowed border border-zinc-300 dark:border-zinc-700/50'
          }`}
        >
          {isSaving ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[20px]">autorenew</span>
              <span>Saving Progress...</span>
            </>
          ) : (
            <>
              <span>{currentQuestionIndex === totalCount - 1 ? 'Complete Assessment' : 'Continue'}</span>
              <span className="material-symbols-outlined text-[20px]">{currentQuestionIndex === totalCount - 1 ? 'check' : 'arrow_forward'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
