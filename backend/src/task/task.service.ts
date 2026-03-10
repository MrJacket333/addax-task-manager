import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Task, TaskDocument } from './schema/Task.schema';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { UpdateTaskDto } from './dto/UpdateTaskDto';
import { TaskDto } from './dto/TaskDto';
import { UpdateTaskOrderDto } from './dto/UpdateTaskOrderDto';
import { TaskOrderDto } from './dto/TaskOrderDto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<TaskDto> {
    const createdTask = new this.taskModel(createTaskDto);
    const savedTask = await createdTask.save();
    return this.mapToTaskDto(savedTask);
  }

  async findAll(): Promise<TaskDto[]> {
    const tasks = await this.taskModel.find().exec();
    return tasks.map((task) => this.mapToTaskDto(task));
  }

  async findOne(id: string): Promise<TaskDto> {
    const task = await this.taskModel.findById(id).exec();
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return this.mapToTaskDto(task);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<TaskDto> {
    const updatedTask = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true })
      .exec();
    if (!updatedTask) {
      throw new Error(`Task with id ${id} not found`);
    }
    return this.mapToTaskDto(updatedTask);
  }

  async updateTaskOrder(
    id: string,
    updateTaskOrderDto: UpdateTaskOrderDto,
  ): Promise<TaskOrderDto[]> {
    const session = await this.connection.startSession();
    session.startTransaction();
    const results: (TaskDocument | null)[] = [];
    try {
      await session.withTransaction(async () => {
        const updateTaskOrderQuery = this.taskModel
          .findByIdAndUpdate(id, updateTaskOrderDto, { new: true })
          .exec();

        const updatePrevTaskOrderQuery = this.taskModel
          .findByIdAndUpdate(
            updateTaskOrderDto.taskBefore,
            { taskAfter: id },
            { new: true },
          )
          .exec();

        const updateNextTaskOrderQuery = this.taskModel
          .findByIdAndUpdate(
            updateTaskOrderDto.taskAfter,
            { taskBefore: id },
            { new: true },
          )
          .exec();
        const [task, prevTask, nextTask] = await Promise.all([
          updateTaskOrderQuery,
          updatePrevTaskOrderQuery,
          updateNextTaskOrderQuery,
        ]);

        results.push(task, prevTask, nextTask);
      });
    } catch (error) {
      await session.abortTransaction();
      throw new Error(
        `Transaction failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    } finally {
      await session.endSession();
    }

    return results
      .filter((task): task is TaskDocument => task !== null)
      .map((task) => this.mapToTaskOrderDto(task));
  }

  async remove(id: string): Promise<void> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id).exec();
    if (!deletedTask) {
      throw new Error(`Task with id ${id} not found`);
    }
  }

  private mapToTaskDto(task: TaskDocument): TaskDto {
    return {
      _id: task._id.toString(),
      description: task.description,
      priority: task.priority,
      taskBefore: task.taskBefore,
      taskAfter: task.taskAfter,
    };
  }

  private mapToTaskOrderDto(task: TaskDocument): TaskOrderDto {
    return {
      _id: task._id.toString(),
      taskBefore: task.taskBefore,
      taskAfter: task.taskAfter,
    };
  }
}
