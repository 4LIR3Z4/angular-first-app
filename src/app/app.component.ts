import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  users = DUMMY_USERS;
  selectedUserId?: string;
  get selectedUser() {
    const temp = this.users.find((user) => user.id === this.selectedUserId);
      return temp;

  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user ID:', id);
  }
}
