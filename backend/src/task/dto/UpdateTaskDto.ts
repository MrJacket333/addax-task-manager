import { Priority } from '../Task.types';

export class UpdateTaskDto {
  description?: string;
  priority?: Priority;
  index?: number;
  taskBefore?: string;
  taskAfter?: string;
}
