import {
  Component,
  signal,
  computed,
  input,
  Output,
  output,
  EventEmitter,
} from '@angular/core';
import { User } from './user.model';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // @Output() select = new EventEmitter<string> ();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  user = input.required<User>();
  selected = input.required<boolean>();
  imagePath = computed(() => 'users/' + this.user().avatar);
  select = output<string>();
  onSelectUser() {
    // this.selectedUser.set(DUMMY_USERS[0]);
    this.select.emit(this.user().id);
  }
}
