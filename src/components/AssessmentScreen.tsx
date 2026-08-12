import React, { useState, useEffect } from 'react';
import { Question, EmojiValue } from '../types';

interface AssessmentScreenProps {
  questions: Question[];
  currentQuestionIndex: number;
  onAnswer: (questionId: number, value: EmojiValue) => void;
  answers: Record<number, EmojiValue>;
  onNext: () => void;
  onPrev: () => void;
  onCompleteQuest: () => void;
}

export const AssessmentScreen: React.FC<AssessmentScreenProps> = ({
  questions,
  currentQuestionIndex,
  onAnswer,
  answers,
  onNext,
  onPrev,
  onCompleteQuest,
}) => {
  const currentQuestion = questions[currentQuestionIndex] || questions[0]; // Default to question #1 if out of range
  const selectedValue = answers[currentQuestion.id] || null;
  const [localSelected, setLocalSelected] = useState<EmojiValue | null>(selectedValue);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setLocalSelected(answers[currentQuestion.id] || null);
  }, [currentQuestion.id, answers]);

  const handleSelect = (val: EmojiValue) => {
    setLocalSelected(val);
    onAnswer(currentQuestion.id, val);
  };

  const handleContinue = () => {
    if (!localSelected) return;
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      if (currentQuestionIndex >= questions.length - 1) {
        onCompleteQuest();
      } else {
        onNext();
      }
    }, 400);
  };

  const progressCount = currentQuestionIndex + 1;
  const totalCount = questions.length;
  const progressPercent = Math.round((progressCount / totalCount) * 100);

  return (
    <div className="flex flex-col w-full relative pt-2 px-6 md:px-12 lg:px-24 pb-24 min-h-[calc(100vh-80px)]" id="assessment-container">
      {/* Top Header info */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-['Montserrat'] font-bold text-emerald-600 dark:text-emerald-400 text-sm tracking-wider uppercase">
            Quest Progress
          </span>
        </div>
        <span className="font-['Quicksand'] font-bold text-zinc-600 dark:text-zinc-400">
          {progressCount} / {totalCount}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2.5 mb-8 overflow-hidden flex relative border border-zinc-300 dark:border-zinc-700/50">
        <div 
          className="bg-emerald-500 h-full rounded-full transition-all duration-[600ms] ease-out shadow-[0_0_12px_rgba(16,185,129,0.5)]" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Center Question Card */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10 w-full">
        <div className="absolute inset-0 bg-emerald-500/10 rounded-[32px] -z-10 blur-2xl opacity-60 pointer-events-none" />
        
        <div className="bg-white dark:bg-zinc-900 rounded-[32px] shadow-2xl w-full p-6 transition-transform duration-300 transform scale-100 mb-4 relative overflow-hidden border border-zinc-200 dark:border-zinc-800">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500" />
          
          {/* Category Icon */}
          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm rotate-3">
            <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {currentQuestion.icon || 'psychology'}
            </span>
          </div>

          {/* Question Title */}
          <h2 className="font-['Montserrat'] font-bold text-[22px] sm:text-[26px] text-zinc-900 dark:text-white mb-8 leading-tight">
            "{currentQuestion.text}"
          </h2>

          {/* Emoji Scale Options */}
          <div className="grid grid-cols-2 gap-4 w-full" id="emoji-scale">
            {/* Option 1: Not true at all */}
            <button
              onClick={() => handleSelect(1)}
              className={`emoji-btn relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-200 active:scale-95 group focus:outline-none cursor-pointer ${
                localSelected === 1
                  ? 'bg-emerald-500/20 border-2 border-emerald-500 shadow-lg scale-105 z-10 ring-2 ring-emerald-500/40'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/60'
              }`}
            >
              <span className={`text-4xl transition-transform duration-300 ${localSelected === 1 ? 'scale-125' : 'group-hover:scale-110'}`}>
                😕
              </span>
              <span className={`font-['Quicksand'] text-sm text-center leading-tight ${localSelected === 1 ? 'text-emerald-300 font-bold' : 'text-zinc-600 dark:text-zinc-400'}`}>
                Not true at all
              </span>
            </button>

            {/* Option 2: Barely true */}
            <button
              onClick={() => handleSelect(2)}
              className={`emoji-btn relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-200 active:scale-95 group focus:outline-none cursor-pointer ${
                localSelected === 2
                  ? 'bg-emerald-500/20 border-2 border-emerald-500 shadow-lg scale-105 z-10 ring-2 ring-emerald-500/40'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/60'
              }`}
            >
              <span className={`text-4xl transition-transform duration-300 ${localSelected === 2 ? 'scale-125' : 'group-hover:scale-110'}`}>
                🙂
              </span>
              <span className={`font-['Quicksand'] text-sm text-center leading-tight ${localSelected === 2 ? 'text-emerald-300 font-bold' : 'text-zinc-600 dark:text-zinc-400'}`}>
                Barely true
              </span>
            </button>

            {/* Option 3: Somewhat true */}
            <button
              onClick={() => handleSelect(3)}
              className={`emoji-btn relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-200 active:scale-95 group focus:outline-none cursor-pointer ${
                localSelected === 3
                  ? 'bg-emerald-500/20 border-2 border-emerald-500 shadow-lg scale-105 z-10 ring-2 ring-emerald-500/40'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/60'
              }`}
            >
              <span className={`text-4xl transition-transform duration-300 ${localSelected === 3 ? 'scale-125' : 'group-hover:scale-110'}`}>
                😊
              </span>
              <span className={`font-['Quicksand'] text-sm text-center leading-tight ${localSelected === 3 ? 'text-emerald-300 font-bold' : 'text-zinc-600 dark:text-zinc-400'}`}>
                Somewhat true
              </span>
            </button>

            {/* Option 4: Completely true */}
            <button
              onClick={() => handleSelect(4)}
              className={`emoji-btn relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-200 active:scale-95 group focus:outline-none cursor-pointer ${
                localSelected === 4
                  ? 'bg-emerald-500/20 border-2 border-emerald-500 shadow-lg scale-105 z-10 ring-2 ring-emerald-500/40'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/60'
              }`}
            >
              <span className={`text-4xl transition-transform duration-300 ${localSelected === 4 ? 'scale-125' : 'group-hover:scale-110'}`}>
                💪
              </span>
              <span className={`font-['Quicksand'] text-sm text-center leading-tight ${localSelected === 4 ? 'text-emerald-300 font-bold' : 'text-zinc-600 dark:text-zinc-400'}`}>
                Completely true
              </span>
            </button>
          </div>
        </div>

        {/* Quick Question Navigation bar */}
        <div className="flex items-center justify-between w-full px-2 mb-4 text-xs font-['Montserrat'] font-bold text-zinc-600 dark:text-zinc-400">
          <button 
            disabled={currentQuestionIndex === 0}
            onClick={onPrev}
            className="flex items-center gap-1 hover:text-emerald-600 dark:text-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Previous
          </button>

          <button 
            onClick={onCompleteQuest}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-300 underline cursor-pointer transition-colors"
          >
            View Quest Snapshot ➔
          </button>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-auto w-full sticky bottom-0 pb-safe bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent pt-4 z-20">
        <button
          onClick={handleContinue}
          disabled={!localSelected || isSaving}
          className={`w-full h-14 font-['Montserrat'] font-bold text-base rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
            localSelected && !isSaving
              ? 'bg-emerald-500 text-black font-extrabold shadow-[0_8px_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:scale-[0.99] active:scale-95 cursor-pointer'
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
              <span>Continue Journey</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
