export interface SelfEfficacyQuestion {
  id: number;
  category: 'Internal Stimuli' | 'External Stimuli';
  text: string;
}

export const SELF_EFFICACY_QUESTIONS: SelfEfficacyQuestion[] = [
  // Internal Stimuli
  {
    id: 1,
    category: 'Internal Stimuli',
    text: "When I feel nervous"
  },
  {
    id: 2,
    category: 'Internal Stimuli',
    text: "When I feel depressed"
  },
  {
    id: 3,
    category: 'Internal Stimuli',
    text: "When I am angry"
  },
  {
    id: 4,
    category: 'Internal Stimuli',
    text: "When I feel very anxious"
  },
  {
    id: 5,
    category: 'Internal Stimuli',
    text: "When I want to think about a difficult problem"
  },
  {
    id: 6,
    category: 'Internal Stimuli',
    text: "When I feel the urge to smoke."
  },

  // External Stimuli
  {
    id: 7,
    category: 'External Stimuli',
    text: "When having a drink with friends"
  },
  {
    id: 8,
    category: 'External Stimuli',
    text: "When celebrating something"
  },
  {
    id: 9,
    category: 'External Stimuli',
    text: "When drinking beer, wine or other spirits"
  },
  {
    id: 10,
    category: 'External Stimuli',
    text: "When I am with smokers"
  },
  {
    id: 11,
    category: 'External Stimuli',
    text: "After a meal"
  },
  {
    id: 12,
    category: 'External Stimuli',
    text: "When having coffee or tea"
  }
];
