import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { FindAllParameters, TaskDto, TaskRouteParameters } from './task.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Post()
    async create(@Body() task: TaskDto): Promise<TaskDto> {
        return await this.taskService.create(task);
    }

    @Get('/:id')
    findById(@Param('id') id: string) {
        return this.taskService.findById(id);
    }

    @Get()
    async findAll(@Query() params: FindAllParameters): Promise<TaskDto[]> {
        return await this.taskService.findAll(params);
    }

    @Put('/:id')
    async update(@Param() params: TaskRouteParameters, @Body() task: TaskDto) {
        await this.taskService.update(params.id, task);
    }

    @Delete('/:id')
    remove(@Param() params: TaskRouteParameters) {
        return this.taskService.remove(params.id);
    }
}
