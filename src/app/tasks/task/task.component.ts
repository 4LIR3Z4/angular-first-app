import { Component, input, output } from '@angular/core';
import { task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<task>();
  complete = output<string>();
  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
