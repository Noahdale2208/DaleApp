export type TaskDifficulty = 'easy' | 'medium' | 'hard';
export type RecurrenceType = 'none' | 'daily' | 'weekly' | 'monthly';

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: string; // ISO string YYYY-MM-DD
  dueTime?: string; // HH:mm format
  difficulty: TaskDifficulty;
  category?: string;
  completed: boolean;
  completedAt?: string; // ISO string
  createdAt: string;
  recurrence: RecurrenceType;
  addToCalendar: boolean;
}

export interface TasksState {
  tasks: Task[];
  completedTasksToday: number;
}
