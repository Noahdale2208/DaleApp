export type CharacterMood = 'sad' | 'neutral' | 'happy' | 'excited';

export interface UserProgress {
  xp: number;
  level: number;
  totalCompletedTasks: number;
  completedTasksToday: number;
  streak: number;
  lastCompletionDate?: string; // ISO string
  characterMood: CharacterMood;
  characterSize: number;
  characterColor?: string;
}

export interface UserProgressState extends UserProgress {
  lastUpdated: string;
}
