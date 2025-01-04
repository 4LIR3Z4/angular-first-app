import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/newTask.model';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  
  tasks = DUMMY_TASKS;
  name = input.required<string>();
  userId = input.required<string>();
  isAddingTask = false;
  get selectedUserTrasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }
  onNewTaskSubmitedData(newTask: NewTask) {
    this.tasks.unshift({
      id: Math.random().toString(),
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
      userId: this.userId(),
    });
    this.isAddingTask = false;
  }
  onUserClosedNewTaskDialog($event: boolean) {
    this.isAddingTask = false;
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  AddNewTask() {
    this.isAddingTask = true;
  }
}
