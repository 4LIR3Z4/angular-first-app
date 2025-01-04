import { Component, input, output } from '@angular/core';
import { task } from './task.model';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
