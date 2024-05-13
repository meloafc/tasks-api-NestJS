import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    findAll(): TaskDto[] {
        return this.taskService.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id: string): TaskDto {
        return this.taskService.findById(id);
    }

    @Post()
    create(@Body() task: TaskDto) {
        this.taskService.create(task);
    }

    @Put()
    update(@Body() task: TaskDto) {
        this.taskService.update(task);
    }

    @Delete('/:id')
    remove(@Param('id') id: string) {
        this.taskService.remove(id);
    }
}
