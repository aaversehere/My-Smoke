import React, { useState } from 'react';

interface GuidelinesScreenProps {
  onReady: () => void;
}

export const GuidelinesScreen: React.FC<GuidelinesScreenProps> = ({ onReady }) => {
  const [understood, setUnderstood] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const isReady = understood && agreed;

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="flex-1 w-full max-w-3xl py-10 md:py-16 flex flex-col justify-center">
        
        <div className="mb-8 md:mb-10 text-center md:text-left">
          <p className="text-green-600 dark:text-green-400 font-bold text-xs uppercase tracking-wider mb-2 font-['Montserrat']">
            GUIDELINES
          </p>
          <h2 className="font-['Montserrat'] font-extrabold text-3xl md:text-4xl text-zinc-900 dark:text-white mb-2">
            Before We Begin
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-sm md:text-base">
            Essential principles of privacy and user autonomy for your journey.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-8 md:mb-10">
          {/* Card 1 */}
          <div className="flex gap-4 items-start p-4 md:p-6 bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
            <div className="w-12 h-12 shrink-0 bg-green-500/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Confidential & Secure</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Everything you share remains strictly confidential. Data is used solely for your personal empowerment and growth.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-4 items-start p-4 md:p-6 bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
            <div className="w-12 h-12 shrink-0 bg-green-500/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined">tune</span>
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Full Autonomy</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                You progress at your own pace. Pause, adjust, or proceed whenever you are ready.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8 md:mb-10">
          {/* Checkbox 1 */}
          <label className="flex gap-4 items-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-100 dark:bg-zinc-800/50 transition-colors bg-white dark:bg-zinc-900/30 backdrop-blur-sm">
            <div className="relative flex items-center shrink-0">
              <input
                type="checkbox"
                className="peer appearance-none w-5 h-5 border-2 border-zinc-400 dark:border-zinc-600 rounded cursor-pointer checked:bg-green-500 checked:border-green-500 transition-all"
                checked={understood}
                onChange={(e) => setUnderstood(e.target.checked)}
              />
              <span className="material-symbols-outlined absolute text-black text-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                check
              </span>
            </div>
            <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">
              I understand how my information will be handled with discretion.
            </span>
          </label>

          {/* Checkbox 2 */}
          <label className="flex gap-4 items-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-100 dark:bg-zinc-800/50 transition-colors bg-white dark:bg-zinc-900/30 backdrop-blur-sm">
            <div className="relative flex items-center shrink-0">
              <input
                type="checkbox"
                className="peer appearance-none w-5 h-5 border-2 border-zinc-400 dark:border-zinc-600 rounded cursor-pointer checked:bg-green-500 checked:border-green-500 transition-all"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span className="material-symbols-outlined absolute text-black text-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                check
              </span>
            </div>
            <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">
              I agree to participate in this smoke-free quest edition.
            </span>
          </label>
        </div>

        <button
          onClick={onReady}
          disabled={!isReady}
          className={`w-full py-4 rounded-xl font-bold font-['Montserrat'] flex items-center justify-center gap-2 transition-all ${
            isReady
              ? 'bg-green-500 hover:bg-green-400 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] cursor-pointer'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-not-allowed'
          }`}
        >
          I'm Ready
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
