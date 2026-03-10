import type { TaskPriority } from "@/types/global.types";

export const Priorities = ['low', 'medium', 'high'];

export const PRIORITY_COLORS: Record<TaskPriority, string> = {
  low: 'grey',
  medium: 'green',
  high: 'red',
};