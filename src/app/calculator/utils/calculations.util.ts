export interface SectionScores {
  [key: string]: number;
}

export enum ScoreThreshold {
  Excellent = 80,
  Good = 60
}

export const calculateTotalScore = (scores: SectionScores): number => {
  return Object.values(scores).reduce((total, score) => total + score, 0);
};

export const getScoreClass = (score: number): string => {
  if (score >= ScoreThreshold.Excellent) return 'excellent';
  if (score >= ScoreThreshold.Good) return 'good';
  return 'needs-improvement';
}; 