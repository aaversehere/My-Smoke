import React, { useState, useEffect } from 'react';
import { ScreenMode, EmojiValue, UserStats } from './types';
import { QUEST_QUESTIONS } from './data/questions';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { GuidelinesScreen } from './components/GuidelinesScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { MissionsScreen } from './components/MissionsScreen';
import { BeatCravingGame } from './components/BeatCravingGame';
import { AssessmentIntroScreen } from './components/AssessmentIntroScreen';
import { MiniGameScreen } from './components/MiniGameScreen';
import { AssessmentScreen } from './components/AssessmentScreen';
import { MicroBreakScreen } from './components/MicroBreakScreen';
import { SnapshotScreen } from './components/SnapshotScreen';
import { SelfEfficacyScreen } from './components/SelfEfficacyScreen';
import { ActionPlanScreen } from './components/ActionPlanScreen';
import { supabase } from './lib/supabase';
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenMode>('welcome');
  // Default question index set to 0 (Question #1)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Apply theme class to document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  // User identity
  const [userId, setUserId] = useState<string | null>(null);
  const [respondentId, setRespondentId] = useState<string>('RESP-001');

  // Initialize user
  useEffect(() => {
    const initUser = async () => {
      const storedUser = localStorage.getItem('smokefree_user');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          setUserId(user.id);
          setRespondentId(user.respondent_id);
          return;
        } catch (e) { }
      }

      // Generate a new respondent ID
      const newRespondentId = `RESP-${Math.floor(Math.random() * 90000) + 10000}`;
      setRespondentId(newRespondentId);

      // Insert into Supabase
      const { data, error } = await supabase
        .from('users')
        .insert([{ respondent_id: newRespondentId }])
        .select()
        .single();
      
      if (data && !error) {
        setUserId(data.id);
        localStorage.setItem('smokefree_user', JSON.stringify({
          id: data.id,
          respondent_id: newRespondentId
        }));
      }
    };
    initUser();
  }, []);
  
  // User answers map
  const [answers, setAnswers] = useState<Record<number, EmojiValue>>(() => {
    const saved = localStorage.getItem('smokefree_answers');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return {};
  });

  const [xp, setXp] = useState<number>(50);

  useEffect(() => {
    localStorage.setItem('smokefree_answers', JSON.stringify(answers));
  }, [answers]);

  const handleAnswer = (questionId: number, value: EmojiValue) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
    setXp((prev) => prev + 10);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUEST_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentScreen('micro_break');
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSaveAssessment = async (selfEfficacyAnswers: Record<number, number>) => {
    if (userId) {
      const stats = calculateStats();
      const combinedAnswers = { ...answers, ...selfEfficacyAnswers };
      await supabase.from('quest_results').insert([{
        user_id: userId,
        answers: combinedAnswers,
        coping_strength: stats.copingStrength,
        confidence_level: stats.confidenceLevel,
        support_seeking_score: stats.supportSeekingScore,
        reflective_coping_score: stats.reflectiveCopingScore,
        strategic_coping_score: stats.strategicCopingScore,
        proactive_coping_score: stats.proactiveCopingScore,
        avoidance_coping_score: stats.avoidanceCopingScore,
        preventive_coping_score: stats.preventiveCopingScore
      }]);
    }
    setCurrentScreen('snapshot');
  };

  const handleSavePlan = async (triggers: string[], toolkit: string[]) => {
    if (userId) {
      await supabase.from('action_plans').insert([{
        user_id: userId,
        selected_triggers: triggers,
        selected_toolkit: toolkit
      }]);
    }
    setCurrentScreen('welcome');
  };

  // Calculate scores based on answers
  const calculateStats = (): UserStats => {
    const answeredCount = Object.keys(answers).length;
    let supportSum = 85;
    let reflectiveSum = 50;
    let strategicSum = 30;
    let proactiveSum = 40;
    let avoidanceSum = 20;
    let preventiveSum = 60;

    if (answeredCount > 0) {
      let supTotal = 0, supCnt = 0;
      let refTotal = 0, refCnt = 0;
      let strTotal = 0, strCnt = 0;
      let proTotal = 0, proCnt = 0;
      let avoTotal = 0, avoCnt = 0;
      let preTotal = 0, preCnt = 0;

      QUEST_QUESTIONS.forEach((q) => {
        const val = answers[q.id];
        if (val) {
          if (q.category === 'Support Seeking') { supTotal += val; supCnt++; }
          else if (q.category === 'Reflective Coping') { refTotal += val; refCnt++; }
          else if (q.category === 'Strategic Coping') { strTotal += val; strCnt++; }
          else if (q.category === 'Proactive Coping') { proTotal += val; proCnt++; }
          else if (q.category === 'Avoidance Coping') { avoTotal += val; avoCnt++; }
          else if (q.category === 'Preventive Coping') { preTotal += val; preCnt++; }
        }
      });

      if (supCnt > 0) supportSum = Math.round((supTotal / (supCnt * 4)) * 100);
      if (refCnt > 0) reflectiveSum = Math.round((refTotal / (refCnt * 4)) * 100);
      if (strCnt > 0) strategicSum = Math.round((strTotal / (strCnt * 4)) * 100);
      if (proCnt > 0) proactiveSum = Math.round((proTotal / (proCnt * 4)) * 100);
      if (avoCnt > 0) avoidanceSum = Math.round((avoTotal / (avoCnt * 4)) * 100);
      if (preCnt > 0) preventiveSum = Math.round((preTotal / (preCnt * 4)) * 100);
    }

    return {
      respondentId: respondentId,
      xp: xp,
      level: Math.floor(xp / 100) + 1,
      copingStrength: strategicSum >= 60 ? 'Strong' : strategicSum >= 35 ? 'Developing' : 'Growing',
      confidenceLevel: supportSum >= 60 ? 'Strong' : 'Moderate',
      supportSeekingScore: supportSum,
      reflectiveCopingScore: reflectiveSum,
      strategicCopingScore: strategicSum,
      proactiveCopingScore: proactiveSum,
      avoidanceCopingScore: avoidanceSum,
      preventiveCopingScore: preventiveSum,
    };
  };

  const stats = calculateStats();

  // Progress percentage for header (question #14 is index 13 -> 14/36 = ~39%)
  const progressPercent = Math.round(((currentQuestionIndex + 1) / QUEST_QUESTIONS.length) * 100);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] font-['Quicksand'] text-zinc-900 dark:text-zinc-100 journey-gradient relative flex flex-col transition-colors duration-300">
      {/* Header bar shown on all screens except initial welcome state */}
      {currentScreen !== 'welcome' && (
        <Header
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
          progressPercent={progressPercent}
          respondentId={stats.respondentId}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}

      {/* Main Screen Container with padding below header */}
      <main className={`flex-1 w-full ${currentScreen !== 'welcome' ? 'pt-24' : ''}`}>
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onStart={() => setCurrentScreen('minigame')}
          />
        )}

        {currentScreen === 'guidelines' && (
          <GuidelinesScreen
            onReady={() => setCurrentScreen('profile')}
          />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen
            respondentId={stats.respondentId}
            onComplete={() => setCurrentScreen('missions')}
          />
        )}

        {currentScreen === 'missions' && (
          <MissionsScreen
            onComplete={() => setCurrentScreen('game2')}
          />
        )}

        {currentScreen === 'game2' && (
          <BeatCravingGame
            onComplete={() => setCurrentScreen('assessment_intro')}
          />
        )}

        {currentScreen === 'assessment_intro' && (
          <AssessmentIntroScreen
            onStart={() => setCurrentScreen('assessment')}
          />
        )}

        {currentScreen === 'minigame' && (
          <MiniGameScreen
            onComplete={() => setCurrentScreen('guidelines')}
          />
        )}

        {currentScreen === 'assessment' && (
          <AssessmentScreen
            questions={QUEST_QUESTIONS}
            currentQuestionIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
            answers={answers}
            onNext={handleNextQuestion}
            onPrev={handlePrevQuestion}
            onCompleteQuest={() => setCurrentScreen('micro_break')}
          />
        )}

        {currentScreen === 'micro_break' && (
          <MicroBreakScreen
            onReady={() => setCurrentScreen('self_efficacy')}
          />
        )}

        {currentScreen === 'self_efficacy' && (
          <SelfEfficacyScreen
            onComplete={handleSaveAssessment}
          />
        )}

        {currentScreen === 'snapshot' && (
          <SnapshotScreen
            stats={stats}
            onProceed={() => {
              setXp((prev) => prev + 50); // Give the XP that IntelScreen used to give
              setCurrentScreen('action_plan');
            }}
            onRetakeQuest={() => {
              setCurrentQuestionIndex(0);
              setCurrentScreen('assessment');
            }}
          />
        )}

        {currentScreen === 'action_plan' && (
          <ActionPlanScreen
            stats={stats}
            onSavePlan={handleSavePlan}
          />
        )}
      </main>
    </div>
  );
}
