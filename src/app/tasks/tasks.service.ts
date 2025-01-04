import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask } from './new-task/newTask.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {}

  GetUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  AddTask(newTask: NewTask, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
      userId: userId,
    });
  }
  RemoveTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
