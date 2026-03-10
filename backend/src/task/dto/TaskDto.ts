import { Priority } from '../Task.types';

export class TaskDto {
  _id: string;
  description: string;
  priority: Priority;
  taskBefore: string;
  taskAfter: string;
}
