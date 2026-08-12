import React, { useState, useEffect } from 'react';
import { UserStats } from '../types';

interface ActionPlanScreenProps {
  stats: UserStats;
  onSavePlan: (triggers: string[], toolkit: string[]) => void;
}

export const ActionPlanScreen: React.FC<ActionPlanScreenProps> = ({ stats, onSavePlan }) => {
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [selectedToolkit, setSelectedToolkit] = useState<string[]>([]);

  // Craving Timer state
  const [timerActive, setTimerActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(600); // 10 minutes

  useEffect(() => {
    let interval: any = null;
    if (timerActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, secondsLeft]);

  const toggleTrigger = (item: string) => {
    if (selectedTriggers.includes(item)) {
      setSelectedTriggers(selectedTriggers.filter((t) => t !== item));
    } else {
      setSelectedTriggers([...selectedTriggers, item]);
    }
  };

  const toggleTool = (item: string) => {
    if (selectedToolkit.includes(item)) {
      setSelectedToolkit(selectedToolkit.filter((t) => t !== item));
    } else {
      setSelectedToolkit([...selectedToolkit, item]);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="flex flex-col w-full gap-8 relative z-10 pb-16 pt-2 px-6 md:px-12 lg:px-24 min-h-[calc(100vh-80px)]">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2 mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-full shadow-sm">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          <span className="font-['Montserrat'] font-bold text-xs uppercase tracking-wider">
            Personal Action Plan
          </span>
        </div>
        <h1 className="font-['Montserrat'] font-extrabold text-[26px] text-zinc-900 dark:text-white">
          My SmokeFree Quest Plan
        </h1>
        <p className="font-['Quicksand'] font-medium text-base text-zinc-600 dark:text-zinc-400 max-w-xs">
          Your customized roadmap to conquer cravings and stay smoke-free.
        </p>
      </div>



      {/* Trigger Checklist */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 shadow-lg border border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
        <h3 className="font-['Montserrat'] font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-amber-400">warning</span>
          My Key Triggers
        </h3>
        <p className="font-['Quicksand'] text-xs text-zinc-600 dark:text-zinc-400">
          Select situations where you feel the strongest urge:
        </p>

        <div className="grid grid-cols-2 gap-2 mt-1">
          {[
            'Morning Coffee',
            'After Meals',
            'Driving / Commute',
            'Stress / Work Pressure',
            'Social Gathering',
            'Boredom',
          ].map((trigger) => {
            const isChecked = selectedTriggers.includes(trigger);
            return (
              <button
                key={trigger}
                onClick={() => toggleTrigger(trigger)}
                className={`p-3 rounded-xl border text-xs font-['Quicksand'] font-bold text-left transition-all flex items-center justify-between cursor-pointer ${
                  isChecked
                    ? 'bg-amber-500/15 border-amber-500/60 text-amber-300'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 border-zinc-300 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:bg-zinc-800'
                }`}
              >
                <span>{trigger}</span>
                <span className="material-symbols-outlined text-sm">
                  {isChecked ? 'check_circle' : 'add_circle_outline'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Coping Toolkit */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 shadow-lg border border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
        <h3 className="font-['Montserrat'] font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-400">handshake</span>
          My Coping Toolkit
        </h3>
        <p className="font-['Quicksand'] text-xs text-zinc-600 dark:text-zinc-400">
          Tools to replace smoking when a trigger happens:
        </p>

        <div className="flex flex-col gap-2 mt-1">
          {[
            'Deep Breathing (4-7-8)',
            'Ice Water Sip',
            'Walk Outside',
            'Call a Support Buddy',
            'Sugar-free Mints / Gum',
            'Fidget Ring / Stress Ball',
          ].map((tool) => {
            const isChecked = selectedToolkit.includes(tool);
            return (
              <button
                key={tool}
                onClick={() => toggleTool(tool)}
                className={`p-3 rounded-xl border text-xs font-['Quicksand'] font-bold text-left transition-all flex items-center justify-between cursor-pointer ${
                  isChecked
                    ? 'bg-blue-500/15 border-blue-500/60 text-blue-300'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 border-zinc-300 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:bg-zinc-800'
                }`}
              >
                <span>{tool}</span>
                <span className="material-symbols-outlined text-sm">
                  {isChecked ? 'task_alt' : 'radio_button_unchecked'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-3 pt-2">

        <button
          onClick={() => onSavePlan(selectedTriggers, selectedToolkit)}
          className="w-full py-3 text-sm text-zinc-600 dark:text-zinc-400 font-['Montserrat'] font-bold hover:text-green-600 dark:text-green-400 transition-colors text-center cursor-pointer"
        >
          🏠 Save Plan & Return Home
        </button>
      </div>
    </div>
  );
};
