import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import type { Priority } from '../Task.types';

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  priority: Priority;

  @Prop({ required: false })
  index?: number;

  @Prop()
  taskBefore: string;

  @Prop()
  taskAfter: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
