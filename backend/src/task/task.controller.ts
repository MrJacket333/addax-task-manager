import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { UpdateTaskDto } from './dto/UpdateTaskDto';
import { TaskDto } from './dto/TaskDto';
import { UpdateTaskOrderDto } from './dto/UpdateTaskOrderDto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<TaskDto> {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<TaskDto[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TaskDto> {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskDto> {
    return this.taskService.update(id, updateTaskDto);
  }

  @Post('order/:id')
  async updateTaskOrder(
    @Param('id') id: string,
    @Body() updateTaskOrderDto: UpdateTaskOrderDto,
  ) {
    return this.taskService.updateTaskOrder(id, updateTaskOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.taskService.remove(id);
  }
}
