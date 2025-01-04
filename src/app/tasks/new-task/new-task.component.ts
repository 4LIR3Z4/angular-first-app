import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  NewTaskClose_Clicked() {
    this.hasUserClickedOnCloseButton.emit(true);
  }
  hasUserClickedOnCloseButton = output<boolean>();
}
