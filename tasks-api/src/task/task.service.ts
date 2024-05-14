import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskDto, TaskStatusEnum } from './task.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {

    private tasks: TaskDto[] = [];

    findAll(): TaskDto[] {
        return this.tasks;
    }

    findById(id: string): TaskDto {
        const foundTask = this.tasks.filter(t => t.id === id);

        if (foundTask.length) {
            return foundTask[0];
        } else {
            throw new HttpException(`Task with id ${id} not found.`, HttpStatus.NOT_FOUND);
        }
    }

    create(task: TaskDto) {
        task.id = uuid();
        task.status = TaskStatusEnum.TO_DO;
        this.tasks.push(task);
    }

    update(task: TaskDto) {
        const taskIndex = this.tasks.findIndex(t => t.id === task.id);

        if (taskIndex >= 0) {
            this.tasks[taskIndex] = task;
        } else {
            throw new HttpException(`Task with id ${task.id} not found.`, HttpStatus.BAD_REQUEST);
        }
    }

    remove(id: string) {
        const taskIndex = this.tasks.findIndex(t => t.id === id);
        if (taskIndex >= 0) {
            this.tasks.splice(taskIndex, 1);
        } else {
            throw new HttpException(`Task with id ${id} not found.`, HttpStatus.BAD_REQUEST);
        }
    }
}
