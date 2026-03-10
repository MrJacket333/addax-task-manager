import { Priority } from '../Task.types';

export class CreateTaskDto {
  description: string;
  priority: Priority;
  index?: number;
  taskBefore?: string;
  taskAfter?: string;
}
