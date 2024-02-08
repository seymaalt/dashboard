import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  newUser: User = {
    id: 1, // Assuming your backend handles ID assignment
    name: '',
    email: '',
    phone: '',
    age: 1,
    post: '',
    joiningDate: '',
    salary: ''
  };
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() userAddedEvent = new EventEmitter<void>(); // Event emitter for indicating user addition

  constructor(private userService: UserService) {}

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe(user => {
      console.log('User added', user);
      this.newUser = {id: 1, name: '', email: '', phone: '', age: 1, post: '', joiningDate: '', salary: ''}; // Reset form
      this.userAddedEvent.emit(); // Emit event indicating user addition
      this.closeModal();
    });
  }

  closeModal() {
    this.closeModalEvent.emit(false);
  }
}
