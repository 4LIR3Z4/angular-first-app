import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/newTask.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  userId = input.required<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTrasks() {
    return this.tasksService.GetUserTasks(this.userId());
  }
  onUserClosedNewTaskDialog($event: boolean) {
    this.isAddingTask = false;
  }

  AddNewTask() {
    this.isAddingTask = true;
  }
}
