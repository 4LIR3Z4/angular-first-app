import { Component, input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  
  constructor(private tasksService: TasksService) {}
  onCompleteTask() {
    this.tasksService.RemoveTask(this.task().id);
  }
}
