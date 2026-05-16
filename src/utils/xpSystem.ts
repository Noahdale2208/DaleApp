import { TaskDifficulty } from '@types/Task';
import { UserProgress } from '@types/UserProgress';

const XP_BY_DIFFICULTY: Record<TaskDifficulty, number> = {
  easy: 10,
  medium: 25,
  hard: 50,
};

const XP_PER_LEVEL = 100;
const MAX_LEVEL = 50;

/**
 * Calculate XP reward based on task difficulty
 */
export const getXPReward = (difficulty: TaskDifficulty): number => {
  return XP_BY_DIFFICULTY[difficulty];
};

/**
 * Calculate level based on total XP
 */
export const calculateLevel = (totalXP: number): number => {
  const level = Math.floor(totalXP / XP_PER_LEVEL) + 1;
  return Math.min(level, MAX_LEVEL);
};

/**
 * Get XP needed for next level
 */
export const getXPForNextLevel = (currentXP: number): number => {
  const currentLevel = calculateLevel(currentXP);
  const xpForCurrentLevel = (currentLevel - 1) * XP_PER_LEVEL;
  const xpForNextLevel = currentLevel * XP_PER_LEVEL;
  return xpForNextLevel - currentXP;
};

/**
 * Get progress percentage to next level (0-100)
 */
export const getLevelProgressPercentage = (currentXP: number): number => {
  const currentLevel = calculateLevel(currentXP);
  const xpForCurrentLevel = (currentLevel - 1) * XP_PER_LEVEL;
  const xpInCurrentLevel = currentXP - xpForCurrentLevel;
  const progress = (xpInCurrentLevel / XP_PER_LEVEL) * 100;
  return Math.min(progress, 100);
};

/**
 * Add XP to user progress
 */
export const addXP = (progress: UserProgress, xpAmount: number): UserProgress => {
  const newXP = progress.xp + xpAmount;
  const newLevel = calculateLevel(newXP);

  return {
    ...progress,
    xp: newXP,
    level: newLevel,
  };
};
