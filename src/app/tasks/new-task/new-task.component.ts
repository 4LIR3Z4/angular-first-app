import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './newTask.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  hasUserClickedOnCloseButton = output<boolean>();
  newTaskSubmitedData = output<NewTask>();

  NewTaskForm_Submitted() {
    const newTask: NewTask = {
      title: this.newTaskTitle(),
      summary: this.newTaskSummary(),
      date: this.newTaskDate(),
    };
    this.newTaskSubmitedData.emit(newTask);
  }
  NewTaskClose_Clicked() {
    this.hasUserClickedOnCloseButton.emit(true);
  }
  newTaskTitle = signal('');
  newTaskSummary = signal('');
  newTaskDate = signal('');
}
