import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

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
