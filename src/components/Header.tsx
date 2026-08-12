import React from 'react';
import { ScreenMode } from '../types';

interface HeaderProps {
  currentScreen: ScreenMode;
  onNavigate: (screen: ScreenMode) => void;
  progressPercent: number;
  respondentId: string;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  progressPercent,
  respondentId,
  theme,
  toggleTheme,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-xl pt-safe border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all">
      {/* Primary Header Row */}
      <div className="h-14 px-6 flex items-center justify-between w-full">
        <button 
          onClick={() => onNavigate('welcome')}
          className="font-['Montserrat'] font-bold text-xl text-green-600 dark:text-green-400 flex items-center gap-1.5 hover:opacity-90 transition-opacity"
        >
          SmokeFree Quest
        </button>

        <div className="flex items-center gap-2">
          <span className="font-['Montserrat'] font-bold text-[12px] uppercase text-green-600 dark:text-green-400 tracking-wider bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
            {respondentId}
          </span>
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center shadow hover:scale-105 active:scale-95 transition-all"
            title="Toggle Light/Dark Mode"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            onClick={() => onNavigate('snapshot')}
            title="View User Profile & Snapshot"
            className="w-8 h-8 rounded-full bg-green-500 text-white dark:text-black flex items-center justify-center font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>

      {/* Quest Navigation Pills bar */}
      <div className="px-4 py-1.5 bg-zinc-50/90 dark:bg-zinc-900/90 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-start md:justify-center gap-2 overflow-x-auto scrollbar-hide text-xs font-['Montserrat'] font-bold w-full">
        <button
          onClick={() => onNavigate('welcome')}
          className={`whitespace-nowrap flex-shrink-0 px-3 py-1 rounded-full transition-all ${
            currentScreen === 'welcome' 
              ? 'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 shadow-xs' 
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          Welcome
        </button>
        <button
          onClick={() => onNavigate('missions')}
          className={`whitespace-nowrap flex-shrink-0 px-3 py-1 rounded-full transition-all ${
            currentScreen === 'missions' 
              ? 'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 shadow-xs' 
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          Missions
        </button>
        <button
          onClick={() => onNavigate('game2')}
          className={`whitespace-nowrap flex-shrink-0 px-3 py-1 rounded-full transition-all ${
            currentScreen === 'game2' 
              ? 'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 shadow-xs' 
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          Game
        </button>
        <button
          onClick={() => onNavigate('assessment')}
          className={`whitespace-nowrap flex-shrink-0 px-3 py-1 rounded-full transition-all ${
            currentScreen === 'assessment' 
              ? 'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 shadow-xs' 
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          Assessment
        </button>
        <button
          onClick={() => onNavigate('snapshot')}
          className={`whitespace-nowrap flex-shrink-0 px-3 py-1 rounded-full transition-all ${
            currentScreen === 'snapshot' 
              ? 'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 shadow-xs' 
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          Snapshot
        </button>
        <button
          onClick={() => onNavigate('action_plan')}
          className={`whitespace-nowrap flex-shrink-0 px-3 py-1 rounded-full transition-all ${
            currentScreen === 'action_plan' 
              ? 'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 shadow-xs' 
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          Action Plan
        </button>
      </div>

      {/* Progress Bar Header */}
      <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-500 rounded-r-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          style={{ width: `${Math.min(100, Math.max(5, progressPercent))}%` }}
        />
      </div>
    </header>
  );
};
