import React from 'react';
import { UserStats } from '../types';

interface SnapshotScreenProps {
  stats: UserStats;
  onProceed: () => void;
  onRetakeQuest: () => void;
}

export const SnapshotScreen: React.FC<SnapshotScreenProps> = ({
  stats,
  onProceed,
  onRetakeQuest,
}) => {
  return (
    <div className="flex flex-col w-full gap-8 relative z-10 pb-12 pt-4 px-6 md:px-12 lg:px-24 min-h-[calc(100vh-80px)]">
      {/* Celebration Header */}
      <div className="flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-xl border border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 400 200" width="100%" xmlns="http://www.w3.org/2000/svg">
            <circle className="animate-pulse" cx="50" cy="50" fill="#10b981" r="100" style={{ animationDuration: '4s' }} />
            <circle className="animate-pulse" cx="350" cy="150" fill="#3b82f6" r="120" style={{ animationDuration: '5s' }} />
          </svg>
        </div>

        <div className="relative z-10 bg-emerald-500/10 border border-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-1 shadow-sm transform transition-transform hover:scale-105 duration-300">
          <span className="text-4xl">🌱</span>
        </div>

        <h1 className="font-['Montserrat'] font-extrabold text-[26px] text-zinc-900 dark:text-white relative z-10">
          Quest Snapshot!
        </h1>

        <p className="font-['Quicksand'] font-medium text-base text-zinc-600 dark:text-zinc-400 max-w-sm relative z-10 leading-relaxed">
          Every journey starts with understanding where you are. Here’s a look at your current strengths and growth areas.
        </p>
      </div>      {/* Key Metrics (Growth Framing) */}
      <div className="grid grid-cols-2 gap-4">
        {/* Coping Strength */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden group border border-zinc-200 dark:border-zinc-800">
          <div className="absolute top-0 inset-x-0 h-1 bg-amber-500 group-hover:h-2 transition-all duration-300" />
          <span className="material-symbols-outlined text-amber-400 text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
            shield
          </span>
          <span className="font-['Montserrat'] font-bold text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
            Coping Strength
          </span>
          <span className="font-['Montserrat'] font-extrabold text-xl text-amber-400">
            {stats.copingStrength}
          </span>
        </div>

        {/* Confidence Level */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden group border border-zinc-200 dark:border-zinc-800">
          <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500 group-hover:h-2 transition-all duration-300" />
          <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
            trending_up
          </span>
          <span className="font-['Montserrat'] font-bold text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">
            Confidence Level
          </span>
          <span className="font-['Montserrat'] font-extrabold text-xl text-emerald-600 dark:text-emerald-400">
            {stats.confidenceLevel}
          </span>
        </div>
      </div>

      {/* Domain Breakdown (PCSC) */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 relative overflow-hidden border border-zinc-200 dark:border-zinc-800">
        <div className="absolute top-0 inset-x-0 h-1 bg-blue-500" />
        
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-blue-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            analytics
          </span>
          <h2 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white">
            Skill Breakdown
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Skill 1: Support Seeking */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="font-['Quicksand'] font-bold text-zinc-200">Support Seeking</span>
              <span className="font-['Montserrat'] font-bold text-xs uppercase text-blue-400">
                {stats.supportSeekingScore >= 75 ? 'High' : stats.supportSeekingScore >= 40 ? 'Moderate' : 'Growing'}
              </span>
            </div>
            <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700/50">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
                style={{ width: `${stats.supportSeekingScore}%` }} 
              />
            </div>
          </div>

          {/* Skill 2: Reflective Coping */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="font-['Quicksand'] font-bold text-zinc-200">Reflective Coping</span>
              <span className="font-['Montserrat'] font-bold text-xs uppercase text-amber-400">
                {stats.reflectiveCopingScore >= 75 ? 'High' : stats.reflectiveCopingScore >= 45 ? 'Moderate' : 'Growing'}
              </span>
            </div>
            <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700/50">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
                style={{ width: `${stats.reflectiveCopingScore}%` }} 
              />
            </div>
          </div>

          {/* Skill 3: Strategic Coping */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="font-['Quicksand'] font-bold text-zinc-200">Strategic Coping</span>
              <span className="font-['Montserrat'] font-bold text-xs uppercase text-emerald-600 dark:text-emerald-400">
                {stats.strategicCopingScore >= 75 ? 'High' : stats.strategicCopingScore >= 45 ? 'Moderate' : 'Growing'}
              </span>
            </div>
            <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700/50">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
                style={{ width: `${stats.strategicCopingScore}%` }} 
              />
            </div>
          </div>

          {/* Skill 4: Proactive Coping */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="font-['Quicksand'] font-bold text-zinc-200">Proactive Coping</span>
              <span className="font-['Montserrat'] font-bold text-xs uppercase text-purple-400">
                {stats.proactiveCopingScore >= 75 ? 'High' : stats.proactiveCopingScore >= 45 ? 'Moderate' : 'Growing'}
              </span>
            </div>
            <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700/50">
              <div 
                className="h-full bg-purple-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
                style={{ width: `${stats.proactiveCopingScore}%` }} 
              />
            </div>
          </div>

          {/* Skill 5: Avoidance Coping */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="font-['Quicksand'] font-bold text-zinc-200">Avoidance Coping</span>
              <span className="font-['Montserrat'] font-bold text-xs uppercase text-red-400">
                {stats.avoidanceCopingScore >= 75 ? 'High' : stats.avoidanceCopingScore >= 45 ? 'Moderate' : 'Needs Focus'}
              </span>
            </div>
            <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700/50">
              <div 
                className="h-full bg-red-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(239,68,68,0.5)]" 
                style={{ width: `${stats.avoidanceCopingScore}%` }} 
              />
            </div>
          </div>

          {/* Skill 6: Preventive Coping */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="font-['Quicksand'] font-bold text-zinc-200">Preventive Coping</span>
              <span className="font-['Montserrat'] font-bold text-xs uppercase text-teal-400">
                {stats.preventiveCopingScore >= 75 ? 'High' : stats.preventiveCopingScore >= 45 ? 'Moderate' : 'Growing'}
              </span>
            </div>
            <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700/50">
              <div 
                className="h-full bg-teal-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(20,184,166,0.5)]" 
                style={{ width: `${stats.preventiveCopingScore}%` }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feedback / Insight Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-md relative overflow-hidden flex flex-col gap-4 border border-zinc-200 dark:border-zinc-800">
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none text-emerald-600 dark:text-emerald-400">
          <span className="material-symbols-outlined text-[120px]">psychiatry</span>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl">lightbulb</span>
          </div>
          <h3 className="font-['Montserrat'] font-bold text-2xl text-zinc-900 dark:text-white">Insight</h3>
        </div>

        <p className="font-['Quicksand'] font-medium text-lg text-zinc-700 dark:text-zinc-300 relative z-10 italic leading-relaxed">
          "Your Coping Skills Are Still Growing — You may still need more preparation and support... Small steps can make a big difference."
        </p>
      </div>

      {/* Action CTA */}
      <div className="mt-2 pb-4 flex flex-col gap-3">
        <button 
          onClick={onProceed}
          className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-black font-['Montserrat'] font-extrabold text-lg rounded-full shadow-[0_8px_20px_rgba(16,185,129,0.3)] transform transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>CREATE MY ACTION PLAN</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>

        <button
          onClick={onRetakeQuest}
          className="w-full py-2 text-sm text-zinc-600 dark:text-zinc-400 font-['Montserrat'] font-bold hover:text-emerald-600 dark:text-emerald-400 transition-colors text-center cursor-pointer"
        >
          ↺ Re-assess Questions
        </button>
      </div>
    </div>
  );
};
