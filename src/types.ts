export type ScreenMode = 'welcome' | 'guidelines' | 'minigame' | 'profile' | 'missions' | 'game2' | 'assessment_intro' | 'assessment' | 'micro_break' | 'snapshot' | 'self_efficacy' | 'intel' | 'action_plan';

export interface Question {
  id: number;
  category: 'Support Seeking' | 'Reflective Coping' | 'Strategic Coping' | 'Proactive Coping' | 'Avoidance Coping' | 'Preventive Coping';
  text: string;
  icon: string;
}

export type EmojiValue = 1 | 2 | 3 | 4;

export interface AssessmentAnswers {
  [questionId: number]: EmojiValue;
}

export interface UserStats {
  respondentId: string;
  xp: number;
  level: number;
  copingStrength: 'Developing' | 'Moderate' | 'Strong' | 'Growing';
  confidenceLevel: 'Growing' | 'Moderate' | 'Strong';
  supportSeekingScore: number;
  reflectiveCopingScore: number;
  strategicCopingScore: number;
  proactiveCopingScore: number;
  avoidanceCopingScore: number;
  preventiveCopingScore: number;
}
