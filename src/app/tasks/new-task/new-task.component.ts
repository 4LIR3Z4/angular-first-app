import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './newTask.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  hasUserClickedOnCloseButton = output<boolean>();
  userId = input.required<string>();
  constructor(private tasksService: TasksService) {}

  NewTaskForm_Submitted() {
    const newTask: NewTask = {
      title: this.newTaskTitle(),
      summary: this.newTaskSummary(),
      date: this.newTaskDate(),
    };
    this.tasksService.AddTask(newTask, this.userId());
    this.hasUserClickedOnCloseButton.emit(true);
  }
  NewTaskClose_Clicked() {
    this.hasUserClickedOnCloseButton.emit(true);
  }
  newTaskTitle = signal('');
  newTaskSummary = signal('');
  newTaskDate = signal('');
}
